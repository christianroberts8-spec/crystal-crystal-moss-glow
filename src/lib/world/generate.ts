import {
  BEACH,
  BIOMES,
  DEEP_OCEAN,
  DESERT,
  FOREST,
  MOUNTAINS,
  OCEAN,
  PLAINS,
  RIVER,
  SNOWY_PLAINS,
  TAIGA,
} from "./biomes";
import { GRASS, SAND, STONE, SNOW, DIRT } from "./blocks";
import { idxOf, SEA_LEVEL, applyBiomeDefaults } from "./grid";
import { fbm, ridged } from "./noise";
import { generateEarth, type EarthRaster } from "./earth";
import type { TerrainPreset, WorldProject } from "./types";

function seedNum(seed: bigint): number {
  return Number(seed & 0xffffffffn) | 0;
}

export function generatedColumn(world: WorldProject, x: number, z: number, seed: number) {
  const preset = world.terrainKind ?? "continents";
  const seaBias =
    preset === "oceans" ? 0.28 : preset === "islands" || preset === "archipelago" ? 0.12 : preset === "inland" ? -0.18 : 0;
  const mountainGain = preset === "mountains" ? 1.35 : preset === "flat" ? 0.05 : 0.85;
  const continentScale = preset === "islands" || preset === "archipelago" ? 0.018 : 0.0075;
  if (preset === "flat") {
    return { height: 64, biome: PLAINS, surface: GRASS, fill: DIRT, water: 0, cave: 20 };
  }
  const nx = (world.originX + x) * continentScale;
  const nz = (world.originZ + z) * continentScale;
  let continent = fbm(nx, nz, seed, 6, 2, 0.52);
  const warpX = fbm(nx * 1.7 + 12, nz * 1.7, seed + 9, 3);
  const warpZ = fbm(nx * 1.7, nz * 1.7 + 8, seed + 11, 3);
  continent = fbm(nx + warpX * 0.6, nz + warpZ * 0.6, seed, 6);
  if (preset === "archipelago") {
    const cell = fbm(nx * 2.4, nz * 2.4, seed + 4, 4);
    continent = continent * 0.45 + cell * 0.55;
  }
  const ridge = ridged(nx * 2.2, nz * 2.2, seed + 3, 5);
  const detail = fbm(nx * 8, nz * 8, seed + 5, 4);
  let e = (continent - 0.5 + seaBias) * 2;
  e = e * 0.72 + (ridge - 0.45) * 0.55 * mountainGain;
  e += (detail - 0.5) * 0.12;
  if (preset === "inland") e = Math.max(e, -0.05);
  if (preset === "oceans") e -= 0.22;
  let h: number;
  if (e < 0) {
    const depthAmt = Math.min(1, -e);
    h = Math.round(SEA_LEVEL - 8 - depthAmt * 28 - (preset === "oceans" ? 6 : 0));
  } else {
    h = Math.round(SEA_LEVEL + 1 + e * 48 * mountainGain + (preset === "mountains" ? e * 22 : 0));
  }
  h = Math.max(-50, Math.min(220, h));
  const t = fbm(nx * 0.9 + 40, nz * 0.9, seed + 21, 4) - (e > 0.55 ? (e - 0.55) * 0.8 : 0);
  const m = fbm(nx * 0.85 - 30, nz * 0.85, seed + 27, 4);
  let b = PLAINS;
  if (h < SEA_LEVEL - 18) b = DEEP_OCEAN;
  else if (h < SEA_LEVEL) b = OCEAN;
  else if (h <= SEA_LEVEL + 1) b = BEACH;
  else if (e > 0.72 || (preset === "mountains" && e > 0.4)) b = t < 0.35 ? 23 : MOUNTAINS;
  else if (t < 0.28) b = m > 0.5 ? 10 : SNOWY_PLAINS;
  else if (t > 0.72 && m < 0.32) b = DESERT;
  else if (t > 0.68 && m < 0.48) b = 13;
  else if (m > 0.72 && t > 0.6) b = 12;
  else if (m > 0.62) b = FOREST;
  else if (m > 0.5 && t < 0.5) b = TAIGA;
  else if (m < 0.28 && t > 0.55) b = 14;
  else b = PLAINS;
  const water = h < SEA_LEVEL || b === OCEAN || b === DEEP_OCEAN ? 1 : 0;
  let surface = GRASS;
  let fill = DIRT;
  if (b === MOUNTAINS || b === 23) {
    surface = h > 140 ? SNOW : STONE;
    fill = STONE;
  } else if (b === BEACH || b === DESERT) {
    surface = SAND;
    fill = SAND;
  } else if (water) {
    surface = SAND;
    fill = SAND;
  }
  return {
    height: h,
    biome: b,
    surface,
    fill,
    water,
    cave: Math.round(fbm((world.originX + x) * 0.04, (world.originZ + z) * 0.04, seed + 90, 3) * 255),
  };
}

