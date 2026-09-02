import type { WorldSettings } from "../bedrock/leveldat";
import type { NbtCompound } from "../bedrock/nbt";

export type WorkflowStep =
  | "create"
  | "map"
  | "spawn"
  | "countries"
  | "timeline"
  | "terrain"
  | "structures"
  | "settings"
  | "validate"
  | "export";

export type Tool =
  | "pan"
  | "raise"
  | "lower"
  | "smooth"
  | "flatten"
  | "paint-block"
  | "paint-biome"
  | "water"
  | "eyedropper"
  | "select"
  | "spawn"
  | "structure"
  | "entity";

export type TerrainPreset =
  | "continents"
  | "islands"
  | "oceans"
  | "mountains"
  | "inland"
  | "archipelago"
  | "flat"
  | "mixed"
  | "earth";

export type StructureKind =
  | "house"
  | "village"
  | "road"
  | "castle"
  | "temple"
  | "custom"
  | "city"
  | "capital"
  | "pyramid"
  | "tower"
  | "statue"
  | "palace"
  | "monument"
  | "bridge"
  | "skyscraper"
  | "wall";

export interface StructurePlacement {
  id: string;
  kind: StructureKind;
  x: number;
  z: number;
  rotation: 0 | 90 | 180 | 270;
  name?: string;
  realId?: string;
  /** If set, this user-placed build is tied to that timeline year. */
  year?: number;
  /** Destroyed or abandoned site still visible as ruins. */
  ruin?: boolean;
  /** Published construction / founding year (negative = BCE). */
  built?: number;
  /** Founding year is a regional estimate, not a published date. */
  approx?: boolean;
}

export interface EntityPlacement {
  id: string;
  type: string;
  x: number;
  y: number;
  z: number;
}

export interface Rect {
  x0: number;
  z0: number;
  x1: number;
  z1: number;
}

export interface Clipboard {
  w: number;
  d: number;
  height: Int16Array;
  biome: Uint8Array;
  surface: Uint8Array;
  fill: Uint8Array;
  water: Uint8Array;
}

export interface ImportMeta {
  fileName: string;
  chunkCount: number;
  decodedChunks: number;
  preservedKeys: number;
  warnings: string[];
  /** True when we could not decode terrain and will copy db/ through. */
  passthroughDb: boolean;
  editedWindow: { originX: number; originZ: number; width: number; depth: number };
  netherEndUntouched: boolean;
  packsPreserved: string[];
}

export interface WorldProject {
  id: string;
  createdAt: number;
  updatedAt: number;
  settings: WorldSettings;
  originX: number;
  originZ: number;
  width: number;
  depth: number;
  /** Highest solid (or seafloor if water). */
  height: Int16Array;
  biome: Uint8Array;
  surface: Uint8Array;
  fill: Uint8Array;
  water: Uint8Array;
  cave: Uint8Array;
  structures: StructurePlacement[];
  entities: EntityPlacement[];
  customStructures: Record<string, Clipboard>;
  importMeta?: ImportMeta;
  /** Last terrain generator used (Earth spawn regions, labels). */
  terrainKind?: TerrainPreset;
  /** Original level.dat fields we don't edit. */
  extraNbt?: NbtCompound;
  /** Unedited LevelDB keys (hex) preserved from import. */
  preservedDb?: Record<string, string>;
  /** Non-db zip entries preserved (resource packs, etc). */
  preservedFiles?: Record<string, string>;
  /**
   * True when the map is too large to hold every column in RAM.
   * Base terrain is sampled (Earth raster / noise); paints live in `tiles`.
   */
  virtual?: boolean;
  tiles?: Map<number, OverlayTile>;
  /** Playable .mcworld export size around spawn for huge maps. */
  exportWindow?: number;
  sizeLabel?: string;
  /** Global historical year for Earth (virtual; does not duplicate the planet). */
  year?: number;
  /** Calendar month 1–12 for the Earth timeline. */
  month?: number;
  /** Calendar day 1–31 for the Earth timeline. */
  day?: number;
  /** Keep user-placed (non-realId) structures when the timeline year changes. */
  keepManualAcrossYears?: boolean;
}

