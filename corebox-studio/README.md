# Corebox Studio

Local-first prototype for turning core-box photographs into reviewable core recovery/RQD observations, rock and discontinuity logs, a 3D evidence view, and AGS 4.1.1-oriented transfer data without proprietary geotechnical logging software.

The interface is functional, but the bundled measurements are demonstration data. Contractual use requires a validated computer-vision adapter, project-specific logging rules, official AGS validation, and competent-person sign-off.

## What is implemented

- Interactive React/Three.js core tray with selectable pieces, evidence markers, high-detail controls, local photo texture mapping, and GLB photogrammetry import.
- Rock/defect ledger with confidence and review states.
- AGS 4.1.1-oriented `PROJ`, `LOCA`, `GEOL`, `DETL`, `CORE`, `FRAC`, and `FILE` groups with ASCII/CRLF structural checks and draft export.
- Inspectable four-pass logging critique loop with reviewer-approved corrections stored locally.
- Microsoft AutoGen Core 0.7.5 workflow with typed capture, vision, measurement, logging, and assurance agents. It uses no LLM model client and makes no cloud request.
- Human issue gate: planned/demo computer vision and unresolved exceptions cannot become approved engineering data.

## Paper-aligned image method

The planned CV adapter follows Yan et al. (2026), *A zero-shot segmentation framework with detection prompts for automated rock quality designation (RQD) estimation from core box images*:

1. Preserve the source and rectify tray perspective from its four corners.
2. Detect each core piece with a YOLO11-compatible detector.
3. Pass detection boxes to a SAM-compatible promptable segmenter.
4. Measure mask intersections along calibrated horizontal scanlines and calculate RQD.
5. Route occlusion, narrow gaps, glare/water, tag interference, mechanical breaks, and low-confidence boundaries to engineer review.

The paper-reported accuracy and speed are reference results, not performance claims for this prototype. The AutoGen vision stage is explicitly `contract_only` until it is connected to and validated against a real local inference runtime.

## Open-source stack

- [Microsoft AutoGen](https://github.com/microsoft/autogen) for the offline deterministic agent runtime. AutoGen is now in maintenance mode; the workflow pins 0.7.5 and keeps agent messages/actions isolated so it can later migrate to Microsoft Agent Framework.
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber), Three.js and Drei for in-browser 3D.
- [AliceVision](https://github.com/alicevision/AliceVision), [Meshroom](https://github.com/alicevision/meshroom), or [COLMAP](https://github.com/colmap/colmap) as optional local multiview reconstruction pipelines; export a self-contained `.glb` for import.
- The paper authors' [AutoRQD repository](https://github.com/Yan-Jianhua/AutoRQD) is MIT-licensed. Its README identifies Ultralytics YOLO11 as AGPL-3.0 and SAM as Apache-2.0; review AGPL obligations and every model-weight/dataset licence before a commercial deployment.
- [python-ags4 documentation](https://ags-data-format-wg.gitlab.io/ags-python-library/ags4/) and the [BGS AGS utilities](https://agsapi.bgs.ac.uk/) for final AGS checks.

A single image can provide a texture-derived evidence view, but it cannot recover unseen geometry. Use a multiview capture and a local photogrammetry pipeline for a defensible high-density mesh.

## Run the web app

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`.

## Run the offline AutoGen workflow

Python 3.10 or later is required.

```powershell
Set-Location services/geotech_autogen
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m geotech_autogen.cli example_job.json --output ..\..\output\autogen\tray-08-result.json
.\.venv\Scripts\python.exe -m unittest discover -s tests -v
```

The result contains stage statuses, engineering findings, run-level RQD calculations, issue state, and an audit-event list. `review_required` is expected for the sample because the CV runtime is not yet attached and a mechanical-break decision remains open.

## AGS issue control

The in-browser exporter is intentionally labelled “AGS 4.1.1-oriented draft.” Before contractual issue:

1. Map values to the project's required dictionary and vocabularies.
2. Validate with the official AGS Python library or BGS checker.
3. Confirm mandatory client/submission groups, units, types, coordinate reference system, and file references.
4. Retain validation output and engineer approval in the evidence pack.

## Verification

```powershell
npm run lint
npm run build
```
