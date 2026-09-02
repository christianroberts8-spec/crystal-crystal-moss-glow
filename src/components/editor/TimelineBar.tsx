import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { useEditor } from "@/lib/store";
import {
  clampDateYear,
  clampDay,
  clampMonth,
  daysInMonth,
  fmtDate,
  HISTORICAL_DATES,
  MAX_YEAR,
  MIN_YEAR,
  MONTHS,
  SLIDER_TICKS,
  SNAPSHOT_YEARS,
  yearInfo,
} from "@/lib/world/history";
import { cn } from "@/lib/utils";

export function TimelineBar() {
  const world = useEditor((s) => s.world);
  const setDate = useEditor((s) => s.setDate);
  const stepYear = useEditor((s) => s.stepYear);
  const setStep = useEditor((s) => s.setStep);
  const yearRaw = world?.year ?? 2026;
  const monthRaw = world?.month ?? 1;
  const dayRaw = world?.day ?? 1;
  const year = clampDateYear(yearRaw);
  const month = clampMonth(monthRaw);
  const day = clampDay(year, month, dayRaw);
  const [draftYear, setDraftYear] = useState<number | null>(null);
  const shownYear = draftYear ?? year;
  const info = yearInfo(shownYear, month, day);

  useEffect(() => {
    setDraftYear(null);
  }, [year]);

  if (!world || world.terrainKind !== "earth") return null;

  const dim = daysInMonth(shownYear, month);

  function commitYear(n: number) {
    setDraftYear(null);
    setDate({ year: n });
  }

  return (
    <div className="border-b border-border bg-surface px-3 py-2">
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="flex size-11 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-surface-2 hover:bg-surface-3"
          onClick={() => stepYear(-1)}
          disabled={year <= MIN_YEAR}
          aria-label="Previous year"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => setStep("timeline")}
          className="flex min-w-0 flex-1 items-center gap-2 rounded-[var(--radius-md)] px-2 py-1 text-left hover:bg-surface-2"
          aria-label={`${info.title}${info.approximation ? ", Historical Approximation" : ""}, ${info.era}, whole Earth`}
        >
          <Clock className="size-4 shrink-0 text-accent" />
          <span className="min-w-0">
            <span className="block truncate font-display text-sm font-medium leading-tight">
              {info.title}
              {info.approximation ? (
                <>
                  {" "}
                  <span className="font-sans text-xs font-medium tracking-wide text-warn uppercase">
                    Historical Approximation
                  </span>
                </>
              ) : null}
            </span>
            <span className="block truncate text-xs text-muted">
              {info.era} · whole Earth · borders {info.snapshot}
            </span>
          </span>
        </button>
        <button
          type="button"
          className="flex size-11 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-surface-2 hover:bg-surface-3"
          onClick={() => stepYear(1)}
          disabled={year >= MAX_YEAR}
          aria-label="Next year"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <label className="flex min-h-11 items-center gap-1.5">
          <span className="sr-only">Year</span>
          <input
            type="number"
            min={MIN_YEAR}
            max={MAX_YEAR}
            value={shownYear}
            onChange={(e) => setDraftYear(clampDateYear(Number(e.target.value)))}
            onBlur={() => {
              if (draftYear != null) commitYear(draftYear);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && draftYear != null) commitYear(draftYear);
            }}
            className="h-11 w-[5.5rem] rounded-[var(--radius-md)] bg-surface-2 px-2 font-mono text-sm outline-none focus:ring-2 focus:ring-accent/40"
          />
        </label>
        <label className="flex min-h-11 items-center">
          <span className="sr-only">Month</span>
          <select
            value={month}
            onChange={(e) => setDate({ month: Number(e.target.value) })}
            className="h-11 max-w-[9.5rem] rounded-[var(--radius-md)] bg-surface-2 px-2 text-sm outline-none focus:ring-2 focus:ring-accent/40"
          >
            {MONTHS.map((name, i) => (
              <option key={name} value={i + 1}>
                {name}
              </option>
            ))}
          </select>
        </label>
        <label className="flex min-h-11 items-center">
          <span className="sr-only">Day</span>
          <select
            value={Math.min(day, dim)}
            onChange={(e) => setDate({ day: Number(e.target.value) })}
            className="h-11 w-[4.5rem] rounded-[var(--radius-md)] bg-surface-2 px-2 font-mono text-sm outline-none focus:ring-2 focus:ring-accent/40"
          >
            {Array.from({ length: dim }, (_, i) => i + 1).map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="mt-2 flex flex-col gap-1">
        <span className="sr-only">Timeline year {MIN_YEAR} to {MAX_YEAR}</span>
        <input
          type="range"
          min={MIN_YEAR}
          max={MAX_YEAR}
          step={1}
          value={shownYear}
          onChange={(e) => setDraftYear(Number(e.target.value))}
          onPointerUp={() => {
            if (draftYear != null) commitYear(draftYear);
          }}
          onTouchEnd={() => {
            if (draftYear != null) commitYear(draftYear);
          }}
          className="h-11 w-full accent-[var(--color-accent)]"
        />
        <span className="flex justify-between px-0.5 font-mono text-xs text-muted">
          {SLIDER_TICKS.map((y) => (
            <button key={y} type="button" className="min-h-11 px-1 hover:text-fg" onClick={() => commitYear(y)}>
              {y === 100 ? "100 CE" : y}
            </button>
          ))}
        </span>
      </label>
    </div>
  );
}

export function YearChips({ compact }: { compact?: boolean }) {
  const world = useEditor((s) => s.world);
  const setDate = useEditor((s) => s.setDate);
  const year = clampDateYear(world?.year ?? 2026);
  return (
    <div className={cn("flex flex-wrap gap-1.5", compact && "max-h-40 overflow-y-auto")}>
      {SNAPSHOT_YEARS.map((y) => (
        <button
          key={y}
          type="button"
          onClick={() => setDate({ year: y })}
          className={cn(
            "h-11 min-w-11 rounded-full px-3 font-mono text-sm",
            y === year ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted",
          )}
        >
          {y}
        </button>
      ))}
    </div>
  );
}

export function DateEventList() {
  const world = useEditor((s) => s.world);
  const setDate = useEditor((s) => s.setDate);
  const year = clampDateYear(world?.year ?? 2026);
  const month = clampMonth(world?.month ?? 1);
  const day = clampDay(year, month, world?.day ?? 1);
  return (
    <ul className="max-h-56 overflow-y-auto rounded-[var(--radius-md)] bg-surface-2">
      {HISTORICAL_DATES.map((d) => {
        const on = d.year === year && d.month === month && d.day === day;
        return (
          <li key={`${d.year}-${d.month}-${d.day}-${d.title}`} className="border-b border-border last:border-b-0">
            <button
              type="button"
              onClick={() => setDate({ year: d.year, month: d.month, day: d.day })}
              className={cn("flex min-h-11 w-full items-center justify-between gap-2 px-3 py-2 text-left", on && "bg-accent/20")}
            >
              <span className="min-w-0">
                <span className="block truncate text-sm">{d.title}</span>
                <span className="block truncate text-xs text-muted">
                  {fmtDate(d.year, d.month, d.day)} · {d.era}
                </span>
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

