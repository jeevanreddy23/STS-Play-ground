---
title: Set a settlement-controlled allowable bearing pressure on sand
type: skill
tags: [skill, parameters]
confidence: medium
updated: 2026-08-01
---

# Set a settlement-controlled allowable bearing pressure on sand

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 16, §§16.9–16.10 (bearing capacity of sand based on settlement, plate-load test)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** An allowable bearing pressure for a footing on granular soil limited by tolerable settlement rather than by bearing capacity, with plate load test results correctly scaled.

## Inputs

- Foundation width and shape, and depth of embedment
- Field penetration data (SPT or CPT) over the depth of influence, or plate load test results
- Tolerable total and differential settlement for the structure
- Groundwater level

## Procedure

1. Establish the tolerable settlement for the structure and its differential settlement limit; on sand this normally governs the design, not bearing capacity.
2. Use a published settlement-based bearing pressure relationship keyed to penetration resistance, foundation width and the tolerable settlement, as set out in the source; these relationships give allowable pressure directly.
3. Where plate load tests are used, run them at the founding level and on the actual bearing material, and scale the result to the footing: for granular soils settlement scales with a width-dependent function, so a small plate substantially underestimates the settlement of a large footing at the same pressure. Use the scaling relationship given in the source and treat it as approximate.
4. For cohesive soils, plate-scale ultimate bearing capacity is largely independent of width, while settlement scales roughly in proportion to width — treat the two soil types differently.
5. Recognise that the plate only stresses a shallow zone (of the order of twice the plate diameter), so a weaker layer below that depth will not be detected; confirm the profile to the full depth of influence of the real footing.
6. Cross-check the settlement-based pressure against the bearing capacity based allowable pressure and adopt the lower.
7. Check differential settlement between footings of different width and load, since a uniform allowable pressure does not produce uniform settlement.

## Decision rules

- On sand, settlement almost always governs for footings of practical size — check capacity but expect it not to control.
- Scale plate load test results with caution and never extrapolate more than a modest multiple of the plate size.
- Correct penetration resistance for overburden and other field factors before entering settlement correlations, and state the correction used.
- Where the water table is at or above founding level, apply the relevant reduction to the allowable pressure.

## Checks

- Check the depth of influence of the real footing is covered by the investigation, not just the plate's shallow zone.
- Check the tolerable settlement adopted against the structure's actual sensitivity (masonry, cladding, services, machinery).
- Check differential settlement, not just the maximum.

## Common errors

- Applying plate load test bearing pressure directly to a footing many times the plate size.
- Missing a compressible layer below the plate's zone of influence.
- Ignoring the effect of the groundwater table on settlement-based allowable pressures.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Australian plate bearing testing and its interpretation are covered by separate procedures; the scaling relationships here are classical approximations.

## Standards cited

AS 1289.6.9.1, AS 5100.3

## Related

- [[Groundwater observations]]
- [[Library - plate load testing]]
- [[Skills]]
