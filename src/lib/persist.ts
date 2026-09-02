import type { WorldProject } from "./world/types";

const IDB_NAME = "minecraft-remap";
const STORE = "projects";
const META_KEY = "remap-last-id";

function openDb(): Promise<IDBDatabase> {
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

function encodeProject(w: WorldProject) {
  return {
    ...w,
    height: w.virtual ? [] : Array.from(w.height),
    biome: w.virtual ? [] : Array.from(w.biome),
    surface: w.virtual ? [] : Array.from(w.surface),
    fill: w.virtual ? [] : Array.from(w.fill),
    water: w.virtual ? [] : Array.from(w.water),
    cave: w.virtual ? [] : Array.from(w.cave),
    tiles: w.tiles
      ? [...w.tiles.entries()].map(([k, t]) => ({
          k,
          filled: Array.from(t.filled),
          height: Array.from(t.height),
          biome: Array.from(t.biome),
          surface: Array.from(t.surface),
          fill: Array.from(t.fill),
          water: Array.from(t.water),
          cave: Array.from(t.cave),
        }))
      : undefined,
    settings: { ...w.settings, seed: w.settings.seed.toString() },
    extraNbt: undefined,
  };
}

function decodeProject(raw: ReturnType<typeof encodeProject>): WorldProject {
  const virtual = Boolean((raw as { virtual?: boolean }).virtual);
  const n = virtual ? 0 : raw.width * raw.depth;
  const tilesRaw = (raw as { tiles?: Array<{ k: number; filled: number[]; height: number[]; biome: number[]; surface: number[]; fill: number[]; water: number[]; cave: number[] }> }).tiles;
  const tiles = new Map();
  if (tilesRaw) {
    for (const t of tilesRaw) {
      tiles.set(t.k, {
        filled: Uint8Array.from(t.filled),
        height: Int16Array.from(t.height),
        biome: Uint8Array.from(t.biome),
        surface: Uint8Array.from(t.surface),
        fill: Uint8Array.from(t.fill),
        water: Uint8Array.from(t.water),
        cave: Uint8Array.from(t.cave),
      });
    }
  }
  return {
    ...(raw as unknown as WorldProject),
    virtual,
    tiles: virtual ? tiles : undefined,
    height: Int16Array.from(raw.height ?? new Array(n).fill(64)),
    biome: Uint8Array.from(raw.biome ?? new Array(n).fill(0)),
    surface: Uint8Array.from(raw.surface ?? new Array(n).fill(4)),
    fill: Uint8Array.from(raw.fill ?? new Array(n).fill(3)),
    water: Uint8Array.from(raw.water ?? new Array(n).fill(0)),
    cave: Uint8Array.from(raw.cave ?? new Array(n).fill(0)),
    settings: {
      ...(raw as unknown as WorldProject).settings,
      seed: BigInt((raw as { settings: { seed: string } }).settings.seed),
      spawnRadius: Number((raw as { settings: { spawnRadius?: number } }).settings.spawnRadius ?? 5),
    },
    extraNbt: undefined,
  };
}

export async function saveProject(world: WorldProject): Promise<void> {
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).put(encodeProject(world), world.id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
  db.close();
  try {
    localStorage.setItem(META_KEY, world.id);
    localStorage.setItem(
      "remap-meta",
      JSON.stringify({ id: world.id, name: world.settings.name, updatedAt: world.updatedAt }),
    );
  } catch {
    /* quota */
  }
}

export async function loadProject(id: string): Promise<WorldProject | null> {
  const db = await openDb();
  const raw = await new Promise<ReturnType<typeof encodeProject> | undefined>((resolve, reject) => {
    const tx = db.transaction(STORE, "readonly");
    const req = tx.objectStore(STORE).get(id);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  db.close();
  if (!raw) return null;
  return decodeProject(raw);
}

export async function loadLastProject(): Promise<WorldProject | null> {
  const id = localStorage.getItem(META_KEY);
  if (!id) return null;
  try {
    return await loadProject(id);
  } catch {
    return null;
  }
}

export function lastMeta(): { id: string; name: string; updatedAt: number } | null {
  try {
    const s = localStorage.getItem("remap-meta");
    return s ? JSON.parse(s) : null;
  } catch {
    return null;
  }
}