export function generateTerrain(world: WorldProject, preset: TerrainPreset, replace = true, raster?: EarthRaster | null) {
  const seed = seedNum(world.settings.seed);
  world.terrainKind = preset;
  if (world.virtual) {
    if (preset === "earth" && !raster && !world.terrainKind) throw new Error("Earth map data is still loading.");
    if (preset === "earth" && !raster) throw new Error("Earth map data is still loading.");
    if (replace) world.tiles = new Map();
    return;
  }
  const { width, depth } = world;
  const seaBias =
    preset === "oceans" ? 0.28 : preset === "islands" || preset === "archipelago" ? 0.12 : preset === "inland" ? -0.18 : 0;
  const mountainGain = preset === "mountains" ? 1.35 : preset === "flat" ? 0.05 : 0.85;
  const continentScale = preset === "islands" || preset === "archipelago" ? 0.018 : 0.0075;

  const height = world.height;
  const biome = world.biome;
  const water = world.water;
  const cave = world.cave;
  const surface = world.surface;
  const fill = world.fill;

  if (preset === "earth") {
    if (!raster) throw new Error("Earth map data is still loading.");
    generateEarth(world, seed, replace, raster);
    scatterBeaches(world);
    return;
  }

  if (preset === "flat") {
    for (let z = 0; z < depth; z++) {
      for (let x = 0; x < width; x++) {
        const i = idxOf(world, x, z);
        if (!replace && water[i] === 0 && height[i]! > 62) continue;
        height[i] = 64;
        biome[i] = PLAINS;
        water[i] = 0;
        cave[i] = 20;
        surface[i] = GRASS;
        fill[i] = DIRT;
      }
    }
    return;
  }

  const tempMap = new Float32Array(width * depth);
  const moistMap = new Float32Array(width * depth);
  const elevMap = new Float32Array(width * depth);

  for (let z = 0; z < depth; z++) {
    for (let x = 0; x < width; x++) {
      const nx = (world.originX + x) * continentScale;
      const nz = (world.originZ + z) * continentScale;
      let continent = fbm(nx, nz, seed, 6, 2, 0.52);
      const warpX = fbm(nx * 1.7 + 12, nz * 1.7, seed + 9, 3);
      const warpZ = fbm(nx * 1.7, nz * 1.7 + 8, seed + 11, 3);
      continent = fbm(nx + warpX * 0.6, nz + warpZ * 0.6, seed, 6);

      if (preset === "archipelago") {
        const cell = fbm(nx * 2.4, nz * 2.4, seed + 4, 4);
        continent = continent * 0.45 + cell * 0.55;
      }

      const ridge = ridged(nx * 2.2, nz * 2.2, seed + 3, 5);
      const detail = fbm(nx * 8, nz * 8, seed + 5, 4);
      let e = (continent - 0.5 + seaBias) * 2;
      e = e * 0.72 + (ridge - 0.45) * 0.55 * mountainGain;
      e += (detail - 0.5) * 0.12;

      if (preset === "inland") e = Math.max(e, -0.05);
      if (preset === "oceans") e -= 0.22;

      const i = idxOf(world, x, z);
      elevMap[i] = e;
      tempMap[i] = fbm(nx * 0.9 + 40, nz * 0.9, seed + 21, 4) - (e > 0.55 ? (e - 0.55) * 0.8 : 0);
      moistMap[i] = fbm(nx * 0.85 - 30, nz * 0.85, seed + 27, 4);
    }
  }

  for (let z = 0; z < depth; z++) {
    for (let x = 0; x < width; x++) {
      const i = idxOf(world, x, z);
      const e = elevMap[i]!;
      let h: number;
      if (e < 0) {
        const depthAmt = Math.min(1, -e);
        h = Math.round(SEA_LEVEL - 8 - depthAmt * 28 - (preset === "oceans" ? 6 : 0));
      } else {
        h = Math.round(SEA_LEVEL + 1 + e * 48 * mountainGain + (preset === "mountains" ? e * 22 : 0));
      }
      h = Math.max(-50, Math.min(220, h));
      if (!replace) {
        // blend 50%
        h = Math.round((height[i]! + h) / 2);
      }
      height[i] = h;

      const t = tempMap[i]!;
      const m = moistMap[i]!;
      let b = PLAINS;
      if (h < SEA_LEVEL - 18) b = DEEP_OCEAN;
      else if (h < SEA_LEVEL) b = OCEAN;
      else if (h <= SEA_LEVEL + 1) b = BEACH;
      else if (e > 0.72 || (preset === "mountains" && e > 0.4)) b = t < 0.35 ? 23 : MOUNTAINS;
      else if (t < 0.28) b = m > 0.5 ? 10 : SNOWY_PLAINS;
      else if (t > 0.72 && m < 0.32) b = DESERT;
      else if (t > 0.68 && m < 0.48) b = 13; // savanna
      else if (m > 0.72 && t > 0.6) b = 12; // jungle
      else if (m > 0.62) b = FOREST;
      else if (m > 0.5 && t < 0.5) b = TAIGA;
      else if (m < 0.28 && t > 0.55) b = 14; // badlands
      else b = PLAINS;

      biome[i] = b;
      water[i] = h < SEA_LEVEL || b === OCEAN || b === DEEP_OCEAN ? 1 : 0;
      cave[i] = Math.round(fbm((world.originX + x) * 0.04, (world.originZ + z) * 0.04, seed + 90, 3) * 255);
      applyBiomeDefaults(world, i);
      if (b === MOUNTAINS || b === 23) {
        surface[i] = h > 140 ? SNOW : STONE;
        fill[i] = STONE;
      }
      if (b === BEACH || b === DESERT) {
        surface[i] = SAND;
        fill[i] = SAND;
      }
    }
  }

  carveRivers(world, elevMap, seed);
  if (preset !== "oceans") scatterBeaches(world);
}

