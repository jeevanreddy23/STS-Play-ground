import type {
  CoreDefect,
  CorePiece,
  CoreProject,
  CoreRun,
  LogInterval,
  PhotoCrop,
} from "@/types/core";

export const sourcePhotoUrl = "/evidence/32904_BH7_00760-01673_source.png";

export const project: CoreProject = {
  id: "32904",
  name: "105–113 Hollinsworth Road",
  client: "BY GROUP",
  location: "Marsden Park, NSW",
  engineer: "STS Geotechnics",
  boreholeId: "BH7",
  easting: null,
  northing: null,
  groundLevel: null,
  gridReference: "Not shown in photograph",
  finalDepth: 16.73,
  startedAt: "2026-06-19",
};

export const defects: CoreDefect[] = [
  {
    id: "OBS-0768",
    type: "uncertain break",
    depth: 7.68,
    severity: "high",
    confidence: 0.58,
    description: "Visible fragmented zone; natural versus drilling or handling origin is unresolved from the single photograph.",
  },
  {
    id: "OBS-0831",
    type: "uncertain break",
    depth: 8.31,
    severity: "high",
    confidence: 0.64,
    description: "Cluster of short angular fragments visible in the 8–9 m row; origin requires physical core review.",
  },
  {
    id: "OBS-0947",
    type: "uncertain break",
    depth: 9.47,
    severity: "medium",
    confidence: 0.61,
    description: "Apparent discontinuity cluster; depth is a row-calibrated visual estimate pending survey-scale confirmation.",
  },
  {
    id: "OBS-1256",
    type: "uncertain break",
    depth: 12.56,
    severity: "medium",
    confidence: 0.57,
    description: "Broken interval visible near the middle of the row; mechanical-break reconciliation has not been performed.",
  },
  {
    id: "OBS-1474",
    type: "uncertain break",
    depth: 14.74,
    severity: "high",
    confidence: 0.67,
    description: "Strongly fragmented zone visible toward the right of the 14–15 m row; engineering classification is pending.",
  },
  {
    id: "OBS-1514",
    type: "uncertain break",
    depth: 15.14,
    severity: "high",
    confidence: 0.65,
    description: "Fragment cluster visible at the start of the 15–16 m row; natural and induced breaks remain unseparated.",
  },
  {
    id: "OBS-1646",
    type: "uncertain break",
    depth: 16.46,
    severity: "medium",
    confidence: 0.62,
    description: "Multiple visible breaks in the final row; depth and origin require reviewer confirmation.",
  },
];

const row = (
  id: string,
  rowIndex: number,
  top: number,
  base: number,
  materialColor: string,
  photoCrop: PhotoCrop,
  defectIds: string[] = [],
  rowOffsetM = 0,
): CorePiece => ({
  id,
  row: rowIndex,
  top,
  base,
  diameterMm: null,
  lithology: "Dark grey rock — field classification pending",
  materialColor,
  includedInRqd: null,
  confidence: 0.58,
  defectIds,
  approved: false,
  photoCrop,
  rowOffsetM,
  evidenceBasis: "observed",
});

export const pieces: CorePiece[] = [
  row("ROW-07.60", 0, 7.6, 8.0, "#575955", { x: 0.13, y: 0.319, width: 0.79, height: 0.052 }, ["OBS-0768"], 0.6),
  row("ROW-08.00", 1, 8.0, 9.0, "#51534f", { x: 0.13, y: 0.374, width: 0.79, height: 0.052 }, ["OBS-0831"]),
  row("ROW-09.00", 2, 9.0, 10.0, "#5b5d5a", { x: 0.13, y: 0.429, width: 0.79, height: 0.052 }, ["OBS-0947"]),
  row("ROW-10.00", 3, 10.0, 11.0, "#545652", { x: 0.13, y: 0.484, width: 0.79, height: 0.052 }),
  row("ROW-11.00", 4, 11.0, 12.0, "#555754", { x: 0.13, y: 0.536, width: 0.79, height: 0.052 }),
  row("ROW-12.00", 5, 12.0, 13.0, "#4e514e", { x: 0.13, y: 0.597, width: 0.79, height: 0.054 }, ["OBS-1256"]),
  row("ROW-13.00", 6, 13.0, 14.0, "#555855", { x: 0.13, y: 0.653, width: 0.79, height: 0.054 }),
  row("ROW-14.00", 7, 14.0, 15.0, "#4d504d", { x: 0.13, y: 0.708, width: 0.79, height: 0.054 }, ["OBS-1474"]),
  row("ROW-15.00", 8, 15.0, 16.0, "#50524f", { x: 0.13, y: 0.765, width: 0.79, height: 0.054 }, ["OBS-1514"]),
  row("ROW-16.00", 9, 16.0, 16.73, "#4b4e4b", { x: 0.13, y: 0.821, width: 0.79, height: 0.058 }, ["OBS-1646"]),
];

export const runs: CoreRun[] = pieces.map((piece, index) => ({
  id: `RUN-${String(index + 1).padStart(2, "0")}`,
  top: piece.top,
  base: piece.base,
  recovery: null,
  solidRecovery: null,
  rqd: null,
  diameterMm: null,
  status: "review",
}));

export const intervals: LogInterval[] = [
  {
    id: "PHOTO-OBS-01",
    top: 7.6,
    base: 16.73,
    legend: "UNCL",
    lithology: "dark grey rock — unclassified",
    weathering: "not assigned from photograph",
    strength: "not assigned from photograph",
    structure: "locally banded appearance; confirmation required",
    description: "Dark grey, apparently fine-grained rock core. Lithology, weathering and strength are not assigned from this single photograph. Several fragmented zones and apparent breaks are visible; natural versus mechanical origin requires physical core review.",
    confidence: 0.55,
  },
];
