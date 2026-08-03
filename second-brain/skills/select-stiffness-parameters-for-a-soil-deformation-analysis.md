---
title: Select stiffness parameters for a soil deformation analysis
type: skill
tags: [skill, parameters]
confidence: medium
updated: 2026-08-01
---

# Select stiffness parameters for a soil deformation analysis

> **Source:** `Soil Mechanics (Wiley Series in Geotechnical Engineering) by T. William Lambe Robert V. Whitman.docx` (Lambe & Whitman, Ch. 12 (Stress-Strain Relationships) and Ch. 10 (General Aspects of Stress-Strain Behavior), with the drained and undrained counterparts in Ch. 22 and Ch. 30), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Modulus values (and their basis) matched to the stress path, stress level and strain range of the deformation problem being analysed, rather than a single nominal soil modulus.

## Inputs

- The deformation problem: what is being predicted (settlement, wall deflection, ground movement) and to what accuracy
- The stress path and drainage condition of the field problem
- Test data: oedometer compression curves, triaxial stress-strain curves, in-situ test results (pressuremeter, plate load, seismic)
- The strain range relevant to the prediction
- Stress history: is the soil loading for the first time, or reloading below its past maximum stress?

## Procedure

1. Decide which stiffness the analysis actually needs: a one-dimensional (confined) modulus for laterally restrained compression, a drained Young's modulus for long-term settlement with lateral strain, an undrained modulus for immediate settlement of a saturated clay, or a shear modulus for a distortion-dominated problem.
2. For one-dimensional compression, take the compression index as the slope of the void ratio against logarithm of stress curve, as the source defines it, and distinguish the virgin compression slope from the much flatter recompression slope.
3. Establish whether the field stress change is a first loading beyond the past maximum stress (use the virgin slope) or a reloading below it (use the recompression slope); the difference is typically large and getting it wrong dominates the error in the prediction.
4. Recognise that soil stiffness is non-linear: it falls steeply with increasing strain from a high small-strain value. Select a secant modulus over the strain range the structure will actually impose, and say what that range is.
5. Recognise that stiffness rises with confining stress; scale or select test data at the relevant stress level rather than using a single value across a deep profile.
6. Match the drainage condition: undrained modulus with a Poisson's ratio for constant volume for immediate response, drained modulus with a drained Poisson's ratio for long-term response. Do not mix them.
7. Cross-check laboratory-derived stiffness against in-situ measurements and, where available, against back-analysis of measured movements on comparable works — laboratory values are commonly too low because of sample disturbance.
8. Report the modulus with its basis: test type, stress path, stress level, strain range and drainage condition.

## Decision rules

- A single quoted soil modulus without its basis is not usable; always record stress path, strain level and drainage.
- Where the prediction is sensitive to stiffness, run the analysis with a credible upper and lower bound rather than a single value.
- Sample disturbance reduces measured stiffness far more than it reduces measured strength — treat laboratory moduli for stiff and structured soils as lower bounds.
- For serviceability predictions of movement adjacent to excavations and tunnels, small-strain stiffness and its decay with strain usually govern; a single linear elastic modulus will not reproduce the observed movement pattern.

## Checks

- Check the modulus used against the actual strain range implied by the predicted movement, and iterate if they are inconsistent.
- Check whether the stress change crosses the preconsolidation pressure anywhere in the profile.
- Check the prediction against measured performance of comparable structures on the same deposit.

## Common errors

- Using a virgin compression slope for a reloading problem, or the reverse.
- Applying an undrained modulus with a drained Poisson's ratio.
- Taking a laboratory modulus from a disturbed sample of a stiff clay as the design stiffness.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Lambe and Whitman was published in 1969; correlations, terminology and equipment described in it have been superseded in places — check current practice before using any value.

## Standards cited

AS 5100.3, AS 2870

## Related

- [[AS 2870 residential site classification]]
- [[Skills]]
