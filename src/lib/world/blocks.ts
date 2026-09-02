export interface BlockDef {
  id: number;
  /** Bedrock identifier, e.g. minecraft:grass_block */
  name: string;
  label: string;
  /** Map color (rgb) */
  color: [number, number, number];
  solid: boolean;
  liquid?: boolean;
  states?: Record<string, string | number | boolean>;
  category: "terrain" | "nature" | "build" | "liquid" | "special";
}

export const BLOCKS: BlockDef[] = [
  { id: 0, name: "minecraft:air", label: "Air", color: [0, 0, 0], solid: false, category: "special" },
  { id: 1, name: "minecraft:bedrock", label: "Bedrock", color: [20, 20, 24], solid: true, category: "terrain" },
  { id: 2, name: "minecraft:stone", label: "Stone", color: [125, 125, 125], solid: true, category: "terrain" },
  { id: 3, name: "minecraft:dirt", label: "Dirt", color: [134, 96, 67], solid: true, category: "terrain" },
  { id: 4, name: "minecraft:grass_block", label: "Grass", color: [91, 153, 57], solid: true, states: { snowy: "false" }, category: "terrain" },
  { id: 5, name: "minecraft:sand", label: "Sand", color: [219, 211, 160], solid: true, category: "terrain" },
  { id: 6, name: "minecraft:sandstone", label: "Sandstone", color: [218, 206, 143], solid: true, category: "terrain" },
  { id: 7, name: "minecraft:gravel", label: "Gravel", color: [132, 127, 126], solid: true, category: "terrain" },
  { id: 8, name: "minecraft:water", label: "Water", color: [39, 93, 168], solid: false, liquid: true, category: "liquid" },
  { id: 9, name: "minecraft:lava", label: "Lava", color: [207, 92, 20], solid: false, liquid: true, category: "liquid" },
  { id: 10, name: "minecraft:oak_log", label: "Oak Log", color: [109, 85, 50], solid: true, states: { pillar_axis: "y" }, category: "nature" },
  { id: 11, name: "minecraft:oak_leaves", label: "Oak Leaves", color: [48, 114, 34], solid: true, category: "nature" },
  { id: 12, name: "minecraft:birch_log", label: "Birch Log", color: [216, 215, 210], solid: true, states: { pillar_axis: "y" }, category: "nature" },
  { id: 13, name: "minecraft:birch_leaves", label: "Birch Leaves", color: [90, 144, 58], solid: true, category: "nature" },
  { id: 14, name: "minecraft:spruce_log", label: "Spruce Log", color: [58, 37, 16], solid: true, states: { pillar_axis: "y" }, category: "nature" },
  { id: 15, name: "minecraft:spruce_leaves", label: "Spruce Leaves", color: [38, 80, 38], solid: true, category: "nature" },
  { id: 16, name: "minecraft:cactus", label: "Cactus", color: [34, 122, 34], solid: true, category: "nature" },
  { id: 17, name: "minecraft:snow", label: "Snow", color: [240, 244, 244], solid: true, category: "terrain" },
  { id: 18, name: "minecraft:ice", label: "Ice", color: [125, 173, 255], solid: true, category: "terrain" },
  { id: 19, name: "minecraft:packed_ice", label: "Packed Ice", color: [141, 180, 250], solid: true, category: "terrain" },
  { id: 20, name: "minecraft:clay", label: "Clay", color: [159, 164, 176], solid: true, category: "terrain" },
  { id: 21, name: "minecraft:terracotta", label: "Terracotta", color: [152, 94, 67], solid: true, category: "terrain" },
  { id: 22, name: "minecraft:red_sand", label: "Red Sand", color: [190, 102, 33], solid: true, category: "terrain" },
  { id: 23, name: "minecraft:podzol", label: "Podzol", color: [92, 63, 28], solid: true, category: "terrain" },
  { id: 24, name: "minecraft:mycelium", label: "Mycelium", color: [111, 98, 114], solid: true, category: "terrain" },
  { id: 25, name: "minecraft:moss_block", label: "Moss", color: [89, 109, 45], solid: true, category: "nature" },
  { id: 26, name: "minecraft:mud", label: "Mud", color: [60, 57, 61], solid: true, category: "terrain" },
  { id: 27, name: "minecraft:cobblestone", label: "Cobblestone", color: [127, 127, 127], solid: true, category: "build" },
  { id: 28, name: "minecraft:mossy_cobblestone", label: "Mossy Cobble", color: [99, 126, 99], solid: true, category: "build" },
  { id: 29, name: "minecraft:oak_planks", label: "Oak Planks", color: [162, 130, 78], solid: true, category: "build" },
  { id: 30, name: "minecraft:spruce_planks", label: "Spruce Planks", color: [114, 84, 48], solid: true, category: "build" },
  { id: 31, name: "minecraft:glass", label: "Glass", color: [168, 194, 201], solid: true, category: "build" },
  { id: 32, name: "minecraft:bricks", label: "Bricks", color: [150, 97, 83], solid: true, category: "build" },
  { id: 33, name: "minecraft:stone_bricks", label: "Stone Bricks", color: [122, 121, 122], solid: true, category: "build" },
  { id: 34, name: "minecraft:dark_oak_planks", label: "Dark Oak", color: [66, 43, 20], solid: true, category: "build" },
  { id: 35, name: "minecraft:prismarine", label: "Prismarine", color: [99, 156, 151], solid: true, category: "build" },
  { id: 36, name: "minecraft:obsidian", label: "Obsidian", color: [15, 10, 24], solid: true, category: "special" },
  { id: 37, name: "minecraft:netherrack", label: "Netherrack", color: [97, 38, 38], solid: true, category: "terrain" },
  { id: 38, name: "minecraft:end_stone", label: "End Stone", color: [219, 222, 157], solid: true, category: "terrain" },
  { id: 39, name: "minecraft:amethyst_block", label: "Amethyst", color: [133, 97, 191], solid: true, category: "special" },
  { id: 40, name: "minecraft:gold_block", label: "Gold", color: [246, 208, 61], solid: true, category: "special" },
  { id: 41, name: "minecraft:iron_block", label: "Iron", color: [220, 220, 220], solid: true, category: "special" },
  { id: 42, name: "minecraft:diamond_block", label: "Diamond", color: [93, 236, 217], solid: true, category: "special" },
  { id: 43, name: "minecraft:hay_block", label: "Hay", color: [166, 139, 12], solid: true, category: "nature" },
  { id: 44, name: "minecraft:farmland", label: "Farmland", color: [95, 58, 30], solid: true, category: "nature" },
  { id: 45, name: "minecraft:cobblestone_stairs", label: "Cobble Stairs", color: [127, 127, 127], solid: true, states: { weirdo_direction: 0, upsidedown_bit: 0 }, category: "build" },
  { id: 46, name: "minecraft:oak_stairs", label: "Oak Stairs", color: [162, 130, 78], solid: true, states: { weirdo_direction: 0, upsidedown_bit: 0 }, category: "build" },
  { id: 47, name: "minecraft:oak_slab", label: "Oak Slab", color: [162, 130, 78], solid: true, states: { "minecraft:vertical_half": "bottom" }, category: "build" },
  { id: 48, name: "minecraft:crafting_table", label: "Crafting Table", color: [119, 73, 42], solid: true, category: "build" },
  { id: 49, name: "minecraft:chest", label: "Chest", color: [141, 102, 35], solid: true, category: "build" },
  { id: 50, name: "minecraft:furnace", label: "Furnace", color: [96, 96, 96], solid: true, category: "build" },
  { id: 51, name: "minecraft:bookshelf", label: "Bookshelf", color: [117, 73, 42], solid: true, category: "build" },
  { id: 52, name: "minecraft:oak_fence", label: "Oak Fence", color: [162, 130, 78], solid: true, category: "build" },
  { id: 53, name: "minecraft:cobblestone_wall", label: "Cobble Wall", color: [127, 127, 127], solid: true, category: "build" },
  { id: 54, name: "minecraft:white_wool", label: "White Wool", color: [233, 236, 236], solid: true, category: "build" },
  { id: 55, name: "minecraft:smooth_stone", label: "Smooth Stone", color: [158, 158, 158], solid: true, category: "build" },
  { id: 56, name: "minecraft:deepslate", label: "Deepslate", color: [80, 80, 82], solid: true, category: "terrain" },
  { id: 57, name: "minecraft:calcite", label: "Calcite", color: [223, 224, 220], solid: true, category: "terrain" },
  { id: 58, name: "minecraft:tuff", label: "Tuff", color: [108, 109, 102], solid: true, category: "terrain" },
  { id: 59, name: "minecraft:dirt_path", label: "Dirt Path", color: [148, 121, 65], solid: true, category: "build" },
  { id: 60, name: "minecraft:grass_block", label: "Podzol Grass", color: [70, 120, 45], solid: true, states: { snowy: "false" }, category: "terrain" },
  { id: 61, name: "minecraft:cherry_log", label: "Cherry Log", color: [54, 33, 44], solid: true, states: { pillar_axis: "y" }, category: "nature" },
  { id: 62, name: "minecraft:cherry_leaves", label: "Cherry Leaves", color: [230, 160, 186], solid: true, category: "nature" },
  { id: 63, name: "minecraft:dark_oak_log", label: "Dark Oak Log", color: [60, 39, 18], solid: true, states: { pillar_axis: "y" }, category: "nature" },
  { id: 64, name: "minecraft:dark_oak_leaves", label: "Dark Oak Leaves", color: [36, 86, 18], solid: true, category: "nature" },
  { id: 65, name: "minecraft:jungle_log", label: "Jungle Log", color: [85, 68, 25], solid: true, states: { pillar_axis: "y" }, category: "nature" },
  { id: 66, name: "minecraft:jungle_leaves", label: "Jungle Leaves", color: [48, 132, 18], solid: true, category: "nature" },
  { id: 67, name: "minecraft:snow_block", label: "Snow Block", color: [240, 244, 244], solid: true, category: "terrain" },
  { id: 68, name: "minecraft:andesite", label: "Andesite", color: [136, 136, 136], solid: true, category: "terrain" },
  { id: 69, name: "minecraft:granite", label: "Granite", color: [149, 103, 85], solid: true, category: "terrain" },
  { id: 70, name: "minecraft:diorite", label: "Diorite", color: [188, 188, 188], solid: true, category: "terrain" },
  { id: 71, name: "minecraft:coal_ore", label: "Coal Ore", color: [105, 105, 105], solid: true, category: "special" },
  { id: 72, name: "minecraft:iron_ore", label: "Iron Ore", color: [136, 129, 122], solid: true, category: "special" },
  { id: 73, name: "minecraft:copper_ore", label: "Copper Ore", color: [124, 125, 120], solid: true, category: "special" },
  { id: 74, name: "minecraft:gold_ore", label: "Gold Ore", color: [143, 140, 125], solid: true, category: "special" },
  { id: 75, name: "minecraft:diamond_ore", label: "Diamond Ore", color: [121, 141, 140], solid: true, category: "special" },
  { id: 76, name: "minecraft:glowstone", label: "Glowstone", color: [171, 131, 84], solid: true, category: "special" },
  { id: 77, name: "minecraft:sea_lantern", label: "Sea Lantern", color: [172, 199, 190], solid: true, category: "special" },
  { id: 78, name: "minecraft:lantern", label: "Lantern", color: [142, 104, 47], solid: true, category: "build" },
  { id: 79, name: "minecraft:torch", label: "Torch", color: [196, 160, 70], solid: false, category: "build" },
  { id: 80, name: "minecraft:white_concrete", label: "White Concrete", color: [207, 213, 214], solid: true, category: "build" },
  { id: 81, name: "minecraft:gray_concrete", label: "Gray Concrete", color: [54, 57, 61], solid: true, category: "build" },
  { id: 82, name: "minecraft:black_concrete", label: "Black Concrete", color: [8, 10, 15], solid: true, category: "build" },
  { id: 83, name: "minecraft:orange_terracotta", label: "Orange Terracotta", color: [161, 83, 37], solid: true, category: "build" },
  { id: 84, name: "minecraft:red_terracotta", label: "Red Terracotta", color: [143, 61, 46], solid: true, category: "build" },
  { id: 85, name: "minecraft:yellow_terracotta", label: "Yellow Terracotta", color: [186, 133, 35], solid: true, category: "build" },
  { id: 86, name: "minecraft:polished_andesite", label: "Polished Andesite", color: [132, 134, 132], solid: true, category: "build" },
  { id: 87, name: "minecraft:chiseled_sandstone", label: "Chiseled Sandstone", color: [216, 202, 139], solid: true, category: "build" },
  { id: 88, name: "minecraft:cut_sandstone", label: "Cut Sandstone", color: [217, 207, 153], solid: true, category: "build" },
  { id: 89, name: "minecraft:smooth_sandstone", label: "Smooth Sandstone", color: [224, 214, 170], solid: true, category: "build" },
  { id: 90, name: "minecraft:water", label: "Water Source", color: [39, 93, 168], solid: false, liquid: true, category: "liquid" },
];

export const BLOCK_BY_ID: BlockDef[] = [];
for (const b of BLOCKS) BLOCK_BY_ID[b.id] = b;

export const BLOCK_BY_NAME = new Map<string, BlockDef>();
for (const b of BLOCKS) {
  if (!BLOCK_BY_NAME.has(b.name)) BLOCK_BY_NAME.set(b.name, b);
}

export function blockColor(id: number): [number, number, number] {
  return BLOCK_BY_ID[id]?.color ?? [80, 80, 80];
}

export function isSolid(id: number): boolean {
  return BLOCK_BY_ID[id]?.solid ?? false;
}

export const AIR = 0;
export const BEDROCK = 1;
export const STONE = 2;
export const DIRT = 3;
export const GRASS = 4;
export const SAND = 5;
export const GRAVEL = 7;
export const WATER = 8;
export const OAK_LOG = 10;
export const OAK_LEAVES = 11;
export const SNOW = 17;
export const ICE = 18;
export const COBBLE = 27;
export const MOSSY = 28;
export const PLANKS = 29;
export const HAY = 43;
export const FARMLAND = 44;
export const SMOOTH = 55;
export const DIRT_PATH = 59;
export const DEEPSLATE = 56;
