import { create } from "zustand";
import { DEFAULT_SETTINGS } from "./bedrock/leveldat";
import { validateProject, type ValidationReport } from "./bedrock/validate";
import { BIOMES } from "./world/biomes";
import { GRASS } from "./world/blocks";
import { generateCivRegion } from "./world/civRegion";
import {
  countryAtLocal,
  loadCountries,
  matchCountry,
  peekCountries,
  primaryCapital,
  viewForCountry,
} from "./world/countries";
import { readColumn, styleColumn, writeColumn } from "./world/column";
import {
  EARTH_REGIONS,
  findSpawnInRegion,
  highestLandSpawn,
  loadEarthRaster,
  localFromLonLat,
  lonLatFromLocal,
  randomLandSpawn,
} from "./world/earth";
import { generateTerrain } from "./world/generate";
import { applyTimelineYear } from "./world/historyApply";
import { clampDateYear, clampDay, clampMonth, fmtDateShort, neighborYear } from "./world/history";
import { placeInYear } from "./world/placeYears";
import { polityAtLonLat, primaryIsoForPolity, resolvePolity, viewForPolity } from "./world/polities";
import {
  applyBiomeDefaults,
  copyRect,
  createEmptyWorld,
  findSafeSpawn,
  forBrush,
  idxOf,
  inBounds,
  localX,
  localZ,
  normalizeRect,
  pasteClipboard,
  restoreRect,
  snapshotRect,
  type RectSnap,
} from "./world/grid";
import { lastMeta, loadLastProject, saveProject } from "./persist";
import { localForPlace, placeOneReal as stampOneReal, placeRealWorld } from "./world/placeReal";
import { findRealPlace, realPlaceId, type PlaceGroup } from "./world/realPlaces";
import type {
  Clipboard,
  LayerToggles,
  Rect,
  StructureKind,
  TerrainPreset,
  Tool,
  WorkflowStep,
  WorldProject,
} from "./world/types";
import { DEFAULT_LAYERS, hugeSizeOf } from "./world/types";

export interface HoverInfo {
  x: number;
  y: number;
  z: number;
  biome: string;
  block: string;
  water: boolean;
  structure?: string;
  country?: string;
  year?: number;
  built?: number;
  approx?: boolean;
  ruin?: boolean;
}

interface RectHist {
  kind?: "rect";
  before: RectSnap;
  after: RectSnap;
}

interface YearHist {
  kind: "year";
  from: number;
  to: number;
  fromMonth: number;
  toMonth: number;
  fromDay: number;
  toDay: number;
  structuresFrom: WorldProject["structures"];
  structuresTo: WorldProject["structures"];
  keepFrom: boolean;
  keepTo: boolean;
}

type Hist = RectHist | YearHist;

interface EditorState {
  world: WorldProject | null;
  step: WorkflowStep;
  tool: Tool;
  brushSize: number;
  selectedBlock: number;
  selectedBiome: number;
  selectedStructure: StructureKind;
  selectedEntity: string;
  structureRot: 0 | 90 | 180 | 270;
  selection: Rect | null;
  clipboard: Clipboard | null;
  hover: HoverInfo | null;
  view: { x: number; z: number; zoom: number };
  undoStack: Hist[];
  redoStack: Hist[];
  dirty: boolean;
  lastMeta: ReturnType<typeof lastMeta>;
  validation: ValidationReport | null;
  busy: string | null;
  toast: string | null;
  layers: LayerToggles;
  selectedCountryIso: string | null;
  selectedPlaceId: string | null;
  selectedPolityId: string | null;
  regionRadius: number;
  mapEpoch: number;

  setStep: (s: WorkflowStep) => void;
  setTool: (t: Tool) => void;
  setBrush: (n: number) => void;
  setBlock: (n: number) => void;
  setBiome: (n: number) => void;
  setHover: (h: HoverInfo | null) => void;
  setView: (v: Partial<EditorState["view"]>) => void;
  setSelection: (r: Rect | null) => void;
  setToast: (t: string | null) => void;
  setBusy: (t: string | null) => void;

  newWorld: (opts: {
    name: string;
    seed: string;
    width: number;
    depth: number;
    preset: TerrainPreset;
    gameMode: WorldProject["settings"]["gameMode"];
  }) => void;
  loadWorld: (w: WorldProject) => void;
  resumeLast: () => Promise<boolean>;
  persist: () => Promise<void>;

