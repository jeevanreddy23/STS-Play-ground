---
name: pile-3d-visualiser
description: Turn an STS pile/pier inspection report (docx or PDF) into a rich interactive 3D visualisation — piles and rock sockets to scale under the actual foundation layout drawing, with plan/elevation views, an interpolated rockhead surface, tooltips, and a per-pier data table. Use this whenever the user asks to visualise, 3D, or "show" a pile inspection, bored pier, screw pile, or footing inspection report, mentions socket depths together with a plan or layout, or uploads a pier/pile inspection summary and wants anything visual made from it.
---

# Pile Inspection 3D Visualiser

Produce a single self-contained HTML file: the report's foundation layout drawing draped as the ground plane of a Three.js scene, with every pile drawn to scale below it (shaft through soil + highlighted rock socket), an IDW-interpolated rockhead surface, depth exaggeration slider, orbit/plan/elevation views, hover tooltips, a clickable pier list, and an accessible data table. Verified working via headless screenshots before delivery.

The heavy lifting is already done: `assets/template.html` is the full scene and UI with a `__CONFIG_JSON__` placeholder, and `scripts/build.py` injects the config plus base64 images. Your job is extracting the data, digitising positions, writing the config, building, and verifying.

## Step 1 — Extract the report data

For docx: `pandoc -t markdown report.docx -o report.md`, then read it. For PDF: use the pdf skill's extraction approach.

You need, per pile: ID, total depth (m BGL), socket length (m), termination material. Reports typically carry this as a "Pile Inspection Summary" table. Also note: soil profile description (clay thickness range), pile diameters, site address, report number, inspection date, client, and which piles exist on the drawings but were NOT inspected this visit — include those too, they render as ghosts and give the visualisation its context.

Pull the embedded images: `unzip -o report.docx -d unpacked "word/media/*"`. One of them is almost always the foundation layout plan (the largest line-drawing PNG); there may also be a company logo worth embedding.

## Step 2 — Digitise pile positions from the layout drawing

This is the step that makes or breaks the result: positions must be in **pixels of the exact plan image you will embed**, because the template drapes that image on the ground and converts px→metres with one shared transform. Aligned by construction.

Read the plan image. For each pile label (P1, P2…), record the pixel (x, y) of the pile symbol (y measured downward). Where labels crowd together — corners, pile caps — crop and upscale those regions with PIL and Read the crops rather than guessing. Include every pile on the drawing, inspected or not.

Scale: find the structural grid and estimate `px_per_m` (grid bay spacing in px ÷ bay spacing in m; assume 6 m bays for warehouse-type slabs if the drawing doesn't say). Precision matters less than consistency — the drawing itself is the spatial reference; px_per_m only sets absolute scale for the depth ruler and pile diameters.

## Step 3 — Write the config

```json
{
  "title": "Bored Pier Inspection — 3D Visualisation",
  "subtitle": "site · report no · inspected date · client",
  "img_w": 876, "img_h": 793,
  "px_per_m": 16,
  "cx": 400, "cy": 440,
  "clay_thickness": 1.2,
  "ghost_depth": 2.0,
  "termination": "weathered siltstone",
  "termination_short": "Siltstone",
  "footer": "one-line caveats: standard, soil profile, 'vertical scale exaggerated — see slider'",
  "table_note": "assumptions: rockhead = depth − socket, assumed diameters, position source",
  "footprint_px": [92, 118, 712, 772],
  "piles": [
    {"id": "P1", "group": "internal", "dia": 0.6, "px": 118, "py": 177,
     "depth": 2.7, "socket": 1.7, "terminated": "weathered siltstone"},
    {"id": "P2", "group": "perimeter", "dia": 0.45, "px": 262, "py": 140}
  ]
}
```

Notes: omit `depth`/`socket` for uninspected piles (they render as ghost cylinders of `ghost_depth`). `cx`/`cy` is the world origin in image px (roughly the plan centre). `footprint_px` `[x0,y0,x1,y1]` bounds the soil block and rockhead surface; defaults to the pile bounding box +20 px. `group` is `"internal"` or `"perimeter"` — it sets cap colour and the INT/PER tag. If the report doesn't give per-pile diameters, assume from the drawings' stated range and say so in `table_note`. Rockhead is derived as depth − socket; the template interpolates a rockhead surface from inspected piles only.

## Step 4 — Build

```bash
python3 scripts/build.py config.json plan.png output.html --logo logo.png
```

`--logo` is optional. The script embeds both images as base64, injects the config, and sanity-checks required fields. Output is fully self-contained except Three.js r128 from cdnjs (fine for artifacts).

## Step 5 — Verify before delivering

Never ship unseen. Run:

```bash
npm i playwright three@0.128   # once per session
node scripts/verify.js output.html shots/
```

It loads the page in headless Chromium with software WebGL, screenshots orbit/plan/elevation, prints pile counts + any JS errors, and exits non-zero on errors. Then **Read the screenshots** and check: pile labels sit on the drawing's own pile symbols in plan view (misalignment means bad px coords or wrong cx/cy); piles are visible below ground in orbit and elevation (not occluded); tiles show the right ranges. Fix and re-run until clean.

## Step 6 — Deliver

SendUserFile the HTML (display: render). This is revisit-by-nature QA/reporting output — also persist it as a Cowork artifact when `create_artifact` is available, and save a copy to the project if the session has one.

## Known traps (learned the hard way)

- Everything above ground must be translucent with `depthWrite: false` — an opaque ground plane hides all underground geometry from any above-horizon camera and the whole visualisation reads as empty.
- Sites are wide (30–40 m) but piles shallow (2–4 m): without depth exaggeration the piles are invisible stubs. The template defaults to 3×; leave it.
- Labels use `sizeAttenuation: false` sprites (constant screen size). Don't switch to world-scaled sprites; they balloon when the camera moves in.
- Digitise positions from the same image file you embed — never from a different export or crop of the drawing, or every pile lands offset.
