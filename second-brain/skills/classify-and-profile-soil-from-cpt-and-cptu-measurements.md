---
title: Classify and profile soil from CPT and CPTu measurements
type: skill
tags: [skill, testing]
confidence: high
updated: 2026-08-01
---

# Classify and profile soil from CPT and CPTu measurements

> **Source:** `In Situ Testing in Geomechanics The Main Tests by Fernando Schnaid (z-lib.org).pdf` (Chapter 3 CPTU - Test results (pp 91, Figure 3.12), Soil classification (pp 91-94, Figure 3.13), Interpretation methods (pp 94)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A stratigraphic interpretation and soil behaviour type profile from cone data, with thin layers and drained lenses identified, and the classification correctly understood as behaviour type rather than grain size.

## Inputs

- Corrected tip resistance, sleeve friction and pore pressure profiles with depth
- Equilibrium pore pressure profile from groundwater data
- Total and effective overburden stress profiles
- Filter position and cone geometry
- Any adjacent borehole logs or samples for calibration of the interpretation

## Procedure

1. Compute and plot the derived quantities alongside the raw channels: friction ratio as sleeve friction over tip resistance expressed as a percentage, and the pore pressure parameter as excess pore pressure divided by net tip resistance (corrected tip resistance less total overburden stress).
2. Read the profile against the three physical principles the classification charts encode: tip resistance is relatively high in sand and falls as fines increase; sleeve friction behaves inversely, being relatively low in sand and rising with fines; pore pressures are low in sand because of high permeability and rise as fines increase.
3. Use normalised charts in preference to unnormalised ones. The book endorses expressing classification charts in normalised parameters to remove overburden stress effects - an unnormalised chart drifts systematically with depth.
4. Cross-check between chart families rather than trusting one. The commonly used charts differ in their axes - tip resistance against normalised friction ratio, normalised tip resistance against normalised friction ratio, and charts making explicit use of pore pressure. Where the charts disagree, that is information about the material, particularly in intermediate soils.
5. Interpret the output as soil behaviour type. Schnaid states plainly that CPT classification charts do not provide accurate predictions of soil type based on grain size distribution but do provide a guide to soil behaviour type. A material can classify as behaving like a clay while grading as a silt, and that behaviour is often what the design needs.
6. Use the pore pressure channel to detect thin drained layers. In a soft clay profile, a thin sand lens shows as a localised increase in tip resistance together with a sharp reduction in pore pressure toward the hydrostatic value - which no borehole spacing would reliably find and which controls consolidation drainage paths.
7. Read the whole-profile signature: thick soft clay shows low corrected tip resistance with very high measured pore pressure, so that measured pore pressure approaches tip resistance and the pore pressure parameter approaches unity.
8. Calibrate the interpretation against at least one sampled borehole on the site, and against the classification framework of the intended design method.
9. Where the profile straddles the intermediate permeability range, do not force it into a sand or clay classification - flag it for the partial drainage assessment.
10. Record the equilibrium pore pressure basis used, since the pore pressure parameter and every dissipation interpretation depend on it.

## Decision rules

- Classification from CPT is behaviour type, not grain size - never issue a particle size description from a cone chart.
- Use normalised charts; correct for overburden before classifying.
- Disagreement between charts is a signal, not noise - investigate rather than average.
- A pore pressure record that never departs from hydrostatic in a nominally clayey profile indicates a saturation failure, not a free-draining clay.
- Detection of thin drained layers requires the pore pressure channel; a CPT without pore pressure will miss them.

## Checks

- Equilibrium pore pressure line plotted against the measured pore pressure profile
- Classification cross-checked between at least two chart families
- At least one adjacent sampled borehole used to calibrate the interpretation
- Thin layers flagged for their effect on drainage path length in consolidation analysis
- Intermediate-permeability zones identified and excluded from simple drained or undrained interpretation

## Common errors

- Reporting grain size descriptions from a behaviour type chart
- Classifying on unnormalised charts and getting a spurious depth trend
- Overlooking thin sand lenses because only tip resistance was plotted
- Using an assumed hydrostatic pore pressure line where the site has an underdrained or artesian profile
- Forcing silty profiles into a clay or sand classification

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- Classification charts are calibrated predominantly on sedimentary deposits and mislead in residual, bonded and cemented soils.
- Chart boundaries are behaviour based and have been revised since publication.

## Standards cited

ISO 22476-1, ASTM D5778, Eurocode 7 Part 3

## Related

- [[Borehole log conventions]]
- [[Soil description order]]
- [[Skills]]
