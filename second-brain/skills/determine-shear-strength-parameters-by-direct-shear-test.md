---
title: Determine shear strength parameters by direct shear test
type: skill
tags: [skill, testing]
confidence: medium
updated: 2026-08-01
---

# Determine shear strength parameters by direct shear test

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 12, §§12.5–12.7 (direct shear test, drained direct shear on sand and clay, general comments and interface friction), with the Mohr-Coulomb criterion in §12.2), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Effective cohesion and friction angle (peak and ultimate) for a sand or a drained clay, or the interface friction and adhesion between soil and a structural material.

## Inputs

- Specimens of the soil at the density and moisture condition to be modelled, or the structural material for an interface test
- Direct shear box with loading yoke, proving ring or load cell, and horizontal and vertical displacement gauges
- At least three normal stresses spanning the design stress range
- For drained tests on clay, an estimated time to failure long enough to avoid excess pore pressure

## Procedure

1. Prepare each specimen in the split box at the target density or in its undisturbed state, and consolidate it under the chosen normal stress until vertical movement ceases.
2. Shear at a constant rate of horizontal displacement, recording shear force, horizontal displacement and vertical (volume-change) movement throughout.
3. Plot shear stress against horizontal displacement for each normal stress; identify the peak shear stress and, for dense material, the ultimate (constant-volume) shear stress reached at large displacement.
4. Plot the vertical movement against horizontal displacement to record dilation (dense material expands, loose material contracts).
5. Plot the peak shear stresses against their normal stresses and fit a Mohr-Coulomb line to obtain peak cohesion intercept and friction angle; repeat with the ultimate values for the constant-volume parameters.
6. For an interface test, clamp the structural material (concrete, steel or timber) in the lower half of the box with the soil above, and run the same programme to obtain interface adhesion and interface friction angle.

## Decision rules

- Report peak and ultimate (critical state) parameters separately, and choose which to use in design: peak for a lightly strained problem where brittle behaviour is acceptable, constant-volume for progressive failure, residual for pre-existing shear surfaces.
- Shear slowly enough for full drainage in fine-grained soils; a fast test on clay yields neither a drained nor a properly defined undrained strength.
- Note the failure envelope is genuinely curved for granular soils — the fitted friction angle falls as normal stress increases, so test across the design stress range and do not extrapolate.
- A non-zero cohesion intercept fitted to a clean sand is a fitting artefact, not real cohesion; force the envelope through the origin or report the intercept as apparent.

## Checks

- Check the three or more normal stresses bracket the design stress; a fitted envelope outside the tested range is an extrapolation.
- Check displacement is large enough for dense specimens to reach an ultimate plateau.
- Check for specimen extrusion through the box gap, and that the gap was set appropriately for the particle size.

## Common errors

- Reporting only peak parameters for a problem where strain-softening or a pre-existing shear surface governs.
- Running a nominally drained test on a clay too quickly.
- Applying direct shear parameters to a problem controlled by an entirely different stress path, without acknowledging that the box forces failure on a fixed plane and that the stress distribution on it is not uniform.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use

## Standards cited

ASTM D3080, AS 1289.6.2.2

## Related

- [[Skills]]
- [[Skills]]
