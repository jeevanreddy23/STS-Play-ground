---
title: Assess a finite slope in homogeneous clay using mass procedures and stability charts
type: skill
tags: [skill, slope-stability]
confidence: medium
updated: 2026-08-01
---

# Assess a finite slope in homogeneous clay using mass procedures and stability charts

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 15, §§15.5–15.10 (finite slopes, Culmann's method, circular failure surfaces, mass procedure for homogeneous clay with phi equals zero, recent developments on critical circles, mass procedure for c-phi soil)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A factor of safety for a short-term (undrained) slope or cut in homogeneous clay, and the critical slip circle type and depth, obtained quickly enough to screen options.

## Inputs

- Slope height and angle, and the depth to any firm stratum beneath the toe
- Undrained shear strength of the clay (and its variation with depth)
- Unit weight of the clay
- Any surcharge, tension crack or water in the tension crack
- For a plane-surface screen, the effective cohesion and friction angle

## Procedure

1. For a steep cut or a case where a planar surface is realistic, use Culmann's method: take a plane through the toe, express the weight, normal and tangential components as functions of the plane's inclination, differentiate to find the critical plane, and obtain the critical height for a factor of safety of unity.
2. For circular failure in a clay analysed with an undrained (phi equals zero) strength, use the mass procedure: take the whole sliding mass above a trial circle as a free body, compute the driving moment of its weight about the circle centre and the resisting moment from the undrained strength acting over the arc length times the radius, and take the ratio as the factor of safety.
3. Search over trial circles and identify which of the three circle types governs: a slope circle passing through the face, a toe circle, or a deep-seated midpoint circle limited by a firm stratum.
4. Use the published stability number charts to shortcut the search: read the stability number for the slope angle and depth factor, and convert it to either a factor of safety for a given height or a critical height for a given strength.
5. Where a tension crack is expected, truncate the arc at the crack, remove the driving contribution of the cracked block's strength, and add hydrostatic pressure in the crack if it can fill with water.
6. Where the clay strength increases with depth, subdivide and use the appropriate charts or move to a method of slices.

## Decision rules

- The undrained mass procedure is a short-term analysis; for a cut in clay the long-term drained condition is usually more critical as pore pressures equilibrate, so also run an effective stress analysis.
- A firm stratum close beneath the toe forces a shallower circle and raises the factor of safety; a deep soft deposit allows a deep midpoint circle that can govern.
- Culmann's plane-surface method is only reasonable for near-vertical cuts; for flatter slopes it substantially overestimates stability.
- Do not use undrained charts for a slope in sand, fill or fissured clay where the drained condition governs.

## Checks

- Check which circle type controls and confirm the search covered deep-seated circles as well as toe circles.
- Check the undrained strength profile used is representative and corrected (for example a corrected field vane strength).
- Check the result against a method-of-slices analysis before relying on it for design.

## Common errors

- Using the short-term undrained factor of safety as the design case for a permanent cut.
- Reading a stability number for the wrong depth factor when a firm layer is present.
- Ignoring water in the tension crack.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Stability number charts and critical circle location charts are reproduced in the source — read the values there.

## Standards cited

AS 4678, AGS 2007 landslide risk management guidelines

## Related

- [[Skills]]
- [[Skills]]
