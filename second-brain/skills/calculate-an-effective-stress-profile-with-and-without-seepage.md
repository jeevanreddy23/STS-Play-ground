---
title: Calculate an effective stress profile with and without seepage
type: skill
tags: [skill, parameters]
confidence: medium
updated: 2026-08-01
---

# Calculate an effective stress profile with and without seepage

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 9, §§9.2–9.5 (stresses without seepage, with upward and downward seepage, seepage force) and §§9.8–9.10 (partial saturation and capillary rise)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A profile of total stress, pore water pressure and effective vertical stress with depth, correct for hydrostatic, upward-seepage, downward-seepage and capillary conditions.

## Inputs

- Soil profile with layer thicknesses and unit weights (moist above the water table, saturated below)
- Groundwater level, and any piezometric levels differing from hydrostatic
- Seepage condition: none, upward, or downward, with the hydraulic gradient if seepage is occurring
- Height of capillary rise and degree of saturation in the capillary zone, if relevant

## Procedure

1. Compute total vertical stress at each depth by accumulating the product of unit weight and thickness from the surface down, using moist unit weight above the water table and saturated unit weight below.
2. Compute pore water pressure at each depth. For no seepage this is hydrostatic below the water table and zero (or negative in the capillary zone) above it.
3. For upward seepage, add the seepage head to the hydrostatic pore pressure: pore pressure increases and effective stress decreases with depth relative to the no-seepage case.
4. For downward seepage, subtract the seepage head: pore pressure decreases and effective stress increases.
5. Compute effective vertical stress as total stress minus pore water pressure at each depth, and plot all three against depth.
6. In the capillary zone, treat pore pressure as negative in proportion to the degree of saturation, which increases effective stress there; treat this contribution as fragile and lost on wetting.
7. Where a seepage force is needed explicitly, express it as a body force per unit volume equal to the hydraulic gradient times the unit weight of water, acting in the direction of flow.

## Decision rules

- Upward seepage reduces effective stress; when the upward gradient reaches the critical gradient (the ratio of submerged unit weight to the unit weight of water) effective stress reaches zero and a quick condition occurs.
- Never take pore pressure as hydrostatic where an artesian or perched condition is indicated — use measured piezometric levels.
- Do not rely on capillary suction for long-term design strength; treat it as a temporary, weather-dependent contribution.
- Use submerged unit weight only in shorthand calculations without seepage; with seepage compute total stress and pore pressure separately.

## Checks

- Check that effective stress increases monotonically with depth unless an upward gradient or artesian layer explains otherwise.
- Check the pore pressure profile against installed piezometer readings where available.
- Check the water table used matches the design case (wet-season high, construction dewatered level, flood case).

## Common errors

- Applying buoyant unit weight above the water table.
- Using hydrostatic pore pressures where an underlying aquifer is under artesian head, which overstates effective stress and can hide a base-heave problem.
- Double-counting seepage by both applying a seepage force and altering the pore pressure profile.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use

## Standards cited

None cited in the source passage.

## Related

- [[Groundwater observations]]
- [[Skills]]
