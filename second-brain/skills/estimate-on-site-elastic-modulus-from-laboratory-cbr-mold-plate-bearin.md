---
title: Estimate on-site elastic modulus from laboratory CBR-mold plate bearing tests
type: skill
tags: [skill, testing]
confidence: medium
updated: 2026-08-01
---

# Estimate on-site elastic modulus from laboratory CBR-mold plate bearing tests

> **Source:** `1-s2.0-S2214509521003521-main.pdf` (Sections 2, 3.4 and 5, pp. 2-3 and 8-11 (Eqs. 1-2, 7-8, Table 3)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** The engineer can predict the field elastic modulus of a compacted coarse-grained soil from small-scale laboratory plate load tests in a CBR mold, using the paper's calibrated equations.

## Inputs

- Soil sample and the field target dry unit weight and water content (matched to the site)
- 15 cm diameter CBR mold and modified Proctor compaction equipment
- Small loading plate for point load (PL) or full-face uniform load (UL) arrangement
- An assumed Poisson's ratio for the soil

## Procedure

1. Compact the sample in the 15 cm CBR mold by the modified Proctor method at the same water content and density as the field layer (Section 3.4, p. 3).
2. Load the specimen either as a point load through a small plate (PL) or as a uniform load over the surface (UL), recording settlement the same way as the field test.
3. For PL, estimate the field modulus with the calibrated Boussinesq-type expression Ev = 0.53 * (pi*p*a / delta_z) * (1 - nu^2), where p is the stress in the 50-150 kPa range, a the plate radius, delta_z the settlement over that stress range, and nu Poisson's ratio (Eq. 7, p. 9).
4. For UL, use the confined-condition expression Ev = 3.04 * (sigma1/epsilon1) * ((1-2nu)(1+nu)/(1-nu)) over the same stress range (Eq. 8, p. 10).
5. Prefer the PL arrangement: its prediction matched field moduli with R2 = 0.977, RMSE 3.99 and MAPE 4.32%, slightly better than UL (R2 = 0.970, MAPE 9.16%) because the mold wall confines a point load less (Table 3, p. 11).

## Decision rules

- Use this approach for coarse-grained embankment/subgrade soils where triaxial or oedometer moduli are impractical (largest grains too big relative to standard molds).
- For maximum stiffness and least settlement, compact on the dry side of optimum water content - moduli fell as compaction water content rose (Conclusions, p. 10).

## Checks

- Laboratory density and water content replicate the field values before crediting the prediction.
- The lab-to-field regression assumes a zero intercept (no load, no settlement); confirm the fitted trend is roughly linear for your soil.

## Common errors

- Applying the uncalibrated theoretical equations (slopes 1.0) instead of the calibrated factors 0.53 (PL) and 3.04 (UL).
- Compacting the lab sample at nominal OWC rather than the actual field water content, which drove most of the modulus variation.

## Caveats

- The calibration factors 0.53 and 3.04 were derived only for Thai loess and lateritic-loess clayey sands compacted near OWC; they are not general constants.
- Poisson's ratio must be assumed - the paper does not state the value used.
- The paper's conclusion section once expands UL as 'ultimate load', contradicting its own definition of uniform load; uniform load is the correct reading.

## Standards cited

ASTM D 1557-12, ASTM D 1194-94, DIN18134

## Related

- [[Rock strength classes]]
- [[Library - plate load testing]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
