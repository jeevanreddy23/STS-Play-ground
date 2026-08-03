---
title: Select rock material, defect and joint strength parameters from the Look Chapter 9 property tables
type: skill
tags: [skill, parameters]
confidence: medium
updated: 2026-08-01
---

# Select rock material, defect and joint strength parameters from the Look Chapter 9 property tables

> **Source:** `Handbook of Geotechnical Investigation and Design Tables_Bert Look 2014.pdf` (Chapter 9 Rock properties, Sections 9.1-9.18 (Tables 9.1 to 9.18), pp 113-123), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Rock mass parameters - unit weight, intact and mass strength, joint friction with roughness and infill effects - selected with the intact-to-mass reduction made explicit rather than hidden in a factor of safety.

## Inputs

- Rock type, mineralogy and geological origin from the core log
- Weathering grade and RQD
- Discontinuity spacing, roughness, aperture, infill type and thickness
- Intact strength (unconfined compression or point load index) where available
- Whether the design is controlled by intact material, by the mass, or by a single defect

## Procedure

1. Decide which of the three regimes applies (Section 9.1): competent rock, where fresh unweathered material governs; decomposed rock, where weathering has altered the properties; or non-intact rock, where defects in the mass govern. The parameter route differs for each and mixing them is the main error in rock parameter selection.
2. Take general engineering properties by rock type from Table 9.1 (fresh intact condition only) and unit weight from Table 9.2, remembering the table is intact rock and that compacted rock fill is lighter.
3. Use mineralogy as a screen: Table 9.3 for predominant minerals by rock type, Table 9.4 for silica content in igneous rocks, Table 9.5 for the Mohs hardness scale and Table 9.6 for typical mineral hardness by rock type. Quartz resists chemical weathering; feldspar weathers to clay minerals; biotite and chlorite create planes of weakness. Hardness relates to drillability, not strength.
4. For bored pile work, read Table 9.7 for how rock type affects drilling and installation, and pair it with Chapter 22 for capacity.
5. Apply the intact-to-mass reduction. Table 9.9 gives the relative change in rock property due to discontinuities and Table 9.12 gives design strength parameters that already embed a laboratory-to-field reduction. Table 9.10 gives the relative strength change with discontinuity inclination at zero confinement - orientation matters as much as the presence of the defect.
6. Relate RQD to discontinuity spacing with Table 9.11, and derive rock mass properties from RQD with Table 9.14 - these values feed the Chapter 22 bearing capacity methods, so keep the RQD basis consistent between the two.
7. Take intact shear strength from Table 9.13 (by material, fresh to slightly weathered) and Table 9.15 (by geologic origin), and reduce for weathering.
8. For joints, build the friction angle as a basic friction angle plus a roughness angle. Take basic values from Table 9.16 (which assumes no infill), and the roughness contribution from Table 9.17, where the asperity angle depends on the wavelength of the joint surface considered - so the roughness increment measured on a core sample is not the roughness increment acting on a slope-scale surface.
9. Where joints are filled, switch to Table 9.18 - infill can dominate, and where movement has already occurred in a clay infill the residual friction angle applies, not the peak.
10. For mudstone and shale, classify by mineral proportion with Table 9.8 before assigning properties; laminated and non-laminated materials of the same grain size behave differently.
11. Record which parameter is intact, which is mass, and what reduction was applied between them.

## Decision rules

- Rock mass strength equals intact strength factored for discontinuities - state the factor, do not fold it silently into a safety factor.
- Joint roughness contributions are scale dependent: use an asperity wavelength representative of the failure surface being analysed.
- Where a clay infill has undergone previous displacement, use residual strength.
- Hardness is a drillability index, not a strength - do not substitute it.
- Where RQD approaches zero the rock mass should be treated as a soil mass and the rock-specific methods do not apply.

## Checks

- Intact strength cross-checked between rock type tables, point load and laboratory testing
- Joint friction angle checked against the discontinuity description on the log (roughness, planarity, infill)
- Mass reduction factor applied once and only once through the design chain
- RQD basis identical between the parameter selection and the bearing capacity calculation
- Weathering reduction applied where the design horizon is not fresh rock

## Common errors

- Using intact rock strength directly in a jointed rock mass problem
- Adding a core-scale roughness angle to a slope-scale sliding analysis
- Applying peak infill strength on a surface with evidence of past movement
- Double-counting the defect reduction in both the parameter and the safety factor
- Assigning generic rock-type properties without reference to weathering grade

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- Joint friction tables assume no infill unless stated; infilled joints are governed by Table 9.18.
- Overlaps with the project's existing rock-mechanics skill set (GSI, RMR, Q, Hoek-Brown) - use those for rock mass classification and this skill for property selection.

## Standards cited

ISRM Suggested Methods, AS 4133 Methods of testing rocks, Hoek-Brown failure criterion literature (for the mass strength cross-check)

## Related

- [[Bored pier inspection]]
- [[Rock weathering classes]]
- [[Weathered siltstone]]
- [[Soil description order]]
- [[Skills]]
