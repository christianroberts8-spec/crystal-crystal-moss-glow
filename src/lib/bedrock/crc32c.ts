/** Castagnoli CRC-32C — matches LevelDB / Minecraft Bedrock. */

const TABLE = new Uint32Array(256);

for (let i = 0; i < 256; i++) {
  let c = i;
  for (let j = 0; j < 8; j++) {
    c = c & 1 ? 0x82f63b78 ^ (c >>> 1) : c >>> 1;
  }
  TABLE[i] = c;
}

export function crc32c(data: Uint8Array, start = 0, end = data.length): number {
  let crc = 0xffffffff;
  for (let i = start; i < end; i++) {
    crc = TABLE[(crc ^ data[i]!) & 0xff]! ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

const MASK_DELTA = 0xa282ead8;

/** LevelDB's crc32c::Mask — stored in log/table trailers. */
export function maskCrc(crc: number): number {
  return ((((crc >>> 15) | (crc << 17)) + MASK_DELTA) >>> 0);
}

export function unmaskCrc(masked: number): number {
  const rot = (masked - MASK_DELTA) >>> 0;
  return ((rot >>> 17) | (rot << 15)) >>> 0;
}
