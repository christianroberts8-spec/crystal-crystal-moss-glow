import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Building2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Copy,
  Crosshair,
  Download,
  Eraser,
  Eye,
  Flag,
  Globe2,
  Landmark,
  Layers,
  MapPin,
  Mountain,
  PaintBucket,
  Redo2,
  RotateCw,
  Route,
  Save,
  Search,
  Square,
  Trees,
  Undo2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { downloadBlob, exportMcworld } from "@/lib/bedrock/mcworld";
import { validateMcworldBlob } from "@/lib/bedrock/validate";
import { useEditor } from "@/lib/store";
import { BIOMES } from "@/lib/world/biomes";
import { BLOCKS } from "@/lib/world/blocks";
import { EARTH_REGIONS } from "@/lib/world/earth";
import { fmtBlocks, WORKFLOW, type OverlayLayer, type TerrainPreset, type Tool } from "@/lib/world/types";
import { lastMeta } from "@/lib/persist";
import { ENTITY_TYPES } from "@/lib/world/structures";
import { CITY_COUNT, LANDMARK_COUNT, realPlaceId, searchRealPlaces, type PlaceGroup } from "@/lib/world/realPlaces";
import {
  CONTINENTS,
  loadCountries,
  peekCountries,
  placesForCountry,
  primaryCapital,
  searchCountries,
  type CountryRec,
} from "@/lib/world/countries";
import { CreateScreen } from "./CreateScreen";
import { MapCanvas } from "./MapCanvas";
import { TimelineBar, YearChips, DateEventList } from "./TimelineBar";
import { cn } from "@/lib/utils";
import { clampDateYear, clampDay, clampMonth, fmtDate, fmtDateShort, fmtYear, yearInfo } from "@/lib/world/history";
import { countInYear } from "@/lib/world/historyApply";
import { placeInYear } from "@/lib/world/placeYears";
import { searchPolities, uniquePolities } from "@/lib/world/polities";

const MAP_TOOLS: { id: Tool; label: string; icon: typeof Mountain }[] = [
  { id: "pan", label: "Pan", icon: Eye },
  { id: "raise", label: "Raise", icon: Mountain },
  { id: "lower", label: "Lower", icon: Mountain },
  { id: "smooth", label: "Smooth", icon: Layers },
  { id: "flatten", label: "Flatten", icon: Square },
  { id: "paint-block", label: "Block", icon: PaintBucket },
  { id: "paint-biome", label: "Biome", icon: Trees },
  { id: "water", label: "Water", icon: Layers },
  { id: "eyedropper", label: "Pick", icon: Eye },
  { id: "select", label: "Select", icon: Square },
];

const TERRAIN_PRESETS: { id: TerrainPreset; label: string }[] = [
  { id: "continents", label: "Continents" },
  { id: "islands", label: "Islands" },
  { id: "archipelago", label: "Archipelago" },
  { id: "oceans", label: "Oceans" },
  { id: "mountains", label: "Mountains" },
  { id: "inland", label: "Inland" },
  { id: "mixed", label: "Mixed" },
  { id: "flat", label: "Flat" },
  { id: "earth", label: "Earth" },
];

export function EditorApp() {
  const world = useEditor((s) => s.world);
  const step = useEditor((s) => s.step);
  const setStep = useEditor((s) => s.setStep);
  const toast = useEditor((s) => s.toast);
  const busy = useEditor((s) => s.busy);
  const persist = useEditor((s) => s.persist);
  const setToast = useEditor((s) => s.setToast);

  useEffect(() => {
    useEditor.setState({ lastMeta: lastMeta() });
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2800);
    return () => clearTimeout(t);
  }, [toast, setToast]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
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
        void st.persist();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!world || step === "create") {
    return (
      <div className="min-h-dvh bg-bg">
        <CreateScreen />
        {busy ? <BusyBanner text={busy} /> : null}
      </div>
    );
  }

  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-bg text-fg">
      <TopBar />
      <WorkflowBar />
      <TimelineBar />
      <div className="flex min-h-0 flex-1 flex-col md:flex-row">
        <aside className="order-2 h-[36vh] min-h-0 shrink-0 overflow-y-auto border-t border-border md:order-1 md:h-auto md:w-80 md:border-t-0 md:border-r lg:w-96">
          <SidePanel />
        </aside>
        <main className="relative order-1 h-[46vh] min-h-[240px] flex-1 md:h-auto md:min-h-0 md:order-2">
          <div className="absolute inset-0">
            <MapCanvas />
          </div>
          <LayerDock />
        </main>
      </div>
      <StatusBar />
      {toast ? (
        <div className="pointer-events-none fixed bottom-16 left-1/2 z-20 -translate-x-1/2 rounded-full bg-surface-3 px-4 py-2 text-sm shadow-[var(--shadow-border)]">
          {toast}
        </div>
      ) : null}
      {busy ? <BusyBanner text={busy} /> : null}
      <button type="button" className="sr-only" onClick={() => void persist()} aria-hidden />
    </div>
  );
}

function BusyBanner({ text }: { text: string }) {
  return (
    <div className="fixed inset-x-0 top-0 z-30 flex justify-center pt-[env(safe-area-inset-top)]">
      <div className="mt-3 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-fg">{text}</div>
    </div>
  );
}

