---
title: Calculate seismic active earth pressure on a retaining wall
type: skill
tags: [skill, earthworks]
confidence: medium
updated: 2026-08-01
---

# Calculate seismic active earth pressure on a retaining wall

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 13, §13.13 (active force on retaining walls with earthquake forces) and Ch. 14, §14.7 (passive force on walls with earthquake forces)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** The total (static plus dynamic) active thrust on a wall under earthquake loading, its point of application, and the resulting checks on the wall.

## Inputs

- Design horizontal and vertical seismic coefficients for the site and structure
- Wall geometry, backfill slope and wall friction angle
- Backfill effective friction angle and unit weight; saturation state of the backfill
- Static active thrust from the Coulomb or Rankine analysis

## Procedure

1. Convert the design ground acceleration to horizontal and vertical seismic coefficients as fractions of gravitational acceleration, per the governing earthquake loading standard.
2. Set up the pseudo-static trial wedge: add horizontal and vertical inertia forces to the wedge weight, in the directions that maximise the thrust, and solve for the critical wedge — this is the Mononobe-Okabe extension of the Coulomb analysis described in the source.
3. Use the closed-form seismic active coefficient (a function of friction angle, wall friction, wall and backfill inclination and the seismic inertia angle) to obtain the total seismic active thrust.
4. Separate the dynamic increment by subtracting the static active thrust from the total.
5. Apply the static component at one third of the wall height and the dynamic increment at a higher point (the source discusses the location of the resultant), then combine to find the point of application of the total.
6. Recheck the wall for sliding, overturning and bearing under the seismic load combination, with the reduced factors of safety appropriate to a transient load case.
7. Where wall displacement is acceptable, consider a displacement-based check rather than a force-based one.

## Decision rules

- The method has no solution when the seismic inertia angle exceeds the backfill friction angle less the backfill slope — that condition signals the backfill itself is unstable under the design acceleration and needs a different approach.
- Vertical acceleration can act upward or downward; check both signs, since the critical direction differs between the thrust and the wall stability checks.
- Saturated or liquefiable backfill invalidates the analysis: check for liquefaction separately and use hydrodynamic pressure formulations where water is present.
- Use seismic coefficients from the governing earthquake standard for the site, not a nominal fraction of peak ground acceleration.

## Checks

- Check the static case still governs some combinations — for low seismicity the static case with normal factors of safety often controls.
- Check the point of application used is consistent with the moment checks.
- Check the wall's ability to tolerate the small permanent displacement the pseudo-static method implicitly accepts.

## Common errors

- Applying the full peak ground acceleration as the horizontal seismic coefficient where the standard permits a reduced value for a wall that can displace.
- Placing the total seismic thrust at one third of the wall height, understating the overturning moment.
- Ignoring the vertical seismic component entirely.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Seismic coefficient tables and the location-of-resultant relationships are in the source.
- Australian seismic design actions come from AS 1170.4; that standard governs the coefficients, not the textbook.

## Standards cited

AS 1170.4, AS 4678, AS 5100.2

## Related

- [[Skills]]
- [[Skills]]
