---
title: Derive undrained strength, stress history and stress state in clay from CPTu
type: skill
tags: [skill, parameters]
confidence: high
updated: 2026-08-01
---

# Derive undrained strength, stress history and stress state in clay from CPTu

> **Source:** `In Situ Testing in Geomechanics The Main Tests by Fernando Schnaid (z-lib.org).pdf` (Chapter 3 CPTU - Soil properties in cohesive materials (pp 94-97), Undrained shearing strength (pp 97-103, Figure 3.14), Stress history (pp 103-106, Figures 3.20-3.21), Stress state (pp 106-109, Figure 3.24)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** An undrained strength profile with the cone factor basis stated, an overconsolidation ratio profile derived through the normalised strength ratio, and an at-rest earth pressure coefficient with its uncertainty acknowledged.

## Inputs

- Corrected tip resistance, pore pressure and sleeve friction profiles
- Total and effective vertical stress profiles
- Rigidity index (shear modulus over undrained strength) or an estimate of it
- Reference undrained strengths from vane, laboratory or other tests for site calibration
- Plasticity index and critical state parameters where available
- Filter position (mid-face or shoulder), because the published relationships are position specific

## Procedure

1. Recognise the fundamental limitation: the CPTu cannot measure undrained strength directly, so the assessment combines theory and empirical correlation. Undrained strength is not a unique soil property - it depends on failure mode, shear rate, anisotropy and stress history - so define which strength the design needs before choosing a cone factor.
2. Relate net tip resistance to undrained strength through a cone factor. The theoretical solutions available for that factor fall into four families: bearing capacity theory, cavity expansion theory, the strain path method, and finite element analysis. Bearing capacity solutions cannot account for soil stiffness and volume change and are only approximate for a penetration problem; the strain path method is the significant advance for clay; and combinations of strain path analysis with cavity expansion or finite element analysis give better predictions than any one alone.
3. Understand what the cone factor depends on. The combined strain path and finite element solutions bring in the rigidity index, the cone and shaft roughness, and the in-situ stress anisotropy expressed through the difference between vertical and horizontal total stress normalised by undrained strength. A cone factor quoted without a rigidity index is incomplete.
4. Calibrate the cone factor at the site. Because the theoretical factor is sensitive to parameters that are themselves uncertain, use vane, laboratory or reference-site strengths to back-calculate a site cone factor and then apply it across the deposit, rather than importing a published value.
5. Derive stress history through the normalised strength ratio rather than directly from tip resistance. The book is explicit that cone resistance, being a strength measurement, is not very sensitive to stress history and that direct correlations between tip resistance and overconsolidation ratio should be viewed as no more than an indication.
6. Work the strength ratio route: estimate undrained strength from the cone, take effective vertical stress from the profile, form the normalised strength ratio, and compare it against the normally consolidated value. A normally consolidated clay sits in a narrow band of that ratio; a substantially higher ratio indicates overconsolidation. The relationship between the strength ratio and overconsolidation ratio follows a power law whose exponent is a critical state parameter measured in the laboratory - so measure it rather than assuming a default.
7. Where a direct piezocone-to-overconsolidation-ratio route is used, select the expression matching the filter position - the published solutions differ between mid-face and shoulder elements and are not interchangeable.
8. Derive the at-rest earth pressure coefficient with explicit caution. The standard route is the empirical relationship between the coefficient and the effective friction angle for normally consolidated deposits, extended by an overconsolidation ratio term for overconsolidated deposits. Both the friction angle and the overconsolidation ratio then have to be estimated, so the uncertainty compounds. The book notes the natural variability of the coefficient far exceeds what elastic theory predicts because of deposition and stress history effects on soil structure.
9. Cross-check the derived strength and stress history against the preconsolidation pressure from oedometer testing where available - the preconsolidation pressure is described in the source as the single most important item in clay design, controlling both long-term settlement and short-term stability.
10. Report undrained strength as a profile with the cone factor, filter position, rigidity index assumption and calibration source attached.

## Decision rules

- Calibrate the cone factor to the site; a published value imported unmodified is a screening estimate.
- Do not derive overconsolidation ratio directly from tip resistance where the normalised strength ratio route is available.
- Use the expression that matches your filter position - mid-face and shoulder solutions differ.
- State the shearing mode the reported undrained strength corresponds to.
- Where the normalised strength ratio sits near the normally consolidated band but the deposit is known to be overconsolidated, suspect partial drainage or structure rather than accepting the result.

## Checks

- Cone factor back-calculated against at least one independent strength measurement on the site
- Rigidity index assumption stated and its sensitivity tested
- Overconsolidation profile compared against oedometer preconsolidation pressures
- At-rest coefficient checked against an independent measurement (dilatometer or self-boring pressuremeter) where the design is stress-state sensitive
- Normalised strength ratio plotted with depth and checked for physical plausibility

## Common errors

- Using a single published cone factor across a whole project without calibration
- Deriving overconsolidation ratio directly from tip resistance and treating it as a measurement
- Mixing mid-face and shoulder-based relationships
- Quoting an undrained strength without the shearing mode it represents
- Deriving the at-rest coefficient through two compounding estimates and reporting it without an uncertainty band

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- Theoretical cone factor solutions generally assume strength and stiffness isotropy and radially symmetric initial stresses - real deposits satisfy neither.
- Correlations were developed predominantly on sedimented clays and are unreliable in structured, bonded or residual materials.

## Standards cited

ISO 22476-1, Eurocode 7 Part 2 (derived values from CPT), ASTM D5778

## Related

- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
