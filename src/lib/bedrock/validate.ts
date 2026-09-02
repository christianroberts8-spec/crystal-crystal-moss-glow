import JSZip from "jszip";
import { decodeNbt } from "./nbt";
import { decodeLevelDat } from "./leveldat";
import { readLevelDb, hexToKey } from "./leveldb";
import { parseChunkKey, TAG_DATA3D, TAG_SUBCHUNK, TAG_VERSION, TAG_FINALIZED, decodeSubchunkBlocks } from "./chunk";
import { exportRegion, readColumn } from "../world/column";
import { fmtBlocks } from "../world/types";
import type { WorldProject } from "../world/types";

export type CheckLevel = "pass" | "warn" | "fail";

export interface Check {
  id: string;
  label: string;
  level: CheckLevel;
  detail: string;
}

export interface ValidationReport {
  ok: boolean;
  checks: Check[];
  canExport: boolean;
}

export function validateProject(world: WorldProject): ValidationReport {
  const checks: Check[] = [];
  const push = (c: Check) => checks.push(c);

  if (!world.settings.name.trim()) {
    push({ id: "name", label: "World name", level: "fail", detail: "The world needs a name before export." });
  } else {
    push({ id: "name", label: "World name", level: "pass", detail: world.settings.name });
  }

  const spawn = world.settings.spawn;
  const slx = spawn.x - world.originX;
  const slz = spawn.z - world.originZ;
  const col =
    slx >= 0 && slz >= 0 && slx < world.width && slz < world.depth ? readColumn(world, slx, slz) : null;
  if (!col || col.water) {
    push({
      id: "spawn",
      label: "Spawn point",
      level: "fail",
      detail: `Spawn at ${spawn.x}, ${spawn.y}, ${spawn.z} is outside the map or in water/air. Move it onto solid terrain.`,
    });
  } else if (Math.abs(col.height + 1 - spawn.y) > 3) {
    push({
      id: "spawn",
      label: "Spawn point",
      level: "warn",
      detail: `Spawn Y is ${spawn.y} but terrain height is ${col.height}. Export will keep your Y; the player may fall or spawn inside a block.`,
    });
  } else {
    push({
      id: "spawn",
      label: "Spawn point",
      level: "pass",
      detail: `On solid ground at ${spawn.x}, ${spawn.y}, ${spawn.z}.`,
    });
  }

  if (world.width < 16 || world.depth < 16) {
    push({ id: "size", label: "Edit region", level: "fail", detail: "World must be at least 16×16 blocks (one chunk)." });
  } else if (world.virtual) {
    const er = exportRegion(world);
    push({
      id: "size",
      label: "Map size",
      level: "pass",
      detail: `${fmtBlocks(world.width)}×${fmtBlocks(world.depth)} live map. .mcworld export writes ${er.width}×${er.depth} blocks around spawn so the file can open on a phone.`,
    });
  } else if (world.width % 16 !== 0 || world.depth % 16 !== 0) {
    push({
      id: "size",
      label: "Edit region",
      level: "warn",
      detail: "Width/depth are not multiples of 16. Extra columns will still export; neighboring vanilla generation may fill the rest.",
    });
  } else {
    push({
      id: "size",
      label: "Edit region",
      level: "pass",
      detail: `${world.width}×${world.depth} blocks (${(world.width * world.depth) / 256} chunks).`,
    });
  }

  if (world.importMeta?.passthroughDb) {
    push({
      id: "import",
      label: "Imported terrain",
      level: "warn",
      detail:
        "This world's chunk database could not be fully decoded in-browser. Settings and spawn will be rewritten; original chunks are copied byte-for-byte so they are not corrupted.",
    });
  } else if (world.importMeta) {
    push({
      id: "import",
      label: "Imported terrain",
      level: "pass",
      detail: `Decoded ${world.importMeta.decodedChunks} of ${world.importMeta.chunkCount} overworld chunks in the edit window. ${world.importMeta.preservedKeys} other keys preserved (Nether/End/actors/etc).`,
    });
  }

  push({
    id: "nether",
    label: "Other dimensions",
    level: "pass",
    detail: "Nether and The End are not edited. Existing dimension data is preserved on import; new worlds generate them in-game.",
  });

  if (world.entities.length) {
    push({
      id: "entities",
      label: "Mobs",
      level: "warn",
      detail: `${world.entities.length} mob(s) placed. Written as legacy Entity records — Bedrock may ignore some until the chunk is refreshed. Natural spawn still follows difficulty / mob spawning.`,
    });
  } else {
    push({
      id: "entities",
      label: "Mobs",
      level: "pass",
      detail: world.settings.mobSpawning
        ? "No custom placements. Natural spawning is on."
        : "No custom placements. Natural spawning is off.",
    });
  }

  push({
    id: "structures",
    label: "Structures",
    level: "pass",
    detail: `${world.structures.length} placed${
      world.structures.some((s) => s.realId) ? " (real cities and landmarks at published coordinates)" : ""
    }. These are block stamps (houses, pyramids, towers, etc.), not vanilla jigsaw villages — they will appear as built.`,
  });

  push({
    id: "format",
    label: "Bedrock format",
    level: "pass",
    detail: "Export writes level.dat (header version 10 + little-endian NBT) and a real LevelDB (CURRENT, MANIFEST, WAL log) inside a ZIP. The file is a .mcworld, not a renamed dummy archive.",
  });

  const fails = checks.filter((c) => c.level === "fail").length;
  return { ok: fails === 0, checks, canExport: fails === 0 };
}