function TopBar() {
  const world = useEditor((s) => s.world)!;
  const setStep = useEditor((s) => s.setStep);
  const undo = useEditor((s) => s.undo);
  const redo = useEditor((s) => s.redo);
  const persist = useEditor((s) => s.persist);
  const runValidate = useEditor((s) => s.runValidate);
  const canUndo = useEditor((s) => s.undoStack.length > 0);
  const canRedo = useEditor((s) => s.redoStack.length > 0);

  return (
    <header className="flex items-center gap-2 border-b border-border px-3 py-2 pt-[max(0.5rem,env(safe-area-inset-top))]">
      <button
        type="button"
        className="flex size-11 items-center justify-center rounded-[var(--radius-md)] hover:bg-surface-2"
        onClick={() => setStep("create")}
        aria-label="Back to create"
      >
        <ArrowLeft className="size-5" />
      </button>
      <div className="min-w-0 flex-1">
        <p className="truncate font-display text-base font-medium tracking-tight">{world.settings.name}</p>
        <p className="truncate font-mono text-xs text-muted">
          {world.sizeLabel ? `${world.sizeLabel} · ` : ""}
          {fmtBlocks(world.width)}×{fmtBlocks(world.depth)}
          {world.virtual ? " live map" : ""}
          {world.terrainKind === "earth"
            ? ` · ${fmtDateShort(world.year ?? 2026, world.month ?? 1, world.day ?? 1)}`
            : ""}
          {" · seed "}
          {world.settings.seed.toString()}
        </p>
      </div>
      <Button size="icon" variant="ghost" disabled={!canUndo} onClick={undo} aria-label="Undo">
        <Undo2 className="size-5" />
      </Button>
      <Button size="icon" variant="ghost" disabled={!canRedo} onClick={redo} aria-label="Redo">
        <Redo2 className="size-5" />
      </Button>
      <Button size="icon" variant="ghost" onClick={() => void persist()} aria-label="Save">
        <Save className="size-5" />
      </Button>
      <Button
        size="md"
        variant="primary"
        className="hidden sm:inline-flex"
        onClick={() => {
          runValidate();
        }}
      >
        Validate
      </Button>
    </header>
  );
}

function WorkflowBar() {
  const step = useEditor((s) => s.step);
  const setStep = useEditor((s) => s.setStep);
  const idx = Math.max(0, WORKFLOW.findIndex((w) => w.id === step));
  return (
    <nav className="flex items-center gap-1 overflow-x-auto border-b border-border px-2 py-2">
      <button
        type="button"
        className="flex size-11 shrink-0 items-center justify-center rounded-[var(--radius-md)] hover:bg-surface-2"
        onClick={() => setStep(WORKFLOW[Math.max(1, idx - 1)]!.id)}
        aria-label="Previous step"
      >
        <ChevronLeft className="size-5" />
      </button>
      <div className="flex min-w-0 flex-1 gap-1">
        {WORKFLOW.filter((w) => w.id !== "create").map((w) => (
          <button
            key={w.id}
            type="button"
            onClick={() => setStep(w.id)}
            className={cn(
              "h-11 shrink-0 rounded-full px-3 text-sm",
              step === w.id ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted",
            )}
          >
            {w.label}
          </button>
        ))}
      </div>
      <button
        type="button"
        className="flex size-11 shrink-0 items-center justify-center rounded-[var(--radius-md)] hover:bg-surface-2"
        onClick={() => setStep(WORKFLOW[Math.min(WORKFLOW.length - 1, idx + 1)]!.id)}
        aria-label="Next step"
      >
        <ChevronRight className="size-5" />
      </button>
    </nav>
  );
}

