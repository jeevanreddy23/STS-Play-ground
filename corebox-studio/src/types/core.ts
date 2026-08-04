export type Severity = "low" | "medium" | "high";

export type DefectType =
  | "natural fracture"
  | "mechanical break"
  | "open joint"
  | "weathered seam"
  | "core loss"
  | "vein"
  | "uncertain break";

export interface PhotoCrop {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface CoreDefect {
  id: string;
  type: DefectType;
  depth: number;
  severity: Severity;
  confidence: number;
  description: string;
  set?: string;
}

export interface CorePiece {
  id: string;
  row: number;
  top: number;
  base: number;
  diameterMm: number | null;
  lithology: string;
  materialColor: string;
  includedInRqd: boolean | null;
  confidence: number;
  defectIds: string[];
  approved: boolean;
  photoCrop?: PhotoCrop;
  rowOffsetM?: number;
  evidenceBasis?: "observed" | "inferred" | "corrected";
}

export interface CoreRun {
  id: string;
  top: number;
  base: number;
  recovery: number | null;
  solidRecovery: number | null;
  rqd: number | null;
  diameterMm: number | null;
  status: "approved" | "review";
}

export interface LogInterval {
  id: string;
  top: number;
  base: number;
  legend: string;
  lithology: string;
  weathering: string;
  strength: string;
  structure: string;
  description: string;
  confidence: number;
}

export interface CoreProject {
  id: string;
  name: string;
  client: string;
  location: string;
  engineer: string;
  boreholeId: string;
  easting: number | null;
  northing: number | null;
  groundLevel: number | null;
  gridReference: string;
  finalDepth: number;
  startedAt: string;
}

export interface PromptPass {
  id: string;
  role: "extractor" | "critic" | "consistency" | "publisher";
  label: string;
  status: "complete" | "warning";
  summary: string;
  keywords: string[];
}

export interface PromptLoopResult {
  improvedDescription: string;
  missingKeywords: string[];
  passes: PromptPass[];
  confidence: number;
}
