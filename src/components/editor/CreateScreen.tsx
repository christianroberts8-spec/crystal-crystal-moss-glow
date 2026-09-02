import { useEffect, useRef, useState } from "react";
import { FolderOpen, Globe, Map, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { importMcworld } from "@/lib/bedrock/mcworld";
import { useEditor } from "@/lib/store";
import type { TerrainPreset } from "@/lib/world/types";
import { HUGE_SIZES, fmtBlocks, isVirtualSize } from "@/lib/world/types";

const PRESETS: { id: TerrainPreset; label: string; blurb: string }[] = [
  { id: "continents", label: "Continents", blurb: "Large landmasses, coasts, inland ranges" },
  { id: "islands", label: "Islands", blurb: "Scattered land in open water" },
  { id: "archipelago", label: "Archipelago", blurb: "Dense island chains" },
  { id: "oceans", label: "Oceans", blurb: "Mostly water, rare landfalls" },
  { id: "mountains", label: "Mountains", blurb: "High peaks, deep valleys" },
  { id: "inland", label: "Inland", blurb: "No ocean — plains and rivers" },
  { id: "mixed", label: "Mixed", blurb: "A bit of everything" },
  { id: "flat", label: "Flat", blurb: "Level plains, ready to paint" },
];

const SIZES = [64, 96, 128, 192, 256, 384, 512, 768, 1024, 1280, 1536, 2048, 4096, 8192];

export function CreateScreen() {
  const newWorld = useEditor((s) => s.newWorld);
  const loadWorld = useEditor((s) => s.loadWorld);
  const resumeLast = useEditor((s) => s.resumeLast);
  const lastMeta = useEditor((s) => s.lastMeta);
  const setBusy = useEditor((s) => s.setBusy);
  const setToast = useEditor((s) => s.setToast);
  const [name, setName] = useState("REMAP World");
  const [seed, setSeed] = useState("bedrock-remap");
  const [size, setSize] = useState(256);
  const [aspect, setAspect] = useState<"square" | "globe">("square");
  const [hugeId, setHugeId] = useState<string | null>(null);
  const [preset, setPreset] = useState<TerrainPreset>("continents");
  const [mode, setMode] = useState<"creative" | "survival">("creative");
  const [err, setErr] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSeed(String(Math.floor(Math.random() * 1e9)));
  }, []);

  const huge = HUGE_SIZES.find((h) => h.id === hugeId);
  const width = huge ? huge.width : size;
  const depth = huge
    ? huge.depth
    : aspect === "globe"
      ? Math.max(16, Math.round(size / 2 / 16) * 16)
      : size;
  const large = isVirtualSize(width, depth) || width * depth >= 768 * 384;

  async function onImport(file: File) {
    setErr(null);
    setBusy("Reading .mcworld…");
    try {
      const { world, warnings } = await importMcworld(file, file.name);
      loadWorld(world);
      setToast(warnings[0] ?? `Imported ${file.name}`);
    } catch (e) {
      setErr(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(null);
    }
  }

  function pickPreset(id: TerrainPreset) {
    setPreset(id);
    if (id === "earth") {
      setAspect("globe");
      if (name === "REMAP World") setName("Earth");
      if (!hugeId && size < 1024) setSize(2048);
    } else if (name === "Earth" && huge?.family !== "earth" && huge?.aspect !== "globe") {
      setName("REMAP World");
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-8 sm:py-12">
      <header className="flex flex-col gap-2">
        <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">Minecraft Remap</p>
        <h1 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">Bedrock World Creator</h1>
        <p className="max-w-xl text-muted text-pretty">
          Create or import a world, paint terrain on the map, set spawn, then export a real{" "}
          <span className="font-mono text-fg">.mcworld</span> you can open on a phone or tablet.
        </p>
      </header>

      {lastMeta ? (
        <button
          type="button"
          onClick={() => void resumeLast()}
          className="flex min-h-12 items-center justify-between rounded-[var(--radius-lg)] bg-surface-2 px-4 py-3 text-left shadow-[var(--shadow-border)]"
        >
          <span>
            <span className="block text-sm text-muted">Continue last world</span>
            <span className="font-medium">{lastMeta.name}</span>
          </span>
          <FolderOpen className="size-5 text-muted" />
        </button>
      ) : null}

      <section className="rounded-[var(--radius-xl)] bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5">
        <h2 className="mb-4 text-sm font-medium tracking-wide text-muted uppercase">New world</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="text-muted">Name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              suppressHydrationWarning
              className="h-11 rounded-[var(--radius-md)] bg-surface-2 px-3 text-fg shadow-[var(--shadow-border)] outline-none focus:ring-2 focus:ring-accent/40"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="text-muted">Seed</span>
            <input
              value={seed}
              onChange={(e) => setSeed(e.target.value)}
              suppressHydrationWarning
              className="h-11 rounded-[var(--radius-md)] bg-surface-2 px-3 font-mono text-fg shadow-[var(--shadow-border)] outline-none focus:ring-2 focus:ring-accent/40"
            />
          </label>
        </div>
        <div className="mt-4">
          <p className="mb-2 text-sm text-muted">Size (blocks)</p>
          <div className="mb-2 flex flex-wrap gap-2">
            {(["square", "globe"] as const).map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => {
                  setAspect(a);
                  setHugeId(null);
                }}
                className={`h-11 rounded-[var(--radius-md)] px-4 text-sm ${
                  aspect === a ? "bg-accent text-accent-fg" : "bg-surface-2 text-fg"
                }`}
              >
                {a === "square" ? "Square" : "Globe 2:1"}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {SIZES.map((n) => {
              const w = n;
              const d = aspect === "globe" ? Math.max(16, Math.round(n / 2 / 16) * 16) : n;
              return (
                <button
                  key={n}
                  type="button"
                  className={`h-11 min-w-11 rounded-[var(--radius-md)] px-3 text-sm ${
                    !hugeId && size === n ? "bg-accent text-accent-fg" : "bg-surface-2 text-fg"
                  }`}
                  onClick={() => {
                    setSize(n);
                    setHugeId(null);
                  }}
                >
                  {w}×{d}
                </button>
              );
            })}
          </div>
          <p className="mt-3 mb-2 text-sm text-muted">Huge maps (Roblox / Earth / Minecraft scale)</p>
          <div className="flex flex-col gap-3">
            {(["roblox", "earth", "minecraft"] as const).map((fam) => (
              <div key={fam} className="flex flex-col gap-2">
                <p className="text-xs font-medium tracking-wide text-muted uppercase">
                  {fam === "roblox" ? "Roblox" : fam === "earth" ? "Earth" : "Minecraft"}
                </p>
                {HUGE_SIZES.filter((h) => h.family === fam).map((h) => (
                  <button
                    key={h.id}
                    type="button"
                    onClick={() => {
                      setHugeId(h.id);
                      setAspect(h.aspect);
                      if (h.aspect === "globe" || h.family === "earth") {
                        setPreset("earth");
                        if (name === "REMAP World") setName("Earth");
                      }
                    }}
                    className={`min-h-12 rounded-[var(--radius-md)] px-3 py-3 text-left ${
                      hugeId === h.id ? "bg-accent text-accent-fg" : "bg-surface-2"
                    }`}
                  >
                    <span className="flex items-center justify-between gap-2">
                      <span className="block text-sm font-medium">{h.label}</span>
                      <span
                        className={`shrink-0 rounded-full px-2 py-0.5 text-xs tracking-wide uppercase ${
                          hugeId === h.id ? "bg-accent-fg/15 text-accent-fg" : "bg-surface text-muted"
                        }`}
                      >
                        {h.aspect === "globe" ? "2:1 globe" : "square"}
                      </span>
                    </span>
                    <span className={`mt-1 block font-mono text-xs ${hugeId === h.id ? "text-accent-fg/90" : "text-fg"}`}>
                      {fmtBlocks(h.width)} × {fmtBlocks(h.depth)}
                    </span>
                    <span className={`mt-1 block text-xs ${hugeId === h.id ? "text-accent-fg/80" : "text-muted"}`}>
                      {h.blurb}
                    </span>
                  </button>
                ))}
              </div>
            ))}
          </div>
          {isVirtualSize(width, depth) ? (
            <p className="mt-2 text-xs text-muted">
              {fmtBlocks(width)}×{fmtBlocks(depth)} is a live map like Google Maps / Ages of Conflict — the whole
              world stays on screen. 2:1 globe sizes wrap the real Earth (west left, north up). .mcworld export
              writes a playable 2,048×2,048 region around spawn (phones cannot open a 60 million block file).
            </p>
          ) : large ? (
            <p className="mt-2 text-xs text-muted">
              {width}×{depth} is a large map — generation is quick, export to .mcworld takes longer.
            </p>
          ) : (
            <p className="mt-2 text-xs text-muted">
              Map is {width}×{depth}. Globe 2:1 is the real Earth layout (west left, north up).
            </p>
          )}
        </div>
        <div className="mt-4">
          <p className="mb-2 text-sm text-muted">Mode</p>
          <div className="flex gap-2">
            {(["creative", "survival"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={`h-11 rounded-[var(--radius-md)] px-4 capitalize ${
                  mode === m ? "bg-accent text-accent-fg" : "bg-surface-2"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <p className="mb-2 text-sm text-muted">Terrain</p>
          <button
            type="button"
            onClick={() => pickPreset("earth")}
            className={`mb-2 flex w-full items-start gap-3 rounded-[var(--radius-md)] px-3 py-3 text-left ${
              preset === "earth" ? "bg-accent text-accent-fg" : "bg-surface-2"
            }`}
          >
            <Globe className="mt-0.5 size-5 shrink-0" />
            <span>
              <span className="block text-sm font-medium">Earth Map</span>
              <span className={`mt-1 block text-xs ${preset === "earth" ? "text-accent-fg/80" : "text-muted"}`}>
                Real world coastlines (Natural Earth) and NASA elevation — Africa, Americas, Europe, Asia, Australia,
                ice caps, lakes. Slide 100 CE → 2026 to rewrite countries, cities, and landmarks on the same globe. Not
                a fake blob map.
              </span>
            </span>
          </button>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {PRESETS.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => pickPreset(p.id)}
                className={`rounded-[var(--radius-md)] px-3 py-3 text-left ${
                  preset === p.id ? "bg-accent text-accent-fg" : "bg-surface-2"
                }`}
              >
                <span className="block text-sm font-medium">{p.label}</span>
                <span className={`mt-1 block text-xs ${preset === p.id ? "text-accent-fg/80" : "text-muted"}`}>
                  {p.blurb}
                </span>
              </button>
            ))}
          </div>
        </div>
        <Button
          variant="primary"
          size="lg"
          className="mt-5 w-full"
          onClick={() => newWorld({ name, seed, width, depth, preset, gameMode: mode })}
        >
          <Plus className="size-4" />
          Create world
        </Button>
      </section>

      <section
        className="rounded-[var(--radius-xl)] bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5"
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          e.preventDefault();
          const f = e.dataTransfer.files[0];
          if (f) void onImport(f);
        }}
      >
        <h2 className="mb-2 text-sm font-medium tracking-wide text-muted uppercase">Import .mcworld</h2>
        <p className="mb-4 text-sm text-muted">
          Opens an existing Bedrock world. Settings and spawn are always editable. Terrain is loaded when the
          chunk database can be decoded; otherwise original chunks are preserved so nothing is corrupted.
        </p>
        <input
          ref={fileRef}
          type="file"
          accept=".mcworld,application/zip"
          className="hidden"
          suppressHydrationWarning
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) void onImport(f);
          }}
        />
        <Button variant="secondary" size="lg" className="w-full" onClick={() => fileRef.current?.click()}>
          <Map className="size-4" />
          Choose .mcworld
        </Button>
        {err ? <p className="mt-3 text-sm text-danger">{err}</p> : null}
      </section>
    </div>
  );
}
