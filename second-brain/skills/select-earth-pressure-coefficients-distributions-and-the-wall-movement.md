---
title: Select earth pressure coefficients, distributions and the wall movement needed to develop them
type: skill
tags: [skill, earthworks]
confidence: high
updated: 2026-08-01
---

# Select earth pressure coefficients, distributions and the wall movement needed to develop them

> **Source:** `Handbook of Geotechnical Investigation and Design Tables_Bert Look 2014.pdf` (Chapter 19 Earth pressures, Sections 19.1-19.16 (Tables 19.1 to 19.16, Figures 19.1 to 19.3), pp 281-292; Chapter 24 Appendix - loading (Tables 24.1 to 24.6), pp 359-361), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Lateral earth pressure inputs - at rest, active or passive coefficients, the right distribution shape, wall friction, compaction-induced and surcharge pressures - chosen consistently with the wall type and the movement the structure can tolerate.

## Inputs

- Wall type and stiffness (gravity, cantilever, embedded, propped, tied-back, reinforced soil, soil nail)
- Backfill and foundation soil parameters: friction angle, cohesion, unit weight, plasticity index, overconsolidation ratio
- Groundwater regime behind and in front of the wall
- Backfill and forward slope angles
- Surcharge: uniform, strip, plant and lifting equipment
- Compaction plant to be used behind the wall and the permissible movement of the structure

## Procedure

1. List the pressure sources for the wall using Table 19.1: earth pressure, water pressure, surcharge, dynamic loading and compaction-induced pressure. Water pressure is frequently the largest single contributor and the one most often assumed away.
2. Set the limit states to be checked from Table 19.2, and check global stability separately from the earth pressure checks - the two are different failure mechanisms and passing one does not imply the other.
3. Decide the state of stress from the movement available. Table 19.7 gives the wall movement, as a fraction of wall height, required to mobilise the active and the passive state, and the two are very different - the passive state needs far more movement. Table 19.10 lists which wall types justify at-rest versus active conditions, and Look notes some designers adopt a value between the two where movement is uncertain.
4. For the at-rest condition, take the coefficient from Table 19.4 relationships (granular and cohesive forms, plus an elastic form from Poisson's ratio), then apply the overconsolidation variation in Tables 19.5 and 19.6. Look highlights an inconsistency between the two published overconsolidation formulations at high overconsolidation ratio and strikes out the discrepant branch - use the surviving relationship and note the ambiguity. Lightly overconsolidated clay approaches an at-rest coefficient near unity and highly overconsolidated swelling clay exceeds it substantially, which is why plastic clays are unsuitable as backfill.
5. For active and passive states, take the theory from Table 19.8 (Rankine and Coulomb assumptions and relationships) and the coefficients from Tables 19.13 and 19.14, which are log-spiral based and preferable to the Coulomb or Rankine closed forms - Look recommends the log-spiral chart values over Coulomb, which can overestimate passive resistance.
6. Apply slope corrections. A backfill slope beyond roughly ten degrees increases the active coefficient markedly and decreases the passive coefficient markedly; a downward-dipping ground surface reduces the active coefficient. Read the multipliers rather than assuming a flat-ground coefficient with a nominal allowance.
7. Choose the wall friction angle with Table 19.12, subject to the stated cap as a fraction of the soil friction angle. Wall friction reduces active pressure and increases passive, so it must not be claimed unless the wall can actually mobilise it (the wall must be able to move down relative to the soil, the interface must be rough enough, and it must not be lost to future works).
8. Choose the pressure distribution with Tables 19.3 and 19.9. A triangular Rankine distribution suits a wall that rotates about its base; walls rotating about the top, translating, or braced at multiple levels develop non-triangular distributions and a triangular assumption is unconservative for the upper anchors or props. Look notes that the conventional overturning and sliding factors of safety were set partly to cover this.
9. Add compaction-induced pressure with Table 19.15 - compaction locks a passive-like horizontal stress into the upper part of the backfill that does not relax, and light plant should be specified immediately behind the wall for this reason as well as for wall movement.
10. Add construction surcharge from Table 19.16 for excavators and lifting equipment adjacent to the wall, applying the stated minimum standoff distance below which an unbounded distributed load is used. Cross-check with the Chapter 24 loading appendix for bulk solids, surcharge pressures, live load on sloping backfill and construction loads.
11. Handle passive resistance conservatively with Table 19.11: consider whether the passive block can be removed by future excavation or scour, whether the movement to mobilise it is acceptable, and whether to apply a reduction factor rather than the full theoretical value.

## Decision rules

- Never mix an active coefficient with a wall that cannot move - the at-rest condition applies to rigid and restrained walls.
- Avoid Coulomb passive coefficients where the wall friction angle exceeds a modest fraction of the soil friction angle; use log-spiral chart values.
- Do not claim wall friction on a wall that may settle less than the retained soil or on an interface that will be lined or lubricated.
- A backfill slope above roughly ten degrees is not a small correction - use the sloping-ground coefficients.
- Avoid plastic clay backfill entirely where swelling pressures could develop.
- For multi-propped or braced walls use an apparent pressure envelope, not a triangular distribution.

## Checks

- Water pressure included, with the drainage system assumed to work only as designed and a check on the blocked-drain case
- Wall movement required for the assumed state compared against the movement the structure and adjacent assets can tolerate
- Compaction-induced pressure included where the backfill is compacted with anything other than light plant
- Passive resistance checked for removability by future excavation, scour or trenching
- Global stability analysed independently of the earth pressure design
- Surcharge cases include construction plant, not only the design live load

## Common errors

- Using active pressures on a restrained or stiff wall
- Assuming a drained backfill and omitting water pressure entirely
- Applying a triangular distribution to a multi-propped excavation and under-designing the upper props
- Taking full theoretical passive resistance in front of an embedded wall that may later be trenched in front of
- Ignoring compaction-induced pressure and then finding the wall has moved during backfilling
- Adopting a flat-ground earth pressure coefficient behind a sloping backfill

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- Look explicitly flags an inconsistency between two published at-rest overconsolidation relationships - resolve it before use.
- Coefficients interpolated from published charts carry gaps at the extremes of slope and wall friction; the source charts should be consulted directly.

## Standards cited

AS 4678 Earth retaining structures, Eurocode 7 Section 9 (retaining structures), Caquot and Kerisel earth pressure charts

## Related

- [[Borehole log conventions]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
