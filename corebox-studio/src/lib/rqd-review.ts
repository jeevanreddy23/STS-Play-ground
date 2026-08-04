export type ReviewState = "pending" | "accepted";

export interface DetectionDraft {
  id: string;
  row: number;
  x: number;
  width: number;
  detectionReview: ReviewState;
  maskReview: ReviewState;
  includedInRqd: boolean;
  foregroundPoints: number;
  backgroundPoints: number;
}

export interface RqdDraftResult {
  rqd: number | null;
  qualifyingLengthMm: number;
  measuredLengthMm: number;
  pieceLengthsMm: Array<{ id: string; lengthMm: number; qualifies: boolean }>;
  blockedReasons: string[];
}

/**
 * Deterministic RQD draft from reviewed horizontal extents.
 * The function deliberately refuses to calculate without an explicit physical
 * tray span and reviewed detection/mask evidence.
 */
export function calculateReviewedRqd(
  detections: DetectionDraft[],
  traySpanMm: number | null,
  runLengthMm: number | null,
): RqdDraftResult {
  const blockedReasons: string[] = [];

  if (!traySpanMm || traySpanMm <= 0) blockedReasons.push("Enter the measured internal tray span.");
  if (!runLengthMm || runLengthMm <= 0) blockedReasons.push("Confirm the drilled run length.");
  if (detections.some((item) => item.detectionReview !== "accepted")) blockedReasons.push("Accept or correct every detection box.");
  if (detections.some((item) => item.maskReview !== "accepted")) blockedReasons.push("Accept or correct every segmentation mask.");

  if (blockedReasons.length || !traySpanMm || !runLengthMm) {
    return { rqd: null, qualifyingLengthMm: 0, measuredLengthMm: 0, pieceLengthsMm: [], blockedReasons };
  }

  const pieceLengthsMm = detections.map((item) => {
    const lengthMm = Math.round(item.width * traySpanMm);
    return { id: item.id, lengthMm, qualifies: item.includedInRqd && lengthMm >= 100 };
  });
  const qualifyingLengthMm = pieceLengthsMm.reduce((total, item) => total + (item.qualifies ? item.lengthMm : 0), 0);
  const measuredLengthMm = pieceLengthsMm.reduce((total, item) => total + item.lengthMm, 0);

  return {
    rqd: Math.round((qualifyingLengthMm / runLengthMm) * 1000) / 10,
    qualifyingLengthMm,
    measuredLengthMm,
    pieceLengthsMm,
    blockedReasons,
  };
}
