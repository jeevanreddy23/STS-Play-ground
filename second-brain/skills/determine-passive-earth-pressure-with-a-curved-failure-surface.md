---
title: Determine passive earth pressure with a curved failure surface
type: skill
tags: [skill, earthworks]
confidence: medium
updated: 2026-08-01
---

# Determine passive earth pressure with a curved failure surface

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 14, §§14.2–14.6 (retaining walls with friction, properties of a logarithmic spiral, procedure for determination of passive earth pressure, coefficient of passive earth pressure, Caquot and Kerisel solution)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A realistic passive resistance for a wall with significant wall friction, avoiding the overestimate produced by planar-wedge theory.

## Inputs

- Wall height, back-face inclination and ground surface slope in front of the wall
- Soil effective friction angle and unit weight; cohesion if any
- Wall friction angle at the soil-wall interface, and its sign (whether the wall moves down or up relative to the soil)
- Any surcharge in front of the wall

## Procedure

1. Recognise the problem: when wall friction is significant the true passive failure surface is curved (approximately a logarithmic spiral near the wall with a planar Rankine zone beyond), and the planar Coulomb assumption overestimates resistance, increasingly so at high friction angles.
2. Use the logarithmic-spiral procedure set out in the source: assume a spiral centred so it passes through the base of the wall, compute the weight of the soil mass and the moments about the spiral centre of the weight, surcharge, cohesion along the surface and the passive force, and solve for the passive force.
3. Repeat for a family of trial spirals and take the minimum passive force as the design value.
4. Alternatively, take the passive coefficient directly from the published Caquot-Kerisel solution charts for the relevant combination of friction angle, wall friction angle and geometry, as referenced in the source.
5. Apply a mobilisation factor or reduce the passive coefficient to account for the large movement needed to develop full passive resistance.
6. Where the passive zone can be excavated, scoured or softened during the structure's life, discount the top of the passive block accordingly.

## Decision rules

- Never take the full planar-wedge passive value with wall friction — the error is unconservative and grows rapidly with friction angle.
- Passive resistance requires substantially more movement than active pressure; for a movement-sensitive structure use only a fraction of the theoretical value.
- Check the sign of wall friction: it depends on the relative movement direction of the wall and soil and can reduce rather than increase resistance.
- Discount passive resistance over any depth that could be removed by future excavation, service trenching or erosion — commonly the upper part of the block is ignored entirely.

## Checks

- Check the derived passive coefficient against the published chart values for the same geometry.
- Check the trial-spiral search actually found a minimum and not a boundary of the search range.
- Check whether the ground in the passive zone is protected against removal for the structure's design life.

## Common errors

- Using the Coulomb planar passive coefficient with a large wall friction angle.
- Relying on passive resistance from ground that will later be excavated for services.
- Applying full passive resistance in a serviceability check where movement is limited.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Passive coefficient charts and tables are reproduced in the source — take the values from there.

## Standards cited

AS 4678, AS 5100.3

## Related

- [[Skills]]
- [[Skills]]
