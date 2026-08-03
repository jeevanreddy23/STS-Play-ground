---
title: Model grouted tieback support for a slope in Slide2
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Model grouted tieback support for a slope in Slide2

> **Source:** `Tutorial_06_Support.pdf` (Pages 6-2 to 6-11 and 6-14 to 6-18 (pattern, properties, force diagrams, back analysis)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A supported-slope model with a uniformly spaced tieback pattern, showing the FS improvement and the shift of critical surfaces beyond the reinforced zone

## Inputs

- Unsupported slope model (ideally as one scenario in a multi-scenario file for before/after comparison)
- Tieback layout: orientation angle, length, spacing along slope, start/end points on the face
- Support properties: bonded length percentage, bond strength, capacity

## Procedure

1. Duplicate the model into 'No Support' and 'With Support' scenarios so both compute in one file
2. Compute the unsupported scenario first to establish the baseline FS (0.982 in the worked example — critical equilibrium)
3. In the support scenario select Support > Add Support Pattern; set orientation (e.g. Angle from Horizontal = -10 degrees), length (15 m) and spacing (3 m measured along the slope), then click or type the start/end points of the pattern on the face
4. Define support properties (Properties > Define Support): type = Grouted Tieback, Bonded Length percent (e.g. 50, always measured from the far end of the element), Bond Strength
5. Compute and compare scenarios side by side (Window > Tile Vertically, F2 to Zoom All in each)
6. Display Data > Show Support Forces to see each element's force diagram; the legend colours indicate the governing failure mode along the element (tensile vs pullout)

## Decision rules

- A support element only affects a slip surface it intersects; the applied force is a line load at the intersection point (force per unit width of slope)
- For end-anchored bolts, tiebacks and soil nails the applied force acts parallel to the element; geotextiles/user-defined support can act tangent to the surface, parallel, bisecting, or at a user angle
- The force applied to a surface is the minimum over the possible failure modes (pullout, tendon tensile failure, stripping) at the intersection point, read off the force diagram
- Use Back Analysis of support force to find the slip surface demanding the maximum support force for a target FS — it sizes required capacity/spacing (from the force) and required length (from the surface)

## Checks

- After adding support the critical surface should move outside or deeper than the reinforced zone (FS rose from 0.982 to 1.391 in the example)
- View All Surfaces and the 50 lowest-FS surfaces to confirm the whole low-FS population, not just the minimum, has improved

## Common errors

- Support too short to intersect the critical surface, giving no benefit
- Reading the bonded length from the slope face instead of from the far end of the element
- Comparing supported/unsupported runs with different search settings

## Caveats

- Software tutorial — a worked teaching example, not a design procedure; validate models against the project brief and a qualified reviewer

## Standards cited

None cited in the source passage.

## Related

- [[Skills]]
- [[Skills]]