function SidePanel() {
  const step = useEditor((s) => s.step);
  if (step === "spawn") return <SpawnPanel />;
  if (step === "countries") return <CountriesPanel />;
  if (step === "timeline") return <TimelinePanel />;
  if (step === "terrain") return <TerrainPanel />;
  if (step === "structures") return <StructurePanel />;
  if (step === "settings") return <SettingsPanel />;
  if (step === "validate" || step === "export") return <ValidatePanel />;
  return <MapPanel />;
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
  const [from, setFrom] = useState(4);
  const [to, setTo] = useState(3);

  return (
    <div className="flex flex-col gap-4 p-3">
      <Section title="Tools">
        <div className="grid grid-cols-5 gap-1.5">
          {MAP_TOOLS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTool(t.id)}
              className={cn(
                "flex h-11 flex-col items-center justify-center rounded-[var(--radius-sm)] text-[0.65rem]",
                tool === t.id ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted",
              )}
            >
              <t.icon className="size-4" />
              {t.label}
            </button>
          ))}
        </div>
      </Section>
      <Section title="Brush">
        <input
          type="range"
          min={1}
          max={24}
          value={brush}
          onChange={(e) => setBrush(Number(e.target.value))}
          className="h-11 w-full accent-[var(--color-accent)]"
        />
        <p className="font-mono text-xs text-muted">{brush} blocks</p>
      </Section>
      <Section title="Selection">
        <div className="grid grid-cols-2 gap-2">
          <Button onClick={fill}>
            <PaintBucket className="size-4" /> Fill
          </Button>
          <Button onClick={copySel}>
            <Copy className="size-4" /> Copy
          </Button>
        </div>
        <div className="mt-2 flex gap-2">
          <select
            value={from}
            onChange={(e) => setFrom(Number(e.target.value))}
            className="h-11 flex-1 rounded-[var(--radius-md)] bg-surface-2 px-2 text-sm"
          >
            {BLOCKS.filter((b) => b.id > 0).map((b) => (
              <option key={b.id} value={b.id}>
                {b.label}
              </option>
            ))}
          </select>
          <select
            value={to}
            onChange={(e) => setTo(Number(e.target.value))}
            className="h-11 flex-1 rounded-[var(--radius-md)] bg-surface-2 px-2 text-sm"
          >
            {BLOCKS.filter((b) => b.id > 0).map((b) => (
              <option key={b.id} value={b.id}>
                {b.label}
              </option>
            ))}
          </select>
        </div>
        <Button className="mt-2 w-full" onClick={() => replaceBlock(from, to)}>
          <Eraser className="size-4" /> Replace block
        </Button>
      </Section>
      <Section title="Block">
        <div className="grid max-h-40 grid-cols-2 gap-1 overflow-y-auto">
          {BLOCKS.filter((b) => b.id > 0 && b.category !== "special").map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => {
                setBlock(b.id);
                setTool("paint-block");
              }}
              className={cn(
                "flex h-10 items-center gap-2 rounded-[var(--radius-sm)] px-2 text-left text-sm",
                block === b.id ? "bg-accent text-accent-fg" : "bg-surface-2",
              )}
            >
              <span className="size-4 rounded-sm" style={{ background: `rgb(${b.color.join(",")})` }} />
              {b.label}
            </button>
          ))}
        </div>
      </Section>
      <Section title="Biome">
        <div className="grid max-h-40 grid-cols-2 gap-1 overflow-y-auto">
          {BIOMES.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => {
                setBiome(b.id);
                setTool("paint-biome");
              }}
              className={cn(
                "flex h-10 items-center gap-2 rounded-[var(--radius-sm)] px-2 text-left text-sm",
                biome === b.id ? "bg-accent text-accent-fg" : "bg-surface-2",
              )}
            >
              <span className="size-4 rounded-sm" style={{ background: `rgb(${b.color.join(",")})` }} />
              {b.label}
            </button>
          ))}
        </div>
      </Section>
    </div>
  );
}

function SpawnPanel() {
  const world = useEditor((s) => s.world)!;
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

  return (
    <div className="flex flex-col gap-4 p-3">
      <Section title="Spawn">
        <div className="grid grid-cols-3 gap-2">
          {(["x", "y", "z"] as const).map((k) => (
            <label key={k} className="flex flex-col gap-1 text-xs text-muted">
              {k.toUpperCase()}
              <input
                type="number"
                value={s[k]}
                onChange={(e) =>
                  setSpawnCoords(k === "x" ? Number(e.target.value) : s.x, k === "y" ? Number(e.target.value) : s.y, k === "z" ? Number(e.target.value) : s.z)
                }
                className="h-11 rounded-[var(--radius-md)] bg-surface-2 px-2 font-mono text-sm text-fg"
              />
            </label>
          ))}
        </div>
        <Button className="mt-2 w-full" onClick={snapSpawnY}>
          Snap Y to terrain
        </Button>
      </Section>
      <Section title="Radius">
        <div className="flex flex-wrap gap-1.5">
          {[2, 5, 12, 32, 64].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setSpawnRadius(n)}
              className={cn("h-11 min-w-11 rounded-full px-3 text-sm", radius === n ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted")}
            >
              {n}
            </button>
          ))}
        </div>
      </Section>
      <Section title="Jump">
        <div className="grid grid-cols-1 gap-2">
          <Button onClick={centerOnSpawn}>
            <Crosshair className="size-4" /> Jump to spawn
          </Button>
          <Button onClick={spawnRandomLand}>Random land</Button>
          <Button onClick={spawnHighest}>Highest peak</Button>
          <Button onClick={spawnCenter}>Center land</Button>
        </div>
      </Section>
      {world.terrainKind === "earth" ? (
        <Section title="Continents">
          <div className="flex flex-wrap gap-1.5">
            {EARTH_REGIONS.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => spawnInRegion(r.id)}
                className="h-11 rounded-full bg-surface-2 px-3 text-sm"
              >
                {r.label}
              </button>
            ))}
          </div>
        </Section>
      ) : null}
    </div>
  );
}

function TerrainPanel() {
  const generate = useEditor((s) => s.generate);
  const paintBiomeAll = useEditor((s) => s.paintBiomeAll);
  const biome = useEditor((s) => s.selectedBiome);
  const world = useEditor((s) => s.world)!;

  return (
    <div className="flex flex-col gap-4 p-3">
      <Section title="Generate terrain">
        <p className="mb-2 text-xs text-muted">
          {world.terrainKind === "earth"
            ? "Earth coastlines stay. These generators paint over a selected region of a non-Earth world, or replace the live map if you confirm."
            : "Rebuild the map. Terrain stays geographically consistent on Earth worlds — use Earth Map instead of a blob generator."}
        </p>
        <div className="grid grid-cols-2 gap-2">
          {TERRAIN_PRESETS.filter((p) => (world.terrainKind === "earth" ? p.id === "earth" : p.id !== "earth")).map((p) => (
            <Button key={p.id} onClick={() => generate(p.id, true)}>
              {p.label}
            </Button>
          ))}
        </div>
      </Section>
      <Section title="Paint biome everywhere">
        <Button className="w-full" onClick={() => paintBiomeAll(biome)}>
          <Trees className="size-4" /> Fill {BIOMES[biome]?.label ?? "biome"}
        </Button>
      </Section>
    </div>
  );
}

