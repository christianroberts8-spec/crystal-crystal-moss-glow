import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowLeft, C as Download, D as ChevronRight, E as Clock, O as ChevronLeft, S as Earth, T as Copy, _ as Globe, a as Search, b as Eye, c as RotateCw, d as PaintBucket, f as Mountain, g as Landmark, h as Layers, i as Square, k as Building2, l as Redo2, m as MapPin, o as Save, p as Map$1, r as Trees, s as Route, t as Undo2, u as Plus, v as FolderOpen, w as Crosshair, x as Eraser, y as Flag } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as require_lib } from "../_libs/jszip+[...].mjs";
import { n as inflateRaw, t as inflate } from "../_libs/pako.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CyftAE2b.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_lib = /* @__PURE__ */ __toESM(require_lib());
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-colors duration-150 disabled:opacity-40 disabled:pointer-events-none select-none touch-manipulation", {
	variants: {
		variant: {
			primary: "bg-accent text-accent-fg hover:brightness-110",
			secondary: "bg-surface-2 text-fg hover:bg-surface-3 shadow-[var(--shadow-border)]",
			ghost: "bg-transparent text-fg hover:bg-surface-2",
			danger: "bg-danger text-fg hover:brightness-110",
			outline: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:bg-surface-2"
		},
		size: {
			sm: "h-9 px-3 text-sm rounded-[var(--radius-sm)]",
			md: "h-11 px-4 text-sm rounded-[var(--radius-md)]",
			lg: "h-12 px-5 text-base rounded-[var(--radius-md)] min-w-11",
			icon: "size-11 rounded-[var(--radius-md)]",
			pill: "h-10 px-4 rounded-full text-sm"
		}
	},
	defaultVariants: {
		variant: "secondary",
		size: "md"
	}
});
function Button({ className, variant, size, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var BLOCKS = [
	{
		id: 0,
		name: "minecraft:air",
		label: "Air",
		color: [
			0,
			0,
			0
		],
		solid: false,
		category: "special"
	},
	{
		id: 1,
		name: "minecraft:bedrock",
		label: "Bedrock",
		color: [
			20,
			20,
			24
		],
		solid: true,
		category: "terrain"
	},
	{
		id: 2,
		name: "minecraft:stone",
		label: "Stone",
		color: [
			125,
			125,
			125
		],
		solid: true,
		category: "terrain"
	},
	{
		id: 3,
		name: "minecraft:dirt",
		label: "Dirt",
		color: [
			134,
			96,
			67
		],
		solid: true,
		category: "terrain"
	},
	{
		id: 4,
		name: "minecraft:grass_block",
		label: "Grass",
		color: [
			91,
			153,
			57
		],
		solid: true,
		states: { snowy: "false" },
		category: "terrain"
	},
	{
		id: 5,
		name: "minecraft:sand",
		label: "Sand",
		color: [
			219,
			211,
			160
		],
		solid: true,
		category: "terrain"
	},
	{
		id: 6,
		name: "minecraft:sandstone",
		label: "Sandstone",
		color: [
			218,
			206,
			143
		],
		solid: true,
		category: "terrain"
	},
	{
		id: 7,
		name: "minecraft:gravel",
		label: "Gravel",
		color: [
			132,
			127,
			126
		],
		solid: true,
		category: "terrain"
	},
	{
		id: 8,
		name: "minecraft:water",
		label: "Water",
		color: [
			39,
			93,
			168
		],
		solid: false,
		liquid: true,
		category: "liquid"
	},
	{
		id: 9,
		name: "minecraft:lava",
		label: "Lava",
		color: [
			207,
			92,
			20
		],
		solid: false,
		liquid: true,
		category: "liquid"
	},
	{
		id: 10,
		name: "minecraft:oak_log",
		label: "Oak Log",
		color: [
			109,
			85,
			50
		],
		solid: true,
		states: { pillar_axis: "y" },
		category: "nature"
	},
	{
		id: 11,
		name: "minecraft:oak_leaves",
		label: "Oak Leaves",
		color: [
			48,
			114,
			34
		],
		solid: true,
		category: "nature"
	},
	{
		id: 12,
		name: "minecraft:birch_log",
		label: "Birch Log",
		color: [
			216,
			215,
			210
		],
		solid: true,
		states: { pillar_axis: "y" },
		category: "nature"
	},
	{
		id: 13,
		name: "minecraft:birch_leaves",
		label: "Birch Leaves",
		color: [
			90,
			144,
			58
		],
		solid: true,
		category: "nature"
	},
	{
		id: 14,
		name: "minecraft:spruce_log",
		label: "Spruce Log",
		color: [
			58,
			37,
			16
		],
		solid: true,
		states: { pillar_axis: "y" },
		category: "nature"
	},
	{
		id: 15,
		name: "minecraft:spruce_leaves",
		label: "Spruce Leaves",
		color: [
			38,
			80,
			38
		],
		solid: true,
		category: "nature"
	},
	{
		id: 16,
		name: "minecraft:cactus",
		label: "Cactus",
		color: [
			34,
			122,
			34
		],
		solid: true,
		category: "nature"
	},
	{
		id: 17,
		name: "minecraft:snow",
		label: "Snow",
		color: [
			240,
			244,
			244
		],
		solid: true,
		category: "terrain"
	},
	{
		id: 18,
		name: "minecraft:ice",
		label: "Ice",
		color: [
			125,
			173,
			255
		],
		solid: true,
		category: "terrain"
	},
	{
		id: 19,
		name: "minecraft:packed_ice",
		label: "Packed Ice",
		color: [
			141,
			180,
			250
		],
		solid: true,
		category: "terrain"
	},
	{
		id: 20,
		name: "minecraft:clay",
		label: "Clay",
		color: [
			159,
			164,
			176
		],
		solid: true,
		category: "terrain"
	},
	{
		id: 21,
		name: "minecraft:terracotta",
		label: "Terracotta",
		color: [
			152,
			94,
			67
		],
		solid: true,
		category: "terrain"
	},
	{
		id: 22,
		name: "minecraft:red_sand",
		label: "Red Sand",
		color: [
			190,
			102,
			33
		],
		solid: true,
		category: "terrain"
	},
	{
		id: 23,
		name: "minecraft:podzol",
		label: "Podzol",
		color: [
			92,
			63,
			28
		],
		solid: true,
		category: "terrain"
	},
	{
		id: 24,
		name: "minecraft:mycelium",
		label: "Mycelium",
		color: [
			111,
			98,
			114
		],
		solid: true,
		category: "terrain"
	},
	{
		id: 25,
		name: "minecraft:moss_block",
		label: "Moss",
		color: [
			89,
			109,
			45
		],
		solid: true,
		category: "nature"
	},
	{
		id: 26,
		name: "minecraft:mud",
		label: "Mud",
		color: [
			60,
			57,
			61
		],
		solid: true,
		category: "terrain"
	},
	{
		id: 27,
		name: "minecraft:cobblestone",
		label: "Cobblestone",
		color: [
			127,
			127,
			127
		],
		solid: true,
		category: "build"
	},
	{
		id: 28,
		name: "minecraft:mossy_cobblestone",
		label: "Mossy Cobble",
		color: [
			99,
			126,
			99
		],
		solid: true,
		category: "build"
	},
	{
		id: 29,
		name: "minecraft:oak_planks",
		label: "Oak Planks",
		color: [
			162,
			130,
			78
		],
		solid: true,
		category: "build"
	},
	{
		id: 30,
		name: "minecraft:spruce_planks",
		label: "Spruce Planks",
		color: [
			114,
			84,
			48
		],
		solid: true,
		category: "build"
	},
	{
		id: 31,
		name: "minecraft:glass",
		label: "Glass",
		color: [
			168,
			194,
			201
		],
		solid: true,
		category: "build"
	},
	{
		id: 32,
		name: "minecraft:bricks",
		label: "Bricks",
		color: [
			150,
			97,
			83
		],
		solid: true,
		category: "build"
	},
	{
		id: 33,
		name: "minecraft:stone_bricks",
		label: "Stone Bricks",
		color: [
			122,
			121,
			122
		],
		solid: true,
		category: "build"
	},
	{
		id: 34,
		name: "minecraft:dark_oak_planks",
		label: "Dark Oak",
		color: [
			66,
			43,
			20
		],
		solid: true,
		category: "build"
	},
	{
		id: 35,
		name: "minecraft:prismarine",
		label: "Prismarine",
		color: [
			99,
			156,
			151
		],
		solid: true,
		category: "build"
	},
	{
		id: 36,
		name: "minecraft:obsidian",
		label: "Obsidian",
		color: [
			15,
			10,
			24
		],
		solid: true,
		category: "special"
	},
	{
		id: 37,
		name: "minecraft:netherrack",
		label: "Netherrack",
		color: [
			97,
			38,
			38
		],
		solid: true,
		category: "terrain"
	},
	{
		id: 38,
		name: "minecraft:end_stone",
		label: "End Stone",
		color: [
			219,
			222,
			157
		],
		solid: true,
		category: "terrain"
	},
	{
		id: 39,
		name: "minecraft:amethyst_block",
		label: "Amethyst",
		color: [
			133,
			97,
			191
		],
		solid: true,
		category: "special"
	},
	{
		id: 40,
		name: "minecraft:gold_block",
		label: "Gold",
		color: [
			246,
			208,
			61
		],
		solid: true,
		category: "special"
	},
	{
		id: 41,
		name: "minecraft:iron_block",
		label: "Iron",
		color: [
			220,
			220,
			220
		],
		solid: true,
		category: "special"
	},
	{
		id: 42,
		name: "minecraft:diamond_block",
		label: "Diamond",
		color: [
			93,
			236,
			217
		],
		solid: true,
		category: "special"
	},
	{
		id: 43,
		name: "minecraft:hay_block",
		label: "Hay",
		color: [
			166,
			139,
			12
		],
		solid: true,
		category: "nature"
	},
	{
		id: 44,
		name: "minecraft:farmland",
		label: "Farmland",
		color: [
			95,
			58,
			30
		],
		solid: true,
		category: "nature"
	},
	{
		id: 45,
		name: "minecraft:cobblestone_stairs",
		label: "Cobble Stairs",
		color: [
			127,
			127,
			127
		],
		solid: true,
		states: {
			weirdo_direction: 0,
			upsidedown_bit: 0
		},
		category: "build"
	},
	{
		id: 46,
		name: "minecraft:oak_stairs",
		label: "Oak Stairs",
		color: [
			162,
			130,
			78
		],
		solid: true,
		states: {
			weirdo_direction: 0,
			upsidedown_bit: 0
		},
		category: "build"
	},
	{
		id: 47,
		name: "minecraft:oak_slab",
		label: "Oak Slab",
		color: [
			162,
			130,
			78
		],
		solid: true,
		states: { "minecraft:vertical_half": "bottom" },
		category: "build"
	},
	{
		id: 48,
		name: "minecraft:crafting_table",
		label: "Crafting Table",
		color: [
			119,
			73,
			42
		],
		solid: true,
		category: "build"
	},
	{
		id: 49,
		name: "minecraft:chest",
		label: "Chest",
		color: [
			141,
			102,
			35
		],
		solid: true,
		category: "build"
	},
	{
		id: 50,
		name: "minecraft:furnace",
		label: "Furnace",
		color: [
			96,
			96,
			96
		],
		solid: true,
		category: "build"
	},
	{
		id: 51,
		name: "minecraft:bookshelf",
		label: "Bookshelf",
		color: [
			117,
			73,
			42
		],
		solid: true,
		category: "build"
	},
	{
		id: 52,
		name: "minecraft:oak_fence",
		label: "Oak Fence",
		color: [
			162,
			130,
			78
		],
		solid: true,
		category: "build"
	},
	{
		id: 53,
		name: "minecraft:cobblestone_wall",
		label: "Cobble Wall",
		color: [
			127,
			127,
			127
		],
		solid: true,
		category: "build"
	},
	{
		id: 54,
		name: "minecraft:white_wool",
		label: "White Wool",
		color: [
			233,
			236,
			236
		],
		solid: true,
		category: "build"
	},
	{
		id: 55,
		name: "minecraft:smooth_stone",
		label: "Smooth Stone",
		color: [
			158,
			158,
			158
		],
		solid: true,
		category: "build"
	},
	{
		id: 56,
		name: "minecraft:deepslate",
		label: "Deepslate",
		color: [
			80,
			80,
			82
		],
		solid: true,
		category: "terrain"
	},
	{
		id: 57,
		name: "minecraft:calcite",
		label: "Calcite",
		color: [
			223,
			224,
			220
		],
		solid: true,
		category: "terrain"
	},
	{
		id: 58,
		name: "minecraft:tuff",
		label: "Tuff",
		color: [
			108,
			109,
			102
		],
		solid: true,
		category: "terrain"
	},
	{
		id: 59,
		name: "minecraft:dirt_path",
		label: "Dirt Path",
		color: [
			148,
			121,
			65
		],
		solid: true,
		category: "build"
	},
	{
		id: 60,
		name: "minecraft:grass_block",
		label: "Podzol Grass",
		color: [
			70,
			120,
			45
		],
		solid: true,
		states: { snowy: "false" },
		category: "terrain"
	},
	{
		id: 61,
		name: "minecraft:cherry_log",
		label: "Cherry Log",
		color: [
			54,
			33,
			44
		],
		solid: true,
		states: { pillar_axis: "y" },
		category: "nature"
	},
	{
		id: 62,
		name: "minecraft:cherry_leaves",
		label: "Cherry Leaves",
		color: [
			230,
			160,
			186
		],
		solid: true,
		category: "nature"
	},
	{
		id: 63,
		name: "minecraft:dark_oak_log",
		label: "Dark Oak Log",
		color: [
			60,
			39,
			18
		],
		solid: true,
		states: { pillar_axis: "y" },
		category: "nature"
	},
	{
		id: 64,
		name: "minecraft:dark_oak_leaves",
		label: "Dark Oak Leaves",
		color: [
			36,
			86,
			18
		],
		solid: true,
		category: "nature"
	},
	{
		id: 65,
		name: "minecraft:jungle_log",
		label: "Jungle Log",
		color: [
			85,
			68,
			25
		],
		solid: true,
		states: { pillar_axis: "y" },
		category: "nature"
	},
	{
		id: 66,
		name: "minecraft:jungle_leaves",
		label: "Jungle Leaves",
		color: [
			48,
			132,
			18
		],
		solid: true,
		category: "nature"
	},
	{
		id: 67,
		name: "minecraft:snow_block",
		label: "Snow Block",
		color: [
			240,
			244,
			244
		],
		solid: true,
		category: "terrain"
	},
	{
		id: 68,
		name: "minecraft:andesite",
		label: "Andesite",
		color: [
			136,
			136,
			136
		],
		solid: true,
		category: "terrain"
	},
	{
		id: 69,
		name: "minecraft:granite",
		label: "Granite",
		color: [
			149,
			103,
			85
		],
		solid: true,
		category: "terrain"
	},
	{
		id: 70,
		name: "minecraft:diorite",
		label: "Diorite",
		color: [
			188,
			188,
			188
		],
		solid: true,
		category: "terrain"
	},
	{
		id: 71,
		name: "minecraft:coal_ore",
		label: "Coal Ore",
		color: [
			105,
			105,
			105
		],
		solid: true,
		category: "special"
	},
	{
		id: 72,
		name: "minecraft:iron_ore",
		label: "Iron Ore",
		color: [
			136,
			129,
			122
		],
		solid: true,
		category: "special"
	},
	{
		id: 73,
		name: "minecraft:copper_ore",
		label: "Copper Ore",
		color: [
			124,
			125,
			120
		],
		solid: true,
		category: "special"
	},
	{
		id: 74,
		name: "minecraft:gold_ore",
		label: "Gold Ore",
		color: [
			143,
			140,
			125
		],
		solid: true,
		category: "special"
	},
	{
		id: 75,
		name: "minecraft:diamond_ore",
		label: "Diamond Ore",
		color: [
			121,
			141,
			140
		],
		solid: true,
		category: "special"
	},
	{
		id: 76,
		name: "minecraft:glowstone",
		label: "Glowstone",
		color: [
			171,
			131,
			84
		],
		solid: true,
		category: "special"
	},
	{
		id: 77,
		name: "minecraft:sea_lantern",
		label: "Sea Lantern",
		color: [
			172,
			199,
			190
		],
		solid: true,
		category: "special"
	},
	{
		id: 78,
		name: "minecraft:lantern",
		label: "Lantern",
		color: [
			142,
			104,
			47
		],
		solid: true,
		category: "build"
	},
	{
		id: 79,
		name: "minecraft:torch",
		label: "Torch",
		color: [
			196,
			160,
			70
		],
		solid: false,
		category: "build"
	},
	{
		id: 80,
		name: "minecraft:white_concrete",
		label: "White Concrete",
		color: [
			207,
			213,
			214
		],
		solid: true,
		category: "build"
	},
	{
		id: 81,
		name: "minecraft:gray_concrete",
		label: "Gray Concrete",
		color: [
			54,
			57,
			61
		],
		solid: true,
		category: "build"
	},
	{
		id: 82,
		name: "minecraft:black_concrete",
		label: "Black Concrete",
		color: [
			8,
			10,
			15
		],
		solid: true,
		category: "build"
	},
	{
		id: 83,
		name: "minecraft:orange_terracotta",
		label: "Orange Terracotta",
		color: [
			161,
			83,
			37
		],
		solid: true,
		category: "build"
	},
	{
		id: 84,
		name: "minecraft:red_terracotta",
		label: "Red Terracotta",
		color: [
			143,
			61,
			46
		],
		solid: true,
		category: "build"
	},
	{
		id: 85,
		name: "minecraft:yellow_terracotta",
		label: "Yellow Terracotta",
		color: [
			186,
			133,
			35
		],
		solid: true,
		category: "build"
	},
	{
		id: 86,
		name: "minecraft:polished_andesite",
		label: "Polished Andesite",
		color: [
			132,
			134,
			132
		],
		solid: true,
		category: "build"
	},
	{
		id: 87,
		name: "minecraft:chiseled_sandstone",
		label: "Chiseled Sandstone",
		color: [
			216,
			202,
			139
		],
		solid: true,
		category: "build"
	},
	{
		id: 88,
		name: "minecraft:cut_sandstone",
		label: "Cut Sandstone",
		color: [
			217,
			207,
			153
		],
		solid: true,
		category: "build"
	},
	{
		id: 89,
		name: "minecraft:smooth_sandstone",
		label: "Smooth Sandstone",
		color: [
			224,
			214,
			170
		],
		solid: true,
		category: "build"
	},
	{
		id: 90,
		name: "minecraft:water",
		label: "Water Source",
		color: [
			39,
			93,
			168
		],
		solid: false,
		liquid: true,
		category: "liquid"
	}
];
var BLOCK_BY_ID = [];
for (const b of BLOCKS) BLOCK_BY_ID[b.id] = b;
var BLOCK_BY_NAME = /* @__PURE__ */ new Map();
for (const b of BLOCKS) if (!BLOCK_BY_NAME.has(b.name)) BLOCK_BY_NAME.set(b.name, b);
function isSolid(id) {
	return BLOCK_BY_ID[id]?.solid ?? false;
}
/**
* Bedrock numeric biome IDs (Overworld). Verified against Bedrock 1.21 lists.
* Unknown custom biomes fall back to plains (1).
*/
var BIOMES = [
	{
		id: 0,
		bedrockId: 1,
		name: "plains",
		label: "Plains",
		color: [
			141,
			179,
			96
		],
		surface: 4,
		fill: 3,
		tree: "oak",
		temperature: .8,
		moisture: .4
	},
	{
		id: 1,
		bedrockId: 4,
		name: "forest",
		label: "Forest",
		color: [
			5,
			102,
			33
		],
		surface: 4,
		fill: 3,
		tree: "oak",
		temperature: .7,
		moisture: .8
	},
	{
		id: 2,
		bedrockId: 5,
		name: "taiga",
		label: "Taiga",
		color: [
			11,
			102,
			89
		],
		surface: 4,
		fill: 3,
		extra: "podzol",
		tree: "spruce",
		temperature: .25,
		moisture: .8
	},
	{
		id: 3,
		bedrockId: 2,
		name: "desert",
		label: "Desert",
		color: [
			250,
			222,
			122
		],
		surface: 5,
		fill: 5,
		extra: "sand",
		tree: "cactus",
		temperature: 2,
		moisture: 0
	},
	{
		id: 4,
		bedrockId: 0,
		name: "ocean",
		label: "Ocean",
		color: [
			32,
			56,
			150
		],
		surface: 7,
		fill: 2,
		temperature: .5,
		moisture: 1
	},
	{
		id: 5,
		bedrockId: 24,
		name: "deep_ocean",
		label: "Deep Ocean",
		color: [
			18,
			32,
			100
		],
		surface: 7,
		fill: 2,
		temperature: .5,
		moisture: 1
	},
	{
		id: 6,
		bedrockId: 7,
		name: "river",
		label: "River",
		color: [
			50,
			100,
			180
		],
		surface: 5,
		fill: 3,
		temperature: .5,
		moisture: 1
	},
	{
		id: 7,
		bedrockId: 16,
		name: "beach",
		label: "Beach",
		color: [
			250,
			238,
			173
		],
		surface: 5,
		fill: 5,
		extra: "sand",
		temperature: .8,
		moisture: .4
	},
	{
		id: 8,
		bedrockId: 3,
		name: "mountains",
		label: "Mountains",
		color: [
			128,
			128,
			144
		],
		surface: 2,
		fill: 2,
		temperature: .2,
		moisture: .3
	},
	{
		id: 9,
		bedrockId: 12,
		name: "snowy_plains",
		label: "Snowy Plains",
		color: [
			255,
			255,
			255
		],
		surface: 4,
		fill: 3,
		extra: "snow",
		temperature: 0,
		moisture: .5
	},
	{
		id: 10,
		bedrockId: 30,
		name: "snowy_taiga",
		label: "Snowy Taiga",
		color: [
			200,
			220,
			220
		],
		surface: 4,
		fill: 3,
		extra: "snow",
		tree: "spruce",
		temperature: -.5,
		moisture: .4
	},
	{
		id: 11,
		bedrockId: 6,
		name: "swamp",
		label: "Swamp",
		color: [
			48,
			80,
			40
		],
		surface: 4,
		fill: 3,
		extra: "mud",
		tree: "oak",
		temperature: .8,
		moisture: .9
	},
	{
		id: 12,
		bedrockId: 21,
		name: "jungle",
		label: "Jungle",
		color: [
			18,
			160,
			24
		],
		surface: 4,
		fill: 3,
		tree: "jungle",
		temperature: .95,
		moisture: .9
	},
	{
		id: 13,
		bedrockId: 35,
		name: "savanna",
		label: "Savanna",
		color: [
			189,
			178,
			95
		],
		surface: 4,
		fill: 3,
		tree: "oak",
		temperature: 1.2,
		moisture: .2
	},
	{
		id: 14,
		bedrockId: 37,
		name: "badlands",
		label: "Badlands",
		color: [
			217,
			69,
			21
		],
		surface: 22,
		fill: 21,
		extra: "redsand",
		temperature: 2,
		moisture: 0
	},
	{
		id: 15,
		bedrockId: 14,
		name: "mushroom_fields",
		label: "Mushroom",
		color: [
			162,
			130,
			150
		],
		surface: 24,
		fill: 3,
		extra: "mycelium",
		temperature: .9,
		moisture: 1
	},
	{
		id: 16,
		bedrockId: 132,
		name: "flower_forest",
		label: "Flower Forest",
		color: [
			45,
			142,
			73
		],
		surface: 4,
		fill: 3,
		tree: "birch",
		temperature: .7,
		moisture: .8
	},
	{
		id: 17,
		bedrockId: 27,
		name: "birch_forest",
		label: "Birch Forest",
		color: [
			88,
			156,
			88
		],
		surface: 4,
		fill: 3,
		tree: "birch",
		temperature: .6,
		moisture: .6
	},
	{
		id: 18,
		bedrockId: 29,
		name: "dark_forest",
		label: "Dark Forest",
		color: [
			18,
			58,
			18
		],
		surface: 4,
		fill: 3,
		tree: "dark_oak",
		temperature: .7,
		moisture: .8
	},
	{
		id: 19,
		bedrockId: 10,
		name: "frozen_ocean",
		label: "Frozen Ocean",
		color: [
			80,
			112,
			160
		],
		surface: 18,
		fill: 2,
		extra: "snow",
		temperature: 0,
		moisture: 1
	},
	{
		id: 20,
		bedrockId: 44,
		name: "warm_ocean",
		label: "Warm Ocean",
		color: [
			32,
			120,
			170
		],
		surface: 5,
		fill: 5,
		temperature: .5,
		moisture: 1
	},
	{
		id: 21,
		bedrockId: 163,
		name: "cherry_grove",
		label: "Cherry Grove",
		color: [
			242,
			180,
			196
		],
		surface: 4,
		fill: 3,
		tree: "cherry",
		temperature: .5,
		moisture: .8
	},
	{
		id: 22,
		bedrockId: 186,
		name: "pale_garden",
		label: "Pale Garden",
		color: [
			170,
			170,
			160
		],
		surface: 4,
		fill: 3,
		tree: "dark_oak",
		temperature: .7,
		moisture: .8
	},
	{
		id: 23,
		bedrockId: 13,
		name: "snowy_mountains",
		label: "Snowy Peaks",
		color: [
			245,
			250,
			250
		],
		surface: 67,
		fill: 2,
		extra: "snow",
		temperature: -.3,
		moisture: .3
	},
	{
		id: 24,
		bedrockId: 34,
		name: "wooded_mountains",
		label: "Wooded Peaks",
		color: [
			90,
			110,
			90
		],
		surface: 4,
		fill: 2,
		tree: "spruce",
		temperature: .2,
		moisture: .3
	},
	{
		id: 25,
		bedrockId: 129,
		name: "sunflower_plains",
		label: "Sunflower Plains",
		color: [
			170,
			190,
			70
		],
		surface: 4,
		fill: 3,
		tree: "oak",
		temperature: .8,
		moisture: .4
	},
	{
		id: 26,
		bedrockId: 32,
		name: "mega_taiga",
		label: "Old Growth Taiga",
		color: [
			22,
			80,
			50
		],
		surface: 23,
		fill: 3,
		extra: "podzol",
		tree: "spruce",
		temperature: .3,
		moisture: .8
	},
	{
		id: 27,
		bedrockId: 45,
		name: "lukewarm_ocean",
		label: "Lukewarm Ocean",
		color: [
			36,
			80,
			160
		],
		surface: 5,
		fill: 2,
		temperature: .5,
		moisture: 1
	},
	{
		id: 28,
		bedrockId: 46,
		name: "cold_ocean",
		label: "Cold Ocean",
		color: [
			40,
			70,
			140
		],
		surface: 7,
		fill: 2,
		temperature: .3,
		moisture: 1
	},
	{
		id: 29,
		bedrockId: 165,
		name: "mangrove_swamp",
		label: "Mangrove",
		color: [
			36,
			70,
			50
		],
		surface: 26,
		fill: 26,
		extra: "mud",
		tree: "oak",
		temperature: .8,
		moisture: .9
	}
];
var BIOME_BY_BEDROCK = /* @__PURE__ */ new Map();
for (const b of BIOMES) BIOME_BY_BEDROCK.set(b.bedrockId, b);
function biomeByBedrockId(id) {
	return BIOME_BY_BEDROCK.get(id) ?? BIOMES[0];
}
/**
* Little-endian NBT used by Minecraft Bedrock (uncompressed).
* level.dat, block palettes, entities, and mobevents all use this.
*/
var TAG = {
	End: 0,
	Byte: 1,
	Short: 2,
	Int: 3,
	Long: 4,
	Float: 5,
	Double: 6,
	ByteArray: 7,
	String: 8,
	List: 9,
	Compound: 10,
	IntArray: 11,
	LongArray: 12
};
function byte(value) {
	return {
		type: TAG.Byte,
		value: value & 255
	};
}
function short(value) {
	return {
		type: TAG.Short,
		value
	};
}
function int(value) {
	return {
		type: TAG.Int,
		value: value | 0
	};
}
function long(value) {
	return {
		type: TAG.Long,
		value: typeof value === "bigint" ? value : BigInt(value)
	};
}
function float(value) {
	return {
		type: TAG.Float,
		value
	};
}
function double(value) {
	return {
		type: TAG.Double,
		value
	};
}
function str(value) {
	return {
		type: TAG.String,
		value
	};
}
function compound(value) {
	return {
		type: TAG.Compound,
		value
	};
}
function listOf(listType, items) {
	return {
		type: TAG.List,
		value: {
			listType,
			items
		}
	};
}
function intList(values) {
	return listOf(TAG.Int, values.map((v) => int(v)));
}
var Writer = class {
	chunks = [];
	len = 0;
	writeByte(n) {
		this.chunks.push(new Uint8Array([n & 255]));
		this.len += 1;
	}
	writeBytes(b) {
		this.chunks.push(b);
		this.len += b.length;
	}
	writeShort(n) {
		const b = /* @__PURE__ */ new Uint8Array(2);
		new DataView(b.buffer).setInt16(0, n, true);
		this.writeBytes(b);
	}
	writeInt(n) {
		const b = /* @__PURE__ */ new Uint8Array(4);
		new DataView(b.buffer).setInt32(0, n, true);
		this.writeBytes(b);
	}
	writeLong(n) {
		const b = /* @__PURE__ */ new Uint8Array(8);
		new DataView(b.buffer).setBigInt64(0, n, true);
		this.writeBytes(b);
	}
	writeFloat(n) {
		const b = /* @__PURE__ */ new Uint8Array(4);
		new DataView(b.buffer).setFloat32(0, n, true);
		this.writeBytes(b);
	}
	writeDouble(n) {
		const b = /* @__PURE__ */ new Uint8Array(8);
		new DataView(b.buffer).setFloat64(0, n, true);
		this.writeBytes(b);
	}
	writeString(s) {
		const enc = new TextEncoder().encode(s);
		this.writeShort(enc.length);
		this.writeBytes(enc);
	}
	writePayload(tag) {
		switch (tag.type) {
			case TAG.Byte:
				this.writeByte(tag.value);
				break;
			case TAG.Short:
				this.writeShort(tag.value);
				break;
			case TAG.Int:
				this.writeInt(tag.value);
				break;
			case TAG.Long:
				this.writeLong(tag.value);
				break;
			case TAG.Float:
				this.writeFloat(tag.value);
				break;
			case TAG.Double:
				this.writeDouble(tag.value);
				break;
			case TAG.ByteArray:
				this.writeInt(tag.value.length);
				this.writeBytes(tag.value);
				break;
			case TAG.String:
				this.writeString(tag.value);
				break;
			case TAG.List:
				this.writeByte(tag.value.listType);
				this.writeInt(tag.value.items.length);
				for (const item of tag.value.items) this.writePayload(item);
				break;
			case TAG.Compound:
				this.writeCompoundPayload(tag.value);
				break;
			case TAG.IntArray:
				this.writeInt(tag.value.length);
				for (const n of tag.value) this.writeInt(n);
				break;
			case TAG.LongArray:
				this.writeInt(tag.value.length);
				for (const n of tag.value) this.writeLong(n);
		}
	}
	writeNamed(name, tag) {
		this.writeByte(tag.type);
		this.writeString(name);
		this.writePayload(tag);
	}
	writeCompoundPayload(c) {
		for (const [k, v] of Object.entries(c)) this.writeNamed(k, v);
		this.writeByte(TAG.End);
	}
	toBytes() {
		const out = new Uint8Array(this.len);
		let o = 0;
		for (const c of this.chunks) {
			out.set(c, o);
			o += c.length;
		}
		return out;
	}
};
/** Named root compound (Bedrock default: empty name). */
function encodeNbt(root, rootName = "") {
	const w = new Writer();
	w.writeNamed(rootName, compound(root));
	return w.toBytes();
}
var Reader = class {
	view;
	offset = 0;
	buf;
	constructor(buf) {
		this.buf = buf;
		this.view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
	}
	remaining() {
		return this.buf.length - this.offset;
	}
	u8() {
		return this.buf[this.offset++];
	}
	i8() {
		const v = this.view.getInt8(this.offset);
		this.offset += 1;
		return v;
	}
	i16() {
		const v = this.view.getInt16(this.offset, true);
		this.offset += 2;
		return v;
	}
	i32() {
		const v = this.view.getInt32(this.offset, true);
		this.offset += 4;
		return v;
	}
	i64() {
		const v = this.view.getBigInt64(this.offset, true);
		this.offset += 8;
		return v;
	}
	f32() {
		const v = this.view.getFloat32(this.offset, true);
		this.offset += 4;
		return v;
	}
	f64() {
		const v = this.view.getFloat64(this.offset, true);
		this.offset += 8;
		return v;
	}
	bytes(n) {
		const s = this.buf.subarray(this.offset, this.offset + n);
		this.offset += n;
		return s;
	}
	string() {
		const len = this.i16() & 65535;
		const s = this.bytes(len);
		return new TextDecoder().decode(s);
	}
	payload(type) {
		switch (type) {
			case TAG.Byte: return byte(this.u8());
			case TAG.Short: return short(this.i16());
			case TAG.Int: return int(this.i32());
			case TAG.Long: return long(this.i64());
			case TAG.Float: return float(this.f32());
			case TAG.Double: return double(this.f64());
			case TAG.ByteArray: {
				const n = this.i32();
				return {
					type: TAG.ByteArray,
					value: this.bytes(n)
				};
			}
			case TAG.String: return str(this.string());
			case TAG.List: {
				const listType = this.u8();
				const n = this.i32();
				const items = [];
				for (let i = 0; i < n; i++) items.push(this.payload(listType));
				return listOf(listType, items);
			}
			case TAG.Compound: return compound(this.compoundPayload());
			case TAG.IntArray: {
				const n = this.i32();
				const arr = new Int32Array(n);
				for (let i = 0; i < n; i++) arr[i] = this.i32();
				return {
					type: TAG.IntArray,
					value: arr
				};
			}
			case TAG.LongArray: {
				const n = this.i32();
				const arr = [];
				for (let i = 0; i < n; i++) arr.push(this.i64());
				return {
					type: TAG.LongArray,
					value: arr
				};
			}
			default: throw new Error(`Unknown NBT tag ${type}`);
		}
	}
	compoundPayload() {
		const out = {};
		for (;;) {
			if (this.remaining() <= 0) break;
			const t = this.u8();
			if (t === TAG.End) break;
			const name = this.string();
			out[name] = this.payload(t);
		}
		return out;
	}
	named() {
		const t = this.u8();
		if (t === TAG.End) return {
			name: "",
			value: compound({})
		};
		return {
			name: this.string(),
			value: this.payload(t)
		};
	}
};
function decodeNbt(buf) {
	const named = new Reader(buf).named();
	if (named.value.type !== TAG.Compound) throw new Error("Root NBT is not a compound");
	return {
		name: named.name,
		value: named.value.value
	};
}
function getInt(c, k, fallback = 0) {
	const v = c[k];
	if (!v) return fallback;
	if (v.type === TAG.Int || v.type === TAG.Short || v.type === TAG.Byte || v.type === TAG.Float) return Number(v.value);
	if (v.type === TAG.Long) return Number(v.value);
	return fallback;
}
function getByte(c, k, fallback = 0) {
	return getInt(c, k, fallback);
}
function getString(c, k, fallback = "") {
	const v = c[k];
	if (v && v.type === TAG.String) return v.value;
	return fallback;
}
function getLong(c, k, fallback = 0n) {
	const v = c[k];
	if (!v) return fallback;
	if (v.type === TAG.Long) return v.value;
	if (v.type === TAG.Int || v.type === TAG.Short || v.type === TAG.Byte) return BigInt(v.value);
	return fallback;
}
/** Castagnoli CRC-32C — matches LevelDB / Minecraft Bedrock. */
var TABLE$1 = /* @__PURE__ */ new Uint32Array(256);
for (let i = 0; i < 256; i++) {
	let c = i;
	for (let j = 0; j < 8; j++) c = c & 1 ? 2197175160 ^ c >>> 1 : c >>> 1;
	TABLE$1[i] = c;
}
function crc32c(data, start = 0, end = data.length) {
	let crc = 4294967295;
	for (let i = start; i < end; i++) crc = TABLE$1[(crc ^ data[i]) & 255] ^ crc >>> 8;
	return (crc ^ 4294967295) >>> 0;
}
var MASK_DELTA = 2726488792;
/** LevelDB's crc32c::Mask — stored in log/table trailers. */
function maskCrc(crc) {
	return (crc >>> 15 | crc << 17) + MASK_DELTA >>> 0;
}
/**
* Pure-JS Minecraft Bedrock LevelDB (Mojang fork).
*
* Write path: a recover-on-open log database (CURRENT + MANIFEST + .log).
* Minecraft opens this, replays the log, and compactes it — this is a real
* LevelDB, not a renamed zip.
*
* Read path: SST (.ldb/.sst) + WAL (.log). Used to import existing worlds.
*/
function keyToHex(key) {
	let s = "";
	for (let i = 0; i < key.length; i++) s += key[i].toString(16).padStart(2, "0");
	return s;
}
function hexToKey(hex) {
	const out = new Uint8Array(hex.length / 2);
	for (let i = 0; i < out.length; i++) out[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
	return out;
}
function u32le(n) {
	const b = /* @__PURE__ */ new Uint8Array(4);
	new DataView(b.buffer).setUint32(0, n >>> 0, true);
	return b;
}
function u64le(n) {
	const b = /* @__PURE__ */ new Uint8Array(8);
	new DataView(b.buffer).setBigUint64(0, n, true);
	return b;
}
function encodeVarint32(n, into) {
	n = n >>> 0;
	while (n >= 128) {
		into.push(n & 127 | 128);
		n >>>= 7;
	}
	into.push(n);
}
function encodeVarint64(n, into) {
	let x = n;
	while (x >= 128n) {
		into.push(Number(x & 127n) | 128);
		x >>= 7n;
	}
	into.push(Number(x));
}
function readVarint32(buf, offset) {
	let n = 0;
	let shift = 0;
	let i = offset;
	while (i < buf.length) {
		const b = buf[i++];
		n |= (b & 127) << shift;
		if ((b & 128) === 0) break;
		shift += 7;
	}
	return [n >>> 0, i];
}
function readVarint64(buf, offset) {
	let n = 0n;
	let shift = 0n;
	let i = offset;
	while (i < buf.length) {
		const b = BigInt(buf[i++]);
		n |= (b & 127n) << shift;
		if ((b & 128n) === 0n) break;
		shift += 7n;
	}
	return [n, i];
}
var BLOCK_SIZE = 32768;
var HEADER_SIZE = 7;
var FULL = 1;
var FIRST = 2;
var MIDDLE = 3;
var LAST = 4;
function emitPhysicalRecord(chunks, type, payload, start, length) {
	const header = new Uint8Array(HEADER_SIZE + length);
	header[4] = length & 255;
	header[5] = length >> 8 & 255;
	header[6] = type;
	header.set(payload.subarray(start, start + length), HEADER_SIZE);
	const crc = maskCrc(crc32c(header, 6, HEADER_SIZE + length));
	header[0] = crc & 255;
	header[1] = crc >> 8 & 255;
	header[2] = crc >> 16 & 255;
	header[3] = crc >> 24 & 255;
	chunks.push(header);
}
function encodeLogRecords(records) {
	const chunks = [];
	let blockOffset = 0;
	for (const rec of records) {
		let ptr = 0;
		let begin = true;
		while (ptr < rec.length || begin) {
			let leftover = BLOCK_SIZE - blockOffset;
			if (leftover < HEADER_SIZE) {
				if (leftover > 0) chunks.push(new Uint8Array(leftover));
				blockOffset = 0;
				leftover = BLOCK_SIZE;
			}
			const avail = leftover - HEADER_SIZE;
			const fragment = Math.min(rec.length - ptr, avail);
			const end = ptr + fragment === rec.length;
			let type;
			if (begin && end) type = FULL;
			else if (begin) type = FIRST;
			else if (end) type = LAST;
			else type = MIDDLE;
			emitPhysicalRecord(chunks, type, rec, ptr, fragment);
			blockOffset += HEADER_SIZE + fragment;
			ptr += fragment;
			begin = false;
			if (rec.length === 0) break;
		}
	}
	return concatAll(chunks);
}
function concatAll(chunks) {
	let n = 0;
	for (const c of chunks) n += c.length;
	const out = new Uint8Array(n);
	let o = 0;
	for (const c of chunks) {
		out.set(c, o);
		o += c.length;
	}
	return out;
}
function encodeWriteBatch(kvs, sequence = 1n) {
	const payload = [u64le(sequence), u32le(kvs.length)];
	for (const [k, v] of kvs) {
		const rec = [1];
		encodeVarint32(k.length, rec);
		for (let i = 0; i < k.length; i++) rec.push(k[i]);
		encodeVarint32(v.length, rec);
		payload.push(new Uint8Array(rec), v);
	}
	return concatAll(payload);
}
var TAG_COMPARATOR = 1;
var TAG_LOG_NUMBER = 2;
var TAG_NEXT_FILE = 3;
var TAG_LAST_SEQ = 4;
var TAG_PREV_LOG = 9;
function encodeVersionEdit(opts) {
	const bytes = [];
	if (opts.comparator) {
		encodeVarint32(TAG_COMPARATOR, bytes);
		const name = new TextEncoder().encode(opts.comparator);
		encodeVarint32(name.length, bytes);
		for (const b of name) bytes.push(b);
	}
	encodeVarint32(TAG_LOG_NUMBER, bytes);
	encodeVarint64(BigInt(opts.logNumber), bytes);
	encodeVarint32(TAG_NEXT_FILE, bytes);
	encodeVarint64(BigInt(opts.nextFile), bytes);
	encodeVarint32(TAG_LAST_SEQ, bytes);
	encodeVarint64(opts.lastSeq, bytes);
	encodeVarint32(TAG_PREV_LOG, bytes);
	encodeVarint64(BigInt(opts.prevLog ?? 0), bytes);
	return new Uint8Array(bytes);
}
/** Build a valid LevelDB directory Minecraft Bedrock can open. */
function writeLevelDb(map) {
	const kvs = [];
	for (const [hex, value] of map) kvs.push([hexToKey(hex), value]);
	kvs.sort((a, b) => compareBytes(a[0], b[0]));
	const log = encodeLogRecords([encodeWriteBatch(kvs, 1n)]);
	const manifest = encodeLogRecords([encodeVersionEdit({
		comparator: "leveldb.BytewiseComparator",
		logNumber: 3,
		nextFile: 4,
		lastSeq: BigInt(Math.max(1, kvs.length)),
		prevLog: 0
	})]);
	return {
		files: {
			CURRENT: new TextEncoder().encode("MANIFEST-000001\n"),
			"MANIFEST-000001": manifest,
			"000003.log": log,
			LOCK: /* @__PURE__ */ new Uint8Array(0),
			LOG: new TextEncoder().encode("2026/09/01-00:00:00.000000 0 Creating DB \"leveldb.BytewiseComparator\"\n")
		},
		keyCount: kvs.length
	};
}
function compareBytes(a, b) {
	const n = Math.min(a.length, b.length);
	for (let i = 0; i < n; i++) if (a[i] !== b[i]) return a[i] - b[i];
	return a.length - b.length;
}
function readLogRecords(buf) {
	const records = [];
	let offset = 0;
	let assembling = [];
	while (offset + HEADER_SIZE <= buf.length) {
		const inBlock = offset % BLOCK_SIZE;
		if (BLOCK_SIZE - inBlock < HEADER_SIZE) {
			offset += BLOCK_SIZE - inBlock;
			continue;
		}
		const len = buf[offset + 4] | buf[offset + 5] << 8;
		const type = buf[offset + 6];
		if (type === 0 && len === 0) {
			offset += BLOCK_SIZE - inBlock;
			continue;
		}
		const payloadStart = offset + HEADER_SIZE;
		if (payloadStart + len > buf.length) break;
		const payload = buf.subarray(payloadStart, payloadStart + len);
		offset = payloadStart + len;
		if (type === FULL) records.push(payload.slice());
		else if (type === FIRST) assembling = [payload.slice()];
		else if (type === MIDDLE) assembling.push(payload.slice());
		else if (type === LAST) {
			assembling.push(payload.slice());
			records.push(concatAll(assembling));
			assembling = [];
		}
	}
	return records;
}
function applyWriteBatch(map, rec) {
	if (rec.length < 12) return;
	const count = new DataView(rec.buffer, rec.byteOffset, rec.byteLength).getUint32(8, true);
	let o = 12;
	for (let i = 0; i < count && o < rec.length; i++) {
		const kind = rec[o++];
		const [klen, o1] = readVarint32(rec, o);
		o = o1;
		const key = rec.subarray(o, o + klen);
		o += klen;
		if (kind === 1) {
			const [vlen, o2] = readVarint32(rec, o);
			o = o2;
			const value = rec.subarray(o, o + vlen);
			o += vlen;
			map.set(keyToHex(key), value.slice());
		} else if (kind === 0) map.delete(keyToHex(key));
		else break;
	}
}
var TABLE_MAGIC = 15800726617472432983n;
function readBlock(file, offset, size) {
	const off = Number(offset);
	const sz = Number(size);
	if (off < 0 || off + sz + 5 > file.length) return null;
	const compressed = file.subarray(off, off + sz);
	const type = file[off + sz];
	try {
		if (type === 0) return compressed.slice();
		if (type === 2) return inflate(compressed);
		if (type === 3 || type === 4) return inflateRaw(compressed);
		return null;
	} catch {
		return null;
	}
}
function parseBlockEntries(block) {
	if (block.length < 4) return [];
	const numRestarts = new DataView(block.buffer, block.byteOffset, block.byteLength).getUint32(block.length - 4, true);
	if (numRestarts > 1e6) return [];
	const restartsOffset = block.length - (1 + numRestarts) * 4;
	if (restartsOffset < 0) return [];
	const out = [];
	let o = 0;
	let lastKey = /* @__PURE__ */ new Uint8Array(0);
	while (o < restartsOffset) {
		const [shared, o1] = readVarint32(block, o);
		const [nonShared, o2] = readVarint32(block, o1);
		const [valueLen, o3] = readVarint32(block, o2);
		o = o3;
		if (o + nonShared + valueLen > restartsOffset) break;
		const key = new Uint8Array(shared + nonShared);
		key.set(lastKey.subarray(0, shared), 0);
		key.set(block.subarray(o, o + nonShared), shared);
		o += nonShared;
		const value = block.subarray(o, o + valueLen).slice();
		o += valueLen;
		lastKey = key;
		const userKey = key.length >= 8 ? key.subarray(0, key.length - 8) : key;
		if ((key.length >= 8 ? key[key.length - 1] & 255 : 1) === 0) continue;
		out.push([userKey.slice(), value]);
	}
	return out;
}
function readTable(file, into, warnings) {
	if (file.length < 48) return;
	if (new DataView(file.buffer, file.byteOffset, file.byteLength).getBigUint64(file.length - 8, true) !== TABLE_MAGIC) {
		warnings.push("Skipped an .ldb file with unknown magic (not a LevelDB table).");
		return;
	}
	const footer = file.subarray(file.length - 48);
	const [, oMeta] = readVarint64(footer, 0);
	const [, oIdx] = readVarint64(footer, oMeta);
	const [indexOff, o3] = readVarint64(footer, oIdx);
	const [indexSize] = readVarint64(footer, o3);
	const indexBlock = readBlock(file, indexOff, indexSize);
	if (!indexBlock) {
		warnings.push("Could not decompress a LevelDB index block (snappy tables are not readable in-browser).");
		return;
	}
	const indexEntries = parseBlockEntries(indexBlock);
	for (const [, handleBytes] of indexEntries) {
		const [off, h1] = readVarint64(handleBytes, 0);
		const [sz] = readVarint64(handleBytes, h1);
		const block = readBlock(file, off, sz);
		if (!block) continue;
		for (const [k, v] of parseBlockEntries(block)) into.set(keyToHex(k), v);
	}
}
function readLevelDb(files) {
	const map = /* @__PURE__ */ new Map();
	const warnings = [];
	const parsedFiles = [];
	const failedFiles = [];
	const names = Object.keys(files).sort();
	const tables = names.filter((n) => /\.(ldb|sst)$/i.test(n));
	const logs = names.filter((n) => /\.log$/i.test(n) && !n.endsWith("LOG"));
	for (const name of tables) try {
		const before = map.size;
		readTable(files[name], map, warnings);
		if (map.size > before) parsedFiles.push(name);
		else failedFiles.push(name);
	} catch (err) {
		failedFiles.push(name);
		warnings.push(`Failed to parse ${name}: ${err instanceof Error ? err.message : String(err)}`);
	}
	logs.sort();
	for (const name of logs) try {
		const recs = readLogRecords(files[name]);
		const before = map.size;
		for (const rec of recs) applyWriteBatch(map, rec);
		if (map.size !== before || recs.length) parsedFiles.push(name);
	} catch (err) {
		failedFiles.push(name);
		warnings.push(`Failed to parse ${name}: ${err instanceof Error ? err.message : String(err)}`);
	}
	if (tables.length + logs.length === 0) warnings.push("No LevelDB table or log files were found in db/.");
	return {
		map,
		warnings,
		parsedFiles,
		failedFiles
	};
}
function asciiKey(s) {
	return new TextEncoder().encode(s);
}
function putAscii(map, k, v) {
	map.set(keyToHex(asciiKey(k)), v);
}
function chunkKey(cx, cz, tag, subY) {
	const buf = new Uint8Array(9 + (subY !== void 0 ? 1 : 0));
	const view = new DataView(buf.buffer);
	view.setInt32(0, cx | 0, true);
	view.setInt32(4, cz | 0, true);
	buf[8] = tag;
	if (subY !== void 0) buf[9] = subY & 255;
	return buf;
}
function parseChunkKey(key) {
	if (key.length !== 9 && key.length !== 10 && key.length !== 13 && key.length !== 14) return null;
	const view = new DataView(key.buffer, key.byteOffset, key.byteLength);
	const cx = view.getInt32(0, true);
	const cz = view.getInt32(4, true);
	if (key.length === 9 || key.length === 10) return {
		cx,
		cz,
		dim: 0,
		tag: key[8],
		subY: key.length === 10 ? key[9] << 24 >> 24 : void 0
	};
	return {
		cx,
		cz,
		dim: view.getInt32(8, true),
		tag: key[12],
		subY: key.length === 14 ? key[13] << 24 >> 24 : void 0
	};
}
function bitsForPalette(size) {
	if (size <= 1) return 1;
	let bits = 1;
	while (1 << bits < size) bits++;
	if (bits === 7) return 8;
	if (bits > 8 && bits < 16) return 16;
	if (bits > 16) return 16;
	return bits;
}
function blocksPerWord(bits) {
	return Math.floor(32 / bits);
}
function encodePaletteStorage(indices, paletteNbt) {
	const bits = bitsForPalette(paletteNbt.length);
	const bpw = blocksPerWord(bits);
	const wordCount = Math.ceil(4096 / bpw);
	const words = new Uint32Array(wordCount);
	const mask = (1 << bits) - 1;
	for (let i = 0; i < 4096; i++) {
		const w = Math.floor(i / bpw);
		const off = i % bpw * bits;
		words[w] = (words[w] | (indices[i] & mask) << off) >>> 0;
	}
	const header = bits << 1;
	const out = new Uint8Array(1 + wordCount * 4 + 4 + paletteNbt.reduce((n, p) => n + p.length, 0));
	out[0] = header;
	const view = new DataView(out.buffer);
	let o = 1;
	for (let i = 0; i < wordCount; i++) {
		view.setUint32(o, words[i], true);
		o += 4;
	}
	view.setInt32(o, paletteNbt.length, true);
	o += 4;
	for (const p of paletteNbt) {
		out.set(p, o);
		o += p.length;
	}
	return out.subarray(0, o);
}
function encodeBlockNbt(name, states) {
	const stateComp = {};
	if (states) for (const [k, v] of Object.entries(states)) if (typeof v === "string") stateComp[k] = str(v);
	else if (typeof v === "boolean") stateComp[k] = byte(v ? 1 : 0);
	else stateComp[k] = {
		type: TAG.Int,
		value: v | 0
	};
	return encodeNbt({
		name: str(name),
		states: {
			type: TAG.Compound,
			value: stateComp
		}
	});
}
function encodeSubchunk(blocks, palette, subY) {
	const storage = encodePaletteStorage(blocks, palette.map((p) => encodeBlockNbt(p.name, p.states)));
	const out = new Uint8Array(3 + storage.length);
	out[0] = 9;
	out[1] = 1;
	out[2] = subY & 255;
	out.set(storage, 3);
	return out;
}
function encodeBiomeSection(biomeIds) {
	let uniform = true;
	const first = biomeIds[0];
	for (let i = 1; i < 4096; i++) if (biomeIds[i] !== first) {
		uniform = false;
		break;
	}
	if (uniform) {
		const out = /* @__PURE__ */ new Uint8Array(5);
		out[0] = 0;
		new DataView(out.buffer).setInt32(1, first, true);
		return out;
	}
	const unique = [];
	const indexOf = /* @__PURE__ */ new Map();
	const indices = /* @__PURE__ */ new Uint16Array(4096);
	for (let i = 0; i < 4096; i++) {
		const id = biomeIds[i];
		let idx = indexOf.get(id);
		if (idx === void 0) {
			idx = unique.length;
			indexOf.set(id, idx);
			unique.push(id);
		}
		indices[i] = idx;
	}
	const bits = bitsForPalette(unique.length);
	const bpw = blocksPerWord(bits);
	const wordCount = Math.ceil(4096 / bpw);
	const words = new Uint32Array(wordCount);
	const mask = (1 << bits) - 1;
	for (let i = 0; i < 4096; i++) {
		const w = Math.floor(i / bpw);
		const off = i % bpw * bits;
		words[w] = (words[w] | (indices[i] & mask) << off) >>> 0;
	}
	const out = new Uint8Array(1 + wordCount * 4 + 4 + unique.length * 4);
	out[0] = bits << 1;
	const view = new DataView(out.buffer);
	let o = 1;
	for (let i = 0; i < wordCount; i++) {
		view.setUint32(o, words[i], true);
		o += 4;
	}
	view.setInt32(o, unique.length, true);
	o += 4;
	for (const id of unique) {
		view.setInt32(o, id, true);
		o += 4;
	}
	return out;
}
function encodeData3D(heightmap, biomeAtY) {
	const parts = [];
	const hm = /* @__PURE__ */ new Uint8Array(512);
	const hv = new DataView(hm.buffer);
	for (let i = 0; i < 256; i++) hv.setUint16(i * 2, heightmap[i] ?? 0, true);
	parts.push(hm);
	for (let subY = -4; subY <= 20; subY++) {
		const ids = /* @__PURE__ */ new Int32Array(4096);
		for (let y = 0; y < 16; y++) for (let z = 0; z < 16; z++) for (let x = 0; x < 16; x++) {
			const idx = x + (z << 4) + (y << 8);
			ids[idx] = biomeAtY(subY, x, z, y);
		}
		parts.push(encodeBiomeSection(ids));
	}
	let n = 0;
	for (const p of parts) n += p.length;
	const out = new Uint8Array(n);
	let o = 0;
	for (const p of parts) {
		out.set(p, o);
		o += p.length;
	}
	return out;
}
function writeChunkRecords(map, cx, cz, getBlock, getBiome, heightOf) {
	map.set(keyToHex(chunkKey(cx, cz, 44)), new Uint8Array([40]));
	const fin = /* @__PURE__ */ new Uint8Array(4);
	new DataView(fin.buffer).setInt32(0, 2, true);
	map.set(keyToHex(chunkKey(cx, cz, 54)), fin);
	const heightmap = /* @__PURE__ */ new Uint16Array(256);
	for (let z = 0; z < 16; z++) for (let x = 0; x < 16; x++) {
		const h = heightOf(x, z);
		heightmap[x + z * 16] = Math.max(0, Math.min(65535, h + 1));
	}
	const data3d = encodeData3D(heightmap, (_subY, x, z) => getBiome(x, z));
	map.set(keyToHex(chunkKey(cx, cz, 43)), data3d);
	for (let subY = -4; subY <= 20; subY++) {
		const y0 = subY * 16;
		const y1 = y0 + 16;
		const palMap = /* @__PURE__ */ new Map();
		const pal = [];
		const indices = /* @__PURE__ */ new Uint16Array(4096);
		let anyNonAir = false;
		for (let y = y0; y < y1; y++) for (let z = 0; z < 16; z++) for (let x = 0; x < 16; x++) {
			const b = getBlock(x, y, z);
			const key = b.name + "|" + JSON.stringify(b.states ?? {});
			let idx = palMap.get(key);
			if (idx === void 0) {
				idx = pal.length;
				palMap.set(key, idx);
				pal.push(b);
			}
			const li = x + (z << 4) + (y - y0 << 8);
			indices[li] = idx;
			if (b.name !== "minecraft:air") anyNonAir = true;
		}
		if (!anyNonAir) continue;
		const encoded = encodeSubchunk(indices, pal, subY);
		map.set(keyToHex(chunkKey(cx, cz, 47, subY)), encoded);
	}
}
function decodePaletteStorage(buf, offset) {
	if (offset >= buf.length) return null;
	const bits = buf[offset] >> 1;
	let o = offset + 1;
	const indices = /* @__PURE__ */ new Uint16Array(4096);
	if (bits === 0) {
		const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
		if (o + 4 > buf.length) return null;
		const count = view.getInt32(o, true);
		o += 4;
		const names = [];
		for (let i = 0; i < count && i < 1024; i++) try {
			const slice = buf.subarray(o);
			const decoded = decodeNbt(slice);
			names.push(nbtName(decoded.value));
			const size = nbtSize(slice);
			o += size;
		} catch {
			break;
		}
		return {
			names,
			indices,
			offset: o
		};
	}
	const bpw = blocksPerWord(bits);
	const wordCount = Math.ceil(4096 / bpw);
	if (o + wordCount * 4 + 4 > buf.length) return null;
	const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
	const words = new Uint32Array(wordCount);
	for (let i = 0; i < wordCount; i++) {
		words[i] = view.getUint32(o, true);
		o += 4;
	}
	const mask = (1 << bits) - 1;
	for (let i = 0; i < 4096; i++) {
		const w = Math.floor(i / bpw);
		const off = i % bpw * bits;
		indices[i] = words[w] >>> off & mask;
	}
	const count = view.getInt32(o, true);
	o += 4;
	const names = [];
	for (let i = 0; i < count && i < 4096; i++) try {
		const slice = buf.subarray(o);
		const decoded = decodeNbt(slice);
		names.push(nbtName(decoded.value));
		o += nbtSize(slice);
	} catch {
		break;
	}
	return {
		names,
		indices,
		offset: o
	};
}
function nbtName(c) {
	const n = c.name;
	if (n && n.type === TAG.String) return n.value;
	return "minecraft:air";
}
function nbtSize(buf) {
	const r = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
	if (buf.length < 3) return buf.length;
	const type = buf[0];
	if (type === 0) return 1;
	let o = 3 + r.getUint16(1, true);
	o = skipPayload(buf, o, type);
	return o;
}
function skipPayload(buf, o, type) {
	const r = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
	switch (type) {
		case 1: return o + 1;
		case 2: return o + 2;
		case 3:
		case 5: return o + 4;
		case 4:
		case 6: return o + 8;
		case 7: {
			const n = r.getInt32(o, true);
			return o + 4 + n;
		}
		case 8: {
			const n = r.getUint16(o, true);
			return o + 2 + n;
		}
		case 9: {
			const lt = buf[o];
			const n = r.getInt32(o + 1, true);
			o += 5;
			for (let i = 0; i < n; i++) o = skipPayload(buf, o, lt);
			return o;
		}
		case 10: for (;;) {
			const t = buf[o];
			if (t === 0) return o + 1;
			const nl = r.getUint16(o + 1, true);
			o = skipPayload(buf, o + 3 + nl, t);
		}
		case 11: {
			const n = r.getInt32(o, true);
			return o + 4 + n * 4;
		}
		case 12: {
			const n = r.getInt32(o, true);
			return o + 4 + n * 8;
		}
		default: return o;
	}
}
function decodeSubchunkBlocks(buf) {
	if (buf.length < 3) return null;
	const version = buf[0];
	let o = 1;
	if (version === 8 || version === 9) {
		buf[o++];
		if (version === 9) o += 1;
	} else if (version === 1) return null;
	const storage = decodePaletteStorage(buf, o);
	if (!storage) return null;
	return {
		names: storage.names,
		indices: storage.indices
	};
}
function decodeData3D(buf) {
	if (buf.length < 512) return null;
	const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
	const height = /* @__PURE__ */ new Uint16Array(256);
	for (let i = 0; i < 256; i++) height[i] = view.getUint16(i * 2, true);
	let o = 512;
	const biome = /* @__PURE__ */ new Int32Array(256);
	const section = decodeBiomeSection(buf, o);
	if (section) for (let z = 0; z < 16; z++) for (let x = 0; x < 16; x++) {
		const idx = x + (z << 4);
		biome[idx] = section.ids[idx] ?? 1;
	}
	return {
		height,
		biome
	};
}
function decodeBiomeSection(buf, offset) {
	if (offset >= buf.length) return null;
	const bits = buf[offset] >> 1;
	const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
	const ids = /* @__PURE__ */ new Int32Array(4096);
	if (bits === 0) {
		if (offset + 5 > buf.length) return null;
		const id = view.getInt32(offset + 1, true);
		ids.fill(id);
		return {
			ids,
			offset: offset + 5
		};
	}
	const bpw = blocksPerWord(bits);
	const wordCount = Math.ceil(4096 / bpw);
	let o = offset + 1;
	if (o + wordCount * 4 + 4 > buf.length) return null;
	const words = new Uint32Array(wordCount);
	for (let i = 0; i < wordCount; i++) {
		words[i] = view.getUint32(o, true);
		o += 4;
	}
	const count = view.getInt32(o, true);
	o += 4;
	const pal = new Int32Array(Math.max(0, count));
	for (let i = 0; i < count && o + 4 <= buf.length; i++) {
		pal[i] = view.getInt32(o, true);
		o += 4;
	}
	const mask = (1 << bits) - 1;
	for (let i = 0; i < 4096; i++) {
		const w = Math.floor(i / bpw);
		const off = i % bpw * bits;
		const idx = words[w] >>> off & mask;
		ids[i] = pal[idx] ?? 1;
	}
	return {
		ids,
		offset: o
	};
}
function nameToEditorBlock(name) {
	const def = BLOCK_BY_NAME.get(name);
	return def ? def.id : 2;
}
function bedrockBiomeToEditor(id) {
	return biomeByBedrockId(id).id;
}
function editorBiomeToBedrock(id) {
	return BIOMES[id]?.bedrockId ?? 1;
}
function editorBlockToName(id) {
	const def = BLOCK_BY_ID[id];
	if (!def) return { name: "minecraft:stone" };
	const states = { ...def.states ?? {} };
	if (def.name === "minecraft:water" && states.liquid_depth === void 0) states.liquid_depth = 0;
	return {
		name: def.name,
		states: Object.keys(states).length ? states : void 0
	};
}
var DEFAULT_SETTINGS = (name = "New World") => ({
	name,
	seed: BigInt(Math.floor(Math.random() * 2147483647)),
	gameMode: "creative",
	difficulty: "normal",
	hardcore: false,
	cheats: true,
	spawn: {
		x: 0,
		y: 80,
		z: 0
	},
	spawnRadius: 5,
	time: 1e3,
	daylightCycle: true,
	weather: "clear",
	weatherCycle: true,
	mobSpawning: true,
	fireSpread: true,
	tnt: true,
	keepInventory: true,
	generator: "infinite",
	commands: true,
	pvp: true,
	mobGriefing: true,
	randomTickSpeed: 3,
	showCoordinates: true
});
var MODE_TO_INT = {
	survival: 0,
	creative: 1,
	adventure: 2,
	spectator: 6
};
var INT_TO_MODE = {
	0: "survival",
	1: "creative",
	2: "adventure",
	5: "survival",
	6: "spectator"
};
var DIFF_TO_INT = {
	peaceful: 0,
	easy: 1,
	normal: 2,
	hard: 3
};
var INT_TO_DIFF = {
	0: "peaceful",
	1: "easy",
	2: "normal",
	3: "hard"
};
function abilities(mode) {
	const creative = mode === "creative";
	return {
		attackmobs: byte(1),
		attackplayers: byte(1),
		build: byte(1),
		doorsandswitches: byte(1),
		flying: byte(creative ? 1 : 0),
		flySpeed: float(.05),
		instabuild: byte(creative ? 1 : 0),
		invulnerable: byte(creative ? 1 : 0),
		lightning: byte(0),
		mayfly: byte(creative ? 1 : 0),
		mine: byte(1),
		mute: byte(0),
		noclip: byte(0),
		op: byte(1),
		opencontainers: byte(1),
		teleport: byte(1),
		verticalFlySpeed: float(1),
		walkSpeed: float(.1),
		worldbuilder: byte(1)
	};
}
function settingsToNbt(s, extras) {
	const rain = s.weather === "clear" ? 0 : 1;
	const thunder = s.weather === "thunder" ? 1 : 0;
	const root = {
		LevelName: str(s.name),
		RandomSeed: long(s.seed),
		GameType: int(MODE_TO_INT[s.gameMode]),
		Difficulty: int(DIFF_TO_INT[s.difficulty]),
		ForceGameType: byte(0),
		IsHardcore: byte(s.hardcore ? 1 : 0),
		SpawnX: int(s.spawn.x | 0),
		SpawnY: int(s.spawn.y | 0),
		SpawnZ: int(s.spawn.z | 0),
		Time: long(s.time),
		currentTick: long(s.time),
		worldStartCount: long(1),
		Generator: int(s.generator === "flat" ? 2 : 1),
		StorageVersion: int(10),
		NetworkVersion: int(685),
		InventoryVersion: str("1.21.0"),
		lastOpenedWithVersion: intList([
			1,
			21,
			0,
			0,
			0
		]),
		MinimumCompatibleClientVersion: intList([
			1,
			21,
			0,
			0,
			0
		]),
		baseGameVersion: str("*"),
		commandsEnabled: byte(s.commands || s.cheats ? 1 : 0),
		cheatsEnabled: byte(s.cheats ? 1 : 0),
		commandblocksenabled: byte(1),
		commandblockoutput: byte(1),
		sendcommandfeedback: byte(1),
		dodaylightcycle: byte(s.daylightCycle ? 1 : 0),
		doweathercycle: byte(s.weatherCycle ? 1 : 0),
		dofiretick: byte(s.fireSpread ? 1 : 0),
		tntexplodes: byte(s.tnt ? 1 : 0),
		keepinventory: byte(s.keepInventory ? 1 : 0),
		domobspawning: byte(s.mobSpawning ? 1 : 0),
		spawnMobs: byte(s.mobSpawning ? 1 : 0),
		doentitydrops: byte(1),
		domobloot: byte(1),
		dotiledrops: byte(1),
		drowningdamage: byte(1),
		falldamage: byte(s.gameMode === "creative" ? 0 : 1),
		firedamage: byte(1),
		freezedamage: byte(1),
		pvp: byte(s.pvp ? 1 : 0),
		mobgriefing: byte(s.mobGriefing ? 1 : 0),
		naturalregeneration: byte(1),
		showcoordinates: byte(s.showCoordinates ? 1 : 0),
		showdeathmessages: byte(1),
		showtags: byte(1),
		recipesunlock: byte(1),
		respawnblocksexplode: byte(1),
		randomtickspeed: int(s.randomTickSpeed),
		spawnradius: int(Math.max(0, Math.min(128, s.spawnRadius | 0))),
		maxcommandchainlength: int(65536),
		doimmediaterespawn: byte(0),
		doinsomnia: byte(1),
		dolimitedcrafting: byte(0),
		locatorbar: byte(1),
		projectilescanbreakblocks: byte(1),
		showbordereffect: byte(1),
		showdaysplayed: byte(0),
		showrecipemessages: byte(1),
		rainLevel: float(rain),
		rainTime: int(s.weather === "clear" ? 18e3 : 6e3),
		lightningLevel: float(thunder),
		lightningTime: int(s.weather === "thunder" ? 6e3 : 18e3),
		lightning: byte(0),
		educationFeaturesEnabled: byte(0),
		eduOffer: int(0),
		texturePacksRequired: byte(0),
		bonusChestEnabled: byte(0),
		bonusChestSpawned: byte(1),
		startWithMapEnabled: byte(0),
		hasBeenLoadedInCreative: byte(s.gameMode === "creative" ? 1 : 0),
		immutableWorld: byte(0),
		LANBroadcast: byte(1),
		LANBroadcastIntent: byte(1),
		MultiplayerGame: byte(1),
		MultiplayerGameIntent: byte(1),
		XBLBroadcastIntent: int(3),
		PlatformBroadcastIntent: int(3),
		GameRules: compound({}),
		abilities: compound(abilities(s.gameMode)),
		experiments: compound({
			experiments_ever_used: byte(0),
			saved_with_toggled_experiments: byte(0)
		}),
		spawn_x: int(s.spawn.x | 0),
		spawn_y: int(s.spawn.y | 0),
		spawn_z: int(s.spawn.z | 0),
		netherScale: int(8),
		limitedWorldOriginX: int(s.spawn.x | 0),
		limitedWorldOriginY: int(s.spawn.y | 0),
		limitedWorldOriginZ: int(s.spawn.z | 0),
		LimitedWorldWidth: int(16),
		LimitedWorldDepth: int(16),
		useMsaGamertagsOnly: byte(0),
		serverChunkTickRange: int(4),
		isFromLockedTemplate: byte(0),
		isFromWorldTemplate: byte(0),
		isWorldTemplateOptionLocked: byte(0),
		spawnV1Villagers: byte(0),
		npc: byte(1),
		playerssleepingpercentage: int(100),
		respawnBlocksExplode: byte(1),
		tntExplosionDropDecay: byte(0),
		showDaysPlayed: byte(0)
	};
	if (s.generator === "flat") root.FlatWorldLayers = str(JSON.stringify({
		biome_id: 1,
		block_layers: [
			{
				block_name: "minecraft:bedrock",
				count: 1
			},
			{
				block_name: "minecraft:dirt",
				count: 2
			},
			{
				block_name: "minecraft:grass_block",
				count: 1
			}
		],
		encoding_version: 6,
		structure_options: null,
		world_version: "version.post_1_18"
	}));
	if (extras) {
		for (const [k, v] of Object.entries(extras)) if (!(k in root)) root[k] = v;
	}
	return root;
}
function encodeLevelDat(settings, extras) {
	const nbt = encodeNbt(settingsToNbt(settings, extras));
	const out = new Uint8Array(8 + nbt.length);
	const view = new DataView(out.buffer);
	view.setInt32(0, 10, true);
	view.setInt32(4, nbt.length, true);
	out.set(nbt, 8);
	return out;
}
function decodeLevelDat(buf) {
	if (buf.length < 16) throw new Error("level.dat is too small to be a Bedrock world file.");
	const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
	const headerVersion = view.getInt32(0, true);
	const nbtLength = view.getInt32(4, true);
	if (nbtLength < 8 || nbtLength > buf.length - 8) throw new Error("level.dat header length does not match the file. This is not a valid Bedrock level.dat.");
	const { value } = decodeNbt(buf.subarray(8, 8 + nbtLength));
	const extras = { ...value };
	return {
		headerVersion,
		nbtLength,
		settings: nbtToSettings(value),
		extras,
		raw: value
	};
}
function nbtToSettings(c) {
	const gameType = getInt(c, "GameType", 1);
	const diff = getInt(c, "Difficulty", 2);
	const rain = getInt(c, "rainLevel", 0) > 0 || c.rainLevel && c.rainLevel.type === TAG.Float && c.rainLevel.value > 0;
	const weather = getInt(c, "lightningLevel", 0) > 0 || c.lightningLevel && c.lightningLevel.type === TAG.Float && c.lightningLevel.value > 0 ? "thunder" : rain ? "rain" : "clear";
	return {
		name: getString(c, "LevelName", "Imported World"),
		seed: getLong(c, "RandomSeed", 0n),
		gameMode: INT_TO_MODE[gameType] ?? "survival",
		difficulty: INT_TO_DIFF[diff] ?? "normal",
		hardcore: getByte(c, "IsHardcore", 0) === 1,
		cheats: getByte(c, "cheatsEnabled", 0) === 1,
		spawn: {
			x: getInt(c, "SpawnX", 0),
			y: getInt(c, "SpawnY", 64),
			z: getInt(c, "SpawnZ", 0)
		},
		spawnRadius: getInt(c, "spawnradius", 5),
		time: Number(getLong(c, "Time", 1000n)),
		daylightCycle: getByte(c, "dodaylightcycle", 1) === 1,
		weather,
		weatherCycle: getByte(c, "doweathercycle", 1) === 1,
		mobSpawning: getByte(c, "domobspawning", 1) === 1 || getByte(c, "spawnMobs", 1) === 1,
		fireSpread: getByte(c, "dofiretick", 1) === 1,
		tnt: getByte(c, "tntexplodes", 1) === 1,
		keepInventory: getByte(c, "keepinventory", 0) === 1,
		generator: getInt(c, "Generator", 1) === 2 ? "flat" : "infinite",
		commands: getByte(c, "commandsEnabled", 1) === 1,
		pvp: getByte(c, "pvp", 1) === 1,
		mobGriefing: getByte(c, "mobgriefing", 1) === 1,
		randomTickSpeed: getInt(c, "randomtickspeed", 3),
		showCoordinates: getByte(c, "showcoordinates", 0) === 1
	};
}
var DEFAULT_LAYERS = {
	terrain: true,
	countries: true,
	borders: true,
	cities: true,
	roads: true,
	structures: true
};
function isVirtualSize(width, depth) {
	const n = width * depth;
	return !Number.isFinite(n) || n > 42e5;
}
function fmtBlocks(n) {
	return Math.round(n).toLocaleString("en-US");
}
/** Named huge maps: Roblox, Earth, Minecraft — square regions and 2:1 globe wraps. */
var HUGE_SIZES = [
	{
		id: "roblox",
		label: "Roblox 16,384",
		blurb: "16,384×16,384 studs — one Roblox heightmap-import region",
		width: 16384,
		depth: 16384,
		aspect: "square",
		family: "roblox"
	},
	{
		id: "roblox-circ",
		label: "Roblox Circumference",
		blurb: "16,384 × 8,192 — Roblox-scale globe wrap, 2:1 like Earth",
		width: 16384,
		depth: 8192,
		aspect: "globe",
		family: "roblox"
	},
	{
		id: "earth-square",
		label: "Earth Non-Circumference",
		blurb: "40,075,008 × 40,075,008 — Earth 1 meter per block as a square map, not a 2:1 globe wrap",
		width: 40075008,
		depth: 40075008,
		aspect: "square",
		family: "earth"
	},
	{
		id: "earth1to1",
		label: "Earth 1:1",
		blurb: "40,075,008 × 20,037,504 blocks — 1 meter per block, full Earth circumference",
		width: 40075008,
		depth: 20037504,
		aspect: "globe",
		family: "earth"
	},
	{
		id: "minecraft",
		label: "Minecraft 60M",
		blurb: "60,000,000 × 60,000,000 blocks — Java-scale world",
		width: 6e7,
		depth: 6e7,
		aspect: "square",
		family: "minecraft"
	},
	{
		id: "minecraft-circ",
		label: "Minecraft Circumference",
		blurb: "60,000,000 × 30,000,000 — Java-scale globe wrap, 2:1 like Earth",
		width: 6e7,
		depth: 3e7,
		aspect: "globe",
		family: "minecraft"
	}
];
function hugeSizeOf(width, depth) {
	return HUGE_SIZES.find((h) => h.width === width && h.depth === depth);
}
var WORKFLOW = [
	{
		id: "create",
		label: "Create / Import",
		hint: "New world or open a .mcworld"
	},
	{
		id: "map",
		label: "Edit Map",
		hint: "Paint terrain, fill, copy, replace"
	},
	{
		id: "spawn",
		label: "Spawn",
		hint: "Place spawn, set radius, jump to continents"
	},
	{
		id: "countries",
		label: "Countries",
		hint: "Borders, capitals, generate a region"
	},
	{
		id: "timeline",
		label: "Timeline",
		hint: "Move the whole Earth through history"
	},
	{
		id: "terrain",
		label: "Terrain & Biomes",
		hint: "Generate continents, rivers, biomes"
	},
	{
		id: "structures",
		label: "Structures & Entities",
		hint: "Real cities, landmarks, builds, mobs"
	},
	{
		id: "settings",
		label: "World Settings",
		hint: "Mode, difficulty, gamerules"
	},
	{
		id: "validate",
		label: "Validate",
		hint: "Check the Bedrock world before export"
	},
	{
		id: "export",
		label: "Export",
		hint: "Download a real .mcworld"
	}
];
function idxOf(world, x, z) {
	return x + z * world.width;
}
function inBounds(world, x, z) {
	return x >= 0 && z >= 0 && x < world.width && z < world.depth;
}
function worldX(world, lx) {
	return world.originX + lx;
}
function worldZ(world, lz) {
	return world.originZ + lz;
}
function localX(world, wx) {
	return wx - world.originX;
}
function localZ(world, wz) {
	return wz - world.originZ;
}
function createEmptyWorld(opts) {
	const { width, depth } = opts;
	const virtual = isVirtualSize(width, depth);
	const n = virtual ? 0 : width * depth;
	const settings = DEFAULT_SETTINGS(opts.name ?? "REMAP World");
	if (opts.seed !== void 0) settings.seed = opts.seed;
	Object.assign(settings, opts.settings);
	const originX = -Math.floor(width / 2);
	const originZ = -Math.floor(depth / 2);
	settings.spawn = {
		x: 0,
		y: 72,
		z: 0
	};
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
		surface: new Uint8Array(n).fill(4),
		fill: new Uint8Array(n).fill(3),
		water: new Uint8Array(n),
		cave: new Uint8Array(n),
		structures: [],
		entities: [],
		customStructures: {},
		virtual,
		tiles: virtual ? /* @__PURE__ */ new Map() : void 0,
		exportWindow: virtual ? 2048 : void 0,
		year: 2026,
		month: 1,
		day: 1,
		keepManualAcrossYears: true
	};
}
function cloneTile(t) {
	return {
		filled: t.filled.slice(),
		height: t.height.slice(),
		biome: t.biome.slice(),
		surface: t.surface.slice(),
		fill: t.fill.slice(),
		water: t.water.slice(),
		cave: t.cave.slice()
	};
}
function snapshotRect(world, rect) {
	const x0 = Math.max(0, Math.min(rect.x0, rect.x1));
	const z0 = Math.max(0, Math.min(rect.z0, rect.z1));
	const x1 = Math.min(world.width - 1, Math.max(rect.x0, rect.x1));
	const z1 = Math.min(world.depth - 1, Math.max(rect.z0, rect.z1));
	if (world.virtual) return {
		x0,
		z0,
		x1,
		z1,
		w: 0,
		d: 0,
		height: /* @__PURE__ */ new Int16Array(0),
		biome: /* @__PURE__ */ new Uint8Array(0),
		surface: /* @__PURE__ */ new Uint8Array(0),
		fill: /* @__PURE__ */ new Uint8Array(0),
		water: /* @__PURE__ */ new Uint8Array(0),
		cave: /* @__PURE__ */ new Uint8Array(0),
		tiles: world.tiles ? [...world.tiles.entries()].map(([k, t]) => ({
			k,
			t: cloneTile(t)
		})) : []
	};
	const w = x1 - x0 + 1;
	const d = z1 - z0 + 1;
	if (w * d > 1e6) return {
		x0,
		z0,
		x1,
		z1,
		w: 0,
		d: 0,
		height: /* @__PURE__ */ new Int16Array(0),
		biome: /* @__PURE__ */ new Uint8Array(0),
		surface: /* @__PURE__ */ new Uint8Array(0),
		fill: /* @__PURE__ */ new Uint8Array(0),
		water: /* @__PURE__ */ new Uint8Array(0),
		cave: /* @__PURE__ */ new Uint8Array(0)
	};
	const height = new Int16Array(w * d);
	const biome = new Uint8Array(w * d);
	const surface = new Uint8Array(w * d);
	const fill = new Uint8Array(w * d);
	const water = new Uint8Array(w * d);
	const cave = new Uint8Array(w * d);
	for (let z = 0; z < d; z++) for (let x = 0; x < w; x++) {
		const s = x + z * w;
		const i = idxOf(world, x0 + x, z0 + z);
		height[s] = world.height[i];
		biome[s] = world.biome[i];
		surface[s] = world.surface[i];
		fill[s] = world.fill[i];
		water[s] = world.water[i];
		cave[s] = world.cave[i];
	}
	return {
		x0,
		z0,
		x1,
		z1,
		w,
		d,
		height,
		biome,
		surface,
		fill,
		water,
		cave
	};
}
function restoreRect(world, snap) {
	if (world.virtual && "tiles" in snap && Array.isArray(snap.tiles)) {
		world.tiles = new Map(snap.tiles.map((e) => [e.k, cloneTile(e.t)]));
		return;
	}
	if (snap.w === 0) return;
	for (let z = 0; z < snap.d; z++) for (let x = 0; x < snap.w; x++) {
		const s = x + z * snap.w;
		const i = idxOf(world, snap.x0 + x, snap.z0 + z);
		world.height[i] = snap.height[s];
		world.biome[i] = snap.biome[s];
		world.surface[i] = snap.surface[s];
		world.fill[i] = snap.fill[s];
		world.water[i] = snap.water[s];
		world.cave[i] = snap.cave[s];
	}
}
function copyRect(world, rect) {
	const snap = snapshotRect(world, rect);
	return {
		w: snap.w,
		d: snap.d,
		height: snap.height,
		biome: snap.biome,
		surface: snap.surface,
		fill: snap.fill,
		water: snap.water
	};
}
function pasteClipboard(world, x, z, clip) {
	for (let dz = 0; dz < clip.d; dz++) for (let dx = 0; dx < clip.w; dx++) {
		const lx = x + dx;
		const lz = z + dz;
		if (!inBounds(world, lx, lz)) continue;
		const s = dx + dz * clip.w;
		const i = idxOf(world, lx, lz);
		world.height[i] = clip.height[s];
		world.biome[i] = clip.biome[s];
		world.surface[i] = clip.surface[s];
		world.fill[i] = clip.fill[s];
		world.water[i] = clip.water[s];
	}
}
function applyBiomeDefaults(world, i) {
	const b = BIOMES[world.biome[i]] ?? BIOMES[0];
	world.surface[i] = b.surface;
	world.fill[i] = b.fill;
	if (b.id === 4 || b.id === 5 || b.id === 6) world.water[i] = 1;
	else if (b.id === 7) world.water[i] = world.height[i] < 63 ? 1 : 0;
	else world.water[i] = 0;
	if (b.extra === "snow" && world.height[i] > 71) world.surface[i] = 17;
}
function findSafeSpawn(world) {
	const cx = Math.floor(world.width / 2);
	const cz = Math.floor(world.depth / 2);
	if (world.virtual) return {
		x: worldX(world, cx),
		y: 72,
		z: worldZ(world, cz)
	};
	for (let r = 0; r < Math.max(world.width, world.depth); r++) for (let dz = -r; dz <= r; dz++) for (let dx = -r; dx <= r; dx++) {
		if (Math.abs(dx) !== r && Math.abs(dz) !== r) continue;
		const lx = cx + dx;
		const lz = cz + dz;
		if (!inBounds(world, lx, lz)) continue;
		const i = idxOf(world, lx, lz);
		if (world.water[i]) continue;
		const y = world.height[i] + 1;
		if (y > 63 && y < 310 && isSolid(world.surface[i])) return {
			x: worldX(world, lx),
			y,
			z: worldZ(world, lz)
		};
	}
	return {
		x: worldX(world, cx),
		y: 80,
		z: worldZ(world, cz)
	};
}
function normalizeRect(a) {
	return {
		x0: Math.min(a.x0, a.x1),
		z0: Math.min(a.z0, a.z1),
		x1: Math.max(a.x0, a.x1),
		z1: Math.max(a.z0, a.z1)
	};
}
function forBrush(world, cx, cz, radius, fn) {
	const r2 = radius * radius;
	for (let z = cz - radius; z <= cz + radius; z++) for (let x = cx - radius; x <= cx + radius; x++) {
		if (!inBounds(world, x, z)) continue;
		const dx = x - cx;
		const dz = z - cz;
		const d2 = dx * dx + dz * dz;
		if (d2 > r2) continue;
		const t = 1 - Math.sqrt(d2) / Math.max(1, radius);
		fn(x, z, idxOf(world, x, z), t);
	}
}
function columnBlock(world, lx, y, lz, overlay) {
	if (overlay) {
		const key = `${worldX(world, lx)},${y},${worldZ(world, lz)}`;
		const ov = overlay.get(key);
		if (ov !== void 0) return ov;
	}
	const i = idxOf(world, lx, lz);
	const h = world.height[i];
	const wet = world.water[i] === 1;
	const surface = world.surface[i];
	const fill = world.fill[i];
	if (y < -64 || y > 320) return 0;
	if (y === -64) return 1;
	if (y === -63) return lx * 73 + lz * 37 + y & 3 ? 1 : 56;
	if (wet) {
		if (y > 63) return 0;
		if (y > h) return 8;
		if (y === h) return surface || 5;
		if (y > h - 3) return fill || 5;
		if (y < 0) return 56;
		return 2;
	}
	if (y > h) return 0;
	if (y === h) return surface || 4;
	if (y > h - 4) return fill || 3;
	if (y < 0) return 56;
	return 2;
}
function hash2$2(x, y, seed) {
	let n = Math.imul(x, 374761393) + Math.imul(y, 668265263) + seed;
	n = n ^ n >>> 13 | 0;
	n = Math.imul(n, 1274126177);
	return ((n ^ n >>> 16) >>> 0) / 4294967296;
}
function fade(t) {
	return t * t * t * (t * (t * 6 - 15) + 10);
}
function lerp(a, b, t) {
	return a + (b - a) * t;
}
function valueNoise2(x, y, seed) {
	const x0 = Math.floor(x);
	const y0 = Math.floor(y);
	const fx = fade(x - x0);
	const fy = fade(y - y0);
	const v00 = hash2$2(x0, y0, seed);
	const v10 = hash2$2(x0 + 1, y0, seed);
	const v01 = hash2$2(x0, y0 + 1, seed);
	const v11 = hash2$2(x0 + 1, y0 + 1, seed);
	return lerp(lerp(v00, v10, fx), lerp(v01, v11, fx), fy);
}
function fbm(x, y, seed, octaves = 5, lacunarity = 2, gain = .5) {
	let amp = 1;
	let freq = 1;
	let sum = 0;
	let norm = 0;
	for (let i = 0; i < octaves; i++) {
		sum += valueNoise2(x * freq, y * freq, seed + i * 1013) * amp;
		norm += amp;
		amp *= gain;
		freq *= lacunarity;
	}
	return sum / norm;
}
function ridged(x, y, seed, octaves = 4) {
	let amp = 1;
	let freq = 1;
	let sum = 0;
	let norm = 0;
	for (let i = 0; i < octaves; i++) {
		const n = 1 - Math.abs(valueNoise2(x * freq, y * freq, seed + i * 733) * 2 - 1);
		sum += n * n * amp;
		norm += amp;
		amp *= .5;
		freq *= 2.1;
	}
	return sum / norm;
}
function hash3(x, y, z, seed) {
	let n = Math.imul(x, 374761393) + Math.imul(y, 668265263) + Math.imul(z, 144905191) + seed;
	n = n ^ n >>> 13 | 0;
	n = Math.imul(n, 1274126177);
	return ((n ^ n >>> 16) >>> 0) / 4294967296;
}
var JUNGLE = 12;
var SAVANNA = 13;
var BADLANDS = 14;
var SNOWY_TAIGA = 10;
var SWAMP = 11;
var FROZEN_OCEAN = 19;
var WARM_OCEAN = 20;
var SNOWY_PEAKS = 23;
var WOODED_PEAKS = 24;
var SUNFLOWER = 25;
var MEGA_TAIGA = 26;
var LUKEWARM = 27;
var COLD_OCEAN = 28;
var MANGROVE = 29;
var DEEP_OCEAN = 5;
/** Gray value in the NASA/GEBCO elevation layer that is sea level. */
var SEA_GRAY = 143;
var EARTH_REGIONS = [
	{
		id: "na",
		label: "North America",
		lon0: -168,
		lon1: -52,
		lat0: 14,
		lat1: 72
	},
	{
		id: "sa",
		label: "South America",
		lon0: -82,
		lon1: -34,
		lat0: -56,
		lat1: 12
	},
	{
		id: "eu",
		label: "Europe",
		lon0: -10,
		lon1: 40,
		lat0: 36,
		lat1: 71
	},
	{
		id: "af",
		label: "Africa",
		lon0: -18,
		lon1: 52,
		lat0: -35,
		lat1: 37
	},
	{
		id: "as",
		label: "Asia",
		lon0: 40,
		lon1: 150,
		lat0: 0,
		lat1: 72
	},
	{
		id: "oc",
		label: "Australia",
		lon0: 112,
		lon1: 180,
		lat0: -48,
		lat1: -10
	},
	{
		id: "an",
		label: "Antarctica",
		lon0: -180,
		lon1: 180,
		lat0: -90,
		lat1: -62
	}
];
var cached$1 = null;
var inflight$1 = null;
function peekEarthRaster() {
	return cached$1;
}
async function loadEarthRaster() {
	if (cached$1) return cached$1;
	if (inflight$1) return inflight$1;
	inflight$1 = (async () => {
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
			land[i] = data[i * 4];
			elev[i] = data[i * 4 + 1];
		}
		bmp.close();
		cached$1 = {
			w,
			h,
			land,
			elev
		};
		return cached$1;
	})();
	try {
		return await inflight$1;
	} finally {
		inflight$1 = null;
	}
}
function lonLatFromLocal(world, lx, lz) {
	return {
		lon: lx / world.width * 360 - 180,
		lat: 90 - lz / world.depth * 180
	};
}
function localFromLonLat(world, lon, lat) {
	let x = lon;
	while (x > 180) x -= 360;
	while (x < -180) x += 360;
	return {
		lx: Math.floor((x + 180) / 360 * world.width),
		lz: Math.floor((90 - lat) / 180 * world.depth)
	};
}
function sample(r, lon, lat) {
	let x = (lon + 180) / 360 * r.w;
	const y = (90 - lat) / 180 * r.h;
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
	return {
		land: r.land[i00],
		elev: r.elev[i00] * (1 - fx) * (1 - fy) + r.elev[i10] * fx * (1 - fy) + r.elev[i01] * (1 - fx) * fy + r.elev[i11] * fx * fy
	};
}
function inBox(lon, lat, a, b, c, d) {
	return lon >= a && lon <= b && lat >= c && lat <= d;
}
function biomeAt(lon, lat, elev, inland, wet) {
	if (wet) {
		if (lat > 68 || lat < -62) return FROZEN_OCEAN;
		if (lat > 48 || lat < -48) return COLD_OCEAN;
		if (Math.abs(lat) < 18) return WARM_OCEAN;
		if (Math.abs(lat) < 32) return LUKEWARM;
		if (elev < 45) return DEEP_OCEAN;
		return 4;
	}
	if (inland > 200 || inland > 175 && (lat > 28 || lat < -28)) return lat > 25 || lat < -25 ? SNOWY_PEAKS : 8;
	if (inland > 162) return lat > 35 ? WOODED_PEAKS : 8;
	if (lat < -60 || lat > 70) return 9;
	if (lat > 60) return inland > 155 ? SNOWY_TAIGA : 9;
	if (lat > 52) return inland > 150 ? MEGA_TAIGA : 2;
	if (inBox(lon, lat, -17, 38, 14, 32)) return 3;
	if (inBox(lon, lat, 34, 60, 12, 32)) return 3;
	if (inBox(lon, lat, 75, 110, 36, 50)) return 3;
	if (inBox(lon, lat, 114, 148, -32, -18) && inland > 148) return 3;
	if (inBox(lon, lat, 14, 28, -30, -22)) return 3;
	if (inBox(lon, lat, -75, -68, -28, -18)) return 3;
	if (inBox(lon, lat, -118, -108, 31, 38)) return 3;
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
	if (inBox(lon, lat, -100, -82, 36, 48)) return 0;
	if (inBox(lon, lat, -8, 28, 44, 56)) return 1;
	if (inBox(lon, lat, -82, -68, 36, 48)) return 1;
	if (inBox(lon, lat, 100, 130, 22, 42)) return 1;
	if (inBox(lon, lat, -6, 16, 36, 44)) return 0;
	if (lat > 42 && lat < 60) return 1;
	if (lat > 28 && lat < 42) return inland > 150 ? 0 : 1;
	if (Math.abs(lat) < 22) return inland > 152 ? SAVANNA : JUNGLE;
	if (lat < -40) return 2;
	return 0;
}
function earthColumn(world, x, z, raster, seed) {
	const { lon, lat } = lonLatFromLocal(world, x, z);
	const s = sample(raster, lon, lat);
	const isLand = s.land > 127;
	const e = s.elev;
	let h;
	if (isLand) {
		const above = Math.max(0, e - SEA_GRAY);
		const detail = (fbm((lon + 180) * .35, (lat + 90) * .5, seed + 17, 2) - .5) * 3;
		h = Math.round(64 + above * .78 + detail);
		if (lat < -62) h = Math.max(h, 79);
	} else {
		const below = Math.max(0, SEA_GRAY - e);
		h = Math.round(58 - below * .32);
	}
	h = Math.max(-50, Math.min(220, h));
	let wet = !isLand || h < 63;
	let b = biomeAt(lon, lat, h, e, wet);
	if (isLand && !wet && h <= 66) {
		const stepLon = 360 / Math.max(1, world.width);
		const stepLat = 180 / Math.max(1, world.depth);
		for (const [dl, da] of [
			[stepLon, 0],
			[-stepLon, 0],
			[0, stepLat],
			[0, -stepLat]
		]) if (sample(raster, lon + dl, lat + da).land <= 127) {
			b = 7;
			break;
		}
	}
	let surface = 4;
	let fill = 3;
	if (wet) {
		surface = 5;
		fill = 5;
	} else if (b === 7 || b === 3) {
		surface = 5;
		fill = 5;
	} else if (b === SNOWY_PEAKS || b === 9 || b === SNOWY_TAIGA) {
		surface = 17;
		fill = 2;
	} else if (b === 8 || b === WOODED_PEAKS) {
		surface = h > 140 || e > 200 ? 17 : 2;
		fill = 2;
	}
	if (!wet && (b === SNOWY_PEAKS || b === 8 && h > 140 || e > 200)) {
		surface = 17;
		fill = 2;
	}
	if (wet && (b === FROZEN_OCEAN || lat > 68 || lat < -62)) surface = 18;
	if (lat < -62 && !wet) {
		surface = 17;
		fill = 2;
	}
	return {
		height: h,
		biome: b,
		surface,
		fill,
		water: wet ? 1 : 0,
		cave: Math.round(fbm((world.originX + x) * .04, (world.originZ + z) * .04, seed + 90, 3) * 255)
	};
}
function generateEarth(world, seed, replace = true, raster) {
	if (world.virtual) {
		if (replace) world.tiles = /* @__PURE__ */ new Map();
		return;
	}
	const { width, depth } = world;
	for (let z = 0; z < depth; z++) for (let x = 0; x < width; x++) {
		const col = earthColumn(world, x, z, raster, seed);
		const i = idxOf(world, x, z);
		if (!replace) col.height = Math.round((world.height[i] + col.height) / 2);
		world.height[i] = col.height;
		world.biome[i] = col.biome;
		world.cave[i] = col.cave;
		world.surface[i] = col.surface;
		world.fill[i] = col.fill;
		world.water[i] = col.water;
	}
}
function columnAt(world, lx, lz) {
	if (world.virtual) {
		const r = cached$1;
		if (!r) return null;
		return earthColumn(world, lx, lz, r, Number(world.settings.seed & 4294967295n) | 0);
	}
	const i = idxOf(world, lx, lz);
	return {
		height: world.height[i],
		biome: world.biome[i],
		surface: world.surface[i],
		water: world.water[i]
	};
}
function spawnScore(world, lx, lz, cx, cz) {
	const col = columnAt(world, lx, lz);
	if (!col) return -1;
	if (col.water) return -1;
	const y = col.height + 1;
	if (y <= 63 || y > 200) return -1;
	if (!isSolid(col.surface)) return -1;
	const b = col.biome;
	let s = 8;
	if (b === 0 || b === SUNFLOWER) s += 6;
	else if (b === 1) s += 4;
	else if (b === SAVANNA || b === 7) s += 3;
	else if (b === 3) s += 1;
	else if (b === 8 || b === SNOWY_PEAKS) s -= 3;
	if (y >= 64 && y <= 92) s += 3;
	const dx = lx - cx;
	const dz = lz - cz;
	s -= Math.sqrt(dx * dx + dz * dz) * .02;
	return s;
}
function findSpawnInRegion(world, region) {
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
	for (let z = z0; z <= z1; z += step) for (let x = x0; x <= x1; x += step) {
		const sc = spawnScore(world, x, z, cx, cz);
		if (sc > best) {
			best = sc;
			bx = x;
			bz = z;
		}
	}
	if (best < 0) return null;
	const y = (columnAt(world, bx, bz)?.height ?? 64) + 1;
	return {
		x: worldX(world, bx),
		y,
		z: worldZ(world, bz)
	};
}
function randomLandSpawn(world) {
	const hits = [];
	const step = Math.max(1, Math.floor(Math.max(world.width, world.depth) / 128));
	for (let z = 0; z < world.depth; z += step) for (let x = 0; x < world.width; x += step) if (spawnScore(world, x, z, world.width / 2, world.depth / 2) > 0) hits.push({
		x,
		z
	});
	if (!hits.length) return null;
	const pick = hits[Math.random() * hits.length | 0];
	const col = columnAt(world, pick.x, pick.z);
	return {
		x: worldX(world, pick.x),
		y: (col?.height ?? 64) + 1,
		z: worldZ(world, pick.z)
	};
}
function highestLandSpawn(world) {
	let best = -999;
	let bx = 0;
	let bz = 0;
	const step = Math.max(1, Math.floor(Math.max(world.width, world.depth) / 256));
	for (let z = 0; z < world.depth; z += step) for (let x = 0; x < world.width; x += step) {
		const col = columnAt(world, x, z);
		if (!col || col.water) continue;
		if (col.height > best && isSolid(col.surface)) {
			best = col.height;
			bx = x;
			bz = z;
		}
	}
	if (best < 0) return null;
	return {
		x: worldX(world, bx),
		y: best + 1,
		z: worldZ(world, bz)
	};
}
function seedNum$1(seed) {
	return Number(seed & 4294967295n) | 0;
}
function generatedColumn(world, x, z, seed) {
	const preset = world.terrainKind ?? "continents";
	const seaBias = preset === "oceans" ? .28 : preset === "islands" || preset === "archipelago" ? .12 : preset === "inland" ? -.18 : 0;
	const mountainGain = preset === "mountains" ? 1.35 : preset === "flat" ? .05 : .85;
	const continentScale = preset === "islands" || preset === "archipelago" ? .018 : .0075;
	if (preset === "flat") return {
		height: 64,
		biome: 0,
		surface: 4,
		fill: 3,
		water: 0,
		cave: 20
	};
	const nx = (world.originX + x) * continentScale;
	const nz = (world.originZ + z) * continentScale;
	let continent = fbm(nx, nz, seed, 6, 2, .52);
	const warpX = fbm(nx * 1.7 + 12, nz * 1.7, seed + 9, 3);
	const warpZ = fbm(nx * 1.7, nz * 1.7 + 8, seed + 11, 3);
	continent = fbm(nx + warpX * .6, nz + warpZ * .6, seed, 6);
	if (preset === "archipelago") {
		const cell = fbm(nx * 2.4, nz * 2.4, seed + 4, 4);
		continent = continent * .45 + cell * .55;
	}
	const ridge = ridged(nx * 2.2, nz * 2.2, seed + 3, 5);
	const detail = fbm(nx * 8, nz * 8, seed + 5, 4);
	let e = (continent - .5 + seaBias) * 2;
	e = e * .72 + (ridge - .45) * .55 * mountainGain;
	e += (detail - .5) * .12;
	if (preset === "inland") e = Math.max(e, -.05);
	if (preset === "oceans") e -= .22;
	let h;
	if (e < 0) {
		const depthAmt = Math.min(1, -e);
		h = Math.round(55 - depthAmt * 28 - (preset === "oceans" ? 6 : 0));
	} else h = Math.round(64 + e * 48 * mountainGain + (preset === "mountains" ? e * 22 : 0));
	h = Math.max(-50, Math.min(220, h));
	const t = fbm(nx * .9 + 40, nz * .9, seed + 21, 4) - (e > .55 ? (e - .55) * .8 : 0);
	const m = fbm(nx * .85 - 30, nz * .85, seed + 27, 4);
	let b = 0;
	if (h < 45) b = 5;
	else if (h < 63) b = 4;
	else if (h <= 64) b = 7;
	else if (e > .72 || preset === "mountains" && e > .4) b = t < .35 ? 23 : 8;
	else if (t < .28) b = m > .5 ? 10 : 9;
	else if (t > .72 && m < .32) b = 3;
	else if (t > .68 && m < .48) b = 13;
	else if (m > .72 && t > .6) b = 12;
	else if (m > .62) b = 1;
	else if (m > .5 && t < .5) b = 2;
	else if (m < .28 && t > .55) b = 14;
	else b = 0;
	const water = h < 63 || b === 4 || b === 5 ? 1 : 0;
	let surface = 4;
	let fill = 3;
	if (b === 8 || b === 23) {
		surface = h > 140 ? 17 : 2;
		fill = 2;
	} else if (b === 7 || b === 3) {
		surface = 5;
		fill = 5;
	} else if (water) {
		surface = 5;
		fill = 5;
	}
	return {
		height: h,
		biome: b,
		surface,
		fill,
		water,
		cave: Math.round(fbm((world.originX + x) * .04, (world.originZ + z) * .04, seed + 90, 3) * 255)
	};
}
function generateTerrain(world, preset, replace = true, raster) {
	const seed = seedNum$1(world.settings.seed);
	world.terrainKind = preset;
	if (world.virtual) {
		if (preset === "earth" && !raster && !world.terrainKind) throw new Error("Earth map data is still loading.");
		if (preset === "earth" && !raster) throw new Error("Earth map data is still loading.");
		if (replace) world.tiles = /* @__PURE__ */ new Map();
		return;
	}
	const { width, depth } = world;
	const seaBias = preset === "oceans" ? .28 : preset === "islands" || preset === "archipelago" ? .12 : preset === "inland" ? -.18 : 0;
	const mountainGain = preset === "mountains" ? 1.35 : preset === "flat" ? .05 : .85;
	const continentScale = preset === "islands" || preset === "archipelago" ? .018 : .0075;
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
		for (let z = 0; z < depth; z++) for (let x = 0; x < width; x++) {
			const i = idxOf(world, x, z);
			if (!replace && water[i] === 0 && height[i] > 62) continue;
			height[i] = 64;
			biome[i] = 0;
			water[i] = 0;
			cave[i] = 20;
			surface[i] = 4;
			fill[i] = 3;
		}
		return;
	}
	const tempMap = new Float32Array(width * depth);
	const moistMap = new Float32Array(width * depth);
	const elevMap = new Float32Array(width * depth);
	for (let z = 0; z < depth; z++) for (let x = 0; x < width; x++) {
		const nx = (world.originX + x) * continentScale;
		const nz = (world.originZ + z) * continentScale;
		let continent = fbm(nx, nz, seed, 6, 2, .52);
		const warpX = fbm(nx * 1.7 + 12, nz * 1.7, seed + 9, 3);
		const warpZ = fbm(nx * 1.7, nz * 1.7 + 8, seed + 11, 3);
		continent = fbm(nx + warpX * .6, nz + warpZ * .6, seed, 6);
		if (preset === "archipelago") {
			const cell = fbm(nx * 2.4, nz * 2.4, seed + 4, 4);
			continent = continent * .45 + cell * .55;
		}
		const ridge = ridged(nx * 2.2, nz * 2.2, seed + 3, 5);
		const detail = fbm(nx * 8, nz * 8, seed + 5, 4);
		let e = (continent - .5 + seaBias) * 2;
		e = e * .72 + (ridge - .45) * .55 * mountainGain;
		e += (detail - .5) * .12;
		if (preset === "inland") e = Math.max(e, -.05);
		if (preset === "oceans") e -= .22;
		const i = idxOf(world, x, z);
		elevMap[i] = e;
		tempMap[i] = fbm(nx * .9 + 40, nz * .9, seed + 21, 4) - (e > .55 ? (e - .55) * .8 : 0);
		moistMap[i] = fbm(nx * .85 - 30, nz * .85, seed + 27, 4);
	}
	for (let z = 0; z < depth; z++) for (let x = 0; x < width; x++) {
		const i = idxOf(world, x, z);
		const e = elevMap[i];
		let h;
		if (e < 0) {
			const depthAmt = Math.min(1, -e);
			h = Math.round(55 - depthAmt * 28 - (preset === "oceans" ? 6 : 0));
		} else h = Math.round(64 + e * 48 * mountainGain + (preset === "mountains" ? e * 22 : 0));
		h = Math.max(-50, Math.min(220, h));
		if (!replace) h = Math.round((height[i] + h) / 2);
		height[i] = h;
		const t = tempMap[i];
		const m = moistMap[i];
		let b = 0;
		if (h < 45) b = 5;
		else if (h < 63) b = 4;
		else if (h <= 64) b = 7;
		else if (e > .72 || preset === "mountains" && e > .4) b = t < .35 ? 23 : 8;
		else if (t < .28) b = m > .5 ? 10 : 9;
		else if (t > .72 && m < .32) b = 3;
		else if (t > .68 && m < .48) b = 13;
		else if (m > .72 && t > .6) b = 12;
		else if (m > .62) b = 1;
		else if (m > .5 && t < .5) b = 2;
		else if (m < .28 && t > .55) b = 14;
		else b = 0;
		biome[i] = b;
		water[i] = h < 63 || b === 4 || b === 5 ? 1 : 0;
		cave[i] = Math.round(fbm((world.originX + x) * .04, (world.originZ + z) * .04, seed + 90, 3) * 255);
		applyBiomeDefaults(world, i);
		if (b === 8 || b === 23) {
			surface[i] = h > 140 ? 17 : 2;
			fill[i] = 2;
		}
		if (b === 7 || b === 3) {
			surface[i] = 5;
			fill[i] = 5;
		}
	}
	carveRivers(world, elevMap, seed);
	if (preset !== "oceans") scatterBeaches(world);
}
function carveRivers(world, elev, seed) {
	const { width, depth } = world;
	const rng = (x, z) => fbm(x * .03, z * .03, seed + 120, 2);
	const sources = [];
	for (let z = 4; z < depth - 4; z += 10) for (let x = 4; x < width - 4; x += 10) {
		const i = idxOf(world, x, z);
		if (world.height[i] > 91 && rng(x, z) > .62) sources.push([x, z]);
	}
	for (const [sx, sz] of sources.slice(0, 24)) {
		let x = sx;
		let z = sz;
		for (let step = 0; step < 400; step++) {
			const i = idxOf(world, x | 0, z | 0);
			if (!world.water[i] && world.height[i] > 61) {
				world.biome[i] = 6;
				world.water[i] = 1;
				world.height[i] = Math.min(world.height[i], 62);
				world.surface[i] = 5;
				world.fill[i] = 5;
				for (const [dx, dz] of [
					[1, 0],
					[-1, 0],
					[0, 1],
					[0, -1]
				]) {
					const nx = (x | 0) + dx;
					const nz = (z | 0) + dz;
					if (nx < 0 || nz < 0 || nx >= width || nz >= depth) continue;
					const j = idxOf(world, nx, nz);
					if (world.height[j] > 103) continue;
					world.biome[j] = 6;
					world.water[j] = 1;
					world.height[j] = Math.min(world.height[j], 62);
				}
			}
			if (world.height[i] < 59) break;
			let best = Infinity;
			let bx = 0;
			let bz = 0;
			for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) {
				if (!dx && !dz) continue;
				const nx = (x | 0) + dx;
				const nz = (z | 0) + dz;
				if (nx < 0 || nz < 0 || nx >= width || nz >= depth) continue;
				const e = elev[idxOf(world, nx, nz)] + rng(nx, nz) * .05;
				if (e < best) {
					best = e;
					bx = dx;
					bz = dz;
				}
			}
			if (bx === 0 && bz === 0) break;
			x += bx;
			z += bz;
		}
	}
}
function scatterBeaches(world) {
	const { width, depth } = world;
	for (let z = 1; z < depth - 1; z++) for (let x = 1; x < width - 1; x++) {
		const i = idxOf(world, x, z);
		if (world.water[i]) continue;
		if (world.height[i] > 66) continue;
		let nearWater = false;
		for (let dz = -1; dz <= 1 && !nearWater; dz++) for (let dx = -1; dx <= 1; dx++) {
			const j = idxOf(world, x + dx, z + dz);
			if (world.water[j]) nearWater = true;
		}
		if (nearWater) {
			world.biome[i] = 7;
			world.surface[i] = 5;
			world.fill[i] = 5;
		}
	}
}
function seedNum(seed) {
	return Number(seed & 4294967295n) | 0;
}
function tileKey(tx, tz) {
	return tx * 1048576 + (tz + 524288);
}
function tileCoords(x, z) {
	const tx = Math.floor(x / 64);
	const tz = Math.floor(z / 64);
	return {
		tx,
		tz,
		li: x - tx * 64 + (z - tz * 64) * 64
	};
}
function emptyTile() {
	const n = 4096;
	return {
		filled: new Uint8Array(n),
		height: new Int16Array(n),
		biome: new Uint8Array(n),
		surface: new Uint8Array(n),
		fill: new Uint8Array(n),
		water: new Uint8Array(n),
		cave: new Uint8Array(n)
	};
}
function styleColumn(col) {
	const b = BIOMES[col.biome] ?? BIOMES[0];
	col.surface = b.surface;
	col.fill = b.fill;
	if (b.id === 4 || b.id === 5 || b.id === 6) col.water = 1;
	else if (b.id === 7) col.water = col.height < 63 ? 1 : 0;
	else col.water = 0;
	if (b.extra === "snow" && col.height > 71) col.surface = 17;
	return col;
}
function baseColumn(world, x, z) {
	const seed = seedNum(world.settings.seed);
	if (world.terrainKind === "earth") {
		const raster = peekEarthRaster();
		if (raster) return earthColumn(world, x, z, raster, seed);
		return styleColumn({
			height: 51,
			biome: 4,
			surface: 5,
			fill: 5,
			water: 1,
			cave: 20
		});
	}
	return generatedColumn(world, x, z, seed);
}
function readColumn(world, x, z) {
	if (world.virtual && world.tiles) {
		const { tx, tz, li } = tileCoords(x, z);
		const tile = world.tiles.get(tileKey(tx, tz));
		if (tile && tile.filled[li]) return {
			height: tile.height[li],
			biome: tile.biome[li],
			surface: tile.surface[li],
			fill: tile.fill[li],
			water: tile.water[li],
			cave: tile.cave[li]
		};
		return baseColumn(world, x, z);
	}
	const i = x + z * world.width;
	return {
		height: world.height[i] ?? 64,
		biome: world.biome[i] ?? 0,
		surface: world.surface[i] ?? 4,
		fill: world.fill[i] ?? 3,
		water: world.water[i] ?? 0,
		cave: world.cave[i] ?? 0
	};
}
function writeColumn(world, x, z, patch) {
	const cur = readColumn(world, x, z);
	const next = {
		height: patch.height ?? cur.height,
		biome: patch.biome ?? cur.biome,
		surface: patch.surface ?? cur.surface,
		fill: patch.fill ?? cur.fill,
		water: patch.water ?? cur.water,
		cave: patch.cave ?? cur.cave
	};
	if (world.virtual) {
		if (!world.tiles) world.tiles = /* @__PURE__ */ new Map();
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
function stackColumn(col, y, lx, lz) {
	const h = col.height;
	const wet = col.water === 1;
	const surface = col.surface;
	const fill = col.fill;
	if (y < -64 || y > 320) return 0;
	if (y === -64) return 1;
	if (y === -63) return lx * 73 + lz * 37 + y & 3 ? 1 : 56;
	if (wet) {
		if (y > 63) return 0;
		if (y > h) return 8;
		if (y === h) return surface || 5;
		if (y > h - 3) return fill || 5;
		if (y < 0) return 56;
		return 2;
	}
	if (y > h) return 0;
	if (y === h) return surface || 4;
	if (y > h - 4) return fill || 3;
	if (y < 0) return 56;
	return 2;
}
function exportRegion(world) {
	if (!world.virtual) return {
		originX: world.originX,
		originZ: world.originZ,
		width: world.width,
		depth: world.depth
	};
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
	return {
		originX: x0,
		originZ: z0,
		width: win,
		depth: win
	};
}
var AIR = 0;
var SAND = 5;
var SANDSTONE = 6;
var WATER = 8;
var OAK_LOG = 10;
var OAK_LEAVES = 11;
var BIRCH_LOG = 12;
var BIRCH_LEAVES = 13;
var SPRUCE_LOG = 14;
var SPRUCE_LEAVES = 15;
var CACTUS = 16;
var COBBLE = 27;
var MOSSY = 28;
var PLANKS = 29;
var GLASS = 31;
var BRICK = 32;
var STONE_BRICK = 33;
var OAK_STAIR = 46;
var TABLE = 48;
var CHEST = 49;
var FURNACE = 50;
var BOOK = 51;
var FENCE = 52;
var PATH = 59;
var CHERRY_LOG = 61;
var CHERRY_LEAVES = 62;
var DARK_LOG = 63;
var DARK_LEAVES = 64;
var JUNGLE_LOG = 65;
var JUNGLE_LEAVES = 66;
var TORCH = 79;
var CHISEL = 87;
var STONE = 2;
var IRON = 41;
var GOLD = 40;
var CALCITE = 57;
var WHITE = 80;
var GRAY = 81;
var SMOOTH = 55;
var ORANGE = 83;
function box(voxels, x0, y0, z0, x1, y1, z1, block) {
	for (let y = y0; y <= y1; y++) for (let z = z0; z <= z1; z++) for (let x = x0; x <= x1; x++) voxels.push({
		dx: x,
		dy: y,
		dz: z,
		block
	});
}
function hollow(voxels, x0, y0, z0, x1, y1, z1, block) {
	for (let y = y0; y <= y1; y++) for (let z = z0; z <= z1; z++) for (let x = x0; x <= x1; x++) if (x === x0 || x === x1 || y === y0 || y === y1 || z === z0 || z === z1) voxels.push({
		dx: x,
		dy: y,
		dz: z,
		block
	});
}
function houseVoxels() {
	const v = [];
	box(v, 0, 0, 0, 6, 0, 6, PLANKS);
	hollow(v, 0, 1, 0, 6, 3, 6, OAK_LOG);
	box(v, 1, 1, 0, 5, 3, 0, PLANKS);
	box(v, 1, 1, 6, 5, 3, 6, PLANKS);
	box(v, 0, 1, 1, 0, 3, 5, PLANKS);
	box(v, 6, 1, 1, 6, 3, 5, PLANKS);
	v.push({
		dx: 3,
		dy: 1,
		dz: 0,
		block: AIR
	});
	v.push({
		dx: 3,
		dy: 2,
		dz: 0,
		block: AIR
	});
	v.push({
		dx: 1,
		dy: 2,
		dz: 0,
		block: GLASS
	});
	v.push({
		dx: 5,
		dy: 2,
		dz: 0,
		block: GLASS
	});
	v.push({
		dx: 0,
		dy: 2,
		dz: 3,
		block: GLASS
	});
	v.push({
		dx: 6,
		dy: 2,
		dz: 3,
		block: GLASS
	});
	v.push({
		dx: 1,
		dy: 1,
		dz: 5,
		block: TABLE
	});
	v.push({
		dx: 2,
		dy: 1,
		dz: 5,
		block: FURNACE
	});
	v.push({
		dx: 5,
		dy: 1,
		dz: 5,
		block: CHEST
	});
	v.push({
		dx: 5,
		dy: 1,
		dz: 4,
		block: BOOK
	});
	v.push({
		dx: 3,
		dy: 3,
		dz: 3,
		block: TORCH
	});
	for (let i = 0; i <= 3; i++) box(v, i, 4 + i, i, 6 - i, 4 + i, 6 - i, OAK_STAIR);
	box(v, 2, 4, 2, 4, 4, 4, PLANKS);
	return v;
}
function castleVoxels() {
	const v = [];
	hollow(v, 0, 0, 0, 14, 8, 14, STONE_BRICK);
	box(v, 1, 0, 1, 13, 0, 13, STONE);
	box(v, 3, 1, 3, 11, 7, 11, AIR);
	box(v, 3, 1, 3, 11, 1, 11, PATH);
	box(v, 6, 1, 0, 8, 3, 0, AIR);
	for (const [tx, tz] of [
		[0, 0],
		[12, 0],
		[0, 12],
		[12, 12]
	]) {
		hollow(v, tx, 0, tz, tx + 2, 12, tz + 2, COBBLE);
		box(v, tx, 12, tz, tx + 2, 12, tz + 2, MOSSY);
		v.push({
			dx: tx + 1,
			dy: 13,
			dz: tz + 1,
			block: TORCH
		});
	}
	hollow(v, 5, 1, 5, 9, 10, 9, STONE_BRICK);
	box(v, 6, 1, 5, 8, 2, 5, AIR);
	v.push({
		dx: 7,
		dy: 2,
		dz: 7,
		block: CHEST
	});
	v.push({
		dx: 6,
		dy: 2,
		dz: 8,
		block: TABLE
	});
	box(v, 5, 10, 5, 9, 10, 9, BRICK);
	return v;
}
function templeVoxels() {
	const v = [];
	box(v, 0, 0, 0, 10, 0, 10, SAND);
	box(v, 0, 1, 0, 10, 1, 10, SANDSTONE);
	hollow(v, 0, 2, 0, 10, 6, 10, SANDSTONE);
	box(v, 1, 2, 1, 9, 5, 9, AIR);
	box(v, 4, 2, 0, 6, 4, 0, AIR);
	v.push({
		dx: 2,
		dy: 4,
		dz: 0,
		block: CHISEL
	});
	v.push({
		dx: 8,
		dy: 4,
		dz: 0,
		block: CHISEL
	});
	box(v, 3, 7, 3, 7, 7, 7, SANDSTONE);
	box(v, 4, 8, 4, 6, 9, 6, CHISEL);
	v.push({
		dx: 5,
		dy: 3,
		dz: 5,
		block: CHEST
	});
	v.push({
		dx: 5,
		dy: 3,
		dz: 8,
		block: TORCH
	});
	return v;
}
function roadVoxels(length = 16) {
	const v = [];
	for (let z = 0; z < length; z++) {
		v.push({
			dx: -1,
			dy: 0,
			dz: z,
			block: PATH
		});
		v.push({
			dx: 0,
			dy: 0,
			dz: z,
			block: PATH
		});
		v.push({
			dx: 1,
			dy: 0,
			dz: z,
			block: PATH
		});
		if (z % 6 === 0) {
			v.push({
				dx: -2,
				dy: 1,
				dz: z,
				block: FENCE
			});
			v.push({
				dx: 2,
				dy: 1,
				dz: z,
				block: FENCE
			});
			v.push({
				dx: -2,
				dy: 2,
				dz: z,
				block: TORCH
			});
		}
	}
	return v;
}
function rotate(v, rot) {
	if (rot === 0) return v;
	return v.map(({ dx, dy, dz, block }) => {
		if (rot === 90) return {
			dx: -dz,
			dy,
			dz: dx,
			block
		};
		if (rot === 180) return {
			dx: -dx,
			dy,
			dz: -dz,
			block
		};
		return {
			dx: dz,
			dy,
			dz: -dx,
			block
		};
	});
}
function pyramidVoxels() {
	const v = [];
	for (let y = 0; y < 12; y++) {
		const r = 11 - y;
		box(v, -r, y, -r, r, y, r, y === 11 ? GOLD : SANDSTONE);
	}
	return v;
}
function towerVoxels() {
	const v = [];
	box(v, -1, 0, -1, 1, 0, 1, IRON);
	for (let y = 1; y <= 22; y++) {
		const w = y > 16 ? 0 : 1;
		box(v, -w, y, -w, w, y, w, IRON);
		if (y % 3 === 0) {
			v.push({
				dx: -w - 1,
				dy: y,
				dz: 0,
				block: IRON
			});
			v.push({
				dx: w + 1,
				dy: y,
				dz: 0,
				block: IRON
			});
		}
	}
	v.push({
		dx: 0,
		dy: 23,
		dz: 0,
		block: GOLD
	});
	return v;
}
function statueVoxels() {
	const v = [];
	box(v, -2, 0, -2, 2, 1, 2, STONE);
	box(v, -1, 2, -1, 1, 10, 1, CALCITE);
	box(v, -2, 8, 0, 2, 9, 0, CALCITE);
	box(v, 0, 11, -1, 0, 14, 1, CALCITE);
	v.push({
		dx: 0,
		dy: 15,
		dz: 0,
		block: GOLD
	});
	return v;
}
function palaceVoxels() {
	const v = [];
	box(v, -8, 0, -5, 8, 0, 5, SMOOTH);
	hollow(v, -8, 1, -5, 8, 5, 5, WHITE);
	box(v, -7, 1, -4, 7, 4, 4, AIR);
	for (const x of [
		-6,
		-3,
		0,
		3,
		6
	]) v.push({
		dx: x,
		dy: 3,
		dz: -5,
		block: GLASS
	});
	box(v, -2, 6, -2, 2, 8, 2, CALCITE);
	v.push({
		dx: 0,
		dy: 9,
		dz: 0,
		block: GOLD
	});
	v.push({
		dx: -8,
		dy: 6,
		dz: -5,
		block: GOLD
	});
	v.push({
		dx: 8,
		dy: 6,
		dz: -5,
		block: GOLD
	});
	v.push({
		dx: -8,
		dy: 6,
		dz: 5,
		block: GOLD
	});
	v.push({
		dx: 8,
		dy: 6,
		dz: 5,
		block: GOLD
	});
	return v;
}
function monumentVoxels() {
	const v = [];
	box(v, -2, 0, -2, 2, 0, 2, STONE_BRICK);
	box(v, -1, 1, -1, 1, 12, 1, WHITE);
	box(v, -2, 13, -2, 2, 13, 2, GOLD);
	return v;
}
function bridgeVoxels() {
	const v = [];
	for (let x = -10; x <= 10; x++) {
		v.push({
			dx: x,
			dy: 3,
			dz: 0,
			block: ORANGE
		});
		v.push({
			dx: x,
			dy: 3,
			dz: 1,
			block: ORANGE
		});
	}
	box(v, -8, 0, -1, -7, 8, 2, ORANGE);
	box(v, 7, 0, -1, 8, 8, 2, ORANGE);
	for (let y = 4; y <= 7; y++) {
		v.push({
			dx: -7,
			dy: y,
			dz: 0,
			block: IRON
		});
		v.push({
			dx: 7,
			dy: y,
			dz: 0,
			block: IRON
		});
	}
	return v;
}
function skyscraperVoxels() {
	const v = [];
	box(v, -3, 0, -3, 3, 0, 3, GRAY);
	hollow(v, -3, 1, -3, 3, 24, 3, GRAY);
	for (let y = 2; y <= 22; y += 2) for (const x of [-3, 3]) {
		v.push({
			dx: x,
			dy: y,
			dz: -1,
			block: GLASS
		});
		v.push({
			dx: x,
			dy: y,
			dz: 1,
			block: GLASS
		});
	}
	box(v, -1, 25, -1, 1, 28, 1, GRAY);
	v.push({
		dx: 0,
		dy: 29,
		dz: 0,
		block: GOLD
	});
	return v;
}
function wallVoxels() {
	const v = [];
	for (let x = -12; x <= 12; x++) {
		box(v, x, 0, -1, x, 4, 1, STONE_BRICK);
		if (x % 4 === 0) v.push({
			dx: x,
			dy: 5,
			dz: -1,
			block: STONE_BRICK
		});
	}
	box(v, -2, 0, -3, 2, 7, 3, STONE_BRICK);
	return v;
}
function cityVoxels() {
	const v = [];
	const pads = [
		[
			-8,
			-6,
			8,
			GRAY
		],
		[
			4,
			-4,
			6,
			WHITE
		],
		[
			-4,
			6,
			5,
			BRICK
		],
		[
			8,
			5,
			10,
			GRAY
		],
		[
			0,
			0,
			4,
			STONE_BRICK
		]
	];
	for (const [ox, oz, h, b] of pads) {
		box(v, ox, 0, oz, ox + 3, 0, oz + 3, SMOOTH);
		hollow(v, ox, 1, oz, ox + 3, h, oz + 3, b);
	}
	for (const p of roadVoxels(16)) v.push({
		dx: p.dx - 4,
		dy: 0,
		dz: p.dz,
		block: p.block
	});
	return v;
}
function capitalVoxels() {
	const v = cityVoxels();
	for (const p of palaceVoxels()) v.push({
		dx: p.dx,
		dy: p.dy,
		dz: p.dz - 10,
		block: p.block
	});
	return v;
}
function hutVoxels() {
	const v = [];
	box(v, 0, 0, 0, 5, 0, 5, COBBLE);
	hollow(v, 0, 1, 0, 5, 3, 5, COBBLE);
	v.push({
		dx: 2,
		dy: 1,
		dz: 0,
		block: AIR
	});
	v.push({
		dx: 2,
		dy: 2,
		dz: 0,
		block: AIR
	});
	v.push({
		dx: 1,
		dy: 1,
		dz: 4,
		block: TABLE
	});
	v.push({
		dx: 4,
		dy: 1,
		dz: 4,
		block: CHEST
	});
	box(v, 0, 4, 0, 5, 4, 5, OAK_STAIR);
	v.push({
		dx: 2,
		dy: 3,
		dz: 2,
		block: TORCH
	});
	return v;
}
function mossify(voxels) {
	return voxels.map((p) => {
		if (p.block === AIR || p.block === TORCH) return p;
		if (p.dy > 5 && (p.dx + p.dz + p.dy) % 3 === 0) return {
			...p,
			block: AIR
		};
		if (p.block === GLASS) return {
			...p,
			block: AIR
		};
		return {
			...p,
			block: MOSSY
		};
	});
}
function structureVoxels(kind, rotation = 0, opts) {
	const year = opts?.year ?? 2026;
	let v = [];
	let use = kind;
	if (year < 1700 && (kind === "city" || kind === "skyscraper")) use = "village";
	if (year < 1930 && kind === "skyscraper") use = "city";
	if (year < 1700 && kind === "house") v = hutVoxels();
	else if (use === "house") v = houseVoxels();
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
function villageLike() {
	const v = [];
	const h = hutVoxels();
	for (const [ox, oz, r] of [
		[
			0,
			0,
			0
		],
		[
			12,
			2,
			90
		],
		[
			-14,
			4,
			180
		],
		[
			4,
			14,
			270
		],
		[
			-8,
			-12,
			0
		]
	]) for (const p of rotate(h, r)) v.push({
		dx: p.dx + ox,
		dy: p.dy,
		dz: p.dz + oz,
		block: p.block
	});
	hollow(v, 4, 0, 6, 7, 3, 9, COBBLE);
	box(v, 5, 1, 7, 6, 1, 8, WATER);
	box(v, 4, 4, 6, 7, 4, 9, PLANKS);
	v.push({
		dx: 5,
		dy: 5,
		dz: 7,
		block: FENCE
	});
	v.push({
		dx: 6,
		dy: 5,
		dz: 8,
		block: FENCE
	});
	for (const p of roadVoxels(18)) v.push({
		dx: p.dx + 5,
		dy: 0,
		dz: p.dz - 4,
		block: p.block
	});
	return v;
}
function treeVoxels(kind) {
	const v = [];
	if (kind === "cactus") {
		v.push({
			dx: 0,
			dy: 1,
			dz: 0,
			block: CACTUS
		});
		v.push({
			dx: 0,
			dy: 2,
			dz: 0,
			block: CACTUS
		});
		v.push({
			dx: 0,
			dy: 3,
			dz: 0,
			block: CACTUS
		});
		return v;
	}
	const log = kind === "spruce" ? SPRUCE_LOG : kind === "birch" ? BIRCH_LOG : kind === "jungle" ? JUNGLE_LOG : kind === "cherry" ? CHERRY_LOG : kind === "dark_oak" ? DARK_LOG : OAK_LOG;
	const leaf = kind === "spruce" ? SPRUCE_LEAVES : kind === "birch" ? BIRCH_LEAVES : kind === "jungle" ? JUNGLE_LEAVES : kind === "cherry" ? CHERRY_LEAVES : kind === "dark_oak" ? DARK_LEAVES : OAK_LEAVES;
	const h = kind === "jungle" ? 7 : kind === "spruce" ? 6 : 5;
	for (let y = 1; y <= h; y++) v.push({
		dx: 0,
		dy: y,
		dz: 0,
		block: log
	});
	const r = kind === "jungle" ? 3 : 2;
	for (let dy = h - 1; dy <= h + 1; dy++) for (let dz = -r; dz <= r; dz++) for (let dx = -r; dx <= r; dx++) {
		if (dx === 0 && dz === 0 && dy <= h) continue;
		if (Math.abs(dx) === r && Math.abs(dz) === r && dy === h + 1) continue;
		v.push({
			dx,
			dy,
			dz,
			block: leaf
		});
	}
	return v;
}
var ENTITY_TYPES = [
	{
		id: "minecraft:cow",
		label: "Cow"
	},
	{
		id: "minecraft:pig",
		label: "Pig"
	},
	{
		id: "minecraft:sheep",
		label: "Sheep"
	},
	{
		id: "minecraft:chicken",
		label: "Chicken"
	},
	{
		id: "minecraft:villager",
		label: "Villager"
	},
	{
		id: "minecraft:iron_golem",
		label: "Iron Golem"
	},
	{
		id: "minecraft:horse",
		label: "Horse"
	},
	{
		id: "minecraft:wolf",
		label: "Wolf"
	},
	{
		id: "minecraft:cat",
		label: "Cat"
	},
	{
		id: "minecraft:fox",
		label: "Fox"
	},
	{
		id: "minecraft:parrot",
		label: "Parrot"
	},
	{
		id: "minecraft:turtle",
		label: "Turtle"
	},
	{
		id: "minecraft:squid",
		label: "Squid"
	},
	{
		id: "minecraft:bat",
		label: "Bat"
	},
	{
		id: "minecraft:zombie",
		label: "Zombie"
	},
	{
		id: "minecraft:skeleton",
		label: "Skeleton"
	},
	{
		id: "minecraft:creeper",
		label: "Creeper"
	},
	{
		id: "minecraft:spider",
		label: "Spider"
	}
];
function hash2$1(x, z, seed) {
	let n = Math.imul(x, 374761393) + Math.imul(z, 668265263) + seed;
	n = n ^ n >>> 13 | 0;
	n = Math.imul(n, 1274126177);
	return ((n ^ n >>> 16) >>> 0) / 4294967296;
}
function buildOverlay(world) {
	const overlay = /* @__PURE__ */ new Map();
	const seed = Number(world.settings.seed & 4294967295n) | 0;
	const put = (x, y, z, block) => {
		overlay.set(`${x},${y},${z}`, block);
	};
	const stamp = (wx, wy, wz, voxels) => {
		for (const v of voxels) put(wx + v.dx, wy + v.dy, wz + v.dz, v.block);
	};
	const region = exportRegion(world);
	const x0 = Math.max(2, region.originX - world.originX);
	const z0 = Math.max(2, region.originZ - world.originZ);
	const x1 = Math.min(world.width - 3, x0 + region.width);
	const z1 = Math.min(world.depth - 3, z0 + region.depth);
	for (let z = z0; z < z1; z++) for (let x = x0; x < x1; x++) {
		const col = readColumn(world, x, z);
		if (col.water) continue;
		const b = BIOMES[col.biome];
		if (!b?.tree) continue;
		if (hash2$1(worldX(world, x), worldZ(world, z), seed + 77) > (b.tree === "jungle" ? .18 : b.tree === "cactus" ? .04 : b.tree === "oak" ? .045 : .07)) continue;
		stamp(worldX(world, x), col.height, worldZ(world, z), treeVoxels(b.tree));
	}
	for (const s of world.structures) {
		const lx = s.x - world.originX;
		const lz = s.z - world.originZ;
		if (!inBounds(world, lx, lz)) continue;
		const wy = readColumn(world, lx, lz).height;
		const voxels = s.kind === "custom" && world.customStructures[s.id] ? clipboardToVoxels(world.customStructures[s.id]) : structureVoxels(s.kind, s.rotation, {
			year: world.year,
			ruin: s.ruin
		});
		stamp(s.x, wy, s.z, voxels);
	}
	return overlay;
}
function clipboardToVoxels(clip) {
	const v = [];
	let minH = Infinity;
	for (let i = 0; i < clip.height.length; i++) minH = Math.min(minH, clip.height[i]);
	for (let z = 0; z < clip.d; z++) for (let x = 0; x < clip.w; x++) {
		const i = x + z * clip.w;
		const h = clip.height[i] - minH;
		v.push({
			dx: x,
			dy: h,
			dz: z,
			block: clip.surface[i]
		});
	}
	return v;
}
function isCaveAt(world, x, y, z) {
	const lx = x - world.originX;
	const lz = z - world.originZ;
	if (!inBounds(world, lx, lz)) return false;
	const col = readColumn(world, lx, lz);
	const intensity = col.cave / 255;
	if (intensity < .42) return false;
	if (y > col.height - 6) return false;
	if (y < -54) return false;
	const seed = Number(world.settings.seed & 4294967295n) | 0;
	const n = hash3(x >> 1, y >> 1, z >> 1, seed + 4);
	const n2 = hash3(x, y, z, seed + 9);
	return n > .62 && n2 > .45 && intensity > .5;
}
new TextEncoder();
new TextDecoder();
function bytesToB64(buf) {
	let s = "";
	const chunk = 32768;
	for (let i = 0; i < buf.length; i += chunk) s += String.fromCharCode(...buf.subarray(i, i + chunk));
	return btoa(s);
}
function b64ToBytes(s) {
	const bin = atob(s);
	const out = new Uint8Array(bin.length);
	for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
	return out;
}
async function importMcworld(file, fileName) {
	const warnings = [];
	const zip = await import_lib.default.loadAsync(file);
	const names = Object.keys(zip.files);
	const levelEntry = names.find((n) => n.replace(/\\/g, "/").endsWith("level.dat") && !n.includes("__MACOSX"));
	if (!levelEntry) throw new Error("This archive has no level.dat — it is not a Minecraft Bedrock world.");
	const prefix = levelEntry.includes("/") ? levelEntry.slice(0, levelEntry.lastIndexOf("/") + 1) : "";
	const decoded = decodeLevelDat(await zip.file(levelEntry).async("uint8array"));
	const settings = decoded.settings;
	const dbFiles = {};
	const preservedFiles = {};
	const packs = [];
	for (const name of names) {
		const f = zip.files[name];
		if (f.dir) continue;
		const rel = name.startsWith(prefix) ? name.slice(prefix.length) : name;
		if (rel.startsWith("db/")) {
			const base = rel.slice(3);
			if (base && !base.endsWith("/")) dbFiles[base] = await f.async("uint8array");
		} else if (rel !== "level.dat" && rel !== "level.dat_old" && rel !== "levelname.txt") {
			preservedFiles[rel] = bytesToB64(await f.async("uint8array"));
			if (/behavior|resource|pack/i.test(rel)) packs.push(rel);
		}
	}
	const db = readLevelDb(dbFiles);
	warnings.push(...db.warnings);
	const chunkCoords = [];
	const seen = /* @__PURE__ */ new Set();
	for (const hex of db.map.keys()) {
		const parsed = parseChunkKey(hexToKey(hex));
		if (!parsed || parsed.dim !== 0) continue;
		const id = `${parsed.cx},${parsed.cz}`;
		if (seen.has(id)) continue;
		seen.add(id);
		chunkCoords.push({
			cx: parsed.cx,
			cz: parsed.cz
		});
	}
	const MAX = 32;
	let originChunkX = Math.floor(settings.spawn.x / 16) - Math.floor(MAX / 2);
	let originChunkZ = Math.floor(settings.spawn.z / 16) - Math.floor(MAX / 2);
	if (chunkCoords.length) {
		const minX = Math.min(...chunkCoords.map((c) => c.cx));
		const maxX = Math.max(...chunkCoords.map((c) => c.cx));
		const minZ = Math.min(...chunkCoords.map((c) => c.cz));
		const maxZ = Math.max(...chunkCoords.map((c) => c.cz));
		const spanX = maxX - minX + 1;
		const spanZ = maxZ - minZ + 1;
		if (spanX <= MAX && spanZ <= MAX) {
			originChunkX = minX;
			originChunkZ = minZ;
		}
	}
	const widthChunks = MAX;
	const depthChunks = MAX;
	const width = 512;
	const depth = 512;
	const world = createEmptyWorld({
		name: settings.name,
		width,
		depth,
		seed: settings.seed,
		settings
	});
	world.originX = originChunkX * 16;
	world.originZ = originChunkZ * 16;
	world.settings = settings;
	world.extraNbt = decoded.raw;
	let decodedChunks = 0;
	const endX = originChunkX + widthChunks;
	const endZ = originChunkZ + depthChunks;
	for (let cz = originChunkZ; cz < endZ; cz++) for (let cx = originChunkX; cx < endX; cx++) {
		const subchunks = [];
		let heightmap = null;
		let biomes = null;
		for (const [hex, value] of db.map) {
			const parsed = parseChunkKey(hexToKey(hex));
			if (!parsed || parsed.cx !== cx || parsed.cz !== cz || parsed.dim !== 0) continue;
			if (parsed.tag === 43) {
				const d = decodeData3D(value);
				if (d) {
					heightmap = d.height;
					biomes = d.biome;
				}
			} else if (parsed.tag === 45 && !heightmap) {
				if (value.length >= 512) {
					heightmap = /* @__PURE__ */ new Uint16Array(256);
					const view = new DataView(value.buffer, value.byteOffset, value.byteLength);
					for (let i = 0; i < 256; i++) heightmap[i] = view.getUint16(i * 2, true);
				}
			} else if (parsed.tag === 47 && parsed.subY !== void 0) {
				const sc = decodeSubchunkBlocks(value);
				if (sc) subchunks.push({
					subY: parsed.subY,
					...sc
				});
			}
		}
		if (!heightmap && !subchunks.length) continue;
		decodedChunks++;
		for (let lz = 0; lz < 16; lz++) for (let lx = 0; lx < 16; lx++) {
			const wx = cx * 16 + lx;
			const wz = cz * 16 + lz;
			const gx = wx - world.originX;
			const gz = wz - world.originZ;
			if (!inBounds(world, gx, gz)) continue;
			const i = idxOf(world, gx, gz);
			const col = lx + lz * 16;
			let h = heightmap ? heightmap[col] : 64;
			if (h > 512) h = 64;
			if (h > 320) h = h - 64;
			let topBlock = 4;
			let topY = h;
			if (subchunks.length) {
				let found = false;
				const sorted = [...subchunks].sort((a, b) => b.subY - a.subY);
				for (const sc of sorted) {
					for (let ly = 15; ly >= 0; ly--) {
						const idx = lx + (lz << 4) + (ly << 8);
						const name = sc.names[sc.indices[idx]] ?? "minecraft:air";
						if (name !== "minecraft:air" && name !== "minecraft:water" && name !== "minecraft:lava") {
							topBlock = nameToEditorBlock(name);
							topY = sc.subY * 16 + ly;
							found = true;
							break;
						}
					}
					if (found) break;
				}
				if (found) h = topY;
			}
			world.height[i] = Math.max(-62, Math.min(300, h));
			world.surface[i] = topBlock;
			const bid = biomes ? biomes[col] : 1;
			world.biome[i] = bedrockBiomeToEditor(bid);
			const bdef = BIOMES[world.biome[i]];
			world.fill[i] = bdef?.fill ?? 3;
			const isWater = world.height[i] < 63 && (topBlock === 8 || bdef && (bdef.name.includes("ocean") || bdef.name.includes("river")));
			world.water[i] = isWater ? 1 : 0;
		}
	}
	const passthrough = decodedChunks === 0;
	if (passthrough) warnings.push("Chunk terrain could not be decoded in the browser (LevelDB tables may use Snappy compression or an unsupported version). Spawn and world settings can still be edited. Original chunk data will be preserved on export; map painting will not rewrite those chunks.");
	else if (chunkCoords.length > 1024) warnings.push(`This world is larger than the ${width}×${depth} edit window. Chunks outside the window around spawn are preserved unchanged.`);
	const preservedDb = {};
	for (const [hex, value] of db.map) {
		const parsed = parseChunkKey(hexToKey(hex));
		if (parsed && parsed.dim === 0) {
			if (parsed.cx >= originChunkX && parsed.cx < endX && parsed.cz >= originChunkZ && parsed.cz < endZ && !passthrough) continue;
		}
		preservedDb[hex] = bytesToB64(value);
	}
	world.importMeta = {
		fileName,
		chunkCount: chunkCoords.length,
		decodedChunks,
		preservedKeys: Object.keys(preservedDb).length,
		warnings,
		passthroughDb: passthrough,
		editedWindow: {
			originX: world.originX,
			originZ: world.originZ,
			width,
			depth
		},
		netherEndUntouched: true,
		packsPreserved: packs
	};
	world.preservedDb = preservedDb;
	world.preservedFiles = preservedFiles;
	warnings.push("Nether and The End are not edited in this editor and will be copied through unchanged.");
	if (packs.length) warnings.push(`Preserved ${packs.length} pack/support file(s) from the original world.`);
	return {
		world,
		warnings
	};
}
function encodeMobEvents(enabled) {
	return encodeNbt({
		events_enabled: byte(enabled ? 1 : 0),
		"minecraft:pillager_patrols_event": compound({ enabled: byte(enabled ? 1 : 0) }),
		"minecraft:wandering_trader_event": compound({ enabled: byte(enabled ? 1 : 0) }),
		"minecraft:ender_dragon_event": compound({ enabled: byte(1) })
	});
}
function encodeActor(type, x, y, z, unique) {
	const pos = listOf(TAG.Float, [
		float(x + .5),
		float(y),
		float(z + .5)
	]);
	const rot = listOf(TAG.Float, [float(0), float(0)]);
	const motion = listOf(TAG.Float, [
		float(0),
		float(0),
		float(0)
	]);
	return encodeNbt({
		UniqueID: long(unique),
		identifier: str(type),
		Pos: pos,
		Rotation: rot,
		Motion: motion,
		Tags: listOf(TAG.String, []),
		Chested: byte(0),
		IsOrphaned: byte(0),
		Persistent: byte(1),
		UniqueID64: long(unique)
	});
}
async function exportMcworld(world, onProgress) {
	const warnings = [];
	onProgress?.({
		stage: "Building terrain",
		ratio: .05
	});
	const overlay = world.importMeta?.passthroughDb ? /* @__PURE__ */ new Map() : buildOverlay(world);
	const map = /* @__PURE__ */ new Map();
	if (world.preservedDb) for (const [hex, b64] of Object.entries(world.preservedDb)) map.set(hex, b64ToBytes(b64));
	const rewriteTerrain = !world.importMeta?.passthroughDb;
	if (world.importMeta?.passthroughDb) warnings.push("Original chunk database was copied through because terrain could not be decoded. Map edits were not written into chunks.");
	if (rewriteTerrain) {
		const region = exportRegion(world);
		if (world.virtual) warnings.push(`Map is ${world.width.toLocaleString("en-US")}×${world.depth.toLocaleString("en-US")}. Export writes a playable ${region.width}×${region.depth} region around spawn — a phone cannot open a full 16k / Earth 1:1 / 60 million block world.`);
		const c0x = Math.floor(region.originX / 16);
		const c0z = Math.floor(region.originZ / 16);
		const c1x = Math.floor((region.originX + region.width - 1) / 16);
		const c1z = Math.floor((region.originZ + region.depth - 1) / 16);
		const total = (c1x - c0x + 1) * (c1z - c0z + 1);
		let n = 0;
		for (let cz = c0z; cz <= c1z; cz++) for (let cx = c0x; cx <= c1x; cx++) {
			writeChunkRecords(map, cx, cz, (lx, y, lz) => {
				const wx = cx * 16 + lx;
				const wz = cz * 16 + lz;
				const gx = wx - world.originX;
				const gz = wz - world.originZ;
				const key = `${wx},${y},${wz}`;
				const ov = overlay.get(key);
				if (ov !== void 0) return editorBlockToName(ov);
				if (!inBounds(world, gx, gz)) return { name: "minecraft:air" };
				if (isCaveAt(world, wx, y, wz)) return { name: "minecraft:air" };
				const id = world.virtual ? stackColumn(readColumn(world, gx, gz), y, gx, gz) : columnBlock(world, gx, y, gz, void 0);
				if (id === 0) return { name: "minecraft:air" };
				if (id === 1) return { name: "minecraft:bedrock" };
				if (id === 56) return { name: "minecraft:deepslate" };
				if (id === 2) return { name: "minecraft:stone" };
				if (id === 8) return {
					name: "minecraft:water",
					states: { liquid_depth: 0 }
				};
				if (id === 5) return { name: "minecraft:sand" };
				if (id === 3) return { name: "minecraft:dirt" };
				if (id === 4) return {
					name: "minecraft:grass_block",
					states: { snowy: "false" }
				};
				return editorBlockToName(id);
			}, (lx, lz) => {
				const gx = cx * 16 + lx - world.originX;
				const gz = cz * 16 + lz - world.originZ;
				if (!inBounds(world, gx, gz)) return 1;
				return editorBiomeToBedrock(readColumn(world, gx, gz).biome);
			}, (lx, lz) => {
				const gx = cx * 16 + lx - world.originX;
				const gz = cz * 16 + lz - world.originZ;
				if (!inBounds(world, gx, gz)) return 64;
				const col = readColumn(world, gx, gz);
				return col.water ? Math.max(col.height, 63) : col.height;
			});
			n++;
			if (n % 8 === 0) onProgress?.({
				stage: "Writing chunks",
				ratio: .1 + n / total * .55
			});
			if (n % 32 === 0) await new Promise((r) => setTimeout(r, 0));
		}
	}
	onProgress?.({
		stage: "Entities & events",
		ratio: .72
	});
	putAscii(map, "mobevents", encodeMobEvents(world.settings.mobSpawning));
	if (world.entities.length) {
		warnings.push("Mob placements are written as chunk entity records. Bedrock 1.18+ also uses actorprefix IDs; some mobs may not appear until the chunk is refreshed. Natural spawning still follows your world settings.");
		const byChunk = /* @__PURE__ */ new Map();
		for (const e of world.entities) {
			const k = `${Math.floor(e.x / 16)},${Math.floor(e.z / 16)}`;
			const list = byChunk.get(k) ?? [];
			list.push(e);
			byChunk.set(k, list);
		}
		let uid = 10000n;
		for (const [k, list] of byChunk) {
			const [cx, cz] = k.split(",").map(Number);
			const parts = [];
			for (const e of list) parts.push(encodeActor(e.type, e.x, e.y, e.z, uid++));
			let len = 0;
			for (const p of parts) len += p.length;
			const all = new Uint8Array(len);
			let o = 0;
			for (const p of parts) {
				all.set(p, o);
				o += p.length;
			}
			const key = /* @__PURE__ */ new Uint8Array(9);
			const view = new DataView(key.buffer);
			view.setInt32(0, cx, true);
			view.setInt32(4, cz, true);
			key[8] = 50;
			map.set(keyToHex(key), all);
		}
	}
	onProgress?.({
		stage: "level.dat",
		ratio: .8
	});
	const levelDat = encodeLevelDat(world.settings, world.extraNbt);
	const db = writeLevelDb(map);
	onProgress?.({
		stage: "Packaging .mcworld",
		ratio: .9
	});
	const zip = new import_lib.default();
	zip.file("level.dat", levelDat);
	zip.file("level.dat_old", levelDat);
	zip.file("levelname.txt", world.settings.name + "\n");
	if (world.preservedFiles) for (const [rel, b64] of Object.entries(world.preservedFiles)) {
		if (rel === "level.dat" || rel === "level.dat_old" || rel === "levelname.txt") continue;
		if (rel.startsWith("db/")) continue;
		zip.file(rel, b64ToBytes(b64));
	}
	for (const [name, bytes] of Object.entries(db.files)) zip.file(`db/${name}`, bytes);
	const blob = await zip.generateAsync({
		type: "blob",
		compression: "DEFLATE",
		compressionOptions: { level: 6 },
		mimeType: "application/octet-stream"
	});
	onProgress?.({
		stage: "Done",
		ratio: 1
	});
	return {
		blob,
		bytes: blob.size,
		keyCount: db.keyCount,
		warnings
	};
}
function downloadBlob(blob, filename) {
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	document.body.appendChild(a);
	a.click();
	a.remove();
	setTimeout(() => URL.revokeObjectURL(url), 4e3);
}
function validateProject(world) {
	const checks = [];
	const push = (c) => checks.push(c);
	if (!world.settings.name.trim()) push({
		id: "name",
		label: "World name",
		level: "fail",
		detail: "The world needs a name before export."
	});
	else push({
		id: "name",
		label: "World name",
		level: "pass",
		detail: world.settings.name
	});
	const spawn = world.settings.spawn;
	const slx = spawn.x - world.originX;
	const slz = spawn.z - world.originZ;
	const col = slx >= 0 && slz >= 0 && slx < world.width && slz < world.depth ? readColumn(world, slx, slz) : null;
	if (!col || col.water) push({
		id: "spawn",
		label: "Spawn point",
		level: "fail",
		detail: `Spawn at ${spawn.x}, ${spawn.y}, ${spawn.z} is outside the map or in water/air. Move it onto solid terrain.`
	});
	else if (Math.abs(col.height + 1 - spawn.y) > 3) push({
		id: "spawn",
		label: "Spawn point",
		level: "warn",
		detail: `Spawn Y is ${spawn.y} but terrain height is ${col.height}. Export will keep your Y; the player may fall or spawn inside a block.`
	});
	else push({
		id: "spawn",
		label: "Spawn point",
		level: "pass",
		detail: `On solid ground at ${spawn.x}, ${spawn.y}, ${spawn.z}.`
	});
	if (world.width < 16 || world.depth < 16) push({
		id: "size",
		label: "Edit region",
		level: "fail",
		detail: "World must be at least 16×16 blocks (one chunk)."
	});
	else if (world.virtual) {
		const er = exportRegion(world);
		push({
			id: "size",
			label: "Map size",
			level: "pass",
			detail: `${fmtBlocks(world.width)}×${fmtBlocks(world.depth)} live map. .mcworld export writes ${er.width}×${er.depth} blocks around spawn so the file can open on a phone.`
		});
	} else if (world.width % 16 !== 0 || world.depth % 16 !== 0) push({
		id: "size",
		label: "Edit region",
		level: "warn",
		detail: "Width/depth are not multiples of 16. Extra columns will still export; neighboring vanilla generation may fill the rest."
	});
	else push({
		id: "size",
		label: "Edit region",
		level: "pass",
		detail: `${world.width}×${world.depth} blocks (${world.width * world.depth / 256} chunks).`
	});
	if (world.importMeta?.passthroughDb) push({
		id: "import",
		label: "Imported terrain",
		level: "warn",
		detail: "This world's chunk database could not be fully decoded in-browser. Settings and spawn will be rewritten; original chunks are copied byte-for-byte so they are not corrupted."
	});
	else if (world.importMeta) push({
		id: "import",
		label: "Imported terrain",
		level: "pass",
		detail: `Decoded ${world.importMeta.decodedChunks} of ${world.importMeta.chunkCount} overworld chunks in the edit window. ${world.importMeta.preservedKeys} other keys preserved (Nether/End/actors/etc).`
	});
	push({
		id: "nether",
		label: "Other dimensions",
		level: "pass",
		detail: "Nether and The End are not edited. Existing dimension data is preserved on import; new worlds generate them in-game."
	});
	if (world.entities.length) push({
		id: "entities",
		label: "Mobs",
		level: "warn",
		detail: `${world.entities.length} mob(s) placed. Written as legacy Entity records — Bedrock may ignore some until the chunk is refreshed. Natural spawn still follows difficulty / mob spawning.`
	});
	else push({
		id: "entities",
		label: "Mobs",
		level: "pass",
		detail: world.settings.mobSpawning ? "No custom placements. Natural spawning is on." : "No custom placements. Natural spawning is off."
	});
	push({
		id: "structures",
		label: "Structures",
		level: "pass",
		detail: `${world.structures.length} placed${world.structures.some((s) => s.realId) ? " (real cities and landmarks at published coordinates)" : ""}. These are block stamps (houses, pyramids, towers, etc.), not vanilla jigsaw villages — they will appear as built.`
	});
	push({
		id: "format",
		label: "Bedrock format",
		level: "pass",
		detail: "Export writes level.dat (header version 10 + little-endian NBT) and a real LevelDB (CURRENT, MANIFEST, WAL log) inside a ZIP. The file is a .mcworld, not a renamed dummy archive."
	});
	const fails = checks.filter((c) => c.level === "fail").length;
	return {
		ok: fails === 0,
		checks,
		canExport: fails === 0
	};
}
async function validateMcworldBlob(blob) {
	const checks = [];
	const zip = await import_lib.default.loadAsync(blob);
	const names = Object.keys(zip.files);
	if (!names.some((n) => n.replace(/\\/g, "/").endsWith("level.dat"))) checks.push({
		id: "zip-level",
		label: "level.dat present",
		level: "fail",
		detail: "Archive is missing level.dat."
	});
	else checks.push({
		id: "zip-level",
		label: "level.dat present",
		level: "pass",
		detail: "Found."
	});
	const levelName = names.find((n) => n.replace(/\\/g, "/").endsWith("level.dat"));
	if (levelName) try {
		const bytes = await zip.file(levelName).async("uint8array");
		const decoded = decodeLevelDat(bytes);
		decodeNbt(bytes.subarray(8, 8 + decoded.nbtLength));
		if (decoded.headerVersion !== 8 && decoded.headerVersion !== 9 && decoded.headerVersion !== 10) checks.push({
			id: "header",
			label: "level.dat header",
			level: "warn",
			detail: `Storage version ${decoded.headerVersion} (expected 8–10). Mobile may still open it.`
		});
		else checks.push({
			id: "header",
			label: "level.dat header",
			level: "pass",
			detail: `Version ${decoded.headerVersion}, NBT ${decoded.nbtLength} bytes, name “${decoded.settings.name}”.`
		});
		if (!decoded.settings.name) checks.push({
			id: "levelname",
			label: "Level name",
			level: "fail",
			detail: "Empty LevelName."
		});
	} catch (err) {
		checks.push({
			id: "header",
			label: "level.dat parse",
			level: "fail",
			detail: err instanceof Error ? err.message : String(err)
		});
	}
	const dbFiles = {};
	for (const n of names) {
		const rel = n.replace(/\\/g, "/");
		const idx = rel.lastIndexOf("db/");
		if (idx >= 0 && !zip.files[n].dir) {
			const base = rel.slice(idx + 3);
			if (base) dbFiles[base] = await zip.file(n).async("uint8array");
		}
	}
	const hasCurrent = Object.keys(dbFiles).some((n) => n === "CURRENT" || n.endsWith("/CURRENT"));
	const hasManifest = Object.keys(dbFiles).some((n) => /MANIFEST/i.test(n));
	const hasLogOrTable = Object.keys(dbFiles).some((n) => /\.(log|ldb|sst)$/i.test(n));
	if (!hasCurrent || !hasManifest || !hasLogOrTable) checks.push({
		id: "db",
		label: "LevelDB files",
		level: "fail",
		detail: `db/ must contain CURRENT, MANIFEST, and at least one .log/.ldb. Found: ${Object.keys(dbFiles).join(", ") || "nothing"}.`
	});
	else checks.push({
		id: "db",
		label: "LevelDB files",
		level: "pass",
		detail: Object.keys(dbFiles).join(", ")
	});
	const db = readLevelDb(dbFiles);
	if (db.map.size === 0) checks.push({
		id: "keys",
		label: "Database keys",
		level: "fail",
		detail: "LevelDB opened but contains no keys. Minecraft would generate an empty world — this is not a packed terrain export."
	});
	else {
		let chunks = 0;
		let sub = 0;
		let versions = 0;
		for (const hex of db.map.keys()) {
			const p = parseChunkKey(hexToKey(hex));
			if (!p) continue;
			if (p.tag === 44) versions++;
			if (p.tag === 47) {
				sub++;
				if (!decodeSubchunkBlocks(db.map.get(hex))) checks.push({
					id: "subchunk",
					label: "Subchunk decode",
					level: "fail",
					detail: `Could not decode a subchunk we just wrote (cx=${p.cx} cz=${p.cz} y=${p.subY}). Export aborted as invalid.`
				});
			}
			if (p.tag === 43 || p.tag === 54) chunks++;
		}
		checks.push({
			id: "keys",
			label: "Database keys",
			level: "pass",
			detail: `${db.map.size} keys, ${versions} chunk versions, ${sub} subchunks.`
		});
	}
	const fails = checks.filter((c) => c.level === "fail").length;
	return {
		ok: fails === 0,
		checks,
		canExport: fails === 0
	};
}
/** Real cities (Natural Earth 50m populated places) and famous landmarks at published coordinates. */
var REAL_PLACES = [
	{
		name: "Abu Simbel Temples",
		country: "Egypt",
		lat: 22.3372,
		lon: 31.6258,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Ahu Tongariki Moai",
		country: "Chile",
		lat: -27.1258,
		lon: -109.2769,
		kind: "statue",
		group: "landmark"
	},
	{
		name: "Ajanta Caves",
		country: "India",
		lat: 20.5519,
		lon: 75.7033,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Alcatraz Island",
		country: "United States of America",
		lat: 37.827,
		lon: -122.423,
		kind: "castle",
		group: "landmark"
	},
	{
		name: "Alhambra",
		country: "Spain",
		lat: 37.176,
		lon: -3.5881,
		kind: "palace",
		group: "landmark"
	},
	{
		name: "Ambarchik",
		country: "Russia",
		lat: 69.651,
		lon: 162.3336,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Ancient Olympia",
		country: "Greece",
		lat: 37.6386,
		lon: 21.63,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Angkor Wat",
		country: "Cambodia",
		lat: 13.4125,
		lon: 103.8667,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Arc de Triomphe",
		country: "France",
		lat: 48.8738,
		lon: 2.295,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Arg-e Bam",
		country: "Iran",
		lat: 29.1167,
		lon: 58.3667,
		kind: "castle",
		group: "landmark"
	},
	{
		name: "Atomium",
		country: "Belgium",
		lat: 50.8949,
		lon: 4.3415,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Babylon",
		country: "Iraq",
		lat: 32.5425,
		lon: 44.4211,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Bagan Temples",
		country: "Myanmar",
		lat: 21.1717,
		lon: 94.8585,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Baiterek Tower",
		country: "Kazakhstan",
		lat: 51.1283,
		lon: 71.4305,
		kind: "tower",
		group: "landmark"
	},
	{
		name: "Belém Tower",
		country: "Portugal",
		lat: 38.6916,
		lon: -9.216,
		kind: "tower",
		group: "landmark"
	},
	{
		name: "Blue Mosque",
		country: "Turkey",
		lat: 41.0054,
		lon: 28.9768,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Borobudur",
		country: "Indonesia",
		lat: -7.6079,
		lon: 110.2038,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Bran Castle",
		country: "Romania",
		lat: 45.5156,
		lon: 25.3672,
		kind: "castle",
		group: "landmark"
	},
	{
		name: "Brandenburg Gate",
		country: "Germany",
		lat: 52.5163,
		lon: 13.3777,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Brooklyn Bridge",
		country: "United States of America",
		lat: 40.7061,
		lon: -73.9969,
		kind: "bridge",
		group: "landmark"
	},
	{
		name: "Buckingham Palace",
		country: "United Kingdom",
		lat: 51.5014,
		lon: -.1419,
		kind: "palace",
		group: "landmark"
	},
	{
		name: "Bulguksa",
		country: "South Korea",
		lat: 35.79,
		lon: 129.332,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Burj Al Arab",
		country: "United Arab Emirates",
		lat: 25.1412,
		lon: 55.1853,
		kind: "skyscraper",
		group: "landmark"
	},
	{
		name: "Burj Khalifa",
		country: "United Arab Emirates",
		lat: 25.1972,
		lon: 55.2744,
		kind: "skyscraper",
		group: "landmark"
	},
	{
		name: "CN Tower",
		country: "Canada",
		lat: 43.6426,
		lon: -79.3871,
		kind: "tower",
		group: "landmark"
	},
	{
		name: "Capitolio Havana",
		country: "Cuba",
		lat: 23.1353,
		lon: -82.3596,
		kind: "palace",
		group: "landmark"
	},
	{
		name: "Carthage Antonine Baths",
		country: "Tunisia",
		lat: 36.8528,
		lon: 10.3236,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Charles Bridge",
		country: "Czechia",
		lat: 50.0865,
		lon: 14.4114,
		kind: "bridge",
		group: "landmark"
	},
	{
		name: "Charminar",
		country: "India",
		lat: 17.3616,
		lon: 78.4747,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Chichen Itza",
		country: "Mexico",
		lat: 20.6843,
		lon: -88.5678,
		kind: "pyramid",
		group: "landmark"
	},
	{
		name: "Christ the Redeemer",
		country: "Brazil",
		lat: -22.9519,
		lon: -43.2105,
		kind: "statue",
		group: "landmark"
	},
	{
		name: "Chrysler Building",
		country: "United States of America",
		lat: 40.7516,
		lon: -73.9755,
		kind: "skyscraper",
		group: "landmark"
	},
	{
		name: "Church of the Holy Sepulchre",
		country: "Israel",
		lat: 31.7784,
		lon: 35.2294,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Cologne Cathedral",
		country: "Germany",
		lat: 50.9413,
		lon: 6.9583,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Colosseum",
		country: "Italy",
		lat: 41.8902,
		lon: 12.4922,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Ctesiphon Arch",
		country: "Iraq",
		lat: 33.0936,
		lon: 44.5806,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Djinguereber Mosque",
		country: "Mali",
		lat: 16.7719,
		lon: -3.0094,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Dome of the Rock",
		country: "Israel",
		lat: 31.7781,
		lon: 35.2354,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Dubrovnik Walls",
		country: "Croatia",
		lat: 42.6407,
		lon: 18.1108,
		kind: "wall",
		group: "landmark"
	},
	{
		name: "Edinburgh Castle",
		country: "United Kingdom",
		lat: 55.9486,
		lon: -3.1999,
		kind: "castle",
		group: "landmark"
	},
	{
		name: "Eiffel Tower",
		country: "France",
		lat: 48.8584,
		lon: 2.2945,
		kind: "tower",
		group: "landmark"
	},
	{
		name: "Elizabeth Tower (Big Ben)",
		country: "United Kingdom",
		lat: 51.5007,
		lon: -.1246,
		kind: "tower",
		group: "landmark"
	},
	{
		name: "Empire State Building",
		country: "United States of America",
		lat: 40.7484,
		lon: -73.9857,
		kind: "skyscraper",
		group: "landmark"
	},
	{
		name: "Florence Cathedral",
		country: "Italy",
		lat: 43.7731,
		lon: 11.256,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Forbidden City",
		country: "China",
		lat: 39.9163,
		lon: 116.3972,
		kind: "palace",
		group: "landmark"
	},
	{
		name: "Fushimi Inari Shrine",
		country: "Japan",
		lat: 34.9671,
		lon: 135.7727,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Gateway Arch",
		country: "United States of America",
		lat: 38.6247,
		lon: -90.1848,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Gateway of India",
		country: "India",
		lat: 18.922,
		lon: 72.8347,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Giant's Causeway",
		country: "United Kingdom",
		lat: 55.2408,
		lon: -6.5116,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Golden Gate Bridge",
		country: "United States of America",
		lat: 37.8199,
		lon: -122.4783,
		kind: "bridge",
		group: "landmark"
	},
	{
		name: "Golden Temple",
		country: "India",
		lat: 31.62,
		lon: 74.8765,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Goreme Open Air Museum",
		country: "Turkey",
		lat: 38.6431,
		lon: 34.8289,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Grand Canyon South Rim",
		country: "United States of America",
		lat: 36.0544,
		lon: -112.1401,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Grand Palace Bangkok",
		country: "Thailand",
		lat: 13.75,
		lon: 100.4913,
		kind: "palace",
		group: "landmark"
	},
	{
		name: "Great Pyramid of Giza",
		country: "Egypt",
		lat: 29.9792,
		lon: 31.1342,
		kind: "pyramid",
		group: "landmark"
	},
	{
		name: "Great Sphinx of Giza",
		country: "Egypt",
		lat: 29.9753,
		lon: 31.1376,
		kind: "statue",
		group: "landmark"
	},
	{
		name: "Great Wall at Badaling",
		country: "China",
		lat: 40.3598,
		lon: 116.02,
		kind: "wall",
		group: "landmark"
	},
	{
		name: "Great Wall at Mutianyu",
		country: "China",
		lat: 40.4319,
		lon: 116.5704,
		kind: "wall",
		group: "landmark"
	},
	{
		name: "Great Zimbabwe",
		country: "Zimbabwe",
		lat: -20.2686,
		lon: 30.9334,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Gyeongbokgung Palace",
		country: "South Korea",
		lat: 37.5796,
		lon: 126.977,
		kind: "palace",
		group: "landmark"
	},
	{
		name: "Hagia Sophia",
		country: "Turkey",
		lat: 41.0086,
		lon: 28.9802,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Hampi Virupaksha Temple",
		country: "India",
		lat: 15.335,
		lon: 76.46,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Hassan II Mosque",
		country: "Morocco",
		lat: 33.6086,
		lon: -7.6327,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Heidelberg Castle",
		country: "Germany",
		lat: 49.4106,
		lon: 8.7153,
		kind: "castle",
		group: "landmark"
	},
	{
		name: "Himeji Castle",
		country: "Japan",
		lat: 34.8394,
		lon: 134.6939,
		kind: "castle",
		group: "landmark"
	},
	{
		name: "Hiroshima Peace Memorial",
		country: "Japan",
		lat: 34.3955,
		lon: 132.4536,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Hollywood Sign",
		country: "United States of America",
		lat: 34.1341,
		lon: -118.3215,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Hoover Dam",
		country: "United States of America",
		lat: 36.016,
		lon: -114.7378,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Hungarian Parliament",
		country: "Hungary",
		lat: 47.5071,
		lon: 19.0457,
		kind: "palace",
		group: "landmark"
	},
	{
		name: "Iguazu Falls",
		country: "Argentina",
		lat: -25.6953,
		lon: -54.4367,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Imam Reza Shrine",
		country: "Iran",
		lat: 36.2879,
		lon: 59.6155,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Imperial City Hue",
		country: "Vietnam",
		lat: 16.4697,
		lon: 107.5776,
		kind: "palace",
		group: "landmark"
	},
	{
		name: "Independence Hall",
		country: "United States of America",
		lat: 39.9489,
		lon: -75.15,
		kind: "palace",
		group: "landmark"
	},
	{
		name: "India Gate",
		country: "India",
		lat: 28.6129,
		lon: 77.2295,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Itsukushima Shrine",
		country: "Japan",
		lat: 34.296,
		lon: 132.3198,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Jeronimos Monastery",
		country: "Portugal",
		lat: 38.6978,
		lon: -9.2067,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Kaaba",
		country: "Saudi Arabia",
		lat: 21.4225,
		lon: 39.8262,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Kalyan Minaret",
		country: "Uzbekistan",
		lat: 39.7756,
		lon: 64.4156,
		kind: "tower",
		group: "landmark"
	},
	{
		name: "Karnak Temple",
		country: "Egypt",
		lat: 25.7188,
		lon: 32.6573,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Kennedy Space Center",
		country: "United States of America",
		lat: 28.5729,
		lon: -80.649,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Kilimanjaro",
		country: "Tanzania",
		lat: -3.0674,
		lon: 37.3556,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Kinderdijk Windmills",
		country: "Netherlands",
		lat: 51.8826,
		lon: 4.6497,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Kingdom Centre",
		country: "Saudi Arabia",
		lat: 24.7114,
		lon: 46.6743,
		kind: "skyscraper",
		group: "landmark"
	},
	{
		name: "Kiyomizu-dera",
		country: "Japan",
		lat: 34.9949,
		lon: 135.785,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Koutoubia Mosque",
		country: "Morocco",
		lat: 31.6248,
		lon: -7.9939,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Krak des Chevaliers",
		country: "Syria",
		lat: 34.757,
		lon: 36.2946,
		kind: "castle",
		group: "landmark"
	},
	{
		name: "Leaning Tower of Pisa",
		country: "Italy",
		lat: 43.723,
		lon: 10.3966,
		kind: "tower",
		group: "landmark"
	},
	{
		name: "Leptis Magna",
		country: "Libya",
		lat: 32.6381,
		lon: 14.2931,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Leshan Giant Buddha",
		country: "China",
		lat: 29.5449,
		lon: 103.7733,
		kind: "statue",
		group: "landmark"
	},
	{
		name: "Library of Alexandria (Bibliotheca)",
		country: "Egypt",
		lat: 31.2089,
		lon: 29.9092,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Library of Celsus, Ephesus",
		country: "Turkey",
		lat: 37.9391,
		lon: 27.3406,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Lincoln Memorial",
		country: "United States of America",
		lat: 38.8893,
		lon: -77.0502,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Lotus Temple",
		country: "India",
		lat: 28.5535,
		lon: 77.2588,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Louvre Museum",
		country: "France",
		lat: 48.8606,
		lon: 2.3376,
		kind: "palace",
		group: "landmark"
	},
	{
		name: "Luxor Temple",
		country: "Egypt",
		lat: 25.6995,
		lon: 32.6391,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Machu Picchu",
		country: "Peru",
		lat: -13.1631,
		lon: -72.545,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Marina Bay Sands",
		country: "Singapore",
		lat: 1.2834,
		lon: 103.8607,
		kind: "skyscraper",
		group: "landmark"
	},
	{
		name: "Masada",
		country: "Israel",
		lat: 31.3156,
		lon: 35.3539,
		kind: "castle",
		group: "landmark"
	},
	{
		name: "Matterhorn",
		country: "Switzerland",
		lat: 45.9763,
		lon: 7.6586,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "McMurdo Station",
		country: "Antarctica",
		lat: -77.8419,
		lon: 166.6863,
		kind: "village",
		group: "landmark"
	},
	{
		name: "Meenakshi Temple",
		country: "India",
		lat: 9.9195,
		lon: 78.1193,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Mezquita of Córdoba",
		country: "Spain",
		lat: 37.879,
		lon: -4.7794,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Milan Cathedral",
		country: "Italy",
		lat: 45.4641,
		lon: 9.1919,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Mont-Saint-Michel",
		country: "France",
		lat: 48.636,
		lon: -1.5115,
		kind: "castle",
		group: "landmark"
	},
	{
		name: "Moscow Kremlin",
		country: "Russia",
		lat: 55.752,
		lon: 37.6175,
		kind: "castle",
		group: "landmark"
	},
	{
		name: "Mount Fuji",
		country: "Japan",
		lat: 35.3606,
		lon: 138.7274,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Mount Rushmore",
		country: "United States of America",
		lat: 43.8791,
		lon: -103.4591,
		kind: "statue",
		group: "landmark"
	},
	{
		name: "Mount Vesuvius",
		country: "Italy",
		lat: 40.8224,
		lon: 14.4289,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "N Seoul Tower",
		country: "South Korea",
		lat: 37.5512,
		lon: 126.9882,
		kind: "tower",
		group: "landmark"
	},
	{
		name: "Naqsh-e Jahan Square",
		country: "Iran",
		lat: 32.6573,
		lon: 51.6776,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "National Monument Jakarta",
		country: "Indonesia",
		lat: -6.1754,
		lon: 106.8272,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Nazca Lines",
		country: "Peru",
		lat: -14.739,
		lon: -75.13,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Neuschwanstein Castle",
		country: "Germany",
		lat: 47.5576,
		lon: 10.7498,
		kind: "castle",
		group: "landmark"
	},
	{
		name: "Niagara Falls",
		country: "United States of America",
		lat: 43.0828,
		lon: -79.0742,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Notre-Dame de Paris",
		country: "France",
		lat: 48.853,
		lon: 2.3499,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Obelisco de Buenos Aires",
		country: "Argentina",
		lat: -34.6037,
		lon: -58.3816,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "One World Trade Center",
		country: "United States of America",
		lat: 40.7127,
		lon: -74.0134,
		kind: "skyscraper",
		group: "landmark"
	},
	{
		name: "Oracle of Delphi",
		country: "Greece",
		lat: 38.4824,
		lon: 22.501,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Osaka Castle",
		country: "Japan",
		lat: 34.6873,
		lon: 135.5262,
		kind: "castle",
		group: "landmark"
	},
	{
		name: "Palace of Knossos",
		country: "Greece",
		lat: 35.2978,
		lon: 25.1631,
		kind: "palace",
		group: "landmark"
	},
	{
		name: "Palace of Versailles",
		country: "France",
		lat: 48.8049,
		lon: 2.1204,
		kind: "palace",
		group: "landmark"
	},
	{
		name: "Palace of the Popes, Avignon",
		country: "France",
		lat: 43.9508,
		lon: 4.8077,
		kind: "palace",
		group: "landmark"
	},
	{
		name: "Palenque",
		country: "Mexico",
		lat: 17.4838,
		lon: -92.0464,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Palm Jumeirah",
		country: "United Arab Emirates",
		lat: 25.1124,
		lon: 55.139,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Palmyra",
		country: "Syria",
		lat: 34.5508,
		lon: 38.2695,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Panama Canal Miraflores Locks",
		country: "Panama",
		lat: 9,
		lon: -79.59,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Pantheon",
		country: "Italy",
		lat: 41.8986,
		lon: 12.4769,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Park Güell",
		country: "Spain",
		lat: 41.4145,
		lon: 2.1527,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Parliament Hill Ottawa",
		country: "Canada",
		lat: 45.4236,
		lon: -75.7009,
		kind: "palace",
		group: "landmark"
	},
	{
		name: "Parthenon",
		country: "Greece",
		lat: 37.9715,
		lon: 23.7267,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Pena Palace",
		country: "Portugal",
		lat: 38.7876,
		lon: -9.3906,
		kind: "palace",
		group: "landmark"
	},
	{
		name: "Persepolis",
		country: "Iran",
		lat: 29.935,
		lon: 52.89,
		kind: "palace",
		group: "landmark"
	},
	{
		name: "Petra Treasury",
		country: "Jordan",
		lat: 30.3285,
		lon: 35.4444,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Petronas Towers",
		country: "Malaysia",
		lat: 3.1579,
		lon: 101.7116,
		kind: "skyscraper",
		group: "landmark"
	},
	{
		name: "Pompeii",
		country: "Italy",
		lat: 40.7497,
		lon: 14.4869,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Potala Palace",
		country: "China",
		lat: 29.6555,
		lon: 91.1172,
		kind: "palace",
		group: "landmark"
	},
	{
		name: "Prague Castle",
		country: "Czechia",
		lat: 50.0911,
		lon: 14.4016,
		kind: "castle",
		group: "landmark"
	},
	{
		name: "Prambanan",
		country: "Indonesia",
		lat: -7.752,
		lon: 110.4915,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Prophet's Mosque",
		country: "Saudi Arabia",
		lat: 24.4672,
		lon: 39.6112,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Pyramid of Khafre",
		country: "Egypt",
		lat: 29.9761,
		lon: 31.1308,
		kind: "pyramid",
		group: "landmark"
	},
	{
		name: "Pyramid of Menkaure",
		country: "Egypt",
		lat: 29.9725,
		lon: 31.1283,
		kind: "pyramid",
		group: "landmark"
	},
	{
		name: "Qutub Minar",
		country: "India",
		lat: 28.5244,
		lon: 77.1855,
		kind: "tower",
		group: "landmark"
	},
	{
		name: "Red Fort",
		country: "India",
		lat: 28.6562,
		lon: 77.241,
		kind: "castle",
		group: "landmark"
	},
	{
		name: "Registan",
		country: "Uzbekistan",
		lat: 39.6547,
		lon: 66.9756,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Reichstag",
		country: "Germany",
		lat: 52.5186,
		lon: 13.3762,
		kind: "palace",
		group: "landmark"
	},
	{
		name: "Rijksmuseum",
		country: "Netherlands",
		lat: 52.36,
		lon: 4.8852,
		kind: "palace",
		group: "landmark"
	},
	{
		name: "Rock-Hewn Churches of Lalibela",
		country: "Ethiopia",
		lat: 12.0319,
		lon: 39.0476,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Roman Forum",
		country: "Italy",
		lat: 41.8925,
		lon: 12.4853,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Sagrada Familia",
		country: "Spain",
		lat: 41.4036,
		lon: 2.1744,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Saint Basil's Cathedral",
		country: "Russia",
		lat: 55.7525,
		lon: 37.6231,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Saint Isaac's Cathedral",
		country: "Russia",
		lat: 59.9343,
		lon: 30.3062,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Santiago de Compostela Cathedral",
		country: "Spain",
		lat: 42.8806,
		lon: -8.5446,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Schönbrunn Palace",
		country: "Austria",
		lat: 48.1847,
		lon: 16.3122,
		kind: "palace",
		group: "landmark"
	},
	{
		name: "Senso-ji",
		country: "Japan",
		lat: 35.7148,
		lon: 139.7967,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Shanghai Tower",
		country: "China",
		lat: 31.2336,
		lon: 121.5055,
		kind: "skyscraper",
		group: "landmark"
	},
	{
		name: "Shwedagon Pagoda",
		country: "Myanmar",
		lat: 16.7983,
		lon: 96.1495,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Sigiriya",
		country: "Sri Lanka",
		lat: 7.957,
		lon: 80.7603,
		kind: "castle",
		group: "landmark"
	},
	{
		name: "Sistine Chapel",
		country: "Vatican",
		lat: 41.9029,
		lon: 12.4545,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Space Needle",
		country: "United States of America",
		lat: 47.6205,
		lon: -122.3493,
		kind: "tower",
		group: "landmark"
	},
	{
		name: "St. Mark's Basilica",
		country: "Italy",
		lat: 45.434,
		lon: 12.339,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "St. Paul's Cathedral",
		country: "United Kingdom",
		lat: 51.5138,
		lon: -.0984,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "St. Peter's Basilica",
		country: "Vatican",
		lat: 41.9022,
		lon: 12.4539,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "St. Stephen's Cathedral Vienna",
		country: "Austria",
		lat: 48.2085,
		lon: 16.3731,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Statue of Liberty",
		country: "United States of America",
		lat: 40.6892,
		lon: -74.0445,
		kind: "statue",
		group: "landmark"
	},
	{
		name: "Statue of Unity",
		country: "India",
		lat: 21.838,
		lon: 73.7191,
		kind: "statue",
		group: "landmark"
	},
	{
		name: "Step Pyramid of Djoser",
		country: "Egypt",
		lat: 29.8713,
		lon: 31.2164,
		kind: "pyramid",
		group: "landmark"
	},
	{
		name: "Stonehenge",
		country: "United Kingdom",
		lat: 51.1789,
		lon: -1.8262,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Sugarloaf Mountain",
		country: "Brazil",
		lat: -22.9494,
		lon: -43.1546,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Svalbard Global Seed Vault",
		country: "Norway",
		lat: 78.2357,
		lon: 15.4913,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Sydney Harbour Bridge",
		country: "Australia",
		lat: -33.8523,
		lon: 151.2108,
		kind: "bridge",
		group: "landmark"
	},
	{
		name: "Sydney Opera House",
		country: "Australia",
		lat: -33.8568,
		lon: 151.2153,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Table Mountain",
		country: "South Africa",
		lat: -33.9628,
		lon: 18.4098,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Taipei 101",
		country: "Taiwan",
		lat: 25.034,
		lon: 121.5645,
		kind: "skyscraper",
		group: "landmark"
	},
	{
		name: "Taj Mahal",
		country: "India",
		lat: 27.1751,
		lon: 78.0421,
		kind: "palace",
		group: "landmark"
	},
	{
		name: "Tanah Lot",
		country: "Indonesia",
		lat: -8.6212,
		lon: 115.0868,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Temple of Heaven",
		country: "China",
		lat: 39.8822,
		lon: 116.4066,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Temple of Olympian Zeus",
		country: "Greece",
		lat: 37.9693,
		lon: 23.7331,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Temple of the Tooth",
		country: "Sri Lanka",
		lat: 7.2936,
		lon: 80.6413,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Templo Mayor",
		country: "Mexico",
		lat: 19.4346,
		lon: -99.1319,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Teotihuacan Pyramid of the Sun",
		country: "Mexico",
		lat: 19.6925,
		lon: -98.8438,
		kind: "pyramid",
		group: "landmark"
	},
	{
		name: "Terracotta Army",
		country: "China",
		lat: 34.3848,
		lon: 109.2734,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "The Alamo",
		country: "United States of America",
		lat: 29.4259,
		lon: -98.4861,
		kind: "castle",
		group: "landmark"
	},
	{
		name: "Tikal Temple IV",
		country: "Guatemala",
		lat: 17.222,
		lon: -89.6237,
		kind: "pyramid",
		group: "landmark"
	},
	{
		name: "Todai-ji",
		country: "Japan",
		lat: 34.6889,
		lon: 135.8398,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Tokyo Skytree",
		country: "Japan",
		lat: 35.7101,
		lon: 139.8107,
		kind: "skyscraper",
		group: "landmark"
	},
	{
		name: "Tokyo Tower",
		country: "Japan",
		lat: 35.6586,
		lon: 139.7454,
		kind: "tower",
		group: "landmark"
	},
	{
		name: "Tower Bridge",
		country: "United Kingdom",
		lat: 51.5055,
		lon: -.0754,
		kind: "bridge",
		group: "landmark"
	},
	{
		name: "Tower of London",
		country: "United Kingdom",
		lat: 51.5081,
		lon: -.0759,
		kind: "castle",
		group: "landmark"
	},
	{
		name: "Trevi Fountain",
		country: "Italy",
		lat: 41.9009,
		lon: 12.4833,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Uluru",
		country: "Australia",
		lat: -25.3444,
		lon: 131.0369,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "United States Capitol",
		country: "United States of America",
		lat: 38.8899,
		lon: -77.0091,
		kind: "palace",
		group: "landmark"
	},
	{
		name: "Varanasi Ghats",
		country: "India",
		lat: 25.3109,
		lon: 83.0104,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Victoria Falls",
		country: "Zambia",
		lat: -17.9243,
		lon: 25.8572,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Washington Monument",
		country: "United States of America",
		lat: 38.8895,
		lon: -77.0353,
		kind: "monument",
		group: "landmark"
	},
	{
		name: "Wat Arun",
		country: "Thailand",
		lat: 13.7437,
		lon: 100.4887,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Wat Pho",
		country: "Thailand",
		lat: 13.7466,
		lon: 100.4927,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "Wawel Castle",
		country: "Poland",
		lat: 50.0547,
		lon: 19.9353,
		kind: "castle",
		group: "landmark"
	},
	{
		name: "Western Wall",
		country: "Israel",
		lat: 31.7767,
		lon: 35.2345,
		kind: "wall",
		group: "landmark"
	},
	{
		name: "Westminster Abbey",
		country: "United Kingdom",
		lat: 51.4993,
		lon: -.1273,
		kind: "temple",
		group: "landmark"
	},
	{
		name: "White House",
		country: "United States of America",
		lat: 38.8977,
		lon: -77.0365,
		kind: "palace",
		group: "landmark"
	},
	{
		name: "Willis Tower",
		country: "United States of America",
		lat: 41.8789,
		lon: -87.6359,
		kind: "skyscraper",
		group: "landmark"
	},
	{
		name: "Winter Palace / Hermitage",
		country: "Russia",
		lat: 59.9398,
		lon: 30.3146,
		kind: "palace",
		group: "landmark"
	},
	{
		name: "Yellow Crane Tower",
		country: "China",
		lat: 30.5451,
		lon: 114.2952,
		kind: "tower",
		group: "landmark"
	},
	{
		name: "Ziggurat of Ur",
		country: "Iraq",
		lat: 30.9625,
		lon: 46.1031,
		kind: "pyramid",
		group: "landmark"
	},
	{
		name: "Abidjan",
		country: "Ivory Coast",
		lat: 5.3219,
		lon: -4.042,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Abu Dhabi",
		country: "United Arab Emirates",
		lat: 24.4667,
		lon: 54.3666,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Abuja",
		country: "Nigeria",
		lat: 9.0853,
		lon: 7.5314,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Accra",
		country: "Ghana",
		lat: 5.552,
		lon: -.2187,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Addis Ababa",
		country: "Ethiopia",
		lat: 9.0353,
		lon: 38.6981,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Algiers",
		country: "Algeria",
		lat: 36.765,
		lon: 3.0486,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Amman",
		country: "Jordan",
		lat: 31.952,
		lon: 35.9314,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Amsterdam",
		country: "Netherlands",
		lat: 52.3519,
		lon: 4.9147,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Andorra",
		country: "Andorra",
		lat: 42.5,
		lon: 1.5165,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Ankara",
		country: "Turkey",
		lat: 39.9292,
		lon: 32.8624,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Antananarivo",
		country: "Madagascar",
		lat: -18.9147,
		lon: 47.5147,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Apia",
		country: "Samoa",
		lat: -13.8415,
		lon: -171.7386,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Ashgabat",
		country: "Turkmenistan",
		lat: 37.95,
		lon: 58.3833,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Asmara",
		country: "Eritrea",
		lat: 15.3333,
		lon: 38.9333,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Astana",
		country: "Kazakhstan",
		lat: 51.1811,
		lon: 71.4278,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Asuncion",
		country: "Paraguay",
		lat: -25.2945,
		lon: -57.6435,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Athens",
		country: "Greece",
		lat: 37.9853,
		lon: 23.7314,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Baghdad",
		country: "Iraq",
		lat: 33.3406,
		lon: 44.3919,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Baguio City",
		country: "Philippines",
		lat: 16.43,
		lon: 120.5699,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Baku",
		country: "Azerbaijan",
		lat: 40.3972,
		lon: 49.8603,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Bamako",
		country: "Mali",
		lat: 12.652,
		lon: -8.002,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Bandar Seri Begawan",
		country: "Brunei",
		lat: 4.8833,
		lon: 114.9333,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Bangkok",
		country: "Thailand",
		lat: 13.7519,
		lon: 100.5147,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Bangui",
		country: "Central African Republic",
		lat: 4.3666,
		lon: 18.5583,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Banjul",
		country: "The Gambia",
		lat: 13.4539,
		lon: -16.5917,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Basseterre",
		country: "Saint Kitts and Nevis",
		lat: 17.302,
		lon: -62.717,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Beijing",
		country: "China",
		lat: 39.9308,
		lon: 116.3863,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Beirut",
		country: "Lebanon",
		lat: 33.8739,
		lon: 35.5078,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Belgrade",
		country: "Serbia",
		lat: 44.8206,
		lon: 20.466,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Belmopan",
		country: "Belize",
		lat: 17.252,
		lon: -88.7671,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Berlin",
		country: "Germany",
		lat: 52.5238,
		lon: 13.3996,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Bern",
		country: "Switzerland",
		lat: 46.9167,
		lon: 7.467,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Bir Lehlou",
		country: "Western Sahara",
		lat: 26.1192,
		lon: -9.6525,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Bishkek",
		country: "Kyrgyzstan",
		lat: 42.875,
		lon: 74.5833,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Bissau",
		country: "Guinea Bissau",
		lat: 11.865,
		lon: -15.5984,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Bloemfontein",
		country: "South Africa",
		lat: -29.12,
		lon: 26.2299,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Bogota",
		country: "Colombia",
		lat: 4.5984,
		lon: -74.0853,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Brasilia",
		country: "Brazil",
		lat: -15.7814,
		lon: -47.918,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Bratislava",
		country: "Slovakia",
		lat: 48.15,
		lon: 17.117,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Brazzaville",
		country: "Congo (Brazzaville)",
		lat: -4.2572,
		lon: 15.2827,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Bridgetown",
		country: "Barbados",
		lat: 13.102,
		lon: -59.6165,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Brussels",
		country: "Belgium",
		lat: 50.8353,
		lon: 4.3314,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Bucharest",
		country: "Romania",
		lat: 44.4353,
		lon: 26.098,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Budapest",
		country: "Hungary",
		lat: 47.502,
		lon: 19.0814,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Buenos Aires",
		country: "Argentina",
		lat: -34.6006,
		lon: -58.3995,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Bujumbura",
		country: "Burundi",
		lat: -3.3761,
		lon: 29.36,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Cairo",
		country: "Egypt",
		lat: 30.0519,
		lon: 31.248,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Canberra",
		country: "Australia",
		lat: -35.283,
		lon: 149.129,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Cape Town",
		country: "South Africa",
		lat: -33.9181,
		lon: 18.433,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Caracas",
		country: "Venezuela",
		lat: 10.5029,
		lon: -66.919,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Castries",
		country: "Saint Lucia",
		lat: 14.002,
		lon: -61,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Chisinau",
		country: "Moldova",
		lat: 47.005,
		lon: 28.8577,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Colombo",
		country: "Sri Lanka",
		lat: 6.932,
		lon: 79.8578,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Conakry",
		country: "Guinea",
		lat: 9.5335,
		lon: -13.6822,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Cotonou",
		country: "Benin",
		lat: 6.402,
		lon: 2.518,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Dakar",
		country: "Senegal",
		lat: 14.7178,
		lon: -17.4751,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Damascus",
		country: "Syria",
		lat: 33.502,
		lon: 36.2981,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Dar es Salaam",
		country: "Tanzania",
		lat: -6.7981,
		lon: 39.2664,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Dhaka",
		country: "Bangladesh",
		lat: 23.725,
		lon: 90.4066,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Dili",
		country: "East Timor",
		lat: -8.5594,
		lon: 125.5795,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Djibouti",
		country: "Djibouti",
		lat: 11.595,
		lon: 43.148,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Dodoma",
		country: "Tanzania",
		lat: -6.1833,
		lon: 35.75,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Doha",
		country: "Qatar",
		lat: 25.2866,
		lon: 51.533,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Dublin",
		country: "Ireland",
		lat: 53.335,
		lon: -6.2509,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Dushanbe",
		country: "Tajikistan",
		lat: 38.56,
		lon: 68.7739,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Freetown",
		country: "Sierra Leone",
		lat: 8.472,
		lon: -13.2362,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Funafuti",
		country: "Tuvalu",
		lat: -8.5167,
		lon: 179.2166,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Gaborone",
		country: "Botswana",
		lat: -24.6463,
		lon: 25.9119,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Georgetown",
		country: "Guyana",
		lat: 6.802,
		lon: -58.167,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Guatemala",
		country: "Guatemala",
		lat: 14.6231,
		lon: -90.5289,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Hanoi",
		country: "Vietnam",
		lat: 21.0353,
		lon: 105.8481,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Harare",
		country: "Zimbabwe",
		lat: -17.8158,
		lon: 31.0428,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Hargeysa",
		country: "Somaliland",
		lat: 9.56,
		lon: 44.0653,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Havana",
		country: "Cuba",
		lat: 23.1339,
		lon: -82.3661,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Helsinki",
		country: "Finland",
		lat: 60.1775,
		lon: 24.9322,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Honiara",
		country: "Solomon Islands",
		lat: -9.438,
		lon: 159.9498,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Islamabad",
		country: "Pakistan",
		lat: 33.7019,
		lon: 73.1647,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Jakarta",
		country: "Indonesia",
		lat: -6.1725,
		lon: 106.8275,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Jerusalem",
		country: "Israel",
		lat: 31.7784,
		lon: 35.2066,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Johannesburg",
		country: "South Africa",
		lat: -26.1681,
		lon: 28.0281,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Juba",
		country: "South Sudan",
		lat: 4.83,
		lon: 31.58,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Kabul",
		country: "Afghanistan",
		lat: 34.5186,
		lon: 69.1813,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Kampala",
		country: "Uganda",
		lat: .3186,
		lon: 32.5814,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Kathmandu",
		country: "Nepal",
		lat: 27.7186,
		lon: 85.3147,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Khartoum",
		country: "Sudan",
		lat: 15.59,
		lon: 32.5322,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Kiev",
		country: "Ukraine",
		lat: 50.4353,
		lon: 30.5147,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Kigali",
		country: "Rwanda",
		lat: -1.9516,
		lon: 30.0586,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Kingston",
		country: "Jamaica",
		lat: 17.9771,
		lon: -76.7674,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Kingstown",
		country: "Saint Vincent and the Grenadines",
		lat: 13.1483,
		lon: -61.2121,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Kinshasa",
		country: "Congo (Kinshasa)",
		lat: -4.3278,
		lon: 15.313,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Kobenhavn",
		country: "Denmark",
		lat: 55.6805,
		lon: 12.5615,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Kuala Lumpur",
		country: "Malaysia",
		lat: 3.1686,
		lon: 101.698,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Kuwait City",
		country: "Kuwait",
		lat: 29.3717,
		lon: 47.9764,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Kyoto",
		country: "Japan",
		lat: 35.0319,
		lon: 135.7481,
		kind: "capital",
		group: "capital"
	},
	{
		name: "La Paz",
		country: "Bolivia",
		lat: -16.496,
		lon: -68.1519,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Laayoune",
		country: "Morocco",
		lat: 27.15,
		lon: -13.2,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Lagos",
		country: "Nigeria",
		lat: 6.4452,
		lon: 3.3896,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Libreville",
		country: "Gabon",
		lat: .3854,
		lon: 9.458,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Lilongwe",
		country: "Malawi",
		lat: -13.9833,
		lon: 33.7833,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Lima",
		country: "Peru",
		lat: -12.0461,
		lon: -77.052,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Lisbon",
		country: "Portugal",
		lat: 38.7247,
		lon: -9.1468,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Ljubljana",
		country: "Slovenia",
		lat: 46.0553,
		lon: 14.515,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Lobamba",
		country: "eSwatini",
		lat: -26.4667,
		lon: 31.2,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Lome",
		country: "Togo",
		lat: 6.1339,
		lon: 1.2208,
		kind: "capital",
		group: "capital"
	},
	{
		name: "London",
		country: "United Kingdom",
		lat: 51.5019,
		lon: -.1187,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Luanda",
		country: "Angola",
		lat: -8.8363,
		lon: 13.2325,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Lusaka",
		country: "Zambia",
		lat: -15.4147,
		lon: 28.2814,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Luxembourg",
		country: "Luxembourg",
		lat: 49.6117,
		lon: 6.13,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Madrid",
		country: "Spain",
		lat: 40.402,
		lon: -3.6853,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Majuro",
		country: "Marshall Islands",
		lat: 7.103,
		lon: 171.38,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Malabo",
		country: "Equatorial Guinea",
		lat: 3.75,
		lon: 8.7833,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Male",
		country: "Maldives",
		lat: 4.1667,
		lon: 73.4999,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Managua",
		country: "Nicaragua",
		lat: 12.155,
		lon: -86.2704,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Manama",
		country: "Bahrain",
		lat: 26.2361,
		lon: 50.5831,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Manila",
		country: "Philippines",
		lat: 14.6061,
		lon: 120.9803,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Maputo",
		country: "Mozambique",
		lat: -25.9533,
		lon: 32.5872,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Maseru",
		country: "Lesotho",
		lat: -29.3167,
		lon: 27.4833,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Mbabane",
		country: "eSwatini",
		lat: -26.3167,
		lon: 31.1333,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Melekeok",
		country: "Palau",
		lat: 7.4874,
		lon: 134.6265,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Mexico City",
		country: "Mexico",
		lat: 19.4444,
		lon: -99.1329,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Minsk",
		country: "Belarus",
		lat: 53.9019,
		lon: 27.5647,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Mogadishu",
		country: "Somalia",
		lat: 2.0686,
		lon: 45.3647,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Monaco",
		country: "Monaco",
		lat: 43.7396,
		lon: 7.4069,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Monrovia",
		country: "Liberia",
		lat: 6.3146,
		lon: -10.7997,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Montevideo",
		country: "Uruguay",
		lat: -34.8561,
		lon: -56.173,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Moroni",
		country: "Comoros",
		lat: -11.7042,
		lon: 43.2402,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Moscow",
		country: "Russia",
		lat: 55.7541,
		lon: 37.6136,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Muscat",
		country: "Oman",
		lat: 23.6133,
		lon: 58.5933,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Nairobi",
		country: "Kenya",
		lat: -1.2814,
		lon: 36.8147,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Nassau",
		country: "The Bahamas",
		lat: 25.0834,
		lon: -77.35,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Naypyidaw",
		country: "Myanmar",
		lat: 19.7685,
		lon: 96.1167,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Ndjamena",
		country: "Chad",
		lat: 12.115,
		lon: 15.0472,
		kind: "capital",
		group: "capital"
	},
	{
		name: "New Delhi",
		country: "India",
		lat: 28.6,
		lon: 77.2,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Niamey",
		country: "Niger",
		lat: 13.5187,
		lon: 2.1147,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Nicosia",
		country: "Cyprus",
		lat: 35.1667,
		lon: 33.3666,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Nouakchott",
		country: "Mauritania",
		lat: 18.0864,
		lon: -15.9753,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Nukualofa",
		country: "Tonga",
		lat: -21.1385,
		lon: -175.2206,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Oslo",
		country: "Norway",
		lat: 59.9186,
		lon: 10.748,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Ottawa",
		country: "Canada",
		lat: 45.4186,
		lon: -75.702,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Ouagadougou",
		country: "Burkina Faso",
		lat: 12.3723,
		lon: -1.5267,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Palikir",
		country: "Federated States of Micronesia",
		lat: 6.9166,
		lon: 158.15,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Panama City",
		country: "Panama",
		lat: 8.97,
		lon: -79.535,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Paramaribo",
		country: "Suriname",
		lat: 5.835,
		lon: -55.167,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Paris",
		country: "France",
		lat: 48.8686,
		lon: 2.3314,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Phnom Penh",
		country: "Cambodia",
		lat: 11.552,
		lon: 104.9147,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Podgorica",
		country: "Montenegro",
		lat: 42.466,
		lon: 19.2663,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Port Louis",
		country: "Mauritius",
		lat: -20.1666,
		lon: 57.5,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Port Moresby",
		country: "Papua New Guinea",
		lat: -9.4647,
		lon: 147.1925,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Port Vila",
		country: "Vanuatu",
		lat: -17.7334,
		lon: 168.3166,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Port-au-Prince",
		country: "Haiti",
		lat: 18.543,
		lon: -72.338,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Port-of-Spain",
		country: "Trinidad and Tobago",
		lat: 10.652,
		lon: -61.517,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Porto-Novo",
		country: "Benin",
		lat: 6.4833,
		lon: 2.6166,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Prague",
		country: "Czechia",
		lat: 50.0853,
		lon: 14.464,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Praia",
		country: "Cape Verde",
		lat: 14.9167,
		lon: -23.5167,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Pretoria",
		country: "South Africa",
		lat: -25.705,
		lon: 28.2275,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Pristina",
		country: "Kosovo",
		lat: 42.6667,
		lon: 21.166,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Putrajaya",
		country: "Malaysia",
		lat: 2.914,
		lon: 101.7019,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Pyongyang",
		country: "North Korea",
		lat: 39.0214,
		lon: 125.7527,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Quito",
		country: "Ecuador",
		lat: -.213,
		lon: -78.502,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Rabat",
		country: "Morocco",
		lat: 34.0253,
		lon: -6.8364,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Rangoon",
		country: "Myanmar",
		lat: 16.7853,
		lon: 96.1647,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Reykjavik",
		country: "Iceland",
		lat: 64.15,
		lon: -21.95,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Riga",
		country: "Latvia",
		lat: 56.95,
		lon: 24.1,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Riyadh",
		country: "Saudi Arabia",
		lat: 24.6428,
		lon: 46.7708,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Rome",
		country: "Italy",
		lat: 41.8979,
		lon: 12.4813,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Roseau",
		country: "Dominica",
		lat: 15.301,
		lon: -61.387,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Saint George's",
		country: "Grenada",
		lat: 12.0526,
		lon: -61.7416,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Saint John's",
		country: "Antigua and Barbuda",
		lat: 17.118,
		lon: -61.85,
		kind: "capital",
		group: "capital"
	},
	{
		name: "San Jose",
		country: "Costa Rica",
		lat: 9.937,
		lon: -84.086,
		kind: "capital",
		group: "capital"
	},
	{
		name: "San Marino",
		country: "San Marino",
		lat: 43.9361,
		lon: 12.4418,
		kind: "capital",
		group: "capital"
	},
	{
		name: "San Salvador",
		country: "El Salvador",
		lat: 13.7119,
		lon: -89.205,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Sanaa",
		country: "Yemen",
		lat: 15.3567,
		lon: 44.2046,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Santiago",
		country: "Chile",
		lat: -33.4481,
		lon: -70.669,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Santo Domingo",
		country: "Dominican Republic",
		lat: 18.472,
		lon: -69.902,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Sao Tome",
		country: "Sao Tome and Principe",
		lat: .3334,
		lon: 6.7333,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Sarajevo",
		country: "Bosnia and Herzegovina",
		lat: 43.85,
		lon: 18.383,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Seoul",
		country: "South Korea",
		lat: 37.5683,
		lon: 126.9978,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Singapore",
		country: "Singapore",
		lat: 1.295,
		lon: 103.8539,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Skopje",
		country: "North Macedonia",
		lat: 42,
		lon: 21.4335,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Sofia",
		country: "Bulgaria",
		lat: 42.6853,
		lon: 23.3147,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Sri Jawewardenepura Kotte",
		country: "Sri Lanka",
		lat: 6.9,
		lon: 79.95,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Stockholm",
		country: "Sweden",
		lat: 59.3527,
		lon: 18.0954,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Sucre",
		country: "Bolivia",
		lat: -19.041,
		lon: -65.2595,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Suva",
		country: "Fiji",
		lat: -18.133,
		lon: 178.4417,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Taipei",
		country: "Taiwan",
		lat: 25.0358,
		lon: 121.5683,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Tallinn",
		country: "Estonia",
		lat: 59.4339,
		lon: 24.728,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Tarawa",
		country: "Kiribati",
		lat: 1.3382,
		lon: 173.0176,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Tashkent",
		country: "Uzbekistan",
		lat: 41.3136,
		lon: 69.293,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Tbilisi",
		country: "Georgia",
		lat: 41.727,
		lon: 44.7888,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Tegucigalpa",
		country: "Honduras",
		lat: 14.104,
		lon: -87.2195,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Tehran",
		country: "Iran",
		lat: 35.6739,
		lon: 51.4224,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Tel Aviv-Yafo",
		country: "Israel",
		lat: 32.0819,
		lon: 34.7681,
		kind: "capital",
		group: "capital"
	},
	{
		name: "The Hague",
		country: "Netherlands",
		lat: 52.08,
		lon: 4.27,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Thimphu",
		country: "Bhutan",
		lat: 27.473,
		lon: 89.639,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Tirana",
		country: "Albania",
		lat: 41.3275,
		lon: 19.8189,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Tokyo",
		country: "Japan",
		lat: 35.687,
		lon: 139.7495,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Tripoli",
		country: "Libya",
		lat: 32.8925,
		lon: 13.18,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Tunis",
		country: "Tunisia",
		lat: 36.8028,
		lon: 10.1797,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Ulaanbaatar",
		country: "Mongolia",
		lat: 47.9186,
		lon: 106.9147,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Vaduz",
		country: "Liechtenstein",
		lat: 47.1337,
		lon: 9.5167,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Valletta",
		country: "Malta",
		lat: 35.8997,
		lon: 14.5147,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Valparaiso",
		country: "Chile",
		lat: -33.0458,
		lon: -71.623,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Vatican City",
		country: "Vatican",
		lat: 41.9033,
		lon: 12.4534,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Victoria",
		country: "Seychelles",
		lat: -4.6166,
		lon: 55.45,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Vienna",
		country: "Austria",
		lat: 48.202,
		lon: 16.3647,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Vientiane",
		country: "Laos",
		lat: 17.9667,
		lon: 102.6,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Vilnius",
		country: "Lithuania",
		lat: 54.6834,
		lon: 25.3166,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Warsaw",
		country: "Poland",
		lat: 52.2519,
		lon: 20.9981,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Washington, D.C.",
		country: "United States of America",
		lat: 38.9015,
		lon: -77.0114,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Wellington",
		country: "New Zealand",
		lat: -41.3,
		lon: 174.7833,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Windhoek",
		country: "Namibia",
		lat: -22.57,
		lon: 17.0835,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Yamoussoukro",
		country: "Ivory Coast",
		lat: 6.8184,
		lon: -5.2755,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Yaounde",
		country: "Cameroon",
		lat: 3.8686,
		lon: 11.5147,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Yerevan",
		country: "Armenia",
		lat: 40.1831,
		lon: 44.5116,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Zagreb",
		country: "Croatia",
		lat: 45.8,
		lon: 16,
		kind: "capital",
		group: "capital"
	},
	{
		name: "Abakan",
		country: "Russia",
		lat: 53.7037,
		lon: 91.445,
		kind: "city",
		group: "city"
	},
	{
		name: "Abeche",
		country: "Chad",
		lat: 13.84,
		lon: 20.83,
		kind: "city",
		group: "city"
	},
	{
		name: "Aboa Station",
		country: "Antarctica",
		lat: -75.0496,
		lon: -13.4167,
		kind: "village",
		group: "city"
	},
	{
		name: "Acapulco",
		country: "Mexico",
		lat: 16.85,
		lon: -99.916,
		kind: "city",
		group: "city"
	},
	{
		name: "Adana",
		country: "Turkey",
		lat: 36.9969,
		lon: 35.3181,
		kind: "city",
		group: "city"
	},
	{
		name: "Adelaide",
		country: "Australia",
		lat: -34.933,
		lon: 138.5981,
		kind: "city",
		group: "city"
	},
	{
		name: "Aden",
		country: "Yemen",
		lat: 12.7797,
		lon: 45.0095,
		kind: "city",
		group: "city"
	},
	{
		name: "Agadez",
		country: "Niger",
		lat: 16.9959,
		lon: 7.9828,
		kind: "city",
		group: "city"
	},
	{
		name: "Agana",
		country: "Guam",
		lat: 13.47,
		lon: 144.75,
		kind: "city",
		group: "city"
	},
	{
		name: "Agra",
		country: "India",
		lat: 27.1724,
		lon: 78.0131,
		kind: "village",
		group: "city"
	},
	{
		name: "Ahmedabad",
		country: "India",
		lat: 23.032,
		lon: 72.5781,
		kind: "city",
		group: "city"
	},
	{
		name: "Ahvaz",
		country: "Iran",
		lat: 31.2819,
		lon: 48.7181,
		kind: "city",
		group: "city"
	},
	{
		name: "Ajaccio",
		country: "France",
		lat: 41.9271,
		lon: 8.7283,
		kind: "city",
		group: "city"
	},
	{
		name: "Akola",
		country: "India",
		lat: 20.71,
		lon: 77.01,
		kind: "village",
		group: "city"
	},
	{
		name: "Al Jawf",
		country: "Libya",
		lat: 24.2,
		lon: 23.29,
		kind: "village",
		group: "city"
	},
	{
		name: "Albany",
		country: "Australia",
		lat: -35.0169,
		lon: 117.8916,
		kind: "village",
		group: "city"
	},
	{
		name: "Albuquerque",
		country: "United States of America",
		lat: 35.105,
		lon: -106.6413,
		kind: "village",
		group: "city"
	},
	{
		name: "Aldan",
		country: "Russia",
		lat: 58.603,
		lon: 125.3894,
		kind: "village",
		group: "city"
	},
	{
		name: "Aleppo",
		country: "Syria",
		lat: 36.2319,
		lon: 37.1681,
		kind: "city",
		group: "city"
	},
	{
		name: "Alexandria",
		country: "Egypt",
		lat: 31.202,
		lon: 29.948,
		kind: "city",
		group: "city"
	},
	{
		name: "Alice Springs",
		country: "Australia",
		lat: -23.701,
		lon: 133.88,
		kind: "city",
		group: "city"
	},
	{
		name: "Aligarh",
		country: "India",
		lat: 27.8942,
		lon: 78.0598,
		kind: "village",
		group: "city"
	},
	{
		name: "Allahabad",
		country: "India",
		lat: 25.4569,
		lon: 81.8381,
		kind: "village",
		group: "city"
	},
	{
		name: "Almaty",
		country: "Kazakhstan",
		lat: 43.3269,
		lon: 76.9131,
		kind: "city",
		group: "city"
	},
	{
		name: "Alta Floresta",
		country: "Brazil",
		lat: -9.9,
		lon: -55.91,
		kind: "village",
		group: "city"
	},
	{
		name: "Altay",
		country: "China",
		lat: 47.8666,
		lon: 88.1166,
		kind: "village",
		group: "city"
	},
	{
		name: "Alvorada",
		country: "Brazil",
		lat: -12.47,
		lon: -49.082,
		kind: "village",
		group: "city"
	},
	{
		name: "Amaravati",
		country: "India",
		lat: 16.5337,
		lon: 80.5243,
		kind: "city",
		group: "city"
	},
	{
		name: "Amarillo",
		country: "United States of America",
		lat: 35.23,
		lon: -101.83,
		kind: "village",
		group: "city"
	},
	{
		name: "Ambon",
		country: "Indonesia",
		lat: -3.7167,
		lon: 128.2,
		kind: "city",
		group: "city"
	},
	{
		name: "Amiens",
		country: "France",
		lat: 49.9004,
		lon: 2.3,
		kind: "city",
		group: "city"
	},
	{
		name: "Amritsar",
		country: "India",
		lat: 31.6419,
		lon: 74.868,
		kind: "city",
		group: "city"
	},
	{
		name: "AmundseniScott South Pole Station",
		country: "Antarctica",
		lat: -90,
		lon: 176.9945,
		kind: "village",
		group: "city"
	},
	{
		name: "An Najaf",
		country: "Iraq",
		lat: 32.0003,
		lon: 44.3354,
		kind: "city",
		group: "city"
	},
	{
		name: "Anadyr",
		country: "Russia",
		lat: 64.737,
		lon: 177.475,
		kind: "city",
		group: "city"
	},
	{
		name: "Anchorage",
		country: "United States of America",
		lat: 61.22,
		lon: -149.9002,
		kind: "city",
		group: "city"
	},
	{
		name: "Ancona",
		country: "Italy",
		lat: 43.6004,
		lon: 13.4999,
		kind: "city",
		group: "city"
	},
	{
		name: "Andijon",
		country: "Uzbekistan",
		lat: 40.79,
		lon: 72.34,
		kind: "city",
		group: "city"
	},
	{
		name: "Angarsk",
		country: "Russia",
		lat: 52.56,
		lon: 103.92,
		kind: "village",
		group: "city"
	},
	{
		name: "Ankang",
		country: "China",
		lat: 32.68,
		lon: 109.02,
		kind: "village",
		group: "city"
	},
	{
		name: "Annaba",
		country: "Algeria",
		lat: 36.92,
		lon: 7.76,
		kind: "city",
		group: "city"
	},
	{
		name: "Anshan",
		country: "China",
		lat: 41.117,
		lon: 122.9381,
		kind: "village",
		group: "city"
	},
	{
		name: "Antofagasta",
		country: "Chile",
		lat: -23.65,
		lon: -70.4,
		kind: "city",
		group: "city"
	},
	{
		name: "Antsiranana",
		country: "Madagascar",
		lat: -12.2765,
		lon: 49.3115,
		kind: "city",
		group: "city"
	},
	{
		name: "Aosta",
		country: "Italy",
		lat: 45.737,
		lon: 7.315,
		kind: "city",
		group: "city"
	},
	{
		name: "Aqtobe",
		country: "Kazakhstan",
		lat: 50.28,
		lon: 57.17,
		kind: "city",
		group: "city"
	},
	{
		name: "Archangel",
		country: "Russia",
		lat: 64.575,
		lon: 40.545,
		kind: "city",
		group: "city"
	},
	{
		name: "Arctic Bay",
		country: "Canada",
		lat: 73.0333,
		lon: -85.1666,
		kind: "city",
		group: "city"
	},
	{
		name: "Arequipa",
		country: "Peru",
		lat: -16.418,
		lon: -71.532,
		kind: "city",
		group: "city"
	},
	{
		name: "Arica",
		country: "Chile",
		lat: -18.5,
		lon: -70.29,
		kind: "city",
		group: "city"
	},
	{
		name: "Armidale",
		country: "Australia",
		lat: -30.5123,
		lon: 151.6675,
		kind: "village",
		group: "city"
	},
	{
		name: "Artigas Base",
		country: "Antarctica",
		lat: -62.1739,
		lon: -58.8639,
		kind: "village",
		group: "city"
	},
	{
		name: "Arua",
		country: "Uganda",
		lat: 3.0204,
		lon: 30.9,
		kind: "city",
		group: "city"
	},
	{
		name: "Arusha",
		country: "Tanzania",
		lat: -3.36,
		lon: 36.67,
		kind: "city",
		group: "city"
	},
	{
		name: "Arviat",
		country: "Canada",
		lat: 61.1086,
		lon: -94.0586,
		kind: "village",
		group: "city"
	},
	{
		name: "Asansol",
		country: "India",
		lat: 23.6853,
		lon: 86.9814,
		kind: "city",
		group: "city"
	},
	{
		name: "Assab",
		country: "Eritrea",
		lat: 13.01,
		lon: 42.73,
		kind: "city",
		group: "city"
	},
	{
		name: "Astrakhan",
		country: "Russia",
		lat: 46.3487,
		lon: 48.055,
		kind: "city",
		group: "city"
	},
	{
		name: "Aswan",
		country: "Egypt",
		lat: 24.0875,
		lon: 32.8989,
		kind: "city",
		group: "city"
	},
	{
		name: "Asyut",
		country: "Egypt",
		lat: 27.19,
		lon: 31.1799,
		kind: "city",
		group: "city"
	},
	{
		name: "Atakpame",
		country: "Togo",
		lat: 7.53,
		lon: 1.12,
		kind: "city",
		group: "city"
	},
	{
		name: "Atar",
		country: "Mauritania",
		lat: 20.5166,
		lon: -13.05,
		kind: "city",
		group: "city"
	},
	{
		name: "Atlanta",
		country: "United States of America",
		lat: 33.832,
		lon: -84.4019,
		kind: "city",
		group: "city"
	},
	{
		name: "Atyrau",
		country: "Kazakhstan",
		lat: 47.1127,
		lon: 51.92,
		kind: "city",
		group: "city"
	},
	{
		name: "Auckland",
		country: "New Zealand",
		lat: -36.8481,
		lon: 174.763,
		kind: "city",
		group: "city"
	},
	{
		name: "Augusta",
		country: "United States of America",
		lat: 44.3106,
		lon: -69.78,
		kind: "city",
		group: "city"
	},
	{
		name: "Aurangabad",
		country: "India",
		lat: 19.8976,
		lon: 75.3184,
		kind: "village",
		group: "city"
	},
	{
		name: "Austin",
		country: "United States of America",
		lat: 30.2689,
		lon: -97.7447,
		kind: "city",
		group: "city"
	},
	{
		name: "Ayoun el Atrous",
		country: "Mauritania",
		lat: 16.6666,
		lon: -9.6167,
		kind: "city",
		group: "city"
	},
	{
		name: "Bahia Blanca",
		country: "Argentina",
		lat: -38.74,
		lon: -62.265,
		kind: "city",
		group: "city"
	},
	{
		name: "Bahir Dar",
		country: "Ethiopia",
		lat: 11.6001,
		lon: 37.3833,
		kind: "village",
		group: "city"
	},
	{
		name: "Balikpapan",
		country: "Indonesia",
		lat: -1.25,
		lon: 116.83,
		kind: "village",
		group: "city"
	},
	{
		name: "Baltimore",
		country: "United States of America",
		lat: 39.3019,
		lon: -76.6219,
		kind: "village",
		group: "city"
	},
	{
		name: "Bambari",
		country: "Central African Republic",
		lat: 5.762,
		lon: 20.6672,
		kind: "city",
		group: "city"
	},
	{
		name: "Bamenda",
		country: "Cameroon",
		lat: 5.96,
		lon: 10.15,
		kind: "city",
		group: "city"
	},
	{
		name: "Banda Aceh",
		country: "Indonesia",
		lat: 5.55,
		lon: 95.32,
		kind: "city",
		group: "city"
	},
	{
		name: "Bandar Lampung",
		country: "Indonesia",
		lat: -5.4281,
		lon: 105.2681,
		kind: "city",
		group: "city"
	},
	{
		name: "Bandar-e-Abbas",
		country: "Iran",
		lat: 27.2041,
		lon: 56.2721,
		kind: "city",
		group: "city"
	},
	{
		name: "Bandjarmasin",
		country: "Indonesia",
		lat: -3.33,
		lon: 114.5801,
		kind: "city",
		group: "city"
	},
	{
		name: "Bandundu",
		country: "Congo (Kinshasa)",
		lat: -3.31,
		lon: 17.38,
		kind: "city",
		group: "city"
	},
	{
		name: "Bandung",
		country: "Indonesia",
		lat: -6.9481,
		lon: 107.5681,
		kind: "city",
		group: "city"
	},
	{
		name: "Banghazi",
		country: "Libya",
		lat: 32.1187,
		lon: 20.0648,
		kind: "city",
		group: "city"
	},
	{
		name: "Banja Luka",
		country: "Bosnia and Herzegovina",
		lat: 44.7804,
		lon: 17.18,
		kind: "city",
		group: "city"
	},
	{
		name: "Baoshan",
		country: "China",
		lat: 25.12,
		lon: 99.15,
		kind: "village",
		group: "city"
	},
	{
		name: "Baotou",
		country: "China",
		lat: 40.6542,
		lon: 109.8201,
		kind: "city",
		group: "city"
	},
	{
		name: "Barcelona",
		country: "Spain",
		lat: 41.3852,
		lon: 2.1814,
		kind: "city",
		group: "city"
	},
	{
		name: "Bari",
		country: "Italy",
		lat: 41.1142,
		lon: 16.8728,
		kind: "city",
		group: "city"
	},
	{
		name: "Barnaul",
		country: "Russia",
		lat: 53.355,
		lon: 83.745,
		kind: "city",
		group: "city"
	},
	{
		name: "Barranquilla",
		country: "Colombia",
		lat: 10.9619,
		lon: -74.8019,
		kind: "city",
		group: "city"
	},
	{
		name: "Barreiras",
		country: "Brazil",
		lat: -12.14,
		lon: -45,
		kind: "village",
		group: "city"
	},
	{
		name: "Base Presidente Montalva",
		country: "Antarctica",
		lat: -62.1827,
		lon: -58.9077,
		kind: "village",
		group: "city"
	},
	{
		name: "Basra",
		country: "Iraq",
		lat: 30.5155,
		lon: 47.8116,
		kind: "city",
		group: "city"
	},
	{
		name: "Basse-terre",
		country: "France",
		lat: 16.0104,
		lon: -61.7055,
		kind: "city",
		group: "city"
	},
	{
		name: "Batagay",
		country: "Russia",
		lat: 67.656,
		lon: 134.635,
		kind: "village",
		group: "city"
	},
	{
		name: "Baton Rouge",
		country: "United States of America",
		lat: 30.4579,
		lon: -91.1402,
		kind: "city",
		group: "city"
	},
	{
		name: "Battambang",
		country: "Cambodia",
		lat: 13.1,
		lon: 103.2,
		kind: "city",
		group: "city"
	},
	{
		name: "Batumi",
		country: "Georgia",
		lat: 41.6,
		lon: 41.63,
		kind: "city",
		group: "city"
	},
	{
		name: "Beian",
		country: "China",
		lat: 48.239,
		lon: 126.482,
		kind: "village",
		group: "city"
	},
	{
		name: "Beira",
		country: "Mozambique",
		lat: -19.82,
		lon: 34.87,
		kind: "city",
		group: "city"
	},
	{
		name: "Belem",
		country: "Brazil",
		lat: -1.4481,
		lon: -48.482,
		kind: "city",
		group: "city"
	},
	{
		name: "Belfast",
		country: "United Kingdom",
		lat: 54.6,
		lon: -5.96,
		kind: "city",
		group: "city"
	},
	{
		name: "Belgrano II Base",
		country: "Antarctica",
		lat: -77.8663,
		lon: -34.6167,
		kind: "village",
		group: "city"
	},
	{
		name: "Belo Horizonte",
		country: "Brazil",
		lat: -19.9131,
		lon: -43.9169,
		kind: "city",
		group: "city"
	},
	{
		name: "Bendigo",
		country: "Australia",
		lat: -36.76,
		lon: 144.28,
		kind: "village",
		group: "city"
	},
	{
		name: "Bengaluru",
		country: "India",
		lat: 12.9719,
		lon: 77.5581,
		kind: "city",
		group: "city"
	},
	{
		name: "Benguela",
		country: "Angola",
		lat: -12.5783,
		lon: 13.4072,
		kind: "city",
		group: "city"
	},
	{
		name: "Benin City",
		country: "Nigeria",
		lat: 6.3424,
		lon: 5.6181,
		kind: "city",
		group: "city"
	},
	{
		name: "Berbera",
		country: "Somaliland",
		lat: 10.4355,
		lon: 45.0164,
		kind: "village",
		group: "city"
	},
	{
		name: "Bergen",
		country: "Norway",
		lat: 60.391,
		lon: 5.3245,
		kind: "city",
		group: "city"
	},
	{
		name: "Besancon",
		country: "France",
		lat: 47.23,
		lon: 6.03,
		kind: "city",
		group: "city"
	},
	{
		name: "Bethel",
		country: "United States of America",
		lat: 60.7933,
		lon: -161.7558,
		kind: "city",
		group: "city"
	},
	{
		name: "Bhagalpur",
		country: "India",
		lat: 25.23,
		lon: 86.98,
		kind: "village",
		group: "city"
	},
	{
		name: "Bhilai",
		country: "India",
		lat: 21.2186,
		lon: 81.4314,
		kind: "city",
		group: "city"
	},
	{
		name: "Bhopal",
		country: "India",
		lat: 23.2519,
		lon: 77.408,
		kind: "city",
		group: "city"
	},
	{
		name: "Bhubaneshwar",
		country: "India",
		lat: 20.2724,
		lon: 85.8254,
		kind: "city",
		group: "city"
	},
	{
		name: "Bilbao",
		country: "Spain",
		lat: 43.25,
		lon: -2.93,
		kind: "village",
		group: "city"
	},
	{
		name: "Billings",
		country: "United States of America",
		lat: 45.7883,
		lon: -108.54,
		kind: "village",
		group: "city"
	},
	{
		name: "Birmingham",
		country: "United Kingdom",
		lat: 52.4769,
		lon: -1.9219,
		kind: "village",
		group: "city"
	},
	{
		name: "Bismarck",
		country: "United States of America",
		lat: 46.8083,
		lon: -100.7833,
		kind: "city",
		group: "city"
	},
	{
		name: "Blagoveshchensk",
		country: "Russia",
		lat: 50.2666,
		lon: 127.5333,
		kind: "city",
		group: "city"
	},
	{
		name: "Blantyre",
		country: "Malawi",
		lat: -15.79,
		lon: 34.9899,
		kind: "city",
		group: "city"
	},
	{
		name: "Blenheim",
		country: "New Zealand",
		lat: -41.5135,
		lon: 173.955,
		kind: "village",
		group: "city"
	},
	{
		name: "Boa Vista",
		country: "Brazil",
		lat: 2.8161,
		lon: -60.666,
		kind: "city",
		group: "city"
	},
	{
		name: "Bobo Dioulasso",
		country: "Burkina Faso",
		lat: 11.18,
		lon: -4.29,
		kind: "city",
		group: "city"
	},
	{
		name: "Boise",
		country: "United States of America",
		lat: 43.6086,
		lon: -116.2275,
		kind: "city",
		group: "city"
	},
	{
		name: "Bologna",
		country: "Italy",
		lat: 44.5004,
		lon: 11.34,
		kind: "city",
		group: "city"
	},
	{
		name: "Bombo",
		country: "Uganda",
		lat: .5833,
		lon: 32.5333,
		kind: "city",
		group: "city"
	},
	{
		name: "Bordeaux",
		country: "France",
		lat: 44.852,
		lon: -.597,
		kind: "city",
		group: "city"
	},
	{
		name: "Bose",
		country: "China",
		lat: 23.8997,
		lon: 106.6133,
		kind: "village",
		group: "city"
	},
	{
		name: "Boston",
		country: "United States of America",
		lat: 42.3319,
		lon: -71.072,
		kind: "city",
		group: "city"
	},
	{
		name: "Bouake",
		country: "Ivory Coast",
		lat: 7.69,
		lon: -5.03,
		kind: "city",
		group: "city"
	},
	{
		name: "Brandon",
		country: "Canada",
		lat: 49.8333,
		lon: -99.95,
		kind: "village",
		group: "city"
	},
	{
		name: "Bratsk",
		country: "Russia",
		lat: 56.157,
		lon: 101.615,
		kind: "city",
		group: "city"
	},
	{
		name: "Brest",
		country: "Belarus",
		lat: 52.1,
		lon: 23.7,
		kind: "city",
		group: "city"
	},
	{
		name: "Bridgeport",
		country: "United States of America",
		lat: 41.1819,
		lon: -73.2019,
		kind: "village",
		group: "city"
	},
	{
		name: "Brisbane",
		country: "Australia",
		lat: -27.4531,
		lon: 153.0331,
		kind: "city",
		group: "city"
	},
	{
		name: "Broken Hill",
		country: "Australia",
		lat: -31.95,
		lon: 141.4331,
		kind: "village",
		group: "city"
	},
	{
		name: "Broome",
		country: "Australia",
		lat: -17.9618,
		lon: 122.2308,
		kind: "village",
		group: "city"
	},
	{
		name: "Bryansk",
		country: "Russia",
		lat: 53.26,
		lon: 34.43,
		kind: "city",
		group: "city"
	},
	{
		name: "Buffalo",
		country: "United States of America",
		lat: 42.8819,
		lon: -78.8819,
		kind: "city",
		group: "city"
	},
	{
		name: "Bukachacha",
		country: "Russia",
		lat: 52.9833,
		lon: 116.9166,
		kind: "village",
		group: "city"
	},
	{
		name: "Bukhara",
		country: "Uzbekistan",
		lat: 39.78,
		lon: 64.43,
		kind: "city",
		group: "city"
	},
	{
		name: "Bulawayo",
		country: "Zimbabwe",
		lat: -20.17,
		lon: 28.58,
		kind: "city",
		group: "city"
	},
	{
		name: "Bumba",
		country: "Congo (Kinshasa)",
		lat: 2.19,
		lon: 22.46,
		kind: "city",
		group: "city"
	},
	{
		name: "Bur Said",
		country: "Egypt",
		lat: 31.26,
		lon: 32.29,
		kind: "city",
		group: "city"
	},
	{
		name: "Burlington",
		country: "United States of America",
		lat: 44.4758,
		lon: -73.2125,
		kind: "village",
		group: "city"
	},
	{
		name: "Bursa",
		country: "Turkey",
		lat: 40.2019,
		lon: 29.0681,
		kind: "city",
		group: "city"
	},
	{
		name: "Busan",
		country: "South Korea",
		lat: 35.097,
		lon: 129.0081,
		kind: "city",
		group: "city"
	},
	{
		name: "Busselton",
		country: "Australia",
		lat: -33.6564,
		lon: 115.3487,
		kind: "village",
		group: "city"
	},
	{
		name: "Butembo",
		country: "Congo (Kinshasa)",
		lat: .13,
		lon: 29.28,
		kind: "village",
		group: "city"
	},
	{
		name: "Caen",
		country: "France",
		lat: 49.1838,
		lon: -.35,
		kind: "city",
		group: "city"
	},
	{
		name: "Cagliari",
		country: "Italy",
		lat: 39.2224,
		lon: 9.104,
		kind: "city",
		group: "city"
	},
	{
		name: "Cairns",
		country: "Australia",
		lat: -16.8878,
		lon: 145.7633,
		kind: "village",
		group: "city"
	},
	{
		name: "Calgary",
		country: "Canada",
		lat: 51.0849,
		lon: -114.0819,
		kind: "city",
		group: "city"
	},
	{
		name: "Cali",
		country: "Colombia",
		lat: 3.4019,
		lon: -76.5019,
		kind: "city",
		group: "city"
	},
	{
		name: "Cambridge Bay",
		country: "Canada",
		lat: 69.117,
		lon: -105.0333,
		kind: "village",
		group: "city"
	},
	{
		name: "Campeche",
		country: "Mexico",
		lat: 19.83,
		lon: -90.5,
		kind: "city",
		group: "city"
	},
	{
		name: "Campinas",
		country: "Brazil",
		lat: -22.8981,
		lon: -47.102,
		kind: "village",
		group: "city"
	},
	{
		name: "Campo Grande",
		country: "Brazil",
		lat: -20.4481,
		lon: -54.6186,
		kind: "city",
		group: "city"
	},
	{
		name: "Campobasso",
		country: "Italy",
		lat: 41.563,
		lon: 14.656,
		kind: "city",
		group: "city"
	},
	{
		name: "Cancun",
		country: "Mexico",
		lat: 21.17,
		lon: -86.83,
		kind: "city",
		group: "city"
	},
	{
		name: "Capitan Arturo Prat Station",
		country: "Antarctica",
		lat: -62.4995,
		lon: -59.6833,
		kind: "village",
		group: "city"
	},
	{
		name: "Cardiff",
		country: "United Kingdom",
		lat: 51.5,
		lon: -3.225,
		kind: "city",
		group: "city"
	},
	{
		name: "Carlini Base",
		country: "Antarctica",
		lat: -62.2241,
		lon: -58.6505,
		kind: "village",
		group: "city"
	},
	{
		name: "Cartagena",
		country: "Colombia",
		lat: 10.4017,
		lon: -75.5163,
		kind: "city",
		group: "city"
	},
	{
		name: "Casablanca",
		country: "Morocco",
		lat: 33.6019,
		lon: -7.6183,
		kind: "city",
		group: "city"
	},
	{
		name: "Casey Station",
		country: "Antarctica",
		lat: -66.2861,
		lon: 110.5362,
		kind: "village",
		group: "city"
	},
	{
		name: "Casper",
		country: "United States of America",
		lat: 42.8666,
		lon: -106.3125,
		kind: "village",
		group: "city"
	},
	{
		name: "Catania",
		country: "Italy",
		lat: 37.5,
		lon: 15.08,
		kind: "village",
		group: "city"
	},
	{
		name: "Catanzaro",
		country: "Italy",
		lat: 38.9004,
		lon: 16.6,
		kind: "city",
		group: "city"
	},
	{
		name: "Caxias",
		country: "Brazil",
		lat: -4.833,
		lon: -43.35,
		kind: "city",
		group: "city"
	},
	{
		name: "Caxias do Sul",
		country: "Brazil",
		lat: -29.18,
		lon: -51.17,
		kind: "village",
		group: "city"
	},
	{
		name: "Cayenne",
		country: "France",
		lat: 4.933,
		lon: -52.33,
		kind: "city",
		group: "city"
	},
	{
		name: "Cebu",
		country: "Philippines",
		lat: 10.3219,
		lon: 123.8981,
		kind: "city",
		group: "city"
	},
	{
		name: "Chandigarh",
		country: "India",
		lat: 30.7219,
		lon: 76.7781,
		kind: "city",
		group: "city"
	},
	{
		name: "Changchun",
		country: "China",
		lat: 43.867,
		lon: 125.338,
		kind: "city",
		group: "city"
	},
	{
		name: "Changsha",
		country: "China",
		lat: 28.2019,
		lon: 112.968,
		kind: "city",
		group: "city"
	},
	{
		name: "Charleston",
		country: "United States of America",
		lat: 38.3497,
		lon: -81.6327,
		kind: "city",
		group: "city"
	},
	{
		name: "Charlottetown",
		country: "Canada",
		lat: 46.2493,
		lon: -63.1313,
		kind: "city",
		group: "city"
	},
	{
		name: "Chattogram",
		country: "Bangladesh",
		lat: 22.3319,
		lon: 91.798,
		kind: "city",
		group: "city"
	},
	{
		name: "Chelyabinsk",
		country: "Russia",
		lat: 55.1569,
		lon: 61.4367,
		kind: "city",
		group: "city"
	},
	{
		name: "Chengdu",
		country: "China",
		lat: 30.6719,
		lon: 104.0681,
		kind: "city",
		group: "city"
	},
	{
		name: "Chennai",
		country: "India",
		lat: 13.0919,
		lon: 80.2781,
		kind: "city",
		group: "city"
	},
	{
		name: "Chesterfield Inlet",
		country: "Canada",
		lat: 63.3383,
		lon: -90.7001,
		kind: "village",
		group: "city"
	},
	{
		name: "Cheyenne",
		country: "United States of America",
		lat: 41.14,
		lon: -104.8197,
		kind: "city",
		group: "city"
	},
	{
		name: "Chiang Mai",
		country: "Thailand",
		lat: 18.8,
		lon: 98.98,
		kind: "city",
		group: "city"
	},
	{
		name: "Chicago",
		country: "United States of America",
		lat: 41.8319,
		lon: -87.752,
		kind: "city",
		group: "city"
	},
	{
		name: "Chifeng",
		country: "China",
		lat: 42.272,
		lon: 118.948,
		kind: "village",
		group: "city"
	},
	{
		name: "Chihuahua",
		country: "Mexico",
		lat: 28.6469,
		lon: -106.0869,
		kind: "city",
		group: "city"
	},
	{
		name: "Chimbote",
		country: "Peru",
		lat: -9.07,
		lon: -78.57,
		kind: "village",
		group: "city"
	},
	{
		name: "Chipata",
		country: "Zambia",
		lat: -13.6296,
		lon: 32.64,
		kind: "city",
		group: "city"
	},
	{
		name: "Chita",
		country: "Russia",
		lat: 52.055,
		lon: 113.465,
		kind: "city",
		group: "city"
	},
	{
		name: "Chitungwiza",
		country: "Zimbabwe",
		lat: -18,
		lon: 31.1,
		kind: "village",
		group: "city"
	},
	{
		name: "Chokurdakh",
		country: "Russia",
		lat: 70.6183,
		lon: 147.8946,
		kind: "village",
		group: "city"
	},
	{
		name: "Chongqing",
		country: "China",
		lat: 29.5669,
		lon: 106.593,
		kind: "city",
		group: "city"
	},
	{
		name: "Choybalsan",
		country: "Mongolia",
		lat: 48.0666,
		lon: 114.506,
		kind: "city",
		group: "city"
	},
	{
		name: "Christchurch",
		country: "New Zealand",
		lat: -43.535,
		lon: 172.63,
		kind: "city",
		group: "city"
	},
	{
		name: "Churchill",
		country: "Canada",
		lat: 58.766,
		lon: -94.166,
		kind: "city",
		group: "city"
	},
	{
		name: "Cincinnati",
		country: "United States of America",
		lat: 39.1638,
		lon: -84.4589,
		kind: "city",
		group: "city"
	},
	{
		name: "Ciudad Guayana",
		country: "Venezuela",
		lat: 8.37,
		lon: -62.62,
		kind: "city",
		group: "city"
	},
	{
		name: "Ciudad del Este",
		country: "Paraguay",
		lat: -25.5167,
		lon: -54.6161,
		kind: "city",
		group: "city"
	},
	{
		name: "Clermont-Ferrand",
		country: "France",
		lat: 45.78,
		lon: 3.08,
		kind: "city",
		group: "city"
	},
	{
		name: "Cleveland",
		country: "United States of America",
		lat: 41.4719,
		lon: -81.6969,
		kind: "city",
		group: "city"
	},
	{
		name: "Coihaique",
		country: "Chile",
		lat: -45.57,
		lon: -72.07,
		kind: "city",
		group: "city"
	},
	{
		name: "Coimbatore",
		country: "India",
		lat: 11.0019,
		lon: 76.9481,
		kind: "city",
		group: "city"
	},
	{
		name: "Cold Bay",
		country: "United States of America",
		lat: 55.2,
		lon: -162.7151,
		kind: "city",
		group: "city"
	},
	{
		name: "Colider",
		country: "Brazil",
		lat: -10.8173,
		lon: -55.4506,
		kind: "village",
		group: "city"
	},
	{
		name: "Colima",
		country: "Mexico",
		lat: 19.23,
		lon: -103.72,
		kind: "city",
		group: "city"
	},
	{
		name: "Colorado Springs",
		country: "United States of America",
		lat: 38.863,
		lon: -104.792,
		kind: "village",
		group: "city"
	},
	{
		name: "Columbia",
		country: "United States of America",
		lat: 34.04,
		lon: -80.9,
		kind: "city",
		group: "city"
	},
	{
		name: "Comodoro Rivadavia",
		country: "Argentina",
		lat: -45.87,
		lon: -67.5,
		kind: "city",
		group: "city"
	},
	{
		name: "Concepcion",
		country: "Chile",
		lat: -36.83,
		lon: -73.05,
		kind: "city",
		group: "city"
	},
	{
		name: "Concordia Research Station",
		country: "Antarctica",
		lat: -74.6663,
		lon: 124.167,
		kind: "village",
		group: "city"
	},
	{
		name: "Constanta",
		country: "Romania",
		lat: 44.2027,
		lon: 28.61,
		kind: "city",
		group: "city"
	},
	{
		name: "Constantine",
		country: "Algeria",
		lat: 36.36,
		lon: 6.5999,
		kind: "city",
		group: "city"
	},
	{
		name: "Copiapo",
		country: "Chile",
		lat: -27.36,
		lon: -70.34,
		kind: "city",
		group: "city"
	},
	{
		name: "Cordoba",
		country: "Spain",
		lat: 37.88,
		lon: -4.77,
		kind: "village",
		group: "city"
	},
	{
		name: "Cordoba",
		country: "Argentina",
		lat: -31.398,
		lon: -64.1842,
		kind: "city",
		group: "city"
	},
	{
		name: "Corpus Christi",
		country: "United States of America",
		lat: 27.7428,
		lon: -97.4019,
		kind: "village",
		group: "city"
	},
	{
		name: "Corumba",
		country: "Brazil",
		lat: -19.016,
		lon: -57.65,
		kind: "village",
		group: "city"
	},
	{
		name: "Cottica",
		country: "Suriname",
		lat: 3.85,
		lon: -54.2333,
		kind: "village",
		group: "city"
	},
	{
		name: "Cruzeiro do Sul",
		country: "Brazil",
		lat: -7.63,
		lon: -72.67,
		kind: "city",
		group: "city"
	},
	{
		name: "Cuenca",
		country: "Ecuador",
		lat: -2.9,
		lon: -79,
		kind: "city",
		group: "city"
	},
	{
		name: "Cuiaba",
		country: "Brazil",
		lat: -15.5677,
		lon: -56.0869,
		kind: "city",
		group: "city"
	},
	{
		name: "Culiacan",
		country: "Mexico",
		lat: 24.8319,
		lon: -107.3819,
		kind: "city",
		group: "city"
	},
	{
		name: "Curitiba",
		country: "Brazil",
		lat: -25.4181,
		lon: -49.3219,
		kind: "city",
		group: "city"
	},
	{
		name: "Cusco",
		country: "Peru",
		lat: -13.525,
		lon: -71.9722,
		kind: "city",
		group: "city"
	},
	{
		name: "Cuttack",
		country: "India",
		lat: 20.47,
		lon: 85.8899,
		kind: "village",
		group: "city"
	},
	{
		name: "Da Nang",
		country: "Vietnam",
		lat: 16.06,
		lon: 108.25,
		kind: "city",
		group: "city"
	},
	{
		name: "Daejeon",
		country: "South Korea",
		lat: 36.3375,
		lon: 127.4231,
		kind: "city",
		group: "city"
	},
	{
		name: "Dalandzadgad",
		country: "Mongolia",
		lat: 43.5836,
		lon: 104.4403,
		kind: "city",
		group: "city"
	},
	{
		name: "Dalian",
		country: "China",
		lat: 38.9248,
		lon: 121.6279,
		kind: "village",
		group: "city"
	},
	{
		name: "Dallas",
		country: "United States of America",
		lat: 32.822,
		lon: -96.842,
		kind: "city",
		group: "city"
	},
	{
		name: "Dalnegorsk",
		country: "Russia",
		lat: 44.5372,
		lon: 135.5172,
		kind: "village",
		group: "city"
	},
	{
		name: "Daqing",
		country: "China",
		lat: 46.5819,
		lon: 124.9981,
		kind: "village",
		group: "city"
	},
	{
		name: "Darwin",
		country: "Australia",
		lat: -12.4254,
		lon: 130.85,
		kind: "city",
		group: "city"
	},
	{
		name: "Davao",
		country: "Philippines",
		lat: 7.112,
		lon: 125.6281,
		kind: "city",
		group: "city"
	},
	{
		name: "David",
		country: "Panama",
		lat: 8.4333,
		lon: -82.4333,
		kind: "city",
		group: "city"
	},
	{
		name: "Davis Station",
		country: "Antarctica",
		lat: -68.7777,
		lon: 78.1407,
		kind: "village",
		group: "city"
	},
	{
		name: "Dawson City",
		country: "Canada",
		lat: 64.0666,
		lon: -139.4167,
		kind: "village",
		group: "city"
	},
	{
		name: "Delhi",
		country: "India",
		lat: 28.6719,
		lon: 77.2281,
		kind: "city",
		group: "city"
	},
	{
		name: "Denver",
		country: "United States of America",
		lat: 39.7411,
		lon: -104.986,
		kind: "city",
		group: "city"
	},
	{
		name: "Des Moines",
		country: "United States of America",
		lat: 41.58,
		lon: -93.62,
		kind: "city",
		group: "city"
	},
	{
		name: "Detroit",
		country: "United States of America",
		lat: 42.3319,
		lon: -83.082,
		kind: "city",
		group: "city"
	},
	{
		name: "Devonport",
		country: "Australia",
		lat: -41.1927,
		lon: 146.3311,
		kind: "village",
		group: "city"
	},
	{
		name: "Dhanbad",
		country: "India",
		lat: 23.8023,
		lon: 86.418,
		kind: "village",
		group: "city"
	},
	{
		name: "Dijon",
		country: "France",
		lat: 47.3304,
		lon: 5.03,
		kind: "city",
		group: "city"
	},
	{
		name: "Dikson",
		country: "Russia",
		lat: 73.507,
		lon: 80.5451,
		kind: "city",
		group: "city"
	},
	{
		name: "Dire Dawa",
		country: "Ethiopia",
		lat: 9.59,
		lon: 41.86,
		kind: "village",
		group: "city"
	},
	{
		name: "Dispur",
		country: "India",
		lat: 26.144,
		lon: 91.7666,
		kind: "city",
		group: "city"
	},
	{
		name: "Djenne",
		country: "Mali",
		lat: 13.9,
		lon: -4.55,
		kind: "city",
		group: "city"
	},
	{
		name: "Dnipro",
		country: "Ukraine",
		lat: 48.4819,
		lon: 34.9981,
		kind: "city",
		group: "city"
	},
	{
		name: "Donetsk",
		country: "Ukraine",
		lat: 48.0019,
		lon: 37.828,
		kind: "city",
		group: "city"
	},
	{
		name: "Dongguan",
		country: "China",
		lat: 23.0508,
		lon: 113.7428,
		kind: "city",
		group: "city"
	},
	{
		name: "Dongola",
		country: "Sudan",
		lat: 19.1666,
		lon: 30.4833,
		kind: "city",
		group: "city"
	},
	{
		name: "Douala",
		country: "Cameroon",
		lat: 4.0624,
		lon: 9.708,
		kind: "city",
		group: "city"
	},
	{
		name: "Douglas",
		country: "Isle of Man",
		lat: 54.1504,
		lon: -4.48,
		kind: "city",
		group: "city"
	},
	{
		name: "Dresden",
		country: "Germany",
		lat: 51.05,
		lon: 13.75,
		kind: "city",
		group: "city"
	},
	{
		name: "Dubai",
		country: "United Arab Emirates",
		lat: 25.2319,
		lon: 55.278,
		kind: "city",
		group: "city"
	},
	{
		name: "Dubbo",
		country: "Australia",
		lat: -32.26,
		lon: 148.5973,
		kind: "village",
		group: "city"
	},
	{
		name: "Dulan",
		country: "China",
		lat: 36.1666,
		lon: 98.2666,
		kind: "village",
		group: "city"
	},
	{
		name: "Dumont d'Urville Station",
		country: "Antarctica",
		lat: -66.7751,
		lon: 139.9637,
		kind: "village",
		group: "city"
	},
	{
		name: "Dund-Us",
		country: "Mongolia",
		lat: 48.0166,
		lon: 91.6333,
		kind: "city",
		group: "city"
	},
	{
		name: "Dunedin",
		country: "New Zealand",
		lat: -45.8854,
		lon: 170.491,
		kind: "city",
		group: "city"
	},
	{
		name: "Dunhuang",
		country: "China",
		lat: 40.1427,
		lon: 94.662,
		kind: "village",
		group: "city"
	},
	{
		name: "Durazno",
		country: "Uruguay",
		lat: -33.41,
		lon: -56.51,
		kind: "city",
		group: "city"
	},
	{
		name: "Durban",
		country: "South Africa",
		lat: -29.8631,
		lon: 30.9781,
		kind: "city",
		group: "city"
	},
	{
		name: "East London",
		country: "South Africa",
		lat: -32.97,
		lon: 27.87,
		kind: "village",
		group: "city"
	},
	{
		name: "Ebolowa",
		country: "Cameroon",
		lat: 2.9,
		lon: 11.15,
		kind: "city",
		group: "city"
	},
	{
		name: "Edinburgh",
		country: "United Kingdom",
		lat: 55.9483,
		lon: -3.2191,
		kind: "city",
		group: "city"
	},
	{
		name: "Edmonton",
		country: "Canada",
		lat: 53.552,
		lon: -113.5019,
		kind: "city",
		group: "city"
	},
	{
		name: "Ekibastuz",
		country: "Kazakhstan",
		lat: 51.73,
		lon: 75.3199,
		kind: "village",
		group: "city"
	},
	{
		name: "El Calafate",
		country: "Argentina",
		lat: -50.3333,
		lon: -72.3,
		kind: "village",
		group: "city"
	},
	{
		name: "El Faiyum",
		country: "Egypt",
		lat: 29.31,
		lon: 30.84,
		kind: "city",
		group: "city"
	},
	{
		name: "El Fasher",
		country: "Sudan",
		lat: 13.63,
		lon: 25.35,
		kind: "city",
		group: "city"
	},
	{
		name: "El Obeid",
		country: "Sudan",
		lat: 13.1833,
		lon: 30.2167,
		kind: "city",
		group: "city"
	},
	{
		name: "El Paso",
		country: "United States of America",
		lat: 31.7819,
		lon: -106.5119,
		kind: "village",
		group: "city"
	},
	{
		name: "Eldoret",
		country: "Kenya",
		lat: .52,
		lon: 35.27,
		kind: "village",
		group: "city"
	},
	{
		name: "Elephant Island",
		country: "Antarctica",
		lat: -61.9996,
		lon: -58,
		kind: "village",
		group: "city"
	},
	{
		name: "Elko",
		country: "United States of America",
		lat: 40.8325,
		lon: -115.762,
		kind: "village",
		group: "city"
	},
	{
		name: "Enugu",
		country: "Nigeria",
		lat: 6.45,
		lon: 7.5,
		kind: "city",
		group: "city"
	},
	{
		name: "Erdenet",
		country: "Mongolia",
		lat: 49.0533,
		lon: 104.1183,
		kind: "city",
		group: "city"
	},
	{
		name: "Escudero Base",
		country: "Antarctica",
		lat: -62.195,
		lon: -58.9527,
		kind: "village",
		group: "city"
	},
	{
		name: "Esperanza Station",
		country: "Antarctica",
		lat: -63.3753,
		lon: -57.0259,
		kind: "village",
		group: "city"
	},
	{
		name: "Eureka",
		country: "United States of America",
		lat: 40.8022,
		lon: -124.1475,
		kind: "village",
		group: "city"
	},
	{
		name: "Fairbanks",
		country: "United States of America",
		lat: 64.837,
		lon: -147.7107,
		kind: "city",
		group: "city"
	},
	{
		name: "Fargo",
		country: "United States of America",
		lat: 46.8772,
		lon: -96.7894,
		kind: "village",
		group: "city"
	},
	{
		name: "Faridabad",
		country: "India",
		lat: 28.4353,
		lon: 77.3147,
		kind: "village",
		group: "city"
	},
	{
		name: "Feira de Santana",
		country: "Brazil",
		lat: -12.25,
		lon: -38.97,
		kind: "city",
		group: "city"
	},
	{
		name: "Fez",
		country: "Morocco",
		lat: 34.0565,
		lon: -5.0023,
		kind: "city",
		group: "city"
	},
	{
		name: "Fianarantsoa",
		country: "Madagascar",
		lat: -21.4333,
		lon: 47.0833,
		kind: "city",
		group: "city"
	},
	{
		name: "Flagstaff",
		country: "United States of America",
		lat: 35.1981,
		lon: -111.6505,
		kind: "village",
		group: "city"
	},
	{
		name: "Florence",
		country: "Italy",
		lat: 43.78,
		lon: 11.25,
		kind: "city",
		group: "city"
	},
	{
		name: "Florianopolis",
		country: "Brazil",
		lat: -27.578,
		lon: -48.522,
		kind: "city",
		group: "city"
	},
	{
		name: "Formosa",
		country: "Argentina",
		lat: -26.1728,
		lon: -58.1828,
		kind: "city",
		group: "city"
	},
	{
		name: "Fort Good Hope",
		country: "Canada",
		lat: 66.2666,
		lon: -128.6333,
		kind: "city",
		group: "city"
	},
	{
		name: "Fort McMurray",
		country: "Canada",
		lat: 56.7333,
		lon: -111.3833,
		kind: "village",
		group: "city"
	},
	{
		name: "Fort Portal",
		country: "Uganda",
		lat: .671,
		lon: 30.275,
		kind: "city",
		group: "city"
	},
	{
		name: "Fort Severn",
		country: "Canada",
		lat: 55.9833,
		lon: -87.65,
		kind: "city",
		group: "city"
	},
	{
		name: "Fort Smith",
		country: "Canada",
		lat: 60,
		lon: -111.8833,
		kind: "village",
		group: "city"
	},
	{
		name: "Fort St. John",
		country: "Canada",
		lat: 56.25,
		lon: -120.8333,
		kind: "village",
		group: "city"
	},
	{
		name: "Fort-de-France",
		country: "France",
		lat: 14.6104,
		lon: -61.08,
		kind: "city",
		group: "city"
	},
	{
		name: "Fortaleza",
		country: "Brazil",
		lat: -3.7481,
		lon: -38.5819,
		kind: "city",
		group: "city"
	},
	{
		name: "Franceville",
		country: "Gabon",
		lat: -1.6333,
		lon: 13.5833,
		kind: "city",
		group: "city"
	},
	{
		name: "Francistown",
		country: "Botswana",
		lat: -21.17,
		lon: 27.5,
		kind: "city",
		group: "city"
	},
	{
		name: "Frankfurt",
		country: "Germany",
		lat: 50.1,
		lon: 8.675,
		kind: "city",
		group: "city"
	},
	{
		name: "Freeport",
		country: "The Bahamas",
		lat: 26.5333,
		lon: -78.7,
		kind: "village",
		group: "city"
	},
	{
		name: "Fresno",
		country: "United States of America",
		lat: 36.7477,
		lon: -119.773,
		kind: "village",
		group: "city"
	},
	{
		name: "Ft. Worth",
		country: "United States of America",
		lat: 32.74,
		lon: -97.34,
		kind: "village",
		group: "city"
	},
	{
		name: "Fukuoka",
		country: "Japan",
		lat: 33.597,
		lon: 130.4081,
		kind: "city",
		group: "city"
	},
	{
		name: "Funchal",
		country: "Portugal",
		lat: 32.65,
		lon: -16.88,
		kind: "city",
		group: "city"
	},
	{
		name: "Fuzhou",
		country: "China",
		lat: 26.0819,
		lon: 119.2981,
		kind: "city",
		group: "city"
	},
	{
		name: "Gao",
		country: "Mali",
		lat: 16.2666,
		lon: -.05,
		kind: "city",
		group: "city"
	},
	{
		name: "Garoua",
		country: "Cameroon",
		lat: 9.3,
		lon: 13.39,
		kind: "city",
		group: "city"
	},
	{
		name: "Gaza",
		country: "Palestine",
		lat: 31.53,
		lon: 34.445,
		kind: "city",
		group: "city"
	},
	{
		name: "Gdansk",
		country: "Poland",
		lat: 54.36,
		lon: 18.64,
		kind: "city",
		group: "city"
	},
	{
		name: "Gejiu",
		country: "China",
		lat: 23.38,
		lon: 103.1501,
		kind: "village",
		group: "city"
	},
	{
		name: "Gen. O'Higgins Base",
		country: "Antarctica",
		lat: -63.3284,
		lon: -57.8896,
		kind: "village",
		group: "city"
	},
	{
		name: "Geneina",
		country: "Sudan",
		lat: 13.45,
		lon: 22.44,
		kind: "city",
		group: "city"
	},
	{
		name: "General Santos",
		country: "Philippines",
		lat: 6.1108,
		lon: 125.1747,
		kind: "village",
		group: "city"
	},
	{
		name: "Geneva",
		country: "Switzerland",
		lat: 46.21,
		lon: 6.14,
		kind: "city",
		group: "city"
	},
	{
		name: "Genoa",
		country: "Italy",
		lat: 44.41,
		lon: 8.93,
		kind: "city",
		group: "city"
	},
	{
		name: "George",
		country: "South Africa",
		lat: -33.95,
		lon: 22.45,
		kind: "village",
		group: "city"
	},
	{
		name: "George Town",
		country: "Cayman Islands",
		lat: 19.2804,
		lon: -81.33,
		kind: "city",
		group: "city"
	},
	{
		name: "George Town",
		country: "Malaysia",
		lat: 5.4136,
		lon: 100.3294,
		kind: "city",
		group: "city"
	},
	{
		name: "Geraldton",
		country: "Australia",
		lat: -28.7666,
		lon: 114.6,
		kind: "village",
		group: "city"
	},
	{
		name: "Ghardaia",
		country: "Algeria",
		lat: 32.49,
		lon: 3.67,
		kind: "city",
		group: "city"
	},
	{
		name: "Ghaziabad",
		country: "India",
		lat: 28.6623,
		lon: 77.4064,
		kind: "village",
		group: "city"
	},
	{
		name: "Gibraltar",
		country: "Gibraltar",
		lat: 36.1324,
		lon: -5.3781,
		kind: "city",
		group: "city"
	},
	{
		name: "Gifu",
		country: "Japan",
		lat: 35.4231,
		lon: 136.7628,
		kind: "city",
		group: "city"
	},
	{
		name: "Glasgow",
		country: "United Kingdom",
		lat: 55.8764,
		lon: -4.2527,
		kind: "city",
		group: "city"
	},
	{
		name: "Goiania",
		country: "Brazil",
		lat: -16.7181,
		lon: -49.302,
		kind: "city",
		group: "city"
	},
	{
		name: "Gold Coast",
		country: "Australia",
		lat: -28.0815,
		lon: 153.4482,
		kind: "village",
		group: "city"
	},
	{
		name: "Golmud",
		country: "China",
		lat: 36.4166,
		lon: 94.8833,
		kind: "village",
		group: "city"
	},
	{
		name: "Goma",
		country: "Congo (Kinshasa)",
		lat: -1.6788,
		lon: 29.2218,
		kind: "city",
		group: "city"
	},
	{
		name: "Gonder",
		country: "Ethiopia",
		lat: 12.61,
		lon: 37.46,
		kind: "city",
		group: "city"
	},
	{
		name: "Goroka",
		country: "Papua New Guinea",
		lat: -6.0833,
		lon: 145.3855,
		kind: "city",
		group: "city"
	},
	{
		name: "Gorontalo",
		country: "Indonesia",
		lat: .55,
		lon: 123.07,
		kind: "village",
		group: "city"
	},
	{
		name: "Grand Turk",
		country: "Turks and Caicos Islands",
		lat: 21.4664,
		lon: -71.136,
		kind: "city",
		group: "city"
	},
	{
		name: "Great Falls",
		country: "United States of America",
		lat: 47.5003,
		lon: -111.3,
		kind: "village",
		group: "city"
	},
	{
		name: "Great Wall Station",
		country: "Antarctica",
		lat: -62.2163,
		lon: -58.9667,
		kind: "village",
		group: "city"
	},
	{
		name: "Griffith",
		country: "Australia",
		lat: -34.29,
		lon: 146.04,
		kind: "village",
		group: "city"
	},
	{
		name: "Grootfontein",
		country: "Namibia",
		lat: -19.5666,
		lon: 18.1166,
		kind: "city",
		group: "city"
	},
	{
		name: "Groznyy",
		country: "Russia",
		lat: 43.3187,
		lon: 45.6987,
		kind: "city",
		group: "city"
	},
	{
		name: "Guadalajara",
		country: "Mexico",
		lat: 20.672,
		lon: -103.332,
		kind: "city",
		group: "city"
	},
	{
		name: "Guangzhou",
		country: "China",
		lat: 23.1469,
		lon: 113.3231,
		kind: "city",
		group: "city"
	},
	{
		name: "Guayaquil",
		country: "Ecuador",
		lat: -2.2181,
		lon: -79.922,
		kind: "city",
		group: "city"
	},
	{
		name: "Guaymas",
		country: "Mexico",
		lat: 27.93,
		lon: -110.89,
		kind: "village",
		group: "city"
	},
	{
		name: "Guilin",
		country: "China",
		lat: 25.2819,
		lon: 110.2781,
		kind: "city",
		group: "city"
	},
	{
		name: "Guiyang",
		country: "China",
		lat: 26.582,
		lon: 106.7181,
		kind: "city",
		group: "city"
	},
	{
		name: "Gujranwala",
		country: "Pakistan",
		lat: 32.1624,
		lon: 74.1831,
		kind: "village",
		group: "city"
	},
	{
		name: "Gulu",
		country: "Uganda",
		lat: 2.78,
		lon: 32.28,
		kind: "city",
		group: "city"
	},
	{
		name: "Guwahati",
		country: "India",
		lat: 26.162,
		lon: 91.768,
		kind: "village",
		group: "city"
	},
	{
		name: "Gwalior",
		country: "India",
		lat: 26.2319,
		lon: 78.1781,
		kind: "village",
		group: "city"
	},
	{
		name: "Gwangju",
		country: "South Korea",
		lat: 35.1729,
		lon: 126.9085,
		kind: "city",
		group: "city"
	},
	{
		name: "Hailar",
		country: "China",
		lat: 49.2,
		lon: 119.7,
		kind: "village",
		group: "city"
	},
	{
		name: "Haiphong",
		country: "Vietnam",
		lat: 20.832,
		lon: 106.6781,
		kind: "city",
		group: "city"
	},
	{
		name: "Hakodate",
		country: "Japan",
		lat: 41.795,
		lon: 140.74,
		kind: "village",
		group: "city"
	},
	{
		name: "Halifax",
		country: "Canada",
		lat: 44.65,
		lon: -63.6,
		kind: "city",
		group: "city"
	},
	{
		name: "Halley Station",
		country: "Antarctica",
		lat: -76.0923,
		lon: -26.4742,
		kind: "village",
		group: "city"
	},
	{
		name: "Hamadan",
		country: "Iran",
		lat: 34.796,
		lon: 48.515,
		kind: "city",
		group: "city"
	},
	{
		name: "Hamburg",
		country: "Germany",
		lat: 53.552,
		lon: 9.9981,
		kind: "city",
		group: "city"
	},
	{
		name: "Hami",
		country: "China",
		lat: 42.827,
		lon: 93.515,
		kind: "city",
		group: "city"
	},
	{
		name: "Hamilton",
		country: "New Zealand",
		lat: -37.7783,
		lon: 175.2896,
		kind: "city",
		group: "city"
	},
	{
		name: "Hamilton",
		country: "Bermuda",
		lat: 32.2942,
		lon: -64.7839,
		kind: "city",
		group: "city"
	},
	{
		name: "Hammerfest",
		country: "Norway",
		lat: 70.6613,
		lon: 23.688,
		kind: "village",
		group: "city"
	},
	{
		name: "Handan",
		country: "China",
		lat: 36.5819,
		lon: 114.478,
		kind: "village",
		group: "city"
	},
	{
		name: "Hangzhou",
		country: "China",
		lat: 30.2519,
		lon: 120.1681,
		kind: "city",
		group: "city"
	},
	{
		name: "Harbin",
		country: "China",
		lat: 45.7519,
		lon: 126.648,
		kind: "city",
		group: "city"
	},
	{
		name: "Hefei",
		country: "China",
		lat: 31.852,
		lon: 117.2781,
		kind: "city",
		group: "city"
	},
	{
		name: "Helena",
		country: "United States of America",
		lat: 46.5927,
		lon: -112.0353,
		kind: "city",
		group: "city"
	},
	{
		name: "Hengyang",
		country: "China",
		lat: 26.882,
		lon: 112.5881,
		kind: "village",
		group: "city"
	},
	{
		name: "Herat",
		country: "Afghanistan",
		lat: 34.33,
		lon: 62.17,
		kind: "city",
		group: "city"
	},
	{
		name: "Hermosillo",
		country: "Mexico",
		lat: 29.0989,
		lon: -110.9541,
		kind: "city",
		group: "city"
	},
	{
		name: "Hilo",
		country: "United States of America",
		lat: 19.7,
		lon: -155.09,
		kind: "village",
		group: "city"
	},
	{
		name: "Hiroshima",
		country: "Japan",
		lat: 34.3898,
		lon: 132.441,
		kind: "city",
		group: "city"
	},
	{
		name: "Ho Chi Minh City",
		country: "Vietnam",
		lat: 10.782,
		lon: 106.6931,
		kind: "city",
		group: "city"
	},
	{
		name: "Hobart",
		country: "Australia",
		lat: -42.85,
		lon: 147.295,
		kind: "city",
		group: "city"
	},
	{
		name: "Hohhot",
		country: "China",
		lat: 40.8219,
		lon: 111.6581,
		kind: "city",
		group: "city"
	},
	{
		name: "Hong Kong",
		country: "Hong Kong S.A.R.",
		lat: 22.3069,
		lon: 114.1831,
		kind: "city",
		group: "city"
	},
	{
		name: "Honolulu",
		country: "United States of America",
		lat: 21.3088,
		lon: -157.8599,
		kind: "city",
		group: "city"
	},
	{
		name: "Hotan",
		country: "China",
		lat: 37.0997,
		lon: 79.9269,
		kind: "city",
		group: "city"
	},
	{
		name: "Houma",
		country: "China",
		lat: 35.62,
		lon: 111.21,
		kind: "village",
		group: "city"
	},
	{
		name: "Houston",
		country: "United States of America",
		lat: 29.8219,
		lon: -95.3419,
		kind: "city",
		group: "city"
	},
	{
		name: "Huainan",
		country: "China",
		lat: 32.6319,
		lon: 116.978,
		kind: "city",
		group: "city"
	},
	{
		name: "Huaiyin",
		country: "China",
		lat: 33.5819,
		lon: 119.028,
		kind: "village",
		group: "city"
	},
	{
		name: "Huambo",
		country: "Angola",
		lat: -12.748,
		lon: 15.7581,
		kind: "city",
		group: "city"
	},
	{
		name: "Huancayo",
		country: "Peru",
		lat: -12.08,
		lon: -75.2,
		kind: "city",
		group: "city"
	},
	{
		name: "Hubballi",
		country: "India",
		lat: 15.3619,
		lon: 75.1231,
		kind: "village",
		group: "city"
	},
	{
		name: "Hyderabad",
		country: "Pakistan",
		lat: 25.3819,
		lon: 68.373,
		kind: "city",
		group: "city"
	},
	{
		name: "Hyderabad",
		country: "India",
		lat: 17.4019,
		lon: 78.478,
		kind: "city",
		group: "city"
	},
	{
		name: "Iasi",
		country: "Romania",
		lat: 47.1683,
		lon: 27.5749,
		kind: "city",
		group: "city"
	},
	{
		name: "Ibadan",
		country: "Nigeria",
		lat: 7.382,
		lon: 3.928,
		kind: "city",
		group: "city"
	},
	{
		name: "Ica",
		country: "Peru",
		lat: -14.068,
		lon: -75.7255,
		kind: "city",
		group: "city"
	},
	{
		name: "Igloolik",
		country: "Canada",
		lat: 69.2565,
		lon: -81.7936,
		kind: "village",
		group: "city"
	},
	{
		name: "Iloilo",
		country: "Philippines",
		lat: 10.705,
		lon: 122.545,
		kind: "city",
		group: "city"
	},
	{
		name: "Incheon",
		country: "South Korea",
		lat: 37.4781,
		lon: 126.6403,
		kind: "city",
		group: "city"
	},
	{
		name: "Indianapolis",
		country: "United States of America",
		lat: 39.7519,
		lon: -86.172,
		kind: "city",
		group: "city"
	},
	{
		name: "Indore",
		country: "India",
		lat: 22.717,
		lon: 75.8631,
		kind: "village",
		group: "city"
	},
	{
		name: "International Falls",
		country: "United States of America",
		lat: 48.6011,
		lon: -93.4108,
		kind: "village",
		group: "city"
	},
	{
		name: "Iqaluit",
		country: "Canada",
		lat: 63.7505,
		lon: -68.5002,
		kind: "city",
		group: "city"
	},
	{
		name: "Iquique",
		country: "Chile",
		lat: -20.25,
		lon: -70.13,
		kind: "city",
		group: "city"
	},
	{
		name: "Iquitos",
		country: "Peru",
		lat: -3.75,
		lon: -73.25,
		kind: "city",
		group: "city"
	},
	{
		name: "Irkutsk",
		country: "Russia",
		lat: 52.32,
		lon: 104.245,
		kind: "city",
		group: "city"
	},
	{
		name: "Isfahan",
		country: "Iran",
		lat: 32.702,
		lon: 51.6981,
		kind: "city",
		group: "city"
	},
	{
		name: "Istanbul",
		country: "Turkey",
		lat: 41.1069,
		lon: 29.0081,
		kind: "city",
		group: "city"
	},
	{
		name: "Izmir",
		country: "Turkey",
		lat: 38.4381,
		lon: 27.1498,
		kind: "city",
		group: "city"
	},
	{
		name: "Jabalpur",
		country: "India",
		lat: 23.177,
		lon: 79.9531,
		kind: "village",
		group: "city"
	},
	{
		name: "Jackson",
		country: "United States of America",
		lat: 32.2988,
		lon: -90.185,
		kind: "city",
		group: "city"
	},
	{
		name: "Jacksonville",
		country: "United States of America",
		lat: 30.332,
		lon: -81.6719,
		kind: "village",
		group: "city"
	},
	{
		name: "Jaipur",
		country: "India",
		lat: 26.9231,
		lon: 75.808,
		kind: "city",
		group: "city"
	},
	{
		name: "Jammu",
		country: "India",
		lat: 32.7137,
		lon: 74.8448,
		kind: "village",
		group: "city"
	},
	{
		name: "Jamshedpur",
		country: "India",
		lat: 22.7895,
		lon: 86.1956,
		kind: "city",
		group: "city"
	},
	{
		name: "Jayapura",
		country: "Indonesia",
		lat: -2.533,
		lon: 140.7,
		kind: "city",
		group: "city"
	},
	{
		name: "Jeddah",
		country: "Saudi Arabia",
		lat: 21.5188,
		lon: 39.2173,
		kind: "city",
		group: "city"
	},
	{
		name: "Ji-Parana",
		country: "Brazil",
		lat: -10.8333,
		lon: -61.967,
		kind: "city",
		group: "city"
	},
	{
		name: "Jiamusi",
		country: "China",
		lat: 46.832,
		lon: 130.3481,
		kind: "village",
		group: "city"
	},
	{
		name: "Jiayuguan",
		country: "China",
		lat: 39.82,
		lon: 98.3,
		kind: "city",
		group: "city"
	},
	{
		name: "Jilin",
		country: "China",
		lat: 43.8519,
		lon: 126.5481,
		kind: "village",
		group: "city"
	},
	{
		name: "Jinan",
		country: "China",
		lat: 36.6769,
		lon: 116.9931,
		kind: "city",
		group: "city"
	},
	{
		name: "Jinja",
		country: "Uganda",
		lat: .4404,
		lon: 33.1999,
		kind: "city",
		group: "city"
	},
	{
		name: "Jinxi",
		country: "China",
		lat: 40.7523,
		lon: 120.828,
		kind: "village",
		group: "city"
	},
	{
		name: "Jixi",
		country: "China",
		lat: 45.3019,
		lon: 130.9681,
		kind: "village",
		group: "city"
	},
	{
		name: "Jodhpur",
		country: "India",
		lat: 26.2937,
		lon: 73.0148,
		kind: "village",
		group: "city"
	},
	{
		name: "Jullundur",
		country: "India",
		lat: 31.3369,
		lon: 75.5671,
		kind: "village",
		group: "city"
	},
	{
		name: "Juneau",
		country: "United States of America",
		lat: 58.3141,
		lon: -134.42,
		kind: "city",
		group: "city"
	},
	{
		name: "Kabwe",
		country: "Zambia",
		lat: -14.44,
		lon: 28.45,
		kind: "city",
		group: "city"
	},
	{
		name: "Kaduna",
		country: "Nigeria",
		lat: 10.522,
		lon: 7.4381,
		kind: "city",
		group: "city"
	},
	{
		name: "Kaedi",
		country: "Senegal",
		lat: 16.15,
		lon: -13.5,
		kind: "city",
		group: "city"
	},
	{
		name: "Kalaburagi",
		country: "India",
		lat: 17.35,
		lon: 76.82,
		kind: "village",
		group: "city"
	},
	{
		name: "Kalemie",
		country: "Congo (Kinshasa)",
		lat: -5.9333,
		lon: 29.2,
		kind: "village",
		group: "city"
	},
	{
		name: "Kalgoorlie",
		country: "Australia",
		lat: -30.7354,
		lon: 121.46,
		kind: "village",
		group: "city"
	},
	{
		name: "Kaliningrad",
		country: "Russia",
		lat: 54.7,
		lon: 20.4973,
		kind: "city",
		group: "city"
	},
	{
		name: "Kananga",
		country: "Congo (Kinshasa)",
		lat: -5.8881,
		lon: 22.3981,
		kind: "city",
		group: "city"
	},
	{
		name: "Kandahar",
		country: "Afghanistan",
		lat: 31.61,
		lon: 65.6949,
		kind: "city",
		group: "city"
	},
	{
		name: "Kandy",
		country: "Sri Lanka",
		lat: 7.28,
		lon: 80.67,
		kind: "city",
		group: "city"
	},
	{
		name: "Kankan",
		country: "Guinea",
		lat: 10.39,
		lon: -9.31,
		kind: "city",
		group: "city"
	},
	{
		name: "Kano",
		country: "Nigeria",
		lat: 12.0019,
		lon: 8.5181,
		kind: "city",
		group: "city"
	},
	{
		name: "Kanpur",
		country: "India",
		lat: 26.4619,
		lon: 80.318,
		kind: "city",
		group: "city"
	},
	{
		name: "Kansas City",
		country: "United States of America",
		lat: 39.109,
		lon: -94.606,
		kind: "village",
		group: "city"
	},
	{
		name: "Kaohsiung",
		country: "Taiwan",
		lat: 22.6333,
		lon: 120.2666,
		kind: "city",
		group: "city"
	},
	{
		name: "Kaolack",
		country: "Senegal",
		lat: 14.15,
		lon: -16.1,
		kind: "city",
		group: "city"
	},
	{
		name: "Karachi",
		country: "Pakistan",
		lat: 24.8719,
		lon: 66.9881,
		kind: "city",
		group: "city"
	},
	{
		name: "Karratha",
		country: "Australia",
		lat: -20.7304,
		lon: 116.87,
		kind: "village",
		group: "city"
	},
	{
		name: "Kashgar",
		country: "China",
		lat: 39.4763,
		lon: 75.9699,
		kind: "city",
		group: "city"
	},
	{
		name: "Kasongo",
		country: "Congo (Kinshasa)",
		lat: -4.45,
		lon: 26.66,
		kind: "village",
		group: "city"
	},
	{
		name: "Kassala",
		country: "Sudan",
		lat: 15.46,
		lon: 36.39,
		kind: "city",
		group: "city"
	},
	{
		name: "Katherine",
		country: "Australia",
		lat: -14.4666,
		lon: 132.2666,
		kind: "village",
		group: "city"
	},
	{
		name: "Kayes",
		country: "Congo (Brazzaville)",
		lat: -4.18,
		lon: 13.28,
		kind: "village",
		group: "city"
	},
	{
		name: "Kayes",
		country: "Mali",
		lat: 14.45,
		lon: -11.44,
		kind: "city",
		group: "city"
	},
	{
		name: "Kazan",
		country: "Russia",
		lat: 55.7519,
		lon: 49.1244,
		kind: "city",
		group: "city"
	},
	{
		name: "Keetmanshoop",
		country: "Namibia",
		lat: -26.5739,
		lon: 18.13,
		kind: "city",
		group: "city"
	},
	{
		name: "Kemerovo",
		country: "Russia",
		lat: 55.34,
		lon: 86.09,
		kind: "city",
		group: "city"
	},
	{
		name: "Khabarovsk",
		country: "Russia",
		lat: 48.455,
		lon: 135.12,
		kind: "city",
		group: "city"
	},
	{
		name: "Kharkiv",
		country: "Ukraine",
		lat: 50.0019,
		lon: 36.2481,
		kind: "city",
		group: "city"
	},
	{
		name: "Khatanga",
		country: "Russia",
		lat: 72.0411,
		lon: 102.465,
		kind: "village",
		group: "city"
	},
	{
		name: "Khulna",
		country: "Bangladesh",
		lat: 22.8419,
		lon: 89.5581,
		kind: "city",
		group: "city"
	},
	{
		name: "Kikwit",
		country: "Congo (Kinshasa)",
		lat: -5.03,
		lon: 18.85,
		kind: "city",
		group: "city"
	},
	{
		name: "King Sejong Station",
		country: "Antarctica",
		lat: -62.2249,
		lon: -58.7716,
		kind: "village",
		group: "city"
	},
	{
		name: "Kirkuk",
		country: "Iraq",
		lat: 35.4722,
		lon: 44.3923,
		kind: "city",
		group: "city"
	},
	{
		name: "Kirov",
		country: "Russia",
		lat: 58.5901,
		lon: 49.67,
		kind: "city",
		group: "city"
	},
	{
		name: "Kisangani",
		country: "Congo (Kinshasa)",
		lat: .52,
		lon: 25.22,
		kind: "city",
		group: "city"
	},
	{
		name: "Kitwe",
		country: "Zambia",
		lat: -12.81,
		lon: 28.22,
		kind: "village",
		group: "city"
	},
	{
		name: "Knoxville",
		country: "United States of America",
		lat: 35.97,
		lon: -83.92,
		kind: "village",
		group: "city"
	},
	{
		name: "Kochi",
		country: "Japan",
		lat: 33.5624,
		lon: 133.5375,
		kind: "city",
		group: "city"
	},
	{
		name: "Kochi",
		country: "India",
		lat: 10.017,
		lon: 76.222,
		kind: "village",
		group: "city"
	},
	{
		name: "Kodiak",
		country: "United States of America",
		lat: 57.79,
		lon: -152.407,
		kind: "city",
		group: "city"
	},
	{
		name: "Kolhapur",
		country: "India",
		lat: 16.7,
		lon: 74.22,
		kind: "village",
		group: "city"
	},
	{
		name: "Kolkata",
		country: "India",
		lat: 22.4969,
		lon: 88.3227,
		kind: "city",
		group: "city"
	},
	{
		name: "Kolwezi",
		country: "Congo (Kinshasa)",
		lat: -10.7167,
		lon: 25.4724,
		kind: "city",
		group: "city"
	},
	{
		name: "Konya",
		country: "Turkey",
		lat: 37.877,
		lon: 32.4731,
		kind: "city",
		group: "city"
	},
	{
		name: "Kota",
		country: "India",
		lat: 25.1819,
		lon: 75.8331,
		kind: "village",
		group: "city"
	},
	{
		name: "Kozhikode",
		country: "India",
		lat: 11.2524,
		lon: 75.768,
		kind: "city",
		group: "city"
	},
	{
		name: "Krakow",
		country: "Poland",
		lat: 50.0619,
		lon: 19.9581,
		kind: "city",
		group: "city"
	},
	{
		name: "Krasnodar",
		country: "Russia",
		lat: 45.02,
		lon: 39,
		kind: "city",
		group: "city"
	},
	{
		name: "Krasnoyarsk",
		country: "Russia",
		lat: 56.0159,
		lon: 92.8641,
		kind: "city",
		group: "city"
	},
	{
		name: "Kristiansand",
		country: "Norway",
		lat: 58.1666,
		lon: 8,
		kind: "city",
		group: "city"
	},
	{
		name: "Kuching",
		country: "Malaysia",
		lat: 1.53,
		lon: 110.33,
		kind: "city",
		group: "city"
	},
	{
		name: "Kugluktuk",
		country: "Canada",
		lat: 67.7987,
		lon: -115.1253,
		kind: "village",
		group: "city"
	},
	{
		name: "Kunming",
		country: "China",
		lat: 25.0719,
		lon: 102.678,
		kind: "city",
		group: "city"
	},
	{
		name: "Kupang",
		country: "Indonesia",
		lat: -10.1787,
		lon: 123.583,
		kind: "city",
		group: "city"
	},
	{
		name: "Kushiro",
		country: "Japan",
		lat: 42.975,
		lon: 144.3747,
		kind: "village",
		group: "city"
	},
	{
		name: "Kuujjuaq",
		country: "Canada",
		lat: 58.1,
		lon: -68.4,
		kind: "village",
		group: "city"
	},
	{
		name: "Kuujjuarapik",
		country: "Canada",
		lat: 55.2815,
		lon: -77.7658,
		kind: "village",
		group: "city"
	},
	{
		name: "Kyzyl",
		country: "Russia",
		lat: 51.7067,
		lon: 94.3831,
		kind: "city",
		group: "city"
	},
	{
		name: "L'Aquila",
		country: "Italy",
		lat: 42.3504,
		lon: 13.39,
		kind: "city",
		group: "city"
	},
	{
		name: "La Paz",
		country: "Mexico",
		lat: 24.14,
		lon: -110.32,
		kind: "city",
		group: "city"
	},
	{
		name: "La Serena",
		country: "Chile",
		lat: -29.9,
		lon: -71.25,
		kind: "city",
		group: "city"
	},
	{
		name: "Labrador City",
		country: "Canada",
		lat: 52.9414,
		lon: -66.9159,
		kind: "village",
		group: "city"
	},
	{
		name: "Lae",
		country: "Papua New Guinea",
		lat: -6.733,
		lon: 146.99,
		kind: "city",
		group: "city"
	},
	{
		name: "Lahore",
		country: "Pakistan",
		lat: 31.5619,
		lon: 74.3481,
		kind: "city",
		group: "city"
	},
	{
		name: "Lanzhou",
		country: "China",
		lat: 36.058,
		lon: 103.7901,
		kind: "city",
		group: "city"
	},
	{
		name: "Laoag",
		country: "Philippines",
		lat: 18.1988,
		lon: 120.5936,
		kind: "village",
		group: "city"
	},
	{
		name: "Laredo",
		country: "United States of America",
		lat: 27.5061,
		lon: -99.5072,
		kind: "village",
		group: "city"
	},
	{
		name: "Larkana",
		country: "Pakistan",
		lat: 27.5618,
		lon: 68.2068,
		kind: "village",
		group: "city"
	},
	{
		name: "Las Palmas",
		country: "Spain",
		lat: 28.1,
		lon: -15.43,
		kind: "city",
		group: "city"
	},
	{
		name: "Las Vegas",
		country: "United States of America",
		lat: 36.2119,
		lon: -115.222,
		kind: "city",
		group: "city"
	},
	{
		name: "Le Havre",
		country: "France",
		lat: 49.505,
		lon: .105,
		kind: "village",
		group: "city"
	},
	{
		name: "Leh",
		country: "India",
		lat: 34.1616,
		lon: 77.5723,
		kind: "city",
		group: "city"
	},
	{
		name: "Lensk",
		country: "Russia",
		lat: 60.7253,
		lon: 114.947,
		kind: "village",
		group: "city"
	},
	{
		name: "Leon",
		country: "Mexico",
		lat: 21.1519,
		lon: -101.702,
		kind: "village",
		group: "city"
	},
	{
		name: "Leticia",
		country: "Colombia",
		lat: -4.2012,
		lon: -69.9553,
		kind: "city",
		group: "city"
	},
	{
		name: "Lhasa",
		country: "China",
		lat: 29.645,
		lon: 91.1,
		kind: "city",
		group: "city"
	},
	{
		name: "Lille",
		country: "France",
		lat: 50.6519,
		lon: 3.0781,
		kind: "city",
		group: "city"
	},
	{
		name: "Limoges",
		country: "France",
		lat: 45.83,
		lon: 1.25,
		kind: "city",
		group: "city"
	},
	{
		name: "Linyi",
		country: "China",
		lat: 35.0819,
		lon: 118.328,
		kind: "village",
		group: "city"
	},
	{
		name: "Liupanshui",
		country: "China",
		lat: 26.5964,
		lon: 104.8314,
		kind: "village",
		group: "city"
	},
	{
		name: "Livingstone",
		country: "Zambia",
		lat: -17.86,
		lon: 25.86,
		kind: "city",
		group: "city"
	},
	{
		name: "Longyearbyen",
		country: "Svalbard and Jan Mayen Islands",
		lat: 78.2167,
		lon: 15.55,
		kind: "city",
		group: "city"
	},
	{
		name: "Los Angeles",
		country: "Chile",
		lat: -37.46,
		lon: -72.36,
		kind: "village",
		group: "city"
	},
	{
		name: "Los Angeles",
		country: "United States of America",
		lat: 33.9919,
		lon: -118.1819,
		kind: "village",
		group: "city"
	},
	{
		name: "Lubango",
		country: "Angola",
		lat: -14.91,
		lon: 13.49,
		kind: "city",
		group: "city"
	},
	{
		name: "Lubumbashi",
		country: "Congo (Kinshasa)",
		lat: -11.6781,
		lon: 27.4781,
		kind: "city",
		group: "city"
	},
	{
		name: "Lucknow",
		country: "India",
		lat: 26.857,
		lon: 80.9131,
		kind: "city",
		group: "city"
	},
	{
		name: "Luderitz",
		country: "Namibia",
		lat: -26.648,
		lon: 15.1594,
		kind: "city",
		group: "city"
	},
	{
		name: "Ludhiana",
		country: "India",
		lat: 30.9297,
		lon: 75.8703,
		kind: "village",
		group: "city"
	},
	{
		name: "Lulea",
		country: "Sweden",
		lat: 65.5966,
		lon: 22.1584,
		kind: "city",
		group: "city"
	},
	{
		name: "Luxor",
		country: "Egypt",
		lat: 25.7,
		lon: 32.65,
		kind: "city",
		group: "city"
	},
	{
		name: "Lvov",
		country: "Ukraine",
		lat: 49.835,
		lon: 24.03,
		kind: "city",
		group: "city"
	},
	{
		name: "Lyon",
		country: "France",
		lat: 45.772,
		lon: 4.8281,
		kind: "city",
		group: "city"
	},
	{
		name: "Macapa",
		country: "Brazil",
		lat: .033,
		lon: -51.05,
		kind: "city",
		group: "city"
	},
	{
		name: "Macau",
		country: "Macau S.A.R",
		lat: 22.203,
		lon: 113.545,
		kind: "city",
		group: "city"
	},
	{
		name: "Maceio",
		country: "Brazil",
		lat: -9.6181,
		lon: -35.7319,
		kind: "city",
		group: "city"
	},
	{
		name: "Madurai",
		country: "India",
		lat: 9.922,
		lon: 78.1181,
		kind: "city",
		group: "city"
	},
	{
		name: "Magadan",
		country: "Russia",
		lat: 59.575,
		lon: 150.81,
		kind: "city",
		group: "city"
	},
	{
		name: "Magnitogorsk",
		country: "Russia",
		lat: 53.4227,
		lon: 58.98,
		kind: "village",
		group: "city"
	},
	{
		name: "Mahajanga",
		country: "Madagascar",
		lat: -15.67,
		lon: 46.345,
		kind: "city",
		group: "city"
	},
	{
		name: "Mahalapye",
		country: "Botswana",
		lat: -23.1,
		lon: 26.82,
		kind: "village",
		group: "city"
	},
	{
		name: "Maiduguri",
		country: "Nigeria",
		lat: 11.8519,
		lon: 13.1581,
		kind: "city",
		group: "city"
	},
	{
		name: "Maitri Station",
		country: "Antarctica",
		lat: -70.7822,
		lon: 11.7305,
		kind: "village",
		group: "city"
	},
	{
		name: "Makassar",
		country: "Indonesia",
		lat: -5.138,
		lon: 119.4301,
		kind: "city",
		group: "city"
	},
	{
		name: "Makkah",
		country: "Saudi Arabia",
		lat: 21.432,
		lon: 39.8181,
		kind: "city",
		group: "city"
	},
	{
		name: "Makurdi",
		country: "Nigeria",
		lat: 7.73,
		lon: 8.53,
		kind: "city",
		group: "city"
	},
	{
		name: "Malakal",
		country: "South Sudan",
		lat: 9.5369,
		lon: 31.656,
		kind: "city",
		group: "city"
	},
	{
		name: "Malang",
		country: "Indonesia",
		lat: -7.978,
		lon: 112.6081,
		kind: "village",
		group: "city"
	},
	{
		name: "Malanje",
		country: "Angola",
		lat: -9.54,
		lon: 16.34,
		kind: "city",
		group: "city"
	},
	{
		name: "Malmo",
		country: "Sweden",
		lat: 55.5833,
		lon: 13.0333,
		kind: "city",
		group: "city"
	},
	{
		name: "Manaus",
		country: "Brazil",
		lat: -3.0981,
		lon: -60.002,
		kind: "city",
		group: "city"
	},
	{
		name: "Manchester",
		country: "United Kingdom",
		lat: 53.5024,
		lon: -2.2499,
		kind: "village",
		group: "city"
	},
	{
		name: "Mandalay",
		country: "Myanmar",
		lat: 21.9719,
		lon: 96.0831,
		kind: "city",
		group: "city"
	},
	{
		name: "Mandurah",
		country: "Australia",
		lat: -32.5235,
		lon: 115.7471,
		kind: "village",
		group: "city"
	},
	{
		name: "Mangaluru",
		country: "India",
		lat: 12.9,
		lon: 74.85,
		kind: "village",
		group: "city"
	},
	{
		name: "Manizales",
		country: "Colombia",
		lat: 5.06,
		lon: -75.52,
		kind: "city",
		group: "city"
	},
	{
		name: "Manukau",
		country: "New Zealand",
		lat: -37,
		lon: 174.885,
		kind: "village",
		group: "city"
	},
	{
		name: "Mar del Plata",
		country: "Argentina",
		lat: -38,
		lon: -57.58,
		kind: "city",
		group: "city"
	},
	{
		name: "Maraba",
		country: "Brazil",
		lat: -5.35,
		lon: -49.116,
		kind: "city",
		group: "city"
	},
	{
		name: "Maracaibo",
		country: "Venezuela",
		lat: 10.7319,
		lon: -71.6619,
		kind: "city",
		group: "city"
	},
	{
		name: "Maradi",
		country: "Niger",
		lat: 13.4916,
		lon: 7.0964,
		kind: "city",
		group: "city"
	},
	{
		name: "Marambio Base",
		country: "Antarctica",
		lat: -64.2329,
		lon: -56.65,
		kind: "village",
		group: "city"
	},
	{
		name: "Mariehamn",
		country: "Aland",
		lat: 60.097,
		lon: 19.949,
		kind: "city",
		group: "city"
	},
	{
		name: "Maroua",
		country: "Cameroon",
		lat: 10.5956,
		lon: 14.3247,
		kind: "city",
		group: "city"
	},
	{
		name: "Marrakesh",
		country: "Morocco",
		lat: 31.6319,
		lon: -8.0019,
		kind: "city",
		group: "city"
	},
	{
		name: "Marseille",
		country: "France",
		lat: 43.2919,
		lon: 5.3731,
		kind: "city",
		group: "city"
	},
	{
		name: "Mary",
		country: "Turkmenistan",
		lat: 37.6,
		lon: 61.8333,
		kind: "city",
		group: "city"
	},
	{
		name: "Masaka",
		country: "Uganda",
		lat: -.3296,
		lon: 31.73,
		kind: "city",
		group: "city"
	},
	{
		name: "Mashhad",
		country: "Iran",
		lat: 36.272,
		lon: 59.5681,
		kind: "city",
		group: "city"
	},
	{
		name: "Matadi",
		country: "Congo (Kinshasa)",
		lat: -5.8166,
		lon: 13.45,
		kind: "city",
		group: "city"
	},
	{
		name: "Matamoros",
		country: "Mexico",
		lat: 25.88,
		lon: -97.5,
		kind: "village",
		group: "city"
	},
	{
		name: "Matsuyama",
		country: "Japan",
		lat: 33.8455,
		lon: 132.7658,
		kind: "city",
		group: "city"
	},
	{
		name: "Mawson Station",
		country: "Antarctica",
		lat: -67.6145,
		lon: 62.875,
		kind: "village",
		group: "city"
	},
	{
		name: "Mazar-e Sharif",
		country: "Afghanistan",
		lat: 36.7,
		lon: 67.1,
		kind: "city",
		group: "city"
	},
	{
		name: "Mazatlan",
		country: "Mexico",
		lat: 23.2211,
		lon: -106.42,
		kind: "city",
		group: "city"
	},
	{
		name: "Mbale",
		country: "Uganda",
		lat: 1.0904,
		lon: 34.17,
		kind: "city",
		group: "city"
	},
	{
		name: "Mbandaka",
		country: "Congo (Kinshasa)",
		lat: .04,
		lon: 18.26,
		kind: "city",
		group: "city"
	},
	{
		name: "Mbarara",
		country: "Uganda",
		lat: -.5996,
		lon: 30.65,
		kind: "city",
		group: "city"
	},
	{
		name: "Mbeya",
		country: "Tanzania",
		lat: -8.89,
		lon: 33.43,
		kind: "city",
		group: "city"
	},
	{
		name: "Mbuji-Mayi",
		country: "Congo (Kinshasa)",
		lat: -6.1481,
		lon: 23.5981,
		kind: "city",
		group: "city"
	},
	{
		name: "McMurdo Station",
		country: "Antarctica",
		lat: -77.7323,
		lon: 166.8694,
		kind: "village",
		group: "city"
	},
	{
		name: "Medan",
		country: "Indonesia",
		lat: 3.5819,
		lon: 98.6481,
		kind: "city",
		group: "city"
	},
	{
		name: "Medellin",
		country: "Colombia",
		lat: 6.2769,
		lon: -75.577,
		kind: "city",
		group: "city"
	},
	{
		name: "Medina",
		country: "Saudi Arabia",
		lat: 24.5019,
		lon: 39.5781,
		kind: "city",
		group: "city"
	},
	{
		name: "Meerut",
		country: "India",
		lat: 29.0024,
		lon: 77.6981,
		kind: "village",
		group: "city"
	},
	{
		name: "Mekele",
		country: "Ethiopia",
		lat: 13.5,
		lon: 39.47,
		kind: "city",
		group: "city"
	},
	{
		name: "Melbourne",
		country: "Australia",
		lat: -37.8181,
		lon: 144.9731,
		kind: "city",
		group: "city"
	},
	{
		name: "Memphis",
		country: "United States of America",
		lat: 35.1219,
		lon: -90.0019,
		kind: "city",
		group: "city"
	},
	{
		name: "Mendoza",
		country: "Argentina",
		lat: -32.8814,
		lon: -68.8186,
		kind: "city",
		group: "city"
	},
	{
		name: "Menongue",
		country: "Angola",
		lat: -14.6666,
		lon: 17.7,
		kind: "city",
		group: "city"
	},
	{
		name: "Merida",
		country: "Venezuela",
		lat: 8.4,
		lon: -71.13,
		kind: "city",
		group: "city"
	},
	{
		name: "Merida",
		country: "Mexico",
		lat: 20.9686,
		lon: -89.6186,
		kind: "city",
		group: "city"
	},
	{
		name: "Meru",
		country: "Kenya",
		lat: .06,
		lon: 37.64,
		kind: "village",
		group: "city"
	},
	{
		name: "Mexicali",
		country: "Mexico",
		lat: 32.6519,
		lon: -115.482,
		kind: "city",
		group: "city"
	},
	{
		name: "Miami",
		country: "United States of America",
		lat: 25.7896,
		lon: -80.2261,
		kind: "city",
		group: "city"
	},
	{
		name: "Mianyang",
		country: "China",
		lat: 31.4719,
		lon: 104.768,
		kind: "village",
		group: "city"
	},
	{
		name: "Middelburg",
		country: "South Africa",
		lat: -31.5,
		lon: 25.01,
		kind: "village",
		group: "city"
	},
	{
		name: "Milan",
		country: "Italy",
		lat: 45.4719,
		lon: 9.2031,
		kind: "city",
		group: "city"
	},
	{
		name: "Milwaukee",
		country: "United States of America",
		lat: 43.0546,
		lon: -87.9219,
		kind: "city",
		group: "city"
	},
	{
		name: "Minneapolis",
		country: "United States of America",
		lat: 44.9819,
		lon: -93.2537,
		kind: "city",
		group: "city"
	},
	{
		name: "Minot",
		country: "United States of America",
		lat: 48.2325,
		lon: -101.2958,
		kind: "village",
		group: "city"
	},
	{
		name: "Mirny Station",
		country: "Antarctica",
		lat: -66.5755,
		lon: 93.0063,
		kind: "village",
		group: "city"
	},
	{
		name: "Mirnyy",
		country: "Russia",
		lat: 62.54,
		lon: 113.9614,
		kind: "village",
		group: "city"
	},
	{
		name: "Misratah",
		country: "Libya",
		lat: 32.38,
		lon: 15.1,
		kind: "city",
		group: "city"
	},
	{
		name: "Missoula",
		country: "United States of America",
		lat: 46.8722,
		lon: -113.9931,
		kind: "village",
		group: "city"
	},
	{
		name: "Mitu",
		country: "Colombia",
		lat: 1.1983,
		lon: -70.1736,
		kind: "city",
		group: "city"
	},
	{
		name: "Miyazaki",
		country: "Japan",
		lat: 31.9182,
		lon: 131.4184,
		kind: "city",
		group: "city"
	},
	{
		name: "Mombasa",
		country: "Kenya",
		lat: -4.0381,
		lon: 39.688,
		kind: "city",
		group: "city"
	},
	{
		name: "Monterrey",
		country: "Mexico",
		lat: 25.6719,
		lon: -100.3319,
		kind: "city",
		group: "city"
	},
	{
		name: "Montes Claros",
		country: "Brazil",
		lat: -16.72,
		lon: -43.86,
		kind: "village",
		group: "city"
	},
	{
		name: "Montgomery",
		country: "United States of America",
		lat: 32.3616,
		lon: -86.2792,
		kind: "city",
		group: "city"
	},
	{
		name: "Montpellier",
		country: "France",
		lat: 43.6104,
		lon: 3.87,
		kind: "city",
		group: "city"
	},
	{
		name: "Montreal",
		country: "Canada",
		lat: 45.5019,
		lon: -73.5852,
		kind: "city",
		group: "city"
	},
	{
		name: "Moradabad",
		country: "India",
		lat: 28.8437,
		lon: 78.7548,
		kind: "village",
		group: "city"
	},
	{
		name: "Morogoro",
		country: "Tanzania",
		lat: -6.82,
		lon: 37.66,
		kind: "city",
		group: "city"
	},
	{
		name: "Moroto",
		country: "Uganda",
		lat: 2.5403,
		lon: 34.64,
		kind: "city",
		group: "city"
	},
	{
		name: "Mosul",
		country: "Iraq",
		lat: 36.3469,
		lon: 43.1431,
		kind: "city",
		group: "city"
	},
	{
		name: "Moundou",
		country: "Chad",
		lat: 8.55,
		lon: 16.09,
		kind: "city",
		group: "city"
	},
	{
		name: "Mount Isa",
		country: "Australia",
		lat: -20.7239,
		lon: 139.49,
		kind: "village",
		group: "city"
	},
	{
		name: "Mt. Hagen",
		country: "Papua New Guinea",
		lat: -5.8632,
		lon: 144.2168,
		kind: "city",
		group: "city"
	},
	{
		name: "Mufulira",
		country: "Zambia",
		lat: -12.55,
		lon: 28.26,
		kind: "village",
		group: "city"
	},
	{
		name: "Multan",
		country: "Pakistan",
		lat: 30.2019,
		lon: 71.4531,
		kind: "city",
		group: "city"
	},
	{
		name: "Mumbai",
		country: "India",
		lat: 19.0189,
		lon: 72.855,
		kind: "city",
		group: "city"
	},
	{
		name: "Munich",
		country: "Germany",
		lat: 48.1319,
		lon: 11.573,
		kind: "city",
		group: "city"
	},
	{
		name: "Murmansk",
		country: "Russia",
		lat: 68.97,
		lon: 33.1,
		kind: "city",
		group: "city"
	},
	{
		name: "Mwanza",
		country: "Tanzania",
		lat: -2.52,
		lon: 32.93,
		kind: "city",
		group: "city"
	},
	{
		name: "Mysuru",
		country: "India",
		lat: 12.3119,
		lon: 76.6581,
		kind: "village",
		group: "city"
	},
	{
		name: "Mzuzu",
		country: "Malawi",
		lat: -11.46,
		lon: 34.02,
		kind: "city",
		group: "city"
	},
	{
		name: "Nacala",
		country: "Mozambique",
		lat: -14.5186,
		lon: 40.715,
		kind: "city",
		group: "city"
	},
	{
		name: "Nagano",
		country: "Japan",
		lat: 36.65,
		lon: 138.17,
		kind: "city",
		group: "city"
	},
	{
		name: "Nagasaki",
		country: "Japan",
		lat: 32.765,
		lon: 129.885,
		kind: "city",
		group: "city"
	},
	{
		name: "Nagoya",
		country: "Japan",
		lat: 35.1569,
		lon: 136.913,
		kind: "city",
		group: "city"
	},
	{
		name: "Nagpur",
		country: "India",
		lat: 21.1719,
		lon: 79.088,
		kind: "city",
		group: "city"
	},
	{
		name: "Naha",
		country: "Japan",
		lat: 26.2072,
		lon: 127.673,
		kind: "city",
		group: "city"
	},
	{
		name: "Nain",
		country: "Canada",
		lat: 56.5474,
		lon: -61.686,
		kind: "city",
		group: "city"
	},
	{
		name: "Nakhon Ratchasima",
		country: "Thailand",
		lat: 15,
		lon: 102.1,
		kind: "city",
		group: "city"
	},
	{
		name: "Naltchik",
		country: "Russia",
		lat: 43.4981,
		lon: 43.6179,
		kind: "city",
		group: "city"
	},
	{
		name: "Namibe",
		country: "Angola",
		lat: -15.19,
		lon: 12.16,
		kind: "city",
		group: "city"
	},
	{
		name: "Nampula",
		country: "Mozambique",
		lat: -15.136,
		lon: 39.293,
		kind: "city",
		group: "city"
	},
	{
		name: "Nanchang",
		country: "China",
		lat: 28.6819,
		lon: 115.8781,
		kind: "city",
		group: "city"
	},
	{
		name: "Nanchong",
		country: "China",
		lat: 30.7824,
		lon: 106.1281,
		kind: "village",
		group: "city"
	},
	{
		name: "Nancy",
		country: "France",
		lat: 48.6837,
		lon: 6.2,
		kind: "city",
		group: "city"
	},
	{
		name: "Nanded",
		country: "India",
		lat: 19.17,
		lon: 77.3,
		kind: "village",
		group: "city"
	},
	{
		name: "Nanjing",
		country: "China",
		lat: 32.052,
		lon: 118.778,
		kind: "city",
		group: "city"
	},
	{
		name: "Nanning",
		country: "China",
		lat: 22.8219,
		lon: 108.3181,
		kind: "city",
		group: "city"
	},
	{
		name: "Nantes",
		country: "France",
		lat: 47.2104,
		lon: -1.59,
		kind: "city",
		group: "city"
	},
	{
		name: "Nanyang",
		country: "China",
		lat: 33.0023,
		lon: 112.5281,
		kind: "village",
		group: "city"
	},
	{
		name: "Napier",
		country: "New Zealand",
		lat: -39.49,
		lon: 176.9265,
		kind: "city",
		group: "city"
	},
	{
		name: "Naples",
		country: "Italy",
		lat: 40.842,
		lon: 14.2431,
		kind: "city",
		group: "city"
	},
	{
		name: "Narsarsuaq",
		country: "Greenland",
		lat: 61.1666,
		lon: -45.4166,
		kind: "village",
		group: "city"
	},
	{
		name: "Nashville",
		country: "United States of America",
		lat: 36.1719,
		lon: -86.7819,
		kind: "city",
		group: "city"
	},
	{
		name: "Nasik",
		country: "India",
		lat: 20.0024,
		lon: 73.778,
		kind: "village",
		group: "city"
	},
	{
		name: "Natal",
		country: "Brazil",
		lat: -5.7781,
		lon: -35.242,
		kind: "city",
		group: "city"
	},
	{
		name: "Ndele",
		country: "Central African Republic",
		lat: 8.4091,
		lon: 20.653,
		kind: "city",
		group: "city"
	},
	{
		name: "Neijiang",
		country: "China",
		lat: 29.5823,
		lon: 105.0481,
		kind: "village",
		group: "city"
	},
	{
		name: "Neumayer Station III",
		country: "Antarctica",
		lat: -70.8904,
		lon: -7.8384,
		kind: "village",
		group: "city"
	},
	{
		name: "Neuquen",
		country: "Argentina",
		lat: -38.95,
		lon: -68.06,
		kind: "city",
		group: "city"
	},
	{
		name: "New Orleans",
		country: "United States of America",
		lat: 29.9969,
		lon: -90.0419,
		kind: "city",
		group: "city"
	},
	{
		name: "New York",
		country: "United States of America",
		lat: 40.7519,
		lon: -73.982,
		kind: "village",
		group: "city"
	},
	{
		name: "Newcastle",
		country: "Australia",
		lat: -32.8453,
		lon: 151.815,
		kind: "city",
		group: "city"
	},
	{
		name: "Ningbo",
		country: "China",
		lat: 29.8819,
		lon: 121.5481,
		kind: "village",
		group: "city"
	},
	{
		name: "Niyala",
		country: "Sudan",
		lat: 12.06,
		lon: 24.89,
		kind: "city",
		group: "city"
	},
	{
		name: "Nizhneyansk",
		country: "Russia",
		lat: 71.4333,
		lon: 136.0666,
		kind: "city",
		group: "city"
	},
	{
		name: "Nizhny Novgorod",
		country: "Russia",
		lat: 56.335,
		lon: 43.9981,
		kind: "city",
		group: "city"
	},
	{
		name: "Nizhny Tagil",
		country: "Russia",
		lat: 57.92,
		lon: 59.975,
		kind: "village",
		group: "city"
	},
	{
		name: "Nogales",
		country: "Mexico",
		lat: 31.305,
		lon: -110.945,
		kind: "village",
		group: "city"
	},
	{
		name: "Nome",
		country: "United States of America",
		lat: 64.5061,
		lon: -165.4064,
		kind: "city",
		group: "city"
	},
	{
		name: "Norfolk",
		country: "United States of America",
		lat: 36.85,
		lon: -76.28,
		kind: "city",
		group: "city"
	},
	{
		name: "Norilsk",
		country: "Russia",
		lat: 69.34,
		lon: 88.225,
		kind: "village",
		group: "city"
	},
	{
		name: "North Bay",
		country: "Canada",
		lat: 46.3,
		lon: -79.45,
		kind: "village",
		group: "city"
	},
	{
		name: "Nouadhibou",
		country: "Mauritania",
		lat: 20.9,
		lon: -17.056,
		kind: "city",
		group: "city"
	},
	{
		name: "Noumea",
		country: "New Caledonia",
		lat: -22.2625,
		lon: 166.4443,
		kind: "city",
		group: "city"
	},
	{
		name: "Novi Sad",
		country: "Serbia",
		lat: 45.2504,
		lon: 19.8499,
		kind: "city",
		group: "city"
	},
	{
		name: "Novokuznetsk",
		country: "Russia",
		lat: 53.75,
		lon: 87.115,
		kind: "village",
		group: "city"
	},
	{
		name: "Novolazarevskaya Station",
		country: "Antarctica",
		lat: -71.3012,
		lon: -11.8502,
		kind: "village",
		group: "city"
	},
	{
		name: "Novosibirsk",
		country: "Russia",
		lat: 55.0319,
		lon: 82.9581,
		kind: "city",
		group: "city"
	},
	{
		name: "Nuevo Laredo",
		country: "Mexico",
		lat: 27.5,
		lon: -99.55,
		kind: "village",
		group: "city"
	},
	{
		name: "Nukus",
		country: "Uzbekistan",
		lat: 42.47,
		lon: 59.615,
		kind: "city",
		group: "city"
	},
	{
		name: "Nuuk",
		country: "Greenland",
		lat: 64.1983,
		lon: -51.7327,
		kind: "city",
		group: "city"
	},
	{
		name: "Nzerekore",
		country: "Guinea",
		lat: 7.76,
		lon: -8.83,
		kind: "city",
		group: "city"
	},
	{
		name: "Oaxaca",
		country: "Mexico",
		lat: 17.0827,
		lon: -96.67,
		kind: "city",
		group: "city"
	},
	{
		name: "Obo",
		country: "Central African Republic",
		lat: 5.4,
		lon: 26.5,
		kind: "city",
		group: "city"
	},
	{
		name: "Odessa",
		country: "Ukraine",
		lat: 46.492,
		lon: 30.7081,
		kind: "city",
		group: "city"
	},
	{
		name: "Ogbomosho",
		country: "Nigeria",
		lat: 8.132,
		lon: 4.238,
		kind: "village",
		group: "city"
	},
	{
		name: "Okha",
		country: "Russia",
		lat: 53.5739,
		lon: 142.9479,
		kind: "village",
		group: "city"
	},
	{
		name: "Okhotsk",
		country: "Russia",
		lat: 59.383,
		lon: 143.217,
		kind: "village",
		group: "city"
	},
	{
		name: "Oklahoma City",
		country: "United States of America",
		lat: 35.472,
		lon: -97.5206,
		kind: "city",
		group: "city"
	},
	{
		name: "Olympia",
		country: "United States of America",
		lat: 47.038,
		lon: -122.8994,
		kind: "city",
		group: "city"
	},
	{
		name: "Omaha",
		country: "United States of America",
		lat: 41.24,
		lon: -96.01,
		kind: "city",
		group: "city"
	},
	{
		name: "Omdurman",
		country: "Sudan",
		lat: 15.6167,
		lon: 32.48,
		kind: "city",
		group: "city"
	},
	{
		name: "Omsk",
		country: "Russia",
		lat: 54.9919,
		lon: 73.398,
		kind: "city",
		group: "city"
	},
	{
		name: "Oran",
		country: "Algeria",
		lat: 35.7119,
		lon: -.6219,
		kind: "city",
		group: "city"
	},
	{
		name: "Orange",
		country: "Australia",
		lat: -33.28,
		lon: 149.1,
		kind: "village",
		group: "city"
	},
	{
		name: "Oranjestad",
		country: "Aruba",
		lat: 12.5304,
		lon: -70.029,
		kind: "city",
		group: "city"
	},
	{
		name: "Orcadas Station",
		country: "Antarctica",
		lat: -60.7329,
		lon: -44.7333,
		kind: "village",
		group: "city"
	},
	{
		name: "Orenburg",
		country: "Russia",
		lat: 51.78,
		lon: 55.11,
		kind: "city",
		group: "city"
	},
	{
		name: "Orlando",
		country: "United States of America",
		lat: 28.5119,
		lon: -81.382,
		kind: "village",
		group: "city"
	},
	{
		name: "Orleans",
		country: "France",
		lat: 47.9004,
		lon: 1.9,
		kind: "city",
		group: "city"
	},
	{
		name: "Osaka",
		country: "Japan",
		lat: 34.752,
		lon: 135.4582,
		kind: "city",
		group: "city"
	},
	{
		name: "Oskemen",
		country: "Kazakhstan",
		lat: 49.99,
		lon: 82.6149,
		kind: "city",
		group: "city"
	},
	{
		name: "Otjiwarongo",
		country: "Namibia",
		lat: -20.4595,
		lon: 16.64,
		kind: "city",
		group: "city"
	},
	{
		name: "Oujda",
		country: "Morocco",
		lat: 34.69,
		lon: -1.91,
		kind: "city",
		group: "city"
	},
	{
		name: "Padang",
		country: "Indonesia",
		lat: -.9581,
		lon: 100.3581,
		kind: "city",
		group: "city"
	},
	{
		name: "Pago Pago",
		country: "American Samoa",
		lat: -14.2766,
		lon: -170.7066,
		kind: "city",
		group: "city"
	},
	{
		name: "Palana",
		country: "Russia",
		lat: 59.084,
		lon: 159.95,
		kind: "city",
		group: "city"
	},
	{
		name: "Palembang",
		country: "Indonesia",
		lat: -2.9781,
		lon: 104.7481,
		kind: "city",
		group: "city"
	},
	{
		name: "Palermo",
		country: "Italy",
		lat: 38.127,
		lon: 13.3481,
		kind: "city",
		group: "city"
	},
	{
		name: "Palmer Station",
		country: "Antarctica",
		lat: -64.7624,
		lon: -64.0469,
		kind: "village",
		group: "city"
	},
	{
		name: "Papeete",
		country: "French Polynesia",
		lat: -17.5334,
		lon: -149.5667,
		kind: "city",
		group: "city"
	},
	{
		name: "Parakou",
		country: "Benin",
		lat: 9.34,
		lon: 2.62,
		kind: "city",
		group: "city"
	},
	{
		name: "Parepare",
		country: "Indonesia",
		lat: -4.0167,
		lon: 119.6333,
		kind: "village",
		group: "city"
	},
	{
		name: "Pasto",
		country: "Colombia",
		lat: 1.2136,
		lon: -77.2811,
		kind: "city",
		group: "city"
	},
	{
		name: "Patna",
		country: "India",
		lat: 25.6269,
		lon: 85.1281,
		kind: "city",
		group: "city"
	},
	{
		name: "Pavlodar",
		country: "Kazakhstan",
		lat: 52.3,
		lon: 76.95,
		kind: "city",
		group: "city"
	},
	{
		name: "Peace River",
		country: "Canada",
		lat: 56.2333,
		lon: -117.2833,
		kind: "village",
		group: "city"
	},
	{
		name: "Pelotas",
		country: "Brazil",
		lat: -31.75,
		lon: -52.33,
		kind: "village",
		group: "city"
	},
	{
		name: "Pemba",
		country: "Mozambique",
		lat: -12.983,
		lon: 40.5323,
		kind: "city",
		group: "city"
	},
	{
		name: "Penza",
		country: "Russia",
		lat: 53.18,
		lon: 45,
		kind: "city",
		group: "city"
	},
	{
		name: "Perm",
		country: "Russia",
		lat: 58.0019,
		lon: 56.248,
		kind: "city",
		group: "city"
	},
	{
		name: "Perth",
		country: "Australia",
		lat: -31.9531,
		lon: 115.8381,
		kind: "city",
		group: "city"
	},
	{
		name: "Perugia",
		country: "Italy",
		lat: 43.1104,
		lon: 12.39,
		kind: "city",
		group: "city"
	},
	{
		name: "Peshawar",
		country: "Pakistan",
		lat: 34.007,
		lon: 71.5331,
		kind: "city",
		group: "city"
	},
	{
		name: "Peter I Island",
		country: "Antarctica",
		lat: -68.7952,
		lon: -90.5842,
		kind: "village",
		group: "city"
	},
	{
		name: "Petrolina",
		country: "Brazil",
		lat: -9.38,
		lon: -40.51,
		kind: "village",
		group: "city"
	},
	{
		name: "Petropavlovsk Kamchatskiy",
		country: "Russia",
		lat: 53.062,
		lon: 158.623,
		kind: "city",
		group: "city"
	},
	{
		name: "Petrozavodsk",
		country: "Russia",
		lat: 61.85,
		lon: 34.28,
		kind: "city",
		group: "city"
	},
	{
		name: "Philadelphia",
		country: "United States of America",
		lat: 40.0019,
		lon: -75.1719,
		kind: "city",
		group: "city"
	},
	{
		name: "Phoenix",
		country: "United States of America",
		lat: 33.5419,
		lon: -112.0719,
		kind: "city",
		group: "city"
	},
	{
		name: "Pierre",
		country: "United States of America",
		lat: 44.3683,
		lon: -100.3506,
		kind: "city",
		group: "city"
	},
	{
		name: "Pingxiang",
		country: "China",
		lat: 27.622,
		lon: 113.8481,
		kind: "city",
		group: "city"
	},
	{
		name: "Pittsburgh",
		country: "United States of America",
		lat: 40.4319,
		lon: -80.0019,
		kind: "city",
		group: "city"
	},
	{
		name: "Piura",
		country: "Peru",
		lat: -5.21,
		lon: -80.63,
		kind: "city",
		group: "city"
	},
	{
		name: "Point Hope",
		country: "United States of America",
		lat: 68.3477,
		lon: -166.808,
		kind: "city",
		group: "city"
	},
	{
		name: "Pointe-Noire",
		country: "Congo (Brazzaville)",
		lat: -4.77,
		lon: 11.88,
		kind: "city",
		group: "city"
	},
	{
		name: "Poitier",
		country: "France",
		lat: 46.5833,
		lon: .3333,
		kind: "city",
		group: "city"
	},
	{
		name: "Ponta Delgada",
		country: "Portugal",
		lat: 37.7483,
		lon: -25.6666,
		kind: "city",
		group: "city"
	},
	{
		name: "Ponta Grossa",
		country: "Brazil",
		lat: -25.09,
		lon: -50.16,
		kind: "village",
		group: "city"
	},
	{
		name: "Port Elizabeth",
		country: "South Africa",
		lat: -33.9681,
		lon: 25.5981,
		kind: "city",
		group: "city"
	},
	{
		name: "Port Harcourt",
		country: "Nigeria",
		lat: 4.8119,
		lon: 7.0081,
		kind: "city",
		group: "city"
	},
	{
		name: "Port Hedland",
		country: "Australia",
		lat: -20.3104,
		lon: 118.606,
		kind: "village",
		group: "city"
	},
	{
		name: "Port Lincoln",
		country: "Australia",
		lat: -34.7332,
		lon: 135.8666,
		kind: "village",
		group: "city"
	},
	{
		name: "Port Sudan",
		country: "Sudan",
		lat: 19.6158,
		lon: 37.2164,
		kind: "city",
		group: "city"
	},
	{
		name: "Port-Gentil",
		country: "Gabon",
		lat: -.72,
		lon: 8.78,
		kind: "city",
		group: "city"
	},
	{
		name: "Portland",
		country: "Australia",
		lat: -38.34,
		lon: 141.59,
		kind: "village",
		group: "city"
	},
	{
		name: "Portland",
		country: "United States of America",
		lat: 45.522,
		lon: -122.6819,
		kind: "city",
		group: "city"
	},
	{
		name: "Porto Alegre",
		country: "Brazil",
		lat: -30.0481,
		lon: -51.202,
		kind: "city",
		group: "city"
	},
	{
		name: "Porto Velho",
		country: "Brazil",
		lat: -8.75,
		lon: -63.9,
		kind: "city",
		group: "city"
	},
	{
		name: "Posadas",
		country: "Argentina",
		lat: -27.3578,
		lon: -55.8851,
		kind: "city",
		group: "city"
	},
	{
		name: "Potenza",
		country: "Italy",
		lat: 40.642,
		lon: 15.799,
		kind: "city",
		group: "city"
	},
	{
		name: "Prince Rupert",
		country: "Canada",
		lat: 54.3167,
		lon: -130.33,
		kind: "city",
		group: "city"
	},
	{
		name: "Prudhoe Bay",
		country: "United States of America",
		lat: 70.2922,
		lon: -148.6694,
		kind: "city",
		group: "city"
	},
	{
		name: "Pskov",
		country: "Russia",
		lat: 57.83,
		lon: 28.3299,
		kind: "city",
		group: "city"
	},
	{
		name: "Pucallpa",
		country: "Peru",
		lat: -8.3689,
		lon: -74.535,
		kind: "city",
		group: "city"
	},
	{
		name: "Puducherry",
		country: "India",
		lat: 11.935,
		lon: 79.83,
		kind: "city",
		group: "city"
	},
	{
		name: "Puebla",
		country: "Mexico",
		lat: 19.0519,
		lon: -98.202,
		kind: "city",
		group: "city"
	},
	{
		name: "Puerto Ayacucho",
		country: "Venezuela",
		lat: 5.6639,
		lon: -67.6236,
		kind: "city",
		group: "city"
	},
	{
		name: "Puerto Deseado",
		country: "Argentina",
		lat: -47.75,
		lon: -65.9,
		kind: "city",
		group: "city"
	},
	{
		name: "Puerto Limon",
		country: "Costa Rica",
		lat: 10,
		lon: -83.0333,
		kind: "city",
		group: "city"
	},
	{
		name: "Puerto Montt",
		country: "Chile",
		lat: -41.47,
		lon: -72.93,
		kind: "city",
		group: "city"
	},
	{
		name: "Pune",
		country: "India",
		lat: 18.532,
		lon: 73.8481,
		kind: "city",
		group: "city"
	},
	{
		name: "Punta Arenas",
		country: "Chile",
		lat: -53.165,
		lon: -70.94,
		kind: "city",
		group: "city"
	},
	{
		name: "Qaanaaq",
		country: "Greenland",
		lat: 77.4835,
		lon: -69.3322,
		kind: "city",
		group: "city"
	},
	{
		name: "Qaraghandy",
		country: "Kazakhstan",
		lat: 49.885,
		lon: 73.115,
		kind: "city",
		group: "city"
	},
	{
		name: "Qingdao",
		country: "China",
		lat: 36.0919,
		lon: 120.3281,
		kind: "village",
		group: "city"
	},
	{
		name: "Qiqihar",
		country: "China",
		lat: 47.3469,
		lon: 123.988,
		kind: "city",
		group: "city"
	},
	{
		name: "Quanzhou",
		country: "China",
		lat: 24.902,
		lon: 118.578,
		kind: "village",
		group: "city"
	},
	{
		name: "Quebec",
		country: "Canada",
		lat: 46.84,
		lon: -71.2456,
		kind: "city",
		group: "city"
	},
	{
		name: "Quelimane",
		country: "Mozambique",
		lat: -17.88,
		lon: 36.89,
		kind: "city",
		group: "city"
	},
	{
		name: "Quetta",
		country: "Pakistan",
		lat: 30.2219,
		lon: 67.023,
		kind: "city",
		group: "city"
	},
	{
		name: "Quetzaltenango",
		country: "Guatemala",
		lat: 14.83,
		lon: -91.52,
		kind: "city",
		group: "city"
	},
	{
		name: "Qyzylorda",
		country: "Kazakhstan",
		lat: 44.8,
		lon: 65.465,
		kind: "city",
		group: "city"
	},
	{
		name: "Raba",
		country: "Indonesia",
		lat: -8.45,
		lon: 118.7666,
		kind: "village",
		group: "city"
	},
	{
		name: "Rabaul",
		country: "Papua New Guinea",
		lat: -4.2055,
		lon: 152.1434,
		kind: "city",
		group: "city"
	},
	{
		name: "Raipur",
		country: "India",
		lat: 21.2369,
		lon: 81.6331,
		kind: "city",
		group: "city"
	},
	{
		name: "Rajkot",
		country: "India",
		lat: 22.312,
		lon: 70.7981,
		kind: "village",
		group: "city"
	},
	{
		name: "Rajshahi",
		country: "Bangladesh",
		lat: 24.3769,
		lon: 88.6031,
		kind: "city",
		group: "city"
	},
	{
		name: "Raleigh",
		country: "United States of America",
		lat: 35.8188,
		lon: -78.6447,
		kind: "city",
		group: "city"
	},
	{
		name: "Ramallah",
		country: "Palestine",
		lat: 31.9029,
		lon: 35.2062,
		kind: "city",
		group: "city"
	},
	{
		name: "Ranchi",
		country: "India",
		lat: 23.372,
		lon: 85.3281,
		kind: "city",
		group: "city"
	},
	{
		name: "Rawson",
		country: "Argentina",
		lat: -43.3,
		lon: -65.1,
		kind: "city",
		group: "city"
	},
	{
		name: "Recife",
		country: "Brazil",
		lat: -8.0737,
		lon: -34.9176,
		kind: "city",
		group: "city"
	},
	{
		name: "Regina",
		country: "Canada",
		lat: 50.45,
		lon: -104.617,
		kind: "city",
		group: "city"
	},
	{
		name: "Reims",
		country: "France",
		lat: 49.2504,
		lon: 4.03,
		kind: "city",
		group: "city"
	},
	{
		name: "Rennes",
		country: "France",
		lat: 48.1,
		lon: -1.67,
		kind: "city",
		group: "city"
	},
	{
		name: "Reno",
		country: "United States of America",
		lat: 39.53,
		lon: -119.82,
		kind: "village",
		group: "city"
	},
	{
		name: "Repulse Bay",
		country: "Canada",
		lat: 66.5295,
		lon: -86.2829,
		kind: "city",
		group: "city"
	},
	{
		name: "Resolute",
		country: "Canada",
		lat: 74.6833,
		lon: -94.9,
		kind: "city",
		group: "city"
	},
	{
		name: "Ribeirao Preto",
		country: "Brazil",
		lat: -21.17,
		lon: -47.83,
		kind: "village",
		group: "city"
	},
	{
		name: "Riberalta",
		country: "Bolivia",
		lat: -10.983,
		lon: -66.1,
		kind: "city",
		group: "city"
	},
	{
		name: "Richmond",
		country: "United States of America",
		lat: 37.552,
		lon: -77.4519,
		kind: "city",
		group: "city"
	},
	{
		name: "Rio Branco",
		country: "Brazil",
		lat: -9.9666,
		lon: -67.8,
		kind: "city",
		group: "city"
	},
	{
		name: "Rio Gallegos",
		country: "Argentina",
		lat: -51.6333,
		lon: -69.2166,
		kind: "city",
		group: "city"
	},
	{
		name: "Rio de Janeiro",
		country: "Brazil",
		lat: -22.9231,
		lon: -43.227,
		kind: "city",
		group: "city"
	},
	{
		name: "Rochester",
		country: "United States of America",
		lat: 43.1724,
		lon: -77.6219,
		kind: "village",
		group: "city"
	},
	{
		name: "Rockhampton",
		country: "Australia",
		lat: -23.3639,
		lon: 150.52,
		kind: "village",
		group: "city"
	},
	{
		name: "Rosario",
		country: "Argentina",
		lat: -32.9492,
		lon: -60.6683,
		kind: "village",
		group: "city"
	},
	{
		name: "Rostov",
		country: "Russia",
		lat: 47.2366,
		lon: 39.7107,
		kind: "city",
		group: "city"
	},
	{
		name: "Rothera Station",
		country: "Antarctica",
		lat: -67.5648,
		lon: -68.1235,
		kind: "village",
		group: "city"
	},
	{
		name: "Rouen",
		country: "France",
		lat: 49.4304,
		lon: 1.08,
		kind: "city",
		group: "city"
	},
	{
		name: "Rovaniemi",
		country: "Finland",
		lat: 66.5,
		lon: 25.7159,
		kind: "city",
		group: "city"
	},
	{
		name: "Rudny",
		country: "Kazakhstan",
		lat: 52.9527,
		lon: 63.13,
		kind: "village",
		group: "city"
	},
	{
		name: "Ryazan",
		country: "Russia",
		lat: 54.62,
		lon: 39.72,
		kind: "city",
		group: "city"
	},
	{
		name: "Sabha",
		country: "Libya",
		lat: 27.0333,
		lon: 14.4333,
		kind: "city",
		group: "city"
	},
	{
		name: "Sacramento",
		country: "United States of America",
		lat: 38.577,
		lon: -121.472,
		kind: "city",
		group: "city"
	},
	{
		name: "Safi",
		country: "Morocco",
		lat: 32.32,
		lon: -9.24,
		kind: "city",
		group: "city"
	},
	{
		name: "Saharanpur",
		country: "India",
		lat: 29.97,
		lon: 77.55,
		kind: "village",
		group: "city"
	},
	{
		name: "Saint-Laurent-du-Maroni",
		country: "France",
		lat: 5.4976,
		lon: -54.0325,
		kind: "city",
		group: "city"
	},
	{
		name: "Sakata",
		country: "Japan",
		lat: 38.92,
		lon: 139.8501,
		kind: "village",
		group: "city"
	},
	{
		name: "Salem",
		country: "United States of America",
		lat: 44.9281,
		lon: -123.0239,
		kind: "city",
		group: "city"
	},
	{
		name: "Salem",
		country: "India",
		lat: 11.6719,
		lon: 78.1781,
		kind: "village",
		group: "city"
	},
	{
		name: "Salt Lake City",
		country: "United States of America",
		lat: 40.777,
		lon: -111.932,
		kind: "city",
		group: "city"
	},
	{
		name: "Salta",
		country: "Argentina",
		lat: -24.7834,
		lon: -65.4166,
		kind: "city",
		group: "city"
	},
	{
		name: "Salvador",
		country: "Brazil",
		lat: -12.968,
		lon: -38.4819,
		kind: "city",
		group: "city"
	},
	{
		name: "Samara",
		country: "Russia",
		lat: 53.197,
		lon: 50.1493,
		kind: "city",
		group: "city"
	},
	{
		name: "Samarqand",
		country: "Uzbekistan",
		lat: 39.67,
		lon: 66.945,
		kind: "city",
		group: "city"
	},
	{
		name: "Samsun",
		country: "Turkey",
		lat: 41.28,
		lon: 36.3437,
		kind: "city",
		group: "city"
	},
	{
		name: "San Antonio",
		country: "United States of America",
		lat: 29.4893,
		lon: -98.5093,
		kind: "city",
		group: "city"
	},
	{
		name: "San Bernardino",
		country: "United States of America",
		lat: 34.1223,
		lon: -117.302,
		kind: "village",
		group: "city"
	},
	{
		name: "San Carlos de Bariloche",
		country: "Argentina",
		lat: -41.15,
		lon: -71.3,
		kind: "village",
		group: "city"
	},
	{
		name: "San Cristobal",
		country: "Venezuela",
		lat: 7.77,
		lon: -72.25,
		kind: "city",
		group: "city"
	},
	{
		name: "San Diego",
		country: "United States of America",
		lat: 32.822,
		lon: -117.1819,
		kind: "city",
		group: "city"
	},
	{
		name: "San Francisco",
		country: "United States of America",
		lat: 37.7692,
		lon: -122.4172,
		kind: "city",
		group: "city"
	},
	{
		name: "San Jose",
		country: "United States of America",
		lat: 37.3019,
		lon: -121.8519,
		kind: "city",
		group: "city"
	},
	{
		name: "San Juan",
		country: "Argentina",
		lat: -31.55,
		lon: -68.52,
		kind: "city",
		group: "city"
	},
	{
		name: "San Juan",
		country: "Puerto Rico",
		lat: 18.44,
		lon: -66.13,
		kind: "city",
		group: "city"
	},
	{
		name: "San Luis Potosi",
		country: "Mexico",
		lat: 22.1719,
		lon: -101.0019,
		kind: "city",
		group: "city"
	},
	{
		name: "San Martin Base",
		country: "Antarctica",
		lat: -68.1163,
		lon: -67.1,
		kind: "village",
		group: "city"
	},
	{
		name: "Santa Barbara",
		country: "United States of America",
		lat: 34.435,
		lon: -119.72,
		kind: "village",
		group: "city"
	},
	{
		name: "Santa Cruz",
		country: "Ecuador",
		lat: -.5333,
		lon: -90.35,
		kind: "village",
		group: "city"
	},
	{
		name: "Santa Cruz",
		country: "Bolivia",
		lat: -17.752,
		lon: -63.2279,
		kind: "city",
		group: "city"
	},
	{
		name: "Santa Fe",
		country: "Argentina",
		lat: -31.6239,
		lon: -60.69,
		kind: "city",
		group: "city"
	},
	{
		name: "Santa Fe",
		country: "United States of America",
		lat: 35.6869,
		lon: -105.9372,
		kind: "city",
		group: "city"
	},
	{
		name: "Santa Rosa",
		country: "Argentina",
		lat: -36.62,
		lon: -64.3,
		kind: "city",
		group: "city"
	},
	{
		name: "Santarem",
		country: "Brazil",
		lat: -2.4333,
		lon: -54.7,
		kind: "city",
		group: "city"
	},
	{
		name: "Santiago",
		country: "Dominican Republic",
		lat: 19.5,
		lon: -70.67,
		kind: "city",
		group: "city"
	},
	{
		name: "Santiago de Cuba",
		country: "Cuba",
		lat: 20.025,
		lon: -75.8213,
		kind: "city",
		group: "city"
	},
	{
		name: "Sao Luis",
		country: "Brazil",
		lat: -2.514,
		lon: -44.2679,
		kind: "city",
		group: "city"
	},
	{
		name: "Sao Paulo",
		country: "Brazil",
		lat: -23.5567,
		lon: -46.627,
		kind: "city",
		group: "city"
	},
	{
		name: "Sapporo",
		country: "Japan",
		lat: 43.0769,
		lon: 141.3381,
		kind: "city",
		group: "city"
	},
	{
		name: "Saratov",
		country: "Russia",
		lat: 51.5819,
		lon: 46.0281,
		kind: "city",
		group: "city"
	},
	{
		name: "Saskatoon",
		country: "Canada",
		lat: 52.17,
		lon: -106.67,
		kind: "city",
		group: "city"
	},
	{
		name: "Sault Ste. Marie",
		country: "United States of America",
		lat: 46.4953,
		lon: -84.3453,
		kind: "village",
		group: "city"
	},
	{
		name: "Savannah",
		country: "United States of America",
		lat: 32.0211,
		lon: -81.11,
		kind: "village",
		group: "city"
	},
	{
		name: "Scott Base",
		country: "Antarctica",
		lat: -77.8469,
		lon: 166.7491,
		kind: "village",
		group: "city"
	},
	{
		name: "Seattle",
		country: "United States of America",
		lat: 47.5719,
		lon: -122.3419,
		kind: "city",
		group: "city"
	},
	{
		name: "Segou",
		country: "Mali",
		lat: 13.44,
		lon: -6.26,
		kind: "city",
		group: "city"
	},
	{
		name: "Semarang",
		country: "Indonesia",
		lat: -6.9647,
		lon: 110.4181,
		kind: "city",
		group: "city"
	},
	{
		name: "Semey",
		country: "Kazakhstan",
		lat: 50.435,
		lon: 80.275,
		kind: "city",
		group: "city"
	},
	{
		name: "Sendai",
		country: "Japan",
		lat: 38.2891,
		lon: 141.0198,
		kind: "city",
		group: "city"
	},
	{
		name: "Serowe",
		country: "Botswana",
		lat: -22.39,
		lon: 26.71,
		kind: "city",
		group: "city"
	},
	{
		name: "Sevastapol",
		country: "Russia",
		lat: 44.6,
		lon: 33.465,
		kind: "city",
		group: "city"
	},
	{
		name: "Seville",
		country: "Spain",
		lat: 37.405,
		lon: -5.98,
		kind: "city",
		group: "city"
	},
	{
		name: "Shache",
		country: "China",
		lat: 38.4261,
		lon: 77.25,
		kind: "village",
		group: "city"
	},
	{
		name: "Shanghai",
		country: "China",
		lat: 31.2184,
		lon: 121.4346,
		kind: "city",
		group: "city"
	},
	{
		name: "Shantou",
		country: "China",
		lat: 23.372,
		lon: 116.6681,
		kind: "city",
		group: "city"
	},
	{
		name: "Shaoguan",
		country: "China",
		lat: 24.8,
		lon: 113.58,
		kind: "village",
		group: "city"
	},
	{
		name: "Shenyeng",
		country: "China",
		lat: 41.8069,
		lon: 123.448,
		kind: "city",
		group: "city"
	},
	{
		name: "Shenzhen",
		country: "China",
		lat: 22.5543,
		lon: 114.1202,
		kind: "city",
		group: "city"
	},
	{
		name: "Shijiazhuang",
		country: "China",
		lat: 38.052,
		lon: 114.478,
		kind: "city",
		group: "city"
	},
	{
		name: "Shiraz",
		country: "Iran",
		lat: 29.6319,
		lon: 52.5681,
		kind: "city",
		group: "city"
	},
	{
		name: "Shizuishan",
		country: "China",
		lat: 39.2333,
		lon: 106.769,
		kind: "village",
		group: "city"
	},
	{
		name: "Sholapur",
		country: "India",
		lat: 17.6724,
		lon: 75.8981,
		kind: "village",
		group: "city"
	},
	{
		name: "Showa Station",
		country: "Antarctica",
		lat: -69.0304,
		lon: 39.7461,
		kind: "village",
		group: "city"
	},
	{
		name: "Shreveport",
		country: "United States of America",
		lat: 32.5,
		lon: -93.77,
		kind: "village",
		group: "city"
	},
	{
		name: "Shymkent",
		country: "Kazakhstan",
		lat: 42.32,
		lon: 69.595,
		kind: "city",
		group: "city"
	},
	{
		name: "Siem Reap",
		country: "Cambodia",
		lat: 13.3666,
		lon: 103.85,
		kind: "city",
		group: "city"
	},
	{
		name: "Signy Research Station",
		country: "Antarctica",
		lat: -60.6313,
		lon: -45.6007,
		kind: "village",
		group: "city"
	},
	{
		name: "Sinuiju",
		country: "North Korea",
		lat: 40.0859,
		lon: 124.4213,
		kind: "city",
		group: "city"
	},
	{
		name: "Sioux Falls",
		country: "United States of America",
		lat: 43.55,
		lon: -96.73,
		kind: "village",
		group: "city"
	},
	{
		name: "Sisimiut",
		country: "Greenland",
		lat: 66.95,
		lon: -53.6666,
		kind: "village",
		group: "city"
	},
	{
		name: "Sitka",
		country: "United States of America",
		lat: 57.0604,
		lon: -135.3275,
		kind: "village",
		group: "city"
	},
	{
		name: "Sittwe",
		country: "Myanmar",
		lat: 20.14,
		lon: 92.88,
		kind: "city",
		group: "city"
	},
	{
		name: "Smolensk",
		country: "Russia",
		lat: 54.7827,
		lon: 32.0473,
		kind: "city",
		group: "city"
	},
	{
		name: "Sobral Base",
		country: "Antarctica",
		lat: -81.1791,
		lon: -40.5015,
		kind: "village",
		group: "city"
	},
	{
		name: "Sochi",
		country: "Russia",
		lat: 43.59,
		lon: 39.73,
		kind: "village",
		group: "city"
	},
	{
		name: "Sokoto",
		country: "Nigeria",
		lat: 13.06,
		lon: 5.24,
		kind: "city",
		group: "city"
	},
	{
		name: "Sorocaba",
		country: "Brazil",
		lat: -23.49,
		lon: -47.47,
		kind: "village",
		group: "city"
	},
	{
		name: "Sousse",
		country: "Tunisia",
		lat: 35.83,
		lon: 10.625,
		kind: "city",
		group: "city"
	},
	{
		name: "Spokane",
		country: "United States of America",
		lat: 47.67,
		lon: -117.4199,
		kind: "village",
		group: "city"
	},
	{
		name: "Springbok",
		country: "South Africa",
		lat: -29.6667,
		lon: 17.8833,
		kind: "village",
		group: "city"
	},
	{
		name: "Srinagar",
		country: "India",
		lat: 34.1019,
		lon: 74.8131,
		kind: "city",
		group: "city"
	},
	{
		name: "St. John's",
		country: "Canada",
		lat: 47.585,
		lon: -52.681,
		kind: "city",
		group: "city"
	},
	{
		name: "St. Louis",
		country: "United States of America",
		lat: 38.637,
		lon: -90.2419,
		kind: "city",
		group: "city"
	},
	{
		name: "St. Paul",
		country: "United States of America",
		lat: 44.944,
		lon: -93.085,
		kind: "city",
		group: "city"
	},
	{
		name: "St. Petersburg",
		country: "Russia",
		lat: 59.941,
		lon: 30.3141,
		kind: "city",
		group: "city"
	},
	{
		name: "St.-Denis",
		country: "France",
		lat: -20.8789,
		lon: 55.4481,
		kind: "city",
		group: "city"
	},
	{
		name: "Stanley",
		country: "Falkland Islands",
		lat: -51.7,
		lon: -57.85,
		kind: "city",
		group: "city"
	},
	{
		name: "Stavropol",
		country: "Russia",
		lat: 45.05,
		lon: 41.98,
		kind: "city",
		group: "city"
	},
	{
		name: "Strasbourg",
		country: "France",
		lat: 48.58,
		lon: 7.75,
		kind: "city",
		group: "city"
	},
	{
		name: "Suez",
		country: "Egypt",
		lat: 30.005,
		lon: 32.5499,
		kind: "village",
		group: "city"
	},
	{
		name: "Sukhumi",
		country: "Georgia",
		lat: 43.02,
		lon: 41.02,
		kind: "city",
		group: "city"
	},
	{
		name: "Sundsvall",
		country: "Sweden",
		lat: 62.4001,
		lon: 17.3167,
		kind: "village",
		group: "city"
	},
	{
		name: "Surabaya",
		country: "Indonesia",
		lat: -7.2473,
		lon: 112.7489,
		kind: "city",
		group: "city"
	},
	{
		name: "Surakarta",
		country: "Indonesia",
		lat: -7.565,
		lon: 110.825,
		kind: "village",
		group: "city"
	},
	{
		name: "Surat",
		country: "India",
		lat: 21.2019,
		lon: 72.8381,
		kind: "city",
		group: "city"
	},
	{
		name: "Surat Thani",
		country: "Thailand",
		lat: 9.1501,
		lon: 99.3401,
		kind: "city",
		group: "city"
	},
	{
		name: "Surgut",
		country: "Russia",
		lat: 61.2599,
		lon: 73.425,
		kind: "city",
		group: "city"
	},
	{
		name: "Suzhou",
		country: "China",
		lat: 31.3024,
		lon: 120.6181,
		kind: "village",
		group: "city"
	},
	{
		name: "Suzhou",
		country: "China",
		lat: 33.6381,
		lon: 116.9769,
		kind: "village",
		group: "city"
	},
	{
		name: "Svea Station",
		country: "Antarctica",
		lat: -74.5829,
		lon: -11.2167,
		kind: "village",
		group: "city"
	},
	{
		name: "Swakopmund",
		country: "Namibia",
		lat: -22.6689,
		lon: 14.535,
		kind: "city",
		group: "city"
	},
	{
		name: "Sydney",
		country: "Canada",
		lat: 46.0661,
		lon: -60.18,
		kind: "village",
		group: "city"
	},
	{
		name: "Sydney",
		country: "Australia",
		lat: -33.9181,
		lon: 151.1832,
		kind: "city",
		group: "city"
	},
	{
		name: "Syracuse",
		country: "United States of America",
		lat: 43.05,
		lon: -76.15,
		kind: "village",
		group: "city"
	},
	{
		name: "Tabriz",
		country: "Iran",
		lat: 38.0882,
		lon: 46.2993,
		kind: "city",
		group: "city"
	},
	{
		name: "Tabuk",
		country: "Saudi Arabia",
		lat: 28.3838,
		lon: 36.555,
		kind: "city",
		group: "city"
	},
	{
		name: "Tacna",
		country: "Peru",
		lat: -18,
		lon: -70.25,
		kind: "city",
		group: "city"
	},
	{
		name: "Tahoua",
		country: "Niger",
		lat: 14.9,
		lon: 5.2599,
		kind: "city",
		group: "city"
	},
	{
		name: "Taichung",
		country: "Taiwan",
		lat: 24.1521,
		lon: 120.6817,
		kind: "city",
		group: "city"
	},
	{
		name: "Taiyuan",
		country: "China",
		lat: 37.877,
		lon: 112.5431,
		kind: "city",
		group: "city"
	},
	{
		name: "Taizz",
		country: "Yemen",
		lat: 13.6064,
		lon: 44.0375,
		kind: "city",
		group: "city"
	},
	{
		name: "Tallahassee",
		country: "United States of America",
		lat: 30.45,
		lon: -84.28,
		kind: "city",
		group: "city"
	},
	{
		name: "Taloyoak",
		country: "Canada",
		lat: 69.5333,
		lon: -93.5333,
		kind: "village",
		group: "city"
	},
	{
		name: "Tamanrasset",
		country: "Algeria",
		lat: 22.785,
		lon: 5.5228,
		kind: "city",
		group: "city"
	},
	{
		name: "Tampa",
		country: "United States of America",
		lat: 27.9489,
		lon: -82.4606,
		kind: "city",
		group: "city"
	},
	{
		name: "Tampere",
		country: "Finland",
		lat: 61.5,
		lon: 23.75,
		kind: "village",
		group: "city"
	},
	{
		name: "Tampico",
		country: "Mexico",
		lat: 22.3,
		lon: -97.87,
		kind: "city",
		group: "city"
	},
	{
		name: "Tanjungpandan",
		country: "Indonesia",
		lat: -2.75,
		lon: 107.65,
		kind: "village",
		group: "city"
	},
	{
		name: "Tarakan",
		country: "Indonesia",
		lat: 3.3,
		lon: 117.633,
		kind: "city",
		group: "city"
	},
	{
		name: "Taraz",
		country: "Kazakhstan",
		lat: 42.9,
		lon: 71.365,
		kind: "city",
		group: "city"
	},
	{
		name: "Tarija",
		country: "Bolivia",
		lat: -21.5167,
		lon: -64.75,
		kind: "city",
		group: "city"
	},
	{
		name: "Teresina",
		country: "Brazil",
		lat: -5.0931,
		lon: -42.782,
		kind: "city",
		group: "city"
	},
	{
		name: "Ternate",
		country: "Indonesia",
		lat: .793,
		lon: 127.363,
		kind: "village",
		group: "city"
	},
	{
		name: "Tete",
		country: "Mozambique",
		lat: -16.17,
		lon: 33.58,
		kind: "city",
		group: "city"
	},
	{
		name: "Thessaloniki",
		country: "Greece",
		lat: 40.6981,
		lon: 22.8831,
		kind: "city",
		group: "city"
	},
	{
		name: "Thiruvananthapuram",
		country: "India",
		lat: 8.5019,
		lon: 76.9481,
		kind: "city",
		group: "city"
	},
	{
		name: "Thompson",
		country: "Canada",
		lat: 55.7499,
		lon: -97.8666,
		kind: "village",
		group: "city"
	},
	{
		name: "Thunder Bay",
		country: "Canada",
		lat: 48.4462,
		lon: -89.275,
		kind: "city",
		group: "city"
	},
	{
		name: "Tianjin",
		country: "China",
		lat: 39.132,
		lon: 117.1981,
		kind: "city",
		group: "city"
	},
	{
		name: "Tianshui",
		country: "China",
		lat: 34.602,
		lon: 105.918,
		kind: "village",
		group: "city"
	},
	{
		name: "Tijuana",
		country: "Mexico",
		lat: 32.502,
		lon: -117.0819,
		kind: "city",
		group: "city"
	},
	{
		name: "Tiksi",
		country: "Russia",
		lat: 71.6269,
		lon: 128.835,
		kind: "city",
		group: "city"
	},
	{
		name: "Timbuktu",
		country: "Mali",
		lat: 16.7666,
		lon: -3.0166,
		kind: "city",
		group: "city"
	},
	{
		name: "Timmins",
		country: "Canada",
		lat: 48.4666,
		lon: -81.3333,
		kind: "village",
		group: "city"
	},
	{
		name: "Tiruchirappalli",
		country: "India",
		lat: 10.8119,
		lon: 78.688,
		kind: "village",
		group: "city"
	},
	{
		name: "Tmassah",
		country: "Libya",
		lat: 26.3666,
		lon: 15.8,
		kind: "village",
		group: "city"
	},
	{
		name: "Toliara",
		country: "Madagascar",
		lat: -23.3568,
		lon: 43.69,
		kind: "city",
		group: "city"
	},
	{
		name: "Tomsk",
		country: "Russia",
		lat: 56.495,
		lon: 84.975,
		kind: "city",
		group: "city"
	},
	{
		name: "Tongliao",
		country: "China",
		lat: 43.6219,
		lon: 122.268,
		kind: "village",
		group: "city"
	},
	{
		name: "Topeka",
		country: "United States of America",
		lat: 39.05,
		lon: -95.67,
		kind: "city",
		group: "city"
	},
	{
		name: "Toronto",
		country: "Canada",
		lat: 43.7019,
		lon: -79.422,
		kind: "city",
		group: "city"
	},
	{
		name: "Torreon",
		country: "Mexico",
		lat: 25.572,
		lon: -103.4219,
		kind: "village",
		group: "city"
	},
	{
		name: "Toulouse",
		country: "France",
		lat: 43.6219,
		lon: 1.448,
		kind: "city",
		group: "city"
	},
	{
		name: "Townsville",
		country: "Australia",
		lat: -19.2499,
		lon: 146.77,
		kind: "city",
		group: "city"
	},
	{
		name: "Trento",
		country: "Italy",
		lat: 46.0804,
		lon: 11.12,
		kind: "city",
		group: "city"
	},
	{
		name: "Trieste",
		country: "Italy",
		lat: 45.6504,
		lon: 13.8,
		kind: "city",
		group: "city"
	},
	{
		name: "Trinidad",
		country: "Bolivia",
		lat: -14.8334,
		lon: -64.9,
		kind: "city",
		group: "city"
	},
	{
		name: "Troll Station",
		country: "Antarctica",
		lat: -72.0163,
		lon: 2.5333,
		kind: "village",
		group: "city"
	},
	{
		name: "Tromso",
		country: "Norway",
		lat: 69.6351,
		lon: 18.992,
		kind: "city",
		group: "city"
	},
	{
		name: "Trondheim",
		country: "Norway",
		lat: 63.4167,
		lon: 10.4167,
		kind: "city",
		group: "city"
	},
	{
		name: "Trujillo",
		country: "Peru",
		lat: -8.12,
		lon: -79.02,
		kind: "city",
		group: "city"
	},
	{
		name: "Tucson",
		country: "United States of America",
		lat: 32.2069,
		lon: -110.8919,
		kind: "village",
		group: "city"
	},
	{
		name: "Tucuman",
		country: "Argentina",
		lat: -26.8141,
		lon: -65.2186,
		kind: "city",
		group: "city"
	},
	{
		name: "Tulsa",
		country: "United States of America",
		lat: 36.12,
		lon: -95.93,
		kind: "village",
		group: "city"
	},
	{
		name: "Turin",
		country: "Italy",
		lat: 45.0723,
		lon: 7.668,
		kind: "city",
		group: "city"
	},
	{
		name: "Turkmenabat",
		country: "Turkmenistan",
		lat: 39.11,
		lon: 63.58,
		kind: "city",
		group: "city"
	},
	{
		name: "Turkmenbasy",
		country: "Turkmenistan",
		lat: 40.023,
		lon: 52.9697,
		kind: "city",
		group: "city"
	},
	{
		name: "Tuxtla Gutierrez",
		country: "Mexico",
		lat: 16.75,
		lon: -93.15,
		kind: "city",
		group: "city"
	},
	{
		name: "Tver",
		country: "Russia",
		lat: 56.86,
		lon: 35.89,
		kind: "city",
		group: "city"
	},
	{
		name: "Tyumen",
		country: "Russia",
		lat: 57.14,
		lon: 65.53,
		kind: "city",
		group: "city"
	},
	{
		name: "Uberlandia",
		country: "Brazil",
		lat: -18.9,
		lon: -48.28,
		kind: "village",
		group: "city"
	},
	{
		name: "Ufa",
		country: "Russia",
		lat: 54.7919,
		lon: 56.0381,
		kind: "city",
		group: "city"
	},
	{
		name: "Ugolnye Kopi",
		country: "Russia",
		lat: 64.7333,
		lon: 177.7,
		kind: "village",
		group: "city"
	},
	{
		name: "Ulan Ude",
		country: "Russia",
		lat: 51.825,
		lon: 107.625,
		kind: "city",
		group: "city"
	},
	{
		name: "Ulanhot",
		country: "China",
		lat: 46.08,
		lon: 122.08,
		kind: "village",
		group: "city"
	},
	{
		name: "Ulyanovsk",
		country: "Russia",
		lat: 54.33,
		lon: 48.41,
		kind: "city",
		group: "city"
	},
	{
		name: "Upernavik",
		country: "Greenland",
		lat: 72.7094,
		lon: -56.1417,
		kind: "village",
		group: "city"
	},
	{
		name: "Upington",
		country: "South Africa",
		lat: -28.46,
		lon: 21.23,
		kind: "village",
		group: "city"
	},
	{
		name: "Urumqi",
		country: "China",
		lat: 43.807,
		lon: 87.5731,
		kind: "city",
		group: "city"
	},
	{
		name: "Ust Nera",
		country: "Russia",
		lat: 64.5666,
		lon: 143.2,
		kind: "village",
		group: "city"
	},
	{
		name: "Ust-Ulimsk",
		country: "Russia",
		lat: 57.99,
		lon: 102.6333,
		kind: "village",
		group: "city"
	},
	{
		name: "Utqiaġvik",
		country: "United States of America",
		lat: 71.2906,
		lon: -156.7886,
		kind: "city",
		group: "city"
	},
	{
		name: "Vaasa",
		country: "Finland",
		lat: 63.1,
		lon: 21.6,
		kind: "city",
		group: "city"
	},
	{
		name: "Vadodara",
		country: "India",
		lat: 22.312,
		lon: 73.1781,
		kind: "village",
		group: "city"
	},
	{
		name: "Valdez",
		country: "United States of America",
		lat: 61.136,
		lon: -146.3483,
		kind: "city",
		group: "city"
	},
	{
		name: "Valdivia",
		country: "Chile",
		lat: -39.795,
		lon: -73.245,
		kind: "city",
		group: "city"
	},
	{
		name: "Valencia",
		country: "Venezuela",
		lat: 10.2319,
		lon: -67.982,
		kind: "city",
		group: "city"
	},
	{
		name: "Valencia",
		country: "Spain",
		lat: 39.487,
		lon: -.402,
		kind: "city",
		group: "city"
	},
	{
		name: "Vancouver",
		country: "United States of America",
		lat: 45.6303,
		lon: -122.64,
		kind: "village",
		group: "city"
	},
	{
		name: "Vancouver",
		country: "Canada",
		lat: 49.2754,
		lon: -123.1236,
		kind: "city",
		group: "city"
	},
	{
		name: "Varanasi",
		country: "India",
		lat: 25.3319,
		lon: 82.9981,
		kind: "city",
		group: "city"
	},
	{
		name: "Venice",
		country: "Italy",
		lat: 45.4387,
		lon: 12.335,
		kind: "city",
		group: "city"
	},
	{
		name: "Veracruz",
		country: "Mexico",
		lat: 19.1773,
		lon: -96.16,
		kind: "city",
		group: "city"
	},
	{
		name: "Victoria",
		country: "Canada",
		lat: 48.4333,
		lon: -123.35,
		kind: "city",
		group: "city"
	},
	{
		name: "Vigo",
		country: "Spain",
		lat: 42.22,
		lon: -8.73,
		kind: "village",
		group: "city"
	},
	{
		name: "Vijayawada",
		country: "India",
		lat: 16.5219,
		lon: 80.6281,
		kind: "village",
		group: "city"
	},
	{
		name: "Vila Velha",
		country: "Brazil",
		lat: -20.3676,
		lon: -40.318,
		kind: "village",
		group: "city"
	},
	{
		name: "Vilhena",
		country: "Brazil",
		lat: -12.7166,
		lon: -60.1166,
		kind: "city",
		group: "city"
	},
	{
		name: "Vishakhapatnam",
		country: "India",
		lat: 17.732,
		lon: 83.303,
		kind: "city",
		group: "city"
	},
	{
		name: "Vitoria da Conquista",
		country: "Brazil",
		lat: -14.85,
		lon: -40.84,
		kind: "village",
		group: "city"
	},
	{
		name: "Vladivostok",
		country: "Russia",
		lat: 43.13,
		lon: 131.91,
		kind: "city",
		group: "city"
	},
	{
		name: "Volgograd",
		country: "Russia",
		lat: 48.712,
		lon: 44.498,
		kind: "city",
		group: "city"
	},
	{
		name: "Vologda",
		country: "Russia",
		lat: 59.21,
		lon: 39.92,
		kind: "city",
		group: "city"
	},
	{
		name: "Vorkuta",
		country: "Russia",
		lat: 67.5,
		lon: 64.01,
		kind: "village",
		group: "city"
	},
	{
		name: "Voronezh",
		country: "Russia",
		lat: 51.7319,
		lon: 39.2681,
		kind: "city",
		group: "city"
	},
	{
		name: "Vostok",
		country: "Antarctica",
		lat: -78.4663,
		lon: 106.8,
		kind: "village",
		group: "city"
	},
	{
		name: "Walvis Bay",
		country: "Namibia",
		lat: -22.9575,
		lon: 14.5053,
		kind: "village",
		group: "city"
	},
	{
		name: "Wangaratta",
		country: "Australia",
		lat: -36.36,
		lon: 146.3,
		kind: "village",
		group: "city"
	},
	{
		name: "Warri",
		country: "Nigeria",
		lat: 5.52,
		lon: 5.76,
		kind: "village",
		group: "city"
	},
	{
		name: "Wasa Station",
		country: "Antarctica",
		lat: -73.0496,
		lon: -13.4167,
		kind: "village",
		group: "city"
	},
	{
		name: "Wau",
		country: "South Sudan",
		lat: 7.7,
		lon: 27.99,
		kind: "city",
		group: "city"
	},
	{
		name: "Welkom",
		country: "South Africa",
		lat: -27.97,
		lon: 26.73,
		kind: "village",
		group: "city"
	},
	{
		name: "Wenzhou",
		country: "China",
		lat: 28.0219,
		lon: 120.6481,
		kind: "village",
		group: "city"
	},
	{
		name: "Whitehorse",
		country: "Canada",
		lat: 60.7167,
		lon: -135.05,
		kind: "city",
		group: "city"
	},
	{
		name: "Whyalla",
		country: "Australia",
		lat: -33.025,
		lon: 137.5614,
		kind: "village",
		group: "city"
	},
	{
		name: "Willemstad",
		country: "Curacao",
		lat: 12.2004,
		lon: -69.02,
		kind: "city",
		group: "city"
	},
	{
		name: "Wilmington",
		country: "United States of America",
		lat: 34.2255,
		lon: -77.945,
		kind: "village",
		group: "city"
	},
	{
		name: "Windorah",
		country: "Australia",
		lat: -25.4332,
		lon: 142.6502,
		kind: "village",
		group: "city"
	},
	{
		name: "Winnipeg",
		country: "Canada",
		lat: 49.883,
		lon: -97.166,
		kind: "city",
		group: "city"
	},
	{
		name: "Wonsan",
		country: "North Korea",
		lat: 39.1605,
		lon: 127.4308,
		kind: "city",
		group: "city"
	},
	{
		name: "Worcester",
		country: "South Africa",
		lat: -33.64,
		lon: 19.4399,
		kind: "village",
		group: "city"
	},
	{
		name: "Wuhan",
		country: "China",
		lat: 30.582,
		lon: 114.2681,
		kind: "city",
		group: "city"
	},
	{
		name: "Wuwei",
		country: "China",
		lat: 37.928,
		lon: 102.641,
		kind: "village",
		group: "city"
	},
	{
		name: "Wuxi",
		country: "China",
		lat: 31.5819,
		lon: 120.298,
		kind: "village",
		group: "city"
	},
	{
		name: "Wuzhou",
		country: "China",
		lat: 23.48,
		lon: 111.32,
		kind: "village",
		group: "city"
	},
	{
		name: "Xai-Xai",
		country: "Mozambique",
		lat: -25.04,
		lon: 33.64,
		kind: "city",
		group: "city"
	},
	{
		name: "Xiamen",
		country: "China",
		lat: 24.4519,
		lon: 118.0781,
		kind: "village",
		group: "city"
	},
	{
		name: "Xian",
		country: "China",
		lat: 34.277,
		lon: 108.8931,
		kind: "city",
		group: "city"
	},
	{
		name: "Xichang",
		country: "China",
		lat: 27.88,
		lon: 102.3,
		kind: "village",
		group: "city"
	},
	{
		name: "Xigaze",
		country: "China",
		lat: 29.25,
		lon: 88.8833,
		kind: "village",
		group: "city"
	},
	{
		name: "Xining",
		country: "China",
		lat: 36.6219,
		lon: 101.7681,
		kind: "city",
		group: "city"
	},
	{
		name: "Xuzhou",
		country: "China",
		lat: 34.282,
		lon: 117.1781,
		kind: "village",
		group: "city"
	},
	{
		name: "Yakutsk",
		country: "Russia",
		lat: 62.035,
		lon: 129.735,
		kind: "city",
		group: "city"
	},
	{
		name: "Yantai",
		country: "China",
		lat: 37.5324,
		lon: 121.3981,
		kind: "village",
		group: "city"
	},
	{
		name: "Yaroslavl",
		country: "Russia",
		lat: 57.62,
		lon: 39.87,
		kind: "city",
		group: "city"
	},
	{
		name: "Yazd",
		country: "Iran",
		lat: 31.9201,
		lon: 54.37,
		kind: "city",
		group: "city"
	},
	{
		name: "Yekaterinburg",
		country: "Russia",
		lat: 56.852,
		lon: 60.598,
		kind: "city",
		group: "city"
	},
	{
		name: "Yellowknife",
		country: "Canada",
		lat: 62.442,
		lon: -114.397,
		kind: "city",
		group: "city"
	},
	{
		name: "Yinchuan",
		country: "China",
		lat: 38.4699,
		lon: 106.2711,
		kind: "city",
		group: "city"
	},
	{
		name: "Yining",
		country: "China",
		lat: 43.9,
		lon: 81.35,
		kind: "village",
		group: "city"
	},
	{
		name: "Yueyang",
		country: "China",
		lat: 29.382,
		lon: 113.0981,
		kind: "village",
		group: "city"
	},
	{
		name: "Yulin",
		country: "China",
		lat: 22.6319,
		lon: 110.1481,
		kind: "village",
		group: "city"
	},
	{
		name: "Yulin",
		country: "China",
		lat: 38.2833,
		lon: 109.7333,
		kind: "village",
		group: "city"
	},
	{
		name: "Yuzhno Sakhalinsk",
		country: "Russia",
		lat: 46.965,
		lon: 142.74,
		kind: "city",
		group: "city"
	},
	{
		name: "Zamboanga",
		country: "Philippines",
		lat: 6.9219,
		lon: 122.0781,
		kind: "village",
		group: "city"
	},
	{
		name: "Zanzibar",
		country: "Tanzania",
		lat: -6.16,
		lon: 39.2,
		kind: "city",
		group: "city"
	},
	{
		name: "Zaozhuang",
		country: "China",
		lat: 34.8819,
		lon: 117.5681,
		kind: "village",
		group: "city"
	},
	{
		name: "Zhangye",
		country: "China",
		lat: 38.93,
		lon: 100.45,
		kind: "village",
		group: "city"
	},
	{
		name: "Zhanjiang",
		country: "China",
		lat: 21.2019,
		lon: 110.3781,
		kind: "village",
		group: "city"
	},
	{
		name: "Zhengzhou",
		country: "China",
		lat: 34.7569,
		lon: 113.6631,
		kind: "city",
		group: "city"
	},
	{
		name: "Zhigansk",
		country: "Russia",
		lat: 66.7697,
		lon: 123.3711,
		kind: "village",
		group: "city"
	},
	{
		name: "Zhongshan Station",
		country: "Antarctica",
		lat: -69.4341,
		lon: 76.3393,
		kind: "village",
		group: "city"
	},
	{
		name: "Zhytomyr",
		country: "Ukraine",
		lat: 50.2456,
		lon: 28.6622,
		kind: "city",
		group: "city"
	},
	{
		name: "Zibo",
		country: "China",
		lat: 36.8019,
		lon: 118.048,
		kind: "city",
		group: "city"
	},
	{
		name: "Zinder",
		country: "Niger",
		lat: 13.8,
		lon: 8.9833,
		kind: "city",
		group: "city"
	},
	{
		name: "Zucchelli Station",
		country: "Antarctica",
		lat: -74.6192,
		lon: 164.219,
		kind: "village",
		group: "city"
	},
	{
		name: "Zurich",
		country: "Switzerland",
		lat: 47.3819,
		lon: 8.5481,
		kind: "city",
		group: "city"
	},
	{
		name: "Zuwarah",
		country: "Libya",
		lat: 32.9344,
		lon: 12.0791,
		kind: "village",
		group: "city"
	}
];
var LANDMARK_COUNT = REAL_PLACES.filter((p) => p.group === "landmark").length;
var CITY_COUNT = REAL_PLACES.filter((p) => p.group !== "landmark").length;
function realPlaceId(p) {
	return `${p.name}|${p.lat.toFixed(4)}|${p.lon.toFixed(4)}`;
}
var BY_ID = /* @__PURE__ */ new Map();
for (const p of REAL_PLACES) BY_ID.set(realPlaceId(p), p);
function findRealPlace(id) {
	return BY_ID.get(id);
}
function searchRealPlaces(q, group = "all") {
	const t = q.trim().toLowerCase();
	const out = [];
	for (const p of REAL_PLACES) {
		if (group !== "all" && p.group !== group) continue;
		if (t && !p.name.toLowerCase().includes(t) && !p.country.toLowerCase().includes(t) && !p.kind.includes(t)) continue;
		out.push(p);
	}
	return out;
}
var RW = 2048;
var RH = 1024;
var ALIASES = {
	usa: "USA",
	us: "USA",
	"united states": "USA",
	"united states of america": "USA",
	america: "USA",
	uk: "GBR",
	britain: "GBR",
	"great britain": "GBR",
	england: "GBR",
	"united kingdom": "GBR",
	"ivory coast": "CIV",
	"cote d ivoire": "CIV",
	"congo kinshasa": "COD",
	drc: "COD",
	"democratic republic of the congo": "COD",
	"dem rep congo": "COD",
	"congo brazzaville": "COG",
	"republic of the congo": "COG",
	"the gambia": "GMB",
	gambia: "GMB",
	swaziland: "SWZ",
	eswatini: "SWZ",
	"east timor": "TLS",
	"timor leste": "TLS",
	vatican: "VAT",
	"vatican city": "VAT",
	"south korea": "KOR",
	korea: "KOR",
	"republic of korea": "KOR",
	"north korea": "PRK",
	russia: "RUS",
	"russian federation": "RUS",
	"czech republic": "CZE",
	czechia: "CZE",
	holland: "NLD",
	netherlands: "NLD",
	uae: "ARE",
	"united arab emirates": "ARE",
	iran: "IRN",
	syria: "SYR",
	laos: "LAO",
	moldova: "MDA",
	macedonia: "MKD",
	"north macedonia": "MKD",
	palestine: "PSX",
	micronesia: "FSM",
	"federated states of micronesia": "FSM",
	bosnia: "BIH",
	"bosnia and herzegovina": "BIH",
	"bosnia and herz": "BIH",
	"central african republic": "CAF",
	"central african rep": "CAF",
	"dominican republic": "DOM",
	"dominican rep": "DOM",
	"solomon islands": "SLB",
	"solomon is": "SLB",
	"equatorial guinea": "GNQ",
	"eq guinea": "GNQ",
	"south sudan": "SSD",
	"s sudan": "SSD",
	"western sahara": "SAH",
	"w sahara": "SAH",
	myanmar: "MMR",
	burma: "MMR",
	"cabo verde": "CPV",
	"cape verde": "CPV",
	bolivia: "BOL",
	tanzania: "TZA",
	venezuela: "VEN",
	vietnam: "VNM",
	"viet nam": "VNM",
	"south africa": "ZAF",
	taiwan: "TWN",
	"hong kong": "CHN",
	greenland: "GRL",
	"falkland is": "FLK",
	"falkland islands": "FLK",
	"new caledonia": "NCL",
	"puerto rico": "PRI",
	"north cyprus": "CYN",
	"n cyprus": "CYN",
	somaliland: "SOL",
	"fr s antarctic lands": "ATF",
	"sao tome and principe": "STP",
	"guinea bissau": "GNB",
	"guinea-bissau": "GNB",
	"el salvador": "SLV",
	"costa rica": "CRI",
	"saudi arabia": "SAU",
	"sri lanka": "LKA",
	"new zealand": "NZL",
	"papua new guinea": "PNG"
};
function normName(s) {
	return s.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
}
var cached = null;
var inflight = null;
function peekCountries() {
	return cached;
}
async function loadCountries() {
	if (cached) return cached;
	if (inflight) return inflight;
	inflight = (async () => {
		const res = await fetch("/countries-110m.json");
		if (!res.ok) throw new Error("Could not load country borders.");
		const countries = (await res.json()).countries;
		const byIso = /* @__PURE__ */ new Map();
		const byName = /* @__PURE__ */ new Map();
		const index = (key, c) => {
			const n = normName(key);
			if (n && !byName.has(n)) byName.set(n, c);
		};
		for (const c of countries) {
			byIso.set(c.iso, c);
			if (c.iso2) byIso.set(c.iso2, c);
			index(c.name, c);
			index(c.short, c);
			index(c.admin, c);
			index(c.iso, c);
			if (c.iso2) index(c.iso2, c);
		}
		for (const [alias, iso] of Object.entries(ALIASES)) {
			const c = byIso.get(iso);
			if (c) index(alias, c);
		}
		const id = new Uint16Array(RW * RH);
		for (let i = 0; i < countries.length; i++) fillCountry(id, countries[i], i + 1);
		cached = {
			countries,
			byIso,
			byName,
			fill: colorize(id, countries),
			id,
			w: RW,
			h: RH
		};
		return cached;
	})();
	try {
		return await inflight;
	} finally {
		inflight = null;
	}
}
function matchCountry(atlas, name) {
	const n = normName(name);
	if (!n) return null;
	return atlas.byName.get(n) ?? atlas.byIso.get(name.toUpperCase()) ?? null;
}
function searchCountries(atlas, q, continent = "all") {
	const t = normName(q);
	const out = [];
	for (const c of atlas.countries) {
		if (continent !== "all" && c.continent !== continent) continue;
		if (t && !normName(c.name).includes(t) && !normName(c.short).includes(t) && !normName(c.admin).includes(t) && !c.iso.toLowerCase().includes(t) && !c.iso2.toLowerCase().includes(t)) continue;
		out.push(c);
	}
	return out;
}
function countryAtLonLat(atlas, lon, lat) {
	let x = (lon + 180) / 360 * atlas.w;
	const y = (90 - lat) / 180 * atlas.h;
	while (x < 0) x += atlas.w;
	while (x >= atlas.w) x -= atlas.w;
	const ix = Math.min(atlas.w - 1, Math.max(0, Math.floor(x)));
	const iy = Math.min(atlas.h - 1, Math.max(0, Math.floor(y)));
	const n = atlas.id[ix + iy * atlas.w] ?? 0;
	if (!n) return null;
	return atlas.countries[n - 1] ?? null;
}
function countryColor(iso) {
	let h = 2166136261;
	for (let i = 0; i < iso.length; i++) h = Math.imul(h ^ iso.charCodeAt(i), 16777619);
	return hsl((h >>> 0) % 360, .42, .5);
}
function placesForCountry(atlas, iso) {
	const c = atlas.byIso.get(iso);
	if (!c) return [];
	return REAL_PLACES.filter((p) => matchCountry(atlas, p.country)?.iso === c.iso);
}
function capitalsFor(atlas, iso) {
	return placesForCountry(atlas, iso).filter((p) => p.group === "capital");
}
function citiesFor(atlas, iso) {
	return placesForCountry(atlas, iso).filter((p) => p.group === "city" || p.group === "capital");
}
function primaryCapital(atlas, iso) {
	const caps = capitalsFor(atlas, iso);
	if (!caps.length) return citiesFor(atlas, iso)[0] ?? null;
	const c = atlas.byIso.get(iso);
	const prefer = caps.find((p) => {
		const n = normName(p.name);
		if (iso === "ZAF") return n.includes("pretoria");
		if (iso === "NLD") return n.includes("amsterdam");
		if (iso === "BOL") return n.includes("la paz");
		if (iso === "MYS") return n.includes("kuala");
		if (iso === "LKA") return n.includes("colombo") || n.includes("sri");
		if (iso === "TZA") return n.includes("dodoma");
		if (iso === "BEN") return n.includes("porto");
		if (iso === "CIV") return n.includes("yamoussoukro");
		if (iso === "PHL") return n.includes("manila");
		return false;
	});
	if (prefer) return prefer;
	if (c) return [...caps].sort((a, b) => Math.hypot(a.lon - c.lx, a.lat - c.ly) - Math.hypot(b.lon - c.lx, b.lat - c.ly))[0];
	return caps[0];
}
function viewForCountry(world, country, cssW = 640, cssH = 420) {
	const [minLon, minLat, maxLon, maxLat] = country.bbox;
	const a = localFromLonLat(world, minLon, maxLat);
	const b = localFromLonLat(world, maxLon, minLat);
	const x0 = Math.min(a.lx, b.lx);
	const x1 = Math.max(a.lx, b.lx);
	const z0 = Math.min(a.lz, b.lz);
	const z1 = Math.max(a.lz, b.lz);
	const w = Math.max(48, x1 - x0);
	const d = Math.max(48, z1 - z0);
	const zoom = Math.max(1e-8, Math.min(24, Math.min(cssW / w, cssH / d) * .78));
	return {
		x: (x0 + x1) / 2,
		z: (z0 + z1) / 2,
		zoom
	};
}
var CONTINENTS = [
	"Africa",
	"Asia",
	"Europe",
	"North America",
	"South America",
	"Oceania",
	"Antarctica"
];
function hsl(h, s, l) {
	const c = (1 - Math.abs(2 * l - 1)) * s;
	const x = c * (1 - Math.abs(h / 60 % 2 - 1));
	const m = l - c / 2;
	let r = 0, g = 0, b = 0;
	if (h < 60) [r, g, b] = [
		c,
		x,
		0
	];
	else if (h < 120) [r, g, b] = [
		x,
		c,
		0
	];
	else if (h < 180) [r, g, b] = [
		0,
		c,
		x
	];
	else if (h < 240) [r, g, b] = [
		0,
		x,
		c
	];
	else if (h < 300) [r, g, b] = [
		x,
		0,
		c
	];
	else [r, g, b] = [
		c,
		0,
		x
	];
	return [
		Math.round((r + m) * 255),
		Math.round((g + m) * 255),
		Math.round((b + m) * 255)
	];
}
function lonToX(lon) {
	let x = (lon + 180) / 360 * RW;
	while (x < 0) x += RW;
	while (x >= RW) x -= RW;
	return x;
}
function latToY(lat) {
	return Math.max(0, Math.min(1023, (90 - lat) / 180 * RH));
}
function fillCountry(id, c, cid) {
	for (const ring of c.rings) fillRing(id, ring, cid);
}
function fillRing(id, ring, cid) {
	const n = ring.length / 2 | 0;
	if (n < 3) return;
	const xs = new Float32Array(n);
	const ys = new Float32Array(n);
	let minY = RH, maxY = 0;
	for (let i = 0; i < n; i++) {
		xs[i] = lonToX(ring[i * 2]);
		ys[i] = latToY(ring[i * 2 + 1]);
		if (ys[i] < minY) minY = ys[i];
		if (ys[i] > maxY) maxY = ys[i];
	}
	const y0 = Math.max(0, Math.floor(minY));
	const y1 = Math.min(1023, Math.ceil(maxY));
	const hits = new Float32Array(n);
	for (let y = y0; y <= y1; y++) {
		const yMid = y + .5;
		let nh = 0;
		for (let i = 0; i < n; i++) {
			const j = (i + 1) % n;
			let x0 = xs[i], yA = ys[i], x1 = xs[j], yB = ys[j];
			if (Math.abs(x1 - x0) > RW * .5) continue;
			if (yA > yB) {
				const tx = x0, ty = yA;
				x0 = x1;
				yA = yB;
				x1 = tx;
				yB = ty;
			}
			if (yMid < yA || yMid >= yB || yB === yA) continue;
			hits[nh++] = x0 + (yMid - yA) / (yB - yA) * (x1 - x0);
		}
		hits.subarray(0, nh).sort();
		for (let k = 0; k + 1 < nh; k += 2) {
			let a = Math.ceil(hits[k]);
			let b = Math.floor(hits[k + 1]);
			if (a < 0) a = 0;
			if (b >= RW) b = 2047;
			const row = y * RW;
			for (let x = a; x <= b; x++) id[row + x] = cid;
		}
	}
}
function colorize(id, countries) {
	const c = document.createElement("canvas");
	c.width = RW;
	c.height = RH;
	const ctx = c.getContext("2d");
	if (!ctx) return c;
	const img = ctx.createImageData(RW, RH);
	const data = img.data;
	for (let i = 0; i < id.length; i++) {
		const n = id[i];
		if (!n) continue;
		const rec = countries[n - 1];
		if (!rec) continue;
		const [r, g, b] = countryColor(rec.iso);
		const o = i * 4;
		data[o] = r;
		data[o + 1] = g;
		data[o + 2] = b;
		data[o + 3] = 255;
	}
	ctx.putImageData(img, 0, 0);
	return c;
}
function lonLatToScreen(world, lon, lat, originPxX, originPxZ, cell) {
	const { lx, lz } = localFromLonLat(world, lon, lat);
	return {
		px: originPxX + (lx + .5) * cell,
		pz: originPxZ + (lz + .5) * cell
	};
}
function drawCountryOverlay(ctx, world, atlas, originPxX, originPxZ, cell, cssW, cssH, opts) {
	if (opts.fill) {
		ctx.save();
		ctx.globalAlpha = .38;
		ctx.imageSmoothingEnabled = cell < 2;
		ctx.drawImage(atlas.fill, 0, 0, atlas.w, atlas.h, originPxX, originPxZ, world.width * cell, world.depth * cell);
		ctx.restore();
	}
	const selected = opts.selectedIso ? atlas.byIso.get(opts.selectedIso) : null;
	if (selected) {
		ctx.save();
		ctx.globalAlpha = .28;
		ctx.fillStyle = "rgb(125,174,90)";
		for (const ring of selected.rings) {
			pathRing(ctx, world, ring, originPxX, originPxZ, cell);
			ctx.fill();
		}
		ctx.restore();
	}
	if (opts.borders) {
		ctx.lineJoin = "round";
		ctx.lineCap = "round";
		for (const c of atlas.countries) {
			if (!bboxVisible(world, c, originPxX, originPxZ, cell, cssW, cssH)) continue;
			const on = selected?.iso === c.iso;
			ctx.strokeStyle = on ? "rgba(230,234,220,0.95)" : "rgba(14,17,12,0.55)";
			ctx.lineWidth = on ? Math.max(2.2, cell * 8e-8 + 2.2) : Math.max(.7, Math.min(1.6, .9 + cell * 40));
			for (const ring of c.rings) {
				pathRing(ctx, world, ring, originPxX, originPxZ, cell);
				ctx.stroke();
			}
		}
	}
	if (opts.names) {
		const labels = [];
		for (const c of atlas.countries) {
			if (!bboxVisible(world, c, originPxX, originPxZ, cell, cssW, cssH)) continue;
			const [minLon, minLat, maxLon, maxLat] = c.bbox;
			const area = Math.max(.01, (maxLon - minLon) * (maxLat - minLat));
			const { px, pz } = lonLatToScreen(world, c.lx, c.ly, originPxX, originPxZ, cell);
			if (px < 8 || pz < 8 || px > cssW - 8 || pz > cssH - 8) continue;
			labels.push({
				c,
				px,
				pz,
				area
			});
		}
		labels.sort((a, b) => b.area - a.area);
		const max = cell < 2e-4 ? 18 : cell < .002 ? 28 : 40;
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		let n = 0;
		for (const lab of labels) {
			const on = selected?.iso === lab.c.iso;
			if (!on && n >= max) continue;
			if (!on && lab.area < 8 && cell < .001) continue;
			const text = lab.c.short || lab.c.name;
			const size = on ? 14 : lab.area > 80 ? 12 : 10;
			ctx.font = `${on ? "600" : "500"} ${size}px Figtree, sans-serif`;
			ctx.lineWidth = 3;
			ctx.strokeStyle = "rgba(14,17,12,0.78)";
			ctx.strokeText(text, lab.px, lab.pz);
			ctx.fillStyle = on ? "#e6eadc" : "rgba(230,234,220,0.88)";
			ctx.fillText(text, lab.px, lab.pz);
			if (!on) n += 1;
		}
	}
}
function bboxVisible(world, c, originPxX, originPxZ, cell, cssW, cssH) {
	const [minLon, minLat, maxLon, maxLat] = c.bbox;
	const a = lonLatToScreen(world, minLon, maxLat, originPxX, originPxZ, cell);
	const b = lonLatToScreen(world, maxLon, minLat, originPxX, originPxZ, cell);
	const x0 = Math.min(a.px, b.px);
	const x1 = Math.max(a.px, b.px);
	const z0 = Math.min(a.pz, b.pz);
	const z1 = Math.max(a.pz, b.pz);
	return x1 >= -20 && z1 >= -20 && x0 <= cssW + 20 && z0 <= cssH + 20;
}
function pathRing(ctx, world, ring, originPxX, originPxZ, cell) {
	ctx.beginPath();
	const n = ring.length / 2 | 0;
	let started = false;
	let prevLon = 0;
	for (let i = 0; i < n; i++) {
		const lon = ring[i * 2];
		const lat = ring[i * 2 + 1];
		if (started && Math.abs(lon - prevLon) > 180) {
			ctx.closePath();
			ctx.beginPath();
			started = false;
		}
		const { px, pz } = lonLatToScreen(world, lon, lat, originPxX, originPxZ, cell);
		if (!started) {
			ctx.moveTo(px, pz);
			started = true;
		} else ctx.lineTo(px, pz);
		prevLon = lon;
	}
	ctx.closePath();
}
function countryAtLocal(world, atlas, lx, lz) {
	const { lon, lat } = lonLatFromLocal(world, lx, lz);
	return countryAtLonLat(atlas, lon, lat);
}
var MAX_YEAR = 2026;
/** Documented political-map snapshots. Other years use the nearest snapshot. */
var SNAPSHOT_YEARS = [
	100,
	476,
	800,
	1066,
	1206,
	1453,
	1492,
	1648,
	1700,
	1740,
	1776,
	1789,
	1815,
	1825,
	1860,
	1861,
	1863,
	1871,
	1898,
	1914,
	1916,
	1917,
	1918,
	1919,
	1922,
	1927,
	1933,
	1938,
	1939,
	1940,
	1941,
	1942,
	1944,
	1945,
	1947,
	1948,
	1949,
	1960,
	1962,
	1975,
	1989,
	1990,
	1991,
	1992,
	1993,
	2002,
	2005,
	2006,
	2011,
	2013,
	2014,
	2016,
	2019,
	2020,
	2022,
	2026
];
var MONTHS = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
var MONTHS_SHORT = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];
/** Famous published dates the timeline can jump to. Whole Earth, not a demo region. */
var HISTORICAL_DATES = [
	{
		year: 100,
		month: 1,
		day: 1,
		title: "High Roman / Han",
		era: "Ancient"
	},
	{
		year: 476,
		month: 9,
		day: 4,
		title: "Fall of Western Rome",
		era: "Late antiquity"
	},
	{
		year: 800,
		month: 12,
		day: 25,
		title: "Charlemagne crowned",
		era: "Medieval"
	},
	{
		year: 1066,
		month: 10,
		day: 14,
		title: "Battle of Hastings",
		era: "Medieval"
	},
	{
		year: 1206,
		month: 1,
		day: 1,
		title: "Mongol Empire rising",
		era: "Medieval"
	},
	{
		year: 1453,
		month: 5,
		day: 29,
		title: "Fall of Constantinople",
		era: "Late medieval"
	},
	{
		year: 1492,
		month: 10,
		day: 12,
		title: "Columbus reaches the Americas",
		era: "Age of Exploration"
	},
	{
		year: 1648,
		month: 10,
		day: 24,
		title: "Peace of Westphalia",
		era: "Early modern"
	},
	{
		year: 1776,
		month: 7,
		day: 4,
		title: "US Declaration of Independence",
		era: "American Independence"
	},
	{
		year: 1789,
		month: 7,
		day: 14,
		title: "Storming of the Bastille",
		era: "French Revolution"
	},
	{
		year: 1815,
		month: 6,
		day: 18,
		title: "Battle of Waterloo",
		era: "Napoleonic"
	},
	{
		year: 1861,
		month: 4,
		day: 12,
		title: "US Civil War begins",
		era: "American Civil War"
	},
	{
		year: 1863,
		month: 1,
		day: 1,
		title: "Emancipation Proclamation",
		era: "American Civil War"
	},
	{
		year: 1871,
		month: 1,
		day: 18,
		title: "German Empire proclaimed",
		era: "Nation-states"
	},
	{
		year: 1914,
		month: 6,
		day: 28,
		title: "Archduke Franz Ferdinand assassinated",
		era: "July 1914"
	},
	{
		year: 1914,
		month: 7,
		day: 28,
		title: "WWI begins",
		era: "First World War"
	},
	{
		year: 1917,
		month: 11,
		day: 7,
		title: "October Revolution",
		era: "Russian Revolution"
	},
	{
		year: 1918,
		month: 11,
		day: 11,
		title: "Armistice of 11 November",
		era: "WWI ends"
	},
	{
		year: 1919,
		month: 6,
		day: 28,
		title: "Treaty of Versailles",
		era: "Interwar"
	},
	{
		year: 1922,
		month: 12,
		day: 30,
		title: "USSR founded",
		era: "Interwar"
	},
	{
		year: 1933,
		month: 1,
		day: 30,
		title: "Hitler becomes chancellor",
		era: "Nazi Germany"
	},
	{
		year: 1938,
		month: 3,
		day: 12,
		title: "Anschluss",
		era: "Anschluss"
	},
	{
		year: 1939,
		month: 9,
		day: 1,
		title: "Germany invades Poland",
		era: "WWII begins"
	},
	{
		year: 1941,
		month: 6,
		day: 22,
		title: "Operation Barbarossa",
		era: "WWII"
	},
	{
		year: 1941,
		month: 12,
		day: 7,
		title: "Pearl Harbor",
		era: "WWII"
	},
	{
		year: 1944,
		month: 6,
		day: 6,
		title: "D-Day",
		era: "WWII"
	},
	{
		year: 1945,
		month: 5,
		day: 8,
		title: "VE Day",
		era: "War’s end"
	},
	{
		year: 1945,
		month: 9,
		day: 2,
		title: "V-J Day / Japan surrenders",
		era: "War’s end"
	},
	{
		year: 1947,
		month: 8,
		day: 15,
		title: "India and Pakistan independent",
		era: "Decolonization"
	},
	{
		year: 1948,
		month: 5,
		day: 14,
		title: "Israel independence",
		era: "Postwar"
	},
	{
		year: 1949,
		month: 10,
		day: 1,
		title: "People's Republic of China",
		era: "Cold War"
	},
	{
		year: 1960,
		month: 1,
		day: 1,
		title: "Year of Africa",
		era: "Decolonization"
	},
	{
		year: 1962,
		month: 10,
		day: 16,
		title: "Cuban Missile Crisis",
		era: "Cold War"
	},
	{
		year: 1975,
		month: 4,
		day: 30,
		title: "End of the Vietnam War",
		era: "Cold War"
	},
	{
		year: 1989,
		month: 11,
		day: 9,
		title: "Berlin Wall opens",
		era: "End of Cold War"
	},
	{
		year: 1990,
		month: 10,
		day: 3,
		title: "German reunification",
		era: "Late Cold War"
	},
	{
		year: 1991,
		month: 12,
		day: 26,
		title: "USSR dissolved",
		era: "Post-Soviet"
	},
	{
		year: 1993,
		month: 1,
		day: 1,
		title: "Czechia and Slovakia",
		era: "Post-Soviet"
	},
	{
		year: 2002,
		month: 5,
		day: 20,
		title: "East Timor independence",
		era: "21st century"
	},
	{
		year: 2006,
		month: 6,
		day: 3,
		title: "Montenegro independence",
		era: "21st century"
	},
	{
		year: 2011,
		month: 7,
		day: 9,
		title: "South Sudan independence",
		era: "Arab Spring"
	},
	{
		year: 2014,
		month: 3,
		day: 18,
		title: "Crimea crisis",
		era: "Contemporary"
	},
	{
		year: 2020,
		month: 3,
		day: 11,
		title: "COVID-19 pandemic declared",
		era: "Contemporary"
	},
	{
		year: 2022,
		month: 2,
		day: 24,
		title: "Full-scale invasion of Ukraine",
		era: "Contemporary"
	},
	{
		year: 2026,
		month: 1,
		day: 1,
		title: "Present",
		era: "Present"
	}
];
var SNAPSHOT_BLURB = {
	100: {
		title: "100 CE",
		era: "High Roman / Han",
		blurb: "Roman Mediterranean, Parthia, Han China, Kushan, Aksum, and Mesoamerican cities. Most of the globe is independent peoples — labeled as a historical approximation.",
		approximation: true
	},
	476: {
		title: "476",
		era: "Fall of Western Rome",
		blurb: "Western Roman Empire ended 4 September 476. Eastern Rome (Byzantium), Germanic kingdoms in the west, Han successor states in China. Whole-Earth map is a historical approximation.",
		approximation: true
	},
	800: {
		title: "800",
		era: "Carolingian / Abbasid",
		blurb: "Charlemagne crowned 25 December 800. Abbasid Caliphate, Tang China, Maya cities. Borders outside Europe and the Near East are a historical approximation.",
		approximation: true
	},
	1066: {
		title: "1066",
		era: "Norman Conquest",
		blurb: "Battle of Hastings, 14 October 1066. Song China, Seljuk Near East, West African kingdoms. Political geography outside Europe is a historical approximation.",
		approximation: true
	},
	1206: {
		title: "1206",
		era: "Mongol rise",
		blurb: "Temüjin becomes Chinggis Khan. Islamic world, Song China, Latin states after 1204. Large regions use a historical approximation.",
		approximation: true
	},
	1453: {
		title: "1453",
		era: "Fall of Constantinople",
		blurb: "Ottoman capture of Constantinople, 29 May 1453. End of Byzantium. Ming China, rising Iberian kingdoms. Historical approximation outside the eastern Mediterranean.",
		approximation: true
	},
	1492: {
		title: "1492",
		era: "Contact with the Americas",
		blurb: "12 October 1492. Indigenous Americas still independent. Iberia, Ottomans, Ming China. The Americas are not drawn as Spanish colonies yet.",
		approximation: true
	},
	1648: {
		title: "1648",
		era: "Peace of Westphalia",
		blurb: "24 October 1648. Sovereign states in Europe after the Thirty Years’ War. Qing China, colonial Americas beginning. Historical approximation worldwide.",
		approximation: true
	},
	1700: {
		title: "1700",
		era: "Early modern empires",
		blurb: "Qing, Mughal, Ottoman, Spanish and Portuguese Americas, French and British colonies, Russian Tsardom, Tokugawa Japan. African and SE Asian kingdoms kept where documented.",
		approximation: true
	},
	1740: {
		title: "1740",
		era: "Austrian Succession",
		blurb: "Frederick the Great’s Prussia, Habsburg Austria, Bourbon Spain and France, expanding Russian Empire, Qing high tide.",
		approximation: true
	},
	1776: {
		title: "1776",
		era: "American Independence",
		blurb: "Thirteen Colonies declared independence on 4 July 1776. Spanish Americas, Portuguese Brazil, British Canada and India, Qing, Ottoman, Holy Roman world.",
		approximation: true
	},
	1789: {
		title: "1789",
		era: "French Revolution",
		blurb: "Bastille, 14 July 1789. United States independent. Colonial empires otherwise close to 1776. Historical approximation outside Europe and the Americas.",
		approximation: true
	},
	1815: {
		title: "1815",
		era: "Congress of Vienna",
		blurb: "Waterloo, 18 June 1815. Napoleonic wars over. Spanish Americas on the eve of independence. Historical approximation worldwide.",
		approximation: true
	},
	1825: {
		title: "1825",
		era: "Latin American independence",
		blurb: "Most of Spanish America independent. Brazil independent. US continental. British, French, Ottoman, Qing, Russian empires.",
		approximation: true
	},
	1860: {
		title: "1860",
		era: "Nation-states & empires",
		blurb: "United States still whole. Qing, Ottoman, British Raj, French Second Empire, Russian Empire, Tokugawa Japan on the eve of Meiji. No German Empire yet.",
		approximation: true
	},
	1861: {
		title: "1861",
		era: "American Civil War begins",
		blurb: "Confederate attack on Fort Sumter, 12 April 1861. Union and Confederacy. Worldwide empires otherwise match the 1860s.",
		approximation: true
	},
	1863: {
		title: "1863",
		era: "American Civil War",
		blurb: "Union and Confederacy over the same continent. Emancipation Proclamation 1 January 1863. Worldwide empires otherwise match the 1860s.",
		approximation: true
	},
	1871: {
		title: "1871",
		era: "German unification",
		blurb: "German Empire proclaimed 18 January 1871. Meiji Japan. British Raj. US reunited. Colonial scramble not yet at 1914 peak.",
		approximation: true
	},
	1898: {
		title: "1898",
		era: "Spanish–American War",
		blurb: "US takes the Philippines, Puerto Rico, Guam. Cuba independent soon after. Colonial peak approaching. Historical approximation of 1890s empires.",
		approximation: true
	},
	1914: {
		title: "1914",
		era: "July 1914 — before the guns",
		blurb: "German Empire, Austria-Hungary, Ottoman Empire, Russian Empire, British and French colonial peak. Independent Ethiopia, Liberia, Siam, Persia, Afghanistan, Japan, China, Latin America.",
		approximation: true
	},
	1916: {
		title: "1916",
		era: "First World War",
		blurb: "1914 sovereigns plus wartime occupation: Belgium and northern France under Germany, Serbia occupied, Ottoman still holding the Levant and Mesopotamia.",
		approximation: true
	},
	1917: {
		title: "1917",
		era: "Russian Revolution",
		blurb: "October Revolution 7 November 1917 (new style). Wartime occupations still in the west. Historical approximation of 1917 fronts.",
		approximation: true
	},
	1918: {
		title: "1918",
		era: "Armistice",
		blurb: "11 November 1918. German, Austro-Hungarian, Ottoman, and Russian empires collapsing. New states of Poland, Finland, and the Baltics emerging.",
		approximation: true
	},
	1919: {
		title: "1919",
		era: "Versailles",
		blurb: "Treaty of Versailles, 28 June 1919. League of Nations mandates. Weimar Germany. Interwar map taking shape.",
		approximation: true
	},
	1922: {
		title: "1922",
		era: "USSR founded",
		blurb: "Soviet Union created 30 December 1922. Irish Free State. Ottoman sultanate ended; Republic of Turkey follows in 1923. Interwar colonial world.",
		approximation: true
	},
	1927: {
		title: "1927",
		era: "Interwar",
		blurb: "USSR, Weimar Germany, Republic of China, British and French empires, Republic of Turkey, Irish Free State, Poland, Yugoslavia, Czechoslovakia.",
		approximation: true
	},
	1933: {
		title: "1933",
		era: "Nazi Germany, pre-expansion",
		blurb: "Hitler chancellor 30 January 1933, inside Weimar borders. Manchukuo in northeast China. Interwar colonial world otherwise.",
		approximation: true
	},
	1938: {
		title: "1938",
		era: "Anschluss & Sudetenland",
		blurb: "Austria annexed 12 March 1938. Sudetenland taken from Czechoslovakia. Poland and colonial empires still standing.",
		approximation: true
	},
	1939: {
		title: "1939",
		era: "WWII begins",
		blurb: "Germany invades Poland 1 September 1939. Britain and France at war. USSR still at peace with Germany until 1941.",
		approximation: true
	},
	1940: {
		title: "1940",
		era: "Fall of France",
		blurb: "Germany occupies Poland, Denmark, Norway, the Low Countries, and northern France. Vichy in the south. Britain not occupied.",
		approximation: true
	},
	1941: {
		title: "1941",
		era: "Barbarossa / Pearl Harbor",
		blurb: "22 June 1941 Barbarossa. 7 December Pearl Harbor. Japan expanding in East Asia. Historical approximation of 1941 occupations.",
		approximation: true
	},
	1942: {
		title: "1942",
		era: "Peak Axis",
		blurb: "German control across most of Europe and western USSR. Japan across Korea, Taiwan, Manchuria, SE Asia, the Philippines, and Indonesia.",
		approximation: true
	},
	1944: {
		title: "1944",
		era: "D-Day year",
		blurb: "6 June 1944 Allied landing in Normandy. Axis still holding much of Europe and East Asia at the start of the year. Historical approximation.",
		approximation: true
	},
	1945: {
		title: "1945",
		era: "War’s end / occupation",
		blurb: "VE Day 8 May, V-J Day 2 September. Allied-occupied Germany and Japan. Korea divided. Colonial empires still exist. USSR in Eastern Europe.",
		approximation: true
	},
	1947: {
		title: "1947",
		era: "India partitioned",
		blurb: "15 August 1947. India and Pakistan independent. British Raj ended. Palestine Mandate last months. Historical approximation of 1947 borders.",
		approximation: true
	},
	1948: {
		title: "1948",
		era: "Israel independence",
		blurb: "14 May 1948. Israel declared. India and Pakistan independent. Occupied Germany and Japan. Historical approximation.",
		approximation: true
	},
	1949: {
		title: "1949",
		era: "PRC / two Germanys",
		blurb: "People's Republic of China 1 October 1949. Two German states forming. Two Koreas. Cold War map taking shape.",
		approximation: true
	},
	1960: {
		title: "1960",
		era: "Year of Africa",
		blurb: "Seventeen African states independent in 1960. Two Germanys, two Koreas, two Vietnams. USSR. Portuguese Africa still colonial.",
		approximation: true
	},
	1962: {
		title: "1962",
		era: "Cold War / decolonization",
		blurb: "Cuban Missile Crisis, October 1962. Two Germanys, two Koreas, two Vietnams. USSR. Most of Africa independent; Portuguese Africa still colonial.",
		approximation: true
	},
	1975: {
		title: "1975",
		era: "Vietnam unified / Portuguese Africa",
		blurb: "Vietnam War ended 30 April 1975. Portuguese Africa independent. USSR, two Germanys, two Koreas. Historical approximation.",
		approximation: true
	},
	1989: {
		title: "1989",
		era: "Revolutions of 1989",
		blurb: "Berlin Wall opened 9 November 1989. Two Germanys still legally exist. USSR still exists. Historical approximation of late 1989.",
		approximation: true
	},
	1990: {
		title: "1990",
		era: "Late Cold War",
		blurb: "German reunification 3 October 1990. This year uses a split Germany on the political layer until you jump to 3 October or later snapshots. USSR still exists.",
		approximation: true
	},
	1991: {
		title: "1991",
		era: "USSR dissolved",
		blurb: "Soviet Union dissolved 26 December 1991. Reunified Germany. Yugoslavia breaking up. Historical approximation of 1991.",
		approximation: true
	},
	1992: {
		title: "1992",
		era: "Post-Soviet",
		blurb: "USSR gone. Reunified Germany. Czechoslovakia’s last year. Slovenia and Croatia independent; Bosnia at war; FR Yugoslavia = Serbia+Montenegro.",
		approximation: true
	},
	1993: {
		title: "1993",
		era: "Czechia and Slovakia",
		blurb: "1 January 1993. Czechoslovakia split. Post-Soviet states. Eritrea independent (1993). Historical approximation.",
		approximation: true
	},
	2002: {
		title: "2002",
		era: "Early 21st century",
		blurb: "East Timor independent 20 May 2002. Yugoslavia dissolved. No South Sudan yet. Close to the modern Natural Earth map.",
		approximation: true
	},
	2005: {
		title: "2005",
		era: "Mid-2000s",
		blurb: "Modern states minus South Sudan (2011) and with Serbia-Montenegro still a union until 2006.",
		approximation: true
	},
	2006: {
		title: "2006",
		era: "Montenegro independence",
		blurb: "3 June 2006. Serbia and Montenegro separate. No South Sudan yet. Otherwise the contemporary UN map.",
		approximation: true
	},
	2011: {
		title: "2011",
		era: "South Sudan & Arab Spring",
		blurb: "South Sudan independent 9 July 2011. Sudan split. Otherwise the contemporary UN map.",
		approximation: true
	},
	2013: {
		title: "2013",
		era: "Contemporary",
		blurb: "UN membership map just before the 2014 Crimea crisis. South Sudan independent. Kosovo shown as in the modern atlas.",
		approximation: true
	},
	2014: {
		title: "2014",
		era: "Crimea crisis",
		blurb: "Crimea drawn under de facto Russian administration from March 2014 and labeled disputed. This is not a legal-recognition map.",
		approximation: true
	},
	2016: {
		title: "2016",
		era: "Contemporary",
		blurb: "Modern political geography. Crimea still shown de facto Russian-administered (disputed).",
		approximation: true
	},
	2019: {
		title: "2019",
		era: "Pre-pandemic",
		blurb: "Contemporary political geography, Crimea still shown de facto Russian-administered (disputed). Modern cities and landmarks.",
		approximation: true
	},
	2020: {
		title: "2020",
		era: "Pandemic year",
		blurb: "WHO declared COVID-19 a pandemic 11 March 2020. Political borders match the contemporary map.",
		approximation: true
	},
	2022: {
		title: "2022",
		era: "Full-scale war in Ukraine",
		blurb: "24 February 2022. Crimea still shown de facto Russian-administered (disputed). Not a legal-recognition map.",
		approximation: true
	},
	2026: {
		title: "2026",
		era: "Present",
		blurb: "Modern Earth from Natural Earth borders, populated places, and published landmark coordinates. Not an approximation of a past year.",
		approximation: false
	}
};
Object.fromEntries(Object.entries(SNAPSHOT_BLURB).map(([k, v]) => {
	const year = Number(k);
	return [year, {
		year,
		snapshot: year,
		...v
	}];
}));
function daysInMonth(year, month) {
	const m = Math.max(1, Math.min(12, month | 0));
	const y = clampDateYear(year);
	return new Date(Date.UTC(y, m, 0)).getUTCDate();
}
function clampDateYear(n) {
	const y = Math.round(Number(n));
	if (!Number.isFinite(y)) return MAX_YEAR;
	return Math.max(100, Math.min(MAX_YEAR, y));
}
function clampMonth(n) {
	const m = Math.round(Number(n));
	if (!Number.isFinite(m)) return 1;
	return Math.max(1, Math.min(12, m));
}
function clampDay(year, month, n) {
	const max = daysInMonth(year, month);
	const d = Math.round(Number(n));
	if (!Number.isFinite(d)) return 1;
	return Math.max(1, Math.min(max, d));
}
function snapshotYear(n) {
	const y = clampDateYear(n);
	let best = SNAPSHOT_YEARS[SNAPSHOT_YEARS.length - 1];
	let dist = Infinity;
	for (const s of SNAPSHOT_YEARS) {
		const dd = Math.abs(s - y);
		if (dd < dist) {
			dist = dd;
			best = s;
		}
	}
	return best;
}
/** Political-map year. Structures should use clampDateYear, not this. */
function clampYear(n) {
	return snapshotYear(n);
}
function neighborYear(n, dir) {
	return clampDateYear(clampDateYear(n) + dir);
}
function fmtYear(n) {
	if (n <= -1e4) return "prehistory";
	if (n < 0) return `${-n} BCE`;
	if (n < 1e3) return `${n} CE`;
	return String(n);
}
function fmtDate(year, month, day) {
	const y = clampDateYear(year);
	const m = month != null ? clampMonth(month) : 0;
	const d = month != null && day != null ? clampDay(y, m, day) : 0;
	if (!m) return fmtYear(y);
	if (!d) return `${MONTHS[m - 1]} ${fmtYear(y)}`;
	return `${d} ${MONTHS[m - 1]} ${fmtYear(y)}`;
}
function fmtDateShort(year, month, day) {
	const y = clampDateYear(year);
	const m = month != null ? clampMonth(month) : 0;
	const d = month != null && day != null ? clampDay(y, m, day) : 0;
	if (!m) return fmtYear(y);
	if (!d) return `${MONTHS_SHORT[m - 1]} ${fmtYear(y)}`;
	return `${d} ${MONTHS_SHORT[m - 1]} ${fmtYear(y)}`;
}
function yearInfo(year, month, day) {
	const y = clampDateYear(year);
	const snap = snapshotYear(y);
	const base = SNAPSHOT_BLURB[snap] ?? SNAPSHOT_BLURB[2026];
	const hit = HISTORICAL_DATES.find((d) => d.year === y && (month == null || d.month === month) && (day == null || d.day === day));
	const title = fmtDate(y, month, day);
	const approximation = snap !== 2026 || y !== 2026;
	const extra = snap !== y ? ` Political borders on screen use the ${fmtYear(snap)} snapshot — Historical Approximation.` : "";
	return {
		year: y,
		snapshot: snap,
		title: hit ? `${title} — ${hit.title}` : title,
		era: hit?.era ?? base.era,
		blurb: (hit ? `${hit.title}. ` : "") + base.blurb + extra,
		approximation
	};
}
var SLIDER_TICKS = [
	100,
	1776,
	1914,
	1945,
	1962,
	1992,
	2026
];
/** Landmark construction / destruction from published dates. Keyed by exact RealPlace.name. */
var LANDMARKS = {
	"Abu Simbel Temples": {
		built: -1264,
		verified: true
	},
	"Ahu Tongariki Moai": {
		built: 1400,
		verified: true
	},
	"Ajanta Caves": {
		built: -200,
		verified: true
	},
	"Alcatraz Island": {
		built: 1860,
		verified: true
	},
	Alhambra: {
		built: 1238,
		verified: true
	},
	Ambarchik: {
		built: 1932,
		verified: true
	},
	"Ancient Olympia": {
		built: -776,
		verified: true
	},
	"Angkor Wat": {
		built: 1150,
		verified: true
	},
	"Arc de Triomphe": {
		built: 1836,
		verified: true
	},
	"Arg-e Bam": {
		built: 500,
		verified: true
	},
	Atomium: {
		built: 1958,
		verified: true
	},
	Babylon: {
		built: -1894,
		gone: -539,
		ruin: true,
		verified: true
	},
	"Bagan Temples": {
		built: 1057,
		verified: true
	},
	"Baiterek Tower": {
		built: 2002,
		verified: true
	},
	"Belém Tower": {
		built: 1519,
		verified: true
	},
	"Blue Mosque": {
		built: 1616,
		verified: true
	},
	Borobudur: {
		built: 825,
		verified: true
	},
	"Bran Castle": {
		built: 1377,
		verified: true
	},
	"Brandenburg Gate": {
		built: 1791,
		verified: true
	},
	"Brooklyn Bridge": {
		built: 1883,
		verified: true
	},
	"Buckingham Palace": {
		built: 1703,
		verified: true
	},
	Bulguksa: {
		built: 774,
		verified: true
	},
	"Burj Al Arab": {
		built: 1999,
		verified: true
	},
	"Burj Khalifa": {
		built: 2010,
		verified: true
	},
	"CN Tower": {
		built: 1976,
		verified: true
	},
	"Capitolio Havana": {
		built: 1929,
		verified: true
	},
	"Carthage Antonine Baths": {
		built: 145,
		gone: 698,
		ruin: true,
		verified: true
	},
	"Charles Bridge": {
		built: 1402,
		verified: true
	},
	Charminar: {
		built: 1591,
		verified: true
	},
	"Chichen Itza": {
		built: 600,
		gone: 1250,
		ruin: true,
		verified: true
	},
	"Christ the Redeemer": {
		built: 1931,
		verified: true
	},
	"Chrysler Building": {
		built: 1930,
		verified: true
	},
	"Church of the Holy Sepulchre": {
		built: 335,
		verified: true
	},
	"Cologne Cathedral": {
		built: 1248,
		verified: true
	},
	Colosseum: {
		built: 80,
		verified: true
	},
	"Ctesiphon Arch": {
		built: 540,
		gone: 637,
		ruin: true,
		verified: true
	},
	"Djinguereber Mosque": {
		built: 1327,
		verified: true
	},
	"Dome of the Rock": {
		built: 691,
		verified: true
	},
	"Dubrovnik Walls": {
		built: 1350,
		verified: true
	},
	"Edinburgh Castle": {
		built: 1103,
		verified: true
	},
	"Eiffel Tower": {
		built: 1889,
		verified: true
	},
	"Elizabeth Tower (Big Ben)": {
		built: 1859,
		verified: true
	},
	"Empire State Building": {
		built: 1931,
		verified: true
	},
	"Florence Cathedral": {
		built: 1436,
		verified: true
	},
	"Forbidden City": {
		built: 1420,
		verified: true
	},
	"Fushimi Inari Shrine": {
		built: 711,
		verified: true
	},
	"Gateway Arch": {
		built: 1965,
		verified: true
	},
	"Gateway of India": {
		built: 1924,
		verified: true
	},
	"Giant's Causeway": {
		built: -1e4,
		verified: true
	},
	"Golden Gate Bridge": {
		built: 1937,
		verified: true
	},
	"Golden Temple": {
		built: 1604,
		verified: true
	},
	"Goreme Open Air Museum": {
		built: 400,
		verified: true
	},
	"Grand Canyon South Rim": {
		built: -1e4,
		verified: true
	},
	"Grand Palace Bangkok": {
		built: 1782,
		verified: true
	},
	"Great Pyramid of Giza": {
		built: -2560,
		verified: true
	},
	"Great Sphinx of Giza": {
		built: -2500,
		verified: true
	},
	"Great Wall at Badaling": {
		built: 1505,
		verified: true
	},
	"Great Wall at Mutianyu": {
		built: 1569,
		verified: true
	},
	"Great Zimbabwe": {
		built: 1100,
		gone: 1450,
		ruin: true,
		verified: true
	},
	"Gyeongbokgung Palace": {
		built: 1395,
		verified: true
	},
	"Hagia Sophia": {
		built: 537,
		verified: true
	},
	"Hampi Virupaksha Temple": {
		built: 700,
		verified: true
	},
	"Hassan II Mosque": {
		built: 1993,
		verified: true
	},
	"Heidelberg Castle": {
		built: 1214,
		verified: true
	},
	"Himeji Castle": {
		built: 1333,
		verified: true
	},
	"Hiroshima Peace Memorial": {
		built: 1915,
		verified: true
	},
	"Hollywood Sign": {
		built: 1923,
		verified: true
	},
	"Hoover Dam": {
		built: 1936,
		verified: true
	},
	"Hungarian Parliament": {
		built: 1904,
		verified: true
	},
	"Iguazu Falls": {
		built: -1e4,
		verified: true
	},
	"Imam Reza Shrine": {
		built: 818,
		verified: true
	},
	"Imperial City Hue": {
		built: 1804,
		verified: true
	},
	"Independence Hall": {
		built: 1753,
		verified: true
	},
	"India Gate": {
		built: 1931,
		verified: true
	},
	"Itsukushima Shrine": {
		built: 593,
		verified: true
	},
	"Jeronimos Monastery": {
		built: 1501,
		verified: true
	},
	Kaaba: {
		built: -100,
		verified: true
	},
	"Kalyan Minaret": {
		built: 1127,
		verified: true
	},
	"Karnak Temple": {
		built: -2e3,
		verified: true
	},
	"Kennedy Space Center": {
		built: 1962,
		verified: true
	},
	Kilimanjaro: {
		built: -1e4,
		verified: true
	},
	"Kinderdijk Windmills": {
		built: 1740,
		verified: true
	},
	"Kingdom Centre": {
		built: 2002,
		verified: true
	},
	"Kiyomizu-dera": {
		built: 778,
		verified: true
	},
	"Koutoubia Mosque": {
		built: 1197,
		verified: true
	},
	"Krak des Chevaliers": {
		built: 1142,
		verified: true
	},
	"Leaning Tower of Pisa": {
		built: 1372,
		verified: true
	},
	"Leptis Magna": {
		built: -1100,
		gone: 650,
		ruin: true,
		verified: true
	},
	"Leshan Giant Buddha": {
		built: 803,
		verified: true
	},
	"Library of Alexandria (Bibliotheca)": {
		built: 2002,
		verified: true
	},
	"Library of Celsus, Ephesus": {
		built: 117,
		gone: 262,
		ruin: true,
		verified: true
	},
	"Lincoln Memorial": {
		built: 1922,
		verified: true
	},
	"Lotus Temple": {
		built: 1986,
		verified: true
	},
	"Louvre Museum": {
		built: 1190,
		verified: true
	},
	"Luxor Temple": {
		built: -1400,
		verified: true
	},
	"Machu Picchu": {
		built: 1450,
		gone: 1572,
		ruin: true,
		verified: true
	},
	"Marina Bay Sands": {
		built: 2010,
		verified: true
	},
	Masada: {
		built: -37,
		gone: 73,
		ruin: true,
		verified: true
	},
	Matterhorn: {
		built: -1e4,
		verified: true
	},
	"McMurdo Station": {
		built: 1956,
		verified: true
	},
	"Meenakshi Temple": {
		built: 1623,
		verified: true
	},
	"Mezquita of Córdoba": {
		built: 785,
		verified: true
	},
	"Milan Cathedral": {
		built: 1386,
		verified: true
	},
	"Mont-Saint-Michel": {
		built: 708,
		verified: true
	},
	"Moscow Kremlin": {
		built: 1482,
		verified: true
	},
	"Mount Fuji": {
		built: -1e4,
		verified: true
	},
	"Mount Rushmore": {
		built: 1941,
		verified: true
	},
	"Mount Vesuvius": {
		built: -1e4,
		verified: true
	},
	"N Seoul Tower": {
		built: 1980,
		verified: true
	},
	"Naqsh-e Jahan Square": {
		built: 1602,
		verified: true
	},
	"National Monument Jakarta": {
		built: 1975,
		verified: true
	},
	"Nazca Lines": {
		built: 100,
		verified: true
	},
	"Neuschwanstein Castle": {
		built: 1886,
		verified: true
	},
	"Niagara Falls": {
		built: -1e4,
		verified: true
	},
	"Notre-Dame de Paris": {
		built: 1260,
		verified: true
	},
	"Obelisco de Buenos Aires": {
		built: 1936,
		verified: true
	},
	"One World Trade Center": {
		built: 2014,
		verified: true
	},
	"Oracle of Delphi": {
		built: -800,
		gone: 390,
		ruin: true,
		verified: true
	},
	"Osaka Castle": {
		built: 1583,
		verified: true
	},
	"Palace of Knossos": {
		built: -1900,
		gone: -1370,
		ruin: true,
		verified: true
	},
	"Palace of Versailles": {
		built: 1682,
		verified: true
	},
	"Palace of the Popes, Avignon": {
		built: 1335,
		verified: true
	},
	Palenque: {
		built: 600,
		gone: 800,
		ruin: true,
		verified: true
	},
	"Palm Jumeirah": {
		built: 2006,
		verified: true
	},
	Palmyra: {
		built: -44,
		gone: 273,
		ruin: true,
		verified: true
	},
	"Panama Canal Miraflores Locks": {
		built: 1914,
		verified: true
	},
	Pantheon: {
		built: 126,
		verified: true
	},
	"Park Güell": {
		built: 1914,
		verified: true
	},
	"Parliament Hill Ottawa": {
		built: 1866,
		verified: true
	},
	Parthenon: {
		built: -438,
		verified: true
	},
	"Pena Palace": {
		built: 1854,
		verified: true
	},
	Persepolis: {
		built: -515,
		gone: -330,
		ruin: true,
		verified: true
	},
	"Petra Treasury": {
		built: -100,
		verified: true
	},
	"Petronas Towers": {
		built: 1998,
		verified: true
	},
	Pompeii: {
		built: -600,
		gone: 79,
		ruin: true,
		verified: true
	},
	"Potala Palace": {
		built: 1645,
		verified: true
	},
	"Prague Castle": {
		built: 870,
		verified: true
	},
	Prambanan: {
		built: 850,
		verified: true
	},
	"Prophet's Mosque": {
		built: 622,
		verified: true
	},
	"Pyramid of Khafre": {
		built: -2570,
		verified: true
	},
	"Pyramid of Menkaure": {
		built: -2510,
		verified: true
	},
	"Qutub Minar": {
		built: 1199,
		verified: true
	},
	"Red Fort": {
		built: 1648,
		verified: true
	},
	Registan: {
		built: 1417,
		verified: true
	},
	Reichstag: {
		built: 1894,
		verified: true
	},
	Rijksmuseum: {
		built: 1885,
		verified: true
	},
	"Rock-Hewn Churches of Lalibela": {
		built: 1200,
		verified: true
	},
	"Roman Forum": {
		built: -500,
		verified: true
	},
	"Sagrada Familia": {
		built: 1882,
		verified: true
	},
	"Saint Basil's Cathedral": {
		built: 1561,
		verified: true
	},
	"Saint Isaac's Cathedral": {
		built: 1858,
		verified: true
	},
	"Santiago de Compostela Cathedral": {
		built: 1211,
		verified: true
	},
	"Schönbrunn Palace": {
		built: 1743,
		verified: true
	},
	"Senso-ji": {
		built: 645,
		verified: true
	},
	"Shanghai Tower": {
		built: 2015,
		verified: true
	},
	"Shwedagon Pagoda": {
		built: 600,
		verified: true
	},
	Sigiriya: {
		built: 477,
		gone: 495,
		ruin: true,
		verified: true
	},
	"Sistine Chapel": {
		built: 1481,
		verified: true
	},
	"Space Needle": {
		built: 1962,
		verified: true
	},
	"St. Mark's Basilica": {
		built: 1094,
		verified: true
	},
	"St. Paul's Cathedral": {
		built: 1710,
		verified: true
	},
	"St. Peter's Basilica": {
		built: 1626,
		verified: true
	},
	"St. Stephen's Cathedral Vienna": {
		built: 1160,
		verified: true
	},
	"Statue of Liberty": {
		built: 1886,
		verified: true
	},
	"Statue of Unity": {
		built: 2018,
		verified: true
	},
	"Step Pyramid of Djoser": {
		built: -2650,
		verified: true
	},
	Stonehenge: {
		built: -2500,
		verified: true
	},
	"Sugarloaf Mountain": {
		built: -1e4,
		verified: true
	},
	"Svalbard Global Seed Vault": {
		built: 2008,
		verified: true
	},
	"Sydney Harbour Bridge": {
		built: 1932,
		verified: true
	},
	"Sydney Opera House": {
		built: 1973,
		verified: true
	},
	"Table Mountain": {
		built: -1e4,
		verified: true
	},
	"Taipei 101": {
		built: 2004,
		verified: true
	},
	"Taj Mahal": {
		built: 1653,
		verified: true
	},
	"Tanah Lot": {
		built: 1500,
		verified: true
	},
	"Temple of Heaven": {
		built: 1420,
		verified: true
	},
	"Temple of Olympian Zeus": {
		built: -174,
		gone: 267,
		ruin: true,
		verified: true
	},
	"Temple of the Tooth": {
		built: 1595,
		verified: true
	},
	"Templo Mayor": {
		built: 1325,
		gone: 1521,
		ruin: true,
		verified: true
	},
	"Teotihuacan Pyramid of the Sun": {
		built: 200,
		gone: 550,
		ruin: true,
		verified: true
	},
	"Terracotta Army": {
		built: -210,
		verified: true
	},
	"The Alamo": {
		built: 1718,
		verified: true
	},
	"Tikal Temple IV": {
		built: 741,
		gone: 900,
		ruin: true,
		verified: true
	},
	"Todai-ji": {
		built: 752,
		verified: true
	},
	"Tokyo Skytree": {
		built: 2012,
		verified: true
	},
	"Tokyo Tower": {
		built: 1958,
		verified: true
	},
	"Tower Bridge": {
		built: 1894,
		verified: true
	},
	"Tower of London": {
		built: 1078,
		verified: true
	},
	"Trevi Fountain": {
		built: 1762,
		verified: true
	},
	Uluru: {
		built: -1e4,
		verified: true
	},
	"United States Capitol": {
		built: 1800,
		verified: true
	},
	"Varanasi Ghats": {
		built: -800,
		verified: true
	},
	"Victoria Falls": {
		built: -1e4,
		verified: true
	},
	"Washington Monument": {
		built: 1884,
		verified: true
	},
	"Wat Arun": {
		built: 1656,
		verified: true
	},
	"Wat Pho": {
		built: 1788,
		verified: true
	},
	"Wawel Castle": {
		built: 1350,
		verified: true
	},
	"Western Wall": {
		built: -19,
		verified: true
	},
	"Westminster Abbey": {
		built: 1065,
		verified: true
	},
	"White House": {
		built: 1800,
		verified: true
	},
	"Willis Tower": {
		built: 1973,
		verified: true
	},
	"Winter Palace / Hermitage": {
		built: 1762,
		verified: true
	},
	"Yellow Crane Tower": {
		built: 223,
		verified: true
	},
	"Ziggurat of Ur": {
		built: -2100,
		gone: -500,
		ruin: true,
		verified: true
	}
};
/** Known city founding years. Others use a labeled regional approximation. */
var CITIES = {
	Rome: {
		built: -753,
		verified: true
	},
	Athens: {
		built: -1400,
		verified: true
	},
	Alexandria: {
		built: -331,
		verified: true
	},
	Cairo: {
		built: 969,
		verified: true
	},
	Istanbul: {
		built: -660,
		verified: true
	},
	Jerusalem: {
		built: -2800,
		verified: true
	},
	Damascus: {
		built: -3e3,
		verified: true
	},
	Baghdad: {
		built: 762,
		verified: true
	},
	Tehran: {
		built: 1554,
		verified: true
	},
	Delhi: {
		built: -50,
		verified: true
	},
	Mumbai: {
		built: 1507,
		verified: true
	},
	Beijing: {
		built: -1045,
		verified: true
	},
	Shanghai: {
		built: 1291,
		verified: true
	},
	Tokyo: {
		built: 1457,
		verified: true
	},
	Kyoto: {
		built: 794,
		verified: true
	},
	London: {
		built: 50,
		verified: true
	},
	Paris: {
		built: -52,
		verified: true
	},
	Madrid: {
		built: 865,
		verified: true
	},
	Lisbon: {
		built: -1200,
		verified: true
	},
	Berlin: {
		built: 1237,
		verified: true
	},
	Vienna: {
		built: -500,
		verified: true
	},
	Moscow: {
		built: 1147,
		verified: true
	},
	"St. Petersburg": {
		built: 1703,
		verified: true
	},
	"Washington D.C.": {
		built: 1790,
		verified: true
	},
	"New York": {
		built: 1624,
		verified: true
	},
	Boston: {
		built: 1630,
		verified: true
	},
	Philadelphia: {
		built: 1682,
		verified: true
	},
	Chicago: {
		built: 1833,
		verified: true
	},
	"Los Angeles": {
		built: 1781,
		verified: true
	},
	"Mexico City": {
		built: 1325,
		verified: true
	},
	Lima: {
		built: 1535,
		verified: true
	},
	"Buenos Aires": {
		built: 1536,
		verified: true
	},
	"Rio de Janeiro": {
		built: 1565,
		verified: true
	},
	Brasília: {
		built: 1960,
		verified: true
	},
	Canberra: {
		built: 1913,
		verified: true
	},
	Sydney: {
		built: 1788,
		verified: true
	},
	Melbourne: {
		built: 1835,
		verified: true
	},
	Auckland: {
		built: 1840,
		verified: true
	},
	Cape: {
		built: 1652,
		verified: true
	},
	"Cape Town": {
		built: 1652,
		verified: true
	},
	Lagos: {
		built: 1500,
		verified: true
	},
	Timbuktu: {
		built: 1100,
		verified: true
	},
	"Addis Ababa": {
		built: 1886,
		verified: true
	},
	Nairobi: {
		built: 1899,
		verified: true
	},
	Johannesburg: {
		built: 1886,
		verified: true
	},
	Abuja: {
		built: 1991,
		verified: true
	},
	Islamabad: {
		built: 1963,
		verified: true
	},
	Astana: {
		built: 1997,
		verified: true
	},
	"Nur-Sultan": {
		built: 1997,
		verified: true
	},
	Naypyidaw: {
		built: 2005,
		verified: true
	},
	Putrajaya: {
		built: 1995,
		verified: true
	},
	Belmopan: {
		built: 1970,
		verified: true
	},
	Gaborone: {
		built: 1964,
		verified: true
	},
	Lilongwe: {
		built: 1975,
		verified: true
	},
	Dodoma: {
		built: 1973,
		verified: true
	},
	Nouakchott: {
		built: 1958,
		verified: true
	},
	Yamoussoukro: {
		built: 1983,
		verified: true
	},
	Ottawa: {
		built: 1855,
		verified: true
	},
	Toronto: {
		built: 1793,
		verified: true
	},
	Vancouver: {
		built: 1886,
		verified: true
	},
	"Hong Kong": {
		built: 1842,
		verified: true
	},
	Singapore: {
		built: 1819,
		verified: true
	},
	Seoul: {
		built: -18,
		verified: true
	},
	Hanoi: {
		built: 1010,
		verified: true
	},
	Saigon: {
		built: 1698,
		verified: true
	},
	"Ho Chi Minh City": {
		built: 1698,
		verified: true
	},
	Bangkok: {
		built: 1782,
		verified: true
	},
	Jakarta: {
		built: 1527,
		verified: true
	},
	Manila: {
		built: 1571,
		verified: true
	},
	Dublin: {
		built: 841,
		verified: true
	},
	Edinburgh: {
		built: 600,
		verified: true
	},
	Prague: {
		built: 800,
		verified: true
	},
	Budapest: {
		built: -50,
		verified: true
	},
	Warsaw: {
		built: 1300,
		verified: true
	},
	Stockholm: {
		built: 1252,
		verified: true
	},
	Oslo: {
		built: 1040,
		verified: true
	},
	Copenhagen: {
		built: 1167,
		verified: true
	},
	Amsterdam: {
		built: 1275,
		verified: true
	},
	Brussels: {
		built: 979,
		verified: true
	},
	Geneva: {
		built: -50,
		verified: true
	},
	Zurich: {
		built: -15,
		verified: true
	},
	Venice: {
		built: 421,
		verified: true
	},
	Florence: {
		built: -59,
		verified: true
	},
	Naples: {
		built: -600,
		verified: true
	},
	Milan: {
		built: -400,
		verified: true
	},
	Barcelona: {
		built: -15,
		verified: true
	},
	"Tel Aviv": {
		built: 1909,
		verified: true
	},
	Dubai: {
		built: 1833,
		verified: true
	},
	"Abu Dhabi": {
		built: 1761,
		verified: true
	},
	Doha: {
		built: 1825,
		verified: true
	},
	Riyadh: {
		built: 1740,
		verified: true
	},
	Mecca: {
		built: -400,
		verified: true
	},
	Medina: {
		built: -400,
		verified: true
	},
	Kabul: {
		built: -600,
		verified: true
	},
	Samarkand: {
		built: -700,
		verified: true
	},
	Bukhara: {
		built: -500,
		verified: true
	},
	Lhasa: {
		built: 637,
		verified: true
	},
	"San Francisco": {
		built: 1776,
		verified: true
	},
	"San Diego": {
		built: 1769,
		verified: true
	},
	Houston: {
		built: 1836,
		verified: true
	},
	Dallas: {
		built: 1841,
		verified: true
	},
	Atlanta: {
		built: 1837,
		verified: true
	},
	Miami: {
		built: 1896,
		verified: true
	},
	Seattle: {
		built: 1851,
		verified: true
	},
	Denver: {
		built: 1858,
		verified: true
	},
	Detroit: {
		built: 1701,
		verified: true
	},
	Montreal: {
		built: 1642,
		verified: true
	},
	Quebec: {
		built: 1608,
		verified: true
	},
	"São Paulo": {
		built: 1554,
		verified: true
	},
	Santiago: {
		built: 1541,
		verified: true
	},
	Bogotá: {
		built: 1538,
		verified: true
	},
	Caracas: {
		built: 1567,
		verified: true
	},
	Havana: {
		built: 1519,
		verified: true
	},
	Kingston: {
		built: 1692,
		verified: true
	},
	Accra: {
		built: 1578,
		verified: true
	},
	Dakar: {
		built: 1857,
		verified: true
	},
	Kinshasa: {
		built: 1881,
		verified: true
	},
	Harare: {
		built: 1890,
		verified: true
	},
	Lusaka: {
		built: 1913,
		verified: true
	},
	Pretoria: {
		built: 1855,
		verified: true
	},
	Juba: {
		built: 1922,
		verified: true
	},
	Khartoum: {
		built: 1821,
		verified: true
	},
	Casablanca: {
		built: 700,
		verified: true
	},
	Tunis: {
		built: -814,
		verified: true
	},
	Algiers: {
		built: 944,
		verified: true
	},
	Tripoli: {
		built: -700,
		verified: true
	},
	Ankara: {
		built: -700,
		verified: true
	},
	Brasilia: {
		built: 1960,
		verified: true
	},
	Wellington: {
		built: 1840,
		verified: true
	},
	Anchorage: {
		built: 1914,
		verified: true
	},
	Phoenix: {
		built: 1868,
		verified: true
	},
	Honolulu: {
		built: 1795,
		verified: true
	},
	"Las Vegas": {
		built: 1905,
		verified: true
	},
	Minneapolis: {
		built: 1867,
		verified: true
	},
	Pittsburgh: {
		built: 1758,
		verified: true
	},
	Baltimore: {
		built: 1729,
		verified: true
	},
	Charleston: {
		built: 1670,
		verified: true
	},
	"New Orleans": {
		built: 1718,
		verified: true
	},
	"St. Louis": {
		built: 1764,
		verified: true
	},
	Cincinnati: {
		built: 1788,
		verified: true
	},
	Portland: {
		built: 1845,
		verified: true
	},
	"Salt Lake City": {
		built: 1847,
		verified: true
	},
	Winnipeg: {
		built: 1873,
		verified: true
	},
	Calgary: {
		built: 1875,
		verified: true
	},
	Mombasa: {
		built: 900,
		verified: true
	},
	Luanda: {
		built: 1576,
		verified: true
	},
	Kano: {
		built: 999,
		verified: true
	},
	Cusco: {
		built: 1100,
		verified: true
	},
	"Xi'an": {
		built: -1100,
		verified: true
	},
	Luoyang: {
		built: -1050,
		verified: true
	},
	Patna: {
		built: -490,
		verified: true
	},
	Carthage: {
		built: -814,
		gone: 146,
		ruin: true,
		verified: true
	},
	Tenochtitlan: {
		built: 1325,
		gone: 1521,
		ruin: true,
		verified: true
	}
};
var RENAMES = {
	Istanbul: [{
		until: 1930,
		name: "Constantinople"
	}],
	"St. Petersburg": [
		{
			until: 1914,
			name: "St. Petersburg"
		},
		{
			until: 1924,
			name: "Petrograd"
		},
		{
			until: 1991,
			name: "Leningrad"
		}
	],
	Oslo: [{
		until: 1925,
		name: "Christiania"
	}],
	Beijing: [{
		until: 1958,
		name: "Peking"
	}],
	Mumbai: [{
		until: 1995,
		name: "Bombay"
	}],
	"Ho Chi Minh City": [{
		until: 1976,
		name: "Saigon"
	}],
	Harare: [{
		until: 1982,
		name: "Salisbury"
	}],
	"Mexico City": [{
		until: 1521,
		name: "Tenochtitlan"
	}],
	Tokyo: [{
		until: 1868,
		name: "Edo"
	}],
	"New York": [{
		until: 1664,
		name: "New Amsterdam"
	}]
};
function regionalCityStart(p) {
	const lat = p.lat;
	const lon = p.lon;
	const oldWorld = lon > -15 && lon < 150 && lat > -5 && lat < 60 && !(lon > 110 && lat < 10 && lon < 180);
	if (p.country === "Australia" || p.country === "New Zealand") return {
		built: 1788,
		approx: true
	};
	if (p.country.includes("United States") || p.country === "Canada") {
		if (lon > -80 && lat > 35) return {
			built: 1630,
			approx: true
		};
		if (lon > -95) return {
			built: 1700,
			approx: true
		};
		return {
			built: 1840,
			approx: true
		};
	}
	if (lon < -30 && lon > -90 && lat < 15 && lat > -55) return {
		built: 1530,
		approx: true
	};
	if (lat < -10 && lon > 10 && lon < 50) return {
		built: 1800,
		approx: true
	};
	if (lat < 20 && lon > -20 && lon < 50) return {
		built: 1100,
		approx: true
	};
	if (oldWorld) return {
		built: 100,
		approx: true
	};
	if (lon < -30) return {
		built: 1600,
		approx: true
	};
	return {
		built: 1700,
		approx: true
	};
}
function lifeOf(p) {
	if (p.group === "landmark") {
		const lm = LANDMARKS[p.name];
		if (lm) return {
			life: lm,
			approx: !lm.verified
		};
		return {
			life: { built: 100 },
			approx: true
		};
	}
	const c = CITIES[p.name];
	if (c) return {
		life: c,
		approx: !c.verified
	};
	return {
		life: { built: regionalCityStart(p).built },
		approx: true
	};
}
function displayName(p, year) {
	const rows = RENAMES[p.name];
	if (rows) {
		for (const r of rows) if (year < r.until) return r.name;
	}
	return p.name;
}
function eraKind(p, year, ruin) {
	if (ruin) return p.kind === "city" || p.kind === "capital" ? "monument" : p.kind;
	if (p.group === "landmark") return p.kind;
	if (year < 1700) return p.group === "capital" ? "capital" : "village";
	if (year < 1860) return p.group === "capital" ? "capital" : "city";
	if (year < 1930) {
		if (p.kind === "skyscraper") return "city";
		return p.kind;
	}
	return p.kind;
}
function placeInYear(p, year) {
	const y = clampDateYear(year);
	const { life, approx } = lifeOf(p);
	const name = displayName(p, y);
	if (y < life.built) return {
		exists: false,
		ruin: false,
		approx,
		kind: p.kind,
		name,
		built: life.built,
		gone: life.gone
	};
	if (life.gone != null && y >= life.gone) {
		if (life.ruin) return {
			exists: true,
			ruin: true,
			approx,
			kind: eraKind(p, y, true),
			name,
			built: life.built,
			gone: life.gone
		};
		return {
			exists: false,
			ruin: false,
			approx,
			kind: p.kind,
			name,
			built: life.built,
			gone: life.gone
		};
	}
	return {
		exists: true,
		ruin: false,
		approx,
		kind: eraKind(p, y, false),
		name,
		built: life.built,
		gone: life.gone
	};
}
function eraInfrastructure(year) {
	const y = clampDateYear(year);
	return {
		roads: y >= 100,
		rail: y >= 1830,
		highway: y >= 1930,
		farms: y >= 100,
		roadSpan: y < 1700 ? .35 : y < 1860 ? .5 : y < 1914 ? .7 : y < 1962 ? .85 : 1,
		farmRadius: y < 1700 ? .4 : y < 1914 ? .7 : 1,
		cityLight: y < 1700 ? .35 : y < 1860 ? .5 : y < 1914 ? .7 : y < 1962 ? .85 : 1
	};
}
var GROUP_RANK = {
	landmark: 3,
	capital: 2,
	city: 1
};
function isLand(world, lx, lz) {
	if (!inBounds(world, lx, lz)) return false;
	return readColumn(world, lx, lz).water === 0;
}
/** Walk outward in lon/lat so coastal sites still find land on 1 m/block Earth. */
function findLandNear(world, lx, lz) {
	if (isLand(world, lx, lz)) return {
		lx,
		lz
	};
	const { lon, lat } = lonLatFromLocal(world, lx, lz);
	const raster = peekEarthRaster();
	const stepDeg = raster ? 360 / raster.w : 360 / Math.max(64, world.width);
	const maxDeg = stepDeg * 4;
	for (let r = stepDeg; r <= maxDeg + 1e-9; r += stepDeg) {
		const n = 16;
		for (let i = 0; i < n; i++) {
			const ang = i / n * Math.PI * 2;
			const loc = localFromLonLat(world, lon + Math.cos(ang) * r, lat + Math.sin(ang) * r);
			if (isLand(world, loc.lx, loc.lz)) return loc;
		}
	}
	return null;
}
function uid$1() {
	if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
	return `p-${Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`;
}
function toPlacement(world, p, lx, lz, year) {
	const st = year != null ? placeInYear(p, year) : {
		name: p.name,
		kind: p.kind,
		ruin: false,
		approx: false,
		built: void 0
	};
	return {
		id: uid$1(),
		kind: st.kind,
		x: worldX(world, lx),
		z: worldZ(world, lz),
		rotation: 0,
		name: st.name,
		realId: realPlaceId(p),
		ruin: st.ruin || void 0,
		built: st.built,
		approx: st.approx || void 0,
		year
	};
}
/**
* Stamp real cities and landmarks at published lat/lon.
* Keeps user-placed builds (no realId). Replaces previous real placements unless `only` is set.
* When `year` is set, skips places that did not yet exist and marks ruins.
*/
function placeRealWorld(world, opts) {
	const groups = opts?.groups;
	const only = opts?.only ? new Set(opts.only) : null;
	const year = opts?.year ?? world.year;
	const keep = world.structures.filter((s) => {
		if (!s.realId) return true;
		if (only) return !only.has(s.realId);
		if (groups) {
			const p = findRealPlace(s.realId);
			return !p || !groups.includes(p.group);
		}
		return false;
	});
	const occupied = /* @__PURE__ */ new Map();
	for (const s of keep) occupied.set(`${s.x},${s.z}`, 99);
	const added = [];
	let skipped = 0;
	for (const p of REAL_PLACES) {
		if (groups && !groups.includes(p.group)) continue;
		const id = realPlaceId(p);
		if (only && !only.has(id)) continue;
		if (year != null) {
			if (!placeInYear(p, year).exists) {
				skipped += 1;
				continue;
			}
		}
		const { lx, lz } = localFromLonLat(world, p.lon, p.lat);
		const land = findLandNear(world, lx, lz);
		if (!land) {
			skipped += 1;
			continue;
		}
		const wx = worldX(world, land.lx);
		const wz = worldZ(world, land.lz);
		const key = `${wx},${wz}`;
		const rank = GROUP_RANK[p.group];
		const prev = occupied.get(key);
		if (prev != null && prev >= rank) {
			skipped += 1;
			continue;
		}
		if (prev != null) {
			const idx = added.findIndex((s) => s.x === wx && s.z === wz);
			if (idx >= 0) added.splice(idx, 1);
		}
		occupied.set(key, rank);
		added.push(toPlacement(world, p, land.lx, land.lz, year));
	}
	world.structures = keep.concat(added);
	return {
		placed: added.length,
		skipped
	};
}
function placeOneReal(world, place) {
	const id = realPlaceId(place);
	const existing = world.structures.find((s) => s.realId === id);
	if (existing) return existing;
	if (world.year != null && !placeInYear(place, world.year).exists) return null;
	const { lx, lz } = localFromLonLat(world, place.lon, place.lat);
	const land = findLandNear(world, lx, lz);
	if (!land) return null;
	const next = toPlacement(world, place, land.lx, land.lz, world.year);
	world.structures = [...world.structures, next];
	return next;
}
function localForPlace(world, place) {
	const id = realPlaceId(place);
	const existing = world.structures.find((s) => s.realId === id);
	if (existing) return {
		lx: existing.x - world.originX,
		lz: existing.z - world.originZ
	};
	return localFromLonLat(world, place.lon, place.lat);
}
var CIV_PREFIX = "civ:";
function uid() {
	if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
	return `civ-${Math.random().toString(36).slice(2)}`;
}
function hash2(x, z, seed) {
	let n = Math.imul(x, 374761393) + Math.imul(z, 668265263) + seed;
	n = n ^ n >>> 13 | 0;
	n = Math.imul(n, 1274126177);
	return ((n ^ n >>> 16) >>> 0) / 4294967296;
}
function landNear(world, lx, lz, max = 24) {
	if (inBounds(world, lx, lz) && readColumn(world, lx, lz).water === 0) return {
		lx,
		lz
	};
	for (let r = 1; r <= max; r++) for (let i = 0; i < 12; i++) {
		const ang = i / 12 * Math.PI * 2;
		const x = Math.round(lx + Math.cos(ang) * r);
		const z = Math.round(lz + Math.sin(ang) * r);
		if (inBounds(world, x, z) && readColumn(world, x, z).water === 0) return {
			lx: x,
			lz: z
		};
	}
	return null;
}
function paintRoad(world, x0, z0, x1, z1, width, surface) {
	const dx = Math.abs(x1 - x0);
	const dz = Math.abs(z1 - z0);
	const sx = x0 < x1 ? 1 : -1;
	const sz = z0 < z1 ? 1 : -1;
	let err = dx - dz;
	let x = x0;
	let z = z0;
	const half = Math.max(0, Math.floor(width / 2));
	for (;;) {
		for (let oz = -half; oz <= half; oz++) for (let ox = -half; ox <= half; ox++) {
			const px = x + ox;
			const pz = z + oz;
			if (!inBounds(world, px, pz)) continue;
			if (readColumn(world, px, pz).water) continue;
			writeColumn(world, px, pz, {
				surface,
				water: 0
			});
		}
		if (x === x1 && z === z1) break;
		const e2 = 2 * err;
		if (e2 > -dz) {
			err -= dz;
			x += sx;
		}
		if (e2 < dx) {
			err += dx;
			z += sz;
		}
	}
}
function paintFarms(world, cx, cz, radius, seed) {
	const r = Math.max(12, Math.min(90, radius));
	for (let z = cz - r; z <= cz + r; z++) for (let x = cx - r; x <= cx + r; x++) {
		if (!inBounds(world, x, z)) continue;
		const d = Math.hypot(x - cx, z - cz);
		if (d < 10 || d > r) continue;
		if (hash2(x, z, seed) > .42) continue;
		if (readColumn(world, x, z).water) continue;
		writeColumn(world, x, z, {
			surface: hash2(x, z, seed + 3) > .88 ? 43 : 44,
			water: 0
		});
	}
}
function stamp(world, kind, lx, lz, name, realId, extra) {
	const land = landNear(world, lx, lz, 12);
	if (!land) return false;
	world.structures.push({
		id: uid(),
		kind,
		x: worldX(world, land.lx),
		z: worldZ(world, land.lz),
		rotation: 0,
		name,
		realId,
		year: extra?.year,
		approx: extra?.approx,
		ruin: extra?.ruin
	});
	return true;
}
function generateCivRegion(world, country, place, opts) {
	const atlas = peekCountries();
	const cap = place ?? (atlas ? primaryCapital(atlas, country.iso) : null);
	const loc = localFromLonLat(world, cap?.lon ?? country.lx, cap?.lat ?? country.ly);
	const land = landNear(world, loc.lx, loc.lz, 48) ?? loc;
	const radius = Math.max(96, Math.min(2048, Math.round(opts.radius)));
	const tag = `${CIV_PREFIX}${country.iso}:`;
	const year = world.year ?? 2026;
	const infra = eraInfrastructure(year);
	const seed = Number(world.settings.seed & 4294967295n) | 0;
	world.structures = world.structures.filter((s) => !s.realId?.startsWith(tag));
	const inR = (lx, lz) => Math.hypot(lx - land.lx, lz - land.lz) <= radius;
	let roads = 0;
	let settlements = 0;
	let structures = 0;
	let farms = 0;
	const nodes = [];
	if (atlas) {
		const list = placesForCountry(atlas, country.iso);
		for (const p of list) {
			if (!placeInYear(p, year).exists) continue;
			const at = localForPlace(world, p);
			if (!inR(at.lx, at.lz)) continue;
			nodes.push({
				lx: at.lx,
				lz: at.lz,
				place: p,
				rank: p.group === "capital" ? 3 : p.group === "city" ? 2 : 1
			});
		}
	}
	if (!nodes.length && cap) nodes.push({
		lx: land.lx,
		lz: land.lz,
		place: cap,
		rank: 3
	});
	const roadBlock = infra.highway ? 55 : 59;
	const wMain = year < 1700 ? 2 : year < 1860 ? 3 : infra.highway ? 5 : 4;
	const wSide = Math.max(1, wMain - 2);
	if (opts.roads && infra.roads) {
		if (year >= 1700) {
			const grid = year < 1860 ? 36 : year < 1914 ? 28 : infra.highway ? 18 : 22;
			const span = Math.min(radius, year < 1860 ? 120 : 220);
			for (let i = -Math.floor(span / grid); i <= Math.floor(span / grid); i++) {
				paintRoad(world, land.lx - span, land.lz + i * grid, land.lx + span, land.lz + i * grid, i === 0 ? wMain : wSide, roadBlock);
				paintRoad(world, land.lx + i * grid, land.lz - span, land.lx + i * grid, land.lz + span, i === 0 ? wMain : wSide, roadBlock);
				roads += 2;
			}
		}
		for (const n of nodes) {
			if (n.lx === land.lx && n.lz === land.lz) continue;
			paintRoad(world, land.lx, land.lz, n.lx, n.lz, n.rank >= 2 ? wMain : wSide, roadBlock);
			roads += 1;
			stamp(world, "road", Math.round((land.lx + n.lx) / 2), Math.round((land.lz + n.lz) / 2), `${n.place.name} road`, `${tag}road:${n.place.name}`, { year });
		}
		if (infra.rail) {
			const hubs = nodes.filter((n) => n.rank >= 2);
			for (let i = 1; i < hubs.length; i++) {
				const a = hubs[0];
				const b = hubs[i];
				paintRoad(world, a.lx, a.lz, b.lx, b.lz, 1, 7);
				roads += 1;
			}
		}
	}
	if (infra.farms) {
		paintFarms(world, land.lx, land.lz, Math.round(40 * infra.farmRadius), seed + 21);
		farms += 1;
		for (const n of nodes) if (n.rank >= 2) {
			paintFarms(world, n.lx, n.lz, Math.round(22 * infra.farmRadius), seed + 44);
			farms += 1;
		}
	}
	if (opts.settlements) {
		if (stamp(world, cap && cap.group === "capital" ? "capital" : year < 1700 ? "village" : year < 1930 ? "city" : "city", land.lx, land.lz, cap?.name ?? country.short, `${tag}hub`, { year })) settlements += 1;
		if (year >= 1700) {
			stamp(world, year >= 1860 ? "palace" : "house", land.lx + 18, land.lz - 16, `${country.short} civic hall`, `${tag}palace`, { year });
			settlements += 1;
		} else {
			stamp(world, "temple", land.lx + 14, land.lz - 12, `${country.short} shrine`, `${tag}temple`, {
				year,
				approx: true
			});
			settlements += 1;
		}
		stamp(world, "village", land.lx - 28, land.lz + 22, `${country.short} quarter`, `${tag}village`, { year });
		settlements += 1;
		const houseN = Math.min(year < 1700 ? 10 : year < 1860 ? 18 : 36, 6 + Math.floor(radius / (year < 1860 ? 70 : 40)));
		for (let i = 0; i < houseN; i++) {
			const ang = hash2(land.lx + i, land.lz, seed + 9) * Math.PI * 2;
			const dist = 22 + hash2(i, land.lz, seed + 11) * Math.min(90, radius * .35);
			const hx = Math.round(land.lx + Math.cos(ang) * dist);
			const hz = Math.round(land.lz + Math.sin(ang) * dist);
			if (!inR(hx, hz)) continue;
			if (stamp(world, "house", hx, hz, "House", `${tag}house:${i}`, { year })) settlements += 1;
		}
		for (const n of nodes) if (n.place.group === "city" && n.rank === 2) {
			const life = placeInYear(n.place, year);
			if (stamp(world, life.kind, n.lx, n.lz, life.name, `${tag}city:${n.place.name}`, {
				year,
				approx: life.approx,
				ruin: life.ruin
			})) settlements += 1;
		}
	}
	if (opts.structures && atlas) for (const p of placesForCountry(atlas, country.iso)) {
		if (p.group === "city" || p.group === "capital") continue;
		if (!placeInYear(p, year).exists) continue;
		const at = localForPlace(world, p);
		if (!inR(at.lx, at.lz)) continue;
		if (placeOneReal(world, p)) structures += 1;
	}
	return {
		roads,
		settlements,
		structures,
		farms,
		center: land,
		placeName: cap?.name ?? country.short,
		countryName: country.name,
		year
	};
}
function structuresForYear(world, year) {
	const y = clampDateYear(year);
	const keepManual = world.keepManualAcrossYears !== false;
	const kept = [];
	for (const s of world.structures) {
		if (s.realId) continue;
		if (keepManual) {
			kept.push(s);
			continue;
		}
		if (s.year == null || s.year === y) kept.push(s);
	}
	return kept;
}
/** Restamp every real city/landmark that exists in `year`. Terrain is untouched. */
function applyTimelineYear(world, year, month, day) {
	const y = clampDateYear(year);
	const kept = structuresForYear(world, y);
	const keptManual = kept.length;
	world.year = y;
	if (month != null) world.month = month;
	if (day != null) world.day = day;
	world.structures = kept;
	const { placed, skipped } = placeRealWorld(world, { year: y });
	return {
		year: y,
		placed,
		skipped,
		keptManual
	};
}
function countInYear(year) {
	const y = clampDateYear(year);
	let landmarks = 0;
	let cities = 0;
	let ruins = 0;
	for (const p of REAL_PLACES) {
		const st = placeInYear(p, y);
		if (!st.exists) continue;
		if (st.ruin) ruins += 1;
		if (p.group === "landmark") landmarks += 1;
		else cities += 1;
	}
	return {
		landmarks,
		cities,
		ruins
	};
}
var P = (id, name, short, color, capital, disputed) => ({
	id,
	name,
	short,
	color,
	capital,
	disputed
});
/** Named historical polities. Modern UN states are synthesized from the country atlas. */
var POLITIES = {
	rom: P("rom", "Roman Empire", "Rome", [
		168,
		52,
		52
	], {
		name: "Rome",
		lat: 41.89,
		lon: 12.49
	}),
	par: P("par", "Parthian Empire", "Parthia", [
		160,
		96,
		48
	], {
		name: "Ctesiphon",
		lat: 33.09,
		lon: 44.58
	}),
	han: P("han", "Han Empire", "Han", [
		196,
		156,
		56
	], {
		name: "Luoyang",
		lat: 34.62,
		lon: 112.45
	}),
	kush: P("kush", "Kushan Empire", "Kushan", [
		140,
		88,
		48
	], {
		name: "Peshawar",
		lat: 34.01,
		lon: 71.58
	}),
	aks: P("aks", "Kingdom of Aksum", "Aksum", [
		180,
		120,
		60
	], {
		name: "Aksum",
		lat: 14.13,
		lon: 38.72
	}),
	sat: P("sat", "Indian kingdoms", "India", [
		196,
		140,
		72
	], {
		name: "Pataliputra",
		lat: 25.61,
		lon: 85.14
	}),
	maya: P("maya", "Maya / Mesoamerica", "Maya", [
		72,
		140,
		88
	], {
		name: "Tikal",
		lat: 17.22,
		lon: -89.62
	}),
	andes: P("andes", "Andean peoples", "Andes", [
		120,
		92,
		56
	]),
	germ: P("germ", "Germanic peoples", "Germania", [
		120,
		124,
		88
	]),
	celt: P("celt", "Celtic / Pictish lands", "Celtica", [
		88,
		124,
		92
	]),
	scand: P("scand", "Norse / Baltic peoples", "North", [
		140,
		160,
		176
	]),
	steppe: P("steppe", "Steppe peoples", "Steppe", [
		176,
		156,
		96
	]),
	siber: P("siber", "Siberian peoples", "Siberia", [
		160,
		176,
		168
	]),
	arab: P("arab", "Arabian peoples", "Arabia", [
		180,
		148,
		80
	]),
	afrw: P("afrw", "West African peoples", "W. Africa", [
		140,
		112,
		64
	]),
	afrc: P("afrc", "Central African peoples", "C. Africa", [
		96,
		120,
		64
	]),
	afrs: P("afrs", "Southern African peoples", "S. Africa", [
		148,
		124,
		72
	]),
	nub: P("nub", "Nubian kingdoms", "Nubia", [
		168,
		108,
		64
	], {
		name: "Meroë",
		lat: 16.94,
		lon: 33.75
	}),
	sea: P("sea", "SE Asian kingdoms", "SE Asia", [
		72,
		132,
		96
	]),
	yam: P("yam", "Yamato Japan", "Yamato", [
		196,
		92,
		92
	], {
		name: "Nara",
		lat: 34.69,
		lon: 135.8
	}),
	amer: P("amer", "Indigenous Americas", "Americas", [
		92,
		140,
		108
	]),
	aus: P("aus", "Aboriginal Australia", "Australia", [
		164,
		132,
		84
	]),
	pac: P("pac", "Pacific peoples", "Pacific", [
		64,
		140,
		148
	]),
	empty: P("empty", "Uninhabited", "—", [
		80,
		88,
		96
	]),
	qing: P("qing", "Qing Empire", "Qing", [
		196,
		164,
		64
	], {
		name: "Beijing",
		lat: 39.9,
		lon: 116.4
	}),
	mughal: P("mughal", "Mughal Empire", "Mughal", [
		92,
		140,
		84
	], {
		name: "Delhi",
		lat: 28.61,
		lon: 77.21
	}),
	ott: P("ott", "Ottoman Empire", "Ottoman", [
		48,
		112,
		72
	], {
		name: "Constantinople",
		lat: 41.01,
		lon: 28.98
	}),
	saf: P("saf", "Persian empires", "Persia", [
		80,
		140,
		96
	], {
		name: "Isfahan",
		lat: 32.66,
		lon: 51.68
	}),
	rusemp: P("rusemp", "Russian Empire", "Russia", [
		120,
		40,
		48
	], {
		name: "St. Petersburg",
		lat: 59.93,
		lon: 30.31
	}),
	tsar: P("tsar", "Tsardom of Russia", "Russia", [
		120,
		40,
		48
	], {
		name: "Moscow",
		lat: 55.75,
		lon: 37.62
	}),
	gbremp: P("gbremp", "British Empire", "Britain", [
		196,
		112,
		140
	], {
		name: "London",
		lat: 51.51,
		lon: -.13
	}),
	fraemp: P("fraemp", "French colonial empire", "France", [
		72,
		104,
		176
	], {
		name: "Paris",
		lat: 48.86,
		lon: 2.35
	}),
	espemp: P("espemp", "Spanish Empire", "Spain", [
		196,
		164,
		72
	], {
		name: "Madrid",
		lat: 40.42,
		lon: -3.7
	}),
	premp: P("premp", "Portuguese Empire", "Portugal", [
		72,
		140,
		96
	], {
		name: "Lisbon",
		lat: 38.72,
		lon: -9.14
	}),
	nldemp: P("nldemp", "Dutch Empire", "Netherlands", [
		196,
		140,
		64
	], {
		name: "Amsterdam",
		lat: 52.37,
		lon: 4.89
	}),
	hre: P("hre", "Holy Roman Empire", "HRE", [
		168,
		144,
		88
	], {
		name: "Vienna",
		lat: 48.21,
		lon: 16.37
	}),
	prus: P("prus", "Kingdom of Prussia", "Prussia", [
		80,
		88,
		96
	], {
		name: "Berlin",
		lat: 52.52,
		lon: 13.4
	}),
	habs: P("habs", "Habsburg Austria", "Austria", [
		196,
		196,
		196
	], {
		name: "Vienna",
		lat: 48.21,
		lon: 16.37
	}),
	toki: P("toki", "Tokugawa Japan", "Japan", [
		180,
		64,
		64
	], {
		name: "Edo",
		lat: 35.68,
		lon: 139.69
	}),
	jose: P("jose", "Joseon Korea", "Joseon", [
		72,
		92,
		148
	], {
		name: "Hanseong",
		lat: 37.57,
		lon: 126.98
	}),
	siam: P("siam", "Siam", "Siam", [
		64,
		140,
		108
	], {
		name: "Ayutthaya",
		lat: 14.35,
		lon: 100.57
	}),
	maratha: P("maratha", "Maratha / Indian states", "Maratha", [
		180,
		116,
		64
	], {
		name: "Pune",
		lat: 18.52,
		lon: 73.86
	}),
	dang: P("dang", "Durrani / Afghan states", "Afghan", [
		140,
		108,
		68
	], {
		name: "Kabul",
		lat: 34.53,
		lon: 69.17
	}),
	ethi: P("ethi", "Ethiopian Empire", "Ethiopia", [
		180,
		124,
		64
	], {
		name: "Gondar",
		lat: 12.6,
		lon: 37.47
	}),
	ash: P("ash", "West African kingdoms", "W. Africa", [
		156,
		108,
		56
	]),
	qinglate: P("qinglate", "Qing Empire", "Qing", [
		196,
		164,
		64
	], {
		name: "Beijing",
		lat: 39.9,
		lon: 116.4
	}),
	deuemp: P("deuemp", "German Empire", "Germany", [
		80,
		84,
		88
	], {
		name: "Berlin",
		lat: 52.52,
		lon: 13.4
	}),
	ah: P("ah", "Austria-Hungary", "A.-Hungary", [
		196,
		188,
		140
	], {
		name: "Vienna",
		lat: 48.21,
		lon: 16.37
	}),
	ussr: P("ussr", "Soviet Union", "USSR", [
		176,
		48,
		48
	], {
		name: "Moscow",
		lat: 55.75,
		lon: 37.62
	}),
	yugo: P("yugo", "Yugoslavia", "Yugoslavia", [
		72,
		108,
		148
	], {
		name: "Belgrade",
		lat: 44.82,
		lon: 20.46
	}),
	csk: P("csk", "Czechoslovakia", "Czechoslo.", [
		64,
		104,
		156
	], {
		name: "Prague",
		lat: 50.08,
		lon: 14.44
	}),
	roc: P("roc", "Republic of China", "China", [
		196,
		64,
		64
	], {
		name: "Nanjing",
		lat: 32.06,
		lon: 118.8
	}),
	prc: P("prc", "People's Republic of China", "China", [
		196,
		48,
		48
	], {
		name: "Beijing",
		lat: 39.9,
		lon: 116.4
	}),
	weimar: P("weimar", "Weimar Germany", "Germany", [
		88,
		92,
		96
	], {
		name: "Berlin",
		lat: 52.52,
		lon: 13.4
	}),
	nazi: P("nazi", "Nazi Germany", "Germany", [
		64,
		64,
		64
	], {
		name: "Berlin",
		lat: 52.52,
		lon: 13.4
	}),
	jpnemp: P("jpnemp", "Empire of Japan", "Japan", [
		180,
		72,
		72
	], {
		name: "Tokyo",
		lat: 35.68,
		lon: 139.69
	}),
	manchu: P("manchu", "Manchukuo", "Manchukuo", [
		196,
		164,
		88
	], {
		name: "Hsinking",
		lat: 43.82,
		lon: 125.32
	}),
	belemp: P("belemp", "Belgian colonial empire", "Belgium", [
		196,
		196,
		140
	], {
		name: "Brussels",
		lat: 50.85,
		lon: 4.35
	}),
	itaemp: P("itaemp", "Italian colonial empire", "Italy", [
		88,
		140,
		92
	], {
		name: "Rome",
		lat: 41.89,
		lon: 12.49
	}),
	usaemp: P("usaemp", "United States", "United States", [
		72,
		104,
		176
	], {
		name: "Washington",
		lat: 38.9,
		lon: -77.04
	}),
	csa: P("csa", "Confederate States", "C.S.A.", [
		140,
		92,
		72
	], {
		name: "Richmond",
		lat: 37.54,
		lon: -77.44
	}),
	union: P("union", "United States (Union)", "Union", [
		72,
		104,
		176
	], {
		name: "Washington",
		lat: 38.9,
		lon: -77.04
	}),
	occdeu: P("occdeu", "Allied-occupied Germany", "Germany (occ.)", [
		120,
		124,
		120
	], {
		name: "Berlin",
		lat: 52.52,
		lon: 13.4
	}),
	occjpn: P("occjpn", "Occupied Japan", "Japan (occ.)", [
		180,
		140,
		140
	], {
		name: "Tokyo",
		lat: 35.68,
		lon: 139.69
	}),
	frg: P("frg", "West Germany", "FRG", [
		88,
		96,
		108
	], {
		name: "Bonn",
		lat: 50.74,
		lon: 7.1
	}),
	gdr: P("gdr", "East Germany", "GDR", [
		176,
		72,
		72
	], {
		name: "East Berlin",
		lat: 52.52,
		lon: 13.4
	}),
	vnmn: P("vnmn", "North Vietnam", "N. Vietnam", [
		176,
		56,
		56
	], {
		name: "Hanoi",
		lat: 21.03,
		lon: 105.85
	}),
	vnms: P("vnms", "South Vietnam", "S. Vietnam", [
		196,
		164,
		72
	], {
		name: "Saigon",
		lat: 10.82,
		lon: 106.63
	}),
	vichy: P("vichy", "Vichy France", "Vichy", [
		88,
		112,
		168
	], {
		name: "Vichy",
		lat: 46.13,
		lon: 3.43
	}),
	occfra: P("occfra", "Occupied France", "France (occ.)", [
		64,
		72,
		88
	], {
		name: "Paris",
		lat: 48.86,
		lon: 2.35
	}),
	scg: P("scg", "Serbia and Montenegro", "Serbia-MNE", [
		72,
		108,
		148
	], {
		name: "Belgrade",
		lat: 44.82,
		lon: 20.46
	}),
	srh: P("srh", "Rhodesia / S. Rhodesia", "Rhodesia", [
		196,
		180,
		120
	], {
		name: "Salisbury",
		lat: -17.83,
		lon: 31.05
	}),
	meiji: P("meiji", "Empire of Japan", "Japan", [
		180,
		72,
		72
	], {
		name: "Tokyo",
		lat: 35.68,
		lon: 139.69
	}),
	crimea: P("crimea", "Crimea (disputed)", "Crimea*", [
		132,
		56,
		64
	], {
		name: "Simferopol",
		lat: 44.95,
		lon: 34.1
	}, true)
};
var ALL = "AFG ALB DZA AND AGO ATA ATG ARG ARM AUS AUT AZE BHS BHR BGD BRB BLR BEL BLZ BEN BTN BOL BIH BWA BRA BRN BGR BFA BDI KHM CMR CAN CPV CAF TCD CHL CHN COL COM CRI CIV HRV CUB CYP CZE PRK COD DNK DJI DMA DOM ECU EGY SLV GNQ ERI EST ETH FLK FJI FIN FRA ATF GAB GEO DEU GHA GRC GRL GRD GTM GIN GNB GUY HTI HND HUN ISL IND IDN IRN IRQ IRL ISR ITA JAM JPN JOR KAZ KEN SWZ KIR KOS KWT KGZ LAO LVA LBN LSO LBR LBY LIE LTU LUX MDG MWI MYS MDV MLI MLT MHL MRT MUS MEX FSM MDA MCO MNG MNE MAR MOZ MMR NAM NRU NPL NLD NCL NZL NIC NER NGA MKD CYN NOR OMN PAK PLW PSX PAN PNG PRY PER PHL POL PRT PRI QAT KOR COG ROU RUS RWA KNA LCA VCT WSM SMR STP SAU SEN SRB SYC SLE SGP SVK SVN SLB SOM SOL ZAF SDS ESP LKA SDN SUR SWE CHE SYR TWN TJK TZA THA GMB TLS TGO TON TTO TUN TUR TKM TUV UGA UKR ARE GBR USA URY UZB VUT VAT VEN VNM SAH YEM ZMB ZWE".split(" ");
function put(o, polity, isos) {
	for (const iso of isos.split(" ")) if (iso) o[iso] = polity;
}
function rest(o, fallback) {
	for (const iso of ALL) if (!o[iso]) o[iso] = fallback(iso);
}
/** Latin America independent of Iberia after the 1820s. */
var LATAM = "ARG BOL BRA CHL COL ECU GUY PRY PER SUR URY VEN PAN";
var CARIB_IND = "HTI DOM CUB";
var USSR = "RUS UKR BLR EST LVA LTU MDA GEO ARM AZE KAZ UZB TKM KGZ TJK";
var YUGO = "SVN HRV BIH SRB MNE MKD KOS";
var CSK = "CZE SVK";
function y100() {
	const o = {};
	put(o, "rom", "ITA ESP PRT FRA BEL NLD LUX CHE AUT SVN HRV BIH SRB MNE MKD ALB GRC BGR ROU MLT CYP AND MCO SMR VAT LIE TUN LBY EGY DZA MAR SYR LBN ISR PSX JOR TUR");
	put(o, "par", "IRN IRQ AZE ARM");
	put(o, "han", "CHN PRK KOR MNG TWN");
	put(o, "kush", "AFG PAK TJK UZB KGZ");
	put(o, "sat", "IND BGD NPL BTN LKA");
	put(o, "aks", "ETH ERI DJI");
	put(o, "nub", "SDN SDS");
	put(o, "maya", "MEX GTM BLZ HND SLV");
	put(o, "andes", "PER BOL ECU");
	put(o, "germ", "DEU POL CZE SVK HUN");
	put(o, "celt", "IRL GBR");
	put(o, "scand", "NOR SWE FIN ISL DNK EST LVA LTU");
	put(o, "steppe", "KAZ UKR BLR MDA GEO");
	put(o, "siber", "RUS");
	put(o, "arab", "SAU YEM OMN ARE QAT BHR KWT");
	put(o, "yam", "JPN");
	put(o, "sea", "THA KHM LAO MMR MYS IDN PHL SGP BRN TLS VNM");
	put(o, "afrw", "SEN MLI BFA NER GHA CIV GIN GNB SLE LBR TGO BEN NGA CMR GAB COG CAF TCD MRT GMB");
	put(o, "afrc", "COD AGO RWA BDI UGA KEN TZA SOM SOL");
	put(o, "afrs", "ZAF NAM BWA ZWE ZMB MWI MOZ SWZ LSO MDG MUS SYC COM STP CPV GNQ");
	put(o, "amer", "USA CAN GRL CRI NIC PAN CUB HTI DOM JAM TTO BRB BHS ATG KNA LCA VCT DMA GRD PRI BLZ ARG CHL BRA COL VEN URY PRY SUR GUY");
	put(o, "aus", "AUS NZL PNG");
	put(o, "pac", "FJI SLB VUT NCL WSM TON KIR TUV NRU MHL FSM PLW");
	put(o, "empty", "ATA ATF FLK");
	rest(o, () => "amer");
	return o;
}
function colonialAmericas(o, year) {
	put(o, "espemp", "ESP MEX GTM BLZ HND SLV NIC CRI PAN CUB DOM PRI COL VEN ECU PER BOL CHL ARG PRY URY PHL GNQ SAH AND");
	put(o, "premp", "PRT BRA AGO MOZ GNB STP CPV TLS");
	if (year <= 1776) {
		put(o, "gbremp", "GBR IRL CAN GRL FLK JAM TTO BRB BHS ATG KNA LCA VCT DMA GRD BLZ GUY USA");
		put(o, "fraemp", "FRA HTI NCL ATF SEN GIN");
	}
}
function y1700() {
	const o = {};
	colonialAmericas(o, 1700);
	put(o, "gbremp", "GBR IRL CAN GRL FLK JAM TTO BRB BHS ATG KNA LCA VCT DMA GRD BLZ GUY USA MUS");
	put(o, "fraemp", "FRA HTI NCL ATF SEN MLI HTI GIN MDG");
	put(o, "nldemp", "NLD IDN SUR GUY");
	put(o, "ott", "TUR GRC BGR ALB MKD SRB BIH MNE ROU MDA SYR LBN ISR PSX JOR IRQ EGY LBY TUN DZA SAU YEM KWT CYP");
	put(o, "qing", "CHN MNG TWN");
	put(o, "mughal", "IND PAK BGD");
	put(o, "saf", "IRN AZE ARM GEO AFG");
	put(o, "tsar", "RUS UKR BLR EST LVA LTU KAZ");
	put(o, "hre", "DEU AUT CZE CHE LIE");
	put(o, "habs", "AUT HUN SVK HRV SVN");
	put(o, "toki", "JPN");
	put(o, "jose", "KOR PRK");
	put(o, "siam", "THA");
	put(o, "ethi", "ETH ERI");
	put(o, "ash", "GHA BEN TGO NGA CMR");
	put(o, "afrw", "BFA NER TCD CAF MLI MRT GMB SLE LBR CIV");
	put(o, "afrc", "COD COG GAB RWA BDI UGA KEN TZA SOM SOL SDN SDS");
	put(o, "afrs", "ZAF NAM BWA ZWE ZMB MWI SWZ LSO");
	put(o, "sea", "KHM LAO MMR MYS SGP BRN VNM");
	put(o, "empty", "ATA");
	put(o, "pac", "FJI SLB VUT WSM TON KIR TUV NRU MHL FSM PLW PNG NZL AUS");
	o.POL = "POL";
	o.SWE = "SWE";
	o.DNK = "DNK";
	o.NOR = "DNK";
	o.ISL = "DNK";
	o.GRL = "DNK";
	o.CHE = "hre";
	rest(o, (iso) => iso);
	return o;
}
function y1740() {
	const o = y1700();
	put(o, "prus", "DEU");
	put(o, "habs", "AUT HUN SVK HRV SVN CZE");
	put(o, "rusemp", "RUS UKR BLR EST LVA LTU KAZ FIN");
	return o;
}
function y1776() {
	const o = y1740();
	put(o, "gbremp", "GBR IRL CAN GRL FLK JAM TTO BRB BHS ATG KNA LCA VCT DMA GRD BLZ GUY MUS IND");
	put(o, "usaemp", "USA");
	put(o, "espemp", "ESP MEX GTM BLZ HND SLV NIC CRI PAN CUB DOM PRI COL VEN ECU PER BOL CHL ARG PRY URY PHL GNQ SAH AND");
	return o;
}
function y1860() {
	const o = {};
	put(o, "usaemp", "USA");
	put(o, "gbremp", "GBR IRL CAN AUS NZL IND PAK BGD LKA MMR MYS SGP GHA NGA SLE GMB ZAF FLK JAM TTO BRB BHS BLZ GUY ATG KNA LCA VCT DMA GRD MUS SYC MDV CYP MLT GRL PNG FJI");
	put(o, "fraemp", "FRA DZA SEN MLI NCL ATF GIN GAB COG");
	put(o, "espemp", "ESP CUB PRI PHL GNQ SAH AND");
	put(o, "premp", "PRT BRA AGO MOZ GNB STP CPV TLS");
	put(o, "nldemp", "NLD IDN SUR");
	put(o, "ott", "TUR GRC BGR ALB MKD SRB BIH ROU MDA SYR LBN ISR PSX JOR IRQ EGY LBY TUN SAU YEM KWT CYP");
	put(o, "qinglate", "CHN MNG TWN");
	put(o, "rusemp", "RUS UKR BLR EST LVA LTU FIN POL MDA GEO ARM AZE KAZ UZB TKM KGZ TJK");
	put(o, "habs", "AUT HUN SVK HRV SVN CZE");
	put(o, "prus", "DEU");
	put(o, "toki", "JPN");
	put(o, "jose", "KOR PRK");
	put(o, "siam", "THA");
	put(o, "ethi", "ETH ERI");
	put(o, "dang", "AFG");
	put(o, "saf", "IRN");
	put(o, "maratha", "NPL BTN");
	put(o, "afrw", "BFA NER TCD CAF MRT CIV BEN TGO CMR LBR");
	put(o, "afrc", "COD RWA BDI UGA KEN TZA SOM SOL SDN SDS CAF");
	put(o, "afrs", "NAM BWA ZWE ZMB MWI SWZ LSO MDG MOZ");
	for (const iso of LATAM.split(" ")) if (iso && iso !== "GUY" && iso !== "SUR") o[iso] = iso;
	for (const iso of CARIB_IND.split(" ")) o[iso] = iso;
	put(o, "empty", "ATA");
	rest(o, (iso) => iso);
	o.BRA = "BRA";
	o.MEX = "MEX";
	o.GUY = "gbremp";
	o.SUR = "nldemp";
	return o;
}
function y1863() {
	const o = y1860();
	o.USA = "union";
	return o;
}
function y1914() {
	const o = {};
	put(o, "gbremp", "GBR IRL CAN AUS NZL IND PAK BGD LKA MMR MYS SGP BRN PNG FJI SLB KIR TUV WSM TON EGY SDN SDS KEN UGA GHA NGA SLE GMB ZAF BWA LSO SWZ ZMB ZWE MWI CYP MLT YEM KWT ARE OMN BHR QAT JAM TTO BRB BHS BLZ GUY FLK ATG KNA LCA VCT DMA GRD MUS SYC MDV VUT SOL BTN");
	put(o, "fraemp", "FRA DZA TUN MAR SEN MLI BFA NER TCD CAF COG GAB BEN CIV GIN MDG DJI VNM LAO KHM NCL ATF COM");
	put(o, "deuemp", "DEU TZA RWA BDI NAM CMR TGO PNG PLW NRU MHL FSM WSM");
	put(o, "ah", "AUT HUN CZE SVK SVN HRV BIH");
	put(o, "ott", "TUR SYR LBN ISR PSX JOR IRQ KWT SAU YEM");
	put(o, "rusemp", "RUS UKR BLR FIN EST LVA LTU POL MDA GEO ARM AZE KAZ UZB TKM KGZ TJK MNG");
	put(o, "belemp", "BEL COD");
	put(o, "premp", "PRT AGO MOZ GNB STP CPV TLS");
	put(o, "nldemp", "NLD IDN SUR");
	put(o, "itaemp", "ITA LBY ERI SOM");
	put(o, "espemp", "ESP GNQ SAH AND");
	put(o, "usaemp", "USA PHL PRI");
	put(o, "jpnemp", "JPN KOR PRK TWN");
	put(o, "roc", "CHN");
	put(o, "siam", "THA");
	put(o, "ethi", "ETH");
	put(o, "dang", "AFG");
	put(o, "saf", "IRN");
	put(o, "empty", "ATA");
	for (const iso of (LATAM + " MEX HTI CUB DOM").split(" ")) if (iso && iso !== "GUY" && iso !== "SUR") o[iso] = iso;
	rest(o, (iso) => iso);
	o.PNG = "deuemp";
	o.NGA = "gbremp";
	o.GHA = "gbremp";
	o.GUY = "gbremp";
	o.SUR = "nldemp";
	o.MRT = "fraemp";
	o.CYN = "gbremp";
	o.LBR = "LBR";
	o.CHE = "CHE";
	o.SWE = "SWE";
	o.NOR = "NOR";
	o.DNK = "DNK";
	o.ISL = "DNK";
	o.GRL = "DNK";
	o.NLD = "nldemp";
	o.ESP = "espemp";
	o.PRT = "premp";
	o.GRC = "GRC";
	o.BGR = "BGR";
	o.ROU = "ROU";
	o.SRB = "SRB";
	o.MNE = "MNE";
	o.ALB = "ALB";
	o.MKD = "SRB";
	o.KOS = "SRB";
	o.LUX = "LUX";
	o.NPL = "NPL";
	return o;
}
function y1916() {
	const o = y1914();
	o.BEL = "deuemp";
	o.SRB = "ah";
	o.MNE = "ah";
	o.ALB = "ah";
	return o;
}
function y1927() {
	const o = y1914();
	put(o, "ussr", "RUS UKR BLR MDA GEO ARM AZE KAZ UZB TKM KGZ TJK");
	put(o, "weimar", "DEU");
	put(o, "yugo", YUGO);
	put(o, "csk", CSK);
	put(o, "roc", "CHN MNG");
	o.POL = "POL";
	o.FIN = "FIN";
	o.EST = "EST";
	o.LVA = "LVA";
	o.LTU = "LTU";
	o.IRL = "IRL";
	o.TUR = "TUR";
	o.AUT = "AUT";
	o.HUN = "HUN";
	o.BGR = "BGR";
	o.GRC = "GRC";
	o.ALB = "ALB";
	o.ROU = "ROU";
	o.SYR = "fraemp";
	o.LBN = "fraemp";
	o.ISR = "gbremp";
	o.PSX = "gbremp";
	o.JOR = "gbremp";
	o.IRQ = "gbremp";
	o.EGY = "EGY";
	o.SAU = "SAU";
	o.TZA = "gbremp";
	o.RWA = "belemp";
	o.BDI = "belemp";
	o.NAM = "gbremp";
	o.CMR = "fraemp";
	o.TGO = "fraemp";
	o.PNG = "gbremp";
	o.KOR = "jpnemp";
	o.PRK = "jpnemp";
	o.TWN = "jpnemp";
	o.PLW = "jpnemp";
	o.MHL = "jpnemp";
	o.FSM = "jpnemp";
	o.NRU = "gbremp";
	o.WSM = "gbremp";
	return o;
}
function y1933() {
	const o = y1927();
	o.DEU = "nazi";
	return o;
}
function y1938() {
	const o = y1933();
	o.AUT = "nazi";
	return o;
}
function y1940() {
	const o = y1938();
	o.POL = "nazi";
	o.DNK = "nazi";
	o.NOR = "nazi";
	o.NLD = "nazi";
	o.BEL = "nazi";
	o.LUX = "nazi";
	o.FRA = "occfra";
	o.CZE = "nazi";
	o.SVK = "nazi";
	return o;
}
function y1942() {
	const o = y1940();
	o.FRA = "occfra";
	put(o, "nazi", "DEU AUT POL DNK NOR NLD BEL LUX CZE SVK HUN ROU BGR GRC ALB YUGO SVN HRV BIH SRB MNE MKD KOS EST LVA LTU UKR BLR MDA");
	o.HUN = "nazi";
	o.ROU = "nazi";
	o.BGR = "nazi";
	o.GRC = "nazi";
	o.ALB = "nazi";
	o.SVN = "nazi";
	o.HRV = "nazi";
	o.BIH = "nazi";
	o.SRB = "nazi";
	o.MNE = "nazi";
	o.MKD = "nazi";
	o.KOS = "nazi";
	o.EST = "nazi";
	o.LVA = "nazi";
	o.LTU = "nazi";
	o.UKR = "nazi";
	o.BLR = "nazi";
	o.LBY = "itaemp";
	put(o, "jpnemp", "JPN KOR PRK TWN PHL IDN MMR MYS SGP BRN VNM LAO KHM PNG PLW MHL FSM NRU");
	o.USA = "usaemp";
	o.GBR = "gbremp";
	o.IND = "gbremp";
	o.AUS = "gbremp";
	o.CAN = "gbremp";
	o.RUS = "ussr";
	o.CHE = "CHE";
	o.SWE = "SWE";
	o.ESP = "ESP";
	o.PRT = "PRT";
	o.TUR = "TUR";
	o.IRL = "IRL";
	return o;
}
function y1945() {
	const o = y1927();
	o.DEU = "occdeu";
	o.JPN = "occjpn";
	o.KOR = "KOR";
	o.PRK = "PRK";
	o.TWN = "roc";
	o.AUT = "occdeu";
	put(o, "ussr", USSR);
	o.POL = "POL";
	o.FIN = "FIN";
	return o;
}
function y1962() {
	const o = {};
	put(o, "ussr", USSR);
	put(o, "yugo", YUGO);
	put(o, "csk", CSK);
	o.DEU = "frg";
	put(o, "prc", "CHN MNG");
	o.TWN = "TWN";
	o.KOR = "KOR";
	o.PRK = "PRK";
	o.VNM = "vnmn";
	put(o, "gbremp", "GBR FLK GIB JAM TTO BRB BHS BLZ GUY ATG KNA LCA VCT DMA GRD PNG FJI SLB KIR TUV WSM TON HKG CYP");
	put(o, "fraemp", "FRA NCL ATF DJI COM");
	put(o, "premp", "PRT AGO MOZ GNB STP CPV TLS");
	put(o, "belemp", "BEL");
	put(o, "nldemp", "NLD SUR");
	put(o, "espemp", "ESP GNQ SAH AND");
	o.COD = "COD";
	o.DZA = "DZA";
	o.IND = "IND";
	o.PAK = "PAK";
	o.BGD = "PAK";
	o.IDN = "IDN";
	o.MMR = "MMR";
	o.MYS = "MYS";
	o.SGP = "SGP";
	o.GHA = "GHA";
	o.NGA = "NGA";
	o.KEN = "KEN";
	o.TZA = "TZA";
	o.UGA = "UGA";
	o.ZAF = "ZAF";
	o.EGY = "EGY";
	o.SDN = "SDN";
	o.SDS = "SDN";
	o.ETH = "ETH";
	o.ERI = "ETH";
	o.ZWE = "srh";
	o.ZMB = "gbremp";
	o.MWI = "gbremp";
	o.BWA = "gbremp";
	o.NAM = "ZAF";
	o.AGO = "premp";
	o.MOZ = "premp";
	rest(o, (iso) => iso);
	return o;
}
function y1990() {
	const o = {};
	put(o, "ussr", USSR);
	put(o, "yugo", YUGO);
	put(o, "csk", CSK);
	o.DEU = "frg";
	put(o, "prc", "CHN");
	o.TWN = "TWN";
	o.NAM = "NAM";
	o.ZWE = "ZWE";
	o.AGO = "AGO";
	o.MOZ = "MOZ";
	o.VNM = "VNM";
	o.BGD = "BGD";
	o.ERI = "ETH";
	o.SDS = "SDN";
	rest(o, (iso) => iso);
	return o;
}
function y1992() {
	const o = {};
	put(o, "csk", CSK);
	put(o, "scg", "SRB MNE KOS");
	o.SVN = "SVN";
	o.HRV = "HRV";
	o.BIH = "BIH";
	o.MKD = "MKD";
	o.DEU = "DEU";
	o.ERI = "ETH";
	o.SDS = "SDN";
	rest(o, (iso) => iso);
	return o;
}
function y2002() {
	const o = {};
	put(o, "scg", "SRB MNE");
	o.KOS = "scg";
	o.ERI = "ERI";
	o.TLS = "TLS";
	o.SDS = "SDN";
	rest(o, (iso) => iso);
	return o;
}
function y2005() {
	return y2002();
}
function y2011() {
	const o = {};
	o.SDS = "SDS";
	o.MNE = "MNE";
	o.SRB = "SRB";
	o.KOS = "KOS";
	rest(o, (iso) => iso);
	return o;
}
function yModern() {
	const o = {};
	rest(o, (iso) => iso);
	return o;
}
function y1492() {
	const o = y1700();
	put(o, "amer", "USA CAN MEX GTM BLZ HND SLV NIC CRI PAN CUB HTI DOM JAM TTO BRB BHS ATG KNA LCA VCT DMA GRD PRI ARG BOL BRA CHL COL ECU GUY PRY PER SUR URY VEN");
	put(o, "aus", "AUS NZL PNG");
	o.PHL = "sea";
	return o;
}
function y1871() {
	const o = y1860();
	put(o, "deuemp", "DEU");
	o.JPN = "meiji";
	return o;
}
function y1948() {
	const o = y1945();
	o.ISR = "ISR";
	o.IND = "IND";
	o.PAK = "PAK";
	o.BGD = "PAK";
	return o;
}
function y1949() {
	const o = y1962();
	o.VNM = "vnmn";
	return o;
}
function y1975() {
	const o = y1990();
	o.VNM = "VNM";
	o.LAO = "LAO";
	o.KHM = "KHM";
	o.AGO = "AGO";
	o.MOZ = "MOZ";
	o.GNB = "GNB";
	o.TLS = "IDN";
	return o;
}
function y1993() {
	const o = y1992();
	o.CZE = "CZE";
	o.SVK = "SVK";
	o.ERI = "ERI";
	return o;
}
function y2006() {
	const o = y2011();
	o.SDS = "SDN";
	return o;
}
var YEAR_OWNERS = {
	100: y100,
	476: y100,
	800: y100,
	1066: y1700,
	1206: y1700,
	1453: y1700,
	1492: y1492,
	1648: y1700,
	1700: y1700,
	1740: y1740,
	1776: y1776,
	1789: y1776,
	1815: y1776,
	1825: y1860,
	1860: y1860,
	1861: y1863,
	1863: y1863,
	1871: y1871,
	1898: y1914,
	1914: y1914,
	1916: y1916,
	1917: y1916,
	1918: y1927,
	1919: y1927,
	1922: y1927,
	1927: y1927,
	1933: y1933,
	1938: y1938,
	1939: y1940,
	1940: y1940,
	1941: y1942,
	1942: y1942,
	1944: y1942,
	1945: y1945,
	1947: y1948,
	1948: y1948,
	1949: y1949,
	1960: y1962,
	1962: y1962,
	1975: y1975,
	1989: y1990,
	1990: y1990,
	1991: y1992,
	1992: y1992,
	1993: y1993,
	2002: y2002,
	2005: y2005,
	2006: y2006,
	2011: y2011,
	2013: yModern,
	2014: yModern,
	2016: yModern,
	2019: yModern,
	2020: yModern,
	2022: yModern,
	2026: yModern
};
function overrideApplies(r, year) {
	if (r.from != null && year < r.from) return false;
	if (r.to != null && year > r.to) return false;
	if (r.from != null || r.to != null) return true;
	if (!r.years || !r.years.length) return false;
	const snap = snapshotYear(year);
	return r.years.includes(year) || r.years.includes(snap);
}
/** Sub-national / occupation boxes on top of ISO ownership. Covers the whole Earth together with ISO maps. */
var OVERRIDES = [
	{
		years: [
			100,
			476,
			800
		],
		polity: "celt",
		lon0: -8,
		lat0: 54.5,
		lon1: 2,
		lat1: 60,
		only: ["GBR"]
	},
	{
		years: [
			1914,
			1916,
			1917
		],
		polity: "deuemp",
		lon0: 14.1,
		lat0: 49,
		lon1: 22.6,
		lat1: 55.1,
		only: ["POL"]
	},
	{
		years: [
			1914,
			1916,
			1917
		],
		polity: "ah",
		lon0: 19,
		lat0: 48.4,
		lon1: 26.6,
		lat1: 50.8,
		only: ["POL", "UKR"]
	},
	{
		years: [
			1914,
			1916,
			1917
		],
		polity: "rusemp",
		lon0: 20.5,
		lat0: 51,
		lon1: 24.2,
		lat1: 54.6,
		only: ["POL"]
	},
	{
		years: [
			1914,
			1916,
			1917
		],
		polity: "deuemp",
		lon0: 6.5,
		lat0: 47.4,
		lon1: 8.3,
		lat1: 49.3,
		only: ["FRA"]
	},
	{
		years: [
			1700,
			1740,
			1776,
			1789,
			1815
		],
		polity: "espemp",
		lon0: -125,
		lat0: 25,
		lon1: -90,
		lat1: 49,
		only: ["USA"]
	},
	{
		years: [1776, 1789],
		polity: "gbremp",
		lon0: -88,
		lat0: 24.5,
		lon1: -79.5,
		lat1: 31,
		only: ["USA"]
	},
	{
		years: [
			1776,
			1700,
			1740,
			1789,
			1815
		],
		polity: "gbremp",
		lon0: -85,
		lat0: 31,
		lon1: -66,
		lat1: 47.5,
		only: ["USA"]
	},
	{
		years: [
			1776,
			1789,
			1815
		],
		polity: "usaemp",
		lon0: -85,
		lat0: 31,
		lon1: -66,
		lat1: 47.5,
		only: ["USA"]
	},
	{
		years: [1700, 1740],
		polity: "gbremp",
		lon0: -85,
		lat0: 31,
		lon1: -66,
		lat1: 47.5,
		only: ["USA"]
	},
	{
		years: [1861, 1863],
		polity: "csa",
		lon0: -106,
		lat0: 24.5,
		lon1: -75,
		lat1: 36.55,
		only: ["USA"]
	},
	{
		years: [
			1938,
			1939,
			1940,
			1941,
			1942,
			1944
		],
		polity: "nazi",
		lon0: 12,
		lat0: 48.5,
		lon1: 16.9,
		lat1: 51.1,
		only: ["CZE"]
	},
	{
		years: [
			1940,
			1941,
			1942,
			1944
		],
		polity: "vichy",
		lon0: -1.8,
		lat0: 42.3,
		lon1: 7.8,
		lat1: 46.2,
		only: ["FRA"]
	},
	{
		years: [
			1933,
			1938,
			1939,
			1940,
			1941,
			1942,
			1944
		],
		polity: "manchu",
		lon0: 115,
		lat0: 38.5,
		lon1: 135,
		lat1: 53.5,
		only: ["CHN"]
	},
	{
		years: [
			1938,
			1939,
			1940,
			1941,
			1942,
			1944
		],
		polity: "jpnemp",
		lon0: 116.5,
		lat0: 22.5,
		lon1: 122.5,
		lat1: 40.2,
		only: ["CHN"]
	},
	{
		years: [
			1700,
			1740,
			1776,
			1789,
			1815
		],
		polity: "nldemp",
		lon0: 17.5,
		lat0: -35.2,
		lon1: 26.5,
		lat1: -31,
		only: ["ZAF"]
	},
	{
		from: 1945,
		to: 1990,
		polity: "gdr",
		lon0: 10,
		lat0: 50.15,
		lon1: 15.1,
		lat1: 54.9,
		only: ["DEU"]
	},
	{
		from: 1949,
		to: 1990,
		polity: "frg",
		lon0: 5.8,
		lat0: 47.2,
		lon1: 10.4,
		lat1: 55.1,
		only: ["DEU"]
	},
	{
		years: [1945],
		polity: "occdeu",
		lon0: 5.8,
		lat0: 47.2,
		lon1: 15.1,
		lat1: 55.1,
		only: ["DEU"]
	},
	{
		from: 1954,
		to: 1975,
		polity: "vnmn",
		lon0: 102,
		lat0: 17,
		lon1: 110,
		lat1: 23.4,
		only: ["VNM"]
	},
	{
		from: 1954,
		to: 1975,
		polity: "vnms",
		lon0: 104,
		lat0: 8.5,
		lon1: 109.5,
		lat1: 17,
		only: ["VNM"]
	},
	{
		from: 2014,
		to: 2026,
		polity: "crimea",
		lon0: 32.3,
		lat0: 44.25,
		lon1: 36.7,
		lat1: 46.25,
		only: ["UKR"]
	}
];
var ownersCache = /* @__PURE__ */ new Map();
function ownersFor(year) {
	const y = snapshotYear(year);
	let m = ownersCache.get(y);
	if (!m) {
		m = (YEAR_OWNERS[y] ?? yModern)();
		ownersCache.set(y, m);
	}
	return m;
}
function overrideAt(year, lon, lat, iso) {
	for (let i = OVERRIDES.length - 1; i >= 0; i--) {
		const r = OVERRIDES[i];
		if (!overrideApplies(r, year)) continue;
		if (r.only && iso && !r.only.includes(iso)) continue;
		if (lon >= r.lon0 && lon <= r.lon1 && lat >= r.lat0 && lat <= r.lat1) return r.polity;
	}
	return null;
}
function ownerAtIso(iso, year) {
	return ownersFor(year)[iso] ?? iso;
}
function resolvePolity(id, atlas) {
	const named = POLITIES[id];
	if (named) return named;
	const c = atlas?.byIso.get(id);
	if (c) return {
		id,
		name: c.name,
		short: c.short || c.name,
		color: countryColor(c.iso),
		capital: {
			name: c.short,
			lat: c.ly,
			lon: c.lx
		}
	};
	return {
		id,
		name: id,
		short: id,
		color: countryColor(id)
	};
}
function polityAtLonLat(atlas, year, lon, lat) {
	const country = countryAt(atlas, lon, lat);
	const iso = country?.iso ?? null;
	const id = overrideAt(year, lon, lat, iso) ?? (iso ? ownerAtIso(iso, year) : "");
	if (!id) return {
		polity: POLITIES.empty,
		iso,
		country
	};
	return {
		polity: resolvePolity(id, atlas),
		iso,
		country
	};
}
function countryAt(atlas, lon, lat) {
	let x = (lon + 180) / 360 * atlas.w;
	const y = (90 - lat) / 180 * atlas.h;
	while (x < 0) x += atlas.w;
	while (x >= atlas.w) x -= atlas.w;
	const ix = Math.min(atlas.w - 1, Math.max(0, Math.floor(x)));
	const iy = Math.min(atlas.h - 1, Math.max(0, Math.floor(y)));
	const n = atlas.id[ix + iy * atlas.w] ?? 0;
	if (!n) return null;
	return atlas.countries[n - 1] ?? null;
}
var viewCache = /* @__PURE__ */ new Map();
function buildPolityView(year, atlas) {
	const y = snapshotYear(year);
	const hit = viewCache.get(y);
	if (hit && hit.fill.width === atlas.w) return hit;
	const w = atlas.w;
	const h = atlas.h;
	const n = w * h;
	const pid = new Uint16Array(n);
	const list = [];
	const index = /* @__PURE__ */ new Map();
	const idxOf = (id) => {
		let i = index.get(id);
		if (i) return i;
		list.push(resolvePolity(id, atlas));
		i = list.length;
		index.set(id, i);
		return i;
	};
	const owners = ownersFor(y);
	for (let i = 0; i < n; i++) {
		const ci = atlas.id[i];
		if (!ci) continue;
		const rec = atlas.countries[ci - 1];
		if (!rec) continue;
		const over = overrideAt(y, i % w / w * 360 - 180, 90 - Math.floor(i / w) / h * 180, rec.iso);
		pid[i] = idxOf(over ?? owners[rec.iso] ?? rec.iso);
	}
	const fill = document.createElement("canvas");
	fill.width = w;
	fill.height = h;
	const fctx = fill.getContext("2d");
	const fimg = fctx.createImageData(w, h);
	const fd = fimg.data;
	const borders = document.createElement("canvas");
	borders.width = w;
	borders.height = h;
	const bctx = borders.getContext("2d");
	const bimg = bctx.createImageData(w, h);
	const bd = bimg.data;
	const sums = list.map(() => ({
		lon: 0,
		lat: 0,
		n: 0
	}));
	for (let i = 0; i < n; i++) {
		const p = pid[i];
		if (!p) continue;
		const pol = list[p - 1];
		const o = i * 4;
		fd[o] = pol.color[0];
		fd[o + 1] = pol.color[1];
		fd[o + 2] = pol.color[2];
		fd[o + 3] = 255;
		const x = i % w;
		const y0 = i / w | 0;
		const right = x + 1 < w ? pid[i + 1] : 0;
		const down = y0 + 1 < h ? pid[i + w] : 0;
		if (right && right !== p || down && down !== p || !right && x + 1 < w || !down && y0 + 1 < h && atlas.id[i + w]) {
			bd[o] = 14;
			bd[o + 1] = 17;
			bd[o + 2] = 12;
			bd[o + 3] = 210;
		}
		const s = sums[p - 1];
		s.lon += (x + .5) / w * 360 - 180;
		s.lat += 90 - (y0 + .5) / h * 180;
		s.n += 1;
	}
	fctx.putImageData(fimg, 0, 0);
	bctx.putImageData(bimg, 0, 0);
	const view = {
		year: y,
		fill,
		borders,
		id: pid,
		list,
		centroids: sums.map((s) => ({
			lon: s.n ? s.lon / s.n : 0,
			lat: s.n ? s.lat / s.n : 0,
			area: s.n
		}))
	};
	viewCache.set(y, view);
	return view;
}
function uniquePolities(year, atlas) {
	const owners = ownersFor(snapshotYear(year));
	const seen = /* @__PURE__ */ new Set();
	const out = [];
	const add = (id) => {
		if (!id || id === "empty" || seen.has(id)) return;
		seen.add(id);
		out.push(resolvePolity(id, atlas));
	};
	for (const iso of ALL) add(owners[iso] ?? iso);
	for (const r of OVERRIDES) if (overrideApplies(r, year)) add(r.polity);
	out.sort((a, b) => a.name.localeCompare(b.name));
	return out;
}
var POLITY_ALIASES = {
	rome: "rom",
	roman: "rom",
	"roman empire": "rom",
	parthia: "par",
	parthian: "par",
	han: "han",
	"han empire": "han",
	kushan: "kush",
	aksum: "aks",
	axum: "aks",
	qing: "qing",
	"qing empire": "qing",
	mughal: "mughal",
	ottoman: "ott",
	"ottoman empire": "ott",
	ussr: "ussr",
	soviet: "ussr",
	"soviet union": "ussr",
	"british empire": "gbremp",
	britain: "gbremp",
	"french empire": "fraemp",
	"spanish empire": "espemp",
	"portuguese empire": "premp",
	"dutch empire": "nldemp",
	"german empire": "deuemp",
	"nazi germany": "nazi",
	nazi: "nazi",
	"austria hungary": "ah",
	confederacy: "csa",
	confederate: "csa",
	csa: "csa",
	union: "union",
	prussia: "prus",
	hre: "hre",
	"holy roman": "hre",
	tokugawa: "toki",
	edo: "toki",
	"empire of japan": "jpnemp",
	manchukuo: "manchu",
	vichy: "vichy",
	"west germany": "frg",
	"east germany": "gdr",
	yugoslavia: "yugo",
	czechoslovakia: "csk",
	"north vietnam": "vnmn",
	"south vietnam": "vnms",
	rhodesia: "srh"
};
function isosOwnedBy(year, polityId) {
	const owners = ownersFor(year);
	const out = [];
	for (const iso of ALL) if ((owners[iso] ?? iso) === polityId) out.push(iso);
	return out;
}
function searchPolities(atlas, year, q) {
	const all = uniquePolities(year, atlas);
	const t = normName(q);
	if (!t) return all;
	const alias = POLITY_ALIASES[t];
	return all.filter((p) => {
		if (alias && p.id === alias) return true;
		if (normName(p.name).includes(t) || normName(p.short).includes(t) || p.id.toLowerCase().includes(t)) return true;
		if (p.capital && normName(p.capital.name).includes(t)) return true;
		return false;
	});
}
function viewForPolity(world, atlas, year, polityId) {
	const pol = resolvePolity(polityId, atlas);
	const isos = isosOwnedBy(year, polityId);
	if (pol.capital) {
		const loc = localFromLonLat(world, pol.capital.lon, pol.capital.lat);
		const zoom = isos.length > 12 ? 4 : isos.length > 4 ? 5 : 8;
		return {
			x: loc.lx,
			z: loc.lz,
			zoom
		};
	}
	if (isos.length === 1) {
		const rec = atlas.byIso.get(isos[0]);
		if (rec) return viewForCountry(world, rec);
	}
	const rec = atlas.byIso.get(polityId) ?? (isos[0] ? atlas.byIso.get(isos[0]) : void 0);
	if (rec) return viewForCountry(world, rec);
	const loc = localFromLonLat(world, 0, 20);
	return {
		x: loc.lx,
		z: loc.lz,
		zoom: 2
	};
}
function primaryIsoForPolity(year, polityId, atlas) {
	const pol = resolvePolity(polityId, atlas);
	if (pol.capital) {
		const c = countryAt(atlas, pol.capital.lon, pol.capital.lat);
		if (c) return c.iso;
	}
	return isosOwnedBy(year, polityId)[0] ?? (atlas.byIso.has(polityId) ? polityId : null);
}
function drawPolityOverlay(ctx, world, atlas, year, originPxX, originPxZ, cell, cssW, cssH, opts) {
	const view = buildPolityView(year, atlas);
	if (opts.fill) {
		ctx.save();
		ctx.globalAlpha = .42;
		ctx.imageSmoothingEnabled = cell < 2;
		ctx.drawImage(view.fill, 0, 0, atlas.w, atlas.h, originPxX, originPxZ, world.width * cell, world.depth * cell);
		ctx.restore();
	}
	if (opts.borders) {
		ctx.save();
		ctx.imageSmoothingEnabled = false;
		ctx.globalAlpha = .9;
		ctx.drawImage(view.borders, 0, 0, atlas.w, atlas.h, originPxX, originPxZ, world.width * cell, world.depth * cell);
		ctx.restore();
	}
	const highlightIsos = opts.selectedPolity ? isosOwnedBy(year, opts.selectedPolity) : opts.selectedIso ? [opts.selectedIso] : [];
	if (highlightIsos.length) {
		ctx.save();
		ctx.globalAlpha = .22;
		ctx.fillStyle = "rgb(125,174,90)";
		for (const iso of highlightIsos) {
			const rec = atlas.byIso.get(iso);
			if (!rec) continue;
			for (const ring of rec.rings) {
				pathSimple(ctx, world, ring, originPxX, originPxZ, cell);
				ctx.fill();
			}
		}
		ctx.restore();
	}
	if (opts.names) {
		const max = cell < 2e-4 ? 16 : cell < .002 ? 26 : 36;
		const labels = view.list.map((p, i) => ({
			p,
			c: view.centroids[i]
		})).filter((x) => x.c && x.c.area > 40).sort((a, b) => b.c.area - a.c.area);
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		let n = 0;
		for (const lab of labels) {
			if (n >= max) break;
			const { px, pz } = lonLatToScreen(world, lab.c.lon, lab.c.lat, originPxX, originPxZ, cell);
			if (px < 12 || pz < 12 || px > cssW - 12 || pz > cssH - 12) continue;
			ctx.font = `600 ${lab.c.area > 8e3 ? 13 : lab.c.area > 2e3 ? 11 : 10}px Figtree, sans-serif`;
			ctx.lineWidth = 3;
			ctx.strokeStyle = "rgba(14,17,12,0.78)";
			ctx.strokeText(lab.p.short, px, pz);
			ctx.fillStyle = lab.p.disputed ? "rgb(196,161,90)" : "rgba(230,234,220,0.92)";
			ctx.fillText(lab.p.short, px, pz);
			n += 1;
		}
	}
}
function pathSimple(ctx, world, ring, originPxX, originPxZ, cell) {
	ctx.beginPath();
	const n = ring.length / 2 | 0;
	let started = false;
	let prevLon = 0;
	for (let i = 0; i < n; i++) {
		const lon = ring[i * 2];
		const lat = ring[i * 2 + 1];
		if (started && Math.abs(lon - prevLon) > 180) {
			ctx.closePath();
			ctx.beginPath();
			started = false;
		}
		const { px, pz } = lonLatToScreen(world, lon, lat, originPxX, originPxZ, cell);
		if (!started) {
			ctx.moveTo(px, pz);
			started = true;
		} else ctx.lineTo(px, pz);
		prevLon = lon;
	}
	ctx.closePath();
}
var IDB_NAME = "minecraft-remap";
var STORE = "projects";
var META_KEY = "remap-last-id";
function openDb() {
	return new Promise((resolve, reject) => {
		const req = indexedDB.open(IDB_NAME, 1);
		req.onupgradeneeded = () => {
			const db = req.result;
			if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE);
		};
		req.onsuccess = () => resolve(req.result);
		req.onerror = () => reject(req.error);
	});
}
function encodeProject(w) {
	return {
		...w,
		height: w.virtual ? [] : Array.from(w.height),
		biome: w.virtual ? [] : Array.from(w.biome),
		surface: w.virtual ? [] : Array.from(w.surface),
		fill: w.virtual ? [] : Array.from(w.fill),
		water: w.virtual ? [] : Array.from(w.water),
		cave: w.virtual ? [] : Array.from(w.cave),
		tiles: w.tiles ? [...w.tiles.entries()].map(([k, t]) => ({
			k,
			filled: Array.from(t.filled),
			height: Array.from(t.height),
			biome: Array.from(t.biome),
			surface: Array.from(t.surface),
			fill: Array.from(t.fill),
			water: Array.from(t.water),
			cave: Array.from(t.cave)
		})) : void 0,
		settings: {
			...w.settings,
			seed: w.settings.seed.toString()
		},
		extraNbt: void 0
	};
}
function decodeProject(raw) {
	const virtual = Boolean(raw.virtual);
	const n = virtual ? 0 : raw.width * raw.depth;
	const tilesRaw = raw.tiles;
	const tiles = /* @__PURE__ */ new Map();
	if (tilesRaw) for (const t of tilesRaw) tiles.set(t.k, {
		filled: Uint8Array.from(t.filled),
		height: Int16Array.from(t.height),
		biome: Uint8Array.from(t.biome),
		surface: Uint8Array.from(t.surface),
		fill: Uint8Array.from(t.fill),
		water: Uint8Array.from(t.water),
		cave: Uint8Array.from(t.cave)
	});
	return {
		...raw,
		virtual,
		tiles: virtual ? tiles : void 0,
		height: Int16Array.from(raw.height ?? new Array(n).fill(64)),
		biome: Uint8Array.from(raw.biome ?? new Array(n).fill(0)),
		surface: Uint8Array.from(raw.surface ?? new Array(n).fill(4)),
		fill: Uint8Array.from(raw.fill ?? new Array(n).fill(3)),
		water: Uint8Array.from(raw.water ?? new Array(n).fill(0)),
		cave: Uint8Array.from(raw.cave ?? new Array(n).fill(0)),
		settings: {
			...raw.settings,
			seed: BigInt(raw.settings.seed),
			spawnRadius: Number(raw.settings.spawnRadius ?? 5)
		},
		extraNbt: void 0
	};
}
async function saveProject(world) {
	const db = await openDb();
	await new Promise((resolve, reject) => {
		const tx = db.transaction(STORE, "readwrite");
		tx.objectStore(STORE).put(encodeProject(world), world.id);
		tx.oncomplete = () => resolve();
		tx.onerror = () => reject(tx.error);
	});
	db.close();
	try {
		localStorage.setItem(META_KEY, world.id);
		localStorage.setItem("remap-meta", JSON.stringify({
			id: world.id,
			name: world.settings.name,
			updatedAt: world.updatedAt
		}));
	} catch {}
}
async function loadProject(id) {
	const db = await openDb();
	const raw = await new Promise((resolve, reject) => {
		const req = db.transaction(STORE, "readonly").objectStore(STORE).get(id);
		req.onsuccess = () => resolve(req.result);
		req.onerror = () => reject(req.error);
	});
	db.close();
	if (!raw) return null;
	return decodeProject(raw);
}
async function loadLastProject() {
	const id = localStorage.getItem(META_KEY);
	if (!id) return null;
	try {
		return await loadProject(id);
	} catch {
		return null;
	}
}
function lastMeta() {
	try {
		const s = localStorage.getItem("remap-meta");
		return s ? JSON.parse(s) : null;
	} catch {
		return null;
	}
}
function seedFrom(s) {
	if (/^-?\d+$/.test(s.trim())) return BigInt(s.trim());
	let h = 0n;
	for (let i = 0; i < s.length; i++) h = h * 131n + BigInt(s.charCodeAt(i)) & 9223372036854775807n;
	return h || 1n;
}
function areaOf(r) {
	return (r.x1 - r.x0 + 1) * (r.z1 - r.z0 + 1);
}
var useEditor = create((set, get) => ({
	world: null,
	step: "create",
	tool: "raise",
	brushSize: 4,
	selectedBlock: 4,
	selectedBiome: 0,
	selectedStructure: "house",
	selectedEntity: "minecraft:cow",
	structureRot: 0,
	selection: null,
	clipboard: null,
	hover: null,
	view: {
		x: 0,
		z: 0,
		zoom: 1
	},
	undoStack: [],
	redoStack: [],
	dirty: false,
	lastMeta: null,
	validation: null,
	busy: null,
	toast: null,
	layers: { ...DEFAULT_LAYERS },
	selectedCountryIso: null,
	selectedPlaceId: null,
	selectedPolityId: null,
	regionRadius: 512,
	mapEpoch: 0,
	setStep: (step) => set({ step }),
	setTool: (tool) => set({ tool }),
	setBrush: (brushSize) => set({ brushSize }),
	setBlock: (selectedBlock) => set({ selectedBlock }),
	setBiome: (selectedBiome) => set({ selectedBiome }),
	setHover: (hover) => set({ hover }),
	setView: (v) => set({ view: {
		...get().view,
		...v
	} }),
	setSelection: (selection) => set({ selection }),
	setToast: (toast) => set({ toast }),
	setBusy: (busy) => set({ busy }),
	newWorld: ({ name, seed, width, depth, preset, gameMode }) => {
		const w = Math.max(16, Math.round(width / 16) * 16);
		const d = Math.max(16, Math.round(depth / 16) * 16);
		set({ busy: preset === "earth" ? "Loading real Earth map…" : "Generating terrain…" });
		(async () => {
			try {
				const raster = preset === "earth" ? await loadEarthRaster() : null;
				if (preset === "earth") {
					set({ busy: "Loading countries…" });
					try {
						await loadCountries();
					} catch {}
					set({ busy: "Carving Earth…" });
				}
				const world = createEmptyWorld({
					name: name || "REMAP World",
					width: w,
					depth: d,
					seed: seedFrom(seed || String(Date.now())),
					settings: {
						...DEFAULT_SETTINGS(name || "REMAP World"),
						gameMode,
						spawnRadius: preset === "earth" ? 12 : 5
					}
				});
				world.terrainKind = preset;
				world.year = 2026;
				world.month = 1;
				world.day = 1;
				world.keepManualAcrossYears = true;
				const huge = hugeSizeOf(world.width, world.depth);
				if (huge) world.sizeLabel = huge.label;
				generateTerrain(world, preset, true, raster);
				if (preset === "earth") {
					set({ busy: "Placing real cities and landmarks…" });
					placeRealWorld(world, { year: 2026 });
				}
				const europe = EARTH_REGIONS.find((r) => r.id === "eu");
				world.settings.spawn = preset === "earth" ? findSpawnInRegion(world, europe) ?? findSafeSpawn(world) : findSafeSpawn(world);
				const maxDim = Math.max(world.width, world.depth);
				if (world.virtual) {
					const col = readColumn(world, Math.max(0, Math.min(world.width - 1, world.settings.spawn.x - world.originX)), Math.max(0, Math.min(world.depth - 1, world.settings.spawn.z - world.originZ)));
					world.settings.spawn.y = col.height + 1;
				}
				set({
					world,
					step: preset === "earth" ? "countries" : "map",
					undoStack: [],
					redoStack: [],
					dirty: true,
					validation: null,
					busy: null,
					layers: preset === "earth" ? {
						terrain: true,
						countries: true,
						borders: true,
						cities: true,
						roads: true,
						structures: true
					} : {
						terrain: true,
						countries: false,
						borders: false,
						cities: true,
						roads: true,
						structures: true
					},
					selectedCountryIso: null,
					selectedPlaceId: null,
					selectedPolityId: null,
					view: {
						x: world.settings.spawn.x - world.originX,
						z: world.settings.spawn.z - world.originZ,
						zoom: Math.min(8, 720 / maxDim)
					},
					selection: null
				});
				get().persist();
			} catch (e) {
				set({
					busy: null,
					toast: e instanceof Error ? e.message : String(e)
				});
			}
		})();
	},
	loadWorld: (world) => {
		set({
			world,
			step: "map",
			undoStack: [],
			redoStack: [],
			dirty: false,
			layers: world.terrainKind === "earth" ? {
				terrain: true,
				countries: true,
				borders: true,
				cities: true,
				roads: true,
				structures: true
			} : {
				...DEFAULT_LAYERS,
				countries: false,
				borders: false
			},
			view: {
				x: world.width / 2,
				z: world.depth / 2,
				zoom: Math.min(2, 360 / Math.max(world.width, world.depth))
			}
		});
	},
	resumeLast: async () => {
		const w = await loadLastProject();
		if (!w) return false;
		if (w.terrainKind === "earth") {
			w.year = clampDateYear(w.year ?? 2026);
			w.month = clampMonth(w.month ?? 1);
			w.day = clampDay(w.year, w.month, w.day ?? 1);
			if (w.keepManualAcrossYears == null) w.keepManualAcrossYears = true;
			try {
				await loadEarthRaster();
				await loadCountries();
			} catch {}
		}
		get().loadWorld(w);
		return true;
	},
	persist: async () => {
		const w = get().world;
		if (!w) return;
		w.updatedAt = Date.now();
		await saveProject(w);
		set({
			dirty: false,
			lastMeta: lastMeta()
		});
	},
	beginStroke: () => {
		const w = get().world;
		if (!w) return null;
		return snapshotRect(w, {
			x0: 0,
			z0: 0,
			x1: w.width - 1,
			z1: w.depth - 1
		});
	},
	commitStroke: (before) => {
		const w = get().world;
		if (!w) return;
		const after = snapshotRect(w, {
			x0: before.x0,
			z0: before.z0,
			x1: before.x1,
			z1: before.z1
		});
		set({
			undoStack: [...get().undoStack.slice(-40), {
				before,
				after
			}],
			redoStack: [],
			dirty: true
		});
	},
	applyBrush: (lx, lz) => {
		const { world, tool, brushSize, selectedBlock, selectedBiome } = get();
		if (!world || !inBounds(world, lx, lz)) return;
		if (tool === "eyedropper") {
			const col = readColumn(world, lx, lz);
			set({
				selectedBlock: col.surface,
				selectedBiome: col.biome
			});
			return;
		}
		if (tool === "select") return;
		forBrush(world, lx, lz, brushSize, (_x, _z, i, t) => {
			if (world.virtual) {
				const col = readColumn(world, _x, _z);
				if (tool === "raise") col.height = Math.min(220, col.height + Math.ceil(1 + t * 2));
				else if (tool === "lower") col.height = Math.max(-40, col.height - Math.ceil(1 + t * 2));
				else if (tool === "smooth") {
					let sum = 0;
					let n = 0;
					for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) {
						const nx = _x + dx;
						const nz = _z + dz;
						if (!inBounds(world, nx, nz)) continue;
						sum += readColumn(world, nx, nz).height;
						n++;
					}
					col.height = Math.round(col.height * (1 - t * .5) + sum / n * t * .5);
				} else if (tool === "flatten") col.height = readColumn(world, lx, lz).height;
				else if (tool === "paint-block") {
					col.surface = selectedBlock;
					col.water = selectedBlock === 8 ? 1 : col.water;
				} else if (tool === "paint-biome") {
					col.biome = selectedBiome;
					writeColumn(world, _x, _z, styleColumn(col));
					return;
				} else if (tool === "water") {
					col.water = 1;
					col.biome = 4;
					col.height = Math.min(col.height, 58);
					col.surface = 5;
					col.fill = 5;
				}
				writeColumn(world, _x, _z, col);
				return;
			}
			if (tool === "raise") world.height[i] = Math.min(220, world.height[i] + Math.ceil(1 + t * 2));
			else if (tool === "lower") world.height[i] = Math.max(-40, world.height[i] - Math.ceil(1 + t * 2));
			else if (tool === "smooth") {
				let sum = 0;
				let n = 0;
				for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) {
					const nx = _x + dx;
					const nz = _z + dz;
					if (!inBounds(world, nx, nz)) continue;
					sum += world.height[idxOf(world, nx, nz)];
					n++;
				}
				world.height[i] = Math.round(world.height[i] * (1 - t * .5) + sum / n * t * .5);
			} else if (tool === "flatten") {
				const ci = idxOf(world, lx, lz);
				world.height[i] = world.height[ci];
			} else if (tool === "paint-block") {
				world.surface[i] = selectedBlock;
				world.water[i] = selectedBlock === 8 ? 1 : world.water[i];
			} else if (tool === "paint-biome") {
				world.biome[i] = selectedBiome;
				applyBiomeDefaults(world, i);
			} else if (tool === "water") {
				world.water[i] = 1;
				world.biome[i] = 4;
				world.height[i] = Math.min(world.height[i], 58);
				world.surface[i] = 5;
				world.fill[i] = 5;
			}
		});
		set({
			world,
			dirty: true
		});
	},
	fillSelection: () => {
		const { world, selection, tool, selectedBlock, selectedBiome } = get();
		if (!world || !selection) return;
		const r = normalizeRect(selection);
		if (areaOf(r) > 25e4) {
			set({ toast: "Fill on huge maps is limited to 500×500. Select a smaller region." });
			return;
		}
		const before = snapshotRect(world, r);
		for (let z = r.z0; z <= r.z1; z++) for (let x = r.x0; x <= r.x1; x++) {
			if (world.virtual) {
				const col = readColumn(world, x, z);
				if (tool === "paint-biome" || tool === "select") {
					col.biome = selectedBiome;
					writeColumn(world, x, z, styleColumn(col));
				} else if (tool === "water") {
					col.water = 1;
					col.biome = 4;
					writeColumn(world, x, z, col);
				} else {
					col.surface = selectedBlock;
					writeColumn(world, x, z, col);
				}
				continue;
			}
			const i = idxOf(world, x, z);
			if (tool === "paint-biome" || tool === "select") {
				world.biome[i] = selectedBiome;
				applyBiomeDefaults(world, i);
			} else if (tool === "water") {
				world.water[i] = 1;
				world.biome[i] = 4;
			} else world.surface[i] = selectedBlock;
		}
		const after = snapshotRect(world, r);
		set({
			world,
			undoStack: [...get().undoStack.slice(-40), {
				before,
				after
			}],
			redoStack: [],
			dirty: true
		});
	},
	replaceBlock: (from, to) => {
		const { world, selection } = get();
		if (!world) return;
		const r = selection ? normalizeRect(selection) : {
			x0: 0,
			z0: 0,
			x1: world.width - 1,
			z1: world.depth - 1
		};
		if (world.virtual && !selection) {
			set({ toast: "Select a region first — replace can’t scan a 60 million block map." });
			return;
		}
		if (areaOf(r) > 25e4) {
			set({ toast: "Replace on huge maps is limited to 500×500. Select a smaller region." });
			return;
		}
		const before = snapshotRect(world, r);
		let n = 0;
		for (let z = r.z0; z <= r.z1; z++) for (let x = r.x0; x <= r.x1; x++) {
			if (world.virtual) {
				const col = readColumn(world, x, z);
				if (col.surface === from) {
					col.surface = to;
					writeColumn(world, x, z, col);
					n++;
				}
				continue;
			}
			const i = idxOf(world, x, z);
			if (world.surface[i] === from) {
				world.surface[i] = to;
				n++;
			}
		}
		const after = snapshotRect(world, r);
		set({
			world,
			undoStack: [...get().undoStack.slice(-40), {
				before,
				after
			}],
			redoStack: [],
			dirty: true,
			toast: `Replaced ${n} columns`
		});
	},
	copySel: () => {
		const { world, selection } = get();
		if (!world || !selection) return;
		const r = normalizeRect(selection);
		if (areaOf(r) > 25e4) {
			set({ toast: "Copy on huge maps is limited to 500×500. Select a smaller region." });
			return;
		}
		set({
			clipboard: copyRect(world, r),
			toast: `Copied ${r.x1 - r.x0 + 1}×${r.z1 - r.z0 + 1}`
		});
	},
	pasteAt: (lx, lz) => {
		const { world, clipboard } = get();
		if (!world || !clipboard) return;
		const r = {
			x0: lx,
			z0: lz,
			x1: lx + clipboard.w - 1,
			z1: lz + clipboard.d - 1
		};
		if (clipboard.w * clipboard.d > 25e4) {
			set({ toast: "Paste is limited to 500×500." });
			return;
		}
		const before = snapshotRect(world, r);
		if (world.virtual) for (let dz = 0; dz < clipboard.d; dz++) for (let dx = 0; dx < clipboard.w; dx++) {
			const x = lx + dx;
			const z = lz + dz;
			if (!inBounds(world, x, z)) continue;
			const s = dx + dz * clipboard.w;
			writeColumn(world, x, z, {
				height: clipboard.height[s],
				biome: clipboard.biome[s],
				surface: clipboard.surface[s],
				fill: clipboard.fill[s],
				water: clipboard.water[s]
			});
		}
		else pasteClipboard(world, lx, lz, clipboard);
		const after = snapshotRect(world, r);
		set({
			world,
			undoStack: [...get().undoStack.slice(-40), {
				before,
				after
			}],
			redoStack: [],
			dirty: true,
			toast: "Pasted"
		});
	},
	generate: (preset, replace) => {
		const world = get().world;
		if (!world) return;
		set({ busy: preset === "earth" ? "Loading Earth…" : "Generating terrain…" });
		(async () => {
			try {
				const raster = preset === "earth" ? await loadEarthRaster() : null;
				if (preset === "earth") try {
					await loadCountries();
				} catch {}
				const before = snapshotRect(world, {
					x0: 0,
					z0: 0,
					x1: world.width - 1,
					z1: world.depth - 1
				});
				generateTerrain(world, preset, replace, raster);
				world.terrainKind = preset;
				const after = snapshotRect(world, before);
				set({
					world,
					busy: null,
					dirty: true,
					layers: preset === "earth" ? {
						...get().layers,
						countries: true,
						borders: true,
						cities: true
					} : get().layers,
					undoStack: [...get().undoStack.slice(-40), {
						before,
						after
					}],
					redoStack: [],
					toast: `Generated ${preset === "earth" ? "Earth map" : preset}`
				});
			} catch (e) {
				set({
					busy: null,
					toast: e instanceof Error ? e.message : String(e)
				});
			}
		})();
	},
	paintBiomeAll: (id) => {
		const { world, selection } = get();
		if (!world) return;
		const r = selection ? normalizeRect(selection) : {
			x0: 0,
			z0: 0,
			x1: world.width - 1,
			z1: world.depth - 1
		};
		if (world.virtual && !selection) {
			set({ toast: "Select a region first — biome fill can’t paint a 60 million block map." });
			return;
		}
		if (areaOf(r) > 25e4) {
			set({ toast: "Biome fill on huge maps is limited to 500×500. Select a smaller region." });
			return;
		}
		const before = snapshotRect(world, r);
		for (let z = r.z0; z <= r.z1; z++) for (let x = r.x0; x <= r.x1; x++) {
			if (world.virtual) {
				const col = readColumn(world, x, z);
				col.biome = id;
				writeColumn(world, x, z, styleColumn(col));
				continue;
			}
			const i = idxOf(world, x, z);
			world.biome[i] = id;
			applyBiomeDefaults(world, i);
		}
		const after = snapshotRect(world, r);
		set({
			world,
			undoStack: [...get().undoStack.slice(-40), {
				before,
				after
			}],
			redoStack: [],
			dirty: true
		});
	},
	placeStructure: (lx, lz) => {
		const world = get().world;
		if (!world) return;
		world.structures = [...world.structures, {
			id: crypto.randomUUID(),
			kind: get().selectedStructure,
			x: world.originX + lx,
			z: world.originZ + lz,
			rotation: get().structureRot,
			year: world.keepManualAcrossYears === false ? clampDateYear(world.year ?? 2026) : void 0
		}];
		set({
			world,
			dirty: true,
			toast: `Placed ${get().selectedStructure}`
		});
	},
	placeAllReal: (groups) => {
		const world = get().world;
		if (!world) return;
		const { placed, skipped } = placeRealWorld(world, groups ? {
			groups,
			year: world.year
		} : { year: world.year });
		set({
			world,
			dirty: true,
			toast: `Placed ${placed} real places${skipped ? ` · ${skipped} skipped (water or overlap)` : ""}`
		});
	},
	placeOneReal: (realId) => {
		const world = get().world;
		if (!world) return;
		const place = findRealPlace(realId);
		if (!place) {
			set({ toast: "Unknown place" });
			return;
		}
		if (world.year != null && !placeInYear(place, world.year).exists) {
			const st = placeInYear(place, world.year);
			set({ toast: `${place.name} did not exist in ${clampDateYear(world.year)}${st.built != null ? ` (from ${st.built})` : ""}` });
			return;
		}
		if (!placeOneReal(world, place)) {
			set({ toast: `${place.name} sits on water in this map` });
			return;
		}
		const loc = localForPlace(world, place);
		set({
			world,
			dirty: true,
			toast: `Placed ${place.name}`,
			view: {
				x: loc.lx,
				z: loc.lz,
				zoom: Math.max(get().view.zoom, 6)
			}
		});
	},
	jumpToPlace: (realId) => {
		const world = get().world;
		if (!world) return;
		const place = findRealPlace(realId);
		if (!place) return;
		const loc = localForPlace(world, place);
		set({
			view: {
				x: loc.lx,
				z: loc.lz,
				zoom: Math.max(6, Math.min(16, Math.max(get().view.zoom, 6)))
			},
			toast: `${place.name}, ${place.country}`,
			selectedPlaceId: realId
		});
	},
	placeEntity: (lx, lz) => {
		const world = get().world;
		if (!world) return;
		const col = readColumn(world, lx, lz);
		const y = (col.water ? Math.max(col.height, 63) : col.height) + 1;
		world.entities = [...world.entities, {
			id: crypto.randomUUID(),
			type: get().selectedEntity,
			x: world.originX + lx,
			y,
			z: world.originZ + lz
		}];
		set({
			world,
			dirty: true
		});
	},
	setSpawnAt: (wx, wz) => {
		const world = get().world;
		if (!world) return;
		const lx = localX(world, wx);
		const lz = localZ(world, wz);
		if (!inBounds(world, lx, lz)) {
			set({ toast: "Spawn must sit on solid land inside the map" });
			return;
		}
		const col = readColumn(world, lx, lz);
		if (col.water) {
			set({ toast: "Spawn must sit on solid land inside the map" });
			return;
		}
		world.settings = {
			...world.settings,
			spawn: {
				x: wx,
				y: col.height + 1,
				z: wz
			}
		};
		set({
			world,
			dirty: true,
			toast: `Spawn set to ${wx}, ${col.height + 1}, ${wz}`,
			view: {
				...get().view,
				x: lx,
				z: lz
			}
		});
	},
	setSpawnCoords: (x, y, z) => {
		const world = get().world;
		if (!world) return;
		const lx = localX(world, x | 0);
		const lz = localZ(world, z | 0);
		if (!inBounds(world, lx, lz)) {
			set({ toast: "Those coordinates are off the map" });
			return;
		}
		world.settings = {
			...world.settings,
			spawn: {
				x: x | 0,
				y: y | 0,
				z: z | 0
			}
		};
		set({
			world,
			dirty: true,
			toast: `Spawn set to ${x | 0}, ${y | 0}, ${z | 0}`,
			view: {
				...get().view,
				x: lx,
				z: lz
			}
		});
	},
	snapSpawnY: () => {
		const world = get().world;
		if (!world) return;
		const cur = world.settings.spawn;
		const lx = localX(world, cur.x);
		const lz = localZ(world, cur.z);
		if (!inBounds(world, lx, lz)) {
			set({ toast: "Spawn is not on solid land — move X/Z first" });
			return;
		}
		const col = readColumn(world, lx, lz);
		if (col.water) {
			set({ toast: "Spawn is not on solid land — move X/Z first" });
			return;
		}
		const s = {
			x: cur.x,
			y: col.height + 1,
			z: cur.z
		};
		world.settings = {
			...world.settings,
			spawn: s
		};
		set({
			world,
			dirty: true,
			toast: `Y snapped to ${s.y}`
		});
	},
	setSpawnRadius: (n) => {
		const world = get().world;
		if (!world) return;
		const spawnRadius = Math.max(0, Math.min(128, Math.round(n)));
		world.settings = {
			...world.settings,
			spawnRadius
		};
		set({
			world,
			dirty: true
		});
	},
	spawnInRegion: (id) => {
		const world = get().world;
		if (!world) return;
		const region = EARTH_REGIONS.find((r) => r.id === id);
		if (!region) return;
		const s = findSpawnInRegion(world, region);
		if (!s) {
			set({ toast: `No solid land in ${region.label}` });
			return;
		}
		world.settings = {
			...world.settings,
			spawn: s
		};
		set({
			world,
			dirty: true,
			toast: `Spawn in ${region.label}: ${s.x}, ${s.y}, ${s.z}`,
			view: {
				...get().view,
				x: localX(world, s.x),
				z: localZ(world, s.z)
			}
		});
	},
	spawnRandomLand: () => {
		const world = get().world;
		if (!world) return;
		const s = randomLandSpawn(world);
		if (!s) {
			set({ toast: "No solid land to spawn on" });
			return;
		}
		world.settings = {
			...world.settings,
			spawn: s
		};
		set({
			world,
			dirty: true,
			toast: `Random spawn ${s.x}, ${s.y}, ${s.z}`,
			view: {
				...get().view,
				x: localX(world, s.x),
				z: localZ(world, s.z)
			}
		});
	},
	spawnHighest: () => {
		const world = get().world;
		if (!world) return;
		const s = highestLandSpawn(world);
		if (!s) {
			set({ toast: "No peak found" });
			return;
		}
		world.settings = {
			...world.settings,
			spawn: s
		};
		set({
			world,
			dirty: true,
			toast: `Peak spawn ${s.x}, ${s.y}, ${s.z}`,
			view: {
				...get().view,
				x: localX(world, s.x),
				z: localZ(world, s.z)
			}
		});
	},
	spawnCenter: () => {
		const world = get().world;
		if (!world) return;
		const s = findSafeSpawn(world);
		world.settings = {
			...world.settings,
			spawn: s
		};
		set({
			world,
			dirty: true,
			toast: `Center land ${s.x}, ${s.y}, ${s.z}`,
			view: {
				...get().view,
				x: localX(world, s.x),
				z: localZ(world, s.z)
			}
		});
	},
	centerOnSpawn: () => {
		const world = get().world;
		if (!world) return;
		const s = world.settings.spawn;
		set({ view: {
			...get().view,
			x: localX(world, s.x),
			z: localZ(world, s.z)
		} });
	},
	setLayer: (k, v) => {
		set({ layers: {
			...get().layers,
			[k]: v
		} });
	},
	selectCountry: (iso) => {
		const world = get().world;
		const atlas = peekCountries();
		const country = iso && atlas ? atlas.byIso.get(iso) ?? null : null;
		if (!world || !country) {
			set({
				selectedCountryIso: iso,
				selectedPlaceId: null,
				selectedPolityId: iso
			});
			return;
		}
		const year = clampDateYear(world.year ?? 2026);
		const { lon, lat } = {
			lon: country.lx,
			lat: country.ly
		};
		const hit = world.terrainKind === "earth" ? polityAtLonLat(atlas, year, lon, lat) : null;
		const cap = primaryCapital(atlas, country.iso);
		set({
			selectedCountryIso: country.iso,
			selectedPolityId: hit?.polity.id ?? country.iso,
			selectedPlaceId: cap ? realPlaceId(cap) : null,
			layers: {
				...get().layers,
				countries: true,
				borders: true,
				cities: true
			},
			view: viewForCountry(world, country),
			toast: hit && hit.polity.id !== country.iso ? `${hit.polity.name} · ${country.name}` : country.name,
			mapEpoch: get().mapEpoch + 1
		});
	},
	selectPolity: (id) => {
		const world = get().world;
		const atlas = peekCountries();
		if (!world || !atlas || !id) {
			set({ selectedPolityId: id });
			return;
		}
		const year = clampDateYear(world.year ?? 2026);
		const pol = resolvePolity(id, atlas);
		const iso = primaryIsoForPolity(year, id, atlas);
		const capName = pol.capital?.name;
		set({
			selectedPolityId: id,
			selectedCountryIso: iso,
			selectedPlaceId: (capName ? world.structures.find((s) => s.name === capName) ?? null : null)?.realId ?? get().selectedPlaceId,
			layers: {
				...get().layers,
				countries: true,
				borders: true,
				cities: true
			},
			view: viewForPolity(world, atlas, year, id),
			toast: pol.disputed ? `${pol.name} (disputed)` : pol.name,
			mapEpoch: get().mapEpoch + 1
		});
	},
	selectPlace: (id) => {
		const world = get().world;
		if (!world || !id) {
			set({ selectedPlaceId: id });
			return;
		}
		const place = findRealPlace(id);
		if (!place) return;
		const loc = localForPlace(world, place);
		const atlas = peekCountries();
		set({
			selectedPlaceId: id,
			selectedCountryIso: (atlas ? matchCountry(atlas, place.country) : null)?.iso ?? get().selectedCountryIso,
			view: {
				x: loc.lx,
				z: loc.lz,
				zoom: Math.max(4, Math.min(24, Math.max(get().view.zoom, 8)))
			},
			toast: `${place.name}, ${place.country}`
		});
	},
	pickCountryAt: (lx, lz) => {
		const world = get().world;
		const atlas = peekCountries();
		if (!world || !atlas) return;
		const c = countryAtLocal(world, atlas, lx, lz);
		if (!c) {
			set({ toast: "Ocean — tap a country" });
			return;
		}
		if (world.terrainKind === "earth") {
			const { lon, lat } = lonLatFromLocal(world, lx, lz);
			const hit = polityAtLonLat(atlas, clampDateYear(world.year ?? 2026), lon, lat);
			if (hit.polity.id) {
				get().selectPolity(hit.polity.id);
				return;
			}
		}
		get().selectCountry(c.iso);
	},
	spawnInCountry: () => {
		const world = get().world;
		const atlas = peekCountries();
		const iso = get().selectedCountryIso;
		if (!world || !atlas || !iso) {
			set({ toast: "Select a country first" });
			return;
		}
		const country = atlas.byIso.get(iso);
		if (!country) return;
		const cap = primaryCapital(atlas, iso);
		const loc = cap ? localForPlace(world, cap) : localFromLonLat(world, country.lx, country.ly);
		get().setSpawnAt(world.originX + loc.lx, world.originZ + loc.lz);
	},
	spawnAtCapital: () => {
		const world = get().world;
		const atlas = peekCountries();
		if (!world || !atlas) {
			set({ toast: "Select a country first" });
			return;
		}
		clampDateYear(world.year ?? 2026);
		const polityId = get().selectedPolityId;
		if (polityId && world.terrainKind === "earth") {
			const pol = resolvePolity(polityId, atlas);
			if (pol.capital) {
				const loc = localFromLonLat(world, pol.capital.lon, pol.capital.lat);
				get().setSpawnAt(world.originX + loc.lx, world.originZ + loc.lz);
				set({ toast: `Spawn at ${pol.capital.name}, ${pol.name}` });
				return;
			}
		}
		const iso = get().selectedCountryIso;
		if (!iso) {
			set({ toast: "Select a country first" });
			return;
		}
		const cap = primaryCapital(atlas, iso);
		if (!cap) {
			set({ toast: "No capital on file for that country" });
			return;
		}
		const loc = localForPlace(world, cap);
		get().setSpawnAt(world.originX + loc.lx, world.originZ + loc.lz);
		get().selectPlace(realPlaceId(cap));
	},
	setRegionRadius: (n) => set({ regionRadius: Math.max(128, Math.min(2048, Math.round(n))) }),
	setKeepManual: (v) => {
		const world = get().world;
		if (!world) return;
		world.keepManualAcrossYears = v;
		set({
			world,
			dirty: true
		});
	},
	setYear: (y) => {
		get().setDate({ year: y });
	},
	setDate: ({ year, month, day }) => {
		const world = get().world;
		if (!world) return;
		if (world.terrainKind !== "earth") {
			set({ toast: "Timeline runs on the Earth map — create an Earth world first." });
			return;
		}
		const fromY = clampDateYear(world.year ?? 2026);
		const fromM = clampMonth(world.month ?? 1);
		const fromD = clampDay(fromY, fromM, world.day ?? 1);
		const toY = clampDateYear(year ?? fromY);
		const toM = clampMonth(month ?? fromM);
		const toD = clampDay(toY, toM, day ?? fromD);
		if (toY === fromY && toM === fromM && toD === fromD) return;
		if (toY === fromY) {
			world.month = toM;
			world.day = toD;
			set({
				world,
				dirty: true,
				mapEpoch: get().mapEpoch + 1,
				toast: fmtDateShort(toY, toM, toD)
			});
			return;
		}
		const structuresFrom = world.structures.map((s) => ({ ...s }));
		const keepFrom = world.keepManualAcrossYears !== false;
		set({ busy: `Shifting Earth to ${fmtDateShort(toY, toM, toD)}…` });
		window.setTimeout(() => {
			try {
				const out = applyTimelineYear(world, toY, toM, toD);
				const structuresTo = world.structures.map((s) => ({ ...s }));
				const hist = {
					kind: "year",
					from: fromY,
					to: toY,
					fromMonth: fromM,
					toMonth: toM,
					fromDay: fromD,
					toDay: toD,
					structuresFrom,
					structuresTo,
					keepFrom,
					keepTo: world.keepManualAcrossYears !== false
				};
				set({
					world,
					busy: null,
					dirty: true,
					undoStack: [...get().undoStack.slice(-40), hist],
					redoStack: [],
					mapEpoch: get().mapEpoch + 1,
					toast: `${fmtDateShort(toY, toM, toD)} · ${out.placed} places on the globe${out.skipped ? ` · ${out.skipped} not yet built or at sea` : ""}`
				});
			} catch (e) {
				set({
					busy: null,
					toast: e instanceof Error ? e.message : String(e)
				});
			}
		}, 20);
	},
	stepYear: (dir) => {
		const world = get().world;
		if (!world) return;
		get().setDate({ year: neighborYear(world.year ?? 2026, dir) });
	},
	generateCountryRegion: () => {
		const world = get().world;
		const atlas = peekCountries();
		if (!world || !atlas) {
			set({ toast: "Select a country first" });
			return;
		}
		const year = clampDateYear(world.year ?? 2026);
		const iso = get().selectedCountryIso ?? (get().selectedPolityId ? primaryIsoForPolity(year, get().selectedPolityId, atlas) : null);
		if (!iso) {
			set({ toast: "Select a country first" });
			return;
		}
		const country = atlas.byIso.get(iso);
		if (!country) return;
		const place = get().selectedPlaceId ? findRealPlace(get().selectedPlaceId) ?? null : null;
		const layers = get().layers;
		set({ busy: `Generating ${place?.name ?? country.short} region…` });
		window.setTimeout(() => {
			try {
				const before = snapshotRect(world, {
					x0: 0,
					z0: 0,
					x1: world.width - 1,
					z1: world.depth - 1
				});
				const out = generateCivRegion(world, country, place, {
					radius: get().regionRadius,
					roads: layers.roads,
					settlements: true,
					structures: layers.structures
				});
				const col = readColumn(world, out.center.lx, out.center.lz);
				world.settings = {
					...world.settings,
					spawn: {
						x: world.originX + out.center.lx,
						y: col.height + 1,
						z: world.originZ + out.center.lz
					}
				};
				if (world.virtual) world.exportWindow = Math.max(world.exportWindow ?? 2048, Math.min(4096, get().regionRadius * 2));
				const after = snapshotRect(world, before);
				set({
					world,
					busy: null,
					dirty: true,
					undoStack: [...get().undoStack.slice(-40), {
						before,
						after
					}],
					redoStack: [],
					mapEpoch: get().mapEpoch + 1,
					view: {
						x: out.center.lx,
						z: out.center.lz,
						zoom: Math.max(get().view.zoom, 6)
					},
					toast: `${out.year} · ${out.countryName} · ${out.placeName}: ${out.settlements} builds, ${out.roads} roads, ${out.farms} farm fields, ${out.structures} landmarks. Export writes the playable window around spawn.`
				});
			} catch (e) {
				set({
					busy: null,
					toast: e instanceof Error ? e.message : String(e)
				});
			}
		}, 30);
	},
	updateSettings: (p) => {
		const world = get().world;
		if (!world) return;
		world.settings = {
			...world.settings,
			...p
		};
		set({
			world,
			dirty: true
		});
	},
	undo: () => {
		const { world, undoStack } = get();
		if (!world || !undoStack.length) return;
		const h = undoStack[undoStack.length - 1];
		if (h.kind === "year") {
			world.year = h.from;
			world.month = h.fromMonth ?? 1;
			world.day = h.fromDay ?? 1;
			world.keepManualAcrossYears = h.keepFrom;
			world.structures = h.structuresFrom.map((s) => ({ ...s }));
		} else restoreRect(world, h.before);
		set({
			world,
			undoStack: undoStack.slice(0, -1),
			redoStack: [...get().redoStack, h],
			dirty: true,
			mapEpoch: get().mapEpoch + 1
		});
	},
	redo: () => {
		const { world, redoStack } = get();
		if (!world || !redoStack.length) return;
		const h = redoStack[redoStack.length - 1];
		if (h.kind === "year") {
			world.year = h.to;
			world.month = h.toMonth ?? 1;
			world.day = h.toDay ?? 1;
			world.keepManualAcrossYears = h.keepTo;
			world.structures = h.structuresTo.map((s) => ({ ...s }));
		} else restoreRect(world, h.after);
		set({
			world,
			redoStack: redoStack.slice(0, -1),
			undoStack: [...get().undoStack, h],
			dirty: true,
			mapEpoch: get().mapEpoch + 1
		});
	},
	runValidate: () => {
		const world = get().world;
		if (!world) return null;
		const report = validateProject(world);
		set({
			validation: report,
			step: "validate"
		});
		return report;
	}
}));
var PRESETS = [
	{
		id: "continents",
		label: "Continents",
		blurb: "Large landmasses, coasts, inland ranges"
	},
	{
		id: "islands",
		label: "Islands",
		blurb: "Scattered land in open water"
	},
	{
		id: "archipelago",
		label: "Archipelago",
		blurb: "Dense island chains"
	},
	{
		id: "oceans",
		label: "Oceans",
		blurb: "Mostly water, rare landfalls"
	},
	{
		id: "mountains",
		label: "Mountains",
		blurb: "High peaks, deep valleys"
	},
	{
		id: "inland",
		label: "Inland",
		blurb: "No ocean — plains and rivers"
	},
	{
		id: "mixed",
		label: "Mixed",
		blurb: "A bit of everything"
	},
	{
		id: "flat",
		label: "Flat",
		blurb: "Level plains, ready to paint"
	}
];
var SIZES = [
	64,
	96,
	128,
	192,
	256,
	384,
	512,
	768,
	1024,
	1280,
	1536,
	2048,
	4096,
	8192
];
function CreateScreen() {
	const newWorld = useEditor((s) => s.newWorld);
	const loadWorld = useEditor((s) => s.loadWorld);
	const resumeLast = useEditor((s) => s.resumeLast);
	const lastMeta = useEditor((s) => s.lastMeta);
	const setBusy = useEditor((s) => s.setBusy);
	const setToast = useEditor((s) => s.setToast);
	const [name, setName] = (0, import_react.useState)("REMAP World");
	const [seed, setSeed] = (0, import_react.useState)("bedrock-remap");
	const [size, setSize] = (0, import_react.useState)(256);
	const [aspect, setAspect] = (0, import_react.useState)("square");
	const [hugeId, setHugeId] = (0, import_react.useState)(null);
	const [preset, setPreset] = (0, import_react.useState)("continents");
	const [mode, setMode] = (0, import_react.useState)("creative");
	const [err, setErr] = (0, import_react.useState)(null);
	const fileRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setSeed(String(Math.floor(Math.random() * 1e9)));
	}, []);
	const huge = HUGE_SIZES.find((h) => h.id === hugeId);
	const width = huge ? huge.width : size;
	const depth = huge ? huge.depth : aspect === "globe" ? Math.max(16, Math.round(size / 2 / 16) * 16) : size;
	const large = isVirtualSize(width, depth) || width * depth >= 294912;
	async function onImport(file) {
		setErr(null);
		setBusy("Reading .mcworld…");
		try {
			const { world, warnings } = await importMcworld(file, file.name);
			loadWorld(world);
			setToast(warnings[0] ?? `Imported ${file.name}`);
		} catch (e) {
			setErr(e instanceof Error ? e.message : String(e));
		} finally {
			setBusy(null);
		}
	}
	function pickPreset(id) {
		setPreset(id);
		if (id === "earth") {
			setAspect("globe");
			if (name === "REMAP World") setName("Earth");
			if (!hugeId && size < 1024) setSize(2048);
		} else if (name === "Earth" && huge?.family !== "earth" && huge?.aspect !== "globe") setName("REMAP World");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-8 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.18em] text-muted uppercase",
						children: "Minecraft Remap"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl leading-tight tracking-tight sm:text-4xl",
						children: "Bedrock World Creator"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "max-w-xl text-muted text-pretty",
						children: [
							"Create or import a world, paint terrain on the map, set spawn, then export a real",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-fg",
								children: ".mcworld"
							}),
							" you can open on a phone or tablet."
						]
					})
				]
			}),
			lastMeta ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => void resumeLast(),
				className: "flex min-h-12 items-center justify-between rounded-[var(--radius-lg)] bg-surface-2 px-4 py-3 text-left shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-sm text-muted",
					children: "Continue last world"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: lastMeta.name
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "size-5 text-muted" })]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-[var(--radius-xl)] bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-4 text-sm font-medium tracking-wide text-muted uppercase",
						children: "New world"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex flex-col gap-1.5 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: "Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: name,
								onChange: (e) => setName(e.target.value),
								suppressHydrationWarning: true,
								className: "h-11 rounded-[var(--radius-md)] bg-surface-2 px-3 text-fg shadow-[var(--shadow-border)] outline-none focus:ring-2 focus:ring-accent/40"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex flex-col gap-1.5 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: "Seed"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: seed,
								onChange: (e) => setSeed(e.target.value),
								suppressHydrationWarning: true,
								className: "h-11 rounded-[var(--radius-md)] bg-surface-2 px-3 font-mono text-fg shadow-[var(--shadow-border)] outline-none focus:ring-2 focus:ring-accent/40"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 text-sm text-muted",
								children: "Size (blocks)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-2 flex flex-wrap gap-2",
								children: ["square", "globe"].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										setAspect(a);
										setHugeId(null);
									},
									className: `h-11 rounded-[var(--radius-md)] px-4 text-sm ${aspect === a ? "bg-accent text-accent-fg" : "bg-surface-2 text-fg"}`,
									children: a === "square" ? "Square" : "Globe 2:1"
								}, a))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: SIZES.map((n) => {
									const w = n;
									const d = aspect === "globe" ? Math.max(16, Math.round(n / 2 / 16) * 16) : n;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: `h-11 min-w-11 rounded-[var(--radius-md)] px-3 text-sm ${!hugeId && size === n ? "bg-accent text-accent-fg" : "bg-surface-2 text-fg"}`,
										onClick: () => {
											setSize(n);
											setHugeId(null);
										},
										children: [
											w,
											"×",
											d
										]
									}, n);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 mb-2 text-sm text-muted",
								children: "Huge maps (Roblox / Earth / Minecraft scale)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-col gap-3",
								children: [
									"roblox",
									"earth",
									"minecraft"
								].map((fam) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-medium tracking-wide text-muted uppercase",
										children: fam === "roblox" ? "Roblox" : fam === "earth" ? "Earth" : "Minecraft"
									}), HUGE_SIZES.filter((h) => h.family === fam).map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											setHugeId(h.id);
											setAspect(h.aspect);
											if (h.aspect === "globe" || h.family === "earth") {
												setPreset("earth");
												if (name === "REMAP World") setName("Earth");
											}
										},
										className: `min-h-12 rounded-[var(--radius-md)] px-3 py-3 text-left ${hugeId === h.id ? "bg-accent text-accent-fg" : "bg-surface-2"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block text-sm font-medium",
													children: h.label
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `shrink-0 rounded-full px-2 py-0.5 text-xs tracking-wide uppercase ${hugeId === h.id ? "bg-accent-fg/15 text-accent-fg" : "bg-surface text-muted"}`,
													children: h.aspect === "globe" ? "2:1 globe" : "square"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: `mt-1 block font-mono text-xs ${hugeId === h.id ? "text-accent-fg/90" : "text-fg"}`,
												children: [
													fmtBlocks(h.width),
													" × ",
													fmtBlocks(h.depth)
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `mt-1 block text-xs ${hugeId === h.id ? "text-accent-fg/80" : "text-muted"}`,
												children: h.blurb
											})
										]
									}, h.id))]
								}, fam))
							}),
							isVirtualSize(width, depth) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-xs text-muted",
								children: [
									fmtBlocks(width),
									"×",
									fmtBlocks(depth),
									" is a live map like Google Maps / Ages of Conflict — the whole world stays on screen. 2:1 globe sizes wrap the real Earth (west left, north up). .mcworld export writes a playable 2,048×2,048 region around spawn (phones cannot open a 60 million block file)."
								]
							}) : large ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-xs text-muted",
								children: [
									width,
									"×",
									depth,
									" is a large map — generation is quick, export to .mcworld takes longer."
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-xs text-muted",
								children: [
									"Map is ",
									width,
									"×",
									depth,
									". Globe 2:1 is the real Earth layout (west left, north up)."
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-sm text-muted",
							children: "Mode"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-2",
							children: ["creative", "survival"].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setMode(m),
								className: `h-11 rounded-[var(--radius-md)] px-4 capitalize ${mode === m ? "bg-accent text-accent-fg" : "bg-surface-2"}`,
								children: m
							}, m))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 text-sm text-muted",
								children: "Terrain"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => pickPreset("earth"),
								className: `mb-2 flex w-full items-start gap-3 rounded-[var(--radius-md)] px-3 py-3 text-left ${preset === "earth" ? "bg-accent text-accent-fg" : "bg-surface-2"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "mt-0.5 size-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-medium",
									children: "Earth Map"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `mt-1 block text-xs ${preset === "earth" ? "text-accent-fg/80" : "text-muted"}`,
									children: "Real world coastlines (Natural Earth) and NASA elevation — Africa, Americas, Europe, Asia, Australia, ice caps, lakes. Slide 100 CE → 2026 to rewrite countries, cities, and landmarks on the same globe. Not a fake blob map."
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
								children: PRESETS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => pickPreset(p.id),
									className: `rounded-[var(--radius-md)] px-3 py-3 text-left ${preset === p.id ? "bg-accent text-accent-fg" : "bg-surface-2"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-sm font-medium",
										children: p.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `mt-1 block text-xs ${preset === p.id ? "text-accent-fg/80" : "text-muted"}`,
										children: p.blurb
									})]
								}, p.id))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "primary",
						size: "lg",
						className: "mt-5 w-full",
						onClick: () => newWorld({
							name,
							seed,
							width,
							depth,
							preset,
							gameMode: mode
						}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Create world"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-[var(--radius-xl)] bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5",
				onDragOver: (e) => {
					e.preventDefault();
				},
				onDrop: (e) => {
					e.preventDefault();
					const f = e.dataTransfer.files[0];
					if (f) onImport(f);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-2 text-sm font-medium tracking-wide text-muted uppercase",
						children: "Import .mcworld"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 text-sm text-muted",
						children: "Opens an existing Bedrock world. Settings and spawn are always editable. Terrain is loaded when the chunk database can be decoded; otherwise original chunks are preserved so nothing is corrupted."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: fileRef,
						type: "file",
						accept: ".mcworld,application/zip",
						className: "hidden",
						suppressHydrationWarning: true,
						onChange: (e) => {
							const f = e.target.files?.[0];
							if (f) onImport(f);
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "secondary",
						size: "lg",
						className: "w-full",
						onClick: () => fileRef.current?.click(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Map$1, { className: "size-4" }), "Choose .mcworld"]
					}),
					err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-danger",
						children: err
					}) : null
				]
			})
		]
	});
}
/**
* Whole-Earth era overlay: farms around settlements, roads/rail between cities.
* Virtual — not stored as Minecraft blocks. Stamped into chunks only when a region is generated.
*/
function drawEraOverlay(ctx, world, year, originPxX, originPxZ, cell, cssW, cssH, opts) {
	const infra = eraInfrastructure(year);
	const cities = [];
	for (const p of REAL_PLACES) {
		if (p.group === "landmark") continue;
		const st = placeInYear(p, year);
		if (!st.exists || st.ruin) continue;
		const { px, pz } = lonLatToScreen(world, p.lon, p.lat, originPxX, originPxZ, cell);
		if (px < -40 || pz < -40 || px > cssW + 40 || pz > cssH + 40) continue;
		cities.push({
			lon: p.lon,
			lat: p.lat,
			rank: p.group === "capital" ? 2 : 1,
			px,
			pz
		});
	}
	if (opts.farms && infra.farms && cell > 15e-5) {
		ctx.save();
		for (const c of cities) {
			const r = (c.rank === 2 ? 18 : 10) * infra.farmRadius * Math.max(3, Math.min(28, 4e3 * cell));
			const g = ctx.createRadialGradient(c.px, c.pz, 1, c.px, c.pz, r);
			g.addColorStop(0, "rgba(140, 150, 72, 0.22)");
			g.addColorStop(1, "rgba(140, 150, 72, 0)");
			ctx.fillStyle = g;
			ctx.beginPath();
			ctx.arc(c.px, c.pz, r, 0, Math.PI * 2);
			ctx.fill();
		}
		ctx.restore();
	}
	if (!opts.roads || !infra.roads || cities.length < 2) return;
	const maxDist = infra.highway ? 12 : infra.rail ? 9 : 6;
	const maxLines = infra.highway ? 280 : 160;
	let drawn = 0;
	ctx.save();
	ctx.lineCap = "round";
	for (let i = 0; i < cities.length && drawn < maxLines; i++) {
		const a = cities[i];
		let best = null;
		let second = null;
		for (let j = i + 1; j < cities.length; j++) {
			const b = cities[j];
			const d = Math.hypot(a.lon - b.lon, a.lat - b.lat);
			if (d > maxDist || d < .15) continue;
			if (!best || d < best.d) {
				second = best;
				best = {
					j,
					d
				};
			} else if (!second || d < second.d) second = {
				j,
				d
			};
		}
		const links = [best, second].filter(Boolean);
		for (const L of links) {
			const b = cities[L.j];
			const rail = infra.rail && a.rank + b.rank >= 3 && L.d > 1.5;
			ctx.strokeStyle = rail ? "rgba(90, 84, 72, 0.55)" : "rgba(120, 100, 64, 0.4)";
			ctx.lineWidth = rail ? 1.4 : infra.highway ? 1.15 : .8;
			if (rail) ctx.setLineDash([5, 4]);
			else ctx.setLineDash([]);
			ctx.beginPath();
			ctx.moveTo(a.px, a.pz);
			ctx.lineTo(b.px, b.pz);
			ctx.stroke();
			drawn += 1;
		}
	}
	ctx.setLineDash([]);
	ctx.restore();
}
function cellSize(world, zoom, cssW, cssH) {
	const fit = Math.min(cssW / Math.max(1, world.width), cssH / Math.max(1, world.depth));
	const min = Math.max(1e-8, fit * .55);
	return Math.max(min, Math.min(64, zoom));
}
function colorColumn(h, water, surface, biome, hx, hz) {
	const slope = (h - hx) * .04 + (h - hz) * .08;
	const shade = Math.max(.55, Math.min(1.25, 1 + slope));
	let r, g, b;
	if (water) {
		const depth = Math.max(0, 63 - h);
		r = 28 + depth * .4;
		g = 72 + depth * .2;
		b = 140 + Math.min(40, depth);
	} else {
		const blk = BLOCK_BY_ID[surface] ?? BLOCK_BY_ID[4];
		const bio = BIOMES[biome] ?? BIOMES[0];
		r = blk.color[0] * .72 + bio.color[0] * .28;
		g = blk.color[1] * .72 + bio.color[1] * .28;
		b = blk.color[2] * .72 + bio.color[2] * .28;
	}
	const elev = Math.max(0, Math.min(1, (h + 20) / 180));
	r *= shade * (.75 + elev * .35);
	g *= shade * (.75 + elev * .35);
	b *= shade * (.75 + elev * .35);
	return [
		Math.max(0, Math.min(255, r)),
		Math.max(0, Math.min(255, g)),
		Math.max(0, Math.min(255, b))
	];
}
var earthOv = null;
function earthOverview() {
	const raster = peekEarthRaster();
	if (!raster) return null;
	if (earthOv && earthOv.width === raster.w) return earthOv;
	const off = document.createElement("canvas");
	off.width = raster.w;
	off.height = raster.h;
	const ctx = off.getContext("2d");
	if (!ctx) return null;
	const img = ctx.createImageData(raster.w, raster.h);
	const data = img.data;
	for (let i = 0; i < raster.w * raster.h; i++) {
		const land = raster.land[i];
		const e = raster.elev[i];
		let r, g, b;
		if (land > 127) {
			if (e > 200) r = g = b = 230;
			else if (e > 170) {
				r = 140;
				g = 130;
				b = 110;
			} else if (e > 155) {
				r = 90;
				g = 120;
				b = 70;
			} else {
				r = 50 + e * .15;
				g = 90 + e * .35;
				b = 40 + e * .08;
			}
		} else {
			const depth = Math.max(0, 143 - e);
			r = 12;
			g = 36 + Math.max(0, 28 - depth * .2);
			b = 100 + Math.min(70, depth * .4);
		}
		const o = i * 4;
		data[o] = r;
		data[o + 1] = g;
		data[o + 2] = b;
		data[o + 3] = 255;
	}
	ctx.putImageData(img, 0, 0);
	earthOv = off;
	return off;
}
function pinColor(s) {
	if (s.ruin) return "#8a8474";
	switch (s.kind) {
		case "capital": return "#e6eadc";
		case "city":
		case "village": return "#d4a84a";
		case "skyscraper": return "#9aa48c";
		case "pyramid":
		case "temple": return "#c4a15a";
		case "tower": return "#c8d0c4";
		case "statue": return "#f2efe4";
		case "bridge": return "#c47a3a";
		case "wall": return "#8a8474";
		case "palace": return "#efe6c8";
		case "monument": return "#e0c060";
		case "castle": return "#a8a090";
		default: return "#c4a15a";
	}
}
function pinRank(s) {
	if (s.kind === "city" || s.kind === "village") return 0;
	if (s.kind === "capital") return 1;
	return 2;
}
function pinSize(s, cell) {
	const rank = pinRank(s);
	if (cell < .4) return rank === 0 ? 1.2 : rank === 1 ? 1.8 : 2.2;
	if (cell < 2) return rank === 0 ? 2 : rank === 1 ? 3 : 3.6;
	return rank === 0 ? 3.5 : rank === 1 ? 5 : 6;
}
function MapCanvas() {
	const canvasRef = (0, import_react.useRef)(null);
	const wrapRef = (0, import_react.useRef)(null);
	const world = useEditor((s) => s.world);
	const view = useEditor((s) => s.view);
	const tool = useEditor((s) => s.tool);
	const selection = useEditor((s) => s.selection);
	const setHover = useEditor((s) => s.setHover);
	const setView = useEditor((s) => s.setView);
	const setSelection = useEditor((s) => s.setSelection);
	const applyBrush = useEditor((s) => s.applyBrush);
	const beginStroke = useEditor((s) => s.beginStroke);
	const commitStroke = useEditor((s) => s.commitStroke);
	const placeStructure = useEditor((s) => s.placeStructure);
	const placeEntity = useEditor((s) => s.placeEntity);
	const setSpawnAt = useEditor((s) => s.setSpawnAt);
	const pasteAt = useEditor((s) => s.pasteAt);
	const step = useEditor((s) => s.step);
	const layers = useEditor((s) => s.layers);
	const selectedCountryIso = useEditor((s) => s.selectedCountryIso);
	const selectedPolityId = useEditor((s) => s.selectedPolityId);
	const pickCountryAt = useEditor((s) => s.pickCountryAt);
	const mapEpoch = useEditor((s) => s.mapEpoch);
	const epoch = useEditor((s) => (s.undoStack.length + 1) * 1e3 + s.redoStack.length + (s.world?.structures.length ?? 0) + (s.world?.entities.length ?? 0) + (s.world?.year ?? 2026) + (s.layers.terrain ? 1 : 0) + (s.layers.countries ? 2 : 0) + (s.layers.borders ? 4 : 0) + (s.layers.cities ? 8 : 0) + (s.layers.roads ? 16 : 0) + (s.layers.structures ? 32 : 0) + (s.selectedCountryIso ? s.selectedCountryIso.charCodeAt(0) : 0));
	const stroke = (0, import_react.useRef)(null);
	const panning = (0, import_react.useRef)(false);
	const last = (0, import_react.useRef)(null);
	const pointers = (0, import_react.useRef)(/* @__PURE__ */ new Map());
	const pinch = (0, import_react.useRef)(null);
	const selecting = (0, import_react.useRef)(null);
	const raster = (0, import_react.useRef)(null);
	const dirty = (0, import_react.useRef)(true);
	(0, import_react.useEffect)(() => {
		dirty.current = true;
	}, [world, epoch]);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		const wrap = wrapRef.current;
		if (!canvas || !wrap || !world) return;
		let raf = 0;
		const draw = () => {
			const dpr = Math.min(2, window.devicePixelRatio || 1);
			const cssW = wrap.clientWidth;
			const cssH = wrap.clientHeight;
			if (canvas.width !== Math.floor(cssW * dpr) || canvas.height !== Math.floor(cssH * dpr)) {
				canvas.width = Math.floor(cssW * dpr);
				canvas.height = Math.floor(cssH * dpr);
				canvas.style.width = cssW + "px";
				canvas.style.height = cssH + "px";
			}
			const ctx = canvas.getContext("2d");
			if (!ctx) return;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			ctx.fillStyle = "#0e110c";
			ctx.fillRect(0, 0, cssW, cssH);
			const cell = cellSize(world, view.zoom, cssW, cssH);
			const originPxX = cssW / 2 - view.x * cell;
			const originPxZ = cssH / 2 - view.z * cell;
			ctx.imageSmoothingEnabled = cell < 1.5;
			if (layers.terrain) {
				if (world.virtual) {
					const ov = world.terrainKind === "earth" ? earthOverview() : null;
					if (ov) ctx.drawImage(ov, 0, 0, ov.width, ov.height, originPxX, originPxZ, world.width * cell, world.depth * cell);
					else {
						const img = ctx.createImageData(cssW, cssH);
						const data = img.data;
						for (let py = 0; py < cssH; py++) {
							const lz = Math.floor((py - originPxZ) / cell);
							for (let px = 0; px < cssW; px++) {
								const lx = Math.floor((px - originPxX) / cell);
								const o = (py * cssW + px) * 4;
								if (lx < 0 || lz < 0 || lx >= world.width || lz >= world.depth) {
									data[o + 3] = 255;
									continue;
								}
								const col = readColumn(world, lx, lz);
								const hx = lx > 0 ? readColumn(world, lx - 1, lz).height : col.height;
								const hz = lz > 0 ? readColumn(world, lx, lz - 1).height : col.height;
								const [r, g, b] = colorColumn(col.height, col.water, col.surface, col.biome, hx, hz);
								data[o] = r;
								data[o + 1] = g;
								data[o + 2] = b;
								data[o + 3] = 255;
							}
						}
						const tmp = document.createElement("canvas");
						tmp.width = cssW;
						tmp.height = cssH;
						tmp.getContext("2d")?.putImageData(img, 0, 0);
						ctx.drawImage(tmp, 0, 0);
					}
				} else if (dirty.current || !raster.current || raster.current.width !== world.width) {
					const off = raster.current ?? document.createElement("canvas");
					off.width = world.width;
					off.height = world.depth;
					const octx = off.getContext("2d");
					if (!octx) return;
					const img = octx.createImageData(world.width, world.depth);
					const data = img.data;
					for (let z = 0; z < world.depth; z++) for (let x = 0; x < world.width; x++) {
						const col = readColumn(world, x, z);
						const hx = x > 0 ? readColumn(world, x - 1, z).height : col.height;
						const hz = z > 0 ? readColumn(world, x, z - 1).height : col.height;
						const [r, g, b] = colorColumn(col.height, col.water, col.surface, col.biome, hx, hz);
						const o = (z * world.width + x) * 4;
						data[o] = r;
						data[o + 1] = g;
						data[o + 2] = b;
						data[o + 3] = 255;
					}
					octx.putImageData(img, 0, 0);
					raster.current = off;
					dirty.current = false;
				}
				if (!world.virtual && raster.current) ctx.drawImage(raster.current, 0, 0, world.width, world.depth, originPxX, originPxZ, world.width * cell, world.depth * cell);
			}
			const atlas = peekCountries();
			const year = clampYear(world.year ?? 2026);
			if (atlas && world.terrainKind === "earth" && (layers.countries || layers.borders)) {
				buildPolityView(year, atlas);
				drawPolityOverlay(ctx, world, atlas, year, originPxX, originPxZ, cell, cssW, cssH, {
					fill: layers.countries,
					borders: layers.borders,
					names: layers.countries || layers.borders,
					selectedIso: selectedCountryIso,
					selectedPolity: selectedPolityId
				});
			} else if (atlas && (layers.countries || layers.borders)) drawCountryOverlay(ctx, world, atlas, originPxX, originPxZ, cell, cssW, cssH, {
				fill: layers.countries,
				borders: layers.borders,
				names: layers.countries || layers.borders,
				selectedIso: selectedCountryIso
			});
			if (world.terrainKind === "earth" && (layers.roads || layers.cities)) drawEraOverlay(ctx, world, year, originPxX, originPxZ, cell, cssW, cssH, {
				farms: layers.cities,
				roads: layers.roads
			});
			if (cell >= 8) {
				ctx.strokeStyle = "rgba(230,234,220,0.08)";
				ctx.lineWidth = 1;
				ctx.beginPath();
				for (let x = 0; x <= world.width; x += 16) {
					const px = originPxX + x * cell;
					ctx.moveTo(px, originPxZ);
					ctx.lineTo(px, originPxZ + world.depth * cell);
				}
				for (let z = 0; z <= world.depth; z += 16) {
					const pz = originPxZ + z * cell;
					ctx.moveTo(originPxX, pz);
					ctx.lineTo(originPxX + world.width * cell, pz);
				}
				ctx.stroke();
			}
			const sx = localX(world, world.settings.spawn.x);
			const sz = localZ(world, world.settings.spawn.z);
			const spx = originPxX + (sx + .5) * cell;
			const spz = originPxZ + (sz + .5) * cell;
			const radius = world.settings.spawnRadius ?? 5;
			if ((step === "spawn" || tool === "spawn") && radius > 0) {
				ctx.beginPath();
				ctx.arc(spx, spz, radius * cell, 0, Math.PI * 2);
				ctx.fillStyle = "rgba(230,234,220,0.10)";
				ctx.fill();
				ctx.strokeStyle = "rgba(230,234,220,0.55)";
				ctx.lineWidth = 1.5;
				ctx.setLineDash([4, 4]);
				ctx.stroke();
				ctx.setLineDash([]);
			}
			ctx.fillStyle = "#e6eadc";
			ctx.strokeStyle = "#0e110c";
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.moveTo(spx, spz - Math.max(10, cell));
			ctx.lineTo(spx + 6, spz);
			ctx.lineTo(spx, spz + 4);
			ctx.lineTo(spx - 6, spz);
			ctx.closePath();
			ctx.fill();
			ctx.stroke();
			let labels = 0;
			const ranked = world.structures.slice().sort((a, b) => pinRank(a) - pinRank(b));
			for (const s of ranked) {
				if (s.kind === "road" && !layers.roads) continue;
				if ((s.kind === "city" || s.kind === "capital" || s.kind === "village") && !layers.cities) continue;
				if (s.kind !== "road" && s.kind !== "city" && s.kind !== "capital" && s.kind !== "village" && !layers.structures) continue;
				const lx = localX(world, s.x);
				const lz = localZ(world, s.z);
				const px = originPxX + (lx + .5) * cell;
				const pz = originPxZ + (lz + .5) * cell;
				if (px < -8 || pz < -8 || px > cssW + 8 || pz > cssH + 8) continue;
				const sz = pinSize(s, cell);
				ctx.fillStyle = pinColor(s);
				ctx.beginPath();
				ctx.arc(px, pz, sz, 0, Math.PI * 2);
				ctx.fill();
				const landmark = pinRank(s) >= 2 || Boolean(s.ruin);
				const label = s.ruin && s.name ? `${s.name} (ruin)` : s.name;
				if (label && labels < 40 && (landmark && cell >= 3 || !landmark && cell >= 10) && label) {
					ctx.font = `${landmark ? 11 : 10}px Figtree, sans-serif`;
					ctx.textAlign = "left";
					ctx.textBaseline = "middle";
					ctx.lineWidth = 3;
					ctx.strokeStyle = "rgba(14,17,12,0.75)";
					ctx.strokeText(label, px + sz + 4, pz);
					ctx.fillStyle = "#e6eadc";
					ctx.fillText(label, px + sz + 4, pz);
					labels += 1;
				}
			}
			for (const e of world.entities) {
				const px = originPxX + (localX(world, e.x) + .5) * cell;
				const pz = originPxZ + (localZ(world, e.z) + .5) * cell;
				ctx.fillStyle = "#7dae5a";
				ctx.beginPath();
				ctx.arc(px, pz, 3, 0, Math.PI * 2);
				ctx.fill();
			}
			if (selection) {
				const x0 = Math.min(selection.x0, selection.x1);
				const z0 = Math.min(selection.z0, selection.z1);
				const x1 = Math.max(selection.x0, selection.x1) + 1;
				const z1 = Math.max(selection.z0, selection.z1) + 1;
				ctx.fillStyle = "rgba(125,174,90,0.18)";
				ctx.strokeStyle = "#7dae5a";
				ctx.lineWidth = 2;
				ctx.fillRect(originPxX + x0 * cell, originPxZ + z0 * cell, (x1 - x0) * cell, (z1 - z0) * cell);
				ctx.strokeRect(originPxX + x0 * cell, originPxZ + z0 * cell, (x1 - x0) * cell, (z1 - z0) * cell);
			}
		};
		const loop = () => {
			draw();
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		return () => cancelAnimationFrame(raf);
	}, [
		world,
		view,
		selection,
		tool,
		step,
		layers,
		selectedCountryIso,
		selectedPolityId,
		mapEpoch,
		epoch
	]);
	function locFromEvent(e) {
		const wrap = wrapRef.current;
		if (!wrap || !world) return null;
		const rect = wrap.getBoundingClientRect();
		const cssW = rect.width;
		const cssH = rect.height;
		const cell = cellSize(world, view.zoom, cssW, cssH);
		const originPxX = cssW / 2 - view.x * cell;
		const originPxZ = cssH / 2 - view.z * cell;
		const lx = Math.floor((e.clientX - rect.left - originPxX) / cell);
		const lz = Math.floor((e.clientY - rect.top - originPxZ) / cell);
		if (lx < 0 || lz < 0 || lx >= world.width || lz >= world.depth) return null;
		return {
			lx,
			lz
		};
	}
	function hoverAt(lx, lz) {
		if (!world) return;
		const col = readColumn(world, lx, lz);
		const bio = BIOMES[col.biome] ?? BIOMES[0];
		const blk = BLOCK_BY_ID[col.surface] ?? BLOCK_BY_ID[4];
		const wrap = wrapRef.current;
		let structure;
		let built;
		let approx;
		let ruin;
		const atlas = peekCountries();
		if (wrap && world.structures.length) {
			const cssW = wrap.clientWidth;
			const cssH = wrap.clientHeight;
			const cell = cellSize(world, view.zoom, cssW, cssH);
			const originPxX = cssW / 2 - view.x * cell;
			const originPxZ = cssH / 2 - view.z * cell;
			const hx = originPxX + (lx + .5) * cell;
			const hz = originPxZ + (lz + .5) * cell;
			let best = 14;
			for (const s of world.structures) {
				const px = originPxX + (localX(world, s.x) + .5) * cell;
				const pz = originPxZ + (localZ(world, s.z) + .5) * cell;
				const d = Math.hypot(px - hx, pz - hz);
				if (d < best && s.name) {
					best = d;
					structure = s.ruin ? `${s.name} (ruin)` : s.name;
					built = s.built;
					approx = s.approx;
					ruin = s.ruin;
				}
			}
		}
		const year = clampYear(world.year ?? 2026);
		let country;
		if (atlas) {
			if (world.terrainKind === "earth") {
				const { lon, lat } = lonLatFromLocal(world, lx, lz);
				const hit = polityAtLonLat(atlas, year, lon, lat);
				country = hit.polity.id === "empty" ? void 0 : hit.polity.name;
				if (hit.polity.disputed && country) country = `${country} · disputed`;
			} else country = countryAtLocal(world, atlas, lx, lz)?.name;
		}
		setHover({
			x: worldX(world, lx),
			y: col.water ? Math.max(col.height, 63) : col.height,
			z: worldZ(world, lz),
			biome: bio.label,
			block: blk.label,
			water: col.water === 1,
			structure,
			country,
			year: world.terrainKind === "earth" ? year : void 0,
			built,
			approx,
			ruin
		});
	}
	function onPointerDown(e) {
		if (!world) return;
		e.target.setPointerCapture(e.pointerId);
		pointers.current.set(e.pointerId, {
			x: e.clientX,
			y: e.clientY
		});
		if (pointers.current.size === 2) {
			const pts = [...pointers.current.values()];
			const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
			pinch.current = {
				dist,
				zoom: view.zoom
			};
			panning.current = false;
			return;
		}
		if (e.button === 1 || e.button === 2 || tool === "pan" || e.shiftKey || step === "create") {
			panning.current = true;
			last.current = {
				x: e.clientX,
				y: e.clientY
			};
			return;
		}
		const loc = locFromEvent(e);
		if (!loc) return;
		hoverAt(loc.lx, loc.lz);
		if (step === "countries") {
			pickCountryAt(loc.lx, loc.lz);
			return;
		}
		if (tool === "select" || step === "map" && e.altKey) {
			selecting.current = {
				x: loc.lx,
				z: loc.lz
			};
			setSelection({
				x0: loc.lx,
				z0: loc.lz,
				x1: loc.lx,
				z1: loc.lz
			});
			return;
		}
		if (step === "spawn" || tool === "spawn") {
			setSpawnAt(worldX(world, loc.lx), worldZ(world, loc.lz));
			return;
		}
		if (tool === "structure") {
			placeStructure(loc.lx, loc.lz);
			dirty.current = true;
			return;
		}
		if (tool === "entity") {
			placeEntity(loc.lx, loc.lz);
			dirty.current = true;
			return;
		}
		if (e.ctrlKey || e.metaKey) {
			pasteAt(loc.lx, loc.lz);
			dirty.current = true;
			return;
		}
		stroke.current = beginStroke();
		applyBrush(loc.lx, loc.lz);
		dirty.current = true;
	}
	function onPointerMove(e) {
		if (!world) return;
		if (pointers.current.has(e.pointerId)) pointers.current.set(e.pointerId, {
			x: e.clientX,
			y: e.clientY
		});
		if (pointers.current.size === 2 && pinch.current) {
			const pts = [...pointers.current.values()];
			const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
			const wrap = wrapRef.current;
			const cssW = wrap?.clientWidth ?? 800;
			const cssH = wrap?.clientHeight ?? 500;
			const fit = world ? Math.min(cssW / world.width, cssH / world.depth) : .25;
			const z = Math.max(fit * .5, Math.min(64, pinch.current.zoom * (dist / pinch.current.dist)));
			setView({ zoom: z });
			return;
		}
		const loc = locFromEvent(e);
		if (loc) hoverAt(loc.lx, loc.lz);
		if (panning.current && last.current) {
			const wrapEl = wrapRef.current;
			const cell = cellSize(world, view.zoom, wrapEl?.clientWidth ?? 800, wrapEl?.clientHeight ?? 500);
			setView({
				x: view.x - (e.clientX - last.current.x) / cell,
				z: view.z - (e.clientY - last.current.y) / cell
			});
			last.current = {
				x: e.clientX,
				y: e.clientY
			};
			return;
		}
		if (selecting.current && loc) {
			setSelection({
				x0: selecting.current.x,
				z0: selecting.current.z,
				x1: loc.lx,
				z1: loc.lz
			});
			return;
		}
		if (stroke.current && loc && e.buttons) {
			applyBrush(loc.lx, loc.lz);
			dirty.current = true;
		}
	}
	function onPointerUp(e) {
		pointers.current.delete(e.pointerId);
		pinch.current = null;
		panning.current = false;
		last.current = null;
		selecting.current = null;
		if (stroke.current) {
			commitStroke(stroke.current);
			stroke.current = null;
		}
	}
	function onWheel(e) {
		e.preventDefault();
		const wrap = wrapRef.current;
		const cssW = wrap?.clientWidth ?? 800;
		const cssH = wrap?.clientHeight ?? 500;
		const fit = world ? Math.min(cssW / world.width, cssH / world.depth) : .25;
		const z = view.zoom * (e.deltaY > 0 ? .9 : 1.1);
		setView({ zoom: Math.max(fit * .5, Math.min(64, z)) });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: wrapRef,
		className: "relative h-full min-h-0 w-full overflow-hidden bg-bg touch-none",
		onContextMenu: (e) => e.preventDefault(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvasRef,
			className: "block h-full w-full cursor-crosshair",
			onPointerDown,
			onPointerMove,
			onPointerUp,
			onPointerCancel: onPointerUp,
			onWheel
		})
	});
}
function TimelineBar() {
	const world = useEditor((s) => s.world);
	const setDate = useEditor((s) => s.setDate);
	const stepYear = useEditor((s) => s.stepYear);
	const setStep = useEditor((s) => s.setStep);
	const yearRaw = world?.year ?? 2026;
	const monthRaw = world?.month ?? 1;
	const dayRaw = world?.day ?? 1;
	const year = clampDateYear(yearRaw);
	const month = clampMonth(monthRaw);
	const day = clampDay(year, month, dayRaw);
	const [draftYear, setDraftYear] = (0, import_react.useState)(null);
	const shownYear = draftYear ?? year;
	const info = yearInfo(shownYear, month, day);
	(0, import_react.useEffect)(() => {
		setDraftYear(null);
	}, [year]);
	if (!world || world.terrainKind !== "earth") return null;
	const dim = daysInMonth(shownYear, month);
	function commitYear(n) {
		setDraftYear(null);
		setDate({ year: n });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-b border-border bg-surface px-3 py-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "flex size-11 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-surface-2 hover:bg-surface-3",
						onClick: () => stepYear(-1),
						disabled: year <= 100,
						"aria-label": "Previous year",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setStep("timeline"),
						className: "flex min-w-0 flex-1 items-center gap-2 rounded-[var(--radius-md)] px-2 py-1 text-left hover:bg-surface-2",
						"aria-label": `${info.title}${info.approximation ? ", Historical Approximation" : ""}, ${info.era}, whole Earth`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block truncate font-display text-sm font-medium leading-tight",
								children: [info.title, info.approximation ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [" ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-sans text-xs font-medium tracking-wide text-warn uppercase",
									children: "Historical Approximation"
								})] }) : null]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block truncate text-xs text-muted",
								children: [
									info.era,
									" · whole Earth · borders ",
									info.snapshot
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "flex size-11 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-surface-2 hover:bg-surface-3",
						onClick: () => stepYear(1),
						disabled: year >= MAX_YEAR,
						"aria-label": "Next year",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex min-h-11 items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Year"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							min: 100,
							max: MAX_YEAR,
							value: shownYear,
							onChange: (e) => setDraftYear(clampDateYear(Number(e.target.value))),
							onBlur: () => {
								if (draftYear != null) commitYear(draftYear);
							},
							onKeyDown: (e) => {
								if (e.key === "Enter" && draftYear != null) commitYear(draftYear);
							},
							className: "h-11 w-[5.5rem] rounded-[var(--radius-md)] bg-surface-2 px-2 font-mono text-sm outline-none focus:ring-2 focus:ring-accent/40"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex min-h-11 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Month"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: month,
							onChange: (e) => setDate({ month: Number(e.target.value) }),
							className: "h-11 max-w-[9.5rem] rounded-[var(--radius-md)] bg-surface-2 px-2 text-sm outline-none focus:ring-2 focus:ring-accent/40",
							children: MONTHS.map((name, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: i + 1,
								children: name
							}, name))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex min-h-11 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Day"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: Math.min(day, dim),
							onChange: (e) => setDate({ day: Number(e.target.value) }),
							className: "h-11 w-[4.5rem] rounded-[var(--radius-md)] bg-surface-2 px-2 font-mono text-sm outline-none focus:ring-2 focus:ring-accent/40",
							children: Array.from({ length: dim }, (_, i) => i + 1).map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: d,
								children: d
							}, d))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-2 flex flex-col gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "sr-only",
						children: [
							"Timeline year ",
							100,
							" to ",
							MAX_YEAR
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "range",
						min: 100,
						max: MAX_YEAR,
						step: 1,
						value: shownYear,
						onChange: (e) => setDraftYear(Number(e.target.value)),
						onPointerUp: () => {
							if (draftYear != null) commitYear(draftYear);
						},
						onTouchEnd: () => {
							if (draftYear != null) commitYear(draftYear);
						},
						className: "h-11 w-full accent-[var(--color-accent)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex justify-between px-0.5 font-mono text-xs text-muted",
						children: SLIDER_TICKS.map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "min-h-11 px-1 hover:text-fg",
							onClick: () => commitYear(y),
							children: y === 100 ? "100 CE" : y
						}, y))
					})
				]
			})
		]
	});
}
function YearChips({ compact }) {
	const world = useEditor((s) => s.world);
	const setDate = useEditor((s) => s.setDate);
	const year = clampDateYear(world?.year ?? 2026);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-wrap gap-1.5", compact && "max-h-40 overflow-y-auto"),
		children: SNAPSHOT_YEARS.map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => setDate({ year: y }),
			className: cn("h-11 min-w-11 rounded-full px-3 font-mono text-sm", y === year ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted"),
			children: y
		}, y))
	});
}
function DateEventList() {
	const world = useEditor((s) => s.world);
	const setDate = useEditor((s) => s.setDate);
	const year = clampDateYear(world?.year ?? 2026);
	const month = clampMonth(world?.month ?? 1);
	const day = clampDay(year, month, world?.day ?? 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "max-h-56 overflow-y-auto rounded-[var(--radius-md)] bg-surface-2",
		children: HISTORICAL_DATES.map((d) => {
			const on = d.year === year && d.month === month && d.day === day;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "border-b border-border last:border-b-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setDate({
						year: d.year,
						month: d.month,
						day: d.day
					}),
					className: cn("flex min-h-11 w-full items-center justify-between gap-2 px-3 py-2 text-left", on && "bg-accent/20"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate text-sm",
							children: d.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block truncate text-xs text-muted",
							children: [
								fmtDate(d.year, d.month, d.day),
								" · ",
								d.era
							]
						})]
					})
				})
			}, `${d.year}-${d.month}-${d.day}-${d.title}`);
		})
	});
}
var MAP_TOOLS = [
	{
		id: "pan",
		label: "Pan",
		icon: Eye
	},
	{
		id: "raise",
		label: "Raise",
		icon: Mountain
	},
	{
		id: "lower",
		label: "Lower",
		icon: Mountain
	},
	{
		id: "smooth",
		label: "Smooth",
		icon: Layers
	},
	{
		id: "flatten",
		label: "Flatten",
		icon: Square
	},
	{
		id: "paint-block",
		label: "Block",
		icon: PaintBucket
	},
	{
		id: "paint-biome",
		label: "Biome",
		icon: Trees
	},
	{
		id: "water",
		label: "Water",
		icon: Layers
	},
	{
		id: "eyedropper",
		label: "Pick",
		icon: Eye
	},
	{
		id: "select",
		label: "Select",
		icon: Square
	}
];
var TERRAIN_PRESETS = [
	{
		id: "continents",
		label: "Continents"
	},
	{
		id: "islands",
		label: "Islands"
	},
	{
		id: "archipelago",
		label: "Archipelago"
	},
	{
		id: "oceans",
		label: "Oceans"
	},
	{
		id: "mountains",
		label: "Mountains"
	},
	{
		id: "inland",
		label: "Inland"
	},
	{
		id: "mixed",
		label: "Mixed"
	},
	{
		id: "flat",
		label: "Flat"
	},
	{
		id: "earth",
		label: "Earth"
	}
];
function EditorApp() {
	const world = useEditor((s) => s.world);
	const step = useEditor((s) => s.step);
	useEditor((s) => s.setStep);
	const toast = useEditor((s) => s.toast);
	const busy = useEditor((s) => s.busy);
	const persist = useEditor((s) => s.persist);
	const setToast = useEditor((s) => s.setToast);
	(0, import_react.useEffect)(() => {
		useEditor.setState({ lastMeta: lastMeta() });
	}, []);
	(0, import_react.useEffect)(() => {
		if (!toast) return;
		const t = setTimeout(() => setToast(null), 2800);
		return () => clearTimeout(t);
	}, [toast, setToast]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			const st = useEditor.getState();
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "z") {
				e.preventDefault();
				if (e.shiftKey) st.redo();
				else st.undo();
			}
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "y") {
				e.preventDefault();
				st.redo();
			}
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "c") st.copySel();
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "s") {
				e.preventDefault();
				st.persist();
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	if (!world || step === "create") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateScreen, {}), busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BusyBanner, { text: busy }) : null]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-dvh flex-col overflow-hidden bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkflowBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-0 flex-1 flex-col md:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "order-2 h-[36vh] min-h-0 shrink-0 overflow-y-auto border-t border-border md:order-1 md:h-auto md:w-80 md:border-t-0 md:border-r lg:w-96",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidePanel, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "relative order-1 h-[46vh] min-h-[240px] flex-1 md:h-auto md:min-h-0 md:order-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapCanvas, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayerDock, {})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBar, {}),
			toast ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none fixed bottom-16 left-1/2 z-20 -translate-x-1/2 rounded-full bg-surface-3 px-4 py-2 text-sm shadow-[var(--shadow-border)]",
				children: toast
			}) : null,
			busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BusyBanner, { text: busy }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "sr-only",
				onClick: () => void persist(),
				"aria-hidden": true
			})
		]
	});
}
function BusyBanner({ text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 top-0 z-30 flex justify-center pt-[env(safe-area-inset-top)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-fg",
			children: text
		})
	});
}
function TopBar() {
	const world = useEditor((s) => s.world);
	const setStep = useEditor((s) => s.setStep);
	const undo = useEditor((s) => s.undo);
	const redo = useEditor((s) => s.redo);
	const persist = useEditor((s) => s.persist);
	const runValidate = useEditor((s) => s.runValidate);
	const canUndo = useEditor((s) => s.undoStack.length > 0);
	const canRedo = useEditor((s) => s.redoStack.length > 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex items-center gap-2 border-b border-border px-3 py-2 pt-[max(0.5rem,env(safe-area-inset-top))]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "flex size-11 items-center justify-center rounded-[var(--radius-md)] hover:bg-surface-2",
				onClick: () => setStep("create"),
				"aria-label": "Back to create",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate font-display text-base font-medium tracking-tight",
					children: world.settings.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "truncate font-mono text-xs text-muted",
					children: [
						world.sizeLabel ? `${world.sizeLabel} · ` : "",
						fmtBlocks(world.width),
						"×",
						fmtBlocks(world.depth),
						world.virtual ? " live map" : "",
						world.terrainKind === "earth" ? ` · ${fmtDateShort(world.year ?? 2026, world.month ?? 1, world.day ?? 1)}` : "",
						" · seed ",
						world.settings.seed.toString()
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "icon",
				variant: "ghost",
				disabled: !canUndo,
				onClick: undo,
				"aria-label": "Undo",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Undo2, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "icon",
				variant: "ghost",
				disabled: !canRedo,
				onClick: redo,
				"aria-label": "Redo",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Redo2, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "icon",
				variant: "ghost",
				onClick: () => void persist(),
				"aria-label": "Save",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "md",
				variant: "primary",
				className: "hidden sm:inline-flex",
				onClick: () => {
					runValidate();
				},
				children: "Validate"
			})
		]
	});
}
function WorkflowBar() {
	const step = useEditor((s) => s.step);
	const setStep = useEditor((s) => s.setStep);
	const idx = Math.max(0, WORKFLOW.findIndex((w) => w.id === step));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		className: "flex items-center gap-1 overflow-x-auto border-b border-border px-2 py-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "flex size-11 shrink-0 items-center justify-center rounded-[var(--radius-md)] hover:bg-surface-2",
				onClick: () => setStep(WORKFLOW[Math.max(1, idx - 1)].id),
				"aria-label": "Previous step",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex min-w-0 flex-1 gap-1",
				children: WORKFLOW.filter((w) => w.id !== "create").map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setStep(w.id),
					className: cn("h-11 shrink-0 rounded-full px-3 text-sm", step === w.id ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted"),
					children: w.label
				}, w.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "flex size-11 shrink-0 items-center justify-center rounded-[var(--radius-md)] hover:bg-surface-2",
				onClick: () => setStep(WORKFLOW[Math.min(WORKFLOW.length - 1, idx + 1)].id),
				"aria-label": "Next step",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
			})
		]
	});
}
function SidePanel() {
	const step = useEditor((s) => s.step);
	if (step === "spawn") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpawnPanel, {});
	if (step === "countries") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountriesPanel, {});
	if (step === "timeline") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelinePanel, {});
	if (step === "terrain") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TerrainPanel, {});
	if (step === "structures") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StructurePanel, {});
	if (step === "settings") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsPanel, {});
	if (step === "validate" || step === "export") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValidatePanel, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPanel, {});
}
function MapPanel() {
	const tool = useEditor((s) => s.tool);
	const setTool = useEditor((s) => s.setTool);
	const brush = useEditor((s) => s.brushSize);
	const setBrush = useEditor((s) => s.setBrush);
	const block = useEditor((s) => s.selectedBlock);
	const setBlock = useEditor((s) => s.setBlock);
	const biome = useEditor((s) => s.selectedBiome);
	const setBiome = useEditor((s) => s.setBiome);
	const fill = useEditor((s) => s.fillSelection);
	const copySel = useEditor((s) => s.copySel);
	const replaceBlock = useEditor((s) => s.replaceBlock);
	const [from, setFrom] = (0, import_react.useState)(4);
	const [to, setTo] = (0, import_react.useState)(3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Tools",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-5 gap-1.5",
					children: MAP_TOOLS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setTool(t.id),
						className: cn("flex h-11 flex-col items-center justify-center rounded-[var(--radius-sm)] text-[0.65rem]", tool === t.id ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "size-4" }), t.label]
					}, t.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Brush",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: 1,
					max: 24,
					value: brush,
					onChange: (e) => setBrush(Number(e.target.value)),
					className: "h-11 w-full accent-[var(--color-accent)]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-xs text-muted",
					children: [brush, " blocks"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Selection",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: fill,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaintBucket, { className: "size-4" }), " Fill"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: copySel,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), " Copy"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: from,
							onChange: (e) => setFrom(Number(e.target.value)),
							className: "h-11 flex-1 rounded-[var(--radius-md)] bg-surface-2 px-2 text-sm",
							children: BLOCKS.filter((b) => b.id > 0).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: b.id,
								children: b.label
							}, b.id))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: to,
							onChange: (e) => setTo(Number(e.target.value)),
							className: "h-11 flex-1 rounded-[var(--radius-md)] bg-surface-2 px-2 text-sm",
							children: BLOCKS.filter((b) => b.id > 0).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: b.id,
								children: b.label
							}, b.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "mt-2 w-full",
						onClick: () => replaceBlock(from, to),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eraser, { className: "size-4" }), " Replace block"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid max-h-40 grid-cols-2 gap-1 overflow-y-auto",
					children: BLOCKS.filter((b) => b.id > 0 && b.category !== "special").map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							setBlock(b.id);
							setTool("paint-block");
						},
						className: cn("flex h-10 items-center gap-2 rounded-[var(--radius-sm)] px-2 text-left text-sm", block === b.id ? "bg-accent text-accent-fg" : "bg-surface-2"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "size-4 rounded-sm",
							style: { background: `rgb(${b.color.join(",")})` }
						}), b.label]
					}, b.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Biome",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid max-h-40 grid-cols-2 gap-1 overflow-y-auto",
					children: BIOMES.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							setBiome(b.id);
							setTool("paint-biome");
						},
						className: cn("flex h-10 items-center gap-2 rounded-[var(--radius-sm)] px-2 text-left text-sm", biome === b.id ? "bg-accent text-accent-fg" : "bg-surface-2"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "size-4 rounded-sm",
							style: { background: `rgb(${b.color.join(",")})` }
						}), b.label]
					}, b.id))
				})
			})
		]
	});
}
function SpawnPanel() {
	const world = useEditor((s) => s.world);
	const setSpawnCoords = useEditor((s) => s.setSpawnCoords);
	const snapSpawnY = useEditor((s) => s.snapSpawnY);
	const setSpawnRadius = useEditor((s) => s.setSpawnRadius);
	const spawnInRegion = useEditor((s) => s.spawnInRegion);
	const spawnRandomLand = useEditor((s) => s.spawnRandomLand);
	const spawnHighest = useEditor((s) => s.spawnHighest);
	const spawnCenter = useEditor((s) => s.spawnCenter);
	const centerOnSpawn = useEditor((s) => s.centerOnSpawn);
	const s = world.settings.spawn;
	const radius = world.settings.spawnRadius ?? 5;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Spawn",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-2",
					children: [
						"x",
						"y",
						"z"
					].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex flex-col gap-1 text-xs text-muted",
						children: [k.toUpperCase(), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							value: s[k],
							onChange: (e) => setSpawnCoords(k === "x" ? Number(e.target.value) : s.x, k === "y" ? Number(e.target.value) : s.y, k === "z" ? Number(e.target.value) : s.z),
							className: "h-11 rounded-[var(--radius-md)] bg-surface-2 px-2 font-mono text-sm text-fg"
						})]
					}, k))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-2 w-full",
					onClick: snapSpawnY,
					children: "Snap Y to terrain"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Radius",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: [
						2,
						5,
						12,
						32,
						64
					].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setSpawnRadius(n),
						className: cn("h-11 min-w-11 rounded-full px-3 text-sm", radius === n ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted"),
						children: n
					}, n))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Jump",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: centerOnSpawn,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crosshair, { className: "size-4" }), " Jump to spawn"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: spawnRandomLand,
							children: "Random land"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: spawnHighest,
							children: "Highest peak"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: spawnCenter,
							children: "Center land"
						})
					]
				})
			}),
			world.terrainKind === "earth" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Continents",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: EARTH_REGIONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => spawnInRegion(r.id),
						className: "h-11 rounded-full bg-surface-2 px-3 text-sm",
						children: r.label
					}, r.id))
				})
			}) : null
		]
	});
}
function TerrainPanel() {
	const generate = useEditor((s) => s.generate);
	const paintBiomeAll = useEditor((s) => s.paintBiomeAll);
	const biome = useEditor((s) => s.selectedBiome);
	const world = useEditor((s) => s.world);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			title: "Generate terrain",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs text-muted",
				children: world.terrainKind === "earth" ? "Earth coastlines stay. These generators paint over a selected region of a non-Earth world, or replace the live map if you confirm." : "Rebuild the map. Terrain stays geographically consistent on Earth worlds — use Earth Map instead of a blob generator."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2",
				children: TERRAIN_PRESETS.filter((p) => world.terrainKind === "earth" ? p.id === "earth" : p.id !== "earth").map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => generate(p.id, true),
					children: p.label
				}, p.id))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Paint biome everywhere",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				className: "w-full",
				onClick: () => paintBiomeAll(biome),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trees, { className: "size-4" }),
					" Fill ",
					BIOMES[biome]?.label ?? "biome"
				]
			})
		})]
	});
}
function StructurePanel() {
	const kind = useEditor((s) => s.selectedStructure);
	const rot = useEditor((s) => s.structureRot);
	const tool = useEditor((s) => s.tool);
	const entity = useEditor((s) => s.selectedEntity);
	const world = useEditor((s) => s.world);
	const structureCount = useEditor((s) => s.world?.structures.length ?? 0);
	const placeAllReal = useEditor((s) => s.placeAllReal);
	const placeOneReal = useEditor((s) => s.placeOneReal);
	const jumpToPlace = useEditor((s) => s.jumpToPlace);
	const setTool = useEditor((s) => s.setTool);
	const setState = useEditor.setState;
	const [query, setQuery] = (0, import_react.useState)("");
	const [group, setGroup] = (0, import_react.useState)("all");
	(0, import_react.useEffect)(() => {
		useEditor.getState().setTool("structure");
	}, []);
	const shown = (0, import_react.useMemo)(() => {
		const y = world.year ?? 2026;
		return searchRealPlaces(query, group).filter((p) => world.terrainKind === "earth" ? placeInYear(p, y).exists : true);
	}, [
		query,
		group,
		world.year,
		world.terrainKind
	]).slice(0, 80);
	const realCount = world.structures.filter((s) => s.realId).length;
	const placedIds = (0, import_react.useMemo)(() => {
		return new Set(world.structures.map((s) => s.realId).filter(Boolean));
	}, [world.structures, structureCount]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Real places",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-2 text-xs text-muted",
						children: [
							LANDMARK_COUNT,
							" landmarks · ",
							CITY_COUNT,
							" cities at published lat/lon. ",
							realCount,
							" on this world",
							world.terrainKind === "earth" ? ` · showing places that existed in ${fmtDateShort(world.year ?? 2026, world.month ?? 1, world.day ?? 1)}` : "",
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-3 left-3 size-4 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Search Eiffel, Tokyo, Giza…",
							className: "h-11 w-full rounded-[var(--radius-md)] bg-surface-2 pr-3 pl-10 text-sm outline-none focus:ring-2 focus:ring-accent/40"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-2 flex flex-wrap gap-1.5",
						children: [
							"all",
							"landmark",
							"capital",
							"city"
						].map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setGroup(g),
							className: cn("h-11 rounded-full px-3 text-xs capitalize", group === g ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted"),
							children: g === "all" ? "All" : g === "landmark" ? "Landmarks" : g === "capital" ? "Capitals" : "Cities"
						}, g))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "primary",
						className: "w-full",
						onClick: () => placeAllReal(group === "all" ? void 0 : [group]),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landmark, { className: "size-4" }),
							" Place ",
							group === "all" ? "all real places" : `${group}s`
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 max-h-56 overflow-y-auto rounded-[var(--radius-md)] bg-surface-2",
						children: shown.map((p) => {
							const id = realPlaceId(p);
							const on = placedIds.has(id);
							const life = world.terrainKind === "earth" ? placeInYear(p, world.year ?? 2026) : null;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-1 border-b border-border last:border-b-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => jumpToPlace(id),
									className: "min-w-0 flex-1 px-3 py-2.5 text-left",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate text-sm",
										children: life?.name ?? p.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block truncate text-xs text-muted",
										children: [
											p.country,
											" · ",
											life?.kind ?? p.kind,
											life?.built != null ? ` · ${life.approx ? "approx " : ""}${fmtYear(life.built)}` : "",
											life?.ruin ? " · ruin" : "",
											on ? " · on map" : ""
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => on ? jumpToPlace(id) : placeOneReal(id),
									className: "mr-1 h-11 shrink-0 rounded-[var(--radius-sm)] px-2 text-xs text-muted hover:bg-surface-3 hover:text-fg",
									children: on ? "Go" : "Place"
								})]
							}, id);
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Stamp",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-1.5",
					children: [
						"house",
						"village",
						"road",
						"castle",
						"temple",
						"pyramid",
						"tower",
						"statue",
						"palace",
						"monument",
						"bridge",
						"skyscraper",
						"wall",
						"city",
						"capital"
					].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setState({ selectedStructure: k });
							setTool("structure");
						},
						className: cn("h-11 rounded-[var(--radius-sm)] text-xs capitalize", tool === "structure" && kind === k ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted"),
						children: k
					}, k))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "mt-2 w-full",
					onClick: () => setState({ structureRot: (rot + 90) % 360 }),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "size-4" }),
						" Rotate ",
						rot,
						"°"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Entities",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-1.5",
					children: ENTITY_TYPES.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setState({ selectedEntity: e.id });
							setTool("entity");
						},
						className: cn("h-11 rounded-[var(--radius-sm)] text-xs", tool === "entity" && entity === e.id ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted"),
						children: e.label
					}, e.id))
				})
			})
		]
	});
}
function SettingsPanel() {
	const world = useEditor((s) => s.world);
	const update = useEditor((s) => s.updateSettings);
	const st = world.settings;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Mode",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: [
						"survival",
						"creative",
						"adventure",
						"spectator"
					].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => update({ gameMode: m }),
						className: cn("h-11 rounded-full px-3 text-sm capitalize", st.gameMode === m ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted"),
						children: m
					}, m))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Difficulty",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: [
						"peaceful",
						"easy",
						"normal",
						"hard"
					].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => update({ difficulty: d }),
						className: cn("h-11 rounded-full px-3 text-sm capitalize", st.difficulty === d ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted"),
						children: d
					}, d))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Weather & time",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: [
						"clear",
						"rain",
						"thunder"
					].map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => update({ weather: w }),
						className: cn("h-11 rounded-full px-3 text-sm capitalize", st.weather === w ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted"),
						children: w
					}, w))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-2 flex flex-col gap-1 text-xs text-muted",
					children: ["Time", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "range",
						min: 0,
						max: 24e3,
						value: st.time,
						onChange: (e) => update({ time: Number(e.target.value) }),
						className: "h-11 accent-[var(--color-accent)]"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Rules",
				children: [
					["daylightCycle", "Daylight cycle"],
					["weatherCycle", "Weather cycle"],
					["mobSpawning", "Mob spawning"],
					["fireSpread", "Fire spread"],
					["tnt", "TNT"],
					["keepInventory", "Keep inventory"],
					["pvp", "PvP"],
					["mobGriefing", "Mob griefing"],
					["commands", "Commands"],
					["cheats", "Cheats"],
					["hardcore", "Hardcore"],
					["showCoordinates", "Show coordinates"]
				].map(([k, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex min-h-11 items-center justify-between gap-3 border-b border-border px-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: Boolean(st[k]),
						onChange: (e) => update({ [k]: e.target.checked }),
						className: "size-5 accent-[var(--color-accent)]"
					})]
				}, k))
			})
		]
	});
}
function ValidatePanel() {
	const world = useEditor((s) => s.world);
	const validation = useEditor((s) => s.validation);
	const runValidate = useEditor((s) => s.runValidate);
	const setBusy = useEditor((s) => s.setBusy);
	const setToast = useEditor((s) => s.setToast);
	const [extra, setExtra] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		if (!validation) runValidate();
	}, [validation, runValidate]);
	async function doExport() {
		if (!runValidate()?.canExport) {
			setToast("Fix failed checks before export");
			return;
		}
		setBusy("Building Bedrock world…");
		try {
			const out = await exportMcworld(world, (p) => setBusy(`${p.stage} ${Math.round(p.ratio * 100)}%`));
			setBusy("Validating archive…");
			const packed = await validateMcworldBlob(out.blob);
			if (!packed.ok) {
				setExtra(packed.checks.filter((c) => c.level === "fail").map((c) => c.detail));
				setToast("Export failed validation — file was not downloaded");
				return;
			}
			const name = `${world.settings.name.replace(/[^\w\- ]+/g, "").trim() || "remap-world"}.mcworld`;
			downloadBlob(out.blob, name);
			setToast(`Exported ${name} (${Math.round(out.bytes / 1024)} KB)`);
			setExtra(out.warnings.concat(packed.checks.filter((c) => c.level === "warn").map((c) => c.detail)));
		} catch (e) {
			setToast(e instanceof Error ? e.message : String(e));
		} finally {
			setBusy(null);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Checks",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-2",
					children: (validation?.checks ?? []).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-[var(--radius-md)] bg-surface-2 px-3 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2 text-sm font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-2 rounded-full", c.level === "pass" && "bg-accent", c.level === "warn" && "bg-warn", c.level === "fail" && "bg-danger") }), c.label]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted",
							children: c.detail
						})]
					}, c.id))
				})
			}),
			extra.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Export notes",
				children: extra.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: t
				}, i))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "primary",
				size: "lg",
				className: "w-full",
				onClick: () => void doExport(),
				disabled: validation?.canExport === false,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), " Export .mcworld"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: "The file is a ZIP with a real level.dat and LevelDB. Open it on Bedrock mobile (tap the file) or copy it into games/com.mojang/minecraftWorlds."
			})
		]
	});
}
function StatusBar() {
	const hover = useEditor((s) => s.hover);
	const world = useEditor((s) => s.world);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "flex items-center gap-3 border-t border-border px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] font-mono text-xs text-muted",
		children: [hover ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "tabular-nums text-fg",
				children: [
					hover.x,
					" ",
					hover.y,
					" ",
					hover.z
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: hover.block }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: hover.biome }),
			hover.water ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "water" }) : null,
			hover.structure ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "truncate text-fg",
				children: hover.structure
			}) : null,
			hover.built != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: hover.approx ? "text-warn" : "text-fg",
				children: [
					hover.ruin ? "ruin · " : "",
					hover.approx ? "approx " : "built ",
					fmtYear(hover.built)
				]
			}) : hover.approx ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-warn",
				children: "Historical Approximation"
			}) : null,
			hover.country ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "truncate text-fg",
				children: hover.country
			}) : null,
			hover.year ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-fg",
				children: hover.year
			}) : null
		] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tap the map · pinch zoom · two-finger pan" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "ml-auto hidden sm:inline",
			children: world ? `${world.structures.length} structures${world.terrainKind === "earth" ? ` · ${fmtDateShort(world.year ?? 2026, world.month ?? 1, world.day ?? 1)}` : ""}` : ""
		})]
	});
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "mb-2 text-xs font-medium tracking-wide text-muted uppercase",
		children: title
	}), children] });
}
var LAYER_CHIPS = [
	{
		id: "terrain",
		label: "Terrain",
		icon: Mountain
	},
	{
		id: "countries",
		label: "Countries",
		icon: Earth
	},
	{
		id: "borders",
		label: "Borders",
		icon: Flag
	},
	{
		id: "cities",
		label: "Cities",
		icon: Building2
	},
	{
		id: "roads",
		label: "Roads",
		icon: Route
	},
	{
		id: "structures",
		label: "Structures",
		icon: Landmark
	}
];
function LayerDock() {
	const layers = useEditor((s) => s.layers);
	const setLayer = useEditor((s) => s.setLayer);
	if (!useEditor((s) => s.world)) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute top-2 right-2 left-2 z-10 flex flex-wrap justify-end gap-1 md:left-auto",
		children: LAYER_CHIPS.map((l) => {
			const on = layers[l.id];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setLayer(l.id, !on),
				className: cn("pointer-events-auto flex h-11 items-center gap-1.5 rounded-full px-3 text-xs shadow-[var(--shadow-border)]", on ? "bg-accent text-accent-fg" : "bg-surface/90 text-muted backdrop-blur-sm"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(l.icon, { className: "size-4" }), l.label]
			}, l.id);
		})
	});
}
function TimelinePanel() {
	const world = useEditor((s) => s.world);
	const setDate = useEditor((s) => s.setDate);
	const keep = world.keepManualAcrossYears !== false;
	const setKeepManual = useEditor((s) => s.setKeepManual);
	const year = clampDateYear(world.year ?? 2026);
	const month = clampMonth(world.month ?? 1);
	const day = clampDay(year, month, world.day ?? 1);
	const info = yearInfo(year, month, day);
	const counts = (0, import_react.useMemo)(() => countInYear(year), [year]);
	const atlas = peekCountries();
	const [query, setQuery] = (0, import_react.useState)("");
	const polities = (0, import_react.useMemo)(() => {
		if (!atlas) return [];
		return query.trim() ? searchPolities(atlas, year, query) : uniquePolities(year, atlas);
	}, [
		atlas,
		year,
		query
	]);
	const selectPolity = useEditor((s) => s.selectPolity);
	const spawnAtCapital = useEditor((s) => s.spawnAtCapital);
	const selectedPolityId = useEditor((s) => s.selectedPolityId);
	const generateCountryRegion = useEditor((s) => s.generateCountryRegion);
	if (world.terrainKind !== "earth") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-col gap-4 p-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Global timeline",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "The timeline rewinds the whole Earth map — countries, cities, landmarks, and era roads — without making a new world. Create an Earth Map world first."
			})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Date",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 font-display text-2xl leading-tight",
						children: info.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-1 text-sm text-muted",
						children: info.era
					}),
					info.approximation ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-3 rounded-[var(--radius-md)] bg-surface-2 px-3 py-2 text-xs text-warn",
						children: [
							"Historical Approximation. You can pick any year from 100 to 2026, plus month and day. Political borders use the ",
							info.snapshot,
							" snapshot on modern coastlines. Landmark dates are published construction years."
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs text-muted",
						children: "Modern Natural Earth borders and published coordinates."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-xs font-medium tracking-wide text-muted uppercase",
						children: "Snapshot years"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YearChips, { compact: true }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: info.blurb
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Historical dates",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-xs text-muted",
					children: "Published day/month/year events for the whole Earth. Jumping sets the calendar; cities and landmarks follow the year."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateEventList, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "This date on Earth",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "grid grid-cols-3 gap-2 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-[var(--radius-md)] bg-surface-2 px-2 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-lg text-fg",
								children: counts.cities
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: "cities"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-[var(--radius-md)] bg-surface-2 px-2 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-lg text-fg",
								children: counts.landmarks
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: "landmarks"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-[var(--radius-md)] bg-surface-2 px-2 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-lg text-fg",
								children: counts.ruins
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: "ruins"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-xs text-muted",
					children: [polities.length, " polities on the whole globe. Terrain stays the same. Changing year restamps the virtual Earth — it does not build a second planet in memory. Detailed Minecraft chunks generate only around spawn / the region you export."]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Civilizations this year",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-3 left-3 size-4 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Rome, Qing, USSR, Ottoman…",
							className: "h-11 w-full rounded-[var(--radius-md)] bg-surface-2 pr-3 pl-10 text-sm outline-none focus:ring-2 focus:ring-accent/40"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "max-h-48 overflow-y-auto rounded-[var(--radius-md)] bg-surface-2",
						children: polities.slice(0, 80).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-b border-border last:border-b-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => selectPolity(p.id),
								className: cn("flex min-h-11 w-full items-center justify-between gap-2 px-3 py-2 text-left", selectedPolityId === p.id && "bg-accent/20"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate text-sm",
										children: p.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block truncate text-xs text-muted",
										children: [p.capital ? `capital ${p.capital.name}` : p.short, p.disputed ? " · disputed" : ""]
									})]
								})
							})
						}, p.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 grid grid-cols-1 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: spawnAtCapital,
							disabled: !selectedPolityId,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }), " Set spawn at capital"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "primary",
							onClick: generateCountryRegion,
							disabled: !selectedPolityId,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-4" }),
								" Generate region for ",
								fmtDate(year, month, day)
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Manual edits",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex min-h-11 items-center gap-3 rounded-[var(--radius-md)] bg-surface-2 px-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: keep,
						onChange: (e) => setKeepManual(e.target.checked),
						className: "size-5 accent-[var(--color-accent)]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm",
						children: "Keep my builds when the year changes"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-muted",
					children: "Off: user-placed structures stay tied to the year you stamped them. Undo rewinds the timeline."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Jump to era",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-2",
					children: [
						[
							100,
							1,
							1,
							"Rome / Han"
						],
						[
							1776,
							7,
							4,
							"Independence"
						],
						[
							1863,
							1,
							1,
							"Civil War"
						],
						[
							1914,
							7,
							28,
							"WWI begins"
						],
						[
							1945,
							5,
							8,
							"VE Day"
						],
						[
							1962,
							10,
							16,
							"Cold War"
						],
						[
							1991,
							12,
							26,
							"USSR ends"
						],
						[
							2026,
							1,
							1,
							"Present"
						]
					].map(([y, m, d, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: y === year ? "primary" : "secondary",
						onClick: () => setDate({
							year: y,
							month: m,
							day: d
						}),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4" }),
							" ",
							y,
							" · ",
							label
						]
					}, `${y}-${m}-${d}`))
				})
			})
		]
	});
}
function CountriesPanel() {
	const world = useEditor((s) => s.world);
	const iso = useEditor((s) => s.selectedCountryIso);
	const placeId = useEditor((s) => s.selectedPlaceId);
	const selectCountry = useEditor((s) => s.selectCountry);
	const selectPlace = useEditor((s) => s.selectPlace);
	const selectPolity = useEditor((s) => s.selectPolity);
	const spawnInCountry = useEditor((s) => s.spawnInCountry);
	const spawnAtCapital = useEditor((s) => s.spawnAtCapital);
	const generateCountryRegion = useEditor((s) => s.generateCountryRegion);
	const regionRadius = useEditor((s) => s.regionRadius);
	const setRegionRadius = useEditor((s) => s.setRegionRadius);
	const selectedPolityId = useEditor((s) => s.selectedPolityId);
	const [query, setQuery] = (0, import_react.useState)("");
	const [continent, setContinent] = (0, import_react.useState)("all");
	const [ready, setReady] = (0, import_react.useState)(Boolean(peekCountries()));
	const year = clampDateYear(world.year ?? 2026);
	(0, import_react.useEffect)(() => {
		if (peekCountries()) {
			setReady(true);
			return;
		}
		loadCountries().then(() => setReady(true)).catch(() => setReady(false));
	}, []);
	const atlas = peekCountries();
	const historical = world.terrainKind === "earth" && year !== 2026;
	const polities = (0, import_react.useMemo)(() => {
		if (!atlas || !historical) return [];
		return query.trim() ? searchPolities(atlas, year, query) : uniquePolities(year, atlas);
	}, [
		atlas,
		year,
		query,
		historical,
		ready
	]);
	const matches = (0, import_react.useMemo)(() => {
		if (!atlas) return [];
		return searchCountries(atlas, query, continent);
	}, [
		atlas,
		query,
		continent,
		ready
	]);
	const selected = atlas && iso ? atlas.byIso.get(iso) ?? null : null;
	const places = (0, import_react.useMemo)(() => {
		if (!atlas || !selected) return {
			capitals: [],
			cities: [],
			landmarks: []
		};
		const all = placesForCountry(atlas, selected.iso).filter((p) => placeInYear(p, year).exists);
		return {
			capitals: all.filter((p) => p.group === "capital"),
			cities: all.filter((p) => p.group === "city"),
			landmarks: all.filter((p) => p.group === "landmark")
		};
	}, [
		atlas,
		selected,
		ready,
		year
	]);
	const cap = atlas && selected ? primaryCapital(atlas, selected.iso) : null;
	const shownCountries = matches.slice(0, 80);
	const shownCities = [...places.capitals, ...places.cities].slice(0, 40);
	if (world.terrainKind !== "earth") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-col gap-4 p-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Countries overlay",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Country borders sit on the real Earth terrain map. Create or generate an Earth Map world first — this overlay is not a replacement political map."
			})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "All civilizations",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-2 text-xs text-muted",
						children: [
							year !== 2026 ? `${yearInfo(year).title} political geography on the physical Earth map. Borders are a historical approximation (modern coastlines, documented sovereignty).` : "Real country borders on the physical Earth map. Search, select, set spawn, then generate a playable region around the capital or city.",
							" ",
							"Huge Earth stays live — detailed chunks only around the region you generate."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-3 left-3 size-4 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: historical ? "Rome, Qing, USSR, Ottoman…" : "Germany, Israel, Chile…",
							className: "h-11 w-full rounded-[var(--radius-md)] bg-surface-2 pr-3 pl-10 text-sm outline-none focus:ring-2 focus:ring-accent/40"
						})]
					}),
					!historical ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex flex-wrap gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setContinent("all"),
							className: cn("h-11 rounded-full px-3 text-xs", continent === "all" ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted"),
							children: "All"
						}), CONTINENTS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setContinent(c),
							className: cn("h-11 rounded-full px-3 text-xs", continent === c ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted"),
							children: c
						}, c))]
					}) : null,
					!ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Loading country borders…"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "max-h-48 overflow-y-auto rounded-[var(--radius-md)] bg-surface-2",
						children: [historical ? polities.slice(0, 80).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-b border-border last:border-b-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => selectPolity(p.id),
								className: cn("flex min-h-11 w-full items-center justify-between gap-2 px-3 py-2 text-left", selectedPolityId === p.id && "bg-accent/20"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate text-sm",
										children: p.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block truncate text-xs text-muted",
										children: [p.capital ? `capital ${p.capital.name}` : p.short, p.disputed ? " · disputed" : ""]
									})]
								}), selectedPolityId === p.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flag, { className: "size-4 shrink-0 text-accent" }) : null]
							})
						}, p.id)) : shownCountries.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-b border-border last:border-b-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => selectCountry(c.iso),
								className: cn("flex min-h-11 w-full items-center justify-between gap-2 px-3 py-2 text-left", iso === c.iso && "bg-accent/20"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate text-sm",
										children: c.short || c.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block truncate text-xs text-muted",
										children: [c.continent, c.iso2 ? ` · ${c.iso2}` : ""]
									})]
								}), iso === c.iso ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flag, { className: "size-4 shrink-0 text-accent" }) : null]
							})
						}, c.iso)), ready && (historical ? polities.length === 0 : matches.length === 0) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "px-3 py-3 text-sm text-muted",
							children: "No matching country."
						}) : null]
					})
				]
			}),
			selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: selected.name,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-2 text-sm text-muted",
						children: [
							selected.continent,
							cap ? ` · capital ${placeInYear(cap, year).name}` : "",
							` · ${places.cities.length} cities · ${places.landmarks.length} landmarks`
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "primary",
							onClick: spawnInCountry,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }), " Set spawn in country"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: spawnAtCapital,
							disabled: !cap,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landmark, { className: "size-4" }),
								" Set spawn at capital",
								cap ? ` (${placeInYear(cap, year).name})` : ""
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 mb-1 text-xs text-muted",
						children: [
							"Cities in ",
							selected.short,
							" · ",
							year
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "max-h-40 overflow-y-auto rounded-[var(--radius-md)] bg-surface-2",
						children: [shownCities.map((p) => {
							const id = realPlaceId(p);
							const life = placeInYear(p, year);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-b border-border last:border-b-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => selectPlace(id),
									className: cn("flex min-h-11 w-full items-center justify-between px-3 py-2 text-left", placeId === id && "bg-accent/20"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block truncate text-sm",
											children: life.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "block truncate text-xs text-muted",
											children: [p.group, life.built != null ? ` · ${life.approx ? "approx " : ""}${fmtYear(life.built)}` : ""]
										})]
									})
								})
							}, id);
						}), shownCities.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "px-3 py-3 text-sm text-muted",
							children: "No cities on file for this year."
						}) : null]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-1 text-sm text-muted",
				children: "Select a country, or tap it on the map."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Generate region",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-xs text-muted",
						children: "Stamps era-appropriate roads, farms, houses, villages, and landmarks around the selected city. Only this window is detailed for .mcworld export — the rest of Earth stays a live map."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-2 grid grid-cols-4 gap-1.5",
						children: [
							256,
							512,
							1024,
							2048
						].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setRegionRadius(n),
							className: cn("h-11 rounded-[var(--radius-sm)] text-xs", regionRadius === n ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted"),
							children: n
						}, n))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "primary",
						className: "w-full",
						disabled: !selected && !selectedPolityId,
						onClick: generateCountryRegion,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-4" }), " Generate region"]
					})
				]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditorApp, {});
}
//#endregion
export { Home as component };
