/**
 * Little-endian NBT used by Minecraft Bedrock (uncompressed).
 * level.dat, block palettes, entities, and mobevents all use this.
 */

export const TAG = {
  End: 0,
  Byte: 1,
  Short: 2,
  Int: 3,
  Long: 4,
  Float: 5,
  Double: 6,
  ByteArray: 7,
  String: 8,
  List: 9,
  Compound: 10,
  IntArray: 11,
  LongArray: 12,
} as const;

export type TagId = (typeof TAG)[keyof typeof TAG];

export type NbtValue =
  | { type: typeof TAG.Byte; value: number }
  | { type: typeof TAG.Short; value: number }
  | { type: typeof TAG.Int; value: number }
  | { type: typeof TAG.Long; value: bigint }
  | { type: typeof TAG.Float; value: number }
  | { type: typeof TAG.Double; value: number }
  | { type: typeof TAG.ByteArray; value: Uint8Array }
  | { type: typeof TAG.String; value: string }
  | { type: typeof TAG.List; value: { listType: TagId; items: NbtValue[] } }
  | { type: typeof TAG.Compound; value: NbtCompound }
  | { type: typeof TAG.IntArray; value: Int32Array }
  | { type: typeof TAG.LongArray; value: bigint[] };

export type NbtCompound = Record<string, NbtValue>;

export function byte(value: number): NbtValue {
  return { type: TAG.Byte, value: value & 0xff };
}
export function short(value: number): NbtValue {
  return { type: TAG.Short, value };
}
export function int(value: number): NbtValue {
  return { type: TAG.Int, value: value | 0 };
}
export function long(value: bigint | number): NbtValue {
  return { type: TAG.Long, value: typeof value === "bigint" ? value : BigInt(value) };
}
export function float(value: number): NbtValue {
  return { type: TAG.Float, value };
}
export function double(value: number): NbtValue {
  return { type: TAG.Double, value };
}
export function str(value: string): NbtValue {
  return { type: TAG.String, value };
}
export function compound(value: NbtCompound): NbtValue {
  return { type: TAG.Compound, value };
}
export function listOf(listType: TagId, items: NbtValue[]): NbtValue {
  return { type: TAG.List, value: { listType, items } };
}
export function intList(values: number[]): NbtValue {
  return listOf(
    TAG.Int,
    values.map((v) => int(v)),
  );
}

export function unwrap(v: NbtValue | undefined): unknown {
  if (!v) return undefined;
  if (v.type === TAG.Compound) {
    const out: Record<string, unknown> = {};
    for (const [k, child] of Object.entries(v.value)) out[k] = unwrap(child);
    return out;
  }
  if (v.type === TAG.List) return v.value.items.map(unwrap);
  if (v.type === TAG.ByteArray) return v.value;
  if (v.type === TAG.IntArray) return Array.from(v.value);
  if (v.type === TAG.LongArray) return v.value;
  return v.value;
}

class Writer {
  private chunks: Uint8Array[] = [];
  private len = 0;

  writeByte(n: number) {
    this.chunks.push(new Uint8Array([n & 0xff]));
    this.len += 1;
  }
  writeBytes(b: Uint8Array) {
    this.chunks.push(b);
    this.len += b.length;
  }
  writeShort(n: number) {
    const b = new Uint8Array(2);
    new DataView(b.buffer).setInt16(0, n, true);
    this.writeBytes(b);
  }
  writeInt(n: number) {
    const b = new Uint8Array(4);
    new DataView(b.buffer).setInt32(0, n, true);
    this.writeBytes(b);
  }
  writeLong(n: bigint) {
    const b = new Uint8Array(8);
    new DataView(b.buffer).setBigInt64(0, n, true);
    this.writeBytes(b);
  }
  writeFloat(n: number) {
    const b = new Uint8Array(4);
    new DataView(b.buffer).setFloat32(0, n, true);
    this.writeBytes(b);
  }
  writeDouble(n: number) {
    const b = new Uint8Array(8);
    new DataView(b.buffer).setFloat64(0, n, true);
    this.writeBytes(b);
  }
  writeString(s: string) {
    const enc = new TextEncoder().encode(s);
    this.writeShort(enc.length);
    this.writeBytes(enc);
  }

  writePayload(tag: NbtValue) {
    switch (tag.type) {
      case TAG.Byte:
        this.writeByte(tag.value);
        break;
      case TAG.Short:
        this.writeShort(tag.value);
        break;
      case TAG.Int:
        this.writeInt(tag.value);
        break;
      case TAG.Long:
        this.writeLong(tag.value);
        break;
      case TAG.Float:
        this.writeFloat(tag.value);
        break;
      case TAG.Double:
        this.writeDouble(tag.value);
        break;
      case TAG.ByteArray:
        this.writeInt(tag.value.length);
        this.writeBytes(tag.value);
        break;
      case TAG.String:
        this.writeString(tag.value);
        break;
      case TAG.List: {
        this.writeByte(tag.value.listType);
        this.writeInt(tag.value.items.length);
        for (const item of tag.value.items) this.writePayload(item);
        break;
      }
      case TAG.Compound:
        this.writeCompoundPayload(tag.value);
        break;
      case TAG.IntArray:
        this.writeInt(tag.value.length);
        for (const n of tag.value) this.writeInt(n);
        break;
      case TAG.LongArray:
        this.writeInt(tag.value.length);
        for (const n of tag.value) this.writeLong(n);
        break;
      default:
        break;
    }
  }

  writeNamed(name: string, tag: NbtValue) {
    this.writeByte(tag.type);
    this.writeString(name);
    this.writePayload(tag);
  }

