---
title: Select an undrained shear strength for design from stress history and test conditions
type: skill
tags: [skill, parameters]
confidence: medium
updated: 2026-08-01
---

# Select an undrained shear strength for design from stress history and test conditions

> **Source:** `Soil Mechanics (Wiley Series in Geotechnical Engineering) by T. William Lambe Robert V. Whitman.docx` (Lambe & Whitman, Ch. 29 (Undrained Shear Strength), including the relation between undrained strength and consolidation stress state and the worked conversion between isotropic and at-rest consolidation, with the underlying behaviour in Ch. 28), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A design undrained strength that reflects the consolidation stress state, the stress path of the field problem, and the disturbance the soil will experience, rather than a single laboratory number.

## Inputs

- Effective stress history: in-situ effective vertical stress, preconsolidation pressure and the at-rest stress ratio
- Undrained test results (UU, CIU, CAU) with the consolidation conditions recorded for each
- Pore pressure parameter A for the relevant loading path
- Whether the field loading is compression or extension, and whether the soil will be remoulded by construction
- Sensitivity of the clay

## Procedure

1. Recognise that undrained shear strength is not a soil constant but a consequence of the effective stress state at which the soil is sheared — a soil consolidated to a higher effective stress has a proportionally higher undrained strength.
2. Record for every reported undrained strength how the specimen was consolidated: isotropically, anisotropically to the at-rest condition, or not at all (UU on an undisturbed specimen at its in-situ water content).
3. Convert between consolidation conditions where necessary. The source works this through: the undrained strength scales with the isotropic stress at the start of the appropriate stress path, so the ratio of the anisotropically consolidated strength to the isotropically consolidated strength can be expressed in terms of the at-rest stress ratio and the pore pressure parameter A for the at-rest loading path.
4. Prefer strengths from specimens consolidated to the in-situ stress state (anisotropic, at-rest) over isotropically consolidated ones, since the isotropic route generally overstates strength for a normally consolidated clay.
5. Distinguish compression from extension strengths; a clay is weaker in extension, which matters for excavation and for the passive side of a slip surface.
6. Normalise the undrained strength by the effective consolidation stress and examine its variation with overconsolidation ratio, and use the normalised relationship to extend the design profile between test depths.
7. Assess sensitivity, and check whether construction will remould the soil; where it will, use the remoulded strength for the affected zone.
8. Build a design strength profile with depth, reconciling laboratory, field vane and penetration data, and state the basis at every depth.

## Decision rules

- Never quote an undrained shear strength without stating the consolidation condition and the test type.
- Do not apply a strength measured on a specimen consolidated well above the in-situ stress to the in-situ condition; the soil in the ground has not been consolidated to that stress.
- For a staged embankment, the operative undrained strength rises as each stage consolidates — take credit for that gain only if the consolidation is verified by piezometers.
- Where the failure surface passes through zones loaded in compression, direct shear and extension, use a weighted or anisotropic strength rather than a single compression value.
- For a sensitive clay, any construction that remoulds the soil converts the design problem into one governed by the remoulded strength.

## Checks

- Check the design strength profile against the effective overburden profile and the preconsolidation profile; the normalised strength should behave sensibly with overconsolidation ratio.
- Check laboratory strengths against corrected field vane and against penetration testing at the same depths.
- Check whether the design case is compression or extension and that the strength used matches.

## Common errors

- Treating undrained shear strength as a fixed soil property independent of stress state.
- Using isotropically consolidated undrained strengths for a normally consolidated clay without adjustment.
- Taking credit for strength gain from staged loading without pore pressure monitoring.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Lambe and Whitman was published in 1969; correlations, terminology and equipment described in it have been superseded in places — check current practice before using any value.

## Standards cited

AS 1289.6.4.1, AS 1289.6.2.1

## Related

- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