function StructurePanel() {
  const kind = useEditor((s) => s.selectedStructure);
  const rot = useEditor((s) => s.structureRot);
  const tool = useEditor((s) => s.tool);
  const entity = useEditor((s) => s.selectedEntity);
  const world = useEditor((s) => s.world)!;
  const structureCount = useEditor((s) => s.world?.structures.length ?? 0);
  const placeAllReal = useEditor((s) => s.placeAllReal);
  const placeOneReal = useEditor((s) => s.placeOneReal);
  const jumpToPlace = useEditor((s) => s.jumpToPlace);
  const setTool = useEditor((s) => s.setTool);
  const setState = useEditor.setState;
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<PlaceGroup | "all">("all");

  useEffect(() => {
    useEditor.getState().setTool("structure");
  }, []);

  const matches = useMemo(() => {
    const y = world.year ?? 2026;
    return searchRealPlaces(query, group).filter((p) => (world.terrainKind === "earth" ? placeInYear(p, y).exists : true));
  }, [query, group, world.year, world.terrainKind]);
  const shown = matches.slice(0, 80);
  const realCount = world.structures.filter((s) => s.realId).length;
  const placedIds = useMemo(() => {
    void structureCount;
    return new Set(world.structures.map((s) => s.realId).filter(Boolean) as string[]);
  }, [world.structures, structureCount]);

  const STAMP: Array<typeof kind> = [
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
    "capital",
  ];

  return (
    <div className="flex flex-col gap-4 p-3">
      <Section title="Real places">
        <p className="mb-2 text-xs text-muted">
          {LANDMARK_COUNT} landmarks · {CITY_COUNT} cities at published lat/lon. {realCount} on this world
          {world.terrainKind === "earth" ? ` · showing places that existed in ${fmtDateShort(world.year ?? 2026, world.month ?? 1, world.day ?? 1)}` : ""}.
        </p>
        <div className="relative mb-2">
          <Search className="pointer-events-none absolute top-3 left-3 size-4 text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Eiffel, Tokyo, Giza…"
            className="h-11 w-full rounded-[var(--radius-md)] bg-surface-2 pr-3 pl-10 text-sm outline-none focus:ring-2 focus:ring-accent/40"
          />
        </div>
        <div className="mb-2 flex flex-wrap gap-1.5">
          {(["all", "landmark", "capital", "city"] as const).map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => setGroup(g)}
              className={cn(
                "h-11 rounded-full px-3 text-xs capitalize",
                group === g ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted",
              )}
            >
              {g === "all" ? "All" : g === "landmark" ? "Landmarks" : g === "capital" ? "Capitals" : "Cities"}
            </button>
          ))}
        </div>
        <Button variant="primary" className="w-full" onClick={() => placeAllReal(group === "all" ? undefined : [group])}>
          <Landmark className="size-4" /> Place {group === "all" ? "all real places" : `${group}s`}
        </Button>
        <ul className="mt-2 max-h-56 overflow-y-auto rounded-[var(--radius-md)] bg-surface-2">
          {shown.map((p) => {
            const id = realPlaceId(p);
            const on = placedIds.has(id);
            const life = world.terrainKind === "earth" ? placeInYear(p, world.year ?? 2026) : null;
            return (
              <li key={id} className="flex items-center gap-1 border-b border-border last:border-b-0">
                <button type="button" onClick={() => jumpToPlace(id)} className="min-w-0 flex-1 px-3 py-2.5 text-left">
                  <span className="block truncate text-sm">{life?.name ?? p.name}</span>
                  <span className="block truncate text-xs text-muted">
                    {p.country} · {life?.kind ?? p.kind}
                    {life?.built != null ? ` · ${life.approx ? "approx " : ""}${fmtYear(life.built)}` : ""}
                    {life?.ruin ? " · ruin" : ""}
                    {on ? " · on map" : ""}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => (on ? jumpToPlace(id) : placeOneReal(id))}
                  className="mr-1 h-11 shrink-0 rounded-[var(--radius-sm)] px-2 text-xs text-muted hover:bg-surface-3 hover:text-fg"
                >
                  {on ? "Go" : "Place"}
                </button>
              </li>
            );
          })}
        </ul>
      </Section>
      <Section title="Stamp">
        <div className="grid grid-cols-3 gap-1.5">
          {STAMP.map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => {
                setState({ selectedStructure: k });
                setTool("structure");
              }}
              className={cn(
                "h-11 rounded-[var(--radius-sm)] text-xs capitalize",
                tool === "structure" && kind === k ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted",
              )}
            >
              {k}
            </button>
          ))}
        </div>
        <Button className="mt-2 w-full" onClick={() => setState({ structureRot: ((rot + 90) % 360) as 0 | 90 | 180 | 270 })}>
          <RotateCw className="size-4" /> Rotate {rot}°
        </Button>
      </Section>
      <Section title="Entities">
        <div className="grid grid-cols-2 gap-1.5">
          {ENTITY_TYPES.map((e) => (
            <button
              key={e.id}
              type="button"
              onClick={() => {
                setState({ selectedEntity: e.id });
                setTool("entity");
              }}
              className={cn(
                "h-11 rounded-[var(--radius-sm)] text-xs",
                tool === "entity" && entity === e.id ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted",
              )}
            >
              {e.label}
            </button>
          ))}
        </div>
      </Section>
    </div>
  );
}

