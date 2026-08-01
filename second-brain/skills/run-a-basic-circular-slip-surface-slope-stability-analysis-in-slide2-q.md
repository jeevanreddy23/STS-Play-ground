---
title: Run a basic circular slip-surface slope stability analysis in Slide2 (Quick Start)
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Run a basic circular slip-surface slope stability analysis in Slide2 (Quick Start)

> **Source:** `Tutorial_01_Quick_Start.pdf` (Slide 2018 Tutorial Manual, Tutorial 01 (whole tutorial)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A computed factor of safety and critical circular slip surface for a homogeneous dry slope, using a Grid Search, with results interpreted and a second scenario compared.

## Inputs

- Slope geometry as external boundary vertex coordinates
- Material properties: unit weight, Mohr-Coulomb cohesion and phi
- Choice of limit-equilibrium methods (defaults: Bishop Simplified and Janbu)

## Procedure

1. Set Project Settings (Analysis > Project Settings): stress units, scenarios, analysis methods.
2. Add the External Boundary (Boundaries > Add External Boundary), entering vertices and closing with 'c'; upper segments represent the slope face, lateral/lower extents are arbitrary but generous.
3. Set Surface Options search method (Grid Search here; Auto Refine is the default alternative) and create a slip-centre grid via Surfaces > Auto Grid.
4. Understand Slope Limits: they filter surfaces (entry/exit must fall within them) and control circle generation with the Radius Increment; customise via Define Limits if the search needs focusing.
5. Define material properties (Properties > Define Materials); the first/default material auto-assigns for single-material models.
6. Save, Compute, then Interpret: read the Global Minimum FS per analysis method from the toolbar drop-list; view Minimum Surfaces, All Surfaces and safety-factor contours on the grid; use Filter Surfaces, Data Tips and Info Viewer for detail.
7. Optionally duplicate the scenario in the Document Viewer, switch search method (e.g. Auto Refine), recompute and tile views to compare.

## Decision rules

- Treat 'Global Minimum' with caution — it is only the minimum among surfaces actually searched; grid location, spacing, Radius Increment and Slope Limits all change the answer.
- The critical surface can differ between analysis methods; check each method separately.
- Use All Surfaces display to spot under-searched areas or clusters suggesting a focused re-search.

## Checks

- Search coverage adequate (contours and surface cloud reviewed), not just the single reported FS.
- Results consistent across at least two search methods before relying on the minimum FS.

## Common errors

- Accepting the first Grid Search minimum without varying search parameters — lower-FS surfaces may exist.
- External boundary drawn too tight, clipping potential failure surfaces.
- Comparing FS values between methods/scenarios without confirming they refer to the same slip surface.

## Caveats

- One of a 31-tutorial Slide2 series held locally; only five tutorials (01, 05, 07, 08, 28) are indexed here.
- Menus/values refer to Slide 2018; verify against the installed Slide2 version before following click-paths.

## Standards cited

Rocscience Slide2 Help system (analysis method assumptions)

## Related

- [[Skills]]
- [[Skills]]
