---
title: Calculate uplift pressure under a hydraulic structure from a flow net
type: skill
tags: [skill, drainage]
confidence: medium
updated: 2026-08-01
---

# Calculate uplift pressure under a hydraulic structure from a flow net

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 8, §8.8 (uplift pressure under hydraulic structures), based on the flow net constructed per §§8.4–8.5), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** The distribution of uplift pressure on the base of a dam, weir or apron, and the resultant uplift force used in the structure's stability check.

## Inputs

- A completed flow net for the structure and foundation
- Total head difference across the structure and the number of potential drops in the net
- Base geometry of the structure and the elevation of each point on the base
- Unit weight of water

## Procedure

1. Count the number of potential drops between the upstream boundary and each point of interest along the base of the structure.
2. Compute the total head at each point as the upstream head less the number of drops passed times the head lost per drop.
3. Subtract the elevation head at that point to obtain the pressure head, then multiply by the unit weight of water to obtain the uplift pressure.
4. Plot the uplift pressure distribution along the base and integrate (or use the trapezoidal areas) to obtain the total uplift force per unit length and its line of action.
5. Feed the uplift force and its eccentricity into the sliding, overturning and bearing checks for the structure.
6. Repeat for the design range of upstream and downstream water levels, including any drawdown or flood case.

## Decision rules

- Uplift is a full-area pressure on the base for saturated foundation soils — do not apply an area reduction factor unless a specific standard permits it.
- A cut-off wall, filter or relief-well system changes the head distribution; recompute the flow net rather than adjusting the pressure diagram by hand.
- The most onerous case is not always maximum upstream head; check the combination of high upstream head with low downstream (tailwater) level.

## Checks

- Check the head at the upstream and downstream ends of the base against the boundary conditions.
- Check the resultant uplift against a simple hydrostatic bound; uplift should lie between the downstream and upstream hydrostatic values.
- Check the effect of uplift on the structure's factor of safety before signing off the flow net as adequate.

## Common errors

- Using pressure head where total head is required (or vice versa) at points where the base is not level.
- Ignoring uplift on the portion of base beneath a cut-off.
- Taking uplift from a flow net drawn for a different water-level combination than the load case being checked.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use

## Standards cited

None cited in the source passage.

## Related

- [[Skills]]
- [[Skills]]
