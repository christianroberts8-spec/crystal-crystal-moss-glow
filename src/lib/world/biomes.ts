export interface BiomeDef {
  id: number;
  /** Numeric biome ID used on disk (Bedrock). */
  bedrockId: number;
  name: string;
  label: string;
  color: [number, number, number];
  surface: number;
  fill: number;
  extra?: "snow" | "sand" | "redsand" | "mycelium" | "podzol" | "mud";
  tree?: "oak" | "birch" | "spruce" | "jungle" | "cherry" | "dark_oak" | "cactus";
  temperature: number;
  moisture: number;
}

/**
 * Bedrock numeric biome IDs (Overworld). Verified against Bedrock 1.21 lists.
 * Unknown custom biomes fall back to plains (1).
 */
export const BIOMES: BiomeDef[] = [
  { id: 0, bedrockId: 1, name: "plains", label: "Plains", color: [141, 179, 96], surface: 4, fill: 3, tree: "oak", temperature: 0.8, moisture: 0.4 },
  { id: 1, bedrockId: 4, name: "forest", label: "Forest", color: [5, 102, 33], surface: 4, fill: 3, tree: "oak", temperature: 0.7, moisture: 0.8 },
  { id: 2, bedrockId: 5, name: "taiga", label: "Taiga", color: [11, 102, 89], surface: 4, fill: 3, extra: "podzol", tree: "spruce", temperature: 0.25, moisture: 0.8 },
  { id: 3, bedrockId: 2, name: "desert", label: "Desert", color: [250, 222, 122], surface: 5, fill: 5, extra: "sand", tree: "cactus", temperature: 2, moisture: 0 },
  { id: 4, bedrockId: 0, name: "ocean", label: "Ocean", color: [32, 56, 150], surface: 7, fill: 2, temperature: 0.5, moisture: 1 },
  { id: 5, bedrockId: 24, name: "deep_ocean", label: "Deep Ocean", color: [18, 32, 100], surface: 7, fill: 2, temperature: 0.5, moisture: 1 },
  { id: 6, bedrockId: 7, name: "river", label: "River", color: [50, 100, 180], surface: 5, fill: 3, temperature: 0.5, moisture: 1 },
  { id: 7, bedrockId: 16, name: "beach", label: "Beach", color: [250, 238, 173], surface: 5, fill: 5, extra: "sand", temperature: 0.8, moisture: 0.4 },
  { id: 8, bedrockId: 3, name: "mountains", label: "Mountains", color: [128, 128, 144], surface: 2, fill: 2, temperature: 0.2, moisture: 0.3 },
  { id: 9, bedrockId: 12, name: "snowy_plains", label: "Snowy Plains", color: [255, 255, 255], surface: 4, fill: 3, extra: "snow", temperature: 0, moisture: 0.5 },
  { id: 10, bedrockId: 30, name: "snowy_taiga", label: "Snowy Taiga", color: [200, 220, 220], surface: 4, fill: 3, extra: "snow", tree: "spruce", temperature: -0.5, moisture: 0.4 },
  { id: 11, bedrockId: 6, name: "swamp", label: "Swamp", color: [48, 80, 40], surface: 4, fill: 3, extra: "mud", tree: "oak", temperature: 0.8, moisture: 0.9 },
  { id: 12, bedrockId: 21, name: "jungle", label: "Jungle", color: [18, 160, 24], surface: 4, fill: 3, tree: "jungle", temperature: 0.95, moisture: 0.9 },
  { id: 13, bedrockId: 35, name: "savanna", label: "Savanna", color: [189, 178, 95], surface: 4, fill: 3, tree: "oak", temperature: 1.2, moisture: 0.2 },
  { id: 14, bedrockId: 37, name: "badlands", label: "Badlands", color: [217, 69, 21], surface: 22, fill: 21, extra: "redsand", temperature: 2, moisture: 0 },
  { id: 15, bedrockId: 14, name: "mushroom_fields", label: "Mushroom", color: [162, 130, 150], surface: 24, fill: 3, extra: "mycelium", temperature: 0.9, moisture: 1 },
  { id: 16, bedrockId: 132, name: "flower_forest", label: "Flower Forest", color: [45, 142, 73], surface: 4, fill: 3, tree: "birch", temperature: 0.7, moisture: 0.8 },
  { id: 17, bedrockId: 27, name: "birch_forest", label: "Birch Forest", color: [88, 156, 88], surface: 4, fill: 3, tree: "birch", temperature: 0.6, moisture: 0.6 },
  { id: 18, bedrockId: 29, name: "dark_forest", label: "Dark Forest", color: [18, 58, 18], surface: 4, fill: 3, tree: "dark_oak", temperature: 0.7, moisture: 0.8 },
  { id: 19, bedrockId: 10, name: "frozen_ocean", label: "Frozen Ocean", color: [80, 112, 160], surface: 18, fill: 2, extra: "snow", temperature: 0, moisture: 1 },
  { id: 20, bedrockId: 44, name: "warm_ocean", label: "Warm Ocean", color: [32, 120, 170], surface: 5, fill: 5, temperature: 0.5, moisture: 1 },
  { id: 21, bedrockId: 163, name: "cherry_grove", label: "Cherry Grove", color: [242, 180, 196], surface: 4, fill: 3, tree: "cherry", temperature: 0.5, moisture: 0.8 },
  { id: 22, bedrockId: 186, name: "pale_garden", label: "Pale Garden", color: [170, 170, 160], surface: 4, fill: 3, tree: "dark_oak", temperature: 0.7, moisture: 0.8 },
  { id: 23, bedrockId: 13, name: "snowy_mountains", label: "Snowy Peaks", color: [245, 250, 250], surface: 67, fill: 2, extra: "snow", temperature: -0.3, moisture: 0.3 },
  { id: 24, bedrockId: 34, name: "wooded_mountains", label: "Wooded Peaks", color: [90, 110, 90], surface: 4, fill: 2, tree: "spruce", temperature: 0.2, moisture: 0.3 },
  { id: 25, bedrockId: 129, name: "sunflower_plains", label: "Sunflower Plains", color: [170, 190, 70], surface: 4, fill: 3, tree: "oak", temperature: 0.8, moisture: 0.4 },
  { id: 26, bedrockId: 32, name: "mega_taiga", label: "Old Growth Taiga", color: [22, 80, 50], surface: 23, fill: 3, extra: "podzol", tree: "spruce", temperature: 0.3, moisture: 0.8 },
  { id: 27, bedrockId: 45, name: "lukewarm_ocean", label: "Lukewarm Ocean", color: [36, 80, 160], surface: 5, fill: 2, temperature: 0.5, moisture: 1 },
  { id: 28, bedrockId: 46, name: "cold_ocean", label: "Cold Ocean", color: [40, 70, 140], surface: 7, fill: 2, temperature: 0.3, moisture: 1 },
  { id: 29, bedrockId: 165, name: "mangrove_swamp", label: "Mangrove", color: [36, 70, 50], surface: 26, fill: 26, extra: "mud", tree: "oak", temperature: 0.8, moisture: 0.9 },
];

export const BIOME_BY_ID = BIOMES;
export const BIOME_BY_BEDROCK = new Map<number, BiomeDef>();
for (const b of BIOMES) BIOME_BY_BEDROCK.set(b.bedrockId, b);

export function biomeByBedrockId(id: number): BiomeDef {
  return BIOME_BY_BEDROCK.get(id) ?? BIOMES[0]!;
}

export const PLAINS = 0;
export const FOREST = 1;
export const TAIGA = 2;
export const DESERT = 3;
export const OCEAN = 4;
export const DEEP_OCEAN = 5;
export const RIVER = 6;
export const BEACH = 7;
export const MOUNTAINS = 8;
export const SNOWY_PLAINS = 9;
