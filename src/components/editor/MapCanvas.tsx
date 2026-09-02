import { useEffect, useRef } from "react";
import { BIOMES } from "@/lib/world/biomes";
import { BLOCK_BY_ID } from "@/lib/world/blocks";
import { localX, localZ, worldX, worldZ } from "@/lib/world/grid";
import { readColumn } from "@/lib/world/column";
import { lonLatFromLocal, peekEarthRaster } from "@/lib/world/earth";
import { countryAtLocal, drawCountryOverlay, peekCountries } from "@/lib/world/countries";
import { drawEraOverlay } from "@/lib/world/eraVisual";
import { clampYear } from "@/lib/world/history";
import { buildPolityView, drawPolityOverlay, polityAtLonLat } from "@/lib/world/polities";
import { useEditor } from "@/lib/store";
import type { RectSnap } from "@/lib/world/grid";
import type { WorldProject, StructurePlacement } from "@/lib/world/types";

function cellSize(world: WorldProject, zoom: number, cssW: number, cssH: number) {
  const fit = Math.min(cssW / Math.max(1, world.width), cssH / Math.max(1, world.depth));
  const min = Math.max(1e-8, fit * 0.55);
  return Math.max(min, Math.min(64, zoom));
}

function colorColumn(h: number, water: number, surface: number, biome: number, hx: number, hz: number): [number, number, number] {
  const slope = (h - hx) * 0.04 + (h - hz) * 0.08;
  const shade = Math.max(0.55, Math.min(1.25, 1 + slope));
  let r: number, g: number, b: number;
  if (water) {
    const depth = Math.max(0, 63 - h);
    r = 28 + depth * 0.4;
    g = 72 + depth * 0.2;
    b = 140 + Math.min(40, depth);
  } else {
    const blk = BLOCK_BY_ID[surface] ?? BLOCK_BY_ID[4]!;
    const bio = BIOMES[biome] ?? BIOMES[0]!;
    r = blk.color[0] * 0.72 + bio.color[0] * 0.28;
    g = blk.color[1] * 0.72 + bio.color[1] * 0.28;
    b = blk.color[2] * 0.72 + bio.color[2] * 0.28;
  }
  const elev = Math.max(0, Math.min(1, (h + 20) / 180));
  r *= shade * (0.75 + elev * 0.35);
  g *= shade * (0.75 + elev * 0.35);
  b *= shade * (0.75 + elev * 0.35);
  return [Math.max(0, Math.min(255, r)), Math.max(0, Math.min(255, g)), Math.max(0, Math.min(255, b))];
}

