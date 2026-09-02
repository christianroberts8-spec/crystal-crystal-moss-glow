import {
  BEACH,
  DESERT,
  FOREST,
  MOUNTAINS,
  OCEAN,
  PLAINS,
  SNOWY_PLAINS,
  TAIGA,
} from "./biomes";
import { ICE, SAND, SNOW, STONE, GRASS, DIRT, isSolid } from "./blocks";
import { idxOf, SEA_LEVEL, worldX, worldZ } from "./grid";
import { fbm } from "./noise";
import type { WorldProject } from "./types";

const JUNGLE = 12;
const SAVANNA = 13;
const BADLANDS = 14;
const SNOWY_TAIGA = 10;
const SWAMP = 11;
const FROZEN_OCEAN = 19;
const WARM_OCEAN = 20;
const SNOWY_PEAKS = 23;
const WOODED_PEAKS = 24;
const SUNFLOWER = 25;
const MEGA_TAIGA = 26;
const LUKEWARM = 27;
const COLD_OCEAN = 28;
const MANGROVE = 29;
const DEEP_OCEAN = 5;

/** Gray value in the NASA/GEBCO elevation layer that is sea level. */
const SEA_GRAY = 143;

export const EARTH_REGIONS: { id: string; label: string; lon0: number; lon1: number; lat0: number; lat1: number }[] = [
  { id: "na", label: "North America", lon0: -168, lon1: -52, lat0: 14, lat1: 72 },
  { id: "sa", label: "South America", lon0: -82, lon1: -34, lat0: -56, lat1: 12 },
  { id: "eu", label: "Europe", lon0: -10, lon1: 40, lat0: 36, lat1: 71 },
  { id: "af", label: "Africa", lon0: -18, lon1: 52, lat0: -35, lat1: 37 },
  { id: "as", label: "Asia", lon0: 40, lon1: 150, lat0: 0, lat1: 72 },
  { id: "oc", label: "Australia", lon0: 112, lon1: 180, lat0: -48, lat1: -10 },
  { id: "an", label: "Antarctica", lon0: -180, lon1: 180, lat0: -90, lat1: -62 },
];

export interface EarthRaster {
  w: number;
  h: number;
  land: Uint8Array;
  elev: Uint8Array;
}

let cached: EarthRaster | null = null;
let inflight: Promise<EarthRaster> | null = null;

export function peekEarthRaster(): EarthRaster | null {
  return cached;
}

export async function loadEarthRaster(): Promise<EarthRaster> {
  if (cached) return cached;
  if (inflight) return inflight;
  inflight = (async () => {
    const res = await fetch("/earth-map.png");
    if (!res.ok) throw new Error("Could not load the Earth map.");
    const blob = await res.blob();
    const bmp = await createImageBitmap(blob);
    const w = bmp.width;
    const h = bmp.height;
    const c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    const ctx = c.getContext("2d");
    if (!ctx) throw new Error("Could not read the Earth map.");
    ctx.drawImage(bmp, 0, 0);
    const data = ctx.getImageData(0, 0, w, h).data;
    const n = w * h;
    const land = new Uint8Array(n);
    const elev = new Uint8Array(n);
    for (let i = 0; i < n; i++) {
      land[i] = data[i * 4]!;
      elev[i] = data[i * 4 + 1]!;
    }
    bmp.close();
    cached = { w, h, land, elev };
    return cached;
  })();
  try {
    return await inflight;
  } finally {
    inflight = null;
  }
}

export function lonLatFromLocal(world: WorldProject, lx: number, lz: number): { lon: number; lat: number } {
  return {
    lon: (lx / world.width) * 360 - 180,
    lat: 90 - (lz / world.depth) * 180,
  };
}

export function localFromLonLat(world: WorldProject, lon: number, lat: number): { lx: number; lz: number } {
  let x = lon;
  while (x > 180) x -= 360;
  while (x < -180) x += 360;
  return {
    lx: Math.floor(((x + 180) / 360) * world.width),
    lz: Math.floor(((90 - lat) / 180) * world.depth),
  };
}

