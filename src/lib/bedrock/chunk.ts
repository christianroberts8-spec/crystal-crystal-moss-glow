import {
  TAG,
  byte,
  compound,
  encodeNbt,
  decodeNbt,
  str,
  type NbtCompound,
  type NbtValue,
} from "./nbt";
import { keyToHex, type KvMap } from "./leveldb";
import { BLOCK_BY_ID, BLOCK_BY_NAME, AIR, WATER } from "../world/blocks";
import { biomeByBedrockId, BIOMES } from "../world/biomes";

export const MIN_Y = -64;
export const MAX_Y = 320;
export const SUBCHUNK_MIN = -4;
export const SUBCHUNK_MAX = 20; // inclusive, 25 sections
export const SEA_LEVEL = 63;
export const CHUNK_VERSION = 40;

export const TAG_DATA3D = 0x2b;
export const TAG_VERSION = 0x2c;
export const TAG_DATA2D = 0x2d;
export const TAG_SUBCHUNK = 0x2f;
export const TAG_BLOCK_ENTITY = 0x31;
export const TAG_ENTITY = 0x32;
export const TAG_FINALIZED = 0x36;

export function chunkKey(cx: number, cz: number, tag: number, subY?: number): Uint8Array {
  const dim = 0; // overworld omits dimension
  const extra = subY !== undefined ? 1 : 0;
  const buf = new Uint8Array(8 + 1 + extra);
  const view = new DataView(buf.buffer);
  view.setInt32(0, cx | 0, true);
  view.setInt32(4, cz | 0, true);
  buf[8] = tag;
  if (subY !== undefined) buf[9] = subY & 0xff;
  void dim;
  return buf;
}

export function parseChunkKey(key: Uint8Array): {
  cx: number;
  cz: number;
  dim: number;
  tag: number;
  subY?: number;
} | null {
  if (key.length !== 9 && key.length !== 10 && key.length !== 13 && key.length !== 14) return null;
  const view = new DataView(key.buffer, key.byteOffset, key.byteLength);
  const cx = view.getInt32(0, true);
  const cz = view.getInt32(4, true);
  if (key.length === 9 || key.length === 10) {
    const tag = key[8]!;
    const subY = key.length === 10 ? (key[9]! << 24) >> 24 : undefined;
    return { cx, cz, dim: 0, tag, subY };
  }
  const dim = view.getInt32(8, true);
  const tag = key[12]!;
  const subY = key.length === 14 ? (key[13]! << 24) >> 24 : undefined;
  return { cx, cz, dim, tag, subY };
}

function bitsForPalette(size: number): number {
  if (size <= 1) return 1;
  let bits = 1;
  while (1 << bits < size) bits++;
  if (bits === 7) return 8;
  if (bits > 8 && bits < 16) return 16;
  if (bits > 16) return 16;
  return bits;
}

function blocksPerWord(bits: number): number {
  return Math.floor(32 / bits);
}

function encodePaletteStorage(indices: Uint16Array, paletteNbt: Uint8Array[]): Uint8Array {
  const bits = bitsForPalette(paletteNbt.length);
  const bpw = blocksPerWord(bits);
  const wordCount = Math.ceil(4096 / bpw);
  const words = new Uint32Array(wordCount);
  const mask = (1 << bits) - 1;
  for (let i = 0; i < 4096; i++) {
    const w = Math.floor(i / bpw);
    const off = (i % bpw) * bits;
    words[w] = (words[w]! | ((indices[i]! & mask) << off)) >>> 0;
  }
  const header = bits << 1; // persistent (bit 0 = 0)
  const out = new Uint8Array(1 + wordCount * 4 + 4 + paletteNbt.reduce((n, p) => n + p.length, 0));
  out[0] = header;
  const view = new DataView(out.buffer);
  let o = 1;
  for (let i = 0; i < wordCount; i++) {
    view.setUint32(o, words[i]!, true);
    o += 4;
  }
  view.setInt32(o, paletteNbt.length, true);
  o += 4;
  for (const p of paletteNbt) {
    out.set(p, o);
    o += p.length;
  }
  return out.subarray(0, o);
}

function encodeBlockNbt(name: string, states?: Record<string, string | number | boolean>): Uint8Array {
  const stateComp: NbtCompound = {};
  if (states) {
    for (const [k, v] of Object.entries(states)) {
      if (typeof v === "string") stateComp[k] = str(v);
      else if (typeof v === "boolean") stateComp[k] = byte(v ? 1 : 0);
      else stateComp[k] = { type: TAG.Int, value: v | 0 };
    }
  }
  // Palette entries are named compounds with empty name
  return encodeNbt({
    name: str(name),
    states: { type: TAG.Compound, value: stateComp },
  });
}

