from __future__ import annotations

from .models import (
    CaptureEvidence,
    CoreRunEvidence,
    DiscontinuityEvidence,
    GeologicalInterval,
    MultimodalConditions,
    StageResult,
    VisionEvidence,
)


REQUIRED_AUTOMATIC_MODALITIES = {
    "overview_photo",
    "closeup_photo",
    "ocr",
    "depth_labels",
    "core_run_lengths",
    "tray_dimensions",
}


def assess_multimodal_conditions(
    conditions: MultimodalConditions,
    confidence_threshold: float,
) -> StageResult:
    """Bind image, measured and contextual inputs without letting context create observations."""
    kinds = {item.kind for item in conditions.evidence}
    missing = sorted(REQUIRED_AUTOMATIC_MODALITIES - kinds)
    low_confidence = [
        item.ref_id for item in conditions.evidence
        if item.kind in REQUIRED_AUTOMATIC_MODALITIES and item.confidence < confidence_threshold
    ]
    contextual = [item.ref_id for item in conditions.evidence if item.provenance == "contextual"]
    findings: list[str] = []
    if missing:
        findings.append(f"Request additional evidence for automatic logging: {', '.join(missing)}.")
    if low_confidence:
        findings.append(
            f"Evidence below {confidence_threshold:.0%} confidence: {', '.join(low_confidence)}; request another photograph or verified measurement."
        )
    findings.append(
        "Previous logs, geology and structural drawings are contextual constraints only and cannot create observed defects or lengths."
    )
    return StageResult(
        stage="multimodal_conditioning",
        status="fail" if missing or low_confidence else "pass",
        action="bind_multimodal_evidence",
        findings=findings,
        metrics={
            "modalities_present": sorted(kinds),
            "required_modalities": sorted(REQUIRED_AUTOMATIC_MODALITIES),
            "contextual_reference_count": len(contextual),
            "confidence_threshold": confidence_threshold,
        },
        evidence_refs=[item.path for item in conditions.evidence],
    )


def assess_capture_quality(evidence: CaptureEvidence, confidence_threshold: float = 0.95) -> StageResult:
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
    if evidence.capture_confidence < confidence_threshold:
        blockers.append(
            f"Capture confidence {evidence.capture_confidence:.1%} is below {confidence_threshold:.0%}; request another photograph."
        )

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
            "capture_confidence": evidence.capture_confidence,
            "confidence_threshold": confidence_threshold,
        },
        evidence_refs=[evidence.image_path],
    )


def plan_rectification(evidence: CaptureEvidence, confidence_threshold: float = 0.95) -> StageResult:
    """Require an executed, source-linked homography before automatic measurement."""
    ready = (
        evidence.corners_visible
        and evidence.scale_marker_mm is not None
        and evidence.rectification_executed
        and evidence.rectification_confidence >= confidence_threshold
        and evidence.rectified_image_path is not None
        and evidence.homography_matrix is not None
        and len(evidence.homography_matrix) == 9
    )
    return StageResult(
        stage="rectification",
        status="pass" if ready else "fail",
        action="rectify_tray_perspective",
        findings=[
            "Executed four-corner homography is linked to the source image and transform matrix."
            if ready
            else f"Automatic measurement is blocked until an executed homography reaches {confidence_threshold:.0%} confidence."
        ],
        metrics={
            "target_inference_frame_px": 640,
            "source_preserved": True,
            "executed": evidence.rectification_executed,
            "rectification_confidence": evidence.rectification_confidence,
        },
        evidence_refs=[path for path in [evidence.image_path, evidence.rectified_image_path] if path],
    )


