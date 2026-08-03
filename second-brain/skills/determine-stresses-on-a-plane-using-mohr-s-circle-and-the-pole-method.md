---
title: Determine stresses on a plane using Mohr's circle and the pole method
type: skill
tags: [skill, general]
confidence: medium
updated: 2026-08-01
---

# Determine stresses on a plane using Mohr's circle and the pole method

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 10, §§10.2–10.3 (normal and shear stresses on a plane; the pole method), with §12.3 for the inclination of the failure plane), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Normal and shear stress on any chosen plane through a soil element, plus the principal stresses and the orientation of the failure plane, obtained graphically without sign-convention errors.

## Inputs

- Normal stresses on two orthogonal planes through the element and the shear stress acting on them
- The orientation of the plane on which stresses are wanted, relative to those reference planes
- Sign convention for compression and shear, stated explicitly

## Procedure

1. Plot the two stress points corresponding to the two known planes on normal-stress versus shear-stress axes, and draw the circle through them with its centre on the normal-stress axis.
2. Read the major and minor principal stresses as the two intersections of the circle with the normal-stress axis.
3. Find the pole (origin of planes): from the point on the circle representing the stresses on a known plane, draw a line parallel to that physical plane; where it cuts the circle again is the pole. The pole is unique for the stress state.
4. To obtain stresses on any other plane, draw a line from the pole parallel to that plane; its second intersection with the circle gives the normal and shear stress on it directly.
5. To obtain the orientation of a principal plane, draw the line from the pole to the corresponding principal stress point; that line is parallel to the principal plane.
6. Where a Mohr-Coulomb envelope is also plotted, the failure plane orientation follows from the tangent point, and is inclined at 45 degrees plus half the friction angle to the major principal plane.

## Decision rules

- Use the pole method rather than double-angle formulas whenever plane orientations matter — it removes the factor-of-two and sign ambiguities.
- State the sign convention for shear at the outset; the pole construction is convention-dependent.
- In soil mechanics, compression is conventionally positive; do not import a structural-mechanics convention mid-problem.

## Checks

- Check that the line from the pole to a principal stress point is genuinely parallel to a plane on which shear is zero.
- Check the circle passes through both known stress points and that its centre lies at the average of the two normal stresses.
- Check that the derived maximum shear stress equals the circle's radius.

## Common errors

- Confusing the pole with the circle's centre.
- Drawing the line through the pole parallel to the normal to the plane rather than parallel to the plane itself.
- Mixing total and effective stresses on one circle.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use

## Standards cited

None cited in the source passage.

## Related

- [[Skills]]
- [[Skills]]
