from __future__ import annotations

import io
from pathlib import Path

import pandas as pd
import streamlit as st
from PIL import Image

from rock_logger.pipeline import (
    AS1726_DEFECT_TYPES,
    STRENGTH_TERMS,
    WEATHERING_TERMS,
    analyze_image,
    consolidate_images,
    image_from_bytes,
    records_to_csv,
    records_to_json,
)


ROOT = Path(__file__).parent

st.set_page_config(page_title="GeoLogs | Automated Rock Logging", page_icon="ðŸª¨", layout="wide")

st.markdown(
    """
    <style>
    .block-container { padding-top: 2rem; max-width: 1500px; }
    .hero { background: linear-gradient(135deg, #102b31 0%, #1c4d4b 100%); border-radius: 22px; padding: 28px 34px; color: #f2f6ed; margin-bottom: 22px; }
    .hero h1 { font-size: 2.5rem; margin: 0 0 8px; letter-spacing: -0.04em; }
    .hero p { max-width: 820px; color: #d8e7d8; margin: 0; font-size: 1.05rem; }
    .pill { display: inline-block; background: #d8ebad; color: #18392d; border-radius: 999px; padding: 5px 11px; font-size: .78rem; font-weight: 700; margin: 0 5px 7px 0; }
    .notice { background: #fff7dc; border: 1px solid #f1d78f; padding: 13px 16px; border-radius: 12px; color: #634a12; }
    </style>
    <div class="hero">
      <div><span class="pill">IMAGE â†’ DRAFT LOG</span><span class="pill">AS 1726 VOCABULARY</span><span class="pill">HUMAN REVIEW</span></div>
      <h1>GeoLogs rock logging</h1>
      <p>Upload core or face imagery. GeoLogs consolidates overlapping views, surfaces candidate traces, and generates a reviewable defect register with evidence and confidence.</p>
    </div>
    """,
    unsafe_allow_html=True,
)

if "records" not in st.session_state:
    st.session_state.records = []
if "stats" not in st.session_state:
    st.session_state.stats = {}
if "overlay" not in st.session_state:
    st.session_state.overlay = None
if "canonical" not in st.session_state:
    st.session_state.canonical = None
if "consolidation_message" not in st.session_state:
    st.session_state.consolidation_message = ""

with st.sidebar:
    st.header("Project settings")
    project = st.text_input("Project", "Sydney sandstone pilot")
    location = st.text_input("Borehole / face", "BH-01 / Face A")
    run_id = st.text_input("Run / chainage", "Run 01")
    st.divider()
    st.caption("Processing mode")
    st.write("Explainable CV prototype")
    st.caption("Image-only strength and weathering outputs are intentionally held for engineering review.")

uploaded = st.file_uploader(
    "Upload core photos or face scans",
    type=["jpg", "jpeg", "png", "webp", "tif", "tiff"],
    accept_multiple_files=True,
    help="Upload overlapping photographs from the same run/face for a consolidated view, or one image for direct analysis.",
)

left, right = st.columns([1.25, 1], gap="large")
with left:
    st.subheader("1 Â· Input imagery")
    if uploaded:
        st.caption(f"{len(uploaded)} image(s) ready Â· {', '.join(item.name for item in uploaded[:4])}{'â€¦' if len(uploaded) > 4 else ''}")
        thumbs = []
        for item in uploaded[:4]:
            try:
                thumbs.append(Image.open(item).convert("RGB"))
            except Exception:
                continue
        if thumbs:
            st.image(thumbs, caption=[f"Source {i + 1}" for i in range(len(thumbs))], width=210)
    else:
        st.info("Upload one or more images to start.")