function sample(r: EarthRaster, lon: number, lat: number): { land: number; elev: number } {
  let x = ((lon + 180) / 360) * r.w;
  const y = ((90 - lat) / 180) * r.h;
  while (x < 0) x += r.w;
  while (x >= r.w) x -= r.w;
  const iy = Math.max(0, Math.min(r.h - 1, y));
  const x0 = Math.floor(x) % r.w;
  const y0 = Math.floor(iy);
  const x1 = (x0 + 1) % r.w;
  const y1 = Math.min(r.h - 1, y0 + 1);
  const fx = x - Math.floor(x);
  const fy = iy - y0;
  const i00 = x0 + y0 * r.w;
  const i10 = x1 + y0 * r.w;
  const i01 = x0 + y1 * r.w;
  const i11 = x1 + y1 * r.w;
  const landN = r.land[i00]!;
  const elev =
    r.elev[i00]! * (1 - fx) * (1 - fy) +
    r.elev[i10]! * fx * (1 - fy) +
    r.elev[i01]! * (1 - fx) * fy +
    r.elev[i11]! * fx * fy;
  return { land: landN, elev };
}

function inBox(lon: number, lat: number, a: number, b: number, c: number, d: number): boolean {
  return lon >= a && lon <= b && lat >= c && lat <= d;
}

function biomeAt(lon: number, lat: number, elev: number, inland: number, wet: boolean): number {
  if (wet) {
    if (lat > 68 || lat < -62) return FROZEN_OCEAN;
    if (lat > 48 || lat < -48) return COLD_OCEAN;
    if (Math.abs(lat) < 18) return WARM_OCEAN;
    if (Math.abs(lat) < 32) return LUKEWARM;
    if (elev < SEA_LEVEL - 18) return DEEP_OCEAN;
    return OCEAN;
  }
  if (inland > 200 || (inland > 175 && (lat > 28 || lat < -28))) {
    return lat > 25 || lat < -25 ? SNOWY_PEAKS : MOUNTAINS;
  }
  if (inland > 162) return lat > 35 ? WOODED_PEAKS : MOUNTAINS;
  if (lat < -60 || lat > 70) return SNOWY_PLAINS;
  if (lat > 60) return inland > 155 ? SNOWY_TAIGA : SNOWY_PLAINS;
  if (lat > 52) return inland > 150 ? MEGA_TAIGA : TAIGA;

  if (inBox(lon, lat, -17, 38, 14, 32)) return DESERT;
  if (inBox(lon, lat, 34, 60, 12, 32)) return DESERT;
  if (inBox(lon, lat, 75, 110, 36, 50)) return DESERT;
  if (inBox(lon, lat, 114, 148, -32, -18) && inland > 148) return DESERT;
  if (inBox(lon, lat, 14, 28, -30, -22)) return DESERT;
  if (inBox(lon, lat, -75, -68, -28, -18)) return DESERT;
  if (inBox(lon, lat, -118, -108, 31, 38)) return DESERT;
  if (inBox(lon, lat, -113, -103, 33, 42)) return BADLANDS;

  if (inBox(lon, lat, -78, -48, -12, 6)) return JUNGLE;
  if (inBox(lon, lat, 8, 32, -4, 6)) return JUNGLE;
  if (inBox(lon, lat, 94, 122, -6, 18)) return JUNGLE;
  if (inBox(lon, lat, 72, 90, 8, 24) && inland < 160) return JUNGLE;
  if (inBox(lon, lat, -52, -43, -2, 4)) return MANGROVE;
  if (inBox(lon, lat, -94, -88, 28, 32)) return SWAMP;

  if (inBox(lon, lat, -10, 42, -8, 16) && !inBox(lon, lat, 8, 32, -4, 6)) return SAVANNA;
  if (inBox(lon, lat, -70, -40, -24, -8)) return SAVANNA;
  if (inBox(lon, lat, 112, 150, -34, -14) && inland < 155) return SAVANNA;
  if (inBox(lon, lat, -104, -88, 32, 46)) return SUNFLOWER;
  if (inBox(lon, lat, -100, -82, 36, 48)) return PLAINS;
  if (inBox(lon, lat, -8, 28, 44, 56)) return FOREST;
  if (inBox(lon, lat, -82, -68, 36, 48)) return FOREST;
  if (inBox(lon, lat, 100, 130, 22, 42)) return FOREST;
  if (inBox(lon, lat, -6, 16, 36, 44)) return PLAINS;
  if (lat > 42 && lat < 60) return FOREST;
  if (lat > 28 && lat < 42) return inland > 150 ? PLAINS : FOREST;
  if (Math.abs(lat) < 22) return inland > 152 ? SAVANNA : JUNGLE;
  if (lat < -40) return TAIGA;
  return PLAINS;
}

