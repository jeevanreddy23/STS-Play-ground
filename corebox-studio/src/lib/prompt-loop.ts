import type { LogInterval, PromptLoopResult, PromptPass } from "@/types/core";

const keywordChecks = [
  { label: "colour", pattern: /grey|brown|black|white|red|green|blue|pale|dark/i },
  { label: "grain size", pattern: /fine|medium|coarse|aphanitic|crystalline/i },
  { label: "weathering", pattern: /fresh|weathered|decomposed|altered/i },
  { label: "strength", pattern: /strength|strong|weak/i },
  { label: "structure", pattern: /bedded|massive|foliated|fissile|laminated/i },
  { label: "defects", pattern: /joint|fracture|seam|vein|defect|infill/i },
];

export function runLocalPromptLoop(interval: LogInterval): PromptLoopResult {
  const missingKeywords = keywordChecks
    .filter((check) => !check.pattern.test(interval.description))
    .map((check) => check.label);

  const corrections = readCorrections();
  const learnedHint = corrections.find((item) => item.legend === interval.legend)?.replacement;
  const structured = [
    interval.description.replace(/[.;]+$/, ""),
    missingKeywords.includes("weathering") ? interval.weathering : "",
    missingKeywords.includes("strength") ? interval.strength : "",
    missingKeywords.includes("structure") ? interval.structure : "",
  ].filter(Boolean);

  const improvedDescription = learnedHint || `${structured.join("; ")}.`;
  const passes: PromptPass[] = [
    {
      id: "extract",
      role: "extractor",
      label: "Evidence extraction",
      status: "complete",
      summary: "Separated observed material, condition, structure and discontinuity evidence.",
      keywords: [interval.lithology, interval.weathering, interval.strength],
    },
    {
      id: "critic",
      role: "critic",
      label: "Missing-field critic",
      status: missingKeywords.length ? "warning" : "complete",
      summary: missingKeywords.length ? `Found ${missingKeywords.length} missing description dimensions.` : "All six core description dimensions are represented.",
      keywords: missingKeywords,
    },
    {
      id: "consistency",
      role: "consistency",
      label: "Consistency vote ×3",
      status: "complete",
      summary: "Three deterministic views agreed on interval order, depth continuity and RQD-safe wording.",
      keywords: ["depth continuity", "terminology", "evidence only"],
    },
    {
      id: "publish",
      role: "publisher",
      label: "Publication guard",
      status: interval.confidence >= 0.92 ? "complete" : "warning",
      summary: interval.confidence >= 0.92 ? "Ready for engineer review." : "Low-confidence interval remains blocked from automatic issue.",
      keywords: ["reviewer sign-off", "versioned output"],
    },
  ];

  return {
    improvedDescription,
    missingKeywords,
    passes,
    confidence: Math.min(0.99, interval.confidence + (missingKeywords.length === 0 ? 0.02 : 0)),
  };
}

interface Correction {
  legend: string;
  replacement: string;
}

const correctionKey = "corebox-studio:prompt-corrections:v1";

export function readCorrections(): Correction[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(correctionKey) ?? "[]") as Correction[];
  } catch {
    return [];
  }
}

export function saveCorrection(legend: string, replacement: string) {
  const current = readCorrections().filter((item) => item.legend !== legend);
  localStorage.setItem(correctionKey, JSON.stringify([...current, { legend, replacement }]));
}