  writeCompoundPayload(c: NbtCompound) {
    for (const [k, v] of Object.entries(c)) this.writeNamed(k, v);
    this.writeByte(TAG.End);
  }

  toBytes(): Uint8Array {
    const out = new Uint8Array(this.len);
    let o = 0;
    for (const c of this.chunks) {
      out.set(c, o);
      o += c.length;
    }
    return out;
  }
}

/** Named root compound (Bedrock default: empty name). */
export function encodeNbt(root: NbtCompound, rootName = ""): Uint8Array {
  const w = new Writer();
  w.writeNamed(rootName, compound(root));
  return w.toBytes();
}

/** Unnamed compound payload only (no type/name wrapper) — unused, kept for tests. */
export function encodeCompoundPayload(c: NbtCompound): Uint8Array {
  const w = new Writer();
  w.writeCompoundPayload(c);
  return w.toBytes();
}

class Reader {
  view: DataView;
  offset = 0;
  buf: Uint8Array;
  constructor(buf: Uint8Array) {
    this.buf = buf;
    this.view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  }
  remaining() {
    return this.buf.length - this.offset;
  }
  u8() {
    return this.buf[this.offset++]!;
  }
  i8() {
    const v = this.view.getInt8(this.offset);
    this.offset += 1;
    return v;
  }
  i16() {
    const v = this.view.getInt16(this.offset, true);
    this.offset += 2;
    return v;
  }
  i32() {
    const v = this.view.getInt32(this.offset, true);
    this.offset += 4;
    return v;
  }
  i64() {
    const v = this.view.getBigInt64(this.offset, true);
    this.offset += 8;
    return v;
  }
  f32() {
    const v = this.view.getFloat32(this.offset, true);
    this.offset += 4;
    return v;
  }
  f64() {
    const v = this.view.getFloat64(this.offset, true);
    this.offset += 8;
    return v;
  }
  bytes(n: number) {
    const s = this.buf.subarray(this.offset, this.offset + n);
    this.offset += n;
    return s;
  }
  string() {
    const len = this.i16() & 0xffff;
    const s = this.bytes(len);
    return new TextDecoder().decode(s);
  }

  payload(type: TagId): NbtValue {
    switch (type) {
      case TAG.Byte:
        return byte(this.u8());
      case TAG.Short:
        return short(this.i16());
      case TAG.Int:
        return int(this.i32());
      case TAG.Long:
        return long(this.i64());
      case TAG.Float:
        return float(this.f32());
      case TAG.Double:
        return double(this.f64());
      case TAG.ByteArray: {
        const n = this.i32();
        return { type: TAG.ByteArray, value: this.bytes(n) };
      }
      case TAG.String:
        return str(this.string());
      case TAG.List: {
        const listType = this.u8() as TagId;
        const n = this.i32();
        const items: NbtValue[] = [];
        for (let i = 0; i < n; i++) items.push(this.payload(listType));
        return listOf(listType, items);
      }
      case TAG.Compound:
        return compound(this.compoundPayload());
      case TAG.IntArray: {
        const n = this.i32();
        const arr = new Int32Array(n);
        for (let i = 0; i < n; i++) arr[i] = this.i32();
        return { type: TAG.IntArray, value: arr };
      }
      case TAG.LongArray: {
        const n = this.i32();
        const arr: bigint[] = [];
        for (let i = 0; i < n; i++) arr.push(this.i64());
        return { type: TAG.LongArray, value: arr };
      }
      default:
        throw new Error(`Unknown NBT tag ${type}`);
    }
  }

  compoundPayload(): NbtCompound {
    const out: NbtCompound = {};
    for (;;) {
      if (this.remaining() <= 0) break;
      const t = this.u8() as TagId;
      if (t === TAG.End) break;
      const name = this.string();
      out[name] = this.payload(t);
    }
    return out;
  }

  named(): { name: string; value: NbtValue } {
    const t = this.u8() as TagId;
    if (t === TAG.End) return { name: "", value: compound({}) };
    const name = this.string();
    return { name, value: this.payload(t) };
  }
}

export function decodeNbt(buf: Uint8Array): { name: string; value: NbtCompound } {
  const r = new Reader(buf);
  const named = r.named();
  if (named.value.type !== TAG.Compound) {
    throw new Error("Root NBT is not a compound");
  }
  return { name: named.name, value: named.value.value };
}

export function getInt(c: NbtCompound, k: string, fallback = 0): number {
  const v = c[k];
  if (!v) return fallback;
  if (v.type === TAG.Int || v.type === TAG.Short || v.type === TAG.Byte || v.type === TAG.Float) {
    return Number(v.value);
  }
  if (v.type === TAG.Long) return Number(v.value);
  return fallback;
}

export function getByte(c: NbtCompound, k: string, fallback = 0): number {
  return getInt(c, k, fallback);
}

export function getString(c: NbtCompound, k: string, fallback = ""): string {
  const v = c[k];
  if (v && v.type === TAG.String) return v.value;
  return fallback;
}

export function getLong(c: NbtCompound, k: string, fallback = 0n): bigint {
  const v = c[k];
  if (!v) return fallback;
  if (v.type === TAG.Long) return v.value;
  if (v.type === TAG.Int || v.type === TAG.Short || v.type === TAG.Byte) return BigInt(v.value);
  return fallback;
}

export function getCompound(c: NbtCompound, k: string): NbtCompound | undefined {
  const v = c[k];
  if (v && v.type === TAG.Compound) return v.value;
  return undefined;
}

export { Writer as NbtWriter, Reader as NbtReader };
