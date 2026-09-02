import type { StructureKind } from "./types";

export interface Voxel {
  dx: number;
  dy: number;
  dz: number;
  block: number;
}

const AIR = 0;
const SAND = 5;
const SANDSTONE = 6;
const WATER = 8;
const OAK_LOG = 10;
const OAK_LEAVES = 11;
const BIRCH_LOG = 12;
const BIRCH_LEAVES = 13;
const SPRUCE_LOG = 14;
const SPRUCE_LEAVES = 15;
const CACTUS = 16;
const COBBLE = 27;
const MOSSY = 28;
const PLANKS = 29;
const GLASS = 31;
const BRICK = 32;
const STONE_BRICK = 33;
const OAK_STAIR = 46;
const TABLE = 48;
const CHEST = 49;
const FURNACE = 50;
const BOOK = 51;
const FENCE = 52;
const PATH = 59;
const CHERRY_LOG = 61;
const CHERRY_LEAVES = 62;
const DARK_LOG = 63;
const DARK_LEAVES = 64;
const JUNGLE_LOG = 65;
const JUNGLE_LEAVES = 66;
const TORCH = 79;
const CHISEL = 87;
const STONE = 2;
const IRON = 41;
const GOLD = 40;
const CALCITE = 57;
const WHITE = 80;
const GRAY = 81;
const BLACK = 82;
const WOOL = 54;
const SMOOTH = 55;
const ORANGE = 83;
const TERRACOTTA = 21;

function box(voxels: Voxel[], x0: number, y0: number, z0: number, x1: number, y1: number, z1: number, block: number) {
  for (let y = y0; y <= y1; y++) {
    for (let z = z0; z <= z1; z++) {
      for (let x = x0; x <= x1; x++) voxels.push({ dx: x, dy: y, dz: z, block });
    }
  }
}

function hollow(voxels: Voxel[], x0: number, y0: number, z0: number, x1: number, y1: number, z1: number, block: number) {
  for (let y = y0; y <= y1; y++) {
    for (let z = z0; z <= z1; z++) {
      for (let x = x0; x <= x1; x++) {
        if (x === x0 || x === x1 || y === y0 || y === y1 || z === z0 || z === z1) {
          voxels.push({ dx: x, dy: y, dz: z, block });
        }
      }
    }
  }
}

function houseVoxels(): Voxel[] {
  const v: Voxel[] = [];
  box(v, 0, 0, 0, 6, 0, 6, PLANKS);
  hollow(v, 0, 1, 0, 6, 3, 6, OAK_LOG);
  box(v, 1, 1, 0, 5, 3, 0, PLANKS);
  box(v, 1, 1, 6, 5, 3, 6, PLANKS);
  box(v, 0, 1, 1, 0, 3, 5, PLANKS);
  box(v, 6, 1, 1, 6, 3, 5, PLANKS);
  v.push({ dx: 3, dy: 1, dz: 0, block: AIR });
  v.push({ dx: 3, dy: 2, dz: 0, block: AIR });
  v.push({ dx: 1, dy: 2, dz: 0, block: GLASS });
  v.push({ dx: 5, dy: 2, dz: 0, block: GLASS });
  v.push({ dx: 0, dy: 2, dz: 3, block: GLASS });
  v.push({ dx: 6, dy: 2, dz: 3, block: GLASS });
  v.push({ dx: 1, dy: 1, dz: 5, block: TABLE });
  v.push({ dx: 2, dy: 1, dz: 5, block: FURNACE });
  v.push({ dx: 5, dy: 1, dz: 5, block: CHEST });
  v.push({ dx: 5, dy: 1, dz: 4, block: BOOK });
  v.push({ dx: 3, dy: 3, dz: 3, block: TORCH });
  for (let i = 0; i <= 3; i++) box(v, i, 4 + i, i, 6 - i, 4 + i, 6 - i, OAK_STAIR);
  box(v, 2, 4, 2, 4, 4, 4, PLANKS);
  return v;
}

