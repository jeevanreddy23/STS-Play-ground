from __future__ import annotations

import base64
import io
import json
import math
from dataclasses import asdict, dataclass
from typing import Iterable, Sequence

import cv2
import numpy as np
from PIL import Image


AS1726_DEFECT_TYPES = (
    "Joint",
    "Bedding plane (BP)",
    "Parting",
    "Sheared surface",
    "Sheared zone",
    "Seam",
    "Saw cut / mechanical edge",
    "Blast / handling fracture",
    "Dust / mud / occlusion",
)

WEATHERING_TERMS = (
    "Residual Soil (RS)",
    "Extremely Weathered (XW)",
    "Highly Weathered (HW)",
    "Moderately Weathered (MW)",
    "Slightly Weathered (SW)",
    "Distinctly Weathered (DW)",
    "Fresh (FR)",
    "Needs review",
)

STRENGTH_TERMS = (
    "Very Low",
    "Low",
    "Medium",
    "High",
    "Very High",
    "Not inferred from image",
)


@dataclass
class DefectRecord:
    defect_id: str
    source_image: str
    source_index: int
    defect_type: str
    start_x_px: int
    start_y_px: int
    end_x_px: int
    end_y_px: int
    trace_length_px: float
    orientation_deg: float
    confidence: float
    weathering: str = "Needs review"
    rock_strength: str = "Not inferred from image"
    aperture: str = "Needs review"
    review_status: str = "AI draft"
    evidence: str = "Edge/line candidate from image"

    def to_dict(self) -> dict:
        return asdict(self)


def image_from_bytes(data: bytes) -> np.ndarray:
    """Decode an uploaded image into an RGB numpy array."""
    pil = Image.open(io.BytesIO(data)).convert("RGB")
    return np.asarray(pil)


def image_to_png_bytes(image: np.ndarray) -> bytes:
    pil = Image.fromarray(image.astype(np.uint8))
    buf = io.BytesIO()
    pil.save(buf, format="PNG")
    return buf.getvalue()


def _resize_for_cv(image: np.ndarray, max_side: int = 1800) -> tuple[np.ndarray, float]:
    h, w = image.shape[:2]
    scale = min(1.0, max_side / max(h, w))
    if scale == 1.0:
        return image.copy(), 1.0
    resized = cv2.resize(image, (round(w * scale), round(h * scale)), interpolation=cv2.INTER_AREA)
    return resized, scale


def _make_contact_sheet(images: Sequence[np.ndarray], cell_width: int = 1400) -> np.ndarray:
    """Fallback for images that do not have enough overlap for stitching."""
    cells = []
    for image in images:
        h, w = image.shape[:2]
        scale = min(1.0, cell_width / max(w, 1))
        cell = cv2.resize(image, (round(w * scale), round(h * scale)), interpolation=cv2.INTER_AREA)
        cells.append(cell)
    max_w = max(cell.shape[1] for cell in cells)
    gap = 16
    total_h = sum(cell.shape[0] for cell in cells) + gap * (len(cells) - 1)
    sheet = np.full((total_h, max_w, 3), 248, dtype=np.uint8)
    y = 0
    for cell in cells:
        x = (max_w - cell.shape[1]) // 2
        sheet[y : y + cell.shape[0], x : x + cell.shape[1]] = cell
        y += cell.shape[0] + gap
    return sheet


def consolidate_images(images: Sequence[np.ndarray]) -> tuple[np.ndarray, str]:
    """Create a single same-view image, using panorama stitching with fallback."""
    if not images:
        raise ValueError("At least one image is required")
    if len(images) == 1:
        return images[0].copy(), "Single image used as canonical view"

    prepared = [_resize_for_cv(image, 2200)[0] for image in images]
    try:
        stitcher = cv2.Stitcher_create(cv2.Stitcher_PANORAMA)
        status, stitched = stitcher.stitch([cv2.cvtColor(img, cv2.COLOR_RGB2BGR) for img in prepared])
        if status == cv2.Stitcher_OK and stitched is not None and stitched.size:
            return cv2.cvtColor(stitched, cv2.COLOR_BGR2RGB), "Panorama stitch succeeded"
    except cv2.error:
        pass
    return _make_contact_sheet(prepared), "Insufficient overlap: contact-sheet fallback used"


