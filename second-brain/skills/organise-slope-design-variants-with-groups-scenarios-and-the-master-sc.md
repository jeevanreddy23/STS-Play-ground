---
title: Organise slope design variants with Groups, Scenarios and the Master Scenario in Slide2
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Organise slope design variants with Groups, Scenarios and the Master Scenario in Slide2

> **Source:** `Tutorial_24_Multi_Scenario_Modeling.pdf` (Pages 24-2 to 24-18 (hierarchy definitions, workflows, synchronize views)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A single .slmd file containing every model variant (geometries, load cases, seismic cases) that saves and computes in one operation, with synchronized side-by-side result comparison

## Inputs

- A base slope model
- The set of variations to study (e.g. with/without a 0.1 pseudo-static seismic coefficient, two slope angles)

## Procedure

1. Confirm Multiple Scenario mode in Project Settings (the default); the Document Viewer pane manages the hierarchy
2. Understand the three levels: a Group shares one boundary geometry across its scenarios; the Master Scenario is the group's template whose edits propagate to every scenario in the group; additional Scenarios vary any other inputs (materials, loads, groundwater, search) at fixed geometry
3. Create variants by right-click Add Scenario or Duplicate Scenario, and rename via Rename/Edit Properties (the Master Scenario cannot be renamed)
4. Apply per-scenario changes with the correct scenario active (e.g. Loading > Seismic Load, horizontal coefficient 0.1, in only one scenario)
5. For a geometry variant, Duplicate Group then edit boundaries (e.g. Boundaries > Change Slope Angle, project horizontally, rotate 5 degrees clockwise) — geometry edits propagate to all scenarios within that group only
6. Save (saves all scenarios), Compute (tick only scenarios needing computation — skip untouched copies of the Master), and in Interpret tile views and use Synchronize Views (sync Method, Zoom/Pan) to compare results across scenarios as you switch Bishop/Janbu/Spencer/GLE

## Decision rules

- Edit shared properties in the Master Scenario so they propagate; edit case-specific properties in the individual scenario
- Use separate Groups for different geometries; use Scenarios within a group for everything else
- Save frequently while editing multi-scenario files to keep scenarios synchronized

## Checks

- After a geometry edit, click through sibling scenarios to confirm the change propagated
- Before computing, confirm identical copies are unticked to avoid redundant runs (in the example the no-seismic FS was 1.185 vs 1.001 with k = 0.1)

## Common errors

- Editing the wrong scenario because the active tab was not checked first
- Expecting boundary edits in one scenario to stay local — they propagate group-wide by design

## Caveats

- Software tutorial — a worked teaching example, not a design procedure; validate models against the project brief and a qualified reviewer

## Standards cited

None cited in the source passage.

## Related

- [[Groundwater observations]]
- [[Skills]]