function castleVoxels(): Voxel[] {
  const v: Voxel[] = [];
  hollow(v, 0, 0, 0, 14, 8, 14, STONE_BRICK);
  box(v, 1, 0, 1, 13, 0, 13, STONE);
  box(v, 3, 1, 3, 11, 7, 11, AIR);
  box(v, 3, 1, 3, 11, 1, 11, PATH);
  box(v, 6, 1, 0, 8, 3, 0, AIR);
  for (const [tx, tz] of [
    [0, 0],
    [12, 0],
    [0, 12],
    [12, 12],
  ] as const) {
    hollow(v, tx, 0, tz, tx + 2, 12, tz + 2, COBBLE);
    box(v, tx, 12, tz, tx + 2, 12, tz + 2, MOSSY);
    v.push({ dx: tx + 1, dy: 13, dz: tz + 1, block: TORCH });
  }
  hollow(v, 5, 1, 5, 9, 10, 9, STONE_BRICK);
  box(v, 6, 1, 5, 8, 2, 5, AIR);
  v.push({ dx: 7, dy: 2, dz: 7, block: CHEST });
  v.push({ dx: 6, dy: 2, dz: 8, block: TABLE });
  box(v, 5, 10, 5, 9, 10, 9, BRICK);
  return v;
}

function templeVoxels(): Voxel[] {
  const v: Voxel[] = [];
  box(v, 0, 0, 0, 10, 0, 10, SAND);
  box(v, 0, 1, 0, 10, 1, 10, SANDSTONE);
  hollow(v, 0, 2, 0, 10, 6, 10, SANDSTONE);
  box(v, 1, 2, 1, 9, 5, 9, AIR);
  box(v, 4, 2, 0, 6, 4, 0, AIR);
  v.push({ dx: 2, dy: 4, dz: 0, block: CHISEL });
  v.push({ dx: 8, dy: 4, dz: 0, block: CHISEL });
  box(v, 3, 7, 3, 7, 7, 7, SANDSTONE);
  box(v, 4, 8, 4, 6, 9, 6, CHISEL);
  v.push({ dx: 5, dy: 3, dz: 5, block: CHEST });
  v.push({ dx: 5, dy: 3, dz: 8, block: TORCH });
  return v;
}

function roadVoxels(length = 16): Voxel[] {
  const v: Voxel[] = [];
  for (let z = 0; z < length; z++) {
    v.push({ dx: -1, dy: 0, dz: z, block: PATH });
    v.push({ dx: 0, dy: 0, dz: z, block: PATH });
    v.push({ dx: 1, dy: 0, dz: z, block: PATH });
    if (z % 6 === 0) {
      v.push({ dx: -2, dy: 1, dz: z, block: FENCE });
      v.push({ dx: 2, dy: 1, dz: z, block: FENCE });
      v.push({ dx: -2, dy: 2, dz: z, block: TORCH });
    }
  }
  return v;
}

function rotate(v: Voxel[], rot: 0 | 90 | 180 | 270): Voxel[] {
  if (rot === 0) return v;
  return v.map(({ dx, dy, dz, block }) => {
    if (rot === 90) return { dx: -dz, dy, dz: dx, block };
    if (rot === 180) return { dx: -dx, dy, dz: -dz, block };
    return { dx: dz, dy, dz: -dx, block };
  });
}

function pyramidVoxels(): Voxel[] {
  const v: Voxel[] = [];
  for (let y = 0; y < 12; y++) {
    const r = 11 - y;
    box(v, -r, y, -r, r, y, r, y === 11 ? GOLD : SANDSTONE);
  }
  return v;
}

