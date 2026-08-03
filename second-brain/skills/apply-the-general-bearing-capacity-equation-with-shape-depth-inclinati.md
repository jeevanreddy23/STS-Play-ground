---
title: Apply the general bearing capacity equation with shape, depth, inclination and eccentricity effects
type: skill
tags: [skill, parameters]
confidence: medium
updated: 2026-08-01
---

# Apply the general bearing capacity equation with shape, depth, inclination and eccentricity effects

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 16, §§16.5–16.6 and 16.8 (factor of safety, general bearing capacity equation with shape, depth and inclination factors, ultimate load under eccentric load)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A bearing capacity for a real foundation with rectangular shape, embedment, inclined or eccentric loading, and the corresponding allowable bearing pressure on a stated basis.

## Inputs

- Foundation plan dimensions, embedment depth and base geometry
- Effective strength parameters of the bearing stratum
- Applied vertical load, horizontal load and moments about each axis
- Unit weights above and below founding level and the groundwater level
- The required factor of safety or the limit state framework being used

## Procedure

1. Compute the load eccentricity about each axis as the moment divided by the vertical load.
2. Reduce the foundation to an effective area: subtract twice the eccentricity from each plan dimension, so the resultant acts at the centroid of the reduced (effective) area. Use the effective width in the self-weight term and the effective dimensions in the shape factors.
3. Compute the bearing capacity factors from the friction angle using the general (Meyerhof/Vesic-type) values given in the source, which differ from Terzaghi's.
4. Apply the shape factors, computed from the effective length-to-width ratio and the friction angle.
5. Apply the depth factors, using the appropriate forms for embedment-to-width ratios below and above unity (the source gives separate expressions, with an inverse-tangent term in radians for the deeper case).
6. Apply the inclination factors, computed from the angle of the resultant load from the vertical and the friction angle.
7. Multiply out the three terms to obtain the ultimate bearing capacity on the effective area, and multiply by the effective area to obtain the ultimate load.
8. Divide by the required factor of safety, distinguishing clearly between gross allowable bearing capacity (which must carry the structure load plus the weight of the footing and the soil above it) and net allowable bearing capacity (the pressure in excess of the existing effective overburden at founding level).
9. For a saturated clay under vertical load in the short term, the equation reduces to the undrained form with the standard cohesion factor, shape and depth factors, plus the overburden.

## Decision rules

- Always state whether an allowable bearing pressure is gross or net; mixing them is one of the most common sources of error in foundation design.
- Eccentricity within the middle third keeps the whole base in compression; beyond that, part of the base lifts off and the effective area method is essential, not optional.
- Where the load is both eccentric and inclined, apply both the effective area reduction and the inclination factors.
- Where the design is by limit states (as in Australian practice), replace the global factor of safety with the appropriate geotechnical strength reduction factor and factored actions.
- The source notes that a factor of safety of about 3 on ultimate capacity is common, reflecting the real uncertainty in strength parameters — check the value your governing standard requires.

## Checks

- Check the eccentricity in both directions, not only the one with the obvious moment.
- Check the depth factors were computed with the correct expression for the embedment ratio.
- Check settlement independently; satisfying bearing capacity does not guarantee acceptable settlement.

## Common errors

- Applying shape and depth factors computed from the gross dimensions to an effective-area capacity.
- Taking credit for embedment depth that will later be excavated for services or landscaping.
- Combining Terzaghi's bearing capacity factors with the general equation's shape and depth factors.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- The bearing capacity factor tables and factor expressions are given in the source — take them from there.

## Standards cited

AS 5100.3, AS 2159, AS 4678

## Related

- [[AS 2159 piling]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