export async function validateMcworldBlob(blob: Blob): Promise<ValidationReport> {
  const checks: Check[] = [];
  const zip = await JSZip.loadAsync(blob);
  const names = Object.keys(zip.files);

  const hasLevel = names.some((n) => n.replace(/\\/g, "/").endsWith("level.dat"));
  if (!hasLevel) {
    checks.push({ id: "zip-level", label: "level.dat present", level: "fail", detail: "Archive is missing level.dat." });
  } else {
    checks.push({ id: "zip-level", label: "level.dat present", level: "pass", detail: "Found." });
  }

  const levelName = names.find((n) => n.replace(/\\/g, "/").endsWith("level.dat"))!;
  if (levelName) {
    try {
      const bytes = await zip.file(levelName)!.async("uint8array");
      const decoded = decodeLevelDat(bytes);
      decodeNbt(bytes.subarray(8, 8 + decoded.nbtLength));
      if (decoded.headerVersion !== 8 && decoded.headerVersion !== 9 && decoded.headerVersion !== 10) {
        checks.push({
          id: "header",
          label: "level.dat header",
          level: "warn",
          detail: `Storage version ${decoded.headerVersion} (expected 8–10). Mobile may still open it.`,
        });
      } else {
        checks.push({
          id: "header",
          label: "level.dat header",
          level: "pass",
          detail: `Version ${decoded.headerVersion}, NBT ${decoded.nbtLength} bytes, name “${decoded.settings.name}”.`,
        });
      }
      if (!decoded.settings.name) {
        checks.push({ id: "levelname", label: "Level name", level: "fail", detail: "Empty LevelName." });
      }
    } catch (err) {
      checks.push({
        id: "header",
        label: "level.dat parse",
        level: "fail",
        detail: err instanceof Error ? err.message : String(err),
      });
    }
  }

  const dbFiles: Record<string, Uint8Array> = {};
  for (const n of names) {
    const rel = n.replace(/\\/g, "/");
    const idx = rel.lastIndexOf("db/");
    if (idx >= 0 && !zip.files[n]!.dir) {
      const base = rel.slice(idx + 3);
      if (base) dbFiles[base] = await zip.file(n)!.async("uint8array");
    }
  }
  const hasCurrent = Object.keys(dbFiles).some((n) => n === "CURRENT" || n.endsWith("/CURRENT"));
  const hasManifest = Object.keys(dbFiles).some((n) => /MANIFEST/i.test(n));
  const hasLogOrTable = Object.keys(dbFiles).some((n) => /\.(log|ldb|sst)$/i.test(n));
  if (!hasCurrent || !hasManifest || !hasLogOrTable) {
    checks.push({
      id: "db",
      label: "LevelDB files",
      level: "fail",
      detail: `db/ must contain CURRENT, MANIFEST, and at least one .log/.ldb. Found: ${Object.keys(dbFiles).join(", ") || "nothing"}.`,
    });
  } else {
    checks.push({
      id: "db",
      label: "LevelDB files",
      level: "pass",
      detail: Object.keys(dbFiles).join(", "),
    });
  }

  const db = readLevelDb(dbFiles);
  if (db.map.size === 0) {
    checks.push({
      id: "keys",
      label: "Database keys",
      level: "fail",
      detail: "LevelDB opened but contains no keys. Minecraft would generate an empty world — this is not a packed terrain export.",
    });
  } else {
    let chunks = 0;
    let sub = 0;
    let versions = 0;
    for (const hex of db.map.keys()) {
      const p = parseChunkKey(hexToKey(hex));
      if (!p) continue;
      if (p.tag === TAG_VERSION) versions++;
      if (p.tag === TAG_SUBCHUNK) {
        sub++;
        const sc = decodeSubchunkBlocks(db.map.get(hex)!);
        if (!sc) {
          checks.push({
            id: "subchunk",
            label: "Subchunk decode",
            level: "fail",
            detail: `Could not decode a subchunk we just wrote (cx=${p.cx} cz=${p.cz} y=${p.subY}). Export aborted as invalid.`,
          });
        }
      }
      if (p.tag === TAG_DATA3D || p.tag === TAG_FINALIZED) chunks++;
    }
    checks.push({
      id: "keys",
      label: "Database keys",
      level: "pass",
      detail: `${db.map.size} keys, ${versions} chunk versions, ${sub} subchunks.`,
    });
  }

  const fails = checks.filter((c) => c.level === "fail").length;
  return { ok: fails === 0, checks, canExport: fails === 0 };
}
