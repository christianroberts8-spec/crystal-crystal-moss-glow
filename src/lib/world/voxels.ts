import { BIOMES } from "./biomes";
import { AIR } from "./blocks";
import { inBounds, worldX, worldZ } from "./grid";
import { exportRegion, readColumn } from "./column";
import { hash3 } from "./noise";
import { structureVoxels, treeVoxels, type Voxel } from "./structures";
import type { WorldProject } from "./types";

function hash2(x: number, z: number, seed: number): number {
  let n = Math.imul(x, 374761393) + Math.imul(z, 668265263) + seed;
  n = (n ^ (n >>> 13)) | 0;
  n = Math.imul(n, 1274126177);
  return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
}

export function buildOverlay(world: WorldProject): Map<string, number> {
  const overlay = new Map<string, number>();
  const seed = Number(world.settings.seed & 0xffffffffn) | 0;

  const put = (x: number, y: number, z: number, block: number) => {
    overlay.set(`${x},${y},${z}`, block);
  };

  const stamp = (wx: number, wy: number, wz: number, voxels: Voxel[]) => {
    for (const v of voxels) put(wx + v.dx, wy + v.dy, wz + v.dz, v.block);
  };

  const region = exportRegion(world);
  const x0 = Math.max(2, region.originX - world.originX);
  const z0 = Math.max(2, region.originZ - world.originZ);
  const x1 = Math.min(world.width - 3, x0 + region.width);
  const z1 = Math.min(world.depth - 3, z0 + region.depth);

  for (let z = z0; z < z1; z++) {
    for (let x = x0; x < x1; x++) {
      const col = readColumn(world, x, z);
      if (col.water) continue;
      const b = BIOMES[col.biome];
      if (!b?.tree) continue;
      const n = hash2(worldX(world, x), worldZ(world, z), seed + 77);
      const density = b.tree === "jungle" ? 0.18 : b.tree === "cactus" ? 0.04 : b.tree === "oak" ? 0.045 : 0.07;
      if (n > density) continue;
      stamp(worldX(world, x), col.height, worldZ(world, z), treeVoxels(b.tree));
    }
  }

  for (const s of world.structures) {
    const lx = s.x - world.originX;
    const lz = s.z - world.originZ;
    if (!inBounds(world, lx, lz)) continue;
    const wy = readColumn(world, lx, lz).height;
    const voxels =
      s.kind === "custom" && world.customStructures[s.id]
        ? clipboardToVoxels(world.customStructures[s.id]!)
        : structureVoxels(s.kind, s.rotation, { year: world.year, ruin: s.ruin });
    stamp(s.x, wy, s.z, voxels);
  }

  return overlay;
}

function clipboardToVoxels(clip: { w: number; d: number; height: Int16Array; surface: Uint8Array }): Voxel[] {
  const v: Voxel[] = [];
  let minH = Infinity;
  for (let i = 0; i < clip.height.length; i++) minH = Math.min(minH, clip.height[i]!);
  for (let z = 0; z < clip.d; z++) {
    for (let x = 0; x < clip.w; x++) {
      const i = x + z * clip.w;
      const h = clip.height[i]! - minH;
      v.push({ dx: x, dy: h, dz: z, block: clip.surface[i]! });
    }
  }
  return v;
}

export function isCaveAt(world: WorldProject, x: number, y: number, z: number): boolean {
  const lx = x - world.originX;
  const lz = z - world.originZ;
  if (!inBounds(world, lx, lz)) return false;
  const col = readColumn(world, lx, lz);
  const intensity = col.cave / 255;
  if (intensity < 0.42) return false;
  if (y > col.height - 6) return false;
  if (y < -54) return false;
  const seed = Number(world.settings.seed & 0xffffffffn) | 0;
  const n = hash3(x >> 1, y >> 1, z >> 1, seed + 4);
  const n2 = hash3(x, y, z, seed + 9);
  return n > 0.62 && n2 > 0.45 && intensity > 0.5;
}
