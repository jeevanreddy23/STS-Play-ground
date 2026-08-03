---
title: Assemble and cross-validate a design parameter set from index tests and multiple in-situ tests
type: skill
tags: [skill, parameters]
confidence: high
updated: 2026-08-01
---

# Assemble and cross-validate a design parameter set from index tests and multiple in-situ tests

> **Source:** `In Situ Testing in Geomechanics The Main Tests by Fernando Schnaid (z-lib.org).pdf` (Chapter 7 Design parameters: guidelines - opening (pp 273-274), Clay (pp 274-282, Figure 7.1, Tables 7.1-7.4), Sand (pp 282-286), Residual soils (pp 286-287, Figure 7.11, Table 7.6), Stiffness (pp 287-289, Figure 7.12)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A parameter table for the design in which each value is bracketed by an index-based estimate and at least one in-situ measurement, with the derivation and uncertainty recorded and the material's structure explicitly accounted for.

## Inputs

- Index test results: Atterberg limits, natural water content, grading, unit weight
- In-situ test results from the programme: SPT, CPT/CPTu, vane, pressuremeter, dilatometer, seismic
- Laboratory strength, stiffness and consolidation results where available
- Geological and weathering model for the site
- The limit states and strain levels the parameters will be used at

## Procedure

1. Use index tests as the first bracket, not the answer. Atterberg limits are the most widely used index tests and are performed on reconstituted material, so they cannot represent the fabric and interparticle bonding of a natural soil. However, the compressibility and strength of reconstituted soils are a legitimate frame of reference for interpreting the corresponding properties of natural sedimentary clays.
2. In clay, get a remoulded strength estimate from the liquidity index - the water content scaled between the plastic and liquid limits - using the published relationships. These are anchored on assigned strengths at the liquid and plastic limits and are valid over a stated liquidity index range. Compare that estimate with the measured remoulded vane strength; a large divergence indicates structure, sensitivity or an index test problem.
3. Anchor the in-situ strength to the preconsolidation pressure. The normalised field strength relative to preconsolidation pressure sits in a narrow band, which gives a rapid plausibility check on any strength profile: strength, preconsolidation pressure and effective overburden stress must be mutually consistent.
4. In sand, characterise state by relative density, which can be assessed from essentially every field investigation tool, and prefer the state parameter where dilatancy or liquefaction matters, since it combines density and stress level.
5. In residual and bonded soils, abandon the index-test route. Atterberg limits on the plasticity chart indicate clay mineral composition only and do not represent mechanical behaviour, and there are at present no suitable index tests for residual soils. Characterisation must be linked to geological, pedological and engineering features. Compression index to void ratio relationships that work in sedimentary clays show considerable scatter in residual soils.
6. In residual and bonded soils, carry both friction angle and cohesion intercept, and expect the cohesion intercept to vary over a much wider range than the friction angle because it responds to suction and cementation. Published databases for particular tropical geologies show wide friction angle ranges attributable to parent rock type, mineralogy and structure.
7. For stiffness, resist a single number. Prefailure deformation depends on kinematic yielding, stress history, anisotropy, structuration and destructuration, and non-linearity with both strain and pressure; uncemented and highly cemented geomaterials span several orders of magnitude in small-strain Young's modulus. Well-cemented soils show more nearly linear behaviour at small strain and then a steeper degradation as structure breaks down. The book identifies anticipating realistic deformation properties and representing the whole range with a single model as among the most difficult tasks in geotechnical design.
8. Build the parameter table so each row carries: the parameter, the value or range, the test and interpretation method, the interpretation class, the strain level and drainage condition, and the independent cross-check.
9. Cross-validate systematically. Undrained strength from vane against CPTu against SPT against laboratory; overconsolidation ratio from dilatometer against CPTu against oedometer against normalised strength ratio; stiffness from seismic against pressuremeter loops against dilatometer constrained modulus against settlement back-analysis; consolidation coefficient from dissipation testing against oedometer, noting that laboratory and field values legitimately differ where the field mass contains drainage lenses.
10. Where two methods disagree, treat it as data. The book's stated method - and de Mello's epigraph on upper and lower bounds - is that engineers are better at bounding what will not happen than at predicting what will, so report the bracket and the reason for the divergence rather than a single reconciled number.
11. Close by stating that index-based and correlation-based values do not replace direct measurement; their role is to build local site experience early in design and to test whether the measured values are plausible.

## Decision rules

- Every design parameter carries at least one independent cross-check.
- Index tests bracket; they do not determine.
- In residual and bonded soils, do not use index tests to infer mechanical behaviour.
- Report stiffness with its strain level; a stiffness without a strain level is not a parameter.
- Where methods disagree, report the bracket - do not average toward a single defensible-looking number.

## Checks

- Strength, preconsolidation pressure and effective overburden stress mutually consistent
- Remoulded strength from liquidity index compared with measured remoulded vane strength
- Overconsolidation profile agreed across at least two independent routes
- Stiffness reported at the strain level of each design application
- Cohesion intercept explicitly considered in low-stress problems in bonded and residual soils
- Every parameter row carries its test, method, class, drainage condition and cross-check

## Common errors

- Building a design parameter set from a single test type
- Using plasticity-based correlations in residual soils
- Reporting a single stiffness across pavement, footing and excavation problems
- Averaging divergent parameter estimates and losing the uncertainty
- Omitting cohesion in cemented residual soils at low stress levels

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- Case data compiled in this chapter is drawn largely from Brazilian, Singaporean and other overseas deposits and indicates ranges only.
- Index-based correlations do not replace direct measurement; they support early-stage design and plausibility checking.

## Standards cited

Eurocode 7 Part 2 (derived values and characteristic values), AS 1726, AS 1289 index test series

## Related

- [[AS 1726 soil and rock description]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
