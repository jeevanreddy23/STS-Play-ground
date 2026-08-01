---
title: Compute a wedge failure factor of safety in Swedge
type: skill
tags: [skill, slope-stability, youtube-source]
confidence: high
updated: 2026-08-01
---

# Compute a wedge failure factor of safety in Swedge

> **Source:** [YouTube — Swedge Tutorial: Factor of Safety for Wedge Failure](https://www.youtube.com/watch?v=exQ2fECKPbQ&t=0s) (00:00-10:30). A YouTube lecture — learning
> material, not an approved design procedure. Equations and numbers were
> heard through auto-captions; read them off the video before use, and
> verify anything design-relevant against the standard and the project
> specification. Engineering conclusions need qualified review.

**Outcome.** A deterministic factor of safety for a rock wedge formed by two intersecting joints in a slope face, including sensitivity to water filling of the joints

## Inputs

- Slope face dip and dip direction (60 / 037 in the class example) and slope height (8 m)
- Upper face (crest) dip and dip direction (about 10 degrees at the same dip direction in the example)
- Rock density or unit weight (density 2.6 t/m3, entered as about 0.026 MN/m3)
- For each of the two wedge-forming joints: dip and dip direction (40/060 and 70/320 in the example), cohesion and friction angle (c = 0, phi = 35 degrees in the example), and a waviness assumption (zero for planar joints)

## Procedure

1. Set Project Settings to deterministic analysis when each parameter has a single value rather than a distribution
2. Enter slope data: dip, dip direction, height, and the upper face geometry
3. Enter the unit weight; note the software works in MN/m3 so density must be converted
4. Enter both joints' dip and dip direction, cohesion, friction angle, and waviness
5. Compute; the software forms the wedge, calculates the trend and plunge of the line of intersection of the two joints internally, and reports the factor of safety (1.11 in the example)
6. For water sensitivity, open Input Data > Water, enable joint water pressure, and set the percent-filled value; re-compute at increasing saturation (e.g. 20, 50, 100 percent)

## Decision rules

- The orientation of a line of intersection is described by trend and plunge, not dip and dip direction — the software computes it from the two joint planes
- For observed wedge failures, cohesion on the joints is typically taken as zero, leaving friction to resist sliding
- Report the factor of safety rounded (e.g. 1.1), never to four decimals — field measurement and assumption accuracy cannot support that precision, and over-precise reporting loses marks in the lecturer's classes
- A factor of safety below 1 is treated as unstable in this analysis framework
- Small changes in unit weight (0.026 vs 0.025 MN/m3) barely affect the result; joint orientations and shear strength dominate

## Checks

- Verify units on entry: density in t/m3 versus unit weight in MN/m3
- Run the percent-filled water sweep — safety factor falls slightly at modest saturation and drops sharply at full saturation, so check the design case includes a defensible water assumption

## Common errors

- Copying the factor of safety from the software with spurious decimal precision
- Describing the line of intersection with dip and dip direction
- Ignoring water: a wedge acceptable dry can fail at high joint saturation

## Caveats

- YouTube lecture — learning material, not an approved design procedure; verify against project specification and current standards
- Some orientation values in the auto-captions are ambiguous (e.g. joint dip vs dip direction phrasing) — read the exact input values from the video screen or description
- The percent-filled water model is a simplified joint pressure assumption; confirm the water pressure model required for your project

## Standards cited

None cited in the source passage.

## Related

- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
