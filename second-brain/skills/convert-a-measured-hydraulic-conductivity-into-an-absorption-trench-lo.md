---
title: Convert a measured hydraulic conductivity into an absorption trench loading rate
type: skill
tags: [skill, general]
confidence: medium
updated: 2026-08-01
---

# Convert a measured hydraulic conductivity into an absorption trench loading rate

> **Source:** `Permeability/Calculations.pdf` (Handwritten recalculation sheet, Step 5 (absorption rate conversion) and the seconds-to-days conversion note), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** The engineer can carry a borehole permeability result through the unit conversions needed for on-site effluent absorption trench sizing, and knows which parts of that step are conversion and which require a standard-based design decision.

## Inputs

- Hydraulic conductivity k from an in-situ falling-head or constant-head test, in m/s
- Soil category / texture description for the absorption horizon
- The governing on-site wastewater standard or local authority guidance
- Design daily hydraulic load and trench geometry (for the subsequent sizing step)

## Procedure

1. Convert k from m/s to m/day by multiplying by 86400 (seconds per day).
2. Express the same figure as a volumetric flux per unit area by multiplying m/day by 1000, giving litres per square metre per day; divide by 86400 again if a per-second rate is wanted.
3. Keep the measured conductivity and the design loading rate as separate numbers in the report. The measured k is a soil property; the design loading rate applied to the trench base area is a standard-derived value that includes a large factor for long-term clogging (biomat), variability and reserve capacity.
4. Select the design loading rate from the governing standard's soil-category table, using the measured k and the soil texture to place the soil in the correct category rather than using the measured k directly as a loading rate.
5. Size the trench length and base area from the design daily flow divided by the design loading rate, then check the result against the standard's minimum dimensions, setbacks and reserve-area requirements.
6. State clearly in the report that the trench sizing was based on a design loading rate for the assessed soil category, supported by the measured conductivity.

## Decision rules

- Never adopt the measured conductivity as the design loading rate - the long-term acceptance rate of a trench base is typically one to two orders of magnitude below the clean-soil conductivity.
- Where the measured conductivity and the soil texture point to different categories, adopt the more conservative category and say why.
- Where conductivity is very low (heavy clay) or very high (clean sand or fissured rock), a conventional absorption trench may be unsuitable altogether and an alternative land application system should be considered.
- Check for a shallow water table, rock, or a slowly permeable horizon within the required separation distance beneath the trench base; either of these can rule out the system regardless of the measured k.

## Checks

- Re-derive the conversion: 1 m/day equals 1000 L/m2/day; a value in m/s multiplied by 86400 and then by 1000 must reproduce the L/m2/day figure.
- Confirm the conductivity used came from the horizon the trench base will actually sit in, not from a shallower or deeper layer.
- Confirm the number of significant figures reported is honest - in-situ permeability is rarely better than order-of-magnitude.

## Common errors

- Dropping or double-applying the 86400 factor, giving a result out by five orders of magnitude.
- Reporting L/m2/s when the standard's tables are in L/m2/day.
- Using a single borehole result for a whole site without checking soil variability.
- Sizing the trench directly from k without applying the standard's design loading rate table.

## Caveats

- Reconstructed from a working calculation file - verify the method against the governing standard before reuse.
- The source sheet only performs the unit conversion; the selection of a design loading rate and the trench sizing rules must come from AS/NZS 1547 and the relevant local authority requirements.
- Absorption trench design also depends on slope, setbacks, reserve area and effluent quality, none of which the conductivity calculation touches.

## Standards cited

AS/NZS 1547

## Related

- [[Groundwater observations]]
- [[Borehole log conventions]]
- [[Skills]]
