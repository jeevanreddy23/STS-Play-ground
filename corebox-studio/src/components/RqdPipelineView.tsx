"use client";

import Image from "next/image";
import {
  AlertTriangle,
  ArrowRight,
  BoxSelect,
  Braces,
  Check,
  CheckCircle2,
  Crop,
  Eye,
  GitCompareArrows,
  LockKeyhole,
  MousePointer2,
  RotateCcw,
  Ruler,
  ScanLine,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useMemo, useState } from "react";
import { sourcePhotoUrl } from "@/data/demo";
import { calculateReviewedRqd, type DetectionDraft } from "@/lib/rqd-review";

const initialDetections: DetectionDraft[] = [
  { id: "P-01", row: 8, x: 0.01, width: 0.13, detectionReview: "pending", maskReview: "pending", includedInRqd: true, foregroundPoints: 0, backgroundPoints: 0 },
  { id: "P-02", row: 8, x: 0.16, width: 0.08, detectionReview: "pending", maskReview: "pending", includedInRqd: false, foregroundPoints: 0, backgroundPoints: 0 },
  { id: "P-03", row: 8, x: 0.27, width: 0.19, detectionReview: "pending", maskReview: "pending", includedInRqd: true, foregroundPoints: 0, backgroundPoints: 0 },
  { id: "P-04", row: 8, x: 0.48, width: 0.12, detectionReview: "pending", maskReview: "pending", includedInRqd: true, foregroundPoints: 0, backgroundPoints: 0 },
  { id: "P-05", row: 8, x: 0.62, width: 0.18, detectionReview: "pending", maskReview: "pending", includedInRqd: true, foregroundPoints: 0, backgroundPoints: 0 },
  { id: "P-06", row: 8, x: 0.82, width: 0.17, detectionReview: "pending", maskReview: "pending", includedInRqd: true, foregroundPoints: 0, backgroundPoints: 0 },
];

const pipelineNodes = [
  { title: "Core photo", note: "checksum-linked evidence", icon: Eye, state: "done" },
  { title: "Rectify", note: "perspective + row crop", icon: Crop, state: "review" },
  { title: "YOLO11", note: "piece proposals", icon: BoxSelect, state: "draft" },
  { title: "Box check", note: "edit → rerun SAM", icon: MousePointer2, state: "review" },
  { title: "SAM", note: "fine masks from boxes", icon: Sparkles, state: "blocked" },
  { title: "Mask check", note: "± points → recalc", icon: ScanLine, state: "blocked" },
  { title: "Measure", note: "scale + centreline", icon: Ruler, state: "blocked" },
  { title: "RQD check", note: "tolerance comparison", icon: GitCompareArrows, state: "blocked" },
  { title: "Issue", note: "JSON → 3D / AGS / PDF", icon: Braces, state: "blocked" },
] as const;