with right:
    st.subheader("2 Â· Run automated logging")
    st.markdown('<div class="notice">The detector produces draft candidates. Confirm defect type, weathering and strength before issuing an engineering log.</div>', unsafe_allow_html=True)
    run = st.button("Process images", type="primary", use_container_width=True, disabled=not uploaded)
    if run and uploaded:
        with st.spinner("Consolidating imagery and extracting candidatesâ€¦"):
            images = [image_from_bytes(item.getvalue()) for item in uploaded]
            canonical, consolidation_message = consolidate_images(images)
            records, overlay, stats = analyze_image(canonical, source_image="consolidated-view")
            for record in records:
                record.source_image = "; ".join(item.name for item in uploaded)
            st.session_state.canonical = canonical
            st.session_state.overlay = overlay
            st.session_state.records = records
            st.session_state.stats = stats
            st.session_state.consolidation_message = consolidation_message
        st.success(f"Draft log created: {len(st.session_state.records)} candidate(s)")

if st.session_state.canonical is not None:
    st.divider()
    st.subheader("3 Â· Consolidated view and computer-vision evidence")
    st.caption(st.session_state.consolidation_message)
    image_col, overlay_col = st.columns(2, gap="large")
    with image_col:
        st.image(st.session_state.canonical, caption="Canonical same-view image", use_container_width=True)
    with overlay_col:
        st.image(st.session_state.overlay, caption="Candidate overlay Â· green joint Â· orange mechanical edge Â· red fracture", use_container_width=True)

    stats = st.session_state.stats
    met1, met2, met3, met4 = st.columns(4)
    met1.metric("Candidates", stats.get("candidate_count", 0))
    met2.metric("Image size", f"{stats.get('image_width_px', 0):,} Ã— {stats.get('image_height_px', 0):,}")
    met3.metric("Low-texture flag", f"{stats.get('low_texture_fraction', 0) * 100:.1f}%")
    met4.metric("Review required", "Yes")

    st.divider()
    st.subheader("4 Â· Review draft defect register")
    st.caption(f"Context: {project} Â· {location} Â· {run_id}")
    records = st.session_state.records
    if records:
        frame = pd.DataFrame([record.to_dict() for record in records])
        frame["confidence"] = frame["confidence"].round(3)
        edited = st.data_editor(
            frame,
            use_container_width=True,
            hide_index=True,
            num_rows="fixed",
            column_config={
                "defect_type": st.column_config.SelectboxColumn("Defect type", options=list(AS1726_DEFECT_TYPES), required=True),
                "weathering": st.column_config.SelectboxColumn("Weathering", options=list(WEATHERING_TERMS), required=True),
                "rock_strength": st.column_config.SelectboxColumn("Rock strength", options=list(STRENGTH_TERMS), required=True),
                "confidence": st.column_config.NumberColumn("AI confidence", min_value=0.0, max_value=1.0, format="%.3f", disabled=True),
                "review_status": st.column_config.SelectboxColumn("Review status", options=["AI draft", "Reviewed", "Rejected"], required=True),
            },
            disabled=["defect_id", "source_image", "source_index", "start_x_px", "start_y_px", "end_x_px", "end_y_px", "trace_length_px", "orientation_deg", "confidence", "evidence"],
            key="register_editor",
        )
        if st.button("Save review edits"):
            for record, row in zip(st.session_state.records, edited.to_dict("records")):
                record.defect_type = row["defect_type"]
                record.weathering = row["weathering"]
                record.rock_strength = row["rock_strength"]
                record.aperture = row["aperture"]
                record.review_status = row["review_status"]
            st.success("Review edits saved to the current session.")

        st.subheader("5 Â· Export")
        export_records = st.session_state.records
        st.download_button("Download CSV log", records_to_csv(export_records), file_name="geologs_draft_log.csv", mime="text/csv")
        st.download_button("Download JSON evidence package", records_to_json(export_records, st.session_state.stats), file_name="geologs_evidence.json", mime="application/json")
    else:
        st.warning("No line candidates were detected. Try a sharper image with stronger defect contrast, or submit the image for manual review.")

st.divider()
st.caption("Prototype disclaimer: image analysis is a triage aid, not a certified geological interpretation. Confirm structural continuity, scale, orientation, weathering, strength tests and final AS 1726 wording before issue.")
