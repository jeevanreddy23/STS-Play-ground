---
title: Determine strut loads in a braced excavation from an apparent earth pressure diagram
type: skill
tags: [skill, earthworks]
confidence: medium
updated: 2026-08-01
---

# Determine strut loads in a braced excavation from an apparent earth pressure diagram

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 14, §§14.8–14.11 (braced cuts, active thrust on bracing systems in granular and cohesive soil, pressure variation for design of sheetings, struts and wales)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Design loads for struts, wales and sheeting in a braced cut, based on an apparent pressure envelope rather than a theoretical active distribution.

## Inputs

- Excavation depth, strut levels and horizontal strut spacing
- Soil type and parameters behind the cut: friction angle and unit weight for sand, undrained shear strength and unit weight for clay
- Groundwater level and any dewatering
- Surcharge from plant, spoil and adjacent structures

## Procedure

1. Understand why the theoretical active distribution does not apply: a braced excavation is supported progressively from the top down, so the wall deforms differently from a retaining wall and struts can fail one at a time — the design pressure envelope is an empirical upper bound on measured strut loads, not a real pressure distribution.
2. Select the appropriate apparent pressure envelope for the ground: a rectangular envelope for sand; for soft to medium clay an envelope whose magnitude depends on the stability number (the ratio of the overburden at excavation level to the undrained strength); for stiff clay a rectangular envelope with a magnitude expressed as a fraction of the total overburden. The source gives these envelopes and the stability number threshold that separates the two clay cases.
3. Draw the chosen envelope over the excavation depth.
4. Compute strut loads by treating the vertical sheeting as simply supported between strut levels, hinged at every strut except the top and bottom levels, and taking reactions from the envelope loading.
5. Multiply the load per metre run by the horizontal strut spacing to obtain the strut force, and add a margin for prestress, temperature effects and eccentricity.
6. Design the wales for the same reactions, and check the sheeting for bending between strut levels.
7. Separately check base stability (heave in soft clay, piping in sand) and the wall's embedment below formation.

## Decision rules

- Use the apparent pressure envelope for strut and wale design; it is not a valid pressure distribution for computing wall bending moments by elastic analysis or for movement prediction — use a soil-structure interaction analysis for those.
- Where the stability number for soft clay exceeds the threshold in the source, the base is approaching heave failure; base stability, not strut load, governs the design.
- Add water pressure separately where the excavation is not dewatered.
- Where nearby structures are sensitive to ground movement, the envelope method is insufficient on its own — predict and monitor movement.

## Checks

- Check the envelope selected matches the actual ground, and re-check if the ground varies over the excavation depth.
- Check every strut level, including the topmost and bottommost, where the hinge assumption changes the reaction.
- Check base heave and hydraulic stability before finalising the support design.

## Common errors

- Using a triangular active pressure distribution for strut design.
- Omitting the surcharge from adjacent spoil heaps, plant and traffic.
- Treating the empirical envelope as a real pressure distribution and using it to compute wall deflections.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- The apparent pressure envelopes, the stability number threshold and the coefficient tables for braced cuts are in the source — read the values there.
- Excavation support adjacent to roads and rail in Australia is governed by authority-specific requirements that override this method.

## Standards cited

AS 4678, AS 5100.3

## Related

- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
