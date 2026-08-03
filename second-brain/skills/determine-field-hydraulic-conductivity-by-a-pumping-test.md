---
title: Determine field hydraulic conductivity by a pumping test
type: skill
tags: [skill, drainage]
confidence: medium
updated: 2026-08-01
---

# Determine field hydraulic conductivity by a pumping test

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 7, §7.10 (permeability test in the field by pumping from wells), with §7.11 on in-situ methods for compacted clay liners), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A mass hydraulic conductivity (or transmissivity) for an aquifer from a steady-state pumping test, more representative of field drainage than a laboratory value.

## Inputs

- A test well with a perforated/screened casing, and at least two observation wells at known radial distances
- Whether the permeable layer is unconfined (underlain by an impervious base) or confined between impervious layers, and the aquifer thickness if confined
- A means of pumping at a constant, measured rate and disposing of the discharge away from the test area
- Water level readings in the test and observation wells over time

## Procedure

1. Establish pre-pumping (static) water levels in all wells and check for background trends.
2. Pump at a constant rate and record water levels in the observation wells until they stop falling — steady state.
3. For an unconfined layer, compute conductivity from the pumping rate, the logarithm of the ratio of the two observation-well radii, and the difference of the squares of the saturated depths at those two wells (the standard Dupuit-Thiem steady-state form).
4. For a confined aquifer with the well fully penetrating the aquifer thickness, compute conductivity from the pumping rate, the logarithm of the radius ratio, the aquifer thickness and the difference in piezometric heads at the two observation wells.
5. Repeat with different observation-well pairs and different pumping rates, and reconcile the results.
6. Report the value as a mass conductivity in the direction of the induced flow, with the test geometry.

## Decision rules

- Use observation-well data, not the drawdown in the pumping well itself, which includes well losses.
- The unconfined and confined expressions are different — confirm the boundary conditions from the borehole logs before choosing.
- Steady state must be genuine: if levels are still falling slowly, either continue pumping or switch to a transient (unsteady) analysis method.
- A pumping test integrates a large volume of ground and typically gives conductivities well above laboratory values for the same deposit — prefer it for dewatering and seepage design.

## Checks

- Check the discharge is measured, constant, and disposed of far enough away not to recharge the test area.
- Check the observation wells are screened in the same layer as the pumped interval.
- Check for boundary effects (a river, a cut-off, an impermeable boundary) within the radius of influence, which invalidate the simple radial-flow assumption.

## Common errors

- Deriving conductivity from the pumping-well drawdown alone.
- Applying the confined-aquifer expression to a partially penetrating well.
- Ignoring a nearby recharge boundary and reporting an unrealistically high conductivity.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Field permeability testing in Australia for dewatering design is normally supported by AS 2159/AS 3798-adjacent guidance and specialist hydrogeological practice; the textbook expressions cover only steady radial flow.

## Standards cited

None cited in the source passage.

## Related

- [[Groundwater observations]]
- [[Borehole log conventions]]
- [[Skills]]
