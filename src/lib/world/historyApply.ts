import { placeInYear } from "./placeYears";
import { REAL_PLACES } from "./realPlaces";
import { placeRealWorld } from "./placeReal";
import { clampDateYear } from "./history";
import type { StructurePlacement, WorldProject } from "./types";

export interface ApplyYearResult {
  year: number;
  placed: number;
  skipped: number;
  keptManual: number;
}

export function structuresForYear(world: WorldProject, year: number): StructurePlacement[] {
  const y = clampDateYear(year);
  const keepManual = world.keepManualAcrossYears !== false;
  const kept: StructurePlacement[] = [];
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
export function applyTimelineYear(world: WorldProject, year: number, month?: number, day?: number): ApplyYearResult {
  const y = clampDateYear(year);
  const kept = structuresForYear(world, y);
  const keptManual = kept.length;
  world.year = y;
  if (month != null) world.month = month;
  if (day != null) world.day = day;
  world.structures = kept;
  const { placed, skipped } = placeRealWorld(world, { year: y });
  return { year: y, placed, skipped, keptManual };
}

export function countInYear(year: number): { landmarks: number; cities: number; ruins: number } {
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
  return { landmarks, cities, ruins };
}
