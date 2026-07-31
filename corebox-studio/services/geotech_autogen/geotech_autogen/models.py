from __future__ import annotations

from typing import Any, Literal

from pydantic import BaseModel, Field


StageStatus = Literal["pass", "review", "fail"]
EvidenceKind = Literal[
    "overview_photo",
    "closeup_photo",
    "ocr",
    "depth_labels",
    "core_run_lengths",
    "tray_dimensions",
    "previous_borehole_log",
    "ags_data",
    "structural_drawing",
    "site_geology",
    "expected_formation",
    "project_specification",
]


class WorkflowPolicy(BaseModel):
    goal: str
    role: str
    standards: list[str]
    constraints: list[str]
    automatic_logging_confidence: float = Field(default=0.95, ge=0, le=1)
    output_contract: Literal["json_first"] = "json_first"


class EvidenceReference(BaseModel):
    ref_id: str
    kind: EvidenceKind
    path: str
    sha256: str | None = None
    confidence: float = Field(default=1.0, ge=0, le=1)
    provenance: Literal["observed", "measured", "contextual", "reviewer_supplied"]


class MultimodalConditions(BaseModel):
    evidence: list[EvidenceReference] = Field(default_factory=list)


class VisionEvidence(BaseModel):
    execution_mode: Literal["executed", "contract_only"] = "contract_only"
    piece_detection_confidence: float = Field(default=0.0, ge=0, le=1)
    defect_detection_confidence: float = Field(default=0.0, ge=0, le=1)
    detected_piece_count: int = Field(default=0, ge=0)
    detector_model_hash: str | None = None
    segmenter_model_hash: str | None = None
    boxes_and_masks_ref: str | None = None


class CaptureEvidence(BaseModel):
    image_path: str
    width_px: int = Field(ge=1)
    height_px: int = Field(ge=1)
    corners_visible: bool
    scale_marker_mm: float | None = Field(default=None, gt=0)
    tags_between_rows: bool
    end_occlusion: bool
    glare_fraction: float = Field(ge=0, le=1)
    water_present: bool
    row_count: int = Field(ge=1)
    capture_confidence: float = Field(default=1.0, ge=0, le=1)
    rectification_executed: bool = False
    rectification_confidence: float = Field(default=0.0, ge=0, le=1)
    rectified_image_path: str | None = None
    homography_matrix: list[float] | None = None


class CoreRunEvidence(BaseModel):
    run_id: str
    top_m: float
    base_m: float
    recovered_piece_lengths_mm: list[float]
    mechanical_break_pairs: int = Field(default=0, ge=0)
    measurement_confidence: float = Field(default=1.0, ge=0, le=1)
    measurement_source: Literal["manual_verified", "vision"] = "manual_verified"


class GeologicalInterval(BaseModel):
    top_m: float
    base_m: float
    colour: str
    lithology: str
    grain_size: str
    weathering: str
    strength: str
    structure: str
    classification_confidence: float = Field(default=1.0, ge=0, le=1)


class DiscontinuityEvidence(BaseModel):
    depth_m: float
    defect_type: str
    orientation_deg: float | None = Field(default=None, ge=0, le=90)
    aperture_mm: float | None = Field(default=None, ge=0)
    infill: str | None = None
    roughness: str | None = None
    origin: Literal["natural", "mechanical", "uncertain"]
    detection_confidence: float = Field(default=1.0, ge=0, le=1)
    classification_confidence: float = Field(default=1.0, ge=0, le=1)


class WorkflowRequest(BaseModel):
    job_id: str
    borehole_id: str
    capture: CaptureEvidence
    runs: list[CoreRunEvidence]
    intervals: list[GeologicalInterval]
    discontinuities: list[DiscontinuityEvidence]
    policy: WorkflowPolicy | None = None
    conditions: MultimodalConditions = Field(default_factory=MultimodalConditions)
    vision: VisionEvidence = Field(default_factory=VisionEvidence)
    reviewer_approved: bool = False


class CaptureTask(BaseModel):
    evidence: CaptureEvidence
    confidence_threshold: float = Field(ge=0, le=1)


class VisionTask(BaseModel):
    evidence: CaptureEvidence
    vision: VisionEvidence
    action: Literal["detect_core_pieces", "find_defects"]
    confidence_threshold: float = Field(ge=0, le=1)


class MeasurementTask(BaseModel):
    runs: list[CoreRunEvidence]
    action: Literal["measure_recovery", "compute_rqd_tcr"]
    confidence_threshold: float = Field(ge=0, le=1)


class LoggingTask(BaseModel):
    intervals: list[GeologicalInterval]
    discontinuities: list[DiscontinuityEvidence]
    confidence_threshold: float = Field(ge=0, le=1)


class ConditioningTask(BaseModel):
    conditions: MultimodalConditions
    confidence_threshold: float = Field(ge=0, le=1)


class ReportTask(BaseModel):
    stages: list[StageResult]
    borehole_id: str


class StageResult(BaseModel):
    stage: str
    status: StageStatus
    action: str
    findings: list[str] = Field(default_factory=list)
    metrics: dict[str, Any] = Field(default_factory=dict)
    evidence_refs: list[str] = Field(default_factory=list)


class CaptureStageBundle(BaseModel):
    stages: list[StageResult]


class AssuranceTask(BaseModel):
    stages: list[StageResult]
    reviewer_approved: bool


class WorkflowResult(BaseModel):
    job_id: str
    borehole_id: str
    issue_status: Literal["blocked", "review_required", "approved"]
    stages: list[StageResult]
    blockers: list[str]
    audit_events: list[str]
    policy: WorkflowPolicy
    json_contract_version: str = "sts-geoflow-corebox/1.0"
    requested_evidence: list[str] = Field(default_factory=list)
    report_outputs: dict[str, str] = Field(default_factory=dict)
