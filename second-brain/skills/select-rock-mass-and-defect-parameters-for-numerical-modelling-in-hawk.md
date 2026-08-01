---
title: Select rock mass and defect parameters for numerical modelling in Hawkesbury Sandstone and Sydney shale
type: skill
tags: [skill, parameters, ocr-source]
confidence: medium
updated: 2026-08-01
---

# Select rock mass and defect parameters for numerical modelling in Hawkesbury Sandstone and Sydney shale

> **Source:** `substanceAndMassPropertiesForTheDesignOfEngineeringStructuresInTheHawkesburySandstone.pdf` (Sections 3.1-3.2 and Tables 10-11 (pp 10-12)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A parameter set (mass modulus, strength, permeability, GSI, defect normal and shear stiffness, defect friction) for numerical analysis of Sydney-region excavations, drawn from the Bertuzzi & Pells (2002) tables with data-provenance understood.

## Inputs

- Rock class or ground description (sandstone/shale, Class I/II through IV/V groupings)
- Defect descriptions: type (bedding, cross-bed parting, erosional plane, joint), infill thickness and nature
- Tables 10 (mass parameters) and 11 (discontinuity parameters) of the paper
- Any site-specific back-analysis or large-scale test data

## Procedure

1. Read class-grouped substance strength, substance modulus, unit weight, mass modulus, permeability (log-mean and range) and GSI from Table 10; use GSI with Hoek-Brown methods to derive stress-dependent c' and phi'.
2. For shale substance modulus, apply the moisture-dependent relationship attributed to Won (1985) given in the table notes.
3. Read defect friction angle and normal/shear stiffness by defect type and infill thickness from Table 11.
4. Where infill data exist, estimate defect normal stiffness kn from the infill modulus divided by infill thickness, and take shear stiffness ks as about 0.10 x kn at normal stresses above ~1 MPa (Bandis et al 1983) in the absence of specific data.
5. Prefer parameters back-figured from monitored excavations (deep basements, tunnel convergence, instrumented pile tests such as Glebe Island Bridge) over generic correlations; the sandstone mass modulus database is comparatively strong, the shale database weaker.

## Decision rules

- The foundation classification is a communication tool, not a design tool, for non-foundation works: tunnels, slopes and basements must be designed by applied mechanics with these parameters, not by class alone.
- Where kn/ks matter to results, run sensitivity analyses; the authors flag a paucity of data for these.

## Checks

- Adopted mass modulus consistent with field-measured benchmarks (e.g. ~800-1100 MPa for borderline Class III sandstone at Lucas Heights; ~1200 MPa Class III from the Glebe Island pile test).
- Elastic ks/kn expectation (0.33-0.5) recognised as unconservative relative to the observed ~0.1 recommendation.

## Common errors

- Treating Table 10/11 as consensus values; the authors state other practitioners may reasonably differ, especially on defect stiffness.
- Applying dry substance moduli where saturated behaviour governs.
- Using class-based parameters across dykes and faults.

## Caveats

- Table values in the OCR show alignment corruption; read parameters from the published tables.
- Design reference only: parameters must be verified against the source and reviewed by a qualified engineer before use.

## Standards cited

Hoek et al (1995) GSI / Hoek-Brown framework, Bertuzzi & Pells (2002) Geotechnical Parameters of Sydney Sandstone and Shale

## Related

- [[Weathered siltstone]]
- [[Rock strength classes]]
- [[Borehole log conventions]]
- [[Library - Pells papers on Sydney sandstone and shale]]
- [[Soil description order]]
- [[Skills]]
