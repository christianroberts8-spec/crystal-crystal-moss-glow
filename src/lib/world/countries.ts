import { localFromLonLat, lonLatFromLocal } from "./earth";
import { REAL_PLACES, type RealPlace } from "./realPlaces";
import type { WorldProject } from "./types";

export interface CountryRec {
  iso: string;
  iso2: string;
  name: string;
  short: string;
  admin: string;
  continent: string;
  lx: number;
  ly: number;
  bbox: [number, number, number, number];
  rings: number[][];
}

export interface CountryAtlas {
  countries: CountryRec[];
  byIso: Map<string, CountryRec>;
  byName: Map<string, CountryRec>;
  fill: HTMLCanvasElement;
  id: Uint16Array;
  w: number;
  h: number;
}

const RW = 2048;
const RH = 1024;

const ALIASES: Record<string, string> = {
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
  "papua new guinea": "PNG",
};

export function normName(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

let cached: CountryAtlas | null = null;
let inflight: Promise<CountryAtlas> | null = null;

export function peekCountries(): CountryAtlas | null {
  return cached;
}

export async function loadCountries(): Promise<CountryAtlas> {
  if (cached) return cached;
  if (inflight) return inflight;
  inflight = (async () => {
    const res = await fetch("/countries-110m.json");
    if (!res.ok) throw new Error("Could not load country borders.");
    const raw = (await res.json()) as { countries: CountryRec[] };
    const countries = raw.countries;
    const byIso = new Map<string, CountryRec>();
    const byName = new Map<string, CountryRec>();
    const index = (key: string, c: CountryRec) => {
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
    for (let i = 0; i < countries.length; i++) fillCountry(id, countries[i]!, i + 1);
    const fill = colorize(id, countries);
    cached = { countries, byIso, byName, fill, id, w: RW, h: RH };
    return cached;
  })();
  try {
    return await inflight;
  } finally {
    inflight = null;
  }
}

export function matchCountry(atlas: CountryAtlas, name: string): CountryRec | null {
  const n = normName(name);
  if (!n) return null;
  return atlas.byName.get(n) ?? atlas.byIso.get(name.toUpperCase()) ?? null;
}

export function searchCountries(atlas: CountryAtlas, q: string, continent = "all"): CountryRec[] {
  const t = normName(q);
  const out: CountryRec[] = [];
  for (const c of atlas.countries) {
    if (continent !== "all" && c.continent !== continent) continue;
    if (
      t &&
      !normName(c.name).includes(t) &&
      !normName(c.short).includes(t) &&
      !normName(c.admin).includes(t) &&
      !c.iso.toLowerCase().includes(t) &&
      !c.iso2.toLowerCase().includes(t)
    ) {
      continue;
    }
    out.push(c);
  }
  return out;
}

export function countryAtLonLat(atlas: CountryAtlas, lon: number, lat: number): CountryRec | null {
  let x = ((lon + 180) / 360) * atlas.w;
  const y = ((90 - lat) / 180) * atlas.h;
  while (x < 0) x += atlas.w;
  while (x >= atlas.w) x -= atlas.w;
  const ix = Math.min(atlas.w - 1, Math.max(0, Math.floor(x)));
  const iy = Math.min(atlas.h - 1, Math.max(0, Math.floor(y)));
  const n = atlas.id[ix + iy * atlas.w] ?? 0;
  if (!n) return null;
  return atlas.countries[n - 1] ?? null;
}

export function countryColor(iso: string): [number, number, number] {
  let h = 2166136261;
  for (let i = 0; i < iso.length; i++) h = Math.imul(h ^ iso.charCodeAt(i), 16777619);
  const hue = (h >>> 0) % 360;
  return hsl(hue, 0.42, 0.5);
}

export function placesForCountry(atlas: CountryAtlas, iso: string): RealPlace[] {
  const c = atlas.byIso.get(iso);
  if (!c) return [];
  return REAL_PLACES.filter((p) => matchCountry(atlas, p.country)?.iso === c.iso);
}

export function capitalsFor(atlas: CountryAtlas, iso: string): RealPlace[] {
  return placesForCountry(atlas, iso).filter((p) => p.group === "capital");
}

export function citiesFor(atlas: CountryAtlas, iso: string): RealPlace[] {
  return placesForCountry(atlas, iso).filter((p) => p.group === "city" || p.group === "capital");
}

export function primaryCapital(atlas: CountryAtlas, iso: string): RealPlace | null {
  const caps = capitalsFor(atlas, iso);
  if (!caps.length) {
    const cities = citiesFor(atlas, iso);
    return cities[0] ?? null;
  }
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
  if (c) {
    const near = [...caps].sort(
      (a, b) => Math.hypot(a.lon - c.lx, a.lat - c.ly) - Math.hypot(b.lon - c.lx, b.lat - c.ly),
    );
    return near[0]!;
  }
  return caps[0]!;
}

export function viewForCountry(
  world: WorldProject,
  country: CountryRec,
  cssW = 640,
  cssH = 420,
): { x: number; z: number; zoom: number } {
  const [minLon, minLat, maxLon, maxLat] = country.bbox;
  const a = localFromLonLat(world, minLon, maxLat);
  const b = localFromLonLat(world, maxLon, minLat);
  const x0 = Math.min(a.lx, b.lx);
  const x1 = Math.max(a.lx, b.lx);
  const z0 = Math.min(a.lz, b.lz);
  const z1 = Math.max(a.lz, b.lz);
  const w = Math.max(48, x1 - x0);
  const d = Math.max(48, z1 - z0);
  const zoom = Math.max(1e-8, Math.min(24, Math.min(cssW / w, cssH / d) * 0.78));
  return { x: (x0 + x1) / 2, z: (z0 + z1) / 2, zoom };
}

export const CONTINENTS = ["Africa", "Asia", "Europe", "North America", "South America", "Oceania", "Antarctica"] as const;

function hsl(h: number, s: number, l: number): [number, number, number] {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0,
    g = 0,
    b = 0;
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  return [Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255)];
}

function lonToX(lon: number): number {
  let x = ((lon + 180) / 360) * RW;
  while (x < 0) x += RW;
  while (x >= RW) x -= RW;
  return x;
}

function latToY(lat: number): number {
  return Math.max(0, Math.min(RH - 1, ((90 - lat) / 180) * RH));
}

function fillCountry(id: Uint16Array, c: CountryRec, cid: number) {
  for (const ring of c.rings) fillRing(id, ring, cid);
}

function fillRing(id: Uint16Array, ring: number[], cid: number) {
  const n = (ring.length / 2) | 0;
  if (n < 3) return;
  const xs = new Float32Array(n);
  const ys = new Float32Array(n);
  let minY = RH,
    maxY = 0;
  for (let i = 0; i < n; i++) {
    xs[i] = lonToX(ring[i * 2]!);
    ys[i] = latToY(ring[i * 2 + 1]!);
    if (ys[i]! < minY) minY = ys[i]!;
    if (ys[i]! > maxY) maxY = ys[i]!;
  }
  const y0 = Math.max(0, Math.floor(minY));
  const y1 = Math.min(RH - 1, Math.ceil(maxY));
  const hits = new Float32Array(n);
  for (let y = y0; y <= y1; y++) {
    const yMid = y + 0.5;
    let nh = 0;
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      let x0 = xs[i]!,
        yA = ys[i]!,
        x1 = xs[j]!,
        yB = ys[j]!;
      if (Math.abs(x1 - x0) > RW * 0.5) continue;
      if (yA > yB) {
        const tx = x0,
          ty = yA;
        x0 = x1;
        yA = yB;
        x1 = tx;
        yB = ty;
      }
      if (yMid < yA || yMid >= yB || yB === yA) continue;
      hits[nh++] = x0 + ((yMid - yA) / (yB - yA)) * (x1 - x0);
    }
    hits.subarray(0, nh).sort();
    for (let k = 0; k + 1 < nh; k += 2) {
      let a = Math.ceil(hits[k]!);
      let b = Math.floor(hits[k + 1]!);
      if (a < 0) a = 0;
      if (b >= RW) b = RW - 1;
      const row = y * RW;
      for (let x = a; x <= b; x++) id[row + x] = cid;
    }
  }
}

