---
title: Measure hydraulic conductivity in the laboratory by constant-head and falling-head tests
type: skill
tags: [skill, testing]
confidence: medium
updated: 2026-08-01
---

# Measure hydraulic conductivity in the laboratory by constant-head and falling-head tests

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 7, §7.5 (constant-head and falling-head tests), with §7.3–7.4 for Darcy's law and the controls on hydraulic conductivity, and §§7.6–7.7 for empirical relationships), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A laboratory hydraulic conductivity for a soil at a stated void ratio and temperature, with the correct test type chosen for the soil's permeability range.

## Inputs

- Prepared specimen (remoulded to a target density, or undisturbed) of known length and cross-sectional area
- Permeameter cell with porous stones, de-aired water, and either a constant-head reservoir or a standpipe of known bore area
- Timer, graduated collection vessel and thermometer

## Procedure

1. Choose the constant-head test for coarse-grained soils and the falling-head test for fine-grained soils, where flow volumes are too small to measure directly.
2. Saturate the specimen fully, preferably by upward percolation of de-aired water under a small gradient, and allow the flow to reach steady state before recording.
3. Constant head: hold the head difference across the specimen constant, collect the discharge over a measured time, and compute conductivity as the collected volume times specimen length divided by (area x head x time).
4. Falling head: record the standpipe head at the start and end of a measured interval, and compute conductivity from the standpipe area, specimen length and area, elapsed time and the logarithm of the head ratio.
5. Repeat at several heads or head ranges and confirm the computed conductivity is independent of gradient.
6. Correct the result to a standard reference temperature using the viscosity ratio, and report the void ratio at which the test was run.

## Decision rules

- Keep hydraulic gradients low enough to remain in the laminar (Darcy) range — high gradients in sand cause turbulent flow and an apparently lower conductivity, and in fine soils they can cause internal erosion or consolidation during the test.
- Report hydraulic conductivity always with the void ratio and temperature; the value is not a soil constant.
- Where the field problem is horizontal flow through a layered deposit, a vertical-flow laboratory test on a single specimen will not represent it — use directional testing or field methods.

## Checks

- Check for air bubbles in the specimen, lines and porous stones — trapped air is the most common cause of low results.
- Check for side-wall leakage (short-circuiting between specimen and cell wall), which gives high results.
- Check the computed conductivity is stable across successive readings; a drifting value signals piping, clogging or continued consolidation.

## Common errors

- Running a constant-head test on a clay, where the discharge is unmeasurably small.
- Failing to correct for temperature and then comparing results between laboratories.
- Reporting a laboratory conductivity as the field value without acknowledging that field mass permeability of a layered or fissured deposit is typically orders of magnitude higher.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Empirical conductivity relationships (Hazen-type, Kozeny-Carman, and the correlations for cohesive soils) and their coefficient values are in the source — treat them as screening tools only.

## Standards cited

ASTM D2434, ASTM D5084, AS 1289.6.7.1, AS 1289.6.7.2

## Related

- [[Skills]]
- [[Skills]]
