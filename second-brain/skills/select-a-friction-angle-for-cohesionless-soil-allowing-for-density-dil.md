---
title: Select a friction angle for cohesionless soil allowing for density, dilatancy and stress level
type: skill
tags: [skill, parameters]
confidence: medium
updated: 2026-08-01
---

# Select a friction angle for cohesionless soil allowing for density, dilatancy and stress level

> **Source:** `Soil Mechanics (Wiley Series in Geotechnical Engineering) by T. William Lambe Robert V. Whitman.docx` (Lambe & Whitman, Ch. 11 (Shear Strength of Cohesionless Soil), with the stress-strain behaviour and dilatancy discussion in Ch. 10 and Ch. 12), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A design friction angle for a sand or gravel that reflects the density it will actually be at, the stress level it will actually see, and whether peak or constant-volume strength is appropriate for the mechanism.

## Inputs

- Grading, particle shape and mineralogy of the soil
- In-situ or as-placed density index (relative density), and how it may change under the design loading
- Effective stress level in the zone that governs the mechanism
- Triaxial or direct shear test results at comparable densities and stress levels, or a defensible correlation
- The failure mechanism: is it a brittle peak-strength mechanism, or a large-strain / progressive one?

## Procedure

1. Establish the density at which the soil will be at failure, not at sampling — for a mechanism that causes contraction (loose material under load) the operative density may differ from the initial one.
2. Identify the constant-volume (critical state) friction angle for the material, which depends principally on particle shape, grading and mineralogy and is essentially independent of density.
3. Add the dilatancy contribution for dense material: the peak friction angle exceeds the constant-volume value by an amount that grows with density index and falls as effective stress rises, because high stress suppresses dilation and promotes particle crushing.
4. Recognise that the failure envelope is therefore curved: a friction angle fitted at low stress will overestimate strength at high stress. Test at, or correct to, the stress level of the design problem.
5. Choose the design value by mechanism: use the peak value only where the mechanism is genuinely brittle-tolerant and the strain field is uniform; use the constant-volume value where progressive failure, large deformation or strain non-uniformity is possible; use residual values on pre-existing shear surfaces.
6. Where the friction angle is inferred from penetration testing, correct the penetration resistance for overburden stress first and state the correlation used.
7. Note that a plane strain problem mobilises a somewhat higher friction angle than a triaxial one; apply a documented adjustment if the design method assumes plane strain.

## Decision rules

- Do not carry a peak friction angle measured at low confining stress into a high-stress problem such as a deep foundation or a high embankment.
- Do not credit dilatancy in a loose or contractive material, and do not credit it at all in a material that may be loosened by construction, cyclic loading or seepage.
- Where the material can be driven to a contractive state under cyclic or seismic loading, the operative strength may fall well below the constant-volume value — assess liquefaction separately.
- Many earthworks specifications cap the design friction angle for fills unless supported by testing on the actual material; check the governing specification before adopting a high value.

## Checks

- Check the assumed density index will actually be achieved and maintained in the field.
- Check the stress range of the tests against the stress range of the design problem.
- Check the chosen value against the constant-volume value for that material type — a design friction angle far above it implies reliance on dilatancy that must be justified.

## Common errors

- Adopting a laboratory peak friction angle as a general soil property.
- Using a friction angle derived at one density for material placed at another.
- Ignoring the curvature of the failure envelope in high-stress problems.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Lambe and Whitman was published in 1969; correlations, terminology and equipment described in it have been superseded in places — check current practice before using any value.

## Standards cited

AS 1289.6.4.1, AS 4678

## Related

- [[Groundwater observations]]
- [[Skills]]
