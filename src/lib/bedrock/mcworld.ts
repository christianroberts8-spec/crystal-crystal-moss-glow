import JSZip from "jszip";
import {
  AIR,
  BEDROCK,
  BLOCK_BY_NAME,
  DEEPSLATE,
  DIRT,
  GRASS,
  SAND,
  STONE,
  WATER,
} from "../world/blocks";
import { BIOMES } from "../world/biomes";
import { columnBlock, idxOf, inBounds, localX, localZ, worldX, worldZ, SEA_LEVEL } from "../world/grid";
import { exportRegion, readColumn, stackColumn } from "../world/column";
import { buildOverlay, isCaveAt } from "../world/voxels";
import type { ImportMeta, WorldProject } from "../world/types";
import { createEmptyWorld } from "../world/grid";
import {
  TAG,
  byte,
  compound,
  encodeNbt,
  float,
  listOf,
  long,
  str,
  type NbtCompound,
} from "./nbt";
import { decodeLevelDat, encodeLevelDat } from "./leveldat";
import {
  hexToKey,
  keyToHex,
  putAscii,
  readLevelDb,
  writeLevelDb,
  type KvMap,
} from "./leveldb";
import {
  MIN_Y,
  TAG_DATA2D,
  TAG_DATA3D,
  TAG_ENTITY,
  TAG_SUBCHUNK,
  bedrockBiomeToEditor,
  decodeData3D,
  decodeSubchunkBlocks,
  editorBiomeToBedrock,
  editorBlockToName,
  nameToEditorBlock,
  parseChunkKey,
  writeChunkRecords,
} from "./chunk";

const te = new TextEncoder();
const td = new TextDecoder();

function bytesToB64(buf: Uint8Array): string {
  let s = "";
  const chunk = 0x8000;
  for (let i = 0; i < buf.length; i += chunk) {
    s += String.fromCharCode(...buf.subarray(i, i + chunk));
  }
  return btoa(s);
}