  beginStroke: () => RectSnap | null;
  commitStroke: (before: RectSnap) => void;
  applyBrush: (lx: number, lz: number) => void;
  fillSelection: () => void;
  replaceBlock: (from: number, to: number) => void;
  copySel: () => void;
  pasteAt: (lx: number, lz: number) => void;
  generate: (preset: TerrainPreset, replace: boolean) => void;
  paintBiomeAll: (id: number) => void;
  placeStructure: (lx: number, lz: number) => void;
  placeEntity: (lx: number, lz: number) => void;
  placeAllReal: (groups?: PlaceGroup[]) => void;
  placeOneReal: (realId: string) => void;
  jumpToPlace: (realId: string) => void;
  setSpawnAt: (wx: number, wz: number) => void;
  setSpawnCoords: (x: number, y: number, z: number) => void;
  snapSpawnY: () => void;
  setSpawnRadius: (n: number) => void;
  spawnInRegion: (id: string) => void;
  spawnRandomLand: () => void;
  spawnHighest: () => void;
  spawnCenter: () => void;
  centerOnSpawn: () => void;
  setLayer: (k: keyof LayerToggles, v: boolean) => void;
  selectCountry: (iso: string | null) => void;
  selectPolity: (id: string | null) => void;
  selectPlace: (id: string | null) => void;
  pickCountryAt: (lx: number, lz: number) => void;
  spawnInCountry: () => void;
  spawnAtCapital: () => void;
  generateCountryRegion: () => void;
  setRegionRadius: (n: number) => void;
  setYear: (y: number) => void;
  setDate: (d: { year?: number; month?: number; day?: number }) => void;
  stepYear: (dir: -1 | 1) => void;
  setKeepManual: (v: boolean) => void;
  updateSettings: (p: Partial<WorldProject["settings"]>) => void;
  undo: () => void;
  redo: () => void;
  runValidate: () => ValidationReport | null;
}

function seedFrom(s: string): bigint {
  if (/^-?\d+$/.test(s.trim())) return BigInt(s.trim());
  let h = 0n;
  for (let i = 0; i < s.length; i++) h = (h * 131n + BigInt(s.charCodeAt(i))) & 0x7fffffffffffffffn;
  return h || 1n;
}

function areaOf(r: Rect): number {
  return (r.x1 - r.x0 + 1) * (r.z1 - r.z0 + 1);
}