function SettingsPanel() {
  const world = useEditor((s) => s.world)!;
  const update = useEditor((s) => s.updateSettings);
  const st = world.settings;
  return (
    <div className="flex flex-col gap-4 p-3">
      <Section title="Mode">
        <div className="flex flex-wrap gap-1.5">
          {(["survival", "creative", "adventure", "spectator"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => update({ gameMode: m })}
              className={cn("h-11 rounded-full px-3 text-sm capitalize", st.gameMode === m ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted")}
            >
              {m}
            </button>
          ))}
        </div>
      </Section>
      <Section title="Difficulty">
        <div className="flex flex-wrap gap-1.5">
          {(["peaceful", "easy", "normal", "hard"] as const).map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => update({ difficulty: d })}
              className={cn("h-11 rounded-full px-3 text-sm capitalize", st.difficulty === d ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted")}
            >
              {d}
            </button>
          ))}
        </div>
      </Section>
      <Section title="Weather & time">
        <div className="flex flex-wrap gap-1.5">
          {(["clear", "rain", "thunder"] as const).map((w) => (
            <button
              key={w}
              type="button"
              onClick={() => update({ weather: w })}
              className={cn("h-11 rounded-full px-3 text-sm capitalize", st.weather === w ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted")}
            >
              {w}
            </button>
          ))}
        </div>
        <label className="mt-2 flex flex-col gap-1 text-xs text-muted">
          Time
          <input
            type="range"
            min={0}
            max={24000}
            value={st.time}
            onChange={(e) => update({ time: Number(e.target.value) })}
            className="h-11 accent-[var(--color-accent)]"
          />
        </label>
      </Section>
      <Section title="Rules">
        {(
          [
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
            ["showCoordinates", "Show coordinates"],
          ] as const
        ).map(([k, label]) => (
          <label key={k} className="flex min-h-11 items-center justify-between gap-3 border-b border-border px-1">
            <span className="text-sm">{label}</span>
            <input
              type="checkbox"
              checked={Boolean(st[k])}
              onChange={(e) => update({ [k]: e.target.checked })}
              className="size-5 accent-[var(--color-accent)]"
            />
          </label>
        ))}
      </Section>
    </div>
  );
}

function ValidatePanel() {
  const world = useEditor((s) => s.world)!;
  const validation = useEditor((s) => s.validation);
  const runValidate = useEditor((s) => s.runValidate);
  const setBusy = useEditor((s) => s.setBusy);
  const setToast = useEditor((s) => s.setToast);
  const [extra, setExtra] = useState<string[]>([]);

  useEffect(() => {
    if (!validation) runValidate();
  }, [validation, runValidate]);

  async function doExport() {
    const report = runValidate();
    if (!report?.canExport) {
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

  return (
    <div className="flex flex-col gap-4 p-3">
      <Section title="Checks">
        <ul className="flex flex-col gap-2">
          {(validation?.checks ?? []).map((c) => (
            <li key={c.id} className="rounded-[var(--radius-md)] bg-surface-2 px-3 py-2">
              <p className="flex items-center gap-2 text-sm font-medium">
                <span
                  className={cn(
                    "size-2 rounded-full",
                    c.level === "pass" && "bg-accent",
                    c.level === "warn" && "bg-warn",
                    c.level === "fail" && "bg-danger",
                  )}
                />
                {c.label}
              </p>
              <p className="mt-1 text-xs text-muted">{c.detail}</p>
            </li>
          ))}
        </ul>
      </Section>
      {extra.length ? (
        <Section title="Export notes">
          {extra.map((t, i) => (
            <p key={i} className="text-xs text-muted">
              {t}
            </p>
          ))}
        </Section>
      ) : null}
      <Button variant="primary" size="lg" className="w-full" onClick={() => void doExport()} disabled={validation?.canExport === false}>
        <Download className="size-4" /> Export .mcworld
      </Button>
      <p className="text-xs text-muted">
        The file is a ZIP with a real level.dat and LevelDB. Open it on Bedrock mobile (tap the file) or copy it into
        games/com.mojang/minecraftWorlds.
      </p>
    </div>
  );
}

function StatusBar() {
  const hover = useEditor((s) => s.hover);
  const world = useEditor((s) => s.world);
  return (
    <footer className="flex items-center gap-3 border-t border-border px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] font-mono text-xs text-muted">
      {hover ? (
        <>
          <span className="tabular-nums text-fg">
            {hover.x} {hover.y} {hover.z}
          </span>
          <span>{hover.block}</span>
          <span>{hover.biome}</span>
          {hover.water ? <span>water</span> : null}
          {hover.structure ? <span className="truncate text-fg">{hover.structure}</span> : null}
          {hover.built != null ? (
            <span className={hover.approx ? "text-warn" : "text-fg"}>
              {hover.ruin ? "ruin · " : ""}
              {hover.approx ? "approx " : "built "}
              {fmtYear(hover.built)}
            </span>
          ) : hover.approx ? (
            <span className="text-warn">Historical Approximation</span>
          ) : null}
          {hover.country ? <span className="truncate text-fg">{hover.country}</span> : null}
          {hover.year ? <span className="text-fg">{hover.year}</span> : null}
        </>
      ) : (
        <span>Tap the map · pinch zoom · two-finger pan</span>
      )}
      <span className="ml-auto hidden sm:inline">
        {world
          ? `${world.structures.length} structures${world.terrainKind === "earth" ? ` · ${fmtDateShort(world.year ?? 2026, world.month ?? 1, world.day ?? 1)}` : ""}`
          : ""}
      </span>
    </footer>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-2 text-xs font-medium tracking-wide text-muted uppercase">{title}</h2>
      {children}
    </section>
  );
}

const LAYER_CHIPS: { id: OverlayLayer; label: string; icon: typeof Globe2 }[] = [
  { id: "terrain", label: "Terrain", icon: Mountain },
  { id: "countries", label: "Countries", icon: Globe2 },
  { id: "borders", label: "Borders", icon: Flag },
  { id: "cities", label: "Cities", icon: Building2 },
  { id: "roads", label: "Roads", icon: Route },
  { id: "structures", label: "Structures", icon: Landmark },
];

function LayerDock() {
  const layers = useEditor((s) => s.layers);
  const setLayer = useEditor((s) => s.setLayer);
  const world = useEditor((s) => s.world);
  if (!world) return null;
  return (
    <div className="pointer-events-none absolute top-2 right-2 left-2 z-10 flex flex-wrap justify-end gap-1 md:left-auto">
      {LAYER_CHIPS.map((l) => {
        const on = layers[l.id];
        return (
          <button
            key={l.id}
            type="button"
            onClick={() => setLayer(l.id, !on)}
            className={cn(
              "pointer-events-auto flex h-11 items-center gap-1.5 rounded-full px-3 text-xs shadow-[var(--shadow-border)]",
              on ? "bg-accent text-accent-fg" : "bg-surface/90 text-muted backdrop-blur-sm",
            )}
          >
            <l.icon className="size-4" />
            {l.label}
          </button>
        );
      })}
    </div>
  );
}

function TimelinePanel() {
  const world = useEditor((s) => s.world)!;
  const setDate = useEditor((s) => s.setDate);
  const keep = world.keepManualAcrossYears !== false;
  const setKeepManual = useEditor((s) => s.setKeepManual);
  const year = clampDateYear(world.year ?? 2026);
  const month = clampMonth(world.month ?? 1);
  const day = clampDay(year, month, world.day ?? 1);
  const info = yearInfo(year, month, day);
  const counts = useMemo(() => countInYear(year), [year]);
  const atlas = peekCountries();
  const [query, setQuery] = useState("");
  const polities = useMemo(() => {
    if (!atlas) return [];
    return query.trim() ? searchPolities(atlas, year, query) : uniquePolities(year, atlas);
  }, [atlas, year, query]);
  const selectPolity = useEditor((s) => s.selectPolity);
  const spawnAtCapital = useEditor((s) => s.spawnAtCapital);
  const selectedPolityId = useEditor((s) => s.selectedPolityId);
  const generateCountryRegion = useEditor((s) => s.generateCountryRegion);

  if (world.terrainKind !== "earth") {
    return (
      <div className="flex flex-col gap-4 p-3">
        <Section title="Global timeline">
          <p className="text-sm text-muted">
            The timeline rewinds the whole Earth map — countries, cities, landmarks, and era roads — without making a
            new world. Create an Earth Map world first.
          </p>
        </Section>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 p-3">
      <Section title="Date">
        <p className="mb-2 font-display text-2xl leading-tight">{info.title}</p>
        <p className="mb-1 text-sm text-muted">{info.era}</p>
        {info.approximation ? (
          <p className="mb-3 rounded-[var(--radius-md)] bg-surface-2 px-3 py-2 text-xs text-warn">
            Historical Approximation. You can pick any year from 100 to 2026, plus month and day. Political borders
            use the {info.snapshot} snapshot on modern coastlines. Landmark dates are published construction years.
          </p>
        ) : (
          <p className="mb-3 text-xs text-muted">Modern Natural Earth borders and published coordinates.</p>
        )}
        <p className="mb-2 text-xs font-medium tracking-wide text-muted uppercase">Snapshot years</p>
        <YearChips compact />
        <p className="mt-3 text-sm text-muted">{info.blurb}</p>
      </Section>
      <Section title="Historical dates">
        <p className="mb-2 text-xs text-muted">
          Published day/month/year events for the whole Earth. Jumping sets the calendar; cities and landmarks follow
          the year.
        </p>
        <DateEventList />
      </Section>
      <Section title="This date on Earth">
        <ul className="grid grid-cols-3 gap-2 text-center">
          <li className="rounded-[var(--radius-md)] bg-surface-2 px-2 py-3">
            <p className="font-mono text-lg text-fg">{counts.cities}</p>
            <p className="text-xs text-muted">cities</p>
          </li>
          <li className="rounded-[var(--radius-md)] bg-surface-2 px-2 py-3">
            <p className="font-mono text-lg text-fg">{counts.landmarks}</p>
            <p className="text-xs text-muted">landmarks</p>
          </li>
          <li className="rounded-[var(--radius-md)] bg-surface-2 px-2 py-3">
            <p className="font-mono text-lg text-fg">{counts.ruins}</p>
            <p className="text-xs text-muted">ruins</p>
          </li>
        </ul>
        <p className="mt-2 text-xs text-muted">
          {polities.length} polities on the whole globe. Terrain stays the same. Changing year restamps the virtual
          Earth — it does not build a second planet in memory. Detailed Minecraft chunks generate only around spawn /
          the region you export.
        </p>
      </Section>
      <Section title="Civilizations this year">
        <div className="relative mb-2">
          <Search className="pointer-events-none absolute top-3 left-3 size-4 text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rome, Qing, USSR, Ottoman…"
            className="h-11 w-full rounded-[var(--radius-md)] bg-surface-2 pr-3 pl-10 text-sm outline-none focus:ring-2 focus:ring-accent/40"
          />
        </div>
        <ul className="max-h-48 overflow-y-auto rounded-[var(--radius-md)] bg-surface-2">
          {polities.slice(0, 80).map((p) => (
            <li key={p.id} className="border-b border-border last:border-b-0">
              <button
                type="button"
                onClick={() => selectPolity(p.id)}
                className={cn(
                  "flex min-h-11 w-full items-center justify-between gap-2 px-3 py-2 text-left",
                  selectedPolityId === p.id && "bg-accent/20",
                )}
              >
                <span className="min-w-0">
                  <span className="block truncate text-sm">{p.name}</span>
                  <span className="block truncate text-xs text-muted">
                    {p.capital ? `capital ${p.capital.name}` : p.short}
                    {p.disputed ? " · disputed" : ""}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-2 grid grid-cols-1 gap-2">
          <Button onClick={spawnAtCapital} disabled={!selectedPolityId}>
            <MapPin className="size-4" /> Set spawn at capital
          </Button>
          <Button variant="primary" onClick={generateCountryRegion} disabled={!selectedPolityId}>
            <Building2 className="size-4" /> Generate region for {fmtDate(year, month, day)}
          </Button>
        </div>
      </Section>
      <Section title="Manual edits">
        <label className="flex min-h-11 items-center gap-3 rounded-[var(--radius-md)] bg-surface-2 px-3">
          <input
            type="checkbox"
            checked={keep}
            onChange={(e) => setKeepManual(e.target.checked)}
            className="size-5 accent-[var(--color-accent)]"
          />
          <span className="text-sm">Keep my builds when the year changes</span>
        </label>
        <p className="mt-2 text-xs text-muted">
          Off: user-placed structures stay tied to the year you stamped them. Undo rewinds the timeline.
        </p>
      </Section>
      <Section title="Jump to era">
        <div className="grid grid-cols-2 gap-2">
          {(
            [
              [100, 1, 1, "Rome / Han"],
              [1776, 7, 4, "Independence"],
              [1863, 1, 1, "Civil War"],
              [1914, 7, 28, "WWI begins"],
              [1945, 5, 8, "VE Day"],
              [1962, 10, 16, "Cold War"],
              [1991, 12, 26, "USSR ends"],
              [2026, 1, 1, "Present"],
            ] as const
          ).map(([y, m, d, label]) => (
            <Button
              key={`${y}-${m}-${d}`}
              variant={y === year ? "primary" : "secondary"}
              onClick={() => setDate({ year: y, month: m, day: d })}
            >
              <Clock className="size-4" /> {y} · {label}
            </Button>
          ))}
        </div>
      </Section>
    </div>
  );
}

function CountriesPanel() {
  const world = useEditor((s) => s.world)!;
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
  const [query, setQuery] = useState("");
  const [continent, setContinent] = useState<string>("all");
  const [ready, setReady] = useState(Boolean(peekCountries()));
  const year = clampDateYear(world.year ?? 2026);

  useEffect(() => {
    if (peekCountries()) {
      setReady(true);
      return;
    }
    void loadCountries()
      .then(() => setReady(true))
      .catch(() => setReady(false));
  }, []);

  const atlas = peekCountries();
  const historical = world.terrainKind === "earth" && year !== 2026;
  const polities = useMemo(() => {
    if (!atlas || !historical) return [];
    return query.trim() ? searchPolities(atlas, year, query) : uniquePolities(year, atlas);
  }, [atlas, year, query, historical, ready]);
  const matches = useMemo(() => {
    if (!atlas) return [] as CountryRec[];
    return searchCountries(atlas, query, continent);
  }, [atlas, query, continent, ready]);
  const selected = atlas && iso ? atlas.byIso.get(iso) ?? null : null;
  const places = useMemo(() => {
    if (!atlas || !selected) return { capitals: [], cities: [], landmarks: [] };
    const all = placesForCountry(atlas, selected.iso).filter((p) => placeInYear(p, year).exists);
    return {
      capitals: all.filter((p) => p.group === "capital"),
      cities: all.filter((p) => p.group === "city"),
      landmarks: all.filter((p) => p.group === "landmark"),
    };
  }, [atlas, selected, ready, year]);
  const cap = atlas && selected ? primaryCapital(atlas, selected.iso) : null;
  const shownCountries = matches.slice(0, 80);
  const shownCities = [...places.capitals, ...places.cities].slice(0, 40);

  if (world.terrainKind !== "earth") {
    return (
      <div className="flex flex-col gap-4 p-3">
        <Section title="Countries overlay">
          <p className="text-sm text-muted">
            Country borders sit on the real Earth terrain map. Create or generate an Earth Map world first — this
            overlay is not a replacement political map.
          </p>
        </Section>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 p-3">
      <Section title="All civilizations">
        <p className="mb-2 text-xs text-muted">
          {year !== 2026
            ? `${yearInfo(year).title} political geography on the physical Earth map. Borders are a historical approximation (modern coastlines, documented sovereignty).`
            : "Real country borders on the physical Earth map. Search, select, set spawn, then generate a playable region around the capital or city."}{" "}
          Huge Earth stays live — detailed chunks only around the region you generate.
        </p>
        <div className="relative mb-2">
          <Search className="pointer-events-none absolute top-3 left-3 size-4 text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={historical ? "Rome, Qing, USSR, Ottoman…" : "Germany, Israel, Chile…"}
            className="h-11 w-full rounded-[var(--radius-md)] bg-surface-2 pr-3 pl-10 text-sm outline-none focus:ring-2 focus:ring-accent/40"
          />
        </div>
        {!historical ? (
          <div className="mb-2 flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => setContinent("all")}
              className={cn("h-11 rounded-full px-3 text-xs", continent === "all" ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted")}
            >
              All
            </button>
            {CONTINENTS.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setContinent(c)}
                className={cn("h-11 rounded-full px-3 text-xs", continent === c ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted")}
              >
                {c}
              </button>
            ))}
          </div>
        ) : null}
        {!ready ? <p className="text-sm text-muted">Loading country borders…</p> : null}
        <ul className="max-h-48 overflow-y-auto rounded-[var(--radius-md)] bg-surface-2">
          {historical
            ? polities.slice(0, 80).map((p) => (
                <li key={p.id} className="border-b border-border last:border-b-0">
                  <button
                    type="button"
                    onClick={() => selectPolity(p.id)}
                    className={cn(
                      "flex min-h-11 w-full items-center justify-between gap-2 px-3 py-2 text-left",
                      selectedPolityId === p.id && "bg-accent/20",
                    )}
                  >
                    <span className="min-w-0">
                      <span className="block truncate text-sm">{p.name}</span>
                      <span className="block truncate text-xs text-muted">
                        {p.capital ? `capital ${p.capital.name}` : p.short}
                        {p.disputed ? " · disputed" : ""}
                      </span>
                    </span>
                    {selectedPolityId === p.id ? <Flag className="size-4 shrink-0 text-accent" /> : null}
                  </button>
                </li>
              ))
            : shownCountries.map((c) => (
                <li key={c.iso} className="border-b border-border last:border-b-0">
                  <button
                    type="button"
                    onClick={() => selectCountry(c.iso)}
                    className={cn(
                      "flex min-h-11 w-full items-center justify-between gap-2 px-3 py-2 text-left",
                      iso === c.iso && "bg-accent/20",
                    )}
                  >
                    <span className="min-w-0">
                      <span className="block truncate text-sm">{c.short || c.name}</span>
                      <span className="block truncate text-xs text-muted">
                        {c.continent}
                        {c.iso2 ? ` · ${c.iso2}` : ""}
                      </span>
                    </span>
                    {iso === c.iso ? <Flag className="size-4 shrink-0 text-accent" /> : null}
                  </button>
                </li>
              ))}
          {ready && (historical ? polities.length === 0 : matches.length === 0) ? (
            <li className="px-3 py-3 text-sm text-muted">No matching country.</li>
          ) : null}
        </ul>
      </Section>

      {selected ? (
        <Section title={selected.name}>
          <p className="mb-2 text-sm text-muted">
            {selected.continent}
            {cap ? ` · capital ${placeInYear(cap, year).name}` : ""}
            {` · ${places.cities.length} cities · ${places.landmarks.length} landmarks`}
          </p>
          <div className="grid grid-cols-1 gap-2">
            <Button variant="primary" onClick={spawnInCountry}>
              <MapPin className="size-4" /> Set spawn in country
            </Button>
            <Button onClick={spawnAtCapital} disabled={!cap}>
              <Landmark className="size-4" /> Set spawn at capital
              {cap ? ` (${placeInYear(cap, year).name})` : ""}
            </Button>
          </div>
          <p className="mt-3 mb-1 text-xs text-muted">Cities in {selected.short} · {year}</p>
          <ul className="max-h-40 overflow-y-auto rounded-[var(--radius-md)] bg-surface-2">
            {shownCities.map((p) => {
              const id = realPlaceId(p);
              const life = placeInYear(p, year);
              return (
                <li key={id} className="border-b border-border last:border-b-0">
                  <button
                    type="button"
                    onClick={() => selectPlace(id)}
                    className={cn(
                      "flex min-h-11 w-full items-center justify-between px-3 py-2 text-left",
                      placeId === id && "bg-accent/20",
                    )}
                  >
                    <span className="min-w-0">
                      <span className="block truncate text-sm">{life.name}</span>
                      <span className="block truncate text-xs text-muted">
                        {p.group}
                        {life.built != null ? ` · ${life.approx ? "approx " : ""}${fmtYear(life.built)}` : ""}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
            {shownCities.length === 0 ? <li className="px-3 py-3 text-sm text-muted">No cities on file for this year.</li> : null}
          </ul>
        </Section>
      ) : (
        <p className="px-1 text-sm text-muted">Select a country, or tap it on the map.</p>
      )}

      <Section title="Generate region">
        <p className="mb-2 text-xs text-muted">
          Stamps era-appropriate roads, farms, houses, villages, and landmarks around the selected city. Only this
          window is detailed for .mcworld export — the rest of Earth stays a live map.
        </p>
        <div className="mb-2 grid grid-cols-4 gap-1.5">
          {[256, 512, 1024, 2048].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setRegionRadius(n)}
              className={cn(
                "h-11 rounded-[var(--radius-sm)] text-xs",
                regionRadius === n ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted",
              )}
            >
              {n}
            </button>
          ))}
        </div>
        <Button variant="primary" className="w-full" disabled={!selected && !selectedPolityId} onClick={generateCountryRegion}>
          <Building2 className="size-4" /> Generate region
        </Button>
      </Section>
    </div>
  );
}
