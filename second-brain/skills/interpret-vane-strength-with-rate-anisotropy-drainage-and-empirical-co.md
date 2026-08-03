---
title: Interpret vane strength with rate, anisotropy, drainage and empirical corrections
type: skill
tags: [skill, parameters]
confidence: high
updated: 2026-08-01
---

# Interpret vane strength with rate, anisotropy, drainage and empirical corrections

> **Source:** `In Situ Testing in Geomechanics The Main Tests by Fernando Schnaid (z-lib.org).pdf` (Chapter 4 Vane test - Interpretation (pp 157-162), Shear strength (pp 162-164, Figure 4.8), Rate effects (pp 164-168, Table 4.4, Figure 4.9), Partial consolidation (pp 168-169), Anisotropy (pp 169-170, Figure 4.13), Corrections (pp 170-171, Figure 4.14), Stress history (pp 171-174, Figure 4.15)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A corrected undrained strength profile suitable for embankment and excavation stability in soft clay, with the strain rate, anisotropy and partial consolidation effects understood and the empirical correction applied only where it is valid.

## Inputs

- Peak and remoulded torque records with vane geometry and aspect ratio
- Plasticity index profile
- Estimated coefficient of consolidation and vane diameter, for the drainage check
- Effective vertical stress profile
- The design problem the strength will be used in (embankment, excavation, or other)
- Expected time to failure of the field problem

## Procedure

1. Compute peak undrained strength from the maximum torque using the closed-form limit equilibrium expression for the standard aspect ratio, which assumes a cylindrical failure surface with uniform shear stress. Because that solution follows directly from the geometry, the vane strength is often treated as the reference against which penetration tests are calibrated.
2. Compute remoulded strength from the torque after full remoulding using the same expression, and report sensitivity as the ratio.
3. Expect the peak strength profile in a normally consolidated deposit to increase approximately linearly with depth, with a stiffer overconsolidated crust above it - a profile that departs strongly from that shape needs explaining before it is used.
4. Assess strain rate. The vane shears at a rate orders of magnitude faster than the loading rate of the field problem, and measured strength rises with rate following logarithmic or power law relationships whose coefficients are soil dependent. Where the field problem has a long time to failure, the rate effect is a systematic overestimate.
5. Assess partial consolidation on two timescales. During the waiting period between insertion and rotation, excess pore pressure change is small in low-permeability clay over the standard short interval, but can be significant in silty soils. During shear itself, a more severe partial drainage effect can occur in intermediate-permeability materials. Use the non-dimensional shear rate framework - peripheral velocity times vane diameter divided by the coefficient of consolidation - against a degree-of-drainage curve to judge whether the test was genuinely undrained, the same framework used for cone data.
6. Assess anisotropy. Soft clay deposits show anisotropy of undrained strength from both depositional fabric and subsequent straining. Where vanes of different aspect ratio have been run, separate the vertical and horizontal plane contributions. Otherwise use the published relationship between the horizontal-to-vertical strength ratio and plasticity index: the ratio is well above unity in low plasticity normally consolidated clays and falls as plasticity increases.
7. Apply the empirical correction knowingly. The measured strength is affected by disturbance, strain rate, anisotropy and partial consolidation, and these partly offset each other; the conventional correction is a reduction factor read against plasticity index. Several revisions of the original correlation exist - one re-examining the original case records with three-dimensional finite element end effects, one accounting for overconsolidation, and one accounting explicitly for the actual time to failure. Choose the version whose basis matches the problem and state it.
8. Restrict the correction to its validated domain. The book is explicit: because these factors are empirically determined from a specific database, they can only be applied with relative confidence to stability analysis of embankments and excavations in soft clay, and there is little justification for applying the correction to other geotechnical structures that do not share that database.
9. Derive stress history from the vane where useful: the normalised field vane strength, compared against the normally consolidated strength ratio, gives an overconsolidation ratio profile through the standard power-law relationship whose exponent is a laboratory-measured critical state parameter. A large multi-site compilation supports a log-log relationship between laboratory-measured overconsolidation ratio and normalised field vane strength. Preconsolidation pressure remains the single most important quantity in clay design, controlling both long-term settlement and short-term stability.
10. Report the profile with both the raw measured strength and the corrected strength, the correction version, and the design application it is valid for.

## Decision rules

- Do not apply the plasticity-index correction outside embankment and excavation stability in soft clay.
- Report measured and corrected strengths separately - a single corrected line hides the basis.
- Where the non-dimensional shear rate indicates partial drainage, the undrained interpretation is invalid regardless of the correction.
- Use the correction version whose basis matches the problem - time-to-failure-based where the field loading rate is known.
- Anisotropy is not removed by the empirical correction if the correction was calibrated on a database with different anisotropy - state the assumption.

## Checks

- Strength profile shape checked against the expected normally consolidated pattern with crust
- Drainage condition checked through the non-dimensional shear rate
- Correction factor version documented
- Sensitivity computed and checked against the deposit's known character
- Overconsolidation profile from vane compared against oedometer preconsolidation pressures

## Common errors

- Applying the plasticity-index correction to a foundation or retaining wall problem
- Using vane strength in silt without checking for partial drainage
- Reporting only the corrected strength with no raw data
- Treating the vane strength as isotropic in a problem where the failure surface is predominantly horizontal or vertical
- Using a normally consolidated strength ratio default rather than a site-measured critical state exponent

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- The empirical correction is validated only for embankment and excavation stability in soft clay.
- Rate effect parameters are soil specific; published values should be treated as indicative.

## Standards cited

ASTM D2573, AS 1289.6.2.1, Eurocode 7 Part 2 (field vane derived values)

## Related

- [[Borehole log conventions]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
