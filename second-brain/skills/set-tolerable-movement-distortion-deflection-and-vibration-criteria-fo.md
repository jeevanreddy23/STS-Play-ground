---
title: Set tolerable movement, distortion, deflection and vibration criteria for a design
type: skill
tags: [skill, general]
confidence: high
updated: 2026-08-01
---

# Set tolerable movement, distortion, deflection and vibration criteria for a design

> **Source:** `Handbook of Geotechnical Investigation and Design Tables_Bert Look 2014.pdf` (Chapter 23 Movements, Sections 23.1-23.32 (Tables 23.1 to 23.32, Figures 23.1 and 23.2), pp 343-358), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Explicit serviceability limits - total settlement, differential settlement, angular distortion, wall and slope displacement, rutting, deflection and vibration - stated up front, so the deformation check has a criterion to be compared against.

## Inputs

- Structure type and its sensitivity (framed, load-bearing wall, bridge, pavement, buried service)
- Movement components expected: immediate, consolidation, creep, self-weight of fill, seismic
- Fill depth and material where self-weight settlement applies
- Support system for excavations and the distance to adjacent structures
- Road classification and design traffic where rutting and deflection govern
- Nearby structures and occupants for vibration limits

## Procedure

1. Separate the movement components with Tables 23.1 and 23.2 - immediate (elastic), consolidation, creep or secondary compression, compaction-induced and self-weight - because the criteria and the timing differ for each. Look notes that in working stress design large factors of safety usually keep movements small, but that limit state design requires movements to be checked explicitly.
2. Estimate the split between immediate and total settlement with Table 23.3, which varies with overconsolidation and layer thickness, and correct the one-dimensional oedometer settlement to a three-dimensional consolidation settlement with the coefficient in Table 23.4.
3. Add self-weight settlement of placed fill using Table 23.5 as a proportion of fill depth by material type, over the stated period. This occurs even in well compacted fill, and additional compactive effort reduces but does not remove it. Refuse and organic fills behave differently because the mechanism is not purely mechanical.
4. Set the structural limits from Table 23.6 (typical limiting settlements by structure type, including separate limits for embankments by length-to-height ratio and for rail and road formations) and Table 23.7 (limiting angular distortion). Look's point is that angular distortion usually governs damage regardless of the magnitude of total settlement, and that movement at the base of an embankment is not the same as movement at the surface.
5. Where damage assessment is required, use Table 23.8 to combine angular distortion with horizontal strain - damage is a function of both, so a distortion-only check under-predicts damage where horizontal strain is present, as it is beside excavations and above tunnels.
6. For retained and reinforced structures use Table 23.9 for soil nail wall displacements (with the relationship between top-of-wall horizontal and vertical displacement and the wall length-to-height ratio, and larger movements in high plasticity clays), Table 23.10 for tolerable strains in reinforced slopes and embankments (where the allowable long-term reinforcement tension is the secant modulus multiplied by the tolerable strain), and Table 23.15 for tolerable displacement of slopes and walls.
7. For excavations use Table 23.16 for observed settlements behind excavations and Table 23.17 for settlements adjacent to open cuts by support system type - these set the expectation that a stiffer support system buys less movement, and provide the basis for a monitoring trigger regime.
8. For bridges use Table 23.12 for acceptable movement and Table 23.13 for acceptable angular distortion, and Table 23.14 to separate serviceability from ultimate pile design criteria.
9. For seismic conditions use Table 23.18 for tolerable displacement in a seismic slope stability analysis and Table 23.19 for seismic performance criteria - once the pseudo-static factor of safety approaches unity, the assessment is displacement based.
10. For pavements set rutting limits with Table 23.21 by allowable rut depth and Table 23.22 by road function, and deflection limits with Table 23.27 (tolerable deflection for roads), Table 23.28 (tolerable deflection related to CBR) and Table 23.29 (tolerable deflection for proof rolling). Add allowable strains from Table 23.25 for roadways and Table 23.26 for mine haul roads.
11. For reactive ground and light structures use Table 23.23 for free surface movement limits for light buildings and Table 23.24 for road pavements - these link back to the suction and active zone tables in Chapter 7.
12. Set vibration criteria with Tables 23.30 to 23.32: peak particle velocity limits, expected vibration from typical construction operations, and human perception levels. Note that human perception limits are usually reached well before structural damage limits, so complaints management is a separate criterion.
13. Set up monitoring against these criteria. Table 23.11 gives guidance on movements measured in inclinometers, and Table 23.20 covers rock displacement. Define trigger levels as a fraction of the tolerable value, not at the tolerable value.

## Decision rules

- State the movement criterion before the analysis, not after - otherwise the computed movement becomes the criterion.
- Angular distortion usually governs damage; a total settlement check alone is insufficient.
- Where horizontal strain is present, assess damage on the combined distortion and strain relationship.
- Self-weight settlement of fill is additional to foundation settlement and must be included for structures founded on or beside deep fill.
- Human comfort vibration limits are lower than structural damage limits - set both and manage them separately.
- Monitoring triggers must sit below the tolerable limit with enough margin to act.

## Checks

- Total, differential and angular distortion limits all stated for the structure
- Immediate, consolidation, creep and self-weight components all accounted for
- Horizontal strain considered beside excavations and above tunnels
- Monitoring instrument type and precision adequate for the trigger levels chosen
- Pavement deflection and rutting criteria matched to the road classification
- Vibration limits set for both damage and human response, with the more onerous controlling

## Common errors

- Checking total settlement only and missing a distortion problem
- Omitting self-weight settlement of fill beneath a structure
- Applying a structural damage vibration limit and receiving complaints from occupants well below it
- Setting monitoring triggers at the tolerable limit, leaving no time to respond
- Using an embankment base movement as if it were the surface movement
- Treating seismic slope stability as a factor of safety problem when displacement governs

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- Vibration tables here are indicative; the project's existing vibration assessment skills and the applicable standard govern.
- Settlement-behind-excavation data is empirical and site specific - use it to set expectations and triggers, not as a prediction.

## Standards cited

AS 2870 Residential slabs and footings (free surface movement), AS 5100 Bridge design (serviceability limits), AS 2187.2 and DIN 4150 (vibration criteria), Austroads Guide to Pavement Technology (deflection and rutting)

## Related

- [[AS 2870 residential site classification]]
- [[Skills]]