def _line_angle(x1: int, y1: int, x2: int, y2: int) -> float:
    angle = math.degrees(math.atan2(y2 - y1, x2 - x1)) % 180
    return round(angle, 1)


def _line_length(x1: int, y1: int, x2: int, y2: int) -> float:
    return float(math.hypot(x2 - x1, y2 - y1))


def _line_straightness(edge_image: np.ndarray, line: tuple[int, int, int, int]) -> float:
    """Estimate how continuously an edge follows a candidate line."""
    x1, y1, x2, y2 = line
    samples = max(20, int(_line_length(x1, y1, x2, y2)))
    xs = np.clip(np.rint(np.linspace(x1, x2, samples)).astype(int), 0, edge_image.shape[1] - 1)
    ys = np.clip(np.rint(np.linspace(y1, y2, samples)).astype(int), 0, edge_image.shape[0] - 1)
    return float(np.mean(edge_image[ys, xs] > 0))


def _classify_line(
    line: tuple[int, int, int, int],
    image_shape: tuple[int, int],
    straightness: float,
    parallel_count: int,
) -> tuple[str, float, str]:
    h, w = image_shape
    x1, y1, x2, y2 = line
    length = _line_length(x1, y1, x2, y2)
    diagonal = math.hypot(w, h)
    touches_edge = min(x1, y1, x2, y2) <= 6 or max(x1, x2) >= w - 7 or max(y1, y2) >= h - 7
    long_uniform_line = length > 0.42 * diagonal and straightness > 0.28

    # This is intentionally conservative. Visual heuristics cannot certify a geological defect.
    if parallel_count >= 2 and length > 0.18 * diagonal and not touches_edge:
        return (
            "Bedding plane (BP)",
            min(0.88, 0.56 + 0.08 * min(parallel_count, 4) + 0.24 * straightness),
            "Repeated subparallel traces suggest bedding/lamination; review against saw cuts and foliation",
        )
    if long_uniform_line and (parallel_count >= 2 or touches_edge):
        return (
            "Saw cut / mechanical edge",
            min(0.93, 0.58 + 0.18 * straightness + 0.05 * min(parallel_count, 3)),
            "Long, straight, repeatedly aligned edge candidate; review against capture geometry",
        )
    if length < 0.13 * diagonal and straightness < 0.25:
        return (
            "Blast / handling fracture",
            0.52,
            "Short, discontinuous fracture-like candidate; review core ends and blast damage",
        )
    return (
        "Joint",
        min(0.88, 0.46 + 0.34 * straightness + 0.08 * min(length / max(diagonal, 1), 0.7)),
        "Planar trace candidate from connected edge evidence; confirm structural continuity",
    )


def _surface_flags(image: np.ndarray) -> tuple[np.ndarray, float, float]:
    """Return display-only anomaly mask for likely glare or low-texture occlusion."""
    hsv = cv2.cvtColor(image, cv2.COLOR_RGB2HSV)
    gray = cv2.cvtColor(image, cv2.COLOR_RGB2GRAY)
    glare = (hsv[:, :, 2] > 245) & (hsv[:, :, 1] < 30)
    local_mean = cv2.blur(gray.astype(np.float32), (31, 31))
    local_sq = cv2.blur((gray.astype(np.float32) ** 2), (31, 31))
    local_std = np.sqrt(np.maximum(local_sq - local_mean**2, 0))
    low_texture = local_std < 7
    anomaly = ((glare | low_texture).astype(np.uint8) * 255)
    anomaly = cv2.morphologyEx(anomaly, cv2.MORPH_OPEN, np.ones((5, 5), np.uint8))
    return anomaly, float(np.mean(glare)), float(np.mean(low_texture))