def evaluate_vision_stage(
    evidence: CaptureEvidence,
    vision: VisionEvidence,
    action: str,
    confidence_threshold: float,
) -> StageResult:
    """Gate measured detector and segmenter evidence; contract-only configuration cannot pass."""
    if action == "review_detection_boxes":
        accepted = vision.detection_review_complete
        return StageResult(
            stage="detection_box_review",
            status="pass" if accepted else "fail",
            action=action,
            findings=[
                "Every detector box is accepted; correction events are preserved."
                if accepted
                else "Detection review is incomplete. Edit or accept every box before segmentation."
            ],
            metrics={
                "review_complete": accepted,
                "manual_box_corrections": vision.manual_box_corrections,
                "downstream_invalidated_on_edit": True,
            },
            evidence_refs=[vision.boxes_and_masks_ref] if vision.boxes_and_masks_ref else [],
        )
    if action == "segment_core_masks":
        ready = (
            vision.execution_mode == "executed"
            and vision.segmenter_model_hash is not None
            and vision.boxes_and_masks_ref is not None
        )
        return StageResult(
            stage="core_mask_segmentation",
            status="pass" if ready else "fail",
            action=action,
            findings=[
                "SAM-compatible masks were generated from accepted detector boxes."
                if ready
                else "Segmentation is blocked until accepted boxes are processed by the local SAM-compatible adapter."
            ],
            metrics={"execution_mode": vision.execution_mode, "segmenter_model_hash": vision.segmenter_model_hash},
            evidence_refs=[vision.boxes_and_masks_ref] if vision.boxes_and_masks_ref else [],
        )
    if action == "review_segmentation_masks":
        accepted = vision.mask_review_complete
        return StageResult(
            stage="segmentation_mask_review",
            status="pass" if accepted else "fail",
            action=action,
            findings=[
                "Every segmentation mask is accepted; corrective prompts are preserved."
                if accepted
                else "Mask review is incomplete. Add foreground/background prompts or accept every mask before measurement."
            ],
            metrics={
                "review_complete": accepted,
                "manual_mask_corrections": vision.manual_mask_corrections,
                "measurement_invalidated_on_edit": True,
            },
            evidence_refs=[vision.boxes_and_masks_ref] if vision.boxes_and_masks_ref else [],
        )
    is_piece_stage = action == "detect_core_pieces"
    confidence = vision.piece_detection_confidence if is_piece_stage else vision.defect_detection_confidence
    executed = vision.execution_mode == "executed"
    complete_provenance = bool(
        vision.detector_model_hash and vision.segmenter_model_hash and vision.boxes_and_masks_ref
    )
    passed = executed and complete_provenance and confidence >= confidence_threshold
    stage = "core_piece_detection" if is_piece_stage else "defect_detection"
    return StageResult(
        stage=stage,
        status="pass" if passed else "fail",
        action=action,
        findings=[
            "Measured YOLO boxes, prompted masks, model hashes and source coordinates satisfy the automatic gate."
            if passed
            else (
                f"{stage} confidence is {confidence:.1%}; automatic logging requires {confidence_threshold:.0%}. "
                "Request another photograph or execute the open-source vision adapter."
            ),
            "Visible evidence only: contextual geology cannot create a detection.",
        ],
        metrics={
            "detector_family": "YOLO11-compatible",
            "segmenter_family": "SAM-compatible",
            "rows_expected": evidence.row_count,
            "execution_mode": vision.execution_mode,
            "confidence": confidence,
            "confidence_threshold": confidence_threshold,
            "detected_piece_count": vision.detected_piece_count,
            "model_provenance_complete": complete_provenance,
        },
        evidence_refs=[path for path in [evidence.image_path, vision.boxes_and_masks_ref] if path],
    )


def compare_rqd_engineering_tolerance(within_tolerance: bool | None) -> StageResult:
    """Require an explicit engineering comparison after deterministic RQD calculation."""
    return StageResult(
        stage="rqd_engineering_comparison",
        status="pass" if within_tolerance is True else "fail",
        action="compare_rqd_engineering_tolerance",
        findings=[
            "Reviewed RQD inclusions are within the configured project tolerance."
            if within_tolerance is True
            else "Compare qualifying pieces with the engineering log and record the project-tolerance decision."
        ],
        metrics={"within_tolerance": within_tolerance, "comparison_recorded": within_tolerance is not None},
    )