export function encodeSubchunk(blocks: Uint16Array, palette: { name: string; states?: Record<string, string | number | boolean> }[], subY: number): Uint8Array {
  const nbtPal = palette.map((p) => encodeBlockNbt(p.name, p.states));
  const storage = encodePaletteStorage(blocks, nbtPal);
  const out = new Uint8Array(3 + storage.length);
  out[0] = 9; // version 9
  out[1] = 1; // one storage layer
  out[2] = subY & 0xff;
  out.set(storage, 3);
  return out;
}

function encodeBiomeSection(biomeIds: Int32Array): Uint8Array {
  let uniform = true;
  const first = biomeIds[0]!;
  for (let i = 1; i < 4096; i++) {
    if (biomeIds[i] !== first) {
      uniform = false;
      break;
    }
  }
  if (uniform) {
    const out = new Uint8Array(5);
    out[0] = 0; // 0 bits
    new DataView(out.buffer).setInt32(1, first, true);
    return out;
  }
  const unique: number[] = [];
  const indexOf = new Map<number, number>();
  const indices = new Uint16Array(4096);
  for (let i = 0; i < 4096; i++) {
    const id = biomeIds[i]!;
    let idx = indexOf.get(id);
    if (idx === undefined) {
      idx = unique.length;
      indexOf.set(id, idx);
      unique.push(id);
    }
    indices[i] = idx;
  }
  const bits = bitsForPalette(unique.length);
  const bpw = blocksPerWord(bits);
  const wordCount = Math.ceil(4096 / bpw);
  const words = new Uint32Array(wordCount);
  const mask = (1 << bits) - 1;
  for (let i = 0; i < 4096; i++) {
    const w = Math.floor(i / bpw);
    const off = (i % bpw) * bits;
    words[w] = (words[w]! | ((indices[i]! & mask) << off)) >>> 0;
  }
  const out = new Uint8Array(1 + wordCount * 4 + 4 + unique.length * 4);
  out[0] = bits << 1;
  const view = new DataView(out.buffer);
  let o = 1;
  for (let i = 0; i < wordCount; i++) {
    view.setUint32(o, words[i]!, true);
    o += 4;
  }
  view.setInt32(o, unique.length, true);
  o += 4;
  for (const id of unique) {
    view.setInt32(o, id, true);
    o += 4;
  }
  return out;
}

export function encodeData3D(heightmap: Uint16Array, biomeAtY: (subY: number, x: number, z: number, ly: number) => number): Uint8Array {
  const parts: Uint8Array[] = [];
  const hm = new Uint8Array(512);
  const hv = new DataView(hm.buffer);
  for (let i = 0; i < 256; i++) hv.setUint16(i * 2, heightmap[i] ?? 0, true);
  parts.push(hm);
  for (let subY = SUBCHUNK_MIN; subY <= SUBCHUNK_MAX; subY++) {
    const ids = new Int32Array(4096);
    for (let y = 0; y < 16; y++) {
      for (let z = 0; z < 16; z++) {
        for (let x = 0; x < 16; x++) {
          const idx = x + (z << 4) + (y << 8);
          ids[idx] = biomeAtY(subY, x, z, y);
        }
      }
    }
    parts.push(encodeBiomeSection(ids));
  }
  let n = 0;
  for (const p of parts) n += p.length;
  const out = new Uint8Array(n);
  let o = 0;
  for (const p of parts) {
    out.set(p, o);
    o += p.length;
  }
  return out;
}

export interface ColumnSample {
  height: number;
  biomeBedrockId: number;
  topName: string;
}

