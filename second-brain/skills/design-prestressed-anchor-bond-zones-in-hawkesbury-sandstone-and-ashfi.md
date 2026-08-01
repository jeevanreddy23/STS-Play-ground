---
title: Design prestressed anchor bond zones in Hawkesbury Sandstone and Ashfield Shale from proof-test-based values
type: skill
tags: [skill, piling-rock]
confidence: high
updated: 2026-08-01
---

# Design prestressed anchor bond zones in Hawkesbury Sandstone and Ashfield Shale from proof-test-based values

> **Source:** `PELLS MOSTYN WONG (2019) CLASSIFICATION OF SANDSTONES AND SHALES IN THE SYDNEY.pdf` (Section 5 (pp 37-43); recommended design lines in Figures 6 and 7 (pp 42-43); proof-test database in Appendix A Tables A1-A2), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** An anchor bond length designed on proven (proof-test) average bond stresses rather than on an unmeasurable 'ultimate bond strength', with every production anchor verified by proof loading.

## Inputs

- Substance UCS of the bond-zone rock (the dominant parameter; class alone is insufficient)
- Drilling method (rotary-percussion assumed, giving roughness R2 or better) and hole cleaning regime
- Working load, importance category and service life
- Recommended design bond-stress lines versus UCS in Figures 6 (sandstone) and 7 (shale) of the 2019 paper

## Procedure

1. Confirm the anchor is a conventional grouted strand/bar anchor (no plates, nuts or under-reams; under-reams add nothing where UCS exceeds about 5 MPa per Barley 1988).
2. Require sidewall cleaning by flushing with water/air until returns run clear, per RMS B114-type clauses; smear destroys the assumed bond.
3. Select a design average bond stress from the paper's recommended UCS-based lines (Figures 6 and 7), which are anchored in proof-test data rather than sparse ultimate-pullout data.
4. Size the bond length from the design bond stress, keeping it at or below about 4 m; beyond that the distal zone contributes essentially nothing because of progressive de-bonding ('unzipping').
5. Specify proof loading of every anchor to at least 120% of working load (or per the applicable code category), with creep monitoring, as the design verification.

## Decision rules

- If more capacity is needed than a ~4 m bond length provides, use a single-bore multiple-anchor system rather than lengthening the bond.
- Do not transfer compression-socket side-shear values (tau = alpha beta UCS with alpha ~0.2) directly to anchors: Poisson effects reverse, L/D is 20-50 instead of 1-6, and there is no end-bearing backup.
- Treat code procedures that require an a priori ultimate bond strength with scepticism; unless a specially designed short bond length is tested, that parameter cannot be measured because of progressive failure.

## Checks

- Diamond-cored holes flagged: generalised roughness assumptions do not apply to them.
- Importance-category and geotechnical reduction factors from AS 5100.3 / AS 4678 reconciled (the paper notes the two codes conflict).
- Creep acceptance criteria defined per current testing standards (EN ISO 22477-5 direction).

## Common errors

- Dividing anchor failure load by total bond area and calling it ultimate bond strength, ignoring unzipping.
- Combining an aggressive design bond stress with a long bond length - identified in the paper as a dangerous combination.
- Relating bond capacity directly to rock class instead of substance UCS.

## Caveats

- Recommended design lines are read from figures not reproduced here; obtain them from the published paper.
- Guidance excludes plate/under-reamed anchors and fully bonded untensioned dowels (no generalised guidelines exist for dowels).
- Design reference only: bond values must be verified against the source figures, proof tested, and reviewed by a qualified engineer before use.

## Standards cited

AS 5100.3:2017; AS 4678-2002; BS 8081:2015; EN ISO 22477-5:2018, PTI DC35.1-14 Recommendations for Prestressed Rock and Soil Anchors, NSW RMS Specification B114 (borehole cleaning)

## Related

- [[Rock socket length]]
- [[Rock strength classes]]
- [[Weathered siltstone]]
- [[Borehole log conventions]]
- [[Library - Pells papers on Sydney sandstone and shale]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
