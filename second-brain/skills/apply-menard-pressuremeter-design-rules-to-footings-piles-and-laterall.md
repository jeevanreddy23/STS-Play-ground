---
title: Apply Menard pressuremeter design rules to footings, piles and laterally loaded piles
type: skill
tags: [skill, piling-rock]
confidence: medium
updated: 2026-08-01
---

# Apply Menard pressuremeter design rules to footings, piles and laterally loaded piles

> **Source:** `In Situ Testing in Geomechanics The Main Tests by Fernando Schnaid (z-lib.org).pdf` (Chapter 5 - Design rules (pp 227-228), Bearing capacity of shallow foundations (pp 228-231, Figure 5.40), Settlement of a shallow foundation (pp 231-233, Tables 5.3-5.4, Figure 5.41), Bearing capacity of vertically loaded piles (pp 233-238, Table 5.5, Figure 5.42), Settlement of single piles (pp 238, Figure 5.44), Horizontally loaded piles (pp 238-241, Figures 5.45-5.46)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Bearing capacity, settlement, pile capacity and lateral response predicted directly from Menard pressuremeter parameters through the established design rules, with the standard test procedure respected and the equivalent net limit pressure formed correctly.

## Inputs

- Menard limit pressure and tangent modulus profiles, obtained by the standard Menard procedure
- Total horizontal stress estimate at each test depth
- Footing width, shape, embedment and load inclination, or pile type, cross section and embedment
- Adjacent slope or excavation geometry where present
- Soil type by layer for the rheological and shape factors

## Procedure

1. Confirm the parameters were obtained by the standard procedure. The Menard design rules link two specific quantities - the Menard limit pressure and the Menard modulus - to full-scale structure behaviour, and those quantities are functions of the probe, the installation, the test procedure and the interpretation. A non-standard test cannot be used with these rules.
2. Form the limit pressure correctly. It is defined as the pressure at which the initial cavity volume has doubled. Because that expansion is often not reached, mathematical extrapolation with a hyperbolic model is normally required; where several extrapolation methods are used, take the mean as representative and record the spread.
3. Use the modulus-to-limit-pressure ratio as a soil identification check. In cohesive soils the ratio bands distinguish remoulded, underconsolidated, normally consolidated, slightly overconsolidated and highly overconsolidated clay, with a mid-range value indicating normally consolidated clay; in cohesionless soils the ratio falls in a narrower band. A ratio far outside these bands signals a test or material problem before any design is done.
4. For shallow foundation bearing capacity, form the equivalent net limit pressure within the zone of influence by taking the geometric mean of the net limit pressures from the tests lying within a stated multiple of the footing width around foundation level, and compute an equivalent embedment depth by integrating the net limit pressure profile above founding level. Then apply a bearing capacity factor - which depends on soil type, footing shape and the ratio of equivalent embedment to width - to the equivalent net limit pressure, adding the total vertical stress at foundation level.
5. Reduce the bearing capacity factor for inclined loading and for proximity to a slope or excavation, using the published reduction charts for inclined load on horizontal ground, vertical load near a slope with and without embedment, and inclined load near a slope.
6. For shallow foundation settlement, use the Menard settlement expression that splits the response into a deviatoric term governed by one modulus and an isotropic term governed by another, with a reference width, shape coefficients depending on the length-to-width ratio, and a rheological factor depending on soil type and the modulus-to-limit-pressure ratio. The result is a long-term settlement of a rigid footing, valid where the embedment exceeds the width.
7. For axially loaded pile base capacity, apply the same structure: a bearing capacity factor times the equivalent net limit pressure plus the total vertical stress, where the equivalent net limit pressure is now integrated over a window spanning a defined distance above and a defined distance below the pile base, with those distances set from the pile equivalent diameter (derived from cross-sectional area and perimeter) and from the embedment into the bearing layer. Bearing capacity factors are tabulated separately for displacement and non-displacement piles and are reduced where the equivalent embedment depth is less than a stated multiple of the pile diameter.
8. For pile settlement, use the load transfer approach with the published elastic-plastic transfer models derived from pressuremeter parameters, discretising the soil into layers.
9. For laterally loaded piles, exploit the geometric analogy - a pressuremeter is essentially a model of a laterally loaded pile in both shape and load direction. Derive a load-transfer curve relating soil reaction to pile deflection, using a reaction modulus from the pressuremeter and a bilinear elastic-plastic form in which the second branch has half the stiffness of the first. Reduce the ultimate resistance near the ground surface to a stated fraction of the limit pressure to allow for the reduced confinement there.
10. Treat these rules as what they are: empirical correlations supported by theory, forming the basis of a national foundation code and consistent with Eurocode 7. Where the ground or structure lies outside the calibration database, corroborate with a parameter-based analysis.

## Decision rules

- Only use Menard design rules with parameters obtained by the standard Menard test procedure.
- Form the equivalent net limit pressure by the prescribed averaging over the prescribed window - substituting an arithmetic average changes the answer.
- Distinguish displacement from non-displacement piles when selecting the bearing capacity factor.
- Apply the slope and load inclination reductions where either exists - they are not second-order.
- Check the modulus-to-limit-pressure ratio for consistency with the described soil before proceeding.

## Checks

- Number and spacing of pressuremeter tests sufficient to populate the influence zone around footing or pile base level
- Extrapolation method for limit pressure documented where full expansion was not reached
- Modulus-to-limit-pressure ratio consistent with the logged soil type
- Equivalent embedment depth computed rather than taken as the physical depth
- Direct-rule prediction compared against a parameter-based capacity and settlement calculation

## Common errors

- Using pressuremeter parameters from a non-Menard probe with the Menard rules
- Taking a simple arithmetic average of limit pressures instead of the prescribed equivalent value
- Using the physical embedment rather than the equivalent embedment depth
- Ignoring the reduction near slopes and excavations
- Applying the full limit pressure as ultimate lateral resistance near the ground surface

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- The design rules are calibrated on a French full-scale database and a specific test procedure; applicability to Australian ground and practice must be checked.
- Limit pressures obtained by extrapolation carry an uncertainty that propagates directly into capacity.

## Standards cited

Eurocode 7, French foundation code (Fascicule 62 Titre V), ASTM D4719, AS 2159 Piling

## Related

- [[Bored pier inspection]]
- [[AS 2159 piling]]
- [[Skills]]
