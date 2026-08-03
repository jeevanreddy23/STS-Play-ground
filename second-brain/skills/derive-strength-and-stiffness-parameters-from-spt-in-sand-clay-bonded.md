---
title: Derive strength and stiffness parameters from SPT in sand, clay, bonded soils and weak rock
type: skill
tags: [skill, parameters]
confidence: high
updated: 2026-08-01
---

# Derive strength and stiffness parameters from SPT in sand, clay, bonded soils and weak rock

> **Source:** `In Situ Testing in Geomechanics The Main Tests by Fernando Schnaid (z-lib.org).pdf` (Chapter 2 SPT - Characterization and classification (pp 38-40, Table 2.6, Figure 2.12), Soil properties in granular materials (pp 40-49), Soil properties in cohesive materials (pp 49-55, Figures 2.18-2.21), Soil properties in bonded soils (pp 55-57), Soil properties in weak rock (pp 57-59, Figures 2.24-2.25), Notes 2-4 (p 75)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Parameter estimates from SPT that are qualified by material type, with the reliability limits stated - a screening tool in clay and weak rock, a workable density and friction estimator in clean sand, and a bonding indicator when paired with a seismic measurement.

## Inputs

- Energy-corrected and, in granular soils, stress-normalised blow counts
- Soil classification, plasticity index, fines content and whether the profile is residual or transported
- Small-strain shear modulus from a seismic measurement where available
- Effective vertical stress profile
- Whether cementation, aging or bonding is suspected

## Procedure

1. Classify first. The book presents a blow-count-based classification framework covering sand density bands on stress-normalised energy-corrected values, clay consistency bands on energy-corrected values, residual soil weathering bands, and weak rock strength bands. Note the residual soil bands are the author's addition and that lateritic and saprolitic profiles behave differently - lateritic profiles form under hot humid conditions with high permeability and a bonded structure and can show low penetration resistance despite the bonding, while saprolitic profiles retain the parent rock fabric and show higher resistance.
2. In granular soils, take one of two routes to friction angle: estimate relative density from normalised penetration resistance and then friction angle with density as the intermediate parameter, or estimate the effective friction angle directly from blow count. The relative density route requires the maximum and minimum void ratios, which are themselves difficult to establish, so field-based density estimation is generally preferred to laboratory determination.
3. State the friction angle convention. The book notes the value required for foundation design is usually the triaxial axisymmetric value while retaining walls, slopes and even strip footings require the plane strain value - these differ and the application must dictate which is quoted.
4. In cohesive soils, treat SPT-derived undrained strength as a rough estimate only. Penetration in clay is undrained, pore pressures are generated but not measured, and interpretation is against total stress. The published ratios of undrained strength to energy-corrected blow count differ by a large factor between authors, and the reported range of the ratio across the literature spans more than an order of magnitude. A plasticity-index-dependent correlation exists for insensitive overconsolidated clays and gives a lower bound; other correlations are markedly less conservative.
5. Recognise the disturbance limit in soft clay: at low blow counts the boring and washing disturbance means the test does not measure what the correlation assumes, and complementary testing is required.
6. For clay stiffness, use the published routes to coefficient of volume compressibility (a plasticity-index-dependent coefficient multiplied by blow count) and to undrained Young's modulus (a small multiple of energy-corrected blow count), then sanity-check the implied stiffness-to-strength ratio. The book notes that combining the conservative strength and stiffness correlations in soft clay gives a stiffness-to-strength ratio well below the range reported from measurements at both large and small strain - so the combination is doubly conservative.
7. Match the stiffness to the loading level: the reported stiffness-to-strength ratios rise sharply as the mobilised fraction of ultimate load falls, so the correlation coefficient appropriate to a heavily loaded footing is not the one appropriate to a lightly loaded one.
8. In weak rock, use SPT only as a qualitative tool plus a rough unconfined compressive strength estimate. The relationship extrapolated from clays is appropriate below a stated blow count ceiling and becomes conservative for stronger materials; the correlation is plotted on log-log axes and carries substantial scatter about the mean. Because the SPT in rock is typically terminated after a limited number of blows, the design value is an extrapolation. For stiffness in weak rock, expect an order-of-magnitude uncertainty and use seismic techniques or plate loading tests instead.
9. For bonded, aged and cemented soils, use the ratio of small-strain shear modulus to energy-corrected blow count plotted against stress-normalised blow count. Because bonding raises small-strain stiffness more than it raises penetration resistance, fresh uncemented sand occupies a defined band in that space and bonded materials plot above and outside it. The proportionality constant depends on cementation level, age, compressibility and suction and must be validated by site-specific correlation - the value of the framework is the identification of bonding, not the numerical constant.
10. In residual soils, expect published transported-soil correlations to be unreliable and combine SPT with CPT, seismic measurements and continuous coring below the soil-rock interface.

## Decision rules

- SPT-derived undrained strength is a preliminary number - do not carry it into a stability analysis without an independent measurement.
- Below a low blow count in clay, treat SPT strength data as unusable rather than conservative.
- In weak rock, an SPT-derived stiffness is not a design parameter; use seismic or plate testing.
- Where small-strain stiffness normalised by blow count plots above the uncemented sand band, published sand correlations built on fresh sands do not apply.
- State whether the quoted friction angle is triaxial or plane strain.

## Checks

- Blow count corrections applied appropriate to each correlation used
- Undrained strength cross-checked against vane, CPTu or laboratory testing
- Stiffness-to-strength ratio implied by the chosen correlations checked for plausibility
- Bonding screening performed where the deposit is residual, aged or suspected to be cemented
- Extrapolation basis stated wherever a rock design value comes from an extrapolated blow count

## Common errors

- Adopting one undrained-strength-to-blow-count multiplier across all plasticities and stress histories
- Using SPT stiffness correlations in weak rock as if they were measurements
- Applying fresh-sand correlations to bonded or aged sands
- Quoting a triaxial friction angle in a plane strain problem
- Combining conservative strength and conservative stiffness correlations and producing an unrealistically soft, weak profile

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- Correlations differ between authors by factors of two or more; the book presents the spread deliberately.
- The project's existing SPT parameter skills (CIRIA-based friction angle, Stroud weak-rock relationships) cover overlapping ground from a different source - reconcile rather than substitute.

## Standards cited

ASTM D1586, AS 1289.6.3.1, Eurocode 7 Part 2 Annexes on SPT-derived parameters

## Related

- [[Rock weathering classes]]
- [[Borehole log conventions]]
- [[Library - plate load testing]]
- [[Library - RMS and TfNSW specifications]]
- [[Soil description order]]
- [[Skills]]