function towerVoxels(): Voxel[] {
  const v: Voxel[] = [];
  box(v, -1, 0, -1, 1, 0, 1, IRON);
  for (let y = 1; y <= 22; y++) {
    const w = y > 16 ? 0 : 1;
    box(v, -w, y, -w, w, y, w, IRON);
    if (y % 3 === 0) {
      v.push({ dx: -w - 1, dy: y, dz: 0, block: IRON });
      v.push({ dx: w + 1, dy: y, dz: 0, block: IRON });
    }
  }
  v.push({ dx: 0, dy: 23, dz: 0, block: GOLD });
  return v;
}

function statueVoxels(): Voxel[] {
  const v: Voxel[] = [];
  box(v, -2, 0, -2, 2, 1, 2, STONE);
  box(v, -1, 2, -1, 1, 10, 1, CALCITE);
  box(v, -2, 8, 0, 2, 9, 0, CALCITE);
  box(v, 0, 11, -1, 0, 14, 1, CALCITE);
  v.push({ dx: 0, dy: 15, dz: 0, block: GOLD });
  return v;
}

function palaceVoxels(): Voxel[] {
  const v: Voxel[] = [];
  box(v, -8, 0, -5, 8, 0, 5, SMOOTH);
  hollow(v, -8, 1, -5, 8, 5, 5, WHITE);
  box(v, -7, 1, -4, 7, 4, 4, AIR);
  for (const x of [-6, -3, 0, 3, 6]) v.push({ dx: x, dy: 3, dz: -5, block: GLASS });
  box(v, -2, 6, -2, 2, 8, 2, CALCITE);
  v.push({ dx: 0, dy: 9, dz: 0, block: GOLD });
  v.push({ dx: -8, dy: 6, dz: -5, block: GOLD });
  v.push({ dx: 8, dy: 6, dz: -5, block: GOLD });
  v.push({ dx: -8, dy: 6, dz: 5, block: GOLD });
  v.push({ dx: 8, dy: 6, dz: 5, block: GOLD });
  return v;
}

function monumentVoxels(): Voxel[] {
  const v: Voxel[] = [];
  box(v, -2, 0, -2, 2, 0, 2, STONE_BRICK);
  box(v, -1, 1, -1, 1, 12, 1, WHITE);
  box(v, -2, 13, -2, 2, 13, 2, GOLD);
  return v;
}

function bridgeVoxels(): Voxel[] {
  const v: Voxel[] = [];
  for (let x = -10; x <= 10; x++) {
    v.push({ dx: x, dy: 3, dz: 0, block: ORANGE });
    v.push({ dx: x, dy: 3, dz: 1, block: ORANGE });
  }
  box(v, -8, 0, -1, -7, 8, 2, ORANGE);
  box(v, 7, 0, -1, 8, 8, 2, ORANGE);
  for (let y = 4; y <= 7; y++) {
    v.push({ dx: -7, dy: y, dz: 0, block: IRON });
    v.push({ dx: 7, dy: y, dz: 0, block: IRON });
  }
  return v;
}

function skyscraperVoxels(): Voxel[] {
  const v: Voxel[] = [];
  box(v, -3, 0, -3, 3, 0, 3, GRAY);
  hollow(v, -3, 1, -3, 3, 24, 3, GRAY);
  for (let y = 2; y <= 22; y += 2) {
    for (const x of [-3, 3]) {
      v.push({ dx: x, dy: y, dz: -1, block: GLASS });
      v.push({ dx: x, dy: y, dz: 1, block: GLASS });
    }
  }
  box(v, -1, 25, -1, 1, 28, 1, GRAY);
  v.push({ dx: 0, dy: 29, dz: 0, block: GOLD });
  return v;
}

function wallVoxels(): Voxel[] {
  const v: Voxel[] = [];
  for (let x = -12; x <= 12; x++) {
    box(v, x, 0, -1, x, 4, 1, STONE_BRICK);
    if (x % 4 === 0) v.push({ dx: x, dy: 5, dz: -1, block: STONE_BRICK });
  }
  box(v, -2, 0, -3, 2, 7, 3, STONE_BRICK);
  return v;
}