def measure_recovery(runs: list[CoreRunEvidence], confidence_threshold: float) -> StageResult:
    """Calculate deterministic recovered length and block low-confidence measurements."""
    observations: list[dict[str, float | str]] = []
    findings: list[str] = []
    failed = False
    for run in runs:
        run_length_mm = (run.base_m - run.top_m) * 1000
        recovered_length_mm = sum(run.recovered_piece_lengths_mm)
        if run_length_mm <= 0 or recovered_length_mm > run_length_mm + 1:
            failed = True
            findings.append(f"{run.run_id}: recovered and drilled lengths are inconsistent.")
            continue
        if run.measurement_confidence < confidence_threshold:
            failed = True
            findings.append(
                f"{run.run_id}: measurement confidence {run.measurement_confidence:.1%} is below {confidence_threshold:.0%}."
            )
        observations.append({
            "run_id": run.run_id,
            "run_length_mm": round(run_length_mm, 1),
            "recovered_length_mm": round(recovered_length_mm, 1),
            "core_recovery_percent": round(recovered_length_mm / run_length_mm * 100, 1),
            "measurement_source": run.measurement_source,
        })
    return StageResult(
        stage="recovery_measurement",
        status="fail" if failed or not runs else "pass",
        action="measure_core_recovery",
        findings=findings or ["Recovered lengths and core recovery were calculated deterministically from the JSON measurements."],
        metrics={"runs": observations, "confidence_threshold": confidence_threshold},
    )


def calculate_rqd(runs: list[CoreRunEvidence], confidence_threshold: float = 0.95) -> StageResult:
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
        if run.measurement_confidence < confidence_threshold:
            statuses.append("fail")
            findings.append(
                f"{run.run_id}: measurement confidence {run.measurement_confidence:.1%} is below {confidence_threshold:.0%}."
            )
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
                "tcr_percent": round(recovery, 1),
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
        action="calculate_rqd_tcr_fracture_metrics",
        findings=findings or ["RQD observations calculated from traceable run and piece lengths."],
        metrics={
            "runs": observations,
            "rqd_threshold_mm": 100,
            "calculation_mode": "deterministic",
            "confidence_threshold": confidence_threshold,
        },
    )


def validate_engineering_logs(
    intervals: list[GeologicalInterval],
    discontinuities: list[DiscontinuityEvidence],
    confidence_threshold: float = 0.95,
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
    low_confidence = [
        item for item in discontinuities
        if item.detection_confidence < confidence_threshold
        or item.classification_confidence < confidence_threshold
    ]
    low_interval_confidence = [
        item for item in intervals if item.classification_confidence < confidence_threshold
    ]
    if low_confidence:
        findings.append(
            f"{len(low_confidence)} defect record(s) are below the {confidence_threshold:.0%} automatic classification threshold."
        )
    if low_interval_confidence:
        findings.append(
            f"{len(low_interval_confidence)} geological interval(s) are below the {confidence_threshold:.0%} automatic classification threshold."
        )

    return StageResult(
        stage="geotechnical_logging",
        status="fail" if low_confidence or low_interval_confidence else "review" if findings else "pass",
        action="compile_rock_and_discontinuity_logs",
        findings=findings or ["Rock and discontinuity records contain the configured mandatory descriptors."],
        metrics={
            "geological_intervals": len(intervals),
            "discontinuities": len(discontinuities),
            "origin_uncertain": len(uncertain),
            "confidence_threshold": confidence_threshold,
        },
    )


def build_report_contract(stages: list[StageResult], borehole_id: str) -> StageResult:
    """Allow products only from a fully validated JSON evidence contract."""
    upstream_failed = [stage.stage for stage in stages if stage.status == "fail"]
    return StageResult(
        stage="report_products",
        status="fail" if upstream_failed else "review",
        action="generate_json_ags_pdf_3d",
        findings=[
            f"Outputs blocked by upstream stages: {', '.join(upstream_failed)}."
            if upstream_failed
            else "JSON contract is complete; AGS, OpenGround-style PDF and 3D evidence outputs require engineer approval."
        ],
        metrics={
            "source_contract": "sts-geoflow-corebox/1.0",
            "borehole_id": borehole_id,
            "ags_target": "4.1.1",
            "pdf_style": "OpenGround-compatible visual log",
            "three_d_mode": "texture-derived evidence twin or reviewed photogrammetry GLB",
        },
    )


def skipped_stage(stage: str, action: str, dependency: str) -> StageResult:
    return StageResult(
        stage=stage,
        status="fail",
        action=action,
        findings=[f"Not executed because prerequisite stage '{dependency}' did not pass."],
        metrics={"skipped": True, "dependency": dependency},
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