export function earthColumn(
  world: WorldProject,
  x: number,
  z: number,
  raster: EarthRaster,
  seed: number,
): {
  height: number;
  biome: number;
  surface: number;
  fill: number;
  water: number;
  cave: number;
} {
  const { lon, lat } = lonLatFromLocal(world, x, z);
  const s = sample(raster, lon, lat);
  const isLand = s.land > 127;
  const e = s.elev;
  let h: number;
  if (isLand) {
    const above = Math.max(0, e - SEA_GRAY);
    const detail = (fbm((lon + 180) * 0.35, (lat + 90) * 0.5, seed + 17, 2) - 0.5) * 3;
    h = Math.round(SEA_LEVEL + 1 + above * 0.78 + detail);
    if (lat < -62) h = Math.max(h, SEA_LEVEL + 16);
  } else {
    const below = Math.max(0, SEA_GRAY - e);
    h = Math.round(SEA_LEVEL - 5 - below * 0.32);
  }
  h = Math.max(-50, Math.min(220, h));
  let wet = !isLand || h < SEA_LEVEL;
  let b = biomeAt(lon, lat, h, e, wet);
  if (isLand && !wet && h <= SEA_LEVEL + 3) {
    const stepLon = 360 / Math.max(1, world.width);
    const stepLat = 180 / Math.max(1, world.depth);
    for (const [dl, da] of [
      [stepLon, 0],
      [-stepLon, 0],
      [0, stepLat],
      [0, -stepLat],
    ] as const) {
      if (sample(raster, lon + dl, lat + da).land <= 127) {
        b = BEACH;
        break;
      }
    }
  }
  let surface = GRASS;
  let fill = DIRT;
  if (wet) {
    surface = SAND;
    fill = SAND;
  } else if (b === BEACH || b === DESERT) {
    surface = SAND;
    fill = SAND;
  } else if (b === SNOWY_PEAKS || b === SNOWY_PLAINS || b === SNOWY_TAIGA) {
    surface = SNOW;
    fill = STONE;
  } else if (b === MOUNTAINS || b === WOODED_PEAKS) {
    surface = h > 140 || e > 200 ? SNOW : STONE;
    fill = STONE;
  }
  if (!wet && (b === SNOWY_PEAKS || (b === MOUNTAINS && h > 140) || e > 200)) {
    surface = SNOW;
    fill = STONE;
  }
  if (wet && (b === FROZEN_OCEAN || lat > 68 || lat < -62)) surface = ICE;
  if (lat < -62 && !wet) {
    surface = SNOW;
    fill = STONE;
  }
  return {
    height: h,
    biome: b,
    surface,
    fill,
    water: wet ? 1 : 0,
    cave: Math.round(fbm((world.originX + x) * 0.04, (world.originZ + z) * 0.04, seed + 90, 3) * 255),
  };
}

export function generateEarth(world: WorldProject, seed: number, replace = true, raster: EarthRaster) {
  if (world.virtual) {
    if (replace) world.tiles = new Map();
    return;
  }
  const { width, depth } = world;
  for (let z = 0; z < depth; z++) {
    for (let x = 0; x < width; x++) {
      const col = earthColumn(world, x, z, raster, seed);
      const i = idxOf(world, x, z);
      if (!replace) col.height = Math.round((world.height[i]! + col.height) / 2);
      world.height[i] = col.height;
      world.biome[i] = col.biome;
      world.cave[i] = col.cave;
      world.surface[i] = col.surface;
      world.fill[i] = col.fill;
      world.water[i] = col.water;
    }
  }
}