function cityVoxels(): Voxel[] {
  const v: Voxel[] = [];
  const pads: Array<[number, number, number, number]> = [
    [-8, -6, 8, GRAY],
    [4, -4, 6, WHITE],
    [-4, 6, 5, BRICK],
    [8, 5, 10, GRAY],
    [0, 0, 4, STONE_BRICK],
  ];
  for (const [ox, oz, h, b] of pads) {
    box(v, ox, 0, oz, ox + 3, 0, oz + 3, SMOOTH);
    hollow(v, ox, 1, oz, ox + 3, h, oz + 3, b);
  }
  for (const p of roadVoxels(16)) v.push({ dx: p.dx - 4, dy: 0, dz: p.dz, block: p.block });
  return v;
}

function capitalVoxels(): Voxel[] {
  const v = cityVoxels();
  for (const p of palaceVoxels()) v.push({ dx: p.dx, dy: p.dy, dz: p.dz - 10, block: p.block });
  return v;
}

function hutVoxels(): Voxel[] {
  const v: Voxel[] = [];
  box(v, 0, 0, 0, 5, 0, 5, COBBLE);
  hollow(v, 0, 1, 0, 5, 3, 5, COBBLE);
  v.push({ dx: 2, dy: 1, dz: 0, block: AIR });
  v.push({ dx: 2, dy: 2, dz: 0, block: AIR });
  v.push({ dx: 1, dy: 1, dz: 4, block: TABLE });
  v.push({ dx: 4, dy: 1, dz: 4, block: CHEST });
  box(v, 0, 4, 0, 5, 4, 5, OAK_STAIR);
  v.push({ dx: 2, dy: 3, dz: 2, block: TORCH });
  return v;
}

function mossify(voxels: Voxel[]): Voxel[] {
  return voxels.map((p) => {
    if (p.block === AIR || p.block === TORCH) return p;
    if (p.dy > 5 && (p.dx + p.dz + p.dy) % 3 === 0) return { ...p, block: AIR };
    if (p.block === GLASS) return { ...p, block: AIR };
    return { ...p, block: MOSSY };
  });
}

export function structureVoxels(
  kind: StructureKind,
  rotation: 0 | 90 | 180 | 270 = 0,
  opts?: { year?: number; ruin?: boolean },
): Voxel[] {
  const year = opts?.year ?? 2026;
  let v: Voxel[] = [];
  let use = kind;
  if (year < 1700 && (kind === "city" || kind === "skyscraper")) use = "village";
  if (year < 1930 && kind === "skyscraper") use = "city";
  if (year < 1700 && kind === "house") {
    v = hutVoxels();
  } else if (use === "house") v = houseVoxels();
  else if (use === "castle") v = castleVoxels();
  else if (use === "temple") v = templeVoxels();
  else if (use === "road") v = roadVoxels();
  else if (use === "pyramid") v = pyramidVoxels();
  else if (use === "tower") v = towerVoxels();
  else if (use === "statue") v = statueVoxels();
  else if (use === "palace") v = palaceVoxels();
  else if (use === "monument") v = monumentVoxels();
  else if (use === "bridge") v = year < 1880 ? wallVoxels() : bridgeVoxels();
  else if (use === "skyscraper") v = skyscraperVoxels();
  else if (use === "wall") v = wallVoxels();
  else if (use === "city") v = year < 1860 ? villageLike() : cityVoxels();
  else if (use === "capital") v = year < 1860 ? palaceVoxels().concat(villageLike()) : capitalVoxels();
  else if (use === "village") v = villageLike();
  else v = year < 1700 ? hutVoxels() : houseVoxels();
  if (opts?.ruin) v = mossify(v);
  return rotate(v, rotation);
}