function colorize(id: Uint16Array, countries: CountryRec[]): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = RW;
  c.height = RH;
  const ctx = c.getContext("2d");
  if (!ctx) return c;
  const img = ctx.createImageData(RW, RH);
  const data = img.data;
  for (let i = 0; i < id.length; i++) {
    const n = id[i]!;
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

export function lonLatToScreen(
  world: WorldProject,
  lon: number,
  lat: number,
  originPxX: number,
  originPxZ: number,
  cell: number,
): { px: number; pz: number } {
  const { lx, lz } = localFromLonLat(world, lon, lat);
  return { px: originPxX + (lx + 0.5) * cell, pz: originPxZ + (lz + 0.5) * cell };
}

export function drawCountryOverlay(
  ctx: CanvasRenderingContext2D,
  world: WorldProject,
  atlas: CountryAtlas,
  originPxX: number,
  originPxZ: number,
  cell: number,
  cssW: number,
  cssH: number,
  opts: { fill: boolean; borders: boolean; names: boolean; selectedIso: string | null },
) {
  if (opts.fill) {
    ctx.save();
    ctx.globalAlpha = 0.38;
    ctx.imageSmoothingEnabled = cell < 2;
    ctx.drawImage(atlas.fill, 0, 0, atlas.w, atlas.h, originPxX, originPxZ, world.width * cell, world.depth * cell);
    ctx.restore();
  }

  const selected = opts.selectedIso ? atlas.byIso.get(opts.selectedIso) : null;
  if (selected) {
    ctx.save();
    ctx.globalAlpha = 0.28;
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
      ctx.lineWidth = on ? Math.max(2.2, cell * 0.00000008 + 2.2) : Math.max(0.7, Math.min(1.6, 0.9 + cell * 40));
      for (const ring of c.rings) {
        pathRing(ctx, world, ring, originPxX, originPxZ, cell);
        ctx.stroke();
      }
    }
  }

  if (opts.names) {
    const labels: Array<{ c: CountryRec; px: number; pz: number; area: number }> = [];
    for (const c of atlas.countries) {
      if (!bboxVisible(world, c, originPxX, originPxZ, cell, cssW, cssH)) continue;
      const [minLon, minLat, maxLon, maxLat] = c.bbox;
      const area = Math.max(0.01, (maxLon - minLon) * (maxLat - minLat));
      const { px, pz } = lonLatToScreen(world, c.lx, c.ly, originPxX, originPxZ, cell);
      if (px < 8 || pz < 8 || px > cssW - 8 || pz > cssH - 8) continue;
      labels.push({ c, px, pz, area });
    }
    labels.sort((a, b) => b.area - a.area);
    const max = cell < 0.0002 ? 18 : cell < 0.002 ? 28 : 40;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    let n = 0;
    for (const lab of labels) {
      const on = selected?.iso === lab.c.iso;
      if (!on && n >= max) continue;
      if (!on && lab.area < 8 && cell < 0.001) continue;
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

function bboxVisible(
  world: WorldProject,
  c: CountryRec,
  originPxX: number,
  originPxZ: number,
  cell: number,
  cssW: number,
  cssH: number,
): boolean {
  const [minLon, minLat, maxLon, maxLat] = c.bbox;
  const a = lonLatToScreen(world, minLon, maxLat, originPxX, originPxZ, cell);
  const b = lonLatToScreen(world, maxLon, minLat, originPxX, originPxZ, cell);
  const x0 = Math.min(a.px, b.px);
  const x1 = Math.max(a.px, b.px);
  const z0 = Math.min(a.pz, b.pz);
  const z1 = Math.max(a.pz, b.pz);
  return x1 >= -20 && z1 >= -20 && x0 <= cssW + 20 && z0 <= cssH + 20;
}

function pathRing(
  ctx: CanvasRenderingContext2D,
  world: WorldProject,
  ring: number[],
  originPxX: number,
  originPxZ: number,
  cell: number,
) {
  ctx.beginPath();
  const n = (ring.length / 2) | 0;
  let started = false;
  let prevLon = 0;
  for (let i = 0; i < n; i++) {
    const lon = ring[i * 2]!;
    const lat = ring[i * 2 + 1]!;
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

export function countryAtLocal(world: WorldProject, atlas: CountryAtlas, lx: number, lz: number): CountryRec | null {
  const { lon, lat } = lonLatFromLocal(world, lx, lz);
  return countryAtLonLat(atlas, lon, lat);
}
