---
title: Estimate weak rock strength and stiffness from SPT N60 with explicit reliability limits
type: skill
tags: [skill, parameters]
confidence: high
updated: 2026-08-01
---

# Estimate weak rock strength and stiffness from SPT N60 with explicit reliability limits

> **Source:** `8 Determination of Geotechnical Parameters.pdf` (CIRIA Report 143, Section 8.3 (pp 89-91) and Figure 43 (Stroud 1989 correlation)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Order-of-magnitude undrained strength, unconfined compressive strength and stiffness values for weak rocks from extrapolated SPT resistance, bounded by the documented scatter and material-type limitations.

## Inputs

- SPT N values in weak rock, typically terminated at 50-100 blows and extrapolated to blows/300mm
- Energy-corrected N60
- Rock material type (correlations differ; chalk has its own section)
- Intended application (driven pile end bearing, shaft/end resistance in weak rock, settlement)

## Procedure

1. Extrapolate terminated tests to an equivalent N60 in blows/300mm, noting this is inherently approximate.
2. Estimate undrained strength from the clay-type relation cu of about 5 x N60 (kPa), which stays approximately valid in weak rock but turns conservative above a UCS of roughly 4 MPa.
3. Take unconfined compressive strength as at least about 10 x N60 (kPa) on the same basis (sigma_c = 2cu).
4. Estimate drained stiffness from E'/N60 in the range 0.5 to 2.0 MPa (Stroud 1989, wide range of weak rocks excluding chalk); with a bearing-capacity factor of safety above 3, E'/N60 likely exceeds 1.
5. Use the open-shoe tool for consistency with the original correlations; the solid cone can read higher.
6. Cross-check against pressuremeter, plate, dilatometer or geophysical stiffness data, remembering each method samples different strain levels and volumes.

## Decision rules

- Expect at least ~20% scatter about the mean even below N60 of 200 blows/300mm, and worse at higher strengths; treat outputs as estimates, not measurements.
- The correlations are proven mainly on Mercia/Keuper mudstones, Bunter Sandstone and Millstone Grit; reliability in other deposits is unknown.
- Geophysical (small-strain) moduli will exceed SPT-derived values by large, strength-dependent factors; do not mix bases.

## Checks

- Extrapolation method for refusal tests documented.
- Material type comparable to the calibration deposits before relying on the coefficients.

## Common errors

- Applying weak-rock coefficients to chalk (Section 8.4 gives different behaviour).
- Using cone-derived N with open-shoe correlations.
- Quoting SPT-derived UCS to false precision.

## Caveats

- Not a substitute for coring and UCS testing where rock strength governs design.
- Design reference only: coefficients must be verified against the source and reviewed by a qualified engineer before use.

## Standards cited

Stroud (1974, 1989); Cole & Stroud (1976); Leach & Thompson (1979)

## Related

- [[Rock strength classes]]
- [[Skills]]
