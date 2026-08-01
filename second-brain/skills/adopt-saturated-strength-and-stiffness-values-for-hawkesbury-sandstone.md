---
title: Adopt saturated strength and stiffness values for Hawkesbury Sandstone design
type: skill
tags: [skill, parameters]
confidence: high
updated: 2026-08-01
---

# Adopt saturated strength and stiffness values for Hawkesbury Sandstone design

> **Source:** `substanceAndMassPropertiesForTheDesignOfEngineeringStructuresInTheHawkesburySandstone.pdf` (Pells, Australian Geomechanics Vol 39 No 3, Sept 2004; Sections 2.2.1-2.2.2, Tables 1-3 and Figures 1-2 (pp 2-5)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Substance UCS and modulus inputs selected on a saturated basis, avoiding the systematic overestimate that dry-tested Hawkesbury Sandstone produces.

## Inputs

- Laboratory UCS and modulus results with moisture condition recorded
- Sample provenance (facies, weathering, position relative to water table)
- The paper's wet/dry comparison datasets (Tables 1-3)

## Procedure

1. Check the moisture state of every strength/stiffness result; Hawkesbury Sandstone saturated strength is typically only about 0.3 to 0.7 of dry strength (Table 1), and saturated moduli are similarly reduced (Table 3).
2. Use saturated values for design of foundations and underground works below or near the water table; a degree of saturation above about 90% is enough to reach the fully saturated minimum strength.
3. Where only dry results exist, either retest saturated or apply a documented site-specific wet/dry ratio - never assume parity.
4. Select modulus at a stress range relevant to the application: low-stress secant moduli (0-6 MPa) differ from tangent moduli at 50% strength because the material stiffens with stress (Figures 2a/2b).
5. Adopt Poisson's ratio in the well-established 0.10-0.25 band (mean about 0.2) unless dilatancy near failure is relevant.

## Decision rules

- Resaturating dried specimens generally restores the saturated strength (for material from below the water table), so retesting is a valid recovery route.
- Clayey sandstones show the strongest wet/dry sensitivity; treat low wet/dry ratios as a durability warning as well.

## Checks

- Reported UCS statistics separated by wet/dry condition before averaging.
- Modulus basis (secant vs tangent, stress range) stated with every value.

## Common errors

- Mixing dry and saturated results in one design population.
- Using tangent modulus at 50% strength for low-stress foundation settlement problems.
- Ignoring that partial saturation above ~90% already gives minimum strength.

## Caveats

- Ratios are Hawkesbury-Sandstone-specific and scattered between sites; use site data where possible.
- Design reference only: values must be verified against the source tables and reviewed by a qualified engineer before use.

## Standards cited

ISRM suggested methods for UCS and deformability testing

## Related

- [[Rock strength classes]]
- [[Groundwater observations]]
- [[Skills]]
