---
title: Run a seismic slope stability analysis in Slide2 (pseudo-static, critical kc and Newmark displacement)
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Run a seismic slope stability analysis in Slide2 (pseudo-static, critical kc and Newmark displacement)

> **Source:** `Tutorial_28_Seismic_Analysis.pdf` (Slide 2018 Tutorial Manual, Tutorial 28 (Models 1-4)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Seismic performance of a slope expressed three ways in one multi-scenario model: pseudo-static FS under a chosen seismic coefficient, the critical seismic coefficient ky giving FS = 1 per surface, and Newmark permanent displacement from a real earthquake record.

## Inputs

- A computed static slope model (multi-material model in the tutorial)
- Design horizontal (and optionally vertical) pseudo-static seismic coefficient
- A seismic acceleration-time record for Newmark analysis: manual entry, imported .ssr/Slammer file, or a built-in example record (tutorial uses Mammoth Lakes-1 1980 CVK-090, PGA 0.416 g)

## Procedure

1. Run the static baseline scenario and note the critical surface FS.
2. Duplicate the scenario, then apply Loading > Seismic Load with the horizontal seismic coefficient (positive in the failure direction); compute and compare FS against the static case — seismic loading destabilises the slope (tutorial: 1.374 to 0.992 at k = 0.15).
3. For critical-coefficient analysis: duplicate the static scenario, enable Project Settings > Seismic > Advanced Seismic Analysis with 'Compute Ky for all failure surfaces', compute, and read ky at the critical surface; use Data > Filter Surfaces to display all surfaces with ky below the design coefficient.
4. For Newmark displacement: duplicate the ky scenario, open Newmark Analysis Options, define the seismic record (example records show PGA/PGV summaries and an acceleration-time plot), choose analysis type (Rigid / Coupled / Decoupled) and which accelerations drive displacement (tutorial: Rigid, maximum positive/negative), compute, and read the critical Newmark displacement in Interpret.
5. Tile scenario views vertically with synchronised zoom/pan to compare all four models.

## Decision rules

- Pseudo-static FS < 1 does not itself mean failure — the ky and Newmark analyses quantify how much shaking is needed and how far the mass would move.
- Many surfaces with ky below the design coefficient corroborates a pseudo-static FS near or below 1 at that coefficient.
- Duplicated scenarios share only geometry/master-scenario changes automatically; other setting changes stay per-scenario unless scenarios are linked.

## Checks

- Seismic coefficient sign/direction matches the failure direction.
- Advanced Seismic Analysis checkbox enabled before expecting ky or Newmark output.
- Chosen seismic record's PGA/PGV appropriate to the site hazard; record source documented (Slide's Newmark engine is based on USGS SLAMMER).

## Common errors

- Applying the seismic load in the wrong scenario (forgetting which scenario is selected before editing).
- Running Newmark without 'Compute Ky for all failure surfaces', so displacements cannot be computed.
- Reading only the pseudo-static FS and skipping the displacement check, over- or under-calling marginal slopes.

## Caveats

- Sample of a 31-tutorial local Slide2 series; tutorial FS/ky values are model-specific illustrations, not benchmarks.
- Selection of design seismic coefficient is a code/site-hazard decision outside this tutorial (e.g. AS 1170.4 context in Australia).

## Standards cited

USGS SLAMMER (Jibson et al. 2013, USGS Techniques and Methods 12-B1), Rocscience Slide2 Help, Seismic Analysis section

## Related

- [[Skills]]
- [[Skills]]
