import {
  TAG,
  byte,
  compound,
  decodeNbt,
  encodeNbt,
  float,
  getByte,
  getCompound,
  getInt,
  getLong,
  getString,
  int,
  intList,
  long,
  str,
  type NbtCompound,
} from "./nbt";

export type GameMode = "survival" | "creative" | "adventure" | "spectator";
export type Difficulty = "peaceful" | "easy" | "normal" | "hard";

export interface WorldSettings {
  name: string;
  seed: bigint;
  gameMode: GameMode;
  difficulty: Difficulty;
  hardcore: boolean;
  cheats: boolean;
  spawn: { x: number; y: number; z: number };
  spawnRadius: number;
  time: number;
  daylightCycle: boolean;
  weather: "clear" | "rain" | "thunder";
  weatherCycle: boolean;
  mobSpawning: boolean;
  fireSpread: boolean;
  tnt: boolean;
  keepInventory: boolean;
  generator: "infinite" | "flat";
  commands: boolean;
  pvp: boolean;
  mobGriefing: boolean;
  randomTickSpeed: number;
  showCoordinates: boolean;
}

export const DEFAULT_SETTINGS = (name = "New World"): WorldSettings => ({
  name,
  seed: BigInt(Math.floor(Math.random() * 0x7fffffff)),
  gameMode: "creative",
  difficulty: "normal",
  hardcore: false,
  cheats: true,
  spawn: { x: 0, y: 80, z: 0 },
  spawnRadius: 5,
  time: 1000,
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
  showCoordinates: true,
});

const MODE_TO_INT: Record<GameMode, number> = {
  survival: 0,
  creative: 1,
  adventure: 2,
  spectator: 6,
};
const INT_TO_MODE: Record<number, GameMode> = {
  0: "survival",
  1: "creative",
  2: "adventure",
  5: "survival",
  6: "spectator",
};
const DIFF_TO_INT: Record<Difficulty, number> = {
  peaceful: 0,
  easy: 1,
  normal: 2,
  hard: 3,
};
const INT_TO_DIFF: Record<number, Difficulty> = {
  0: "peaceful",
  1: "easy",
  2: "normal",
  3: "hard",
};

function abilities(mode: GameMode): NbtCompound {
  const creative = mode === "creative";
  return {
    attackmobs: byte(1),
    attackplayers: byte(1),
    build: byte(1),
    doorsandswitches: byte(1),
    flying: byte(creative ? 1 : 0),
    flySpeed: float(0.05),
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
    walkSpeed: float(0.1),
    worldbuilder: byte(1),
  };
}

export function settingsToNbt(s: WorldSettings, extras?: NbtCompound): NbtCompound {
  const rain = s.weather === "clear" ? 0 : 1;
  const thunder = s.weather === "thunder" ? 1 : 0;
  const root: NbtCompound = {
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
    lastOpenedWithVersion: intList([1, 21, 0, 0, 0]),
    MinimumCompatibleClientVersion: intList([1, 21, 0, 0, 0]),
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
    rainTime: int(s.weather === "clear" ? 18000 : 6000),
    lightningLevel: float(thunder),
    lightningTime: int(s.weather === "thunder" ? 6000 : 18000),
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
      saved_with_toggled_experiments: byte(0),
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
    showDaysPlayed: byte(0),
  };

  if (s.generator === "flat") {
    root.FlatWorldLayers = str(
      JSON.stringify({
        biome_id: 1,
        block_layers: [
          { block_name: "minecraft:bedrock", count: 1 },
          { block_name: "minecraft:dirt", count: 2 },
          { block_name: "minecraft:grass_block", count: 1 },
        ],
        encoding_version: 6,
        structure_options: null,
        world_version: "version.post_1_18",
      }),
    );
  }

  if (extras) {
    for (const [k, v] of Object.entries(extras)) {
      if (!(k in root)) root[k] = v;
    }
  }
  return root;
}

export const LEVEL_DAT_STORAGE_VERSION = 10;

export function encodeLevelDat(settings: WorldSettings, extras?: NbtCompound): Uint8Array {
  const nbt = encodeNbt(settingsToNbt(settings, extras));
  const out = new Uint8Array(8 + nbt.length);
  const view = new DataView(out.buffer);
  view.setInt32(0, LEVEL_DAT_STORAGE_VERSION, true);
  view.setInt32(4, nbt.length, true);
  out.set(nbt, 8);
  return out;
}

export function decodeLevelDat(buf: Uint8Array): {
  headerVersion: number;
  nbtLength: number;
  settings: WorldSettings;
  extras: NbtCompound;
  raw: NbtCompound;
} {
  if (buf.length < 16) throw new Error("level.dat is too small to be a Bedrock world file.");
  const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  const headerVersion = view.getInt32(0, true);
  const nbtLength = view.getInt32(4, true);
  if (nbtLength < 8 || nbtLength > buf.length - 8) {
    throw new Error("level.dat header length does not match the file. This is not a valid Bedrock level.dat.");
  }
  const nbtBuf = buf.subarray(8, 8 + nbtLength);
  const { value } = decodeNbt(nbtBuf);
  const extras: NbtCompound = { ...value };
  const settings = nbtToSettings(value);
  return { headerVersion, nbtLength, settings, extras, raw: value };
}

export function nbtToSettings(c: NbtCompound): WorldSettings {
  const gameType = getInt(c, "GameType", 1);
  const diff = getInt(c, "Difficulty", 2);
  const rain = getInt(c, "rainLevel", 0) > 0 || (c.rainLevel && c.rainLevel.type === TAG.Float && c.rainLevel.value > 0);
  const thunder =
    getInt(c, "lightningLevel", 0) > 0 ||
    (c.lightningLevel && c.lightningLevel.type === TAG.Float && c.lightningLevel.value > 0);
  const weather: WorldSettings["weather"] = thunder ? "thunder" : rain ? "rain" : "clear";
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
      z: getInt(c, "SpawnZ", 0),
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
    showCoordinates: getByte(c, "showcoordinates", 0) === 1,
  };
}

void getCompound;
