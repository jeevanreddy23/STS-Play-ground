---
title: Reduce a plate load test in the STS PLATE LOAD TEST workbook and issue the report sheet
type: skill
tags: [skill, field-records, field-source]
confidence: high
updated: 2026-08-02
---

# Reduce a plate load test in the STS PLATE LOAD TEST workbook and issue the report sheet

> **Source:** [Google Drive — PLT calc/PLATE LOAD TEST-PLT1.xls and PLATE LOAD TEST-PLT1.pdf](https://drive.google.com/file/d/1ns4DfJN7rotCLuaqDm1RAFz54N9CVPVS/view) (Office-side calculation workbook (Input Data blue-cell entry, Bar-to-kN calibration tab, auto EV1/Ks report sheet) and its issued PDF for a Marsden Park compacted-DGB pad test; field side is the already-documented S112 worksheet). Reconstructed from STS's own
> field records on Google Drive — completed forms, labelled photos and
> scans, catalogued in [[Field records catalogue]]. It shows what the
> records evidence, not necessarily the current approved procedure —
> confirm against the current STS form and procedure before treating it
> as the standard method.

**Outcome.** A checked pressure-settlement curve with computed EV1 loading modulus and Ks(PLATE) subgrade reaction, issued as a one-page STS report per test location.

## Inputs

- Completed S112 field worksheet (Load Settlement - Time Relationship Worksheet) from site
- STS PLATE LOAD TEST-PLTx.xls workbook (sheets: Input Data, Report, Calibration Chart)
- Jack/load-cell calibration (the Calibration Chart tab converts gauge Bar to PSI/kN/pound-force using the ram effective area)
- Project header data: project no., client, report no., test method (e.g. ASTM D1195/D1195M), test and report dates

## Procedure

1. Open the workbook and work only in the blue entry cells of the Input Data sheet (instruction printed at the top).
2. Enter the header block: project, client, address, test location (PLT number), test method, project no., report no., report date, test date, signatory initials.
3. Enter test specifications: moisture conditions, weather, type of soil, wet unit weight (or '-'), plate diameter (cm; plate area auto-computes), and duration per pressure increment (min).
4. Transcribe the field readings by load stage - preload, first loading stage, unloading stage, second load cycle - entering gauge pressure in Bar and the three dial gauge readings (mm) per step; the sheet converts Bar to PSI and MPa via the calibration chart and averages the gauges into average settlement.
5. Let the EV1 calculation block fit its polynomial (a2/a1/a0 coefficients) to the loading branch; the Report sheet computes EV1 loading (MPa) and Ks(PLATE) (MN/m3).
6. Review the Report sheet: pressure-settlement chart with loading, unloading and reload branches, stepped pressure/settlement table, test specifications and the computed moduli.
7. Enter technician and report initials, obtain the approved signatory's signature, then print/export the Report sheet to PDF named PLATE LOAD TEST-PLTx and file it beside the source xls.

## Decision rules

- Stage structure in the workbook must mirror the field sheet exactly (preload, loading, unloading, reload) - do not merge stages to smooth the curve.
- If a dial gauge is unused, leave its column empty rather than entering zeros, so the average uses only real gauges.
- The reported modulus is EV1 from the loading branch; unload/reload data stays on the curve for interpretation but is not the headline value.
- Report only after an approved signatory reviews and signs - technician initials alone do not issue the report.

## Checks

- Average settlement column reproduces the field sheet averages (transcription check per step).
- Plate area equals pi/4 x diameter squared for the entered plate.
- Curve shape sensible: monotonic settlement on loading, partial recovery on unloading; investigate reversals before issuing.
- Report no., project no. and test date match the field worksheet and job records.

## Common errors

- Typing pressures in MPa into the Bar column - the calibration conversion then inflates results by orders of magnitude.
- Overwriting formula cells outside the blue input cells, silently breaking EV1.
- Issuing the PDF with a stale report date because the header was copied from a previous PLT file.

## Caveats

- Reconstructed from STS field records — confirm against the current STS procedure before treating as the standard method
- The EV1 polynomial fit and Ks derivation are embedded workbook formulas; verify the workbook version and jack calibration are current before reuse on a new job.

## Standards cited

ASTM D1195/D1195M (repetitive static plate load test), BS 1377:Part 9 / ASTM D1196 (alternative methods circled on the field sheet)

## Related

- [[Field records catalogue]]
- [[Library - plate load testing]]
- [[Skills]]
