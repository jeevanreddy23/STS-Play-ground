---
title: Design a granular working platform for tracked plant using the punching-shear method
type: skill
tags: [skill, working-platforms, ocr-source]
confidence: medium
updated: 2026-08-01
---

# Design a granular working platform for tracked plant using the punching-shear method

> **Source:** `Working Platforms for tracked plant.pdf` (Appendix A (A1 general approach, A2 cohesive subgrade, A3 granular subgrade), Figure A6 flowchart; Sections 3.1, 3.5, 3.6), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A minimum working-platform thickness (with or without geosynthetic reinforcement) that safely supports piling rigs and cranes on a weak subgrade, following the BRE BR 470 routine design calculation.

## Inputs

- Characteristic subgrade strength: undrained shear strength cu for cohesive subgrade, or angle of shearing resistance phi' and effective unit weight for granular subgrade
- Platform material properties: characteristic phi' and bulk unit weight
- Plant loading data from the rig contractor: Case 1 and Case 2 track pressures per EN 791 / EN 996, with track width W and effective track lengths L1, L2
- Groundwater level (critical for granular subgrades)
- Geosynthetic reinforcement tensile strength data if reinforcement is proposed

## Procedure

1. Characterise ground conditions and assign characteristic (cautiously estimated) strength values for the subgrade and platform material; partial factors on ground properties are taken as unity so design values equal characteristic values (Appendix A2(a)).
2. Characterise the two loading conditions: Case 1 (operator cannot aid recovery — standing, travelling, crane handling) and Case 2 (operator can release load or reduce power — drilling, auger/casing extraction, travel with fixed mast). Convert triangular/trapezoidal track pressure distributions to equivalent uniform loads by the Meyerhof approach (Appendix A1.2).
3. Apply the load factors from Table A3 to obtain design loads; factors differ between Case 1 and Case 2 and between platform-required and no-platform situations.
4. Check whether the subgrade alone provides adequate bearing resistance using standard bearing capacity formulae with the shape factors given in Appendix A1.1; if adequate, only a running surface is needed to protect the subgrade.
5. Check the upper-bound bearing resistance of the platform material alone; if design loads exceed it, a stronger platform material is required.
6. If a platform is required, calculate the minimum thickness D from the punching-shear expression: bearing resistance = subgrade bearing capacity term plus a punching term involving (unit weight, D, W, punching shear coefficient Kp.tan-delta and its shape factor). Use the thicker of the Case 1 and Case 2 results (Appendix A2/A3).
7. If geosynthetic reinforcement is used at the platform base, add its contribution (computed from the design tensile strength, factored down from ultimate — minimum factor per Appendix A1.1 — divided over track width) and recompute a reduced thickness; enforce the minimum cover to reinforcement and check pullout capacity (Figure A6).
8. Apply the minimum platform thickness rule (lesser of half the track width for light plant, or the stated absolute minimum — see Appendix A1.4) and, for reinforced designs, check the unreinforced platform of the same thickness still carries the reduced check loads in the flowchart.
9. Final evaluation: compare Case 1 vs Case 2 governing thickness, sanity-check against local experience, and use a more sophisticated analysis if outside the method's applicability.

## Decision rules

- Do not use the routine method for very soft cohesive subgrades below the lower cu applicability bound (~20 kPa, Appendix A2) — special measures and sophisticated analysis needed; above the upper bound (~80 kPa) the subgrade often needs no platform, only a running surface.
- The punching-shear model is invalid where the platform is not significantly stronger than the subgrade, or where thickness-to-track-width ratio D/W exceeds the stated limit (Appendix A1.4).
- Routine calculations apply to level sites only; subgrade slopes steeper than about 1 in 10 require design outside this guide, and some rigs are unstable even at that gradient.
- For mixed subgrade materials, design for the worse of cohesive and granular behaviour (Section 3.2).
- Thicken the platform at the base of access ramps (typically ~50% extra design thickness, Section 3.1) and keep plant at least half a machine width from platform edges.

## Checks

- Verify the punching applicability checks in the Figure A6 flowchart were all passed, not just the thickness equation.
- Confirm plant loading was derived per EN 791/EN 996 for the worst rig orientation and jib position, including dynamic and wind loading where relevant.
- Confirm groundwater near surface was included for granular subgrades — it strongly reduces bearing resistance (Appendix A3).
- Have a competent geotechnical person critically appraise the result — the method is semi-empirical with major simplifications.

## Common errors

- Applying only part of the methodology in isolation (e.g. borrowing the punching equation but not the load factors) — the guide explicitly forbids this.
- Using average rather than cautious characteristic strengths for near-surface cohesive soil whose strength varies seasonally with water content.
- Taking ultimate geosynthetic tensile strength without reduction — ultimate capacity occurs at strains far beyond serviceability.
- Assuming a generally adequate thickness protects against localised soft spots — most rig overturns come from local weaknesses, not global under-design.

## Caveats

- The source text is OCR of a scanned document and several equations/tables are garbled — verify every formula, factor and table value against the original BR 470 before use.
- Design values and factors quoted here are pointers only; do not design from this summary.
- BR 470 has been superseded in UK practice by later TWf/FPS working platform guidance for some applications — check currency.

## Standards cited

BRE BR 470 (2004), EN 791:1996 Drill rigs — safety, EN 996:1996 Piling equipment — safety requirements, BS EN 1997-1 (Eurocode 7)

## Related

- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
