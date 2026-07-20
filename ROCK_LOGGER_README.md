# GeoLogs automated rock logging prototype

This folder contains a self-contained image-to-draft-log prototype.

## Run

From PowerShell:

```powershell
python -m streamlit run rock_logger_app.py
```

Then open the local URL shown by Streamlit, upload one or more core/face images, and select **Process images**.

## What it does

- accepts JPG, PNG, WEBP and TIFF imagery;
- attempts panorama stitching for overlapping images;
- falls back to a same-view contact sheet when overlap is insufficient;
- detects line/edge candidates with contrast enhancement, Canny edges and Hough lines;
- applies conservative, explainable labels for joint, bedding-plane (BP), mechanical edge and blast/handling fracture candidates;
- flags glare/low-texture regions as image anomalies rather than pretending to classify hidden rock;
- provides an editable review register using AS 1726-aligned terms;
- exports a CSV log and JSON evidence package.

## Important boundary

This is a functional proof-of-concept, not a trained geological segmentation model. It does not establish rock strength or weathering from pixels. Those fields are deliberately set to **Needs review** / **Not inferred from image** until an engineer supplies evidence such as field observations, point-load results or UCS data.

For production, the next model-development step is a labelled dataset with masks for intact rock, joints, shears, seams, blast/handling fractures, saw cuts, mud/dust and occlusion, plus held-out validation by project or borehole.
