---
title: Design backfill drainage and account for pore water force on a retaining wall
type: skill
tags: [skill, drainage]
confidence: medium
updated: 2026-08-01
---

# Design backfill drainage and account for pore water force on a retaining wall

> **Source:** `Soil Mechanics (Wiley Series in Geotechnical Engineering) by T. William Lambe Robert V. Whitman.docx` (Lambe & Whitman, Ch. 23 (Earth Retaining Structures with Drained Conditions), including the worked analysis of a backfill with a vertical gravel drain and the graphical determination of pore water force on the trial surface), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A drainage system behind a retaining wall and a wall analysis that carries the correct pore water force, including the case where the drainage does not perform.

## Inputs

- Wall geometry, backfill grading and permeability, and the founding conditions
- Groundwater and surface water regime, including infiltration through the backfill surface and any perched water
- Proposed drainage arrangement: vertical or inclined granular drain, drainage blanket, geocomposite drain, weepholes, and the outlet arrangement
- Backfill effective strength parameters and unit weights (moist and saturated)

## Procedure

1. Establish the flow regime behind the wall for the design case: infiltration through the surface, groundwater inflow from behind, or both, and whether flow is steady or transient after storms.
2. Draw a flow net (or run a seepage analysis) for the backfill with the proposed drain in place, taking the drain face as a free-discharge boundary.
3. From the flow net, read the pore pressure at points along the trial failure surface, and integrate to obtain the pore water force on that surface — the source works this through numerically along a trial plane, summing pressure head times increment length.
4. Include that pore water force explicitly in the force polygon for the trial wedge, alongside the wedge weight, the reaction on the failure plane and the thrust on the wall.
5. Repeat over trial surfaces and take the critical one, and note how much the drain reduces the thrust relative to the undrained-backfill case.
6. Select the drain material to satisfy filter criteria against the backfill, and check its discharge capacity against the computed seepage quantity with a generous margin.
7. Detail the outlet: a drain that cannot discharge is not a drain. Provide accessible, maintainable outlets and protect them from blockage, freezing and vegetation.
8. Check the wall for the case where the drain is fully blocked, with hydrostatic pressure over the full height, and confirm the consequences are acceptable or that the drain is verifiably maintainable.

## Decision rules

- An inclined or vertical drain that intercepts infiltration before it reaches the wall is far more effective at reducing thrust than a drain placed only at the base of the backfill.
- Water pressure typically dominates the thrust on a wall with saturated backfill; the difference between a drained and an undrained backfill can be a factor of two or more on total thrust.
- Never design a wall relying on drainage without checking the blocked-drain case, unless the drainage is demonstrably inspectable and maintainable for the design life.
- The drain must satisfy filter criteria against the backfill or it will clog with fines and stop working within a few years.
- Use saturated unit weights below the phreatic surface in the backfill and moist unit weights above it, consistently with the flow net.

## Checks

- Check the flow net's boundary conditions, especially the phreatic surface and the free-discharge face of the drain.
- Check the drain's discharge capacity against the computed seepage, allowing for partial clogging.
- Check that surface water is prevented from ponding on the backfill and that surface drainage is detailed.

## Common errors

- Applying an active earth pressure coefficient to a saturated unit weight instead of adding water pressure separately.
- Providing a drainage layer with no designed outlet.
- Assuming a drain will work for the design life without inspection provision.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Lambe and Whitman was published in 1969; correlations, terminology and equipment described in it have been superseded in places — check current practice before using any value.

## Standards cited

AS 4678, AS 3798

## Related

- [[Groundwater observations]]
- [[Borehole log conventions]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
