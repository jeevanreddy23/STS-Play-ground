import type {
  CoreDefect,
  CoreProject,
  CoreRun,
  LogInterval,
} from "@/types/core";

interface AgsGroup {
  name: string;
  headings: string[];
  units: string[];
  types: string[];
  rows: Array<Array<string | number>>;
}

export interface AgsValidationItem {
  label: string;
  status: "pass" | "warn";
  detail: string;
}

const ascii = (value: string | number) =>
  String(value)
    .replace(/[–—]/g, "-")
    .replace(/°/g, " deg")
    .replace(/±/g, "+/-")
    .replace(/≥/g, ">=")
    .replace(/≤/g, "<=")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .normalize("NFKD")
    .replace(/[^\x20-\x7E]/g, "")
    .trim();

const field = (value: string | number) =>
  `"${ascii(value).replaceAll('"', '""')}"`;

const row = (descriptor: string, values: Array<string | number>) =>
  [field(descriptor), ...values.map(field)].join(",");

const groupToText = (group: AgsGroup) => {
  const lines = [
    row("GROUP", [group.name]),
    row("HEADING", group.headings),
    row("UNIT", group.units),
    row("TYPE", group.types),
    ...group.rows.map((values) => row("DATA", values)),
  ];
  return lines.join("\r\n");
};

export function buildAgs411(
  project: CoreProject,
  runs: CoreRun[],
  intervals: LogInterval[],
  defects: CoreDefect[],
) {
  const groups: AgsGroup[] = [
    {
      name: "PROJ",
      headings: ["PROJ_ID", "PROJ_NAME", "PROJ_LOC", "PROJ_CLNT", "PROJ_ENG", "PROJ_MEMO"],
      units: ["", "", "", "", "", ""],
      types: ["ID", "X", "X", "X", "X", "X"],
      rows: [[project.id, project.name, project.location, project.client, project.engineer, "Corebox Studio draft export"]],
    },
    {
      name: "LOCA",
      headings: ["LOCA_ID", "LOCA_TYPE", "LOCA_STAT", "LOCA_NATE", "LOCA_NATN", "LOCA_GREF", "LOCA_GL", "LOCA_FDEP", "LOCA_STAR"],
      units: ["", "", "", "m", "m", "", "m", "m", "yyyy-mm-dd"],
      types: ["ID", "PA", "PA", "2DP", "2DP", "PA", "2DP", "2DP", "DT"],
      rows: [[project.boreholeId, "RC", "PRELIM", project.easting.toFixed(2), project.northing.toFixed(2), project.gridReference, project.groundLevel.toFixed(2), project.finalDepth.toFixed(2), project.startedAt]],
    },
    {
      name: "GEOL",
      headings: ["LOCA_ID", "GEOL_TOP", "GEOL_BASE", "GEOL_DESC", "GEOL_LEG", "GEOL_REM", "FILE_FSET"],
      units: ["", "m", "m", "", "", "", ""],
      types: ["ID", "2DP", "2DP", "X", "PA", "X", "X"],
      rows: intervals.map((item) => [project.boreholeId, item.top.toFixed(2), item.base.toFixed(2), item.description, item.legend, `Confidence ${(item.confidence * 100).toFixed(0)}%; engineer review required`, "FS_CORE_17"]),
    },
    {
      name: "DETL",
      headings: ["LOCA_ID", "DETL_TOP", "DETL_BASE", "DETL_DESC", "DETL_REM", "FILE_FSET"],
      units: ["", "m", "m", "", "", ""],
      types: ["ID", "2DP", "2DP", "X", "X", "X"],
      rows: defects.map((item) => [project.boreholeId, item.depth.toFixed(2), item.depth.toFixed(2), `${item.type}: ${item.description}`, `${item.severity} severity; confidence ${(item.confidence * 100).toFixed(0)}%`, "FS_CORE_17"]),
    },
    {
      name: "CORE",
      headings: ["LOCA_ID", "CORE_TOP", "CORE_BASE", "CORE_PREC", "CORE_SREC", "CORE_RQD", "CORE_DIAM", "CORE_REM", "FILE_FSET"],
      units: ["", "m", "m", "%", "%", "%", "mm", "", ""],
      types: ["ID", "2DP", "2DP", "0DP", "0DP", "0DP", "0DP", "X", "X"],
      rows: runs.map((item) => [project.boreholeId, item.top.toFixed(2), item.base.toFixed(2), item.recovery, item.solidRecovery, item.rqd, item.diameterMm, `${item.id}; ${item.status}`, "FS_CORE_17"]),
    },
    {
      name: "FRAC",
      headings: ["LOCA_ID", "FRAC_FROM", "FRAC_TO", "FRAC_SET", "FRAC_FI", "FRAC_REM", "FILE_FSET"],
      units: ["", "m", "m", "", "", "", ""],
      types: ["ID", "2DP", "2DP", "X", "XN", "X", "X"],
      rows: defects
        .filter((item) => item.type.includes("fracture") || item.type.includes("joint"))
        .map((item) => [project.boreholeId, item.depth.toFixed(2), item.depth.toFixed(2), item.set ?? "UNCL", 1, item.description, "FS_CORE_17"]),
    },
    {
      name: "FILE",
      headings: ["FILE_FSET", "FILE_NAME", "FILE_DESC", "FILE_TYPE", "FILE_PROG", "FILE_DOCT", "FILE_DATE", "FILE_REM"],
      units: ["", "", "", "", "", "", "yyyy-mm-ddThh:mm", ""],
      types: ["X", "X", "X", "PA", "X", "PA", "DT", "X"],
      rows: [["FS_CORE_17", "BH-17_COREBOX_01840-02280.JPG", "Core tray source photograph", "JPG", "Corebox Studio 0.1", "PH", "2026-07-24T14:30", "Original image retained at full resolution"]],
    },
  ];

  return `${groups.map(groupToText).join("\r\n\r\n")}\r\n`;
}

export function validateAgsDraft(content: string): AgsValidationItem[] {
  const lines = content.split("\r\n").filter(Boolean);
  const groups = lines.filter((line) => line.startsWith('"GROUP"')).length;
  const headings = lines.filter((line) => line.startsWith('"HEADING"')).length;
  const types = lines.filter((line) => line.startsWith('"TYPE"')).length;
  const units = lines.filter((line) => line.startsWith('"UNIT"')).length;
  const dataRows = lines.filter((line) => line.startsWith('"DATA"')).length;
  const asciiOnly = /^[\x00-\x7F]*$/.test(content);
  const usesCrlf = content.includes("\r\n") && !content.replaceAll("\r\n", "").includes("\n");

  return [
    { label: "Descriptor sequence", status: groups === headings && groups === types && groups === units ? "pass" : "warn", detail: `${groups} groups with matching header rows` },
    { label: "ASCII character set", status: asciiOnly ? "pass" : "warn", detail: asciiOnly ? "Rule-ready ASCII output" : "Non-ASCII characters remain" },
    { label: "CRLF line endings", status: usesCrlf ? "pass" : "warn", detail: usesCrlf ? "Windows CRLF confirmed" : "Line ending mismatch" },
    { label: "Data population", status: dataRows > 0 ? "pass" : "warn", detail: `${dataRows} DATA rows across ${groups} groups` },
    { label: "Official dictionary validation", status: "warn", detail: "Run through python-ags4 or BGS AGS Validator before issue" },
  ];
}

export function downloadTextFile(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/plain;charset=us-ascii" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}
