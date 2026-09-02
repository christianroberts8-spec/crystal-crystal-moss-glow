import { lonLatToScreen } from "./countries";
import { eraInfrastructure, placeInYear } from "./placeYears";
import { REAL_PLACES } from "./realPlaces";
import type { WorldProject } from "./types";

/**
 * Whole-Earth era overlay: farms around settlements, roads/rail between cities.
 * Virtual — not stored as Minecraft blocks. Stamped into chunks only when a region is generated.
 */
export function drawEraOverlay(
  ctx: CanvasRenderingContext2D,
  world: WorldProject,
  year: number,
  originPxX: number,
  originPxZ: number,
  cell: number,
  cssW: number,
  cssH: number,
  opts: { farms: boolean; roads: boolean },
) {
  const infra = eraInfrastructure(year);
  const cities: Array<{ lon: number; lat: number; rank: number; px: number; pz: number }> = [];
  for (const p of REAL_PLACES) {
    if (p.group === "landmark") continue;
    const st = placeInYear(p, year);
    if (!st.exists || st.ruin) continue;
    const { px, pz } = lonLatToScreen(world, p.lon, p.lat, originPxX, originPxZ, cell);
    if (px < -40 || pz < -40 || px > cssW + 40 || pz > cssH + 40) continue;
    cities.push({ lon: p.lon, lat: p.lat, rank: p.group === "capital" ? 2 : 1, px, pz });
  }
  if (opts.farms && infra.farms && cell > 0.00015) {
    ctx.save();
    for (const c of cities) {
      const r = (c.rank === 2 ? 18 : 10) * infra.farmRadius * Math.max(3, Math.min(28, 4000 * cell));
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
    const a = cities[i]!;
    let best: { j: number; d: number } | null = null;
    let second: { j: number; d: number } | null = null;
    for (let j = i + 1; j < cities.length; j++) {
      const b = cities[j]!;
      const d = Math.hypot(a.lon - b.lon, a.lat - b.lat);
      if (d > maxDist || d < 0.15) continue;
      if (!best || d < best.d) {
        second = best;
        best = { j, d };
      } else if (!second || d < second.d) second = { j, d };
    }
    const links = [best, second].filter(Boolean) as { j: number; d: number }[];
    for (const L of links) {
      const b = cities[L.j]!;
      const rail = infra.rail && a.rank + b.rank >= 3 && L.d > 1.5;
      ctx.strokeStyle = rail ? "rgba(90, 84, 72, 0.55)" : "rgba(120, 100, 64, 0.4)";
      ctx.lineWidth = rail ? 1.4 : infra.highway ? 1.15 : 0.8;
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

/** Development 0–1 used when generating a playable region (farms, road width). */
export function developmentAt(year: number, lon: number, lat: number): number {
  const infra = eraInfrastructure(year);
  let d = infra.cityLight * 0.35;
  if (year <= 100) {
    const roman = lon > -10 && lon < 42 && lat > 30 && lat < 55;
    const han = lon > 95 && lon < 125 && lat > 20 && lat < 42;
    const india = lon > 68 && lon < 90 && lat > 8 && lat < 32;
    if (roman || han || india) d = 0.7;
  } else if (year < 1860) {
    if (lon > -10 && lon < 40 && lat > 35 && lat < 60) d = 0.75;
    if (lon > 100 && lon < 125 && lat > 20 && lat < 42) d = 0.7;
  } else if (year < 1962) {
    if (lat > 25 && ((lon > -10 && lon < 40) || (lon > -100 && lon < -70))) d = 0.85;
  } else d = 0.95;
  return Math.max(0.15, Math.min(1, d * infra.farmRadius + 0.05));
}
