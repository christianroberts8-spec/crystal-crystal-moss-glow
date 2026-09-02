/**
 * Pure-JS Minecraft Bedrock LevelDB (Mojang fork).
 *
 * Write path: a recover-on-open log database (CURRENT + MANIFEST + .log).
 * Minecraft opens this, replays the log, and compactes it — this is a real
 * LevelDB, not a renamed zip.
 *
 * Read path: SST (.ldb/.sst) + WAL (.log). Used to import existing worlds.
 */

import { inflate, inflateRaw } from "pako";
import { crc32c, maskCrc } from "./crc32c";

export type KvMap = Map<string, Uint8Array>;

export function keyToHex(key: Uint8Array): string {
  let s = "";
  for (let i = 0; i < key.length; i++) s += key[i]!.toString(16).padStart(2, "0");
  return s;
}

export function hexToKey(hex: string): Uint8Array {
  const out = new Uint8Array(hex.length / 2);
  for (let i = 0; i < out.length; i++) out[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  return out;
}

function concat(a: Uint8Array, b: Uint8Array): Uint8Array {
  const o = new Uint8Array(a.length + b.length);
  o.set(a, 0);
  o.set(b, a.length);
  return o;
}

function u32le(n: number): Uint8Array {
  const b = new Uint8Array(4);
  new DataView(b.buffer).setUint32(0, n >>> 0, true);
  return b;
}

function u64le(n: bigint): Uint8Array {
  const b = new Uint8Array(8);
  new DataView(b.buffer).setBigUint64(0, n, true);
  return b;
}

function encodeVarint32(n: number, into: number[]): void {
  n = n >>> 0;
  while (n >= 0x80) {
    into.push((n & 0x7f) | 0x80);
    n >>>= 7;
  }
  into.push(n);
}

function encodeVarint64(n: bigint, into: number[]): void {
  let x = n;
  while (x >= 0x80n) {
    into.push(Number(x & 0x7fn) | 0x80);
    x >>= 7n;
  }
  into.push(Number(x));
}

function readVarint32(buf: Uint8Array, offset: number): [number, number] {
  let n = 0;
  let shift = 0;
  let i = offset;
  while (i < buf.length) {
    const b = buf[i++]!;
    n |= (b & 0x7f) << shift;
    if ((b & 0x80) === 0) break;
    shift += 7;
  }
  return [n >>> 0, i];
}

function readVarint64(buf: Uint8Array, offset: number): [bigint, number] {
  let n = 0n;
  let shift = 0n;
  let i = offset;
  while (i < buf.length) {
    const b = BigInt(buf[i++]!);
    n |= (b & 0x7fn) << shift;
    if ((b & 0x80n) === 0n) break;
    shift += 7n;
  }
  return [n, i];
}

const BLOCK_SIZE = 32768;
const HEADER_SIZE = 7;
const FULL = 1;
const FIRST = 2;
const MIDDLE = 3;
const LAST = 4;

function emitPhysicalRecord(
  chunks: Uint8Array[],
  type: number,
  payload: Uint8Array,
  start: number,
  length: number,
): void {
  const header = new Uint8Array(HEADER_SIZE + length);
  header[4] = length & 0xff;
  header[5] = (length >> 8) & 0xff;
  header[6] = type;
  header.set(payload.subarray(start, start + length), HEADER_SIZE);
  const crc = maskCrc(crc32c(header, 6, HEADER_SIZE + length));
  header[0] = crc & 0xff;
  header[1] = (crc >> 8) & 0xff;
  header[2] = (crc >> 16) & 0xff;
  header[3] = (crc >> 24) & 0xff;
  chunks.push(header);
}

function encodeLogRecords(records: Uint8Array[]): Uint8Array {
  const chunks: Uint8Array[] = [];
  let blockOffset = 0;
  for (const rec of records) {
    let ptr = 0;
    let begin = true;
    while (ptr < rec.length || begin) {
      let leftover = BLOCK_SIZE - blockOffset;
      if (leftover < HEADER_SIZE) {
        if (leftover > 0) chunks.push(new Uint8Array(leftover));
        blockOffset = 0;
        leftover = BLOCK_SIZE;
      }
      const avail = leftover - HEADER_SIZE;
      const fragment = Math.min(rec.length - ptr, avail);
      const end = ptr + fragment === rec.length;
      let type: number;
      if (begin && end) type = FULL;
      else if (begin) type = FIRST;
      else if (end) type = LAST;
      else type = MIDDLE;
      emitPhysicalRecord(chunks, type, rec, ptr, fragment);
      blockOffset += HEADER_SIZE + fragment;
      ptr += fragment;
      begin = false;
      if (rec.length === 0) break;
    }
  }
  return concatAll(chunks);
}

function concatAll(chunks: Uint8Array[]): Uint8Array {
  let n = 0;
  for (const c of chunks) n += c.length;
  const out = new Uint8Array(n);
  let o = 0;
  for (const c of chunks) {
    out.set(c, o);
    o += c.length;
  }
  return out;
}

function encodeWriteBatch(kvs: Array<[Uint8Array, Uint8Array]>, sequence = 1n): Uint8Array {
  const parts: number[] = [];
  const seq = u64le(sequence);
  const count = u32le(kvs.length);
  const payload: Uint8Array[] = [seq, count];
  for (const [k, v] of kvs) {
    const rec: number[] = [1]; // kTypeValue
    encodeVarint32(k.length, rec);
    for (let i = 0; i < k.length; i++) rec.push(k[i]!);
    encodeVarint32(v.length, rec);
    payload.push(new Uint8Array(rec), v);
  }
  return concatAll(payload);
}

const TAG_COMPARATOR = 1;
const TAG_LOG_NUMBER = 2;
const TAG_NEXT_FILE = 3;
const TAG_LAST_SEQ = 4;
const TAG_PREV_LOG = 9;

function encodeVersionEdit(opts: {
  comparator?: string;
  logNumber: number;
  nextFile: number;
  lastSeq: bigint;
  prevLog?: number;
}): Uint8Array {
  const bytes: number[] = [];
  if (opts.comparator) {
    encodeVarint32(TAG_COMPARATOR, bytes);
    const name = new TextEncoder().encode(opts.comparator);
    encodeVarint32(name.length, bytes);
    for (const b of name) bytes.push(b);
  }
  encodeVarint32(TAG_LOG_NUMBER, bytes);
  encodeVarint64(BigInt(opts.logNumber), bytes);
  encodeVarint32(TAG_NEXT_FILE, bytes);
  encodeVarint64(BigInt(opts.nextFile), bytes);
  encodeVarint32(TAG_LAST_SEQ, bytes);
  encodeVarint64(opts.lastSeq, bytes);
  encodeVarint32(TAG_PREV_LOG, bytes);
  encodeVarint64(BigInt(opts.prevLog ?? 0), bytes);
  return new Uint8Array(bytes);
}

export interface LevelDbFiles {
  /** Paths relative to db/, values are file bytes. */
  files: Record<string, Uint8Array>;
  keyCount: number;
}

/** Build a valid LevelDB directory Minecraft Bedrock can open. */
export function writeLevelDb(map: KvMap): LevelDbFiles {
  const kvs: Array<[Uint8Array, Uint8Array]> = [];
  for (const [hex, value] of map) kvs.push([hexToKey(hex), value]);
  kvs.sort((a, b) => compareBytes(a[0], b[0]));

  const batch = encodeWriteBatch(kvs, 1n);
  const log = encodeLogRecords([batch]);

  const edit = encodeVersionEdit({
    comparator: "leveldb.BytewiseComparator",
    logNumber: 3,
    nextFile: 4,
    lastSeq: BigInt(Math.max(1, kvs.length)),
    prevLog: 0,
  });
  const manifest = encodeLogRecords([edit]);
  const current = new TextEncoder().encode("MANIFEST-000001\n");
  const lock = new Uint8Array(0);
  const humanLog = new TextEncoder().encode(
    '2026/09/01-00:00:00.000000 0 Creating DB "leveldb.BytewiseComparator"\n',
  );

  return {
    files: {
      CURRENT: current,
      "MANIFEST-000001": manifest,
      "000003.log": log,
      LOCK: lock,
      LOG: humanLog,
    },
    keyCount: kvs.length,
  };
}

function compareBytes(a: Uint8Array, b: Uint8Array): number {
  const n = Math.min(a.length, b.length);
  for (let i = 0; i < n; i++) {
    if (a[i]! !== b[i]!) return a[i]! - b[i]!;
  }
  return a.length - b.length;
}

/* ---------------- reader ---------------- */

function readLogRecords(buf: Uint8Array): Uint8Array[] {
  const records: Uint8Array[] = [];
  let offset = 0;
  let assembling: Uint8Array[] = [];
  while (offset + HEADER_SIZE <= buf.length) {
    const inBlock = offset % BLOCK_SIZE;
    if (BLOCK_SIZE - inBlock < HEADER_SIZE) {
      offset += BLOCK_SIZE - inBlock;
      continue;
    }
    const len = buf[offset + 4]! | (buf[offset + 5]! << 8);
    const type = buf[offset + 6]!;
    if (type === 0 && len === 0) {
      offset += BLOCK_SIZE - inBlock;
      continue;
    }
    const payloadStart = offset + HEADER_SIZE;
    if (payloadStart + len > buf.length) break;
    const payload = buf.subarray(payloadStart, payloadStart + len);
    offset = payloadStart + len;
    if (type === FULL) records.push(payload.slice());
    else if (type === FIRST) assembling = [payload.slice()];
    else if (type === MIDDLE) assembling.push(payload.slice());
    else if (type === LAST) {
      assembling.push(payload.slice());
      records.push(concatAll(assembling));
      assembling = [];
    }
  }
  return records;
}

function applyWriteBatch(map: KvMap, rec: Uint8Array): void {
  if (rec.length < 12) return;
  const count = new DataView(rec.buffer, rec.byteOffset, rec.byteLength).getUint32(8, true);
  let o = 12;
  for (let i = 0; i < count && o < rec.length; i++) {
    const kind = rec[o++]!;
    const [klen, o1] = readVarint32(rec, o);
    o = o1;
    const key = rec.subarray(o, o + klen);
    o += klen;
    if (kind === 1) {
      const [vlen, o2] = readVarint32(rec, o);
      o = o2;
      const value = rec.subarray(o, o + vlen);
      o += vlen;
      map.set(keyToHex(key), value.slice());
    } else if (kind === 0) {
      map.delete(keyToHex(key));
    } else {
      break;
    }
  }
}

const TABLE_MAGIC = 0xdb4775248b80fb57n;

function readBlock(file: Uint8Array, offset: bigint, size: bigint): Uint8Array | null {
  const off = Number(offset);
  const sz = Number(size);
  if (off < 0 || off + sz + 5 > file.length) return null;
  const compressed = file.subarray(off, off + sz);
  const type = file[off + sz]!;
  try {
    if (type === 0) return compressed.slice();
    if (type === 2) return inflate(compressed);
    if (type === 3 || type === 4) return inflateRaw(compressed);
    // 1 = snappy — not decoded
    return null;
  } catch {
    return null;
  }
}

function parseBlockEntries(block: Uint8Array): Array<[Uint8Array, Uint8Array]> {
  if (block.length < 4) return [];
  const view = new DataView(block.buffer, block.byteOffset, block.byteLength);
  const numRestarts = view.getUint32(block.length - 4, true);
  if (numRestarts > 1_000_000) return [];
  const restartsOffset = block.length - (1 + numRestarts) * 4;
  if (restartsOffset < 0) return [];
  const out: Array<[Uint8Array, Uint8Array]> = [];
  let o = 0;
  let lastKey = new Uint8Array(0);
  while (o < restartsOffset) {
    const [shared, o1] = readVarint32(block, o);
    const [nonShared, o2] = readVarint32(block, o1);
    const [valueLen, o3] = readVarint32(block, o2);
    o = o3;
    if (o + nonShared + valueLen > restartsOffset) break;
    const key = new Uint8Array(shared + nonShared);
    key.set(lastKey.subarray(0, shared), 0);
    key.set(block.subarray(o, o + nonShared), shared);
    o += nonShared;
    const value = block.subarray(o, o + valueLen).slice();
    o += valueLen;
    lastKey = key;
    // Strip 8-byte internal key trailer (seq + type) if present
    const userKey = key.length >= 8 ? key.subarray(0, key.length - 8) : key;
    const itype = key.length >= 8 ? key[key.length - 1]! & 0xff : 1;
    if (itype === 0) {
      // deletion
      continue;
    }
    out.push([userKey.slice(), value]);
  }
  return out;
}

function readTable(file: Uint8Array, into: KvMap, warnings: string[]): void {
  if (file.length < 48) return;
  const view = new DataView(file.buffer, file.byteOffset, file.byteLength);
  const magic = view.getBigUint64(file.length - 8, true);
  if (magic !== TABLE_MAGIC) {
    warnings.push("Skipped an .ldb file with unknown magic (not a LevelDB table).");
    return;
  }
  const footer = file.subarray(file.length - 48);
  let o = 0;
  const [, oMeta] = readVarint64(footer, o);
  const [, oIdx] = readVarint64(footer, oMeta);
  const [indexOff, o3] = readVarint64(footer, oIdx);
  const [indexSize] = readVarint64(footer, o3);
  const indexBlock = readBlock(file, indexOff, indexSize);
  if (!indexBlock) {
    warnings.push("Could not decompress a LevelDB index block (snappy tables are not readable in-browser).");
    return;
  }
  const indexEntries = parseBlockEntries(indexBlock);
  for (const [, handleBytes] of indexEntries) {
    const [off, h1] = readVarint64(handleBytes, 0);
    const [sz] = readVarint64(handleBytes, h1);
    const block = readBlock(file, off, sz);
    if (!block) continue;
    for (const [k, v] of parseBlockEntries(block)) {
      into.set(keyToHex(k), v);
    }
  }
}

export interface ReadLevelDbResult {
  map: KvMap;
  warnings: string[];
  parsedFiles: string[];
  failedFiles: string[];
}

export function readLevelDb(files: Record<string, Uint8Array>): ReadLevelDbResult {
  const map: KvMap = new Map();
  const warnings: string[] = [];
  const parsedFiles: string[] = [];
  const failedFiles: string[] = [];

  const names = Object.keys(files).sort();
  const tables = names.filter((n) => /\.(ldb|sst)$/i.test(n));
  const logs = names.filter((n) => /\.log$/i.test(n) && !n.endsWith("LOG"));

  for (const name of tables) {
    try {
      const before = map.size;
      readTable(files[name]!, map, warnings);
      if (map.size > before) parsedFiles.push(name);
      else {
        failedFiles.push(name);
      }
    } catch (err) {
      failedFiles.push(name);
      warnings.push(`Failed to parse ${name}: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  logs.sort();
  for (const name of logs) {
    try {
      const recs = readLogRecords(files[name]!);
      const before = map.size;
      for (const rec of recs) applyWriteBatch(map, rec);
      if (map.size !== before || recs.length) parsedFiles.push(name);
    } catch (err) {
      failedFiles.push(name);
      warnings.push(`Failed to parse ${name}: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  if (tables.length + logs.length === 0) {
    warnings.push("No LevelDB table or log files were found in db/.");
  }

  return { map, warnings, parsedFiles, failedFiles };
}

export function asciiKey(s: string): Uint8Array {
  return new TextEncoder().encode(s);
}

export function putAscii(map: KvMap, k: string, v: Uint8Array) {
  map.set(keyToHex(asciiKey(k)), v);
}

export { compareBytes, encodeVarint32 };