function villageLike(): Voxel[] {
  const v: Voxel[] = [];
  const h = hutVoxels();
  const offsets: Array<[number, number, 0 | 90 | 180 | 270]> = [
    [0, 0, 0],
    [12, 2, 90],
    [-14, 4, 180],
    [4, 14, 270],
    [-8, -12, 0],
  ];
  for (const [ox, oz, r] of offsets) {
    for (const p of rotate(h, r)) v.push({ dx: p.dx + ox, dy: p.dy, dz: p.dz + oz, block: p.block });
  }
  hollow(v, 4, 0, 6, 7, 3, 9, COBBLE);
  box(v, 5, 1, 7, 6, 1, 8, WATER);
  box(v, 4, 4, 6, 7, 4, 9, PLANKS);
  v.push({ dx: 5, dy: 5, dz: 7, block: FENCE });
  v.push({ dx: 6, dy: 5, dz: 8, block: FENCE });
  for (const p of roadVoxels(18)) v.push({ dx: p.dx + 5, dy: 0, dz: p.dz - 4, block: p.block });
  return v;
}

export function treeVoxels(kind: "oak" | "birch" | "spruce" | "jungle" | "cherry" | "dark_oak" | "cactus"): Voxel[] {
  const v: Voxel[] = [];
  if (kind === "cactus") {
    v.push({ dx: 0, dy: 1, dz: 0, block: CACTUS });
    v.push({ dx: 0, dy: 2, dz: 0, block: CACTUS });
    v.push({ dx: 0, dy: 3, dz: 0, block: CACTUS });
    return v;
  }
  const log =
    kind === "spruce"
      ? SPRUCE_LOG
      : kind === "birch"
        ? BIRCH_LOG
        : kind === "jungle"
          ? JUNGLE_LOG
          : kind === "cherry"
            ? CHERRY_LOG
            : kind === "dark_oak"
              ? DARK_LOG
              : OAK_LOG;
  const leaf =
    kind === "spruce"
      ? SPRUCE_LEAVES
      : kind === "birch"
        ? BIRCH_LEAVES
        : kind === "jungle"
          ? JUNGLE_LEAVES
          : kind === "cherry"
            ? CHERRY_LEAVES
            : kind === "dark_oak"
              ? DARK_LEAVES
              : OAK_LEAVES;
  const h = kind === "jungle" ? 7 : kind === "spruce" ? 6 : 5;
  for (let y = 1; y <= h; y++) v.push({ dx: 0, dy: y, dz: 0, block: log });
  const r = kind === "jungle" ? 3 : 2;
  for (let dy = h - 1; dy <= h + 1; dy++) {
    for (let dz = -r; dz <= r; dz++) {
      for (let dx = -r; dx <= r; dx++) {
        if (dx === 0 && dz === 0 && dy <= h) continue;
        if (Math.abs(dx) === r && Math.abs(dz) === r && dy === h + 1) continue;
        v.push({ dx, dy, dz, block: leaf });
      }
    }
  }
  return v;
}

export const ENTITY_TYPES = [
  { id: "minecraft:cow", label: "Cow" },
  { id: "minecraft:pig", label: "Pig" },
  { id: "minecraft:sheep", label: "Sheep" },
  { id: "minecraft:chicken", label: "Chicken" },
  { id: "minecraft:villager", label: "Villager" },
  { id: "minecraft:iron_golem", label: "Iron Golem" },
  { id: "minecraft:horse", label: "Horse" },
  { id: "minecraft:wolf", label: "Wolf" },
  { id: "minecraft:cat", label: "Cat" },
  { id: "minecraft:fox", label: "Fox" },
  { id: "minecraft:parrot", label: "Parrot" },
  { id: "minecraft:turtle", label: "Turtle" },
  { id: "minecraft:squid", label: "Squid" },
  { id: "minecraft:bat", label: "Bat" },
  { id: "minecraft:zombie", label: "Zombie" },
  { id: "minecraft:skeleton", label: "Skeleton" },
  { id: "minecraft:creeper", label: "Creeper" },
  { id: "minecraft:spider", label: "Spider" },
] as const;
