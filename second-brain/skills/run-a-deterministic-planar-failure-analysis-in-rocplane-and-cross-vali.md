---
title: Run a deterministic planar-failure analysis in RocPlane and cross-validate hand calculations
type: skill
tags: [skill, slope-stability, youtube-source]
confidence: high
updated: 2026-08-01
---

# Run a deterministic planar-failure analysis in RocPlane and cross-validate hand calculations

> **Source:** [YouTube — Planar Rock Slope Failure — RocPlane Tutorial](https://www.youtube.com/watch?v=Uoi1iKNBqow&t=0s) (00:02-09:47). A YouTube lecture — learning
> material, not an approved design procedure. Equations and numbers were
> heard through auto-captions; read them off the video before use, and
> verify anything design-relevant against the standard and the project
> specification. Engineering conclusions need qualified review.

**Outcome.** A software factor of safety for a planar rock slope failure under dry, wet, seismic and anchored cases that matches independent hand calculation

## Inputs

- Slope height, slope face angle, failure plane angle, upper face angle
- Rock unit weight, Mohr-Coulomb cohesion and friction angle
- Tension crack location (distance from crest) or geometry
- Water fill percentage, seismic coefficient, bolt force and plunge as required

## Procedure

1. Set project units (e.g. kPa) in Analysis > Project Settings to match the cohesion units
2. Enter geometry in Input Data: slope height, face angle, failure plane angle, unit weight, zero upper face if none (example: 12 m, 60, 35, 26 kN/m3)
3. Use the 2D view to confirm the textbook geometry, driving and normal force layout
4. Add the tension crack, either at a specified distance from the crest (the software back-calculates crack length) or by direct geometry
5. Enter Mohr-Coulomb strength (example: 37 degrees, 25 kPa) and read the factor of safety (1.54 dry)
6. Add water: select plane water pressure with peak pressure at the tension crack base and set percent filled (100 percent gave 1.07; software reports U and V forces to compare with hand values)
7. Add seismic load in the Forces tab: coefficient 0.08, direction horizontal as the worst case (gave 0.92)
8. Add support in 3D view: place a bolt, set plunge angle and bolt force via bolt properties (400 kN at 35 degree plunge raised the factor of safety to about 1.4)
9. Compare wedge weight, failure plane length, U and V against hand-calculated values

## Decision rules

- Horizontal seismic direction is the worst case for this geometry
- Decreasing the bolt plunge angle increases stability for this setup — vary plunge and force to reach the target factor of safety
- Peak pressure at tension crack base with 100 percent fill represents the worst-case water assumption

## Checks

- Wedge weight, failure plane length, tension crack length, U and V reported by the software should reproduce hand-calculated values (1241 kN/m, 13.3 m, 4.35 m, 284.5, 92.7 in the example)
- Each added adverse effect should lower the factor of safety; each support should raise it

## Common errors

- Leaving default units inconsistent with the cohesion entered
- Forgetting to zero the upper face when the real slope has none
- Reading the factor of safety before re-running after a property change

## Caveats

- YouTube lecture — learning material, not an approved design procedure; verify against project specification and current standards
- Water is modelled as pressure distributions selected in the software, not as a phreatic surface; assumptions beyond percent fill are not stated

## Standards cited

None cited in the source passage.

## Related

- [[Skills]]
- [[Skills]]
