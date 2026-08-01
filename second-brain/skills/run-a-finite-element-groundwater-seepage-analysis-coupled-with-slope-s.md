---
title: Run a finite element groundwater seepage analysis coupled with slope stability in Slide2
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Run a finite element groundwater seepage analysis coupled with slope stability in Slide2

> **Source:** `Tutorial_07_Finite_Element_Groundwater_Seepage.pdf` (Slide 2018 Tutorial Manual, Tutorial 7 (whole tutorial)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A steady-state FE seepage solution (phreatic surface, pore pressure/total head contours, flow vectors) whose pore pressures feed directly into the limit-equilibrium slope stability run, including optional matric suction strength above the water table.

## Inputs

- Slope geometry (single model serves both seepage and stability)
- Total head or other hydraulic boundary conditions along the external boundary, with vertices placed where head values change
- Saturated permeability Ks per material (plus unsaturated permeability model if needed)
- Optional unsaturated shear strength angle phi-b

## Procedure

1. Set Project Settings > Groundwater > Groundwater Method = Steady State FEA (this deletes any water pressure grid/water table in the scenario and enables Groundwater analysis mode).
2. In Slope Stability mode, edit boundaries as needed — add vertices where the phreatic surface meets the slope face and model edges so head boundary conditions land on the right segments (boundaries cannot be edited in Groundwater mode).
3. Switch to Groundwater mode; Discretize and Mesh (defaults: 3-noded triangles, ~1500 elements) and customise only if needed.
4. Set Boundary Conditions: assign Total Head values to the wetted boundary segments; the slope surface defaults to an Unknown (P=0 or Q=0) condition and remaining edges to zero nodal flow. Slide auto-creates ponded water wherever total head exceeds boundary elevation.
5. Define hydraulic properties (Ks) per material.
6. Compute (groundwater) and Interpret (groundwater) FIRST: check pressure head contours, the P=0 line (FE water table), flow vectors perpendicular-to-head-contour behaviour, iso-lines, and queries before trusting the stability run.
7. Return to Slope Stability mode and Compute — the stability engine automatically consumes the FE pore pressures; interpret FS results alongside groundwater contours.
8. Optionally set a non-zero unsaturated shear strength angle so matric suction (negative pore pressure above the water table) adds strength psi.tan(phi-b); rerun and compare FS.

## Decision rules

- Always compute and review the groundwater solution separately before the stability analysis, even though Slide will chain them automatically.
- Negative pressure heads above the water table are matric suction; they affect strength only if phi-b > 0.
- Since phi-b is rarely well known, run a sensitivity study varying it between zero and the material friction angle before relying on suction for stability.
- When comparing runs (e.g. against a pressure-grid model), verify via slip-centre coordinates/radius that the same critical surface is being compared.

## Checks

- FE water table position plausible against known groundwater levels (it is the P=0 iso-line).
- Ponded water auto-created where intended by the head boundary conditions.
- Iso-line and query checks confirm the pressure field (e.g. pond-bottom pressure head equals pond depth).

## Common errors

- Missing boundary vertices at phreatic-surface intersections so head boundary conditions smear across wrong segments.
- Skipping groundwater Interpret and feeding a bad seepage solution into the stability run.
- Attributing small FS differences between pore-pressure sources to error rather than interpolation-method differences.
- Relying on matric suction for a passing FS without sensitivity analysis on phi-b.

## Caveats

- Sample of a 31-tutorial local Slide2 series; steady-state only — transient seepage is covered in later tutorials.
- Slide 2018 menus; verify against installed version.

## Standards cited

Rocscience Slide2 Groundwater Verification Manual, Giam & Donald (1989) ACADS slope program review (source of the tutorial model)

## Related

- [[Groundwater observations]]
- [[Skills]]
