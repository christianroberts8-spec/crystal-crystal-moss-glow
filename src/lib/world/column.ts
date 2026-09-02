import { BEACH, BIOMES, DEEP_OCEAN, OCEAN, RIVER } from "./biomes";
import { AIR, BEDROCK, DEEPSLATE, DIRT, GRASS, SAND, STONE, SNOW, WATER } from "./blocks";
import { MIN_Y, MAX_Y, SEA_LEVEL } from "../bedrock/chunk";
import { earthColumn, peekEarthRaster } from "./earth";
import { generatedColumn } from "./generate";
import { TILE_SIZE, type OverlayTile, type WorldProject } from "./types";

export interface Column {
  height: number;
  biome: number;
  surface: number;
  fill: number;
  water: number;
  cave: number;
}

function seedNum(seed: bigint): number {
  return Number(seed & 0xffffffffn) | 0;
}

export function tileKey(tx: number, tz: number): number {
  return tx * 1_048_576 + (tz + 524288);
}

export function tileCoords(x: number, z: number): { tx: number; tz: number; li: number } {
  const tx = Math.floor(x / TILE_SIZE);
  const tz = Math.floor(z / TILE_SIZE);
  const lx = x - tx * TILE_SIZE;
  const lz = z - tz * TILE_SIZE;
  return { tx, tz, li: lx + lz * TILE_SIZE };
}

export function emptyTile(): OverlayTile {
  const n = TILE_SIZE * TILE_SIZE;
  return {
    filled: new Uint8Array(n),
    height: new Int16Array(n),
    biome: new Uint8Array(n),
    surface: new Uint8Array(n),
    fill: new Uint8Array(n),
    water: new Uint8Array(n),
    cave: new Uint8Array(n),
  };
}

export function cloneTiles(tiles?: Map<number, OverlayTile>): Map<number, OverlayTile> {
  const out = new Map<number, OverlayTile>();
  if (!tiles) return out;
  for (const [k, t] of tiles) {
    out.set(k, {
      filled: t.filled.slice(),
      height: t.height.slice(),
      biome: t.biome.slice(),
      surface: t.surface.slice(),
      fill: t.fill.slice(),
      water: t.water.slice(),
      cave: t.cave.slice(),
    });
  }
  return out;
}

export function styleColumn(col: Column): Column {
  const b = BIOMES[col.biome] ?? BIOMES[0]!;
  col.surface = b.surface;
  col.fill = b.fill;
  const oceanish = b.id === OCEAN || b.id === DEEP_OCEAN || b.id === RIVER;
  if (oceanish) col.water = 1;
  else if (b.id === BEACH) col.water = col.height < SEA_LEVEL ? 1 : 0;
  else col.water = 0;
  if (b.extra === "snow" && col.height > SEA_LEVEL + 8) col.surface = SNOW;
  return col;
}

export function baseColumn(world: WorldProject, x: number, z: number): Column {
  const seed = seedNum(world.settings.seed);
  if (world.terrainKind === "earth") {
    const raster = peekEarthRaster();
    if (raster) return earthColumn(world, x, z, raster, seed);
    return styleColumn({
      height: SEA_LEVEL - 12,
      biome: OCEAN,
      surface: SAND,
      fill: SAND,
      water: 1,
      cave: 20,
    });
  }
  return generatedColumn(world, x, z, seed);
}

export function readColumn(world: WorldProject, x: number, z: number): Column {
  if (world.virtual && world.tiles) {
    const { tx, tz, li } = tileCoords(x, z);
    const tile = world.tiles.get(tileKey(tx, tz));
    if (tile && tile.filled[li]) {
      return {
        height: tile.height[li]!,
        biome: tile.biome[li]!,
        surface: tile.surface[li]!,
        fill: tile.fill[li]!,
        water: tile.water[li]!,
        cave: tile.cave[li]!,
      };
    }
    return baseColumn(world, x, z);
  }
  const i = x + z * world.width;
  return {
    height: world.height[i] ?? 64,
    biome: world.biome[i] ?? 0,
    surface: world.surface[i] ?? GRASS,
    fill: world.fill[i] ?? DIRT,
    water: world.water[i] ?? 0,
    cave: world.cave[i] ?? 0,
  };
}

export function writeColumn(world: WorldProject, x: number, z: number, patch: Partial<Column>) {
  const cur = readColumn(world, x, z);
  const next: Column = {
    height: patch.height ?? cur.height,
    biome: patch.biome ?? cur.biome,
    surface: patch.surface ?? cur.surface,
    fill: patch.fill ?? cur.fill,
    water: patch.water ?? cur.water,
    cave: patch.cave ?? cur.cave,
  };
  if (world.virtual) {
    if (!world.tiles) world.tiles = new Map();
    const { tx, tz, li } = tileCoords(x, z);
    const k = tileKey(tx, tz);
    let tile = world.tiles.get(k);
    if (!tile) {
      tile = emptyTile();
      world.tiles.set(k, tile);
    }
    tile.filled[li] = 1;
    tile.height[li] = next.height;
    tile.biome[li] = next.biome;
    tile.surface[li] = next.surface;
    tile.fill[li] = next.fill;
    tile.water[li] = next.water;
    tile.cave[li] = next.cave;
    return;
  }
  const i = x + z * world.width;
  world.height[i] = next.height;
  world.biome[i] = next.biome;
  world.surface[i] = next.surface;
  world.fill[i] = next.fill;
  world.water[i] = next.water;
  world.cave[i] = next.cave;
}

export function stackColumn(col: Column, y: number, lx: number, lz: number): number {
  const h = col.height;
  const wet = col.water === 1;
  const surface = col.surface;
  const fill = col.fill;
  if (y < MIN_Y || y > MAX_Y) return AIR;
  if (y === MIN_Y) return BEDROCK;
  if (y === MIN_Y + 1) return (lx * 73 + lz * 37 + y) & 3 ? BEDROCK : DEEPSLATE;
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

export function exportRegion(world: WorldProject): { originX: number; originZ: number; width: number; depth: number } {
  if (!world.virtual) {
    return { originX: world.originX, originZ: world.originZ, width: world.width, depth: world.depth };
  }
  const win = Math.max(256, Math.min(4096, world.exportWindow ?? 2048));
  const half = Math.floor(win / 2);
  let x0 = Math.floor((world.settings.spawn.x - half) / 16) * 16;
  let z0 = Math.floor((world.settings.spawn.z - half) / 16) * 16;
  const minX = world.originX;
  const minZ = world.originZ;
  const maxX = world.originX + world.width;
  const maxZ = world.originZ + world.depth;
  if (x0 < minX) x0 = minX;
  if (z0 < minZ) z0 = minZ;
  if (x0 + win > maxX) x0 = Math.max(minX, maxX - win);
  if (z0 + win > maxZ) z0 = Math.max(minZ, maxZ - win);
  return { originX: x0, originZ: z0, width: win, depth: win };
}
