---
title: Select a laboratory test that reproduces the field stress path
type: skill
tags: [skill, testing]
confidence: medium
updated: 2026-08-01
---

# Select a laboratory test that reproduces the field stress path

> **Source:** `Soil Mechanics (Wiley Series in Geotechnical Engineering) by T. William Lambe Robert V. Whitman.docx` (Lambe & Whitman, Ch. 9 (Tests to Measure Stress-Strain Properties), especially the comparison of isotropic compression, confined compression, triaxial and direct shear tests with their stress paths, and §9.4 on plane strain and simple shear devices), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A test programme in which each test's stress path, drainage and deformation mode match the field problem, so the measured parameters are relevant to the design calculation.

## Inputs

- The design problem's loading: what changes, in what direction, and over what time
- The initial in-situ stress state, including the coefficient of earth pressure at rest
- The deformation mode expected in the field: predominantly volumetric, predominantly distortional, or mixed
- Whether the field condition is drained, undrained, or partly drained
- Available apparatus: isotropic compression cell, oedometer, triaxial cell, direct shear box, and specialist plane strain / simple shear devices

## Procedure

1. Write down the field stress path: the change in mean stress and in shear stress from the in-situ state to the design condition, in the same terms as the test will be plotted (for example the p-q plane the source uses).
2. Identify the deformation mode. The source's comparison table sets these out: isotropic compression produces purely volumetric strain; confined compression (the oedometer) is primarily volumetric with no lateral movement, and follows the at-rest stress path; triaxial compression is primarily distortional with some volumetric change; direct shear is primarily distortional and imposes failure on a fixed plane.
3. Select the test whose stress path and deformation mode best match the field problem: an oedometer for one-dimensional settlement under a wide loaded area; triaxial compression for foundation loading; triaxial extension for unloading problems such as excavation; direct shear for a strength on a defined plane or interface.
4. Choose the loading direction deliberately — compression loading, compression unloading, extension loading and extension unloading are different stress paths and give different strengths and stiffnesses; the source names and illustrates them.
5. Where the field problem is plane strain (a long embankment, a long wall, a long slope), recognise that a triaxial test will not reproduce it; use a plane strain device if available, or apply a documented correction.
6. Where the field problem rotates principal stress directions (as beneath a moving load or along a curved slip surface), note that a triaxial cell cannot reproduce it and consider simple shear testing.
7. Match the drainage condition and the rate: run drained where the field is drained and undrained with pore pressure measurement where it is not, and set the rate from the specimen's measured consolidation behaviour.
8. Set the confining stresses to bracket the in-situ and post-construction stress range, and consolidate to the in-situ stress state (including anisotropic consolidation where the at-rest condition matters) before shearing.

## Decision rules

- Choose the test to fit the problem, not the problem to fit the available apparatus; where a compromise is unavoidable, record it and assess its direction of error.
- Strength and stiffness both depend on the stress path — a parameter measured on the wrong path is not conservative in any predictable direction.
- Anisotropic (at-rest) consolidation before shearing is more representative than isotropic consolidation for most field problems; state which was used.
- The direct shear box forces failure on a predetermined plane with a non-uniform stress distribution; use it where a plane is genuinely predetermined (an interface, a bedding surface, a residual shear) and prefer triaxial otherwise.

## Checks

- Check the plotted test stress path against the field stress path on the same axes.
- Check the consolidation stresses used correspond to the in-situ effective stresses at the sample depth.
- Check that the parameter the design method requires is actually what the test produced (for example a plane strain friction angle where the design uses one).

## Common errors

- Using an oedometer modulus in a problem with substantial lateral strain.
- Reporting a triaxial compression strength for a design problem controlled by extension (excavation unloading).
- Consolidating isotropically and reporting the result as representative of an anisotropically consolidated deposit without comment.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Lambe and Whitman was published in 1969; correlations, terminology and equipment described in it have been superseded in places — check current practice before using any value.

## Standards cited

AS 1289.6.4.1, AS 1289.6.4.2, AS 1289.6.2.2

## Related

- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