export const useEditor = create<EditorState>((set, get) => ({
  world: null,
  step: "create",
  tool: "raise",
  brushSize: 4,
  selectedBlock: GRASS,
  selectedBiome: 0,
  selectedStructure: "house",
  selectedEntity: "minecraft:cow",
  structureRot: 0,
  selection: null,
  clipboard: null,
  hover: null,
  view: { x: 0, z: 0, zoom: 1 },
  undoStack: [],
  redoStack: [],
  dirty: false,
  lastMeta: null as ReturnType<typeof lastMeta>,
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
  setView: (v) => set({ view: { ...get().view, ...v } }),
  setSelection: (selection) => set({ selection }),
  setToast: (toast) => set({ toast }),
  setBusy: (busy) => set({ busy }),

  newWorld: ({ name, seed, width, depth, preset, gameMode }) => {
    const w = Math.max(16, Math.round(width / 16) * 16);
    const d = Math.max(16, Math.round(depth / 16) * 16);
    set({ busy: preset === "earth" ? "Loading real Earth map…" : "Generating terrain…" });
    void (async () => {
      try {
        const raster = preset === "earth" ? await loadEarthRaster() : null;
        if (preset === "earth") {
          set({ busy: "Loading countries…" });
          try {
            await loadCountries();
          } catch {
            /* overlay optional */
          }
          set({ busy: "Carving Earth…" });
        }
        const world = createEmptyWorld({
          name: name || "REMAP World",
          width: w,
          depth: d,
          seed: seedFrom(seed || String(Date.now())),
          settings: { ...DEFAULT_SETTINGS(name || "REMAP World"), gameMode, spawnRadius: preset === "earth" ? 12 : 5 },
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
        const europe = EARTH_REGIONS.find((r) => r.id === "eu")!;
        world.settings.spawn =
          preset === "earth" ? (findSpawnInRegion(world, europe) ?? findSafeSpawn(world)) : findSafeSpawn(world);
        const maxDim = Math.max(world.width, world.depth);
        if (world.virtual) {
          const lx = Math.max(0, Math.min(world.width - 1, world.settings.spawn.x - world.originX));
          const lz = Math.max(0, Math.min(world.depth - 1, world.settings.spawn.z - world.originZ));
          const col = readColumn(world, lx, lz);
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
          layers:
            preset === "earth"
              ? { terrain: true, countries: true, borders: true, cities: true, roads: true, structures: true }
              : { terrain: true, countries: false, borders: false, cities: true, roads: true, structures: true },
          selectedCountryIso: null,
          selectedPlaceId: null,
          selectedPolityId: null,
          view: {
            x: world.settings.spawn.x - world.originX,
            z: world.settings.spawn.z - world.originZ,
            zoom: Math.min(8, 720 / maxDim),
          },
          selection: null,
        });
        void get().persist();
      } catch (e) {
        set({ busy: null, toast: e instanceof Error ? e.message : String(e) });
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
      layers:
        world.terrainKind === "earth"
          ? { terrain: true, countries: true, borders: true, cities: true, roads: true, structures: true }
          : { ...DEFAULT_LAYERS, countries: false, borders: false },
      view: { x: world.width / 2, z: world.depth / 2, zoom: Math.min(2, 360 / Math.max(world.width, world.depth)) },
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
      } catch {
        /* overview still works after first generate */
      }
    }
    get().loadWorld(w);
    return true;
  },

  persist: async () => {
    const w = get().world;
    if (!w) return;
    w.updatedAt = Date.now();
    await saveProject(w);
    set({ dirty: false, lastMeta: lastMeta() });
  },

  beginStroke: () => {
    const w = get().world;
    if (!w) return null;
    return snapshotRect(w, { x0: 0, z0: 0, x1: w.width - 1, z1: w.depth - 1 });
  },

  commitStroke: (before) => {
    const w = get().world;
    if (!w) return;
    const after = snapshotRect(w, { x0: before.x0, z0: before.z0, x1: before.x1, z1: before.z1 });
    set({
      undoStack: [...get().undoStack.slice(-40), { before, after }],
      redoStack: [],
      dirty: true,
    });
  },

  applyBrush: (lx, lz) => {
    const { world, tool, brushSize, selectedBlock, selectedBiome } = get();
    if (!world || !inBounds(world, lx, lz)) return;
    if (tool === "eyedropper") {
      const col = readColumn(world, lx, lz);
      set({ selectedBlock: col.surface, selectedBiome: col.biome });
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
          for (let dz = -1; dz <= 1; dz++) {
            for (let dx = -1; dx <= 1; dx++) {
              const nx = _x + dx;
              const nz = _z + dz;
              if (!inBounds(world, nx, nz)) continue;
              sum += readColumn(world, nx, nz).height;
              n++;
            }
          }
          col.height = Math.round(col.height * (1 - t * 0.5) + (sum / n) * t * 0.5);
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
      if (tool === "raise") {
        world.height[i] = Math.min(220, world.height[i]! + Math.ceil(1 + t * 2));
      } else if (tool === "lower") {
        world.height[i] = Math.max(-40, world.height[i]! - Math.ceil(1 + t * 2));
      } else if (tool === "smooth") {
        let sum = 0;
        let n = 0;
        for (let dz = -1; dz <= 1; dz++) {
          for (let dx = -1; dx <= 1; dx++) {
            const nx = _x + dx;
            const nz = _z + dz;
            if (!inBounds(world, nx, nz)) continue;
            sum += world.height[idxOf(world, nx, nz)]!;
            n++;
          }
        }
        world.height[i] = Math.round(world.height[i]! * (1 - t * 0.5) + (sum / n) * t * 0.5);
      } else if (tool === "flatten") {
        const ci = idxOf(world, lx, lz);
        world.height[i] = world.height[ci]!;
      } else if (tool === "paint-block") {
        world.surface[i] = selectedBlock;
        world.water[i] = selectedBlock === 8 ? 1 : world.water[i]!;
      } else if (tool === "paint-biome") {
        world.biome[i] = selectedBiome;
        applyBiomeDefaults(world, i);
      } else if (tool === "water") {
        world.water[i] = 1;
        world.biome[i] = 4;
        world.height[i] = Math.min(world.height[i]!, 58);
        world.surface[i] = 5;
        world.fill[i] = 5;
      }
    });
    set({ world, dirty: true });
  },

  fillSelection: () => {
    const { world, selection, tool, selectedBlock, selectedBiome } = get();
    if (!world || !selection) return;
    const r = normalizeRect(selection);
    if (areaOf(r) > 250_000) {
      set({ toast: "Fill on huge maps is limited to 500×500. Select a smaller region." });
      return;
    }
    const before = snapshotRect(world, r);
    for (let z = r.z0; z <= r.z1; z++) {
      for (let x = r.x0; x <= r.x1; x++) {
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
        } else {
          world.surface[i] = selectedBlock;
        }
      }
    }
    const after = snapshotRect(world, r);
    set({
      world,
      undoStack: [...get().undoStack.slice(-40), { before, after }],
      redoStack: [],
      dirty: true,
    });
  },

  replaceBlock: (from, to) => {
    const { world, selection } = get();
    if (!world) return;
    const r = selection ? normalizeRect(selection) : { x0: 0, z0: 0, x1: world.width - 1, z1: world.depth - 1 };
    if (world.virtual && !selection) {
      set({ toast: "Select a region first — replace can’t scan a 60 million block map." });
      return;
    }
    if (areaOf(r) > 250_000) {
      set({ toast: "Replace on huge maps is limited to 500×500. Select a smaller region." });
      return;
    }
    const before = snapshotRect(world, r);
    let n = 0;
    for (let z = r.z0; z <= r.z1; z++) {
      for (let x = r.x0; x <= r.x1; x++) {
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
    }
    const after = snapshotRect(world, r);
    set({
      world,
      undoStack: [...get().undoStack.slice(-40), { before, after }],
      redoStack: [],
      dirty: true,
      toast: `Replaced ${n} columns`,
    });
  },

  copySel: () => {
    const { world, selection } = get();
    if (!world || !selection) return;
    const r = normalizeRect(selection);
    if (areaOf(r) > 250_000) {
      set({ toast: "Copy on huge maps is limited to 500×500. Select a smaller region." });
      return;
    }
    set({ clipboard: copyRect(world, r), toast: `Copied ${r.x1 - r.x0 + 1}×${r.z1 - r.z0 + 1}` });
  },

  pasteAt: (lx, lz) => {
    const { world, clipboard } = get();
    if (!world || !clipboard) return;
    const r = { x0: lx, z0: lz, x1: lx + clipboard.w - 1, z1: lz + clipboard.d - 1 };
    if (clipboard.w * clipboard.d > 250_000) {
      set({ toast: "Paste is limited to 500×500." });
      return;
    }
    const before = snapshotRect(world, r);
    if (world.virtual) {
      for (let dz = 0; dz < clipboard.d; dz++) {
        for (let dx = 0; dx < clipboard.w; dx++) {
          const x = lx + dx;
          const z = lz + dz;
          if (!inBounds(world, x, z)) continue;
          const s = dx + dz * clipboard.w;
          writeColumn(world, x, z, {
            height: clipboard.height[s]!,
            biome: clipboard.biome[s]!,
            surface: clipboard.surface[s]!,
            fill: clipboard.fill[s]!,
            water: clipboard.water[s]!,
          });
        }
      }
    } else {
      pasteClipboard(world, lx, lz, clipboard);
    }
    const after = snapshotRect(world, r);
    set({
      world,
      undoStack: [...get().undoStack.slice(-40), { before, after }],
      redoStack: [],
      dirty: true,
      toast: "Pasted",
    });
  },

  generate: (preset, replace) => {
    const world = get().world;
    if (!world) return;
    set({ busy: preset === "earth" ? "Loading Earth…" : "Generating terrain…" });
    void (async () => {
      try {
        const raster = preset === "earth" ? await loadEarthRaster() : null;
        if (preset === "earth") {
          try {
            await loadCountries();
          } catch {
            /* overlay optional */
          }
        }
        const before = snapshotRect(world, { x0: 0, z0: 0, x1: world.width - 1, z1: world.depth - 1 });
        generateTerrain(world, preset, replace, raster);
        world.terrainKind = preset;
        const after = snapshotRect(world, before);
        set({
          world,
          busy: null,
          dirty: true,
          layers:
            preset === "earth"
              ? { ...get().layers, countries: true, borders: true, cities: true }
              : get().layers,
          undoStack: [...get().undoStack.slice(-40), { before, after }],
          redoStack: [],
          toast: `Generated ${preset === "earth" ? "Earth map" : preset}`,
        });
      } catch (e) {
        set({ busy: null, toast: e instanceof Error ? e.message : String(e) });
      }
    })();
  },

  paintBiomeAll: (id) => {
    const { world, selection } = get();
    if (!world) return;
    const r = selection ? normalizeRect(selection) : { x0: 0, z0: 0, x1: world.width - 1, z1: world.depth - 1 };
    if (world.virtual && !selection) {
      set({ toast: "Select a region first — biome fill can’t paint a 60 million block map." });
      return;
    }
    if (areaOf(r) > 250_000) {
      set({ toast: "Biome fill on huge maps is limited to 500×500. Select a smaller region." });
      return;
    }
    const before = snapshotRect(world, r);
    for (let z = r.z0; z <= r.z1; z++) {
      for (let x = r.x0; x <= r.x1; x++) {
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
    }
    const after = snapshotRect(world, r);
    set({
      world,
      undoStack: [...get().undoStack.slice(-40), { before, after }],
      redoStack: [],
      dirty: true,
    });
  },

  placeStructure: (lx, lz) => {
    const world = get().world;
    if (!world) return;
    world.structures = [
      ...world.structures,
      {
        id: crypto.randomUUID(),
        kind: get().selectedStructure,
        x: world.originX + lx,
        z: world.originZ + lz,
        rotation: get().structureRot,
        year: world.keepManualAcrossYears === false ? clampDateYear(world.year ?? 2026) : undefined,
      },
    ];
    set({ world, dirty: true, toast: `Placed ${get().selectedStructure}` });
  },

  placeAllReal: (groups) => {
    const world = get().world;
    if (!world) return;
    const { placed, skipped } = placeRealWorld(world, groups ? { groups, year: world.year } : { year: world.year });
    set({
      world,
      dirty: true,
      toast: `Placed ${placed} real places${skipped ? ` · ${skipped} skipped (water or overlap)` : ""}`,
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
      set({
        toast: `${place.name} did not exist in ${clampDateYear(world.year)}${st.built != null ? ` (from ${st.built})` : ""}`,
      });
      return;
    }
    const s = stampOneReal(world, place);
    if (!s) {
      set({ toast: `${place.name} sits on water in this map` });
      return;
    }
    const loc = localForPlace(world, place);
    set({
      world,
      dirty: true,
      toast: `Placed ${place.name}`,
      view: { x: loc.lx, z: loc.lz, zoom: Math.max(get().view.zoom, 6) },
    });
  },

  jumpToPlace: (realId) => {
    const world = get().world;
    if (!world) return;
    const place = findRealPlace(realId);
    if (!place) return;
    const loc = localForPlace(world, place);
    set({
      view: { x: loc.lx, z: loc.lz, zoom: Math.max(6, Math.min(16, Math.max(get().view.zoom, 6))) },
      toast: `${place.name}, ${place.country}`,
      selectedPlaceId: realId,
    });
  },

  placeEntity: (lx, lz) => {
    const world = get().world;
    if (!world) return;
    const col = readColumn(world, lx, lz);
    const y = (col.water ? Math.max(col.height, 63) : col.height) + 1;
    world.entities = [
      ...world.entities,
      {
        id: crypto.randomUUID(),
        type: get().selectedEntity,
        x: world.originX + lx,
        y,
        z: world.originZ + lz,
      },
    ];
    set({ world, dirty: true });
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
    world.settings = { ...world.settings, spawn: { x: wx, y: col.height + 1, z: wz } };
    set({
      world,
      dirty: true,
      toast: `Spawn set to ${wx}, ${col.height + 1}, ${wz}`,
      view: { ...get().view, x: lx, z: lz },
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
    world.settings = { ...world.settings, spawn: { x: x | 0, y: y | 0, z: z | 0 } };
    set({
      world,
      dirty: true,
      toast: `Spawn set to ${x | 0}, ${y | 0}, ${z | 0}`,
      view: { ...get().view, x: lx, z: lz },
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
    const s = { x: cur.x, y: col.height + 1, z: cur.z };
    world.settings = { ...world.settings, spawn: s };
    set({ world, dirty: true, toast: `Y snapped to ${s.y}` });
  },

  setSpawnRadius: (n) => {
    const world = get().world;
    if (!world) return;
    const spawnRadius = Math.max(0, Math.min(128, Math.round(n)));
    world.settings = { ...world.settings, spawnRadius };
    set({ world, dirty: true });
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
    world.settings = { ...world.settings, spawn: s };
    set({
      world,
      dirty: true,
      toast: `Spawn in ${region.label}: ${s.x}, ${s.y}, ${s.z}`,
      view: { ...get().view, x: localX(world, s.x), z: localZ(world, s.z) },
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
    world.settings = { ...world.settings, spawn: s };
    set({
      world,
      dirty: true,
      toast: `Random spawn ${s.x}, ${s.y}, ${s.z}`,
      view: { ...get().view, x: localX(world, s.x), z: localZ(world, s.z) },
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
    world.settings = { ...world.settings, spawn: s };
    set({
      world,
      dirty: true,
      toast: `Peak spawn ${s.x}, ${s.y}, ${s.z}`,
      view: { ...get().view, x: localX(world, s.x), z: localZ(world, s.z) },
    });
  },

  spawnCenter: () => {
    const world = get().world;
    if (!world) return;
    const s = findSafeSpawn(world);
    world.settings = { ...world.settings, spawn: s };
    set({
      world,
      dirty: true,
      toast: `Center land ${s.x}, ${s.y}, ${s.z}`,
      view: { ...get().view, x: localX(world, s.x), z: localZ(world, s.z) },
    });
  },

  centerOnSpawn: () => {
    const world = get().world;
    if (!world) return;
    const s = world.settings.spawn;
    set({ view: { ...get().view, x: localX(world, s.x), z: localZ(world, s.z) } });
  },

  setLayer: (k, v) => {
    set({ layers: { ...get().layers, [k]: v } });
  },

  selectCountry: (iso) => {
    const world = get().world;
    const atlas = peekCountries();
    const country = iso && atlas ? atlas.byIso.get(iso) ?? null : null;
    if (!world || !country) {
      set({ selectedCountryIso: iso, selectedPlaceId: null, selectedPolityId: iso });
      return;
    }
    const year = clampDateYear(world.year ?? 2026);
    const { lon, lat } = { lon: country.lx, lat: country.ly };
    const hit = world.terrainKind === "earth" ? polityAtLonLat(atlas!, year, lon, lat) : null;
    const cap = primaryCapital(atlas!, country.iso);
    set({
      selectedCountryIso: country.iso,
      selectedPolityId: hit?.polity.id ?? country.iso,
      selectedPlaceId: cap ? realPlaceId(cap) : null,
      layers: { ...get().layers, countries: true, borders: true, cities: true },
      view: viewForCountry(world, country),
      toast: hit && hit.polity.id !== country.iso ? `${hit.polity.name} · ${country.name}` : country.name,
      mapEpoch: get().mapEpoch + 1,
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
    const capPlace = capName
      ? world.structures.find((s) => s.name === capName) ?? null
      : null;
    set({
      selectedPolityId: id,
      selectedCountryIso: iso,
      selectedPlaceId: capPlace?.realId ?? get().selectedPlaceId,
      layers: { ...get().layers, countries: true, borders: true, cities: true },
      view: viewForPolity(world, atlas, year, id),
      toast: pol.disputed ? `${pol.name} (disputed)` : pol.name,
      mapEpoch: get().mapEpoch + 1,
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
    const matched = atlas ? matchCountry(atlas, place.country) : null;
    set({
      selectedPlaceId: id,
      selectedCountryIso: matched?.iso ?? get().selectedCountryIso,
      view: { x: loc.lx, z: loc.lz, zoom: Math.max(4, Math.min(24, Math.max(get().view.zoom, 8))) },
      toast: `${place.name}, ${place.country}`,
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
    const year = clampDateYear(world.year ?? 2026);
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
    set({ world, dirty: true });
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
        toast: fmtDateShort(toY, toM, toD),
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
        const hist: YearHist = {
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
          keepTo: world.keepManualAcrossYears !== false,
        };
        set({
          world,
          busy: null,
          dirty: true,
          undoStack: [...get().undoStack.slice(-40), hist],
          redoStack: [],
          mapEpoch: get().mapEpoch + 1,
          toast: `${fmtDateShort(toY, toM, toD)} · ${out.placed} places on the globe${out.skipped ? ` · ${out.skipped} not yet built or at sea` : ""}`,
        });
      } catch (e) {
        set({ busy: null, toast: e instanceof Error ? e.message : String(e) });
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
    const iso =
      get().selectedCountryIso ??
      (get().selectedPolityId ? primaryIsoForPolity(year, get().selectedPolityId!, atlas) : null);
    if (!iso) {
      set({ toast: "Select a country first" });
      return;
    }
    const country = atlas.byIso.get(iso);
    if (!country) return;
    const place = get().selectedPlaceId ? findRealPlace(get().selectedPlaceId!) ?? null : null;
    const layers = get().layers;
    set({ busy: `Generating ${place?.name ?? country.short} region…` });
    window.setTimeout(() => {
      try {
        const before = snapshotRect(world, { x0: 0, z0: 0, x1: world.width - 1, z1: world.depth - 1 });
        const out = generateCivRegion(world, country, place, {
          radius: get().regionRadius,
          roads: layers.roads,
          settlements: true,
          structures: layers.structures,
        });
        const col = readColumn(world, out.center.lx, out.center.lz);
        world.settings = {
          ...world.settings,
          spawn: { x: world.originX + out.center.lx, y: col.height + 1, z: world.originZ + out.center.lz },
        };
        if (world.virtual) {
          world.exportWindow = Math.max(world.exportWindow ?? 2048, Math.min(4096, get().regionRadius * 2));
        }
        const after = snapshotRect(world, before);
        set({
          world,
          busy: null,
          dirty: true,
          undoStack: [...get().undoStack.slice(-40), { before, after }],
          redoStack: [],
          mapEpoch: get().mapEpoch + 1,
          view: { x: out.center.lx, z: out.center.lz, zoom: Math.max(get().view.zoom, 6) },
          toast: `${out.year} · ${out.countryName} · ${out.placeName}: ${out.settlements} builds, ${out.roads} roads, ${out.farms} farm fields, ${out.structures} landmarks. Export writes the playable window around spawn.`,
        });
      } catch (e) {
        set({ busy: null, toast: e instanceof Error ? e.message : String(e) });
      }
    }, 30);
  },

  updateSettings: (p) => {
    const world = get().world;
    if (!world) return;
    world.settings = { ...world.settings, ...p };
    set({ world, dirty: true });
  },

  undo: () => {
    const { world, undoStack } = get();
    if (!world || !undoStack.length) return;
    const h = undoStack[undoStack.length - 1]!;
    if (h.kind === "year") {
      world.year = h.from;
      world.month = h.fromMonth ?? 1;
      world.day = h.fromDay ?? 1;
      world.keepManualAcrossYears = h.keepFrom;
      world.structures = h.structuresFrom.map((s) => ({ ...s }));
    } else {
      restoreRect(world, h.before);
    }
    set({ world, undoStack: undoStack.slice(0, -1), redoStack: [...get().redoStack, h], dirty: true, mapEpoch: get().mapEpoch + 1 });
  },

  redo: () => {
    const { world, redoStack } = get();
    if (!world || !redoStack.length) return;
    const h = redoStack[redoStack.length - 1]!;
    if (h.kind === "year") {
      world.year = h.to;
      world.month = h.toMonth ?? 1;
      world.day = h.toDay ?? 1;
      world.keepManualAcrossYears = h.keepTo;
      world.structures = h.structuresTo.map((s) => ({ ...s }));
    } else {
      restoreRect(world, h.after);
    }
    set({ world, redoStack: redoStack.slice(0, -1), undoStack: [...get().undoStack, h], dirty: true, mapEpoch: get().mapEpoch + 1 });
  },

  runValidate: () => {
    const world = get().world;
    if (!world) return null;
    const report = validateProject(world);
    set({ validation: report, step: "validate" });
    return report;
  },
}));

void BIOMES;