export function writeChunkRecords(
  map: KvMap,
  cx: number,
  cz: number,
  getBlock: (x: number, y: number, z: number) => { name: string; states?: Record<string, string | number | boolean> },
  getBiome: (x: number, z: number) => number,
  heightOf: (x: number, z: number) => number,
): void {
  map.set(keyToHex(chunkKey(cx, cz, TAG_VERSION)), new Uint8Array([CHUNK_VERSION]));
  const fin = new Uint8Array(4);
  new DataView(fin.buffer).setInt32(0, 2, true);
  map.set(keyToHex(chunkKey(cx, cz, TAG_FINALIZED)), fin);

  const heightmap = new Uint16Array(256);
  for (let z = 0; z < 16; z++) {
    for (let x = 0; x < 16; x++) {
      const h = heightOf(x, z);
      heightmap[x + z * 16] = Math.max(0, Math.min(65535, h + 1));
    }
  }
  const data3d = encodeData3D(heightmap, (_subY, x, z) => getBiome(x, z));
  map.set(keyToHex(chunkKey(cx, cz, TAG_DATA3D)), data3d);

  for (let subY = SUBCHUNK_MIN; subY <= SUBCHUNK_MAX; subY++) {
    const y0 = subY * 16;
    const y1 = y0 + 16;
    const palMap = new Map<string, number>();
    const pal: { name: string; states?: Record<string, string | number | boolean> }[] = [];
    const indices = new Uint16Array(4096);
    let anyNonAir = false;
    for (let y = y0; y < y1; y++) {
      for (let z = 0; z < 16; z++) {
        for (let x = 0; x < 16; x++) {
          const b = getBlock(x, y, z);
          const key = b.name + "|" + JSON.stringify(b.states ?? {});
          let idx = palMap.get(key);
          if (idx === undefined) {
            idx = pal.length;
            palMap.set(key, idx);
            pal.push(b);
          }
          const li = x + (z << 4) + ((y - y0) << 8);
          indices[li] = idx;
          if (b.name !== "minecraft:air") anyNonAir = true;
        }
      }
    }
    if (!anyNonAir) continue;
    const encoded = encodeSubchunk(indices, pal, subY);
    map.set(keyToHex(chunkKey(cx, cz, TAG_SUBCHUNK, subY)), encoded);
  }
}

/* ---------------- decode (import) ---------------- */

function decodePaletteStorage(
  buf: Uint8Array,
  offset: number,
): { names: string[]; indices: Uint16Array; offset: number } | null {
  if (offset >= buf.length) return null;
  const header = buf[offset]!;
  const bits = header >> 1;
  let o = offset + 1;
  const indices = new Uint16Array(4096);
  if (bits === 0) {
    // single value — treat as all zeros, palette of 1 read after
    const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
    // 0-bit for blocks is rare; still consume a palette
    if (o + 4 > buf.length) return null;
    const count = view.getInt32(o, true);
    o += 4;
    const names: string[] = [];
    for (let i = 0; i < count && i < 1024; i++) {
      try {
        const slice = buf.subarray(o);
        const decoded = decodeNbt(slice);
        names.push(nbtName(decoded.value));
        const size = nbtSize(slice);
        o += size;
      } catch {
        break;
      }
    }
    return { names, indices, offset: o };
  }
  const bpw = blocksPerWord(bits);
  const wordCount = Math.ceil(4096 / bpw);
  if (o + wordCount * 4 + 4 > buf.length) return null;
  const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  const words = new Uint32Array(wordCount);
  for (let i = 0; i < wordCount; i++) {
    words[i] = view.getUint32(o, true);
    o += 4;
  }
  const mask = (1 << bits) - 1;
  for (let i = 0; i < 4096; i++) {
    const w = Math.floor(i / bpw);
    const off = (i % bpw) * bits;
    indices[i] = (words[w]! >>> off) & mask;
  }
  const count = view.getInt32(o, true);
  o += 4;
  const names: string[] = [];
  for (let i = 0; i < count && i < 4096; i++) {
    try {
      const slice = buf.subarray(o);
      const decoded = decodeNbt(slice);
      names.push(nbtName(decoded.value));
      o += nbtSize(slice);
    } catch {
      break;
    }
  }
  return { names, indices, offset: o };
}

function nbtName(c: NbtCompound): string {
  const n = c.name;
  if (n && n.type === TAG.String) return n.value;
  return "minecraft:air";
}

function nbtSize(buf: Uint8Array): number {
  // Walk a single named tag to know its byte length
  const r = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  if (buf.length < 3) return buf.length;
  const type = buf[0]!;
  if (type === 0) return 1;
  const nameLen = r.getUint16(1, true);
  let o = 3 + nameLen;
  o = skipPayload(buf, o, type);
  return o;
}

