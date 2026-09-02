import { DIRT_PATH, FARMLAND, GRAVEL, HAY, SMOOTH } from "./blocks";
import { readColumn, writeColumn } from "./column";
import {
  peekCountries,
  placesForCountry,
  primaryCapital,
  type CountryRec,
} from "./countries";
import { localFromLonLat } from "./earth";
import { inBounds, worldX, worldZ } from "./grid";
import { localForPlace, placeOneReal } from "./placeReal";
import { realPlaceId, type RealPlace } from "./realPlaces";
import { eraInfrastructure, placeInYear } from "./placeYears";
import type { StructureKind, StructurePlacement, WorldProject } from "./types";

export const CIV_PREFIX = "civ:";

function uid(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `civ-${Math.random().toString(36).slice(2)}`;
}

function hash2(x: number, z: number, seed: number): number {
  let n = Math.imul(x, 374761393) + Math.imul(z, 668265263) + seed;
  n = (n ^ (n >>> 13)) | 0;
  n = Math.imul(n, 1274126177);
  return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
}

function landNear(world: WorldProject, lx: number, lz: number, max = 24): { lx: number; lz: number } | null {
  if (inBounds(world, lx, lz) && readColumn(world, lx, lz).water === 0) return { lx, lz };
  for (let r = 1; r <= max; r++) {
    for (let i = 0; i < 12; i++) {
      const ang = (i / 12) * Math.PI * 2;
      const x = Math.round(lx + Math.cos(ang) * r);
      const z = Math.round(lz + Math.sin(ang) * r);
      if (inBounds(world, x, z) && readColumn(world, x, z).water === 0) return { lx: x, lz: z };
    }
  }
  return null;
}

