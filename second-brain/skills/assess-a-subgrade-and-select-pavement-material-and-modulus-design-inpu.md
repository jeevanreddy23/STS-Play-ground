---
title: Assess a subgrade and select pavement material and modulus design inputs from CBR
type: skill
tags: [skill, pavements]
confidence: high
updated: 2026-08-01
---

# Assess a subgrade and select pavement material and modulus design inputs from CBR

> **Source:** `Handbook of Geotechnical Investigation and Design Tables_Bert Look 2014.pdf` (Chapter 13 Subgrades and pavements, Sections 13.1-13.35 (Tables 13.1 to 13.35), pp 179-198; cross-reference Table 7.6 (weighted plasticity index) and Table 17.19), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A design subgrade CBR corrected to the equilibrium moisture condition, a volume-change assessment, and pavement layer moduli that are internally consistent with the subgrade support - rather than laboratory CBR values used raw.

## Inputs

- Laboratory CBR results with the full report: soaked or unsoaked, soak period, compaction standard and achieved ratio, moisture ratio, surcharge, swell, percentage retained on the large sieve and whether it was excluded
- Soil classification, plasticity index and percentage passing the 425 micron sieve
- Site annual rainfall and climate zone
- Depth of subgrade influenced by the design load
- Proposed pavement layer types and thicknesses
- Weighted mean annual pavement temperature for asphalt

## Procedure

1. Define the subgrade depth for the load being carried using Table 13.1 - the depth of material acting as subgrade varies with load application, and the test locations should be laid out to reflect that depth rather than a fixed value.
2. Read the CBR report critically. Table 13.2 lists the assumptions built into the laboratory CBR model and Figure 13.1 contrasts them with field conditions; Table 13.3 lists the parameters that must be extracted from the report. Look lists the recurring misuse patterns explicitly: specifying one compaction standard in construction while designing on another, treating maximum dry density and optimum moisture content as the target condition, ignoring notes about the oversize fraction, using CBR when swell governs, applying the laboratory value without allowing for underlying support, and omitting the relevant surcharge.
3. Round and report CBR to the resolution in Table 13.4, and treat low CBR values as poorly reproducible.
4. Decide soaked versus unsoaked from the site water regime with Table 13.5. The four-day soaked test models a flood condition, not the everyday state; longer soak periods apply to low permeability soils.
5. Classify subgrade strength on soaked CBR with Table 13.6, and note the trigger below which a capping layer (working platform) is needed, and the practical ceiling above which increasing the design subgrade CBR is not accepted regardless of test results.
6. Correct to the equilibrium condition. Establish equilibrium moisture from Table 13.10 using annual rainfall and the weighted plasticity index band, then either read the CBR at that moisture or apply the correction factor to soaked CBR from Table 13.11. Look's summary is that low weighted plasticity index material equilibrates dry of or near optimum, medium near optimum, and high weighted plasticity index material is climate sensitive. For high rainfall environments a correction is not needed if the longer soak period was used.
7. Run the volume change check separately from the strength check. Use the weighted plasticity index (Table 7.6) with Table 13.8 to classify volume change potential for embankments, Table 13.7 for the damage mechanisms, and Table 13.9 to select an improved or capping subgrade thickness to suppress movement. Look notes the non-reactive threshold in weighted plasticity index terms and that remoulded clay fills move more in early years than in-situ material.
8. Where the subgrade cannot be improved by capping, stabilise. Select the additive from Table 13.15 by soil type, then size the dose: cement with Table 13.16 and its effects with Table 13.17, lime with Table 13.18 and the rules of thumb in Table 13.19, bitumen with Table 13.20. Run a lime demand test before designing a lime dose. Distinguish modification (a construction expedient) from stabilisation (the design intent) and note the shrinkage concern above the stated cement content.
9. For pavement materials, set strength requirements by road type from Table 13.21, CBR by layer and depth from Table 13.22, swell limits from Table 13.23, plasticity limits for non-standard materials from Table 13.24, and typical CBR by material from Table 13.25 (modified compaction basis - do not apply to subgrade). Check the grading against the mechanically stable envelope in Table 13.14.
10. Convert to moduli for a mechanistic design. Use Table 13.30 for the subgrade CBR to resilient modulus relationship, Table 13.31 for base course, Tables 13.26 and 13.27 for typical and existing pavement layer moduli including the cracked case, and Tables 13.28 and 13.29 for the maximum sub-base modulus permitted given the base standard. Note the anisotropy convention - unbound granular material is treated as anisotropic while asphalt and cemented material are not.
11. For asphalt, select modulus from the weighted mean annual pavement temperature zone with Table 13.33, use the standard Poisson's ratio, and note the linearity limit in microstrain beyond which the linear elastic assumption breaks down. Take other layer Poisson's ratios from Table 13.34.
12. Where a thin granular layer sits on a weak subgrade, allow for aggregate loss into the subgrade with Table 13.32, and consider a separation geotextile (Chapter 16).

## Decision rules

- Never use a laboratory CBR directly as the design subgrade CBR - correct for moisture condition, support and oversize.
- Strength and volume change are separate acceptance criteria; a subgrade can pass CBR and fail on reactivity.
- Cap design subgrade CBR at the practical ceiling in Table 13.6 regardless of test results.
- A base course CBR is only achievable in the field with adequate underlying support - the base-to-subgrade CBR ratio is bounded (Table 13.31 and Table 17.19).
- Do not apply modified compaction CBR values to subgrade assessment.
- Apply the cracked modulus for cemented and asphalt layers over highly reactive subgrades.

## Checks

- Compaction standard and moisture ratio in the CBR report matched to the construction specification
- Percentage retained on the large sieve noted and its treatment (included or excluded) accounted for
- Equilibrium moisture correction applied and the climate basis stated
- Weighted plasticity index computed and volume change class assigned
- Subgrade and base moduli consistent with the layer modulus ratio limits in Tables 13.28 to 13.31
- Swell result checked against the pavement swell limits, not only the strength limits

## Common errors

- Designing on a soaked CBR in a dry climate, or on an unsoaked CBR in a flood-prone alignment
- Adopting maximum dry density and optimum moisture content as a target field condition
- Missing that a high CBR came from a sample with a large oversize fraction included
- Using CBR-derived subgrade modulus outside the applicable range of the correlation
- Ignoring swell where the strength criterion is satisfied
- Assigning a base course modulus that the subgrade support cannot sustain

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- Equilibrium moisture content relationships were established for Queensland conditions.
- Modulus relationships derive from earlier Austroads editions; check the current Guide before use in design.

## Standards cited

Austroads Guide to Pavement Technology Parts 2 and 4, AS 1289.6.1.1 California Bearing Ratio, TfNSW R73 / R44 and RMS test methods T117 and T132

## Related

- [[Library - RMS and TfNSW specifications]]
- [[Soil description order]]
- [[Skills]]
