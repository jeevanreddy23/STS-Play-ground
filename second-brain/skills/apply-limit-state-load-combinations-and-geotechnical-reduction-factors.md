---
title: Apply limit state load combinations and geotechnical reduction factors to rock foundation design
type: skill
tags: [skill, piling-rock]
confidence: high
updated: 2026-08-01
---

# Apply limit state load combinations and geotechnical reduction factors to rock foundation design

> **Source:** `Pells Paper on Foundations on sandstone and shale in The Sydney Region.pdf` (Section 5 (pp 25-27): load combinations 5.1, strength 5.2.1, serviceability 5.2.2), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Strength and serviceability limit state checks for pads and sockets on Sydney rock using the paper's recommended phi_g values, filling the gap where AS 2159's tabulated factors do not cover rock-socket methods.

## Inputs

- Dead, live and wind load components (G, Q, Wu)
- Design method used for ultimate capacity (complete socket versus side-shear only)
- Quality of the local field-testing database for the geology
- Basis of deformation parameters (pressuremeter/large-scale in situ versus RQD/RMR correlation)

## Procedure

1. Form governing design actions: typically S* = 1.25G + 1.5Q and S* = 1.25G + Wu + psi_c Q for strength, and G + psi_l Q for long-term serviceability (psi_c = 0.4, or 0.6 for storage), treating earth pressure as live load and liquid load as dead load at strength state.
2. Compute ultimate geotechnical strength Rug by an accepted socket method, then check phi_g x Rug >= S*.
3. Select phi_g for complete sockets: 0.75 where substantial field test data exist for the geology (e.g. Hawkesbury sandstone, Melbourne mudstone), 0.65 for similar environments without specific data, 0.5 outside the worldwide database.
4. For side-shear-only sockets use the lower set: 0.6 / 0.5 / 0.35 for the same three categories.
5. For serviceability, apply a modulus reduction factor even though AS 2159 requires none: 0.75 where moduli come from pressuremeter or large-scale in situ measurement, 0.5 where estimated from RQD/RMR-type correlations; with class-table moduli chosen appropriately within their range, 0.75 may be adopted.
6. In the absence of structural requirements, design for settlements of roughly 5-15 mm.

## Decision rules

- The recommended phi_g values presume assured construction QC of sidewall and base cleanliness; without it, be very conservative and do not apply prescriptive factors.
- Serviceability frequently governs socket design, so the modulus reduction is not optional in practice.

## Checks

- All relevant AS 1170.1 combinations screened, not just the typical governing pair.
- phi_g category justified by documented local test data.
- Structural strength of the pile checked separately from geotechnical strength.

## Common errors

- Lifting phi_g values from AS 2159 Table 4.1 that do not cover rock-socket calculation methods.
- Taking full characteristic moduli for settlement prediction with no allowance for parameter uncertainty.
- Using complete-socket phi_g for a side-shear-only design.

## Caveats

- Written against 1989/1995 editions of the codes; map the recommendations onto current AS 2159/AS 1170 provisions before use.
- Design reference only: factors must be verified against the source paper and current standards, and reviewed by a qualified engineer before use.

## Standards cited

AS 2159-1995 Piling Code, AS 1170.1-1989 Loading Code

## Related

- [[Rock socket length]]
- [[AS 2159 piling]]
- [[Weathered siltstone]]
- [[Rock strength classes]]
- [[Library - Pells papers on Sydney sandstone and shale]]
- [[Skills]]