function b64ToBytes(s: string): Uint8Array {
  const bin = atob(s);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

export interface ImportResult {
  world: WorldProject;
  warnings: string[];
}

export async function importMcworld(file: Blob, fileName: string): Promise<ImportResult> {
  const warnings: string[] = [];
  const zip = await JSZip.loadAsync(file);
  const names = Object.keys(zip.files);

  const levelEntry = names.find((n) => n.replace(/\\/g, "/").endsWith("level.dat") && !n.includes("__MACOSX"));
  if (!levelEntry) {
    throw new Error("This archive has no level.dat — it is not a Minecraft Bedrock world.");
  }
  const prefix = levelEntry.includes("/") ? levelEntry.slice(0, levelEntry.lastIndexOf("/") + 1) : "";

  const levelBytes = await zip.file(levelEntry)!.async("uint8array");
  const decoded = decodeLevelDat(levelBytes);
  const settings = decoded.settings;

  const dbFiles: Record<string, Uint8Array> = {};
  const preservedFiles: Record<string, string> = {};
  const packs: string[] = [];
  for (const name of names) {
    const f = zip.files[name]!;
    if (f.dir) continue;
    const rel = name.startsWith(prefix) ? name.slice(prefix.length) : name;
    if (rel.startsWith("db/")) {
      const base = rel.slice(3);
      if (base && !base.endsWith("/")) dbFiles[base] = await f.async("uint8array");
    } else if (rel !== "level.dat" && rel !== "level.dat_old" && rel !== "levelname.txt") {
      const bytes = await f.async("uint8array");
      preservedFiles[rel] = bytesToB64(bytes);
      if (/behavior|resource|pack/i.test(rel)) packs.push(rel);
    }
  }

  const db = readLevelDb(dbFiles);
  warnings.push(...db.warnings);

  const chunkCoords: Array<{ cx: number; cz: number }> = [];
  const seen = new Set<string>();
  for (const hex of db.map.keys()) {
    const key = hexToKey(hex);
    const parsed = parseChunkKey(key);
    if (!parsed || parsed.dim !== 0) continue;
    const id = `${parsed.cx},${parsed.cz}`;
    if (seen.has(id)) continue;
    seen.add(id);
    chunkCoords.push({ cx: parsed.cx, cz: parsed.cz });
  }

  const MAX = 32; // 32 chunks = 512 blocks
  let originChunkX = Math.floor(settings.spawn.x / 16) - Math.floor(MAX / 2);
  let originChunkZ = Math.floor(settings.spawn.z / 16) - Math.floor(MAX / 2);
  if (chunkCoords.length) {
    const minX = Math.min(...chunkCoords.map((c) => c.cx));
    const maxX = Math.max(...chunkCoords.map((c) => c.cx));
    const minZ = Math.min(...chunkCoords.map((c) => c.cz));
    const maxZ = Math.max(...chunkCoords.map((c) => c.cz));
    const spanX = maxX - minX + 1;
    const spanZ = maxZ - minZ + 1;
    if (spanX <= MAX && spanZ <= MAX) {
      originChunkX = minX;
      originChunkZ = minZ;
    }
  }

  const widthChunks = MAX;
  const depthChunks = MAX;
  const width = widthChunks * 16;
  const depth = depthChunks * 16;
  const world = createEmptyWorld({
    name: settings.name,
    width,
    depth,
    seed: settings.seed,
    settings,
  });
  world.originX = originChunkX * 16;
  world.originZ = originChunkZ * 16;
  world.settings = settings;
  world.extraNbt = decoded.raw;

  let decodedChunks = 0;
  const endX = originChunkX + widthChunks;
  const endZ = originChunkZ + depthChunks;

  for (let cz = originChunkZ; cz < endZ; cz++) {
    for (let cx = originChunkX; cx < endX; cx++) {
      const subchunks: Array<{ subY: number; names: string[]; indices: Uint16Array }> = [];
      let heightmap: Uint16Array | null = null;
      let biomes: Int32Array | null = null;
      for (const [hex, value] of db.map) {
        const parsed = parseChunkKey(hexToKey(hex));
        if (!parsed || parsed.cx !== cx || parsed.cz !== cz || parsed.dim !== 0) continue;
        if (parsed.tag === TAG_DATA3D) {
          const d = decodeData3D(value);
          if (d) {
            heightmap = d.height;
            biomes = d.biome;
          }
        } else if (parsed.tag === TAG_DATA2D && !heightmap) {
          if (value.length >= 512) {
            heightmap = new Uint16Array(256);
            const view = new DataView(value.buffer, value.byteOffset, value.byteLength);
            for (let i = 0; i < 256; i++) heightmap[i] = view.getUint16(i * 2, true);
          }
        } else if (parsed.tag === TAG_SUBCHUNK && parsed.subY !== undefined) {
          const sc = decodeSubchunkBlocks(value);
          if (sc) subchunks.push({ subY: parsed.subY, ...sc });
        }
      }
      if (!heightmap && !subchunks.length) continue;
      decodedChunks++;
      for (let lz = 0; lz < 16; lz++) {
        for (let lx = 0; lx < 16; lx++) {
          const wx = cx * 16 + lx;
          const wz = cz * 16 + lz;
          const gx = wx - world.originX;
          const gz = wz - world.originZ;
          if (!inBounds(world, gx, gz)) continue;
          const i = idxOf(world, gx, gz);
          const col = lx + lz * 16;
          let h = heightmap ? heightmap[col]! : 64;
          if (h > 512) h = 64; // sanity
          if (h > 320) h = h - 64; // some heightmaps are offset
          // Scan top solid from subchunks when possible
          let topBlock = GRASS;
          let topY = h;
          if (subchunks.length) {
            let found = false;
            const sorted = [...subchunks].sort((a, b) => b.subY - a.subY);
            for (const sc of sorted) {
              for (let ly = 15; ly >= 0; ly--) {
                const idx = lx + (lz << 4) + (ly << 8);
                const name = sc.names[sc.indices[idx]!] ?? "minecraft:air";
                if (name !== "minecraft:air" && name !== "minecraft:water" && name !== "minecraft:lava") {
                  topBlock = nameToEditorBlock(name);
                  topY = sc.subY * 16 + ly;
                  found = true;
                  break;
                }
              }
              if (found) break;
            }
            if (found) h = topY;
          }
          world.height[i] = Math.max(MIN_Y + 2, Math.min(300, h));
          world.surface[i] = topBlock;
          const bid = biomes ? biomes[col]! : 1;
          world.biome[i] = bedrockBiomeToEditor(bid);
          const bdef = BIOMES[world.biome[i]!];
          world.fill[i] = bdef?.fill ?? DIRT;
          const isWater = world.height[i]! < SEA_LEVEL && (topBlock === 8 || (bdef && (bdef.name.includes("ocean") || bdef.name.includes("river"))));
          world.water[i] = isWater ? 1 : 0;
        }
      }
    }
  }

  const passthrough = decodedChunks === 0;
  if (passthrough) {
    warnings.push(
      "Chunk terrain could not be decoded in the browser (LevelDB tables may use Snappy compression or an unsupported version). Spawn and world settings can still be edited. Original chunk data will be preserved on export; map painting will not rewrite those chunks.",
    );
  } else if (chunkCoords.length > widthChunks * depthChunks) {
    warnings.push(
      `This world is larger than the ${width}×${depth} edit window. Chunks outside the window around spawn are preserved unchanged.`,
    );
  }

  const preservedDb: Record<string, string> = {};
  for (const [hex, value] of db.map) {
    const parsed = parseChunkKey(hexToKey(hex));
    if (parsed && parsed.dim === 0) {
      const inWindow =
        parsed.cx >= originChunkX && parsed.cx < endX && parsed.cz >= originChunkZ && parsed.cz < endZ;
      if (inWindow && !passthrough) continue; // we will rewrite edited overworld chunks
    }
    preservedDb[hex] = bytesToB64(value);
  }

  world.importMeta = {
    fileName,
    chunkCount: chunkCoords.length,
    decodedChunks,
    preservedKeys: Object.keys(preservedDb).length,
    warnings,
    passthroughDb: passthrough,
    editedWindow: { originX: world.originX, originZ: world.originZ, width, depth },
    netherEndUntouched: true,
    packsPreserved: packs,
  };
  world.preservedDb = preservedDb;
  world.preservedFiles = preservedFiles;
  warnings.push("Nether and The End are not edited in this editor and will be copied through unchanged.");
  if (packs.length) warnings.push(`Preserved ${packs.length} pack/support file(s) from the original world.`);

  void BLOCK_BY_NAME;
  void TAG_ENTITY;
  return { world, warnings };
}

function encodeMobEvents(enabled: boolean): Uint8Array {
  return encodeNbt({
    events_enabled: byte(enabled ? 1 : 0),
    "minecraft:pillager_patrols_event": compound({ enabled: byte(enabled ? 1 : 0) }),
    "minecraft:wandering_trader_event": compound({ enabled: byte(enabled ? 1 : 0) }),
    "minecraft:ender_dragon_event": compound({ enabled: byte(1) }),
  });
}

function encodeActor(type: string, x: number, y: number, z: number, unique: bigint): Uint8Array {
  const pos = listOf(TAG.Float, [float(x + 0.5), float(y), float(z + 0.5)]);
  const rot = listOf(TAG.Float, [float(0), float(0)]);
  const motion = listOf(TAG.Float, [float(0), float(0), float(0)]);
  const root: NbtCompound = {
    UniqueID: long(unique),
    identifier: str(type),
    Pos: pos,
    Rotation: rot,
    Motion: motion,
    Tags: listOf(TAG.String, []),
    Chested: byte(0),
    IsOrphaned: byte(0),
    Persistent: byte(1),
    UniqueID64: long(unique),
  };
  return encodeNbt(root);
}

export interface ExportProgress {
  stage: string;
  ratio: number;
}

export async function exportMcworld(
  world: WorldProject,
  onProgress?: (p: ExportProgress) => void,
): Promise<{ blob: Blob; bytes: number; keyCount: number; warnings: string[] }> {
  const warnings: string[] = [];
  onProgress?.({ stage: "Building terrain", ratio: 0.05 });
  const overlay = world.importMeta?.passthroughDb ? new Map<string, number>() : buildOverlay(world);

  const map: KvMap = new Map();
  if (world.preservedDb) {
    for (const [hex, b64] of Object.entries(world.preservedDb)) {
      map.set(hex, b64ToBytes(b64));
    }
  }

  const rewriteTerrain = !world.importMeta?.passthroughDb;
  if (world.importMeta?.passthroughDb) {
    warnings.push("Original chunk database was copied through because terrain could not be decoded. Map edits were not written into chunks.");
  }

  if (rewriteTerrain) {
    const region = exportRegion(world);
    if (world.virtual) {
      warnings.push(
        `Map is ${world.width.toLocaleString("en-US")}×${world.depth.toLocaleString("en-US")}. Export writes a playable ${region.width}×${region.depth} region around spawn — a phone cannot open a full 16k / Earth 1:1 / 60 million block world.`,
      );
    }
    const c0x = Math.floor(region.originX / 16);
    const c0z = Math.floor(region.originZ / 16);
    const c1x = Math.floor((region.originX + region.width - 1) / 16);
    const c1z = Math.floor((region.originZ + region.depth - 1) / 16);
    const total = (c1x - c0x + 1) * (c1z - c0z + 1);
    let n = 0;
    for (let cz = c0z; cz <= c1z; cz++) {
      for (let cx = c0x; cx <= c1x; cx++) {
        writeChunkRecords(
          map,
          cx,
          cz,
          (lx, y, lz) => {
            const wx = cx * 16 + lx;
            const wz = cz * 16 + lz;
            const gx = wx - world.originX;
            const gz = wz - world.originZ;
            const key = `${wx},${y},${wz}`;
            const ov = overlay.get(key);
            if (ov !== undefined) return editorBlockToName(ov);
            if (!inBounds(world, gx, gz)) return { name: "minecraft:air" };
            if (isCaveAt(world, wx, y, wz)) return { name: "minecraft:air" };
            const id = world.virtual
              ? stackColumn(readColumn(world, gx, gz), y, gx, gz)
              : columnBlock(world, gx, y, gz, undefined);
            if (id === AIR) return { name: "minecraft:air" };
            if (id === BEDROCK) return { name: "minecraft:bedrock" };
            if (id === DEEPSLATE) return { name: "minecraft:deepslate" };
            if (id === STONE) return { name: "minecraft:stone" };
            if (id === WATER) return { name: "minecraft:water", states: { liquid_depth: 0 } };
            if (id === SAND) return { name: "minecraft:sand" };
            if (id === DIRT) return { name: "minecraft:dirt" };
            if (id === GRASS) return { name: "minecraft:grass_block", states: { snowy: "false" } };
            return editorBlockToName(id);
          },
          (lx, lz) => {
            const gx = cx * 16 + lx - world.originX;
            const gz = cz * 16 + lz - world.originZ;
            if (!inBounds(world, gx, gz)) return 1;
            return editorBiomeToBedrock(readColumn(world, gx, gz).biome);
          },
          (lx, lz) => {
            const gx = cx * 16 + lx - world.originX;
            const gz = cz * 16 + lz - world.originZ;
            if (!inBounds(world, gx, gz)) return 64;
            const col = readColumn(world, gx, gz);
            return col.water ? Math.max(col.height, SEA_LEVEL) : col.height;
          },
        );
        n++;
        if (n % 8 === 0) onProgress?.({ stage: "Writing chunks", ratio: 0.1 + (n / total) * 0.55 });
        if (n % 32 === 0) await new Promise((r) => setTimeout(r, 0));
      }
    }
  }

  onProgress?.({ stage: "Entities & events", ratio: 0.72 });
  putAscii(map, "mobevents", encodeMobEvents(world.settings.mobSpawning));

  // Best-effort entity records (legacy Entity tag). Minecraft 1.18+ prefers actorprefix;
  // we still write both a note and the legacy tag. Validation reports this.
  if (world.entities.length) {
    warnings.push(
      "Mob placements are written as chunk entity records. Bedrock 1.18+ also uses actorprefix IDs; some mobs may not appear until the chunk is refreshed. Natural spawning still follows your world settings.",
    );
    const byChunk = new Map<string, typeof world.entities>();
    for (const e of world.entities) {
      const cx = Math.floor(e.x / 16);
      const cz = Math.floor(e.z / 16);
      const k = `${cx},${cz}`;
      const list = byChunk.get(k) ?? [];
      list.push(e);
      byChunk.set(k, list);
    }
    let uid = 10000n;
    for (const [k, list] of byChunk) {
      const [cx, cz] = k.split(",").map(Number);
      const parts: Uint8Array[] = [];
      for (const e of list) {
        parts.push(encodeActor(e.type, e.x, e.y, e.z, uid++));
      }
      let len = 0;
      for (const p of parts) len += p.length;
      const all = new Uint8Array(len);
      let o = 0;
      for (const p of parts) {
        all.set(p, o);
        o += p.length;
      }
      const key = new Uint8Array(9);
      const view = new DataView(key.buffer);
      view.setInt32(0, cx!, true);
      view.setInt32(4, cz!, true);
      key[8] = TAG_ENTITY;
      map.set(keyToHex(key), all);
    }
  }

  onProgress?.({ stage: "level.dat", ratio: 0.8 });
  const levelDat = encodeLevelDat(world.settings, world.extraNbt);
  const db = writeLevelDb(map);

  onProgress?.({ stage: "Packaging .mcworld", ratio: 0.9 });
  const zip = new JSZip();
  zip.file("level.dat", levelDat);
  zip.file("level.dat_old", levelDat);
  zip.file("levelname.txt", world.settings.name + "\n");

  if (world.preservedFiles) {
    for (const [rel, b64] of Object.entries(world.preservedFiles)) {
      if (rel === "level.dat" || rel === "level.dat_old" || rel === "levelname.txt") continue;
      if (rel.startsWith("db/")) continue;
      zip.file(rel, b64ToBytes(b64));
    }
  }

  for (const [name, bytes] of Object.entries(db.files)) {
    zip.file(`db/${name}`, bytes);
  }

  const blob = await zip.generateAsync({
    type: "blob",
    compression: "DEFLATE",
    compressionOptions: { level: 6 },
    mimeType: "application/octet-stream",
  });
  onProgress?.({ stage: "Done", ratio: 1 });
  void worldX;
  void worldZ;
  void localX;
  void localZ;
  void td;
  void te;
  return { blob, bytes: blob.size, keyCount: db.keyCount, warnings };
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}

export { bytesToB64, b64ToBytes };