function paintRoad(world: WorldProject, x0: number, z0: number, x1: number, z1: number, width: number, surface: number) {
  const dx = Math.abs(x1 - x0);
  const dz = Math.abs(z1 - z0);
  const sx = x0 < x1 ? 1 : -1;
  const sz = z0 < z1 ? 1 : -1;
  let err = dx - dz;
  let x = x0;
  let z = z0;
  const half = Math.max(0, Math.floor(width / 2));
  for (;;) {
    for (let oz = -half; oz <= half; oz++) {
      for (let ox = -half; ox <= half; ox++) {
        const px = x + ox;
        const pz = z + oz;
        if (!inBounds(world, px, pz)) continue;
        const col = readColumn(world, px, pz);
        if (col.water) continue;
        writeColumn(world, px, pz, { surface, water: 0 });
      }
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

function paintFarms(world: WorldProject, cx: number, cz: number, radius: number, seed: number) {
  const r = Math.max(12, Math.min(90, radius));
  for (let z = cz - r; z <= cz + r; z++) {
    for (let x = cx - r; x <= cx + r; x++) {
      if (!inBounds(world, x, z)) continue;
      const d = Math.hypot(x - cx, z - cz);
      if (d < 10 || d > r) continue;
      if (hash2(x, z, seed) > 0.42) continue;
      const col = readColumn(world, x, z);
      if (col.water) continue;
      writeColumn(world, x, z, { surface: hash2(x, z, seed + 3) > 0.88 ? HAY : FARMLAND, water: 0 });
    }
  }
}

function stamp(
  world: WorldProject,
  kind: StructureKind,
  lx: number,
  lz: number,
  name: string,
  realId: string,
  extra?: { year?: number; approx?: boolean; ruin?: boolean },
) {
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
    ruin: extra?.ruin,
  });
  return true;
}

export interface CivRegionResult {
  roads: number;
  settlements: number;
  structures: number;
  farms: number;
  center: { lx: number; lz: number };
  placeName: string;
  countryName: string;
  year: number;
}

export function generateCivRegion(
  world: WorldProject,
  country: CountryRec,
  place: RealPlace | null,
  opts: { radius: number; roads: boolean; settlements: boolean; structures: boolean },
): CivRegionResult {
  const atlas = peekCountries();
  const cap = place ?? (atlas ? primaryCapital(atlas, country.iso) : null);
  const centerLon = cap?.lon ?? country.lx;
  const centerLat = cap?.lat ?? country.ly;
  const loc = localFromLonLat(world, centerLon, centerLat);
  const land = landNear(world, loc.lx, loc.lz, 48) ?? loc;
  const radius = Math.max(96, Math.min(2048, Math.round(opts.radius)));
  const tag = `${CIV_PREFIX}${country.iso}:`;
  const year = world.year ?? 2026;
  const infra = eraInfrastructure(year);
  const seed = Number(world.settings.seed & 0xffffffffn) | 0;

  world.structures = world.structures.filter((s) => !s.realId?.startsWith(tag));

  const inR = (lx: number, lz: number) => Math.hypot(lx - land.lx, lz - land.lz) <= radius;

  let roads = 0;
  let settlements = 0;
  let structures = 0;
  let farms = 0;

  const nodes: Array<{ lx: number; lz: number; place: RealPlace; rank: number }> = [];
  if (atlas) {
    const list = placesForCountry(atlas, country.iso);
    for (const p of list) {
      const life = placeInYear(p, year);
      if (!life.exists) continue;
      const at = localForPlace(world, p);
      if (!inR(at.lx, at.lz)) continue;
      nodes.push({
        lx: at.lx,
        lz: at.lz,
        place: p,
        rank: p.group === "capital" ? 3 : p.group === "city" ? 2 : 1,
      });
    }
  }
  if (!nodes.length && cap) {
    nodes.push({ lx: land.lx, lz: land.lz, place: cap, rank: 3 });
  }

  const roadBlock = infra.highway ? SMOOTH : DIRT_PATH;
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
        const a = hubs[0]!;
        const b = hubs[i]!;
        paintRoad(world, a.lx, a.lz, b.lx, b.lz, 1, GRAVEL);
        roads += 1;
      }
    }
  }

  if (infra.farms) {
    paintFarms(world, land.lx, land.lz, Math.round(40 * infra.farmRadius), seed + 21);
    farms += 1;
    for (const n of nodes) {
      if (n.rank >= 2) {
        paintFarms(world, n.lx, n.lz, Math.round(22 * infra.farmRadius), seed + 44);
        farms += 1;
      }
    }
  }

  if (opts.settlements) {
    const hubKind: StructureKind =
      cap && cap.group === "capital" ? "capital" : year < 1700 ? "village" : year < 1930 ? "city" : "city";
    if (stamp(world, hubKind, land.lx, land.lz, cap?.name ?? country.short, `${tag}hub`, { year })) settlements += 1;
    if (year >= 1700) {
      stamp(world, year >= 1860 ? "palace" : "house", land.lx + 18, land.lz - 16, `${country.short} civic hall`, `${tag}palace`, { year });
      settlements += 1;
    } else {
      stamp(world, "temple", land.lx + 14, land.lz - 12, `${country.short} shrine`, `${tag}temple`, { year, approx: true });
      settlements += 1;
    }
    stamp(world, "village", land.lx - 28, land.lz + 22, `${country.short} quarter`, `${tag}village`, { year });
    settlements += 1;
    const houseN = Math.min(year < 1700 ? 10 : year < 1860 ? 18 : 36, 6 + Math.floor(radius / (year < 1860 ? 70 : 40)));
    for (let i = 0; i < houseN; i++) {
      const ang = hash2(land.lx + i, land.lz, seed + 9) * Math.PI * 2;
      const dist = 22 + hash2(i, land.lz, seed + 11) * Math.min(90, radius * 0.35);
      const hx = Math.round(land.lx + Math.cos(ang) * dist);
      const hz = Math.round(land.lz + Math.sin(ang) * dist);
      if (!inR(hx, hz)) continue;
      if (stamp(world, "house", hx, hz, "House", `${tag}house:${i}`, { year })) settlements += 1;
    }
    for (const n of nodes) {
      if (n.place.group === "city" && n.rank === 2) {
        const life = placeInYear(n.place, year);
        if (stamp(world, life.kind, n.lx, n.lz, life.name, `${tag}city:${n.place.name}`, { year, approx: life.approx, ruin: life.ruin })) {
          settlements += 1;
        }
      }
    }
  }

  if (opts.structures && atlas) {
    for (const p of placesForCountry(atlas, country.iso)) {
      if (p.group === "city" || p.group === "capital") continue;
      const life = placeInYear(p, year);
      if (!life.exists) continue;
      const at = localForPlace(world, p);
      if (!inR(at.lx, at.lz)) continue;
      const placed = placeOneReal(world, p);
      if (placed) structures += 1;
    }
  }

  return {
    roads,
    settlements,
    structures,
    farms,
    center: land,
    placeName: cap?.name ?? country.short,
    countryName: country.name,
    year,
  };
}

export function countryPlacesList(iso: string): { capitals: RealPlace[]; cities: RealPlace[]; landmarks: RealPlace[] } {
  const atlas = peekCountries();
  if (!atlas) return { capitals: [], cities: [], landmarks: [] };
  const all = placesForCountry(atlas, iso);
  return {
    capitals: all.filter((p) => p.group === "capital"),
    cities: all.filter((p) => p.group === "city" || p.group === "capital"),
    landmarks: all.filter((p) => p.group === "landmark"),
  };
}

export { realPlaceId };
