import { SEA_LEVEL, MIN_Y, MAX_Y } from "../bedrock/chunk";
import { DEFAULT_SETTINGS, type WorldSettings } from "../bedrock/leveldat";
import {
  BEDROCK,
  DEEPSLATE,
  DIRT,
  GRASS,
  SAND,
  STONE,
  WATER,
  SNOW,
  AIR,
  isSolid,
  BLOCK_BY_ID,
} from "./blocks";
import { BIOMES, OCEAN, DEEP_OCEAN, RIVER, BEACH } from "./biomes";
import type { WorldProject, Rect, Clipboard, OverlayTile } from "./types";
import { isVirtualSize } from "./types";

export { SEA_LEVEL, MIN_Y, MAX_Y };

export function idxOf(world: { width: number }, x: number, z: number): number {
  return x + z * world.width;
}

export function inBounds(world: { width: number; depth: number }, x: number, z: number): boolean {
  return x >= 0 && z >= 0 && x < world.width && z < world.depth;
}

export function worldX(world: WorldProject, lx: number): number {
  return world.originX + lx;
}

export function worldZ(world: WorldProject, lz: number): number {
  return world.originZ + lz;
}

export function localX(world: WorldProject, wx: number): number {
  return wx - world.originX;
}

export function localZ(world: WorldProject, wz: number): number {
  return wz - world.originZ;
}

export function createEmptyWorld(opts: {
  name?: string;
  width: number;
  depth: number;
  seed?: bigint;
  settings?: Partial<WorldSettings>;
}): WorldProject {
  const { width, depth } = opts;
  const virtual = isVirtualSize(width, depth);
  const n = virtual ? 0 : width * depth;
  const settings = DEFAULT_SETTINGS(opts.name ?? "REMAP World");
  if (opts.seed !== undefined) settings.seed = opts.seed;
  Object.assign(settings, opts.settings);
  const originX = -Math.floor(width / 2);
  const originZ = -Math.floor(depth / 2);
  settings.spawn = { x: 0, y: 72, z: 0 };
  return {
    id: crypto.randomUUID(),
    createdAt: Date.now(),
    updatedAt: Date.now(),
    settings,
    originX,
    originZ,
    width,
    depth,
    height: new Int16Array(n).fill(64),
    biome: new Uint8Array(n),
    surface: new Uint8Array(n).fill(GRASS),
    fill: new Uint8Array(n).fill(DIRT),
    water: new Uint8Array(n),
    cave: new Uint8Array(n),
    structures: [],
    entities: [],
    customStructures: {},
    virtual,
    tiles: virtual ? new Map() : undefined,
    exportWindow: virtual ? 2048 : undefined,
    year: 2026,
    month: 1,
    day: 1,
    keepManualAcrossYears: true,
  };
}

export function cloneArrays(world: WorldProject): WorldProject {
  return {
    ...world,
    height: world.height.slice(),
    biome: world.biome.slice(),
    surface: world.surface.slice(),
    fill: world.fill.slice(),
    water: world.water.slice(),
    cave: world.cave.slice(),
    structures: world.structures.map((s) => ({ ...s })),
    entities: world.entities.map((e) => ({ ...e })),
    settings: { ...world.settings, spawn: { ...world.settings.spawn } },
  };
}

function cloneTile(t: OverlayTile): OverlayTile {
  return {
    filled: t.filled.slice(),
    height: t.height.slice(),
    biome: t.biome.slice(),
    surface: t.surface.slice(),
    fill: t.fill.slice(),
    water: t.water.slice(),
    cave: t.cave.slice(),
  };
}