function columnAt(world: WorldProject, lx: number, lz: number) {
  if (world.virtual) {
    const r = cached;
    if (!r) return null;
    const seed = Number(world.settings.seed & 0xffffffffn) | 0;
    return earthColumn(world, lx, lz, r, seed);
  }
  const i = idxOf(world, lx, lz);
  return {
    height: world.height[i]!,
    biome: world.biome[i]!,
    surface: world.surface[i]!,
    water: world.water[i]!,
  };
}

function spawnScore(world: WorldProject, lx: number, lz: number, cx: number, cz: number): number {
  const col = columnAt(world, lx, lz);
  if (!col) return -1;
  if (col.water) return -1;
  const y = col.height + 1;
  if (y <= SEA_LEVEL || y > 200) return -1;
  if (!isSolid(col.surface)) return -1;
  const b = col.biome;
  let s = 8;
  if (b === PLAINS || b === SUNFLOWER) s += 6;
  else if (b === FOREST) s += 4;
  else if (b === SAVANNA || b === BEACH) s += 3;
  else if (b === DESERT) s += 1;
  else if (b === MOUNTAINS || b === SNOWY_PEAKS) s -= 3;
  if (y >= 64 && y <= 92) s += 3;
  const dx = lx - cx;
  const dz = lz - cz;
  s -= Math.sqrt(dx * dx + dz * dz) * 0.02;
  return s;
}

export function findSpawnInRegion(
  world: WorldProject,
  region: { lon0: number; lon1: number; lat0: number; lat1: number },
): { x: number; y: number; z: number } | null {
  const a = localFromLonLat(world, region.lon0, region.lat1);
  const b = localFromLonLat(world, region.lon1, region.lat0);
  const x0 = Math.max(0, Math.min(a.lx, b.lx));
  const z0 = Math.max(0, Math.min(a.lz, b.lz));
  const x1 = Math.min(world.width - 1, Math.max(a.lx, b.lx));
  const z1 = Math.min(world.depth - 1, Math.max(a.lz, b.lz));
  const cx = (x0 + x1) / 2;
  const cz = (z0 + z1) / 2;
  let best = -1;
  let bx = x0;
  let bz = z0;
  const step = Math.max(1, Math.floor(Math.max(x1 - x0, z1 - z0) / 96));
  for (let z = z0; z <= z1; z += step) {
    for (let x = x0; x <= x1; x += step) {
      const sc = spawnScore(world, x, z, cx, cz);
      if (sc > best) {
        best = sc;
        bx = x;
        bz = z;
      }
    }
  }
  if (best < 0) return null;
  const col = columnAt(world, bx, bz);
  const y = (col?.height ?? 64) + 1;
  return { x: worldX(world, bx), y, z: worldZ(world, bz) };
}

export function randomLandSpawn(world: WorldProject): { x: number; y: number; z: number } | null {
  const hits: Array<{ x: number; z: number }> = [];
  const step = Math.max(1, Math.floor(Math.max(world.width, world.depth) / 128));
  for (let z = 0; z < world.depth; z += step) {
    for (let x = 0; x < world.width; x += step) {
      if (spawnScore(world, x, z, world.width / 2, world.depth / 2) > 0) hits.push({ x, z });
    }
  }
  if (!hits.length) return null;
  const pick = hits[(Math.random() * hits.length) | 0]!;
  const col = columnAt(world, pick.x, pick.z);
  return { x: worldX(world, pick.x), y: (col?.height ?? 64) + 1, z: worldZ(world, pick.z) };
}

export function highestLandSpawn(world: WorldProject): { x: number; y: number; z: number } | null {
  let best = -999;
  let bx = 0;
  let bz = 0;
  const step = Math.max(1, Math.floor(Math.max(world.width, world.depth) / 256));
  for (let z = 0; z < world.depth; z += step) {
    for (let x = 0; x < world.width; x += step) {
      const col = columnAt(world, x, z);
      if (!col || col.water) continue;
      if (col.height > best && isSolid(col.surface)) {
        best = col.height;
        bx = x;
        bz = z;
      }
    }
  }
  if (best < 0) return null;
  return { x: worldX(world, bx), y: best + 1, z: worldZ(world, bz) };
}

