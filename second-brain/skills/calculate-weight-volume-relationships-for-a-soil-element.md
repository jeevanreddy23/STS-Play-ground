---
title: Calculate weight-volume relationships for a soil element
type: skill
tags: [skill, parameters]
confidence: medium
updated: 2026-08-01
---

# Calculate weight-volume relationships for a soil element

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 3, §§3.2–3.5), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A consistent set of phase properties (void ratio, porosity, moisture content, degree of saturation, and moist / dry / saturated / submerged unit weight) for a soil, derived from whatever subset was measured.

## Inputs

- Any two or three measured quantities from: total (moist) mass or unit weight, dry mass or unit weight, moisture content, void ratio or porosity, degree of saturation
- Specific gravity of solids Gs (measured, or assumed with the assumption recorded)
- Unit weight / density of water at the relevant temperature

## Procedure

1. Draw the three-phase block diagram (solids, water, air) and enter the quantities you actually measured.
2. Set the volume of solids to unity (or the mass of solids to unity) so that the remaining phases can be written in terms of e, w, Gs and S.
3. Use the fundamental identity linking degree of saturation, void ratio, moisture content and specific gravity (Se = w.Gs) to move between moisture content and saturation.
4. Express moist unit weight as Gs.gamma_w.(1+w)/(1+e) and dry unit weight as Gs.gamma_w/(1+e); obtain saturated unit weight by setting S = 1 and submerged (effective) unit weight by subtracting the unit weight of water.
5. Convert between void ratio and porosity with n = e/(1+e).
6. Back-calculate any remaining unknown and check it against an independent route through the diagram.

## Decision rules

- If moisture content and dry unit weight are known, void ratio follows directly from Gs — do not also assume a saturation value.
- Use submerged unit weight for soil below the water table in effective stress calculations, not saturated unit weight minus a separately applied buoyancy.
- Where Gs is assumed rather than measured, carry the assumption through and state its sensitivity; Gs for most inorganic soils sits in a narrow band, but organic soils and iron-rich soils fall outside it.

## Checks

- Check that the computed degree of saturation lies between 0 and 100% — a value above 100% means an arithmetic or Gs error.
- Check that dry unit weight is less than moist unit weight, and that saturated exceeds moist for a partly saturated soil.
- Check units: unit weight (kN/m3) versus density (kg/m3) are routinely mixed.

## Common errors

- Using moist unit weight where dry unit weight is required in compaction or void ratio calculations.
- Assuming full saturation for a soil above the water table.
- Mixing measured mass in grams with volumes in m3 without conversion.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Specific gravity values for particular minerals are tabulated in the source — measure Gs where it materially affects the result.

## Standards cited

AS 1289.3.5.1, AS 1289.2.1.1

## Related

- [[Groundwater observations]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