export function snapshotRect(world: WorldProject, rect: Rect) {
  const x0 = Math.max(0, Math.min(rect.x0, rect.x1));
  const z0 = Math.max(0, Math.min(rect.z0, rect.z1));
  const x1 = Math.min(world.width - 1, Math.max(rect.x0, rect.x1));
  const z1 = Math.min(world.depth - 1, Math.max(rect.z0, rect.z1));
  if (world.virtual) {
    return {
      x0,
      z0,
      x1,
      z1,
      w: 0,
      d: 0,
      height: new Int16Array(0),
      biome: new Uint8Array(0),
      surface: new Uint8Array(0),
      fill: new Uint8Array(0),
      water: new Uint8Array(0),
      cave: new Uint8Array(0),
      tiles: world.tiles ? [...world.tiles.entries()].map(([k, t]) => ({ k, t: cloneTile(t) })) : [],
    };
  }
  const w = x1 - x0 + 1;
  const d = z1 - z0 + 1;
  const area = w * d;
  if (area > 1_000_000) {
    return {
      x0,
      z0,
      x1,
      z1,
      w: 0,
      d: 0,
      height: new Int16Array(0),
      biome: new Uint8Array(0),
      surface: new Uint8Array(0),
      fill: new Uint8Array(0),
      water: new Uint8Array(0),
      cave: new Uint8Array(0),
    };
  }
  const height = new Int16Array(w * d);
  const biome = new Uint8Array(w * d);
  const surface = new Uint8Array(w * d);
  const fill = new Uint8Array(w * d);
  const water = new Uint8Array(w * d);
  const cave = new Uint8Array(w * d);
  for (let z = 0; z < d; z++) {
    for (let x = 0; x < w; x++) {
      const s = x + z * w;
      const i = idxOf(world, x0 + x, z0 + z);
      height[s] = world.height[i]!;
      biome[s] = world.biome[i]!;
      surface[s] = world.surface[i]!;
      fill[s] = world.fill[i]!;
      water[s] = world.water[i]!;
      cave[s] = world.cave[i]!;
    }
  }
  return { x0, z0, x1, z1, w, d, height, biome, surface, fill, water, cave };
}

export type RectSnap = ReturnType<typeof snapshotRect>;

export function restoreRect(world: WorldProject, snap: RectSnap) {
  if (world.virtual && "tiles" in snap && Array.isArray(snap.tiles)) {
    world.tiles = new Map(snap.tiles.map((e: { k: number; t: OverlayTile }) => [e.k, cloneTile(e.t)]));
    return;
  }
  if (snap.w === 0) return;
  for (let z = 0; z < snap.d; z++) {
    for (let x = 0; x < snap.w; x++) {
      const s = x + z * snap.w;
      const i = idxOf(world, snap.x0 + x, snap.z0 + z);
      world.height[i] = snap.height[s]!;
      world.biome[i] = snap.biome[s]!;
      world.surface[i] = snap.surface[s]!;
      world.fill[i] = snap.fill[s]!;
      world.water[i] = snap.water[s]!;
      world.cave[i] = snap.cave[s]!;
    }
  }
}

export function copyRect(world: WorldProject, rect: Rect): Clipboard {
  const snap = snapshotRect(world, rect);
  return {
    w: snap.w,
    d: snap.d,
    height: snap.height,
    biome: snap.biome,
    surface: snap.surface,
    fill: snap.fill,
    water: snap.water,
  };
}

export function pasteClipboard(world: WorldProject, x: number, z: number, clip: Clipboard) {
  for (let dz = 0; dz < clip.d; dz++) {
    for (let dx = 0; dx < clip.w; dx++) {
      const lx = x + dx;
      const lz = z + dz;
      if (!inBounds(world, lx, lz)) continue;
      const s = dx + dz * clip.w;
      const i = idxOf(world, lx, lz);
      world.height[i] = clip.height[s]!;
      world.biome[i] = clip.biome[s]!;
      world.surface[i] = clip.surface[s]!;
      world.fill[i] = clip.fill[s]!;
      world.water[i] = clip.water[s]!;
    }
  }
}

export function applyBiomeDefaults(world: WorldProject, i: number) {
  const b = BIOMES[world.biome[i]!] ?? BIOMES[0]!;
  world.surface[i] = b.surface;
  world.fill[i] = b.fill;
  const oceanish = b.id === OCEAN || b.id === DEEP_OCEAN || b.id === RIVER;
  if (oceanish) {
    world.water[i] = 1;
  } else if (b.id === BEACH) {
    world.water[i] = world.height[i]! < SEA_LEVEL ? 1 : 0;
  } else {
    world.water[i] = 0;
  }
  if (b.extra === "snow" && world.height[i]! > SEA_LEVEL + 8) {
    world.surface[i] = SNOW;
  }
}

