---
title: Select and interpret the correct triaxial test for a design condition
type: skill
tags: [skill, testing]
confidence: medium
updated: 2026-08-01
---

# Select and interpret the correct triaxial test for a design condition

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 12, §§12.8–12.12 (triaxial testing; consolidated-drained, consolidated-undrained and unconsolidated-undrained tests; unconfined compression), with pore pressure parameters A and B in §§12.9–12.10 and stress paths in §12.19), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Shear strength parameters matched to the drainage and loading condition of the design problem (CD, CU with pore pressure measurement, or UU), with pore pressure parameters where relevant.

## Inputs

- Undisturbed or reconstituted specimens with defined initial state
- The design problem's drainage condition: long-term drained, short-term undrained, or staged
- Confining pressures spanning the in-situ and post-construction effective stress range
- Triaxial cell with back-pressure saturation, volume change measurement and pore pressure transducer

## Procedure

1. Choose the test type from the design condition: consolidated-drained (CD) for long-term effective stress problems, consolidated-undrained with pore pressure measurement (CU) to obtain effective stress parameters quickly plus undrained strengths, and unconsolidated-undrained (UU) for the immediate short-term strength of a saturated clay at its in-situ water content.
2. Saturate each specimen using back pressure and verify saturation with Skempton's B parameter (the ratio of the pore pressure rise to the applied cell pressure increment); accept only when B is high enough for the soil's stiffness.
3. Consolidate to the chosen effective confining stress for CD and CU tests, recording volume change; skip consolidation for UU.
4. Shear by increasing the deviator stress at a rate slow enough to allow drainage (CD) or to allow pore pressure equalisation for measurement (CU); record deviator stress, axial strain, volume change (CD) and pore pressure (CU).
5. Define failure consistently (peak deviator stress, or maximum effective principal stress ratio) and state the definition used.
6. For CD tests, plot total (=effective) stress Mohr circles and fit the drained envelope to obtain effective cohesion and friction angle.
7. For CU tests, plot both total stress circles (giving the consolidated-undrained total stress parameters) and effective stress circles obtained by subtracting the measured pore pressure at failure, and fit both envelopes.
8. Compute Skempton's A parameter at failure from the pore pressure change and deviator stress, and use it to characterise the soil's contractive or dilative tendency.
9. For UU tests on saturated clay, note the total stress Mohr circles all have the same diameter regardless of cell pressure, giving a horizontal envelope and a single undrained shear strength.
10. Apply the appropriate membrane and area corrections to the deviator stress.

## Decision rules

- Use effective stress parameters with the pore pressures actually expected in the field; never combine effective strength parameters with total stresses.
- Use UU (or a field undrained strength) only for genuinely undrained, short-term conditions in saturated clay of low permeability; sands drain too quickly for it to be meaningful.
- Where consolidation occurs during construction (staged loading of an embankment on soft clay), neither the pure UU nor the fully drained case applies — use CU strengths with the consolidation stress appropriate to each stage.
- For overconsolidated clay, the total stress CU envelope is bilinear; do not fit a single straight line across the whole range.
- Confirm the confining pressures used bracket the in-situ effective stress; strength parameters extrapolated well outside the tested range are unreliable.

## Checks

- Check B values recorded at the end of saturation for every specimen.
- Check the pore pressure response is genuinely equalised at the shearing rate used (compare against the specimen's measured consolidation rate).
- Check that effective stress circles from a CU test give a friction angle consistent with the corresponding CD test on the same soil, and reconcile if not.

## Common errors

- Reporting total stress CU parameters as if they were effective stress parameters.
- Shearing a CD test too fast, so the specimen is partly undrained and the derived friction angle is wrong in either direction depending on dilatancy.
- Using a UU strength for a long-term slope or retaining wall problem.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Theoretical B values for soils of different stiffness at full saturation are tabulated in the source.

## Standards cited

ASTM D7181, ASTM D4767, ASTM D2850, AS 1289.6.4.1, AS 1289.6.4.2

## Related

- [[Skills]]
- [[Skills]]