function skipPayload(buf: Uint8Array, o: number, type: number): number {
  const r = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  switch (type) {
    case 1:
      return o + 1;
    case 2:
      return o + 2;
    case 3:
    case 5:
      return o + 4;
    case 4:
    case 6:
      return o + 8;
    case 7: {
      const n = r.getInt32(o, true);
      return o + 4 + n;
    }
    case 8: {
      const n = r.getUint16(o, true);
      return o + 2 + n;
    }
    case 9: {
      const lt = buf[o]!;
      const n = r.getInt32(o + 1, true);
      o += 5;
      for (let i = 0; i < n; i++) o = skipPayload(buf, o, lt);
      return o;
    }
    case 10: {
      for (;;) {
        const t = buf[o]!;
        if (t === 0) return o + 1;
        const nl = r.getUint16(o + 1, true);
        o = skipPayload(buf, o + 3 + nl, t);
      }
    }
    case 11: {
      const n = r.getInt32(o, true);
      return o + 4 + n * 4;
    }
    case 12: {
      const n = r.getInt32(o, true);
      return o + 4 + n * 8;
    }
    default:
      return o;
  }
}

export interface DecodedChunk {
  cx: number;
  cz: number;
  /** height per local x+z*16 */
  height: Int16Array;
  biome: Uint8Array;
  surfaceBlock: Uint8Array;
  water: Uint8Array;
}

export function decodeSubchunkBlocks(buf: Uint8Array): { names: string[]; indices: Uint16Array } | null {
  if (buf.length < 3) return null;
  const version = buf[0]!;
  let o = 1;
  let storages = 1;
  if (version === 8 || version === 9) {
    storages = buf[o++]!;
    if (version === 9) o += 1; // subY
  } else if (version === 1) {
    // legacy, skip
    return null;
  }
  const storage = decodePaletteStorage(buf, o);
  if (!storage) return null;
  void storages;
  return { names: storage.names, indices: storage.indices };
}

export function decodeData3D(buf: Uint8Array): { height: Uint16Array; biome: Int32Array } | null {
  if (buf.length < 512) return null;
  const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  const height = new Uint16Array(256);
  for (let i = 0; i < 256; i++) height[i] = view.getUint16(i * 2, true);
  // Read first biome section only for 2D editor (surface biome)
  let o = 512;
  const biome = new Int32Array(256);
  const section = decodeBiomeSection(buf, o);
  if (section) {
    for (let z = 0; z < 16; z++) {
      for (let x = 0; x < 16; x++) {
        // y=0 of this section — use that id
        const idx = x + (z << 4);
        biome[idx] = section.ids[idx] ?? 1;
      }
    }
  }
  return { height, biome };
}

function decodeBiomeSection(buf: Uint8Array, offset: number): { ids: Int32Array; offset: number } | null {
  if (offset >= buf.length) return null;
  const header = buf[offset]!;
  const bits = header >> 1;
  const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  const ids = new Int32Array(4096);
  if (bits === 0) {
    if (offset + 5 > buf.length) return null;
    const id = view.getInt32(offset + 1, true);
    ids.fill(id);
    return { ids, offset: offset + 5 };
  }
  const bpw = blocksPerWord(bits);
  const wordCount = Math.ceil(4096 / bpw);
  let o = offset + 1;
  if (o + wordCount * 4 + 4 > buf.length) return null;
  const words = new Uint32Array(wordCount);
  for (let i = 0; i < wordCount; i++) {
    words[i] = view.getUint32(o, true);
    o += 4;
  }
  const count = view.getInt32(o, true);
  o += 4;
  const pal = new Int32Array(Math.max(0, count));
  for (let i = 0; i < count && o + 4 <= buf.length; i++) {
    pal[i] = view.getInt32(o, true);
    o += 4;
  }
  const mask = (1 << bits) - 1;
  for (let i = 0; i < 4096; i++) {
    const w = Math.floor(i / bpw);
    const off = (i % bpw) * bits;
    const idx = (words[w]! >>> off) & mask;
    ids[i] = pal[idx] ?? 1;
  }
  return { ids, offset: o };
}

export function nameToEditorBlock(name: string): number {
  const def = BLOCK_BY_NAME.get(name);
  return def ? def.id : 2;
}

export function bedrockBiomeToEditor(id: number): number {
  const def = biomeByBedrockId(id);
  return def.id;
}

export function editorBiomeToBedrock(id: number): number {
  return BIOMES[id]?.bedrockId ?? 1;
}

export function editorBlockToName(id: number): { name: string; states?: Record<string, string | number | boolean> } {
  const def = BLOCK_BY_ID[id];
  if (!def) return { name: "minecraft:stone" };
  const states = { ...(def.states ?? {}) };
  if (def.name === "minecraft:water" && states.liquid_depth === undefined) {
    states.liquid_depth = 0;
  }
  return { name: def.name, states: Object.keys(states).length ? states : undefined };
}

void WATER;
void AIR;