export function surfaceY(world: WorldProject, lx: number, lz: number): number {
  if (world.virtual) return 64;
  const i = idxOf(world, lx, lz);
  const h = world.height[i]!;
  if (world.water[i]) return Math.max(h, SEA_LEVEL);
  return h;
}

export function spawnOnTerrain(world: WorldProject, wx: number, wz: number): { x: number; y: number; z: number } | null {
  const lx = localX(world, wx);
  const lz = localZ(world, wz);
  if (!inBounds(world, lx, lz)) return null;
  if (world.virtual) return { x: wx, y: world.settings.spawn.y || 72, z: wz };
  const i = idxOf(world, lx, lz);
  if (world.water[i]) return null;
  const y = world.height[i]! + 1;
  if (y <= MIN_Y + 2 || y >= MAX_Y - 2) return null;
  if (!isSolid(world.surface[i]!)) return null;
  return { x: wx, y, z: wz };
}

export function findSafeSpawn(world: WorldProject): { x: number; y: number; z: number } {
  const cx = Math.floor(world.width / 2);
  const cz = Math.floor(world.depth / 2);
  if (world.virtual) return { x: worldX(world, cx), y: 72, z: worldZ(world, cz) };
  for (let r = 0; r < Math.max(world.width, world.depth); r++) {
    for (let dz = -r; dz <= r; dz++) {
      for (let dx = -r; dx <= r; dx++) {
        if (Math.abs(dx) !== r && Math.abs(dz) !== r) continue;
        const lx = cx + dx;
        const lz = cz + dz;
        if (!inBounds(world, lx, lz)) continue;
        const i = idxOf(world, lx, lz);
        if (world.water[i]) continue;
        const y = world.height[i]! + 1;
        if (y > SEA_LEVEL && y < MAX_Y - 10 && isSolid(world.surface[i]!)) {
          return { x: worldX(world, lx), y, z: worldZ(world, lz) };
        }
      }
    }
  }
  return { x: worldX(world, cx), y: 80, z: worldZ(world, cz) };
}

export function normalizeRect(a: Rect): Rect {
  return {
    x0: Math.min(a.x0, a.x1),
    z0: Math.min(a.z0, a.z1),
    x1: Math.max(a.x0, a.x1),
    z1: Math.max(a.z0, a.z1),
  };
}

export function forBrush(
  world: WorldProject,
  cx: number,
  cz: number,
  radius: number,
  fn: (x: number, z: number, i: number, t: number) => void,
) {
  const r2 = radius * radius;
  for (let z = cz - radius; z <= cz + radius; z++) {
    for (let x = cx - radius; x <= cx + radius; x++) {
      if (!inBounds(world, x, z)) continue;
      const dx = x - cx;
      const dz = z - cz;
      const d2 = dx * dx + dz * dz;
      if (d2 > r2) continue;
      const t = 1 - Math.sqrt(d2) / Math.max(1, radius);
      fn(x, z, idxOf(world, x, z), t);
    }
  }
}

export function columnBlock(
  world: WorldProject,
  lx: number,
  y: number,
  lz: number,
  overlay: Map<string, number> | undefined,
): number {
  if (overlay) {
    const key = `${worldX(world, lx)},${y},${worldZ(world, lz)}`;
    const ov = overlay.get(key);
    if (ov !== undefined) return ov;
  }
  const i = idxOf(world, lx, lz);
  const h = world.height[i]!;
  const wet = world.water[i] === 1;
  const surface = world.surface[i]!;
  const fill = world.fill[i]!;
  if (y < MIN_Y || y > MAX_Y) return AIR;
  if (y === MIN_Y) return BEDROCK;
  if (y === MIN_Y + 1) return ((lx * 73 + lz * 37 + y) & 3) ? BEDROCK : DEEPSLATE;
  if (wet) {
    if (y > SEA_LEVEL) return AIR;
    if (y > h) return WATER;
    if (y === h) return surface || SAND;
    if (y > h - 3) return fill || SAND;
    if (y < 0) return DEEPSLATE;
    return STONE;
  }
  if (y > h) return AIR;
  if (y === h) return surface || GRASS;
  if (y > h - 4) return fill || DIRT;
  if (y < 0) return DEEPSLATE;
  return STONE;
}

void BLOCK_BY_ID;