def analyze_image(image: np.ndarray, source_image: str = "canonical-view") -> tuple[list[DefectRecord], np.ndarray, dict]:
    """Run a lightweight, explainable CV pass and return records plus an overlay."""
    working, scale = _resize_for_cv(image)
    h, w = working.shape[:2]
    gray = cv2.cvtColor(working, cv2.COLOR_RGB2GRAY)
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8)).apply(gray)
    blurred = cv2.GaussianBlur(clahe, (5, 5), 0)
    edges = cv2.Canny(blurred, 45, 135)
    edges = cv2.morphologyEx(edges, cv2.MORPH_CLOSE, np.ones((3, 3), np.uint8))
    min_length = max(38, int(0.055 * math.hypot(w, h)))
    lines = cv2.HoughLinesP(edges, 1, np.pi / 180, threshold=max(25, min_length // 2), minLineLength=min_length, maxLineGap=18)

    raw_lines: list[tuple[int, int, int, int]] = []
    if lines is not None:
        for item in lines[:, 0, :].tolist():
            candidate = tuple(int(value) for value in item)
            length = _line_length(*candidate)
            if length < min_length:
                continue
            angle = _line_angle(*candidate)
            midpoint = ((candidate[0] + candidate[2]) / 2, (candidate[1] + candidate[3]) / 2)
            duplicate = any(
                abs(angle - _line_angle(*other)) < 4
                and math.hypot(midpoint[0] - (other[0] + other[2]) / 2, midpoint[1] - (other[1] + other[3]) / 2) < 0.035 * math.hypot(w, h)
                for other in raw_lines
            )
            if not duplicate:
                raw_lines.append(candidate)
    raw_lines = sorted(raw_lines, key=lambda line: _line_length(*line), reverse=True)[:36]

    anomaly, glare_pct, low_texture_pct = _surface_flags(working)
    overlay = working.copy()
    overlay[anomaly > 0] = (245, 187, 66)
    records: list[DefectRecord] = []
    for idx, line in enumerate(raw_lines, start=1):
        x1, y1, x2, y2 = line
        angle = _line_angle(*line)
        length = _line_length(*line)
        parallel_count = sum(abs(angle - _line_angle(*other)) < 8 for other in raw_lines if other != line)
        straightness = _line_straightness(edges, line)
        defect_type, confidence, evidence = _classify_line(line, (h, w), straightness, parallel_count)
        record = DefectRecord(
            defect_id=f"D-{idx:03d}",
            source_image=source_image,
            source_index=idx,
            defect_type=defect_type,
            start_x_px=round(x1 / max(scale, 1e-9)),
            start_y_px=round(y1 / max(scale, 1e-9)),
            end_x_px=round(x2 / max(scale, 1e-9)),
            end_y_px=round(y2 / max(scale, 1e-9)),
            trace_length_px=round(length / max(scale, 1e-9), 1),
            orientation_deg=angle,
            confidence=round(confidence, 3),
            evidence=evidence,
        )
        records.append(record)
        colour = (30, 190, 100) if defect_type == "Joint" else (79, 131, 204) if "Bedding" in defect_type else (245, 126, 66) if "Saw" in defect_type else (224, 72, 72)
        cv2.line(overlay, (x1, y1), (x2, y2), colour, 4, cv2.LINE_AA)
        cv2.putText(overlay, record.defect_id, (x1 + 5, y1 - 5), cv2.FONT_HERSHEY_SIMPLEX, 0.55, colour, 2, cv2.LINE_AA)

    stats = {
        "image_width_px": int(image.shape[1]),
        "image_height_px": int(image.shape[0]),
        "candidate_count": len(records),
        "glare_fraction": round(glare_pct, 4),
        "low_texture_fraction": round(low_texture_pct, 4),
        "processing_mode": "Explainable edge + Hough-line prototype",
        "review_required": True,
    }
    return records, overlay, stats


def records_to_csv(records: Iterable[DefectRecord]) -> str:
    rows = [record.to_dict() if hasattr(record, "to_dict") else dict(record) for record in records]
    if not rows:
        return ""
    keys = list(rows[0].keys())
    output = io.StringIO()
    output.write(",".join(keys) + "\n")
    for row in rows:
        values = []
        for key in keys:
            value = str(row.get(key, "")).replace('"', '""')
            values.append(f'"{value}"')
        output.write(",".join(values) + "\n")
    return output.getvalue()


def records_to_json(records: Iterable[DefectRecord], stats: dict | None = None) -> str:
    payload = {"records": [record.to_dict() if hasattr(record, "to_dict") else dict(record) for record in records], "stats": stats or {}}
    return json.dumps(payload, indent=2)


def png_data_uri(image: np.ndarray) -> str:
    encoded = base64.b64encode(image_to_png_bytes(image)).decode("ascii")
    return f"data:image/png;base64,{encoded}"
