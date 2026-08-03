---
title: Determine undrained shear strength of a clay and correct it for design use
type: skill
tags: [skill, parameters]
confidence: medium
updated: 2026-08-01
---

# Determine undrained shear strength of a clay and correct it for design use

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 12, §§12.12–12.17 (unconfined compression, empirical relationships between undrained cohesion and effective overburden pressure, sensitivity and thixotropy, strength anisotropy, vane shear test and other methods)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A design undrained shear strength profile for a saturated clay, corrected for test type and plasticity, with sensitivity assessed.

## Inputs

- Field vane shear results (peak and remoulded torque with vane dimensions), or unconfined compression / UU triaxial results
- Plasticity index of the clay
- In-situ effective overburden stress profile and overconsolidation ratio
- Sampling method and quality for laboratory-based strengths

## Procedure

1. Field vane: push the vane below any disturbed zone, rotate at the standard rate, and record peak torque; convert torque to undrained shear strength using the vane constant for the vane geometry (rectangular or tapered) given in the source, taking the standard height-to-diameter proportion where applicable.
2. Rotate the vane rapidly through several revolutions and repeat to obtain the remoulded strength; take the ratio of peak to remoulded strength as sensitivity.
3. Apply the plasticity-based correction factor to the vane strength before using it in design; the source gives the correction as a decreasing function of plasticity index, so vane strengths in high-plasticity clays are reduced most.
4. Unconfined compression: load a saturated clay specimen axially with no confinement to failure; take undrained shear strength as half the unconfined compressive strength.
5. Compare the strengths from the different methods over the same depths and build a design profile, weighting for sample quality and disturbance.
6. As a cross-check only, estimate undrained strength from the published normalised correlations against effective overburden stress, plasticity index and overconsolidation ratio.
7. Classify sensitivity using the published banding, and consider thixotropic strength regain where a remoulded soil will be left undisturbed.

## Decision rules

- Never use an uncorrected field vane strength for embankment or foundation design in a plastic clay — the correction can be substantial and omitting it is unconservative.
- Unconfined compression strengths are unreliable for fissured, sandy or sensitive clays; use UU triaxial with a confining pressure or field vane instead.
- Vane strengths are rate-dependent; record and standardise the rotation rate.
- Sensitive and quick clays lose most of their strength on disturbance — where sensitivity is high, treat construction disturbance as a design case in its own right.
- Normalised correlations are screening tools only; they cannot replace testing for design.

## Checks

- Check vane results against the strength profile from laboratory tests and against SPT or CPT trends at the same depths.
- Check the correction factor was applied and that its basis (plasticity index) is documented.
- Check the strengths against the geological history — an undrained strength implying a much higher overconsolidation ratio than the site history supports needs explanation.

## Common errors

- Reporting a raw vane strength as the design undrained strength.
- Using half the unconfined compressive strength from a fissured clay, which understates or overstates depending on fissure orientation.
- Treating undrained shear strength as a soil constant instead of a state-dependent property that changes as the soil consolidates.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Vane constants, the correction factor expression and the sensitivity banding are given in the source — take the numbers from there.
- Australian vane shear practice follows AS 1289.6.2.1; the correction factor should be checked against current geotechnical guidance rather than the 1970s expression.

## Standards cited

ASTM D2573, AS 1289.6.2.1, AS 1289.6.4.1

## Related

- [[Soil description order]]
- [[Skills]]
