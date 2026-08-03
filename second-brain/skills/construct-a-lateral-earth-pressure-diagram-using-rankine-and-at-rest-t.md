---
title: Construct a lateral earth pressure diagram using Rankine and at-rest theory
type: skill
tags: [skill, earthworks]
confidence: medium
updated: 2026-08-01
---

# Construct a lateral earth pressure diagram using Rankine and at-rest theory

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 13, §§13.2–13.9 (at-rest, active and passive pressures; Rankine active and passive theory; partially submerged backfill; yielding of walls of limited height; sloping backfill; pressure distribution diagrams)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A pressure distribution and resultant thrust (with its point of application) on a retaining wall for at-rest, active or passive conditions, including water, surcharge and layered backfill effects.

## Inputs

- Wall height, backfill geometry (level or sloping) and wall friction assumption
- Effective strength parameters for each backfill layer and their unit weights
- Groundwater level behind the wall and any drainage provision
- Surcharge loading on the backfill surface
- Expected wall movement and restraint condition

## Procedure

1. Decide the state to design for: at-rest where the wall cannot yield (basement walls, propped walls, integral abutments), active where the wall can move away from the backfill, passive where it is pushed into the soil.
2. For the at-rest state, compute the coefficient of earth pressure at rest from the friction angle (and for overconsolidated soil, the overconsolidation ratio) using the relationships in the source, and multiply it by the vertical effective stress at each depth.
3. For the active and passive states, compute the Rankine coefficients from the friction angle (using the sloping-backfill form where the surface is inclined) and apply them to the vertical effective stress.
4. For a soil with effective cohesion, include the cohesion terms: active pressure is reduced by a term proportional to cohesion and passive pressure increased by one; compute the theoretical depth of tension where active pressure is negative.
5. Build the diagram layer by layer: at a change of soil properties the pressure steps because the coefficient changes while the vertical effective stress is continuous.
6. Add hydrostatic water pressure separately below the water table, using submerged unit weights for the soil term.
7. Add the surcharge contribution as the surcharge intensity times the earth pressure coefficient, acting over the full height.
8. Integrate the pressure diagram to obtain the total thrust per metre and take moments to locate the resultant.

## Decision rules

- Do not credit the tension zone with negative pressure: assume a tension crack forms to that depth and, if water can enter it, add full hydrostatic pressure in the crack — the most onerous case.
- Full active pressure only develops after a wall movement of the order of a fraction of a percent of wall height; full passive pressure needs an order of magnitude more. If the structure cannot tolerate that movement, design for at-rest, or for a reduced mobilised passive pressure.
- Rankine theory assumes a smooth (frictionless) vertical wall; where wall friction is significant use Coulomb or a curved-surface method instead, which reduces active thrust and greatly increases passive resistance.
- Never assume the backfill will stay drained — if the drainage system can block, check the wall with full water pressure.
- Apply a mobilisation factor to passive resistance rather than using the full theoretical value.

## Checks

- Check the water pressure has been added separately and not double-counted through a saturated unit weight.
- Check the resultant thrust position: for a simple triangular distribution it acts at one third of the height from the base; surcharge and water shift it upward.
- Check the derived coefficients against the friction angles used and against the assumed backfill slope.

## Common errors

- Applying the at-rest coefficient to total rather than effective vertical stress.
- Ignoring the tension crack and taking credit for negative active pressures.
- Using peak friction angles for the backfill where constant-volume values are required by the governing specification.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Required wall movements to mobilise active and passive states, and at-rest coefficient expressions, are tabulated in the source.
- Australian retaining wall design follows AS 4678 and, for bridges, AS 5100; those govern load factors and required margins.

## Standards cited

AS 4678, AS 5100.3

## Related

- [[Groundwater observations]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
