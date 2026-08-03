---
title: Calculate Coulomb active thrust on a wall with friction, analytically and graphically
type: skill
tags: [skill, earthworks]
confidence: medium
updated: 2026-08-01
---

# Calculate Coulomb active thrust on a wall with friction, analytically and graphically

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 13, §§13.10–13.12 (Coulomb's active pressure, graphic solution for Coulomb's active earth pressure, Coulomb's passive pressure), with Appendix A for the generalised Rankine case), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** The active thrust on a rough retaining wall, including its inclination from wall friction, and the critical failure wedge, for walls where Rankine's smooth-wall assumption is not appropriate.

## Inputs

- Wall height, back-face inclination and backfill surface slope
- Backfill effective friction angle and unit weight
- Wall friction angle (soil-to-wall) appropriate to the wall material and construction
- Any surcharge or line load on the backfill surface

## Procedure

1. Set up the trial wedge: a planar failure surface from the heel of the wall to the backfill surface, with the wedge weight, the reaction on the failure plane inclined at the friction angle to its normal, and the wall thrust inclined at the wall friction angle to the wall's normal.
2. For the analytical route, use the Coulomb active coefficient expression, which is a function of the friction angle, wall friction angle, wall back-face inclination and backfill slope, and multiply by half the unit weight times the square of the wall height.
3. For the graphical (Culmann) route, draw the wall and backfill to scale, construct a series of trial wedges, plot each wedge's weight along a reference line inclined at the friction angle, project along a direction set by the wall friction and geometry, and draw the locus through the resulting points; the maximum ordinate of that locus gives the active thrust and identifies the critical wedge.
4. Repeat the graphical construction with any surcharge or line load included in each wedge's weight, which is a key advantage of the method over closed-form solutions.
5. Resolve the thrust into horizontal and vertical components using the wall friction angle, and apply the vertical component to the wall's bearing and sliding checks.
6. For passive pressure with wall friction, do not use the Coulomb planar assumption — it substantially overestimates resistance; use a curved-failure-surface solution instead.

## Decision rules

- Wall friction reduces active thrust modestly but increases passive resistance greatly — that asymmetry is why the planar Coulomb passive solution is unsafe.
- Choose a wall friction angle appropriate to the interface (rough cast concrete against granular fill can approach the soil friction angle; smooth sheet piling is much lower) and to whether the wall can move down relative to the soil to mobilise it.
- The vertical component of the thrust is real: including it improves sliding resistance but also adds to the bearing pressure. Include it consistently in all checks, or omit it consistently and conservatively.
- Use the Culmann graphical method whenever the backfill surface is irregular or carries discrete loads.

## Checks

- Check the Coulomb result reduces to the Rankine value when wall friction is set to zero and the geometry matches.
- Check the critical wedge identified by the graphical method actually daylights within the backfill and does not intersect a boundary, structure or existing surface.
- Check the assumed wall friction can actually be mobilised by the wall's expected movement.

## Common errors

- Using Coulomb's planar failure surface for passive pressure with significant wall friction.
- Assuming a wall friction angle higher than the interface can deliver.
- Applying a surcharge to the pressure diagram after computing the thrust rather than including it in the wedge analysis.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Coefficient tables for the Coulomb solution across combinations of friction and wall friction angle are in the source.

## Standards cited

AS 4678

## Related

- [[Skills]]
- [[Skills]]