export interface OverlayTile {
  filled: Uint8Array;
  height: Int16Array;
  biome: Uint8Array;
  surface: Uint8Array;
  fill: Uint8Array;
  water: Uint8Array;
  cave: Uint8Array;
}

export type OverlayLayer = "terrain" | "countries" | "borders" | "cities" | "roads" | "structures";

export interface LayerToggles {
  terrain: boolean;
  countries: boolean;
  borders: boolean;
  cities: boolean;
  roads: boolean;
  structures: boolean;
}

export const DEFAULT_LAYERS: LayerToggles = {
  terrain: true,
  countries: true,
  borders: true,
  cities: true,
  roads: true,
  structures: true,
};

export const DENSE_CELLS_MAX = 4_200_000;
export const TILE_SIZE = 64;
export const EXPORT_WINDOWS = [512, 1024, 2048, 4096] as const;

export function isVirtualSize(width: number, depth: number): boolean {
  const n = width * depth;
  return !Number.isFinite(n) || n > DENSE_CELLS_MAX;
}

export function fmtBlocks(n: number): string {
  return Math.round(n).toLocaleString("en-US");
}

/** Named huge maps: Roblox, Earth, Minecraft — square regions and 2:1 globe wraps. */
export const HUGE_SIZES: {
  id: string;
  label: string;
  blurb: string;
  width: number;
  depth: number;
  aspect: "square" | "globe";
  family: "roblox" | "earth" | "minecraft";
}[] = [
  {
    id: "roblox",
    label: "Roblox 16,384",
    blurb: "16,384×16,384 studs — one Roblox heightmap-import region",
    width: 16384,
    depth: 16384,
    aspect: "square",
    family: "roblox",
  },
  {
    id: "roblox-circ",
    label: "Roblox Circumference",
    blurb: "16,384 × 8,192 — Roblox-scale globe wrap, 2:1 like Earth",
    width: 16384,
    depth: 8192,
    aspect: "globe",
    family: "roblox",
  },
  {
    id: "earth-square",
    label: "Earth Non-Circumference",
    blurb: "40,075,008 × 40,075,008 — Earth 1 meter per block as a square map, not a 2:1 globe wrap",
    width: 40075008,
    depth: 40075008,
    aspect: "square",
    family: "earth",
  },
  {
    id: "earth1to1",
    label: "Earth 1:1",
    blurb: "40,075,008 × 20,037,504 blocks — 1 meter per block, full Earth circumference",
    width: 40075008,
    depth: 20037504,
    aspect: "globe",
    family: "earth",
  },
  {
    id: "minecraft",
    label: "Minecraft 60M",
    blurb: "60,000,000 × 60,000,000 blocks — Java-scale world",
    width: 60000000,
    depth: 60000000,
    aspect: "square",
    family: "minecraft",
  },
  {
    id: "minecraft-circ",
    label: "Minecraft Circumference",
    blurb: "60,000,000 × 30,000,000 — Java-scale globe wrap, 2:1 like Earth",
    width: 60000000,
    depth: 30000000,
    aspect: "globe",
    family: "minecraft",
  },
];

export function hugeSizeOf(width: number, depth: number) {
  return HUGE_SIZES.find((h) => h.width === width && h.depth === depth);
}


export const WORKFLOW: { id: WorkflowStep; label: string; hint: string }[] = [
  { id: "create", label: "Create / Import", hint: "New world or open a .mcworld" },
  { id: "map", label: "Edit Map", hint: "Paint terrain, fill, copy, replace" },
  { id: "spawn", label: "Spawn", hint: "Place spawn, set radius, jump to continents" },
  { id: "countries", label: "Countries", hint: "Borders, capitals, generate a region" },
  { id: "timeline", label: "Timeline", hint: "Move the whole Earth through history" },
  { id: "terrain", label: "Terrain & Biomes", hint: "Generate continents, rivers, biomes" },
  { id: "structures", label: "Structures & Entities", hint: "Real cities, landmarks, builds, mobs" },
  { id: "settings", label: "World Settings", hint: "Mode, difficulty, gamerules" },
  { id: "validate", label: "Validate", hint: "Check the Bedrock world before export" },
  { id: "export", label: "Export", hint: "Download a real .mcworld" },
];