let earthOv: HTMLCanvasElement | null = null;
function earthOverview(): HTMLCanvasElement | null {
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
    const land = raster.land[i]!;
    const e = raster.elev[i]!;
    let r: number, g: number, b: number;
    if (land > 127) {
      if (e > 200) {
        r = g = b = 230;
      } else if (e > 170) {
        r = 140;
        g = 130;
        b = 110;
      } else if (e > 155) {
        r = 90;
        g = 120;
        b = 70;
      } else {
        r = 50 + e * 0.15;
        g = 90 + e * 0.35;
        b = 40 + e * 0.08;
      }
    } else {
      const depth = Math.max(0, 143 - e);
      r = 12;
      g = 36 + Math.max(0, 28 - depth * 0.2);
      b = 100 + Math.min(70, depth * 0.4);
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

function pinColor(s: StructurePlacement): string {
  if (s.ruin) return "#8a8474";
  switch (s.kind) {
    case "capital":
      return "#e6eadc";
    case "city":
    case "village":
      return "#d4a84a";
    case "skyscraper":
      return "#9aa48c";
    case "pyramid":
    case "temple":
      return "#c4a15a";
    case "tower":
      return "#c8d0c4";
    case "statue":
      return "#f2efe4";
    case "bridge":
      return "#c47a3a";
    case "wall":
      return "#8a8474";
    case "palace":
      return "#efe6c8";
    case "monument":
      return "#e0c060";
    case "castle":
      return "#a8a090";
    default:
      return "#c4a15a";
  }
}

function pinRank(s: StructurePlacement): number {
  if (s.kind === "city" || s.kind === "village") return 0;
  if (s.kind === "capital") return 1;
  return 2;
}

function pinSize(s: StructurePlacement, cell: number): number {
  const rank = pinRank(s);
  if (cell < 0.4) return rank === 0 ? 1.2 : rank === 1 ? 1.8 : 2.2;
  if (cell < 2) return rank === 0 ? 2 : rank === 1 ? 3 : 3.6;
  return rank === 0 ? 3.5 : rank === 1 ? 5 : 6;
}

export function MapCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
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
  const epoch = useEditor(
    (s) =>
      (s.undoStack.length + 1) * 1000 +
      s.redoStack.length +
      (s.world?.structures.length ?? 0) +
      (s.world?.entities.length ?? 0) +
      (s.world?.year ?? 2026) +
      (s.layers.terrain ? 1 : 0) +
      (s.layers.countries ? 2 : 0) +
      (s.layers.borders ? 4 : 0) +
      (s.layers.cities ? 8 : 0) +
      (s.layers.roads ? 16 : 0) +
      (s.layers.structures ? 32 : 0) +
      (s.selectedCountryIso ? s.selectedCountryIso.charCodeAt(0) : 0),
  );

  const stroke = useRef<RectSnap | null>(null);
  const panning = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);
  const pointers = useRef<Map<number, { x: number; y: number }>>(new Map());
  const pinch = useRef<{ dist: number; zoom: number } | null>(null);
  const selecting = useRef<null | { x: number; z: number }>(null);
  const raster = useRef<HTMLCanvasElement | null>(null);
  const dirty = useRef(true);

  useEffect(() => {
    dirty.current = true;
  }, [world, epoch]);

  useEffect(() => {
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
        if (ov) {
          ctx.drawImage(ov, 0, 0, ov.width, ov.height, originPxX, originPxZ, world.width * cell, world.depth * cell);
        } else {
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
        for (let z = 0; z < world.depth; z++) {
          for (let x = 0; x < world.width; x++) {
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
        }
        octx.putImageData(img, 0, 0);
        raster.current = off;
        dirty.current = false;
      }

      if (!world.virtual && raster.current) {
        ctx.drawImage(
          raster.current,
          0,
          0,
          world.width,
          world.depth,
          originPxX,
          originPxZ,
          world.width * cell,
          world.depth * cell,
        );
      }
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
          selectedPolity: selectedPolityId,
        });
      } else if (atlas && (layers.countries || layers.borders)) {
        drawCountryOverlay(ctx, world, atlas, originPxX, originPxZ, cell, cssW, cssH, {
          fill: layers.countries,
          borders: layers.borders,
          names: layers.countries || layers.borders,
          selectedIso: selectedCountryIso,
        });
      }

      if (world.terrainKind === "earth" && (layers.roads || layers.cities)) {
        drawEraOverlay(ctx, world, year, originPxX, originPxZ, cell, cssW, cssH, {
          farms: layers.cities,
          roads: layers.roads,
        });
      }

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
      const spx = originPxX + (sx + 0.5) * cell;
      const spz = originPxZ + (sz + 0.5) * cell;
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
        if (
          s.kind !== "road" &&
          s.kind !== "city" &&
          s.kind !== "capital" &&
          s.kind !== "village" &&
          !layers.structures
        ) {
          continue;
        }
        const lx = localX(world, s.x);
        const lz = localZ(world, s.z);
        const px = originPxX + (lx + 0.5) * cell;
        const pz = originPxZ + (lz + 0.5) * cell;
        if (px < -8 || pz < -8 || px > cssW + 8 || pz > cssH + 8) continue;
        const sz = pinSize(s, cell);
        ctx.fillStyle = pinColor(s);
        ctx.beginPath();
        ctx.arc(px, pz, sz, 0, Math.PI * 2);
        ctx.fill();
        const landmark = pinRank(s) >= 2 || Boolean(s.ruin);
        const label = s.ruin && s.name ? `${s.name} (ruin)` : s.name;
        const showLabel =
          label &&
          labels < 40 &&
          ((landmark && cell >= 3) || (!landmark && cell >= 10));
        if (showLabel && label) {
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
        const px = originPxX + (localX(world, e.x) + 0.5) * cell;
        const pz = originPxZ + (localZ(world, e.z) + 0.5) * cell;
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
  }, [world, view, selection, tool, step, layers, selectedCountryIso, selectedPolityId, mapEpoch, epoch]);

  function locFromEvent(e: { clientX: number; clientY: number }) {
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
    return { lx, lz };
  }

  function hoverAt(lx: number, lz: number) {
    if (!world) return;
    const col = readColumn(world, lx, lz);
    const bio = BIOMES[col.biome] ?? BIOMES[0]!;
    const blk = BLOCK_BY_ID[col.surface] ?? BLOCK_BY_ID[4]!;
    const wrap = wrapRef.current;
    let structure: string | undefined;
    let built: number | undefined;
    let approx: boolean | undefined;
    let ruin: boolean | undefined;
    const atlas = peekCountries();
    if (wrap && world.structures.length) {
      const cssW = wrap.clientWidth;
      const cssH = wrap.clientHeight;
      const cell = cellSize(world, view.zoom, cssW, cssH);
      const originPxX = cssW / 2 - view.x * cell;
      const originPxZ = cssH / 2 - view.z * cell;
      const hx = originPxX + (lx + 0.5) * cell;
      const hz = originPxZ + (lz + 0.5) * cell;
      let best = 14;
      for (const s of world.structures) {
        const px = originPxX + (localX(world, s.x) + 0.5) * cell;
        const pz = originPxZ + (localZ(world, s.z) + 0.5) * cell;
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
    let country: string | undefined;
    if (atlas) {
      if (world.terrainKind === "earth") {
        const { lon, lat } = lonLatFromLocal(world, lx, lz);
        const hit = polityAtLonLat(atlas, year, lon, lat);
        country = hit.polity.id === "empty" ? undefined : hit.polity.name;
        if (hit.polity.disputed && country) country = `${country} · disputed`;
      } else {
        country = countryAtLocal(world, atlas, lx, lz)?.name;
      }
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
      year: world.terrainKind === "earth" ? year : undefined,
      built,
      approx,
      ruin,
    });
  }

  function onPointerDown(e: React.PointerEvent) {
    if (!world) return;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.current.size === 2) {
      const pts = [...pointers.current.values()];
      const dist = Math.hypot(pts[0]!.x - pts[1]!.x, pts[0]!.y - pts[1]!.y);
      pinch.current = { dist, zoom: view.zoom };
      panning.current = false;
      return;
    }
    const pan = e.button === 1 || e.button === 2 || tool === "pan" || e.shiftKey || step === "create";
    if (pan) {
      panning.current = true;
      last.current = { x: e.clientX, y: e.clientY };
      return;
    }
    const loc = locFromEvent(e);
    if (!loc) return;
    hoverAt(loc.lx, loc.lz);
    if (step === "countries") {
      pickCountryAt(loc.lx, loc.lz);
      return;
    }
    if (tool === "select" || (step === "map" && e.altKey)) {
      selecting.current = { x: loc.lx, z: loc.lz };
      setSelection({ x0: loc.lx, z0: loc.lz, x1: loc.lx, z1: loc.lz });
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

  function onPointerMove(e: React.PointerEvent) {
    if (!world) return;
    if (pointers.current.has(e.pointerId)) pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.current.size === 2 && pinch.current) {
      const pts = [...pointers.current.values()];
      const dist = Math.hypot(pts[0]!.x - pts[1]!.x, pts[0]!.y - pts[1]!.y);
      const wrap = wrapRef.current;
      const cssW = wrap?.clientWidth ?? 800;
      const cssH = wrap?.clientHeight ?? 500;
      const fit = world ? Math.min(cssW / world.width, cssH / world.depth) : 0.25;
      const z = Math.max(fit * 0.5, Math.min(64, pinch.current.zoom * (dist / pinch.current.dist)));
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
        z: view.z - (e.clientY - last.current.y) / cell,
      });
      last.current = { x: e.clientX, y: e.clientY };
      return;
    }
    if (selecting.current && loc) {
      setSelection({ x0: selecting.current.x, z0: selecting.current.z, x1: loc.lx, z1: loc.lz });
      return;
    }
    if (stroke.current && loc && e.buttons) {
      applyBrush(loc.lx, loc.lz);
      dirty.current = true;
    }
  }

  function onPointerUp(e: React.PointerEvent) {
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

  function onWheel(e: React.WheelEvent) {
    e.preventDefault();
    const wrap = wrapRef.current;
    const cssW = wrap?.clientWidth ?? 800;
    const cssH = wrap?.clientHeight ?? 500;
    const fit = world ? Math.min(cssW / world.width, cssH / world.depth) : 0.25;
    const z = view.zoom * (e.deltaY > 0 ? 0.9 : 1.1);
    setView({ zoom: Math.max(fit * 0.5, Math.min(64, z)) });
  }

  return (
    <div
      ref={wrapRef}
      className="relative h-full min-h-0 w-full overflow-hidden bg-bg touch-none"
      onContextMenu={(e) => e.preventDefault()}
    >
      <canvas
        ref={canvasRef}
        className="block h-full w-full cursor-crosshair"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onWheel={onWheel}
      />
    </div>
  );
}