function carveRivers(world: WorldProject, elev: Float32Array, seed: number) {
  const { width, depth } = world;
  const rng = (x: number, z: number) => fbm(x * 0.03, z * 0.03, seed + 120, 2);
  const sources: Array<[number, number]> = [];
  for (let z = 4; z < depth - 4; z += 10) {
    for (let x = 4; x < width - 4; x += 10) {
      const i = idxOf(world, x, z);
      if (world.height[i]! > SEA_LEVEL + 28 && rng(x, z) > 0.62) sources.push([x, z]);
    }
  }
  for (const [sx, sz] of sources.slice(0, 24)) {
    let x = sx;
    let z = sz;
    for (let step = 0; step < 400; step++) {
      const i = idxOf(world, x | 0, z | 0);
      if (!world.water[i] && world.height[i]! > SEA_LEVEL - 2) {
        world.biome[i] = RIVER;
        world.water[i] = 1;
        world.height[i] = Math.min(world.height[i]!, SEA_LEVEL - 1);
        world.surface[i] = SAND;
        world.fill[i] = SAND;
        // widen
        for (const [dx, dz] of [
          [1, 0],
          [-1, 0],
          [0, 1],
          [0, -1],
        ] as const) {
          const nx = (x | 0) + dx;
          const nz = (z | 0) + dz;
          if (nx < 0 || nz < 0 || nx >= width || nz >= depth) continue;
          const j = idxOf(world, nx, nz);
          if (world.height[j]! > SEA_LEVEL + 40) continue;
          world.biome[j] = RIVER;
          world.water[j] = 1;
          world.height[j] = Math.min(world.height[j]!, SEA_LEVEL - 1);
        }
      }
      if (world.height[i]! < SEA_LEVEL - 4) break;
      let best = Infinity;
      let bx = 0;
      let bz = 0;
      for (let dz = -1; dz <= 1; dz++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (!dx && !dz) continue;
          const nx = (x | 0) + dx;
          const nz = (z | 0) + dz;
          if (nx < 0 || nz < 0 || nx >= width || nz >= depth) continue;
          const e = elev[idxOf(world, nx, nz)]! + rng(nx, nz) * 0.05;
          if (e < best) {
            best = e;
            bx = dx;
            bz = dz;
          }
        }
      }
      if (bx === 0 && bz === 0) break;
      x += bx;
      z += bz;
    }
  }
}

function scatterBeaches(world: WorldProject) {
  const { width, depth } = world;
  for (let z = 1; z < depth - 1; z++) {
    for (let x = 1; x < width - 1; x++) {
      const i = idxOf(world, x, z);
      if (world.water[i]) continue;
      if (world.height[i]! > SEA_LEVEL + 3) continue;
      let nearWater = false;
      for (let dz = -1; dz <= 1 && !nearWater; dz++) {
        for (let dx = -1; dx <= 1; dx++) {
          const j = idxOf(world, x + dx, z + dz);
          if (world.water[j]) nearWater = true;
        }
      }
      if (nearWater) {
        world.biome[i] = BEACH;
        world.surface[i] = SAND;
        world.fill[i] = SAND;
      }
    }
  }
}

export function paintBiomeRegion(world: WorldProject, biomeId: number, rect: { x0: number; z0: number; x1: number; z1: number }) {
  const x0 = Math.max(0, Math.min(rect.x0, rect.x1));
  const z0 = Math.max(0, Math.min(rect.z0, rect.z1));
  const x1 = Math.min(world.width - 1, Math.max(rect.x0, rect.x1));
  const z1 = Math.min(world.depth - 1, Math.max(rect.z0, rect.z1));
  for (let z = z0; z <= z1; z++) {
    for (let x = x0; x <= x1; x++) {
      const i = idxOf(world, x, z);
      world.biome[i] = biomeId;
      applyBiomeDefaults(world, i);
    }
  }
}

void BIOMES;