export default function RqdPipelineView() {
  const [detections, setDetections] = useState(initialDetections);
  const [selectedId, setSelectedId] = useState(initialDetections[0].id);
  const [traySpan, setTraySpan] = useState("");
  const [runLength, setRunLength] = useState("");
  const [markersConfirmed, setMarkersConfirmed] = useState(false);
  const [orientationConfirmed, setOrientationConfirmed] = useState(false);
  const [breaksReviewed, setBreaksReviewed] = useState(false);
  const [displacedReviewed, setDisplacedReviewed] = useState(false);
  const [comparisonAccepted, setComparisonAccepted] = useState(false);

  const selected = detections.find((item) => item.id === selectedId) ?? detections[0];
  const result = useMemo(
    () => calculateReviewedRqd(detections, Number(traySpan) || null, Number(runLength) || null),
    [detections, traySpan, runLength],
  );
  const intakeComplete = markersConfirmed && orientationConfirmed && breaksReviewed && displacedReviewed;
  const canIssue = result.rqd !== null && comparisonAccepted && intakeComplete;

  const updateSelected = (patch: Partial<DetectionDraft>) => {
    setComparisonAccepted(false);
    setDetections((current) => current.map((item) => item.id === selectedId ? { ...item, ...patch } : item));
  };

  const adjustBox = (xDelta: number, widthDelta: number) => {
    const nextWidth = Math.min(0.4, Math.max(0.02, selected.width + widthDelta));
    const nextX = Math.min(1 - nextWidth, Math.max(0, selected.x + xDelta));
    updateSelected({ x: nextX, width: nextWidth, detectionReview: "pending", maskReview: "pending" });
  };

  const acceptAllDetections = () => {
    setComparisonAccepted(false);
    setDetections((current) => current.map((item) => ({ ...item, detectionReview: "accepted" })));
  };

  const acceptAllMasks = () => {
    setComparisonAccepted(false);
    setDetections((current) => current.map((item) => ({ ...item, maskReview: "accepted" })));
  };

  return (
    <section className="page-card rqd-pipeline-view">
      <div className="pipeline-hero">
        <div>
          <span className="eyebrow"><ScanLine size={14} /> Review-gated RQD autopilot</span>
          <h1>Photo evidence → defensible engineering data</h1>
          <p>Architecture adapted from the published YOLO11→SAM workflow. This screen is a correction prototype: no model has been run and no defect or length is invented.</p>
        </div>
        <div className="pipeline-contract">
          <ShieldCheck size={20} />
          <span><strong>95% auto-logging gate</strong><small>Below threshold: request evidence or human review</small></span>
        </div>
      </div>

      <div className="paper-pipeline" aria-label="YOLO to SAM RQD processing graph">
        {pipelineNodes.map((node, index) => {
          const Icon = node.icon;
          return <div className={`paper-node ${node.state}`} key={node.title}>
            <span><Icon size={15} /></span><strong>{node.title}</strong><small>{node.note}</small>
            {index < pipelineNodes.length - 1 ? <ArrowRight className="paper-arrow" size={14} /> : null}
          </div>;
        })}
      </div>

      <div className="pipeline-workbench">
        <div className="annotation-studio">
          <div className="studio-head">
            <div><span className="eyebrow">Experiment 01 · BH7 row 8–9 m</span><h2>Detection and mask correction</h2></div>
            <span className="draft-chip"><AlertTriangle size={12} /> Draft annotations · model not executed</span>
          </div>
          <div className="annotation-canvas">
            <Image src={sourcePhotoUrl} alt="BH7 source core box with draft piece detections" fill sizes="(max-width: 900px) 100vw, 64vw" unoptimized priority />
            <div className="active-row-window" />
            {detections.map((item) => (
              <button
                key={item.id}
                className={`detection-box ${item.id === selectedId ? "selected" : ""} ${item.detectionReview === "accepted" ? "accepted" : ""}`}
                style={{ left: `${13 + item.x * 79}%`, top: "37.4%", width: `${item.width * 79}%`, height: "5.2%" }}
                onClick={() => setSelectedId(item.id)}
                aria-label={`Select draft detection ${item.id}`}
              ><span>{item.id}</span></button>
            ))}
          </div>
          <div className="studio-foot">
            <span><Eye size={13} /> Original photo remains the source of truth</span>
            <span><RotateCcw size={13} /> Every edit invalidates downstream calculation</span>
            <span><LockKeyhole size={13} /> Local prototype; no API request</span>
          </div>
        </div>

        <aside className="correction-panel">
          <div className="correction-head"><span className="eyebrow">Selected proposal</span><strong>{selected.id}</strong></div>
          <div className="correction-section">
            <div className="checker-title"><span><BoxSelect size={15} /> Detection checker</span><em className={selected.detectionReview}>{selected.detectionReview}</em></div>
            <p>Adjust the box to the visible piece boundary, then accept it.</p>
            <div className="nudge-grid">
              <button onClick={() => adjustBox(-0.01, 0)}>← move</button><button onClick={() => adjustBox(0.01, 0)}>move →</button>
              <button onClick={() => adjustBox(0.005, -0.01)}>shrink</button><button onClick={() => adjustBox(-0.005, 0.01)}>grow</button>
            </div>
            <button className="primary-button full" onClick={() => updateSelected({ detectionReview: "accepted" })}><Check size={14} /> Accept box</button>
          </div>
          <div className="correction-section">
            <div className="checker-title"><span><ScanLine size={15} /> Mask checker</span><em className={selected.maskReview}>{selected.maskReview}</em></div>
            <p>Add corrective prompts before accepting the mask proposal.</p>
            <div className="mask-buttons">
              <button onClick={() => updateSelected({ foregroundPoints: selected.foregroundPoints + 1, maskReview: "pending" })}>+ foreground <b>{selected.foregroundPoints}</b></button>
              <button onClick={() => updateSelected({ backgroundPoints: selected.backgroundPoints + 1, maskReview: "pending" })}>− background <b>{selected.backgroundPoints}</b></button>
            </div>
            <button className="primary-button full" disabled={selected.detectionReview !== "accepted"} onClick={() => updateSelected({ maskReview: "accepted" })}><Check size={14} /> Accept mask</button>
          </div>
          <div className="correction-section compact">
            <div className="checker-title"><span>RQD inclusion</span><em>{selected.includedInRqd ? "include" : "exclude"}</em></div>
            <button className="quiet-button full" onClick={() => updateSelected({ includedInRqd: !selected.includedInRqd })}>Toggle reviewed break decision</button>
          </div>
          <div className="bulk-review"><button onClick={acceptAllDetections}>Accept all boxes</button><button onClick={acceptAllMasks}>Accept all masks</button></div>
        </aside>
      </div>

      <div className="evidence-and-result">
        <section className="reverse-intake">
          <div className="panel-title"><div><span className="eyebrow">Reverse prompt · ask only unknowns</span><h2>Measurement evidence</h2></div><strong>{intakeComplete ? "4/4" : `${[markersConfirmed, orientationConfirmed, breaksReviewed, displacedReviewed].filter(Boolean).length}/4`} reviewed</strong></div>
          <div className="measurement-inputs">
            <label>Measured internal tray span <span>mm</span><input inputMode="decimal" value={traySpan} onChange={(event) => { setTraySpan(event.target.value); setComparisonAccepted(false); }} placeholder="Required" /></label>
            <label>Confirmed drilled run length <span>mm</span><input inputMode="decimal" value={runLength} onChange={(event) => { setRunLength(event.target.value); setComparisonAccepted(false); }} placeholder="Required" /></label>
          </div>
          <div className="intake-checks">
            {[
              ["Run markers", "Depth/run markers reconciled", markersConfirmed, setMarkersConfirmed],
              ["Orientation", "Logging direction confirmed", orientationConfirmed, setOrientationConfirmed],
              ["Break origin", "Mechanical breaks reviewed", breaksReviewed, setBreaksReviewed],
              ["Displacement", "Displaced pieces reviewed", displacedReviewed, setDisplacedReviewed],
            ].map(([label, note, value, setter]) => (
              <button key={label as string} className={value ? "checked" : ""} onClick={() => (setter as (value: boolean) => void)(!value)}>
                <span>{value ? <Check size={13} /> : null}</span><strong>{label as string}</strong><small>{note as string}</small>
              </button>
            ))}
          </div>
        </section>

        <section className="rqd-result-card">
          <div className="panel-title"><div><span className="eyebrow">Deterministic result</span><h2>Reviewed RQD</h2></div><span className={`result-state ${canIssue ? "ready" : "blocked"}`}>{canIssue ? "issue-ready" : "blocked"}</span></div>
          {result.rqd === null ? (
            <div className="blocked-result"><LockKeyhole size={24} /><strong>Calculation withheld</strong><p>{result.blockedReasons[0] ?? "Complete evidence review."}</p><ul>{result.blockedReasons.slice(1).map((reason) => <li key={reason}>{reason}</li>)}</ul></div>
          ) : (
            <>
              <div className="rqd-number"><strong>{result.rqd}%</strong><span>Σ qualifying pieces ≥100 mm / confirmed run length</span></div>
              <div className="rqd-metrics"><span>Measured<strong>{result.measuredLengthMm} mm</strong></span><span>Qualifying<strong>{result.qualifyingLengthMm} mm</strong></span><span>Pieces<strong>{result.pieceLengthsMm.length}</strong></span></div>
              <button className={`comparison-button ${comparisonAccepted ? "accepted" : ""}`} onClick={() => setComparisonAccepted((value) => !value)}>
                {comparisonAccepted ? <CheckCircle2 size={17} /> : <GitCompareArrows size={17} />}
                <span><strong>{comparisonAccepted ? "Engineering comparison accepted" : "Compare with engineering log"}</strong><small>Inspect included pieces and confirm the result is within project tolerance.</small></span>
              </button>
            </>
          )}
          <div className="issue-contract"><Braces size={15} /><span><strong>JSON-first handoff</strong><small>{canIssue ? "Unlocked for depth-linked 3D, AGS and PDF generation." : "Downstream 3D, AGS and PDF remain locked."}</small></span></div>
        </section>
      </div>

      <div className="research-boundary"><AlertTriangle size={16} /><p><strong>3D scope boundary</strong><span>Production 3D is a depth-linked borehole information model using reviewed surface evidence. Micro-CT diffusion may inform future research, but this product does not reconstruct hidden rock volume from one phone photograph.</span></p></div>
    </section>
  );
}
