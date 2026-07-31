from __future__ import annotations

from .models import (
    CaptureEvidence,
    CoreRunEvidence,
    DiscontinuityEvidence,
    GeologicalInterval,
    StageResult,
)


def assess_capture_quality(evidence: CaptureEvidence) -> StageResult:
    """Apply evidence-capture gates before any interpretation or measurement."""
    findings: list[str] = []
    blockers: list[str] = []

    if not evidence.corners_visible:
        blockers.append("All four tray corners are required for homography rectification.")
    if evidence.scale_marker_mm is None:
        blockers.append("A known round scale marker is required for defensible length calibration.")
    if evidence.end_occlusion:
        blockers.append("Core-end occlusion can bias measured piece length and RQD.")
    if not evidence.tags_between_rows:
        findings.append("Move depth tags into inter-row gaps to reduce core masking.")
    if evidence.glare_fraction > 0.08:
        findings.append("Glare exceeds the 8% review threshold; recapture with diffuse lighting.")
    if evidence.water_present:
        findings.append("Wet-core appearance may reduce contrast; retain wet/dry state as metadata.")

    status = "fail" if blockers else "review" if findings else "pass"
    return StageResult(
        stage="capture_qa",
        status=status,
        action="qualify_corebox_photograph",
        findings=[*blockers, *findings] or ["Capture evidence satisfies the configured quality gates."],
        metrics={
            "megapixels": round(evidence.width_px * evidence.height_px / 1_000_000, 2),
            "glare_fraction": evidence.glare_fraction,
            "row_count": evidence.row_count,
        },
        evidence_refs=[evidence.image_path],
    )


def plan_rectification(evidence: CaptureEvidence) -> StageResult:
    """Describe the paper-aligned rectification action without claiming CV execution."""
    ready = evidence.corners_visible and evidence.scale_marker_mm is not None
    return StageResult(
        stage="rectification",
        status="pass" if ready else "fail",
        action="rectify_tray_perspective",
        findings=[
            "Four-corner homography is configured; preserve the source image and transform matrix."
            if ready
            else "Rectification cannot proceed until corners and scale evidence are available."
        ],
        metrics={"target_inference_frame_px": 640, "source_preserved": True},
        evidence_refs=[evidence.image_path],
    )


def plan_detection_and_segmentation(evidence: CaptureEvidence) -> StageResult:
    """Register the open-source YOLO-to-SAM inference contract and evidence outputs."""
    return StageResult(
        stage="vision",
        status="review",
        action="detect_then_segment_core",
        findings=[
            "Pipeline contract: detector boxes become promptable-segmentation inputs.",
            "Runtime adapter is required before masks can be treated as measured evidence.",
            "Keep per-piece boxes, masks, confidence, model hash and source-image coordinates.",
        ],
        metrics={
            "detector_family": "YOLO11-compatible",
            "segmenter_family": "SAM-compatible",
            "rows_expected": evidence.row_count,
            "execution_mode": "contract_only",
        },
        evidence_refs=[evidence.image_path],
    )


def calculate_rqd(runs: list[CoreRunEvidence]) -> StageResult:
    """Calculate RQD from recovered core-piece lengths using the 100 mm threshold."""
    observations: list[dict[str, float | str | int]] = []
    findings: list[str] = []
    statuses: list[str] = []

    for run in runs:
        run_length_mm = (run.base_m - run.top_m) * 1000
        if run_length_mm <= 0:
            statuses.append("fail")
            findings.append(f"{run.run_id}: base depth must exceed top depth.")
            continue
        sound_length_mm = sum(length for length in run.recovered_piece_lengths_mm if length >= 100)
        recovered_length_mm = sum(run.recovered_piece_lengths_mm)
        rqd = min(100.0, sound_length_mm / run_length_mm * 100)
        recovery = min(100.0, recovered_length_mm / run_length_mm * 100)
        observations.append(
            {
                "run_id": run.run_id,
                "rqd_percent": round(rqd, 1),
                "recovery_percent": round(recovery, 1),
                "qualifying_length_mm": round(sound_length_mm, 1),
                "mechanical_break_pairs": run.mechanical_break_pairs,
            }
        )
        if run.mechanical_break_pairs:
            statuses.append("review")
            findings.append(f"{run.run_id}: reconcile {run.mechanical_break_pairs} mechanical break pair(s) before sign-off.")
        else:
            statuses.append("pass")

    status = "fail" if "fail" in statuses else "review" if "review" in statuses else "pass"
    return StageResult(
        stage="measurement",
        status=status,
        action="calculate_core_recovery_scr_rqd",
        findings=findings or ["RQD observations calculated from traceable run and piece lengths."],
        metrics={"runs": observations, "rqd_threshold_mm": 100},
    )


def validate_engineering_logs(
    intervals: list[GeologicalInterval],
    discontinuities: list[DiscontinuityEvidence],
) -> StageResult:
    """Check rock and discontinuity logs for engineering completeness and provenance."""
    findings: list[str] = []
    for index, interval in enumerate(intervals, start=1):
        if interval.base_m <= interval.top_m:
            findings.append(f"Interval {index}: base depth must exceed top depth.")
        if interval.lithology.lower() not in interval.structure.lower() and not interval.structure:
            findings.append(f"Interval {index}: structure is missing.")

    uncertain = [item for item in discontinuities if item.origin == "uncertain"]
    incomplete_natural = [
        item
        for item in discontinuities
        if item.origin == "natural" and item.orientation_deg is None
    ]
    if uncertain:
        findings.append(f"{len(uncertain)} discontinuity record(s) require natural/mechanical origin review.")
    if incomplete_natural:
        findings.append(f"{len(incomplete_natural)} natural discontinuity record(s) lack orientation evidence.")

    return StageResult(
        stage="geotechnical_logging",
        status="review" if findings else "pass",
        action="compile_rock_and_discontinuity_logs",
        findings=findings or ["Rock and discontinuity records contain the configured mandatory descriptors."],
        metrics={
            "geological_intervals": len(intervals),
            "discontinuities": len(discontinuities),
            "origin_uncertain": len(uncertain),
        },
    )


def build_assurance_gate(stages: list[StageResult], reviewer_approved: bool) -> StageResult:
    """Enforce human approval and block issue when evidence stages fail."""
    failed = [stage.stage for stage in stages if stage.status == "fail"]
    review = [stage.stage for stage in stages if stage.status == "review"]
    findings: list[str] = []
    if failed:
        findings.append(f"Failed gates: {', '.join(failed)}.")
    if review:
        findings.append(f"Engineer review required: {', '.join(review)}.")
    if not reviewer_approved:
        findings.append("Assigned engineer sign-off is required before AGS issue.")

    status = "fail" if failed else "review" if review or not reviewer_approved else "pass"
    return StageResult(
        stage="assurance",
        status=status,
        action="gate_ags_issue",
        findings=findings or ["All configured evidence gates and engineer sign-off are complete."],
        metrics={
            "failed_gate_count": len(failed),
            "review_gate_count": len(review),
            "reviewer_approved": reviewer_approved,
            "ags_target": "4.1.1",
        },
    )
