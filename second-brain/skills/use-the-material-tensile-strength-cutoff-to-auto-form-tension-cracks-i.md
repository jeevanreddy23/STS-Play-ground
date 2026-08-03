---
title: Use the material Tensile Strength cutoff to auto-form tension cracks in Slide2
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Use the material Tensile Strength cutoff to auto-form tension cracks in Slide2

> **Source:** `Tutorial_29_Tensile_Strength_Option.pdf` (Pages 29-2 to 29-6 (no-crack, manual crack, tensile strength option, RS2 comparison)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Elimination of unrealistic soil tension without manually locating a tension crack: a tensile strength cutoff adjusts slice base stresses so the crack depth is found automatically, matching the manually cracked result

## Inputs

- Slope model with a cohesive upper layer (e.g. c = 95 kPa, phi = 15 degrees) prone to tension
- Tensile strength value for the cutoff (default 0 kPa)

## Procedure

1. Run without any tension treatment and display Query > Show Line of Thrust: a thrust line outside the sliding mass flags tension, and the computed FS (about 2.6 here) is unreliable
2. Baseline option — manual crack: Boundaries > Add Tension Crack across the tensile layer, set the crack Water Level (Dry in this comparison; default is Filled), and re-run (FS dropped to about 0.73 with the thrust line fully inside the mass)
3. Automatic option: delete the crack boundary, open Define Materials, tick Tensile Strength for the tensile-prone material and keep 0 kPa; the local slice FS is adjusted so effective normal stress cannot go below the cutoff, forming the crack automatically
4. Re-run and confirm the FS matches the manual-crack result (0.73 in both cases)
5. Optionally cross-validate in RS2 by importing the Slide file (export to single-scenario first, replace unavailable material models such as Undrained F(depth) with a Discrete Function): critical SRF 0.76 vs 0.73

## Decision rules

- With the Tensile Strength box unticked, shear strength is simply zeroed where effective normal stress is below c/tan(phi) — tension itself is still allowed and can grossly inflate FS (2.6 vs 0.73 here)
- Most soils have no significant tensile strength; tension in results is unrealistic and also causes numerical problems, so use the cutoff or a crack whenever the thrust line exits the mass
- Prefer the automatic Tensile Strength option when the crack depth is unknown; use a manual crack when its position/saturation must be controlled explicitly

## Checks

- Automatic and manual approaches should converge on the same FS
- Thrust line fully inside the sliding mass after treatment

## Common errors

- Accepting a high FS from a cohesive slope without checking the thrust line
- Leaving a manual crack Filled while comparing to a dry automatic-cutoff run

## Caveats

- Software tutorial — a worked teaching example, not a design procedure; validate models against the project brief and a qualified reviewer

## Standards cited

None cited in the source passage.

## Related

- [[Skills]]
- [[Skills]]
