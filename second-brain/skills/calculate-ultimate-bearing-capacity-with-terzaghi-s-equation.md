---
title: Calculate ultimate bearing capacity with Terzaghi's equation
type: skill
tags: [skill, parameters]
confidence: medium
updated: 2026-08-01
---

# Calculate ultimate bearing capacity with Terzaghi's equation

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 16, §§16.2–16.4 (ultimate bearing capacity, Terzaghi's equation, effect of groundwater table), with the case history in §16.7), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** An ultimate bearing capacity for a shallow foundation from the classical three-term equation, with the failure mode identified and the groundwater effect applied.

## Inputs

- Foundation width, length and shape (strip, square, rectangular, circular) and depth of embedment
- Effective cohesion and friction angle of the bearing stratum (or undrained strength for a short-term clay case)
- Unit weight of the soil above and below founding level
- Groundwater level relative to founding level
- Relative density or consistency of the bearing soil, to judge the failure mode

## Procedure

1. Identify the likely failure mode from the soil's density or consistency and the depth of embedment: general shear failure in dense sand or stiff clay (a well-defined peak in the load-settlement curve with heave at the surface), local or punching shear in loose or soft soils (no clear peak, settlement dominated).
2. For general shear, apply the three-term equation: a cohesion term (effective cohesion times its bearing capacity factor), a surcharge term (the effective overburden at founding level times its factor), and a self-weight term (half the unit weight times the foundation width times its factor).
3. Take the bearing capacity factors from the source's table as functions of friction angle only.
4. Apply the shape coefficients the source gives for square and circular footings, which modify the cohesion and self-weight terms.
5. For local or punching shear, reduce the strength parameters as the source directs before entering the equation, and use the corresponding reduced factors.
6. Apply the groundwater correction according to which of three cases applies: water table above founding level (use submerged unit weight in the surcharge term over the submerged depth), water table at founding level (use submerged unit weight in the self-weight term), water table within one foundation width below founding level (use a weighted average unit weight in the self-weight term), or deeper than one width below (no correction).
7. State the ultimate bearing capacity and whether it is gross or net.

## Decision rules

- The self-weight term is proportional to foundation width, so bearing capacity in sand grows with width while settlement usually governs — for sand, check settlement as well as capacity and expect settlement to control.
- For a saturated clay loaded quickly, use the undrained case (friction angle zero) with the corresponding factors, and check the long-term drained case separately.
- Terzaghi's equation assumes a shallow foundation (embedment not greater than the width), a horizontal base, vertical concentric load and a level ground surface. Where any of those fail, move to the general bearing capacity equation with its correction factors.
- The bearing capacity factors are very sensitive to friction angle at high values — a few degrees of friction angle can change capacity substantially, so treat high assumed friction angles with caution.

## Checks

- Check the groundwater case selected matches the design water level, including the seasonal high.
- Check the friction angle used is appropriate to the stress level under the footing, not a low-stress laboratory peak.
- Check the computed capacity against a settlement calculation; capacity is rarely the governing criterion on sand.

## Common errors

- Using gross ultimate capacity where net is required (or vice versa) when applying the factor of safety.
- Ignoring the groundwater correction and overestimating capacity by up to about a factor of two on the self-weight term.
- Applying general shear factors to a loose sand that will punch.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- The bearing capacity factor tables are reproduced in the source — read the values there.
- Australian foundation design uses limit state methods with geotechnical strength reduction factors per AS 5100.3, AS 4678 or AS 2159, not a global factor of safety on Terzaghi capacity.

## Standards cited

AS 5100.3, AS 2870

## Related

- [[AS 2870 residential site classification]]
- [[Groundwater observations]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
