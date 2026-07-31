from __future__ import annotations

from typing import Any, Literal

from pydantic import BaseModel, Field


StageStatus = Literal["pass", "review", "fail"]


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


class CoreRunEvidence(BaseModel):
    run_id: str
    top_m: float
    base_m: float
    recovered_piece_lengths_mm: list[float]
    mechanical_break_pairs: int = Field(default=0, ge=0)


class GeologicalInterval(BaseModel):
    top_m: float
    base_m: float
    colour: str
    lithology: str
    grain_size: str
    weathering: str
    strength: str
    structure: str


class DiscontinuityEvidence(BaseModel):
    depth_m: float
    defect_type: str
    orientation_deg: float | None = Field(default=None, ge=0, le=90)
    aperture_mm: float | None = Field(default=None, ge=0)
    infill: str | None = None
    roughness: str | None = None
    origin: Literal["natural", "mechanical", "uncertain"]


class WorkflowRequest(BaseModel):
    job_id: str
    borehole_id: str
    capture: CaptureEvidence
    runs: list[CoreRunEvidence]
    intervals: list[GeologicalInterval]
    discontinuities: list[DiscontinuityEvidence]
    reviewer_approved: bool = False


class CaptureTask(BaseModel):
    evidence: CaptureEvidence


class VisionTask(BaseModel):
    evidence: CaptureEvidence


class MeasurementTask(BaseModel):
    runs: list[CoreRunEvidence]


class LoggingTask(BaseModel):
    intervals: list[GeologicalInterval]
    discontinuities: list[DiscontinuityEvidence]


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
