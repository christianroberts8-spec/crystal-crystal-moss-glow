import { readColumn } from "./column";
import { localFromLonLat, lonLatFromLocal, peekEarthRaster } from "./earth";
import { inBounds, worldX, worldZ } from "./grid";
import { placeInYear } from "./placeYears";
import { findRealPlace, realPlaceId, REAL_PLACES, type PlaceGroup, type RealPlace } from "./realPlaces";
import type { StructurePlacement, WorldProject } from "./types";

const GROUP_RANK: Record<PlaceGroup, number> = { landmark: 3, capital: 2, city: 1 };

function isLand(world: WorldProject, lx: number, lz: number): boolean {
  if (!inBounds(world, lx, lz)) return false;
  return readColumn(world, lx, lz).water === 0;
}

/** Walk outward in lon/lat so coastal sites still find land on 1 m/block Earth. */
function findLandNear(world: WorldProject, lx: number, lz: number): { lx: number; lz: number } | null {
  if (isLand(world, lx, lz)) return { lx, lz };
  const { lon, lat } = lonLatFromLocal(world, lx, lz);
  const raster = peekEarthRaster();
  const stepDeg = raster ? 360 / raster.w : 360 / Math.max(64, world.width);
  const maxDeg = stepDeg * 4;
  for (let r = stepDeg; r <= maxDeg + 1e-9; r += stepDeg) {
    const n = 16;
    for (let i = 0; i < n; i++) {
      const ang = (i / n) * Math.PI * 2;
      const loc = localFromLonLat(world, lon + Math.cos(ang) * r, lat + Math.sin(ang) * r);
      if (isLand(world, loc.lx, loc.lz)) return loc;
    }
  }
  return null;
}

function uid(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `p-${Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`;
}

export interface PlaceRealResult {
  placed: number;
  skipped: number;
}

function toPlacement(world: WorldProject, p: RealPlace, lx: number, lz: number, year?: number): StructurePlacement {
  const st = year != null ? placeInYear(p, year) : { name: p.name, kind: p.kind, ruin: false, approx: false, built: undefined as number | undefined };
  return {
    id: uid(),
    kind: st.kind,
    x: worldX(world, lx),
    z: worldZ(world, lz),
    rotation: 0,
    name: st.name,
    realId: realPlaceId(p),
    ruin: st.ruin || undefined,
    built: st.built,
    approx: st.approx || undefined,
    year: year,
  };
}

export interface PlaceRealOpts {
  groups?: PlaceGroup[];
  only?: string[];
  year?: number;
}

/**
 * Stamp real cities and landmarks at published lat/lon.
 * Keeps user-placed builds (no realId). Replaces previous real placements unless `only` is set.
 * When `year` is set, skips places that did not yet exist and marks ruins.
 */
export function placeRealWorld(world: WorldProject, opts?: PlaceRealOpts): PlaceRealResult {
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

  const occupied = new Map<string, number>();
  for (const s of keep) occupied.set(`${s.x},${s.z}`, 99);

  const added: StructurePlacement[] = [];
  let skipped = 0;
  for (const p of REAL_PLACES) {
    if (groups && !groups.includes(p.group)) continue;
    const id = realPlaceId(p);
    if (only && !only.has(id)) continue;
    if (year != null) {
      const st = placeInYear(p, year);
      if (!st.exists) {
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
  return { placed: added.length, skipped };
}

export function placeOneReal(world: WorldProject, place: RealPlace): StructurePlacement | null {
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

export function localForPlace(world: WorldProject, place: RealPlace): { lx: number; lz: number } {
  const id = realPlaceId(place);
  const existing = world.structures.find((s) => s.realId === id);
  if (existing) {
    return { lx: existing.x - world.originX, lz: existing.z - world.originZ };
  }
  return localFromLonLat(world, place.lon, place.lat);
}
