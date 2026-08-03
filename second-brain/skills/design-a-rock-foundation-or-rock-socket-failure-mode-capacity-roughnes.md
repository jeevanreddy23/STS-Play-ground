---
title: Design a rock foundation or rock socket - failure mode, capacity, roughness and refusal
type: skill
tags: [skill, piling-rock]
confidence: high
updated: 2026-08-01
---

# Design a rock foundation or rock socket - failure mode, capacity, roughness and refusal

> **Source:** `Handbook of Geotechnical Investigation and Design Tables_Bert Look 2014.pdf` (Chapter 22 Rock foundations, Sections 22.1-22.22 (Tables 22.1 to 22.22, Figure 22.1), pp 331-342; cross-reference Chapter 9 Sections 9.11-9.14), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A rock bearing capacity or socket capacity derived from the failure mode that actually applies given joint spacing relative to footing width, with shaft roughness accounted for, refusal criteria defined and the factor of safety matched to construction control.

## Inputs

- Intact rock strength, RQD, joint spacing, joint orientation and aperture, weathering grade
- Foundation type and size: shallow footing, driven pile, bored pile or drilled shaft
- Socket geometry, drilling method and the roughness the method will produce
- SPT refusal records and inferred N values where coring was not available
- Structure importance and the level of construction control (down-hole inspection versus drilling fluid)
- Allowable settlement and whether shaft, base or both will be relied on

## Procedure

1. Get a first approximation from RQD with Table 22.1, and accept its stated limits - Look notes the method is commonly used but is not appropriate for detailed design.
2. Where only SPT refusal data exists, use Table 22.2 with inferred N values, requiring refusal in both the seating and the test drive before an inferred value is quoted, and note the capacities improve with more detailed investigation and that non-durable rock loses capacity on exposure.
3. Identify the failure mode before selecting an equation. Table 22.3 sets out the modes as a function of joint spacing relative to footing width: uniaxial compression, general shear in a closely jointed mass, splitting under widely spaced near-vertical joints, and flexure or punching where a rigid layer overlies weaker material. Driven piles gain capacity from confinement and their small size relative to joint spacing; bored piles gain less. Where RQD approaches zero, treat the mass as soil and abandon the rock methods.
4. For the uniaxial compression mode with open near-vertical joints and joint spacing less than footing width, use Table 22.4, and cross-check with the Mohr-Coulomb form in Table 22.5, which assumes cohesion as a stated fraction of unconfined compressive strength. Look flags that this route returns unrealistically low capacities in low strength rock - if that happens, the method is outside its range, not the rock unusually weak.
5. For the closely jointed shear-zone mode, apply the general bearing capacity equation in Table 22.6 with the rock-specific shape factors and the wedge-derived bearing capacity factors in Table 22.7. For most shallow rock foundations the embedment and unit weight terms are negligible.
6. For the splitting mode with widely spaced near-vertical joints, use Table 22.8 with the joint correction factor and bearing capacity factor, entering with the ratio of joint depth to footing width and the footing length-to-width ratio, and take the discontinuity-spacing bearing capacity factor from Table 22.9, which is used with 22.8 when joints are more widely spaced than the wedge factors of Table 22.7 assume.
7. For a rigid layer over a weaker one, use Table 22.10 for flexure and punching, and separately check the stress imposed on the underlying weaker layer.
8. For driven piles into rock, use Table 22.13, which includes the passive resistance enhancement and applies a stated fraction of unconfined compressive strength as the design strength, with a different fraction above and below an RQD threshold. The capacities are substantially higher than the shallow footing methods - a difference to be understood, not averaged away.
9. For bored pile shaft capacity, use the Table 22.14 form in which shaft adhesion is proportional to the square root of the product of unconfined compressive strength and atmospheric pressure, with an adhesion factor set by material quality. Then apply roughness: classify the socket wall with the Table 22.15 roughness classes (developed for Sydney sandstones and shales) and read the corresponding side shear from Table 22.16. Look records that construction procedure changes the roughness class and therefore the capacity, and that a specific class is the basis of the widely used rough-socket design charts.
10. Consolidate with Table 22.17, which combines the above into a single design shaft resistance framework, and factor it for mixed conditions such as low quality rock within an otherwise sound socket.
11. For base resistance in rock sockets use Table 22.18, and reconcile with the load-settlement behaviour in Table 22.19 - shaft and base mobilise at very different displacements, commonly fifty to ninety percent of the load is carried by the shaft in a bored pile, and base resistance should be ignored where the borehole did not extend below the socket base or where base cleanliness cannot be verified.
12. Set the factor of safety from Tables 22.11 and 22.12 for deep foundations, which vary with structure importance (monumental, permanent, temporary), soil variability, thoroughness of investigation, number and type of tests, availability of load tests, anticipated construction inspection and probability of the design load occurring. Table 22.12 makes construction control explicit, contrasting a socket inspected down-hole with one constructed under drilling fluid with no inspection.
13. Define refusal properly. Table 22.20 gives an estimate of driven pile refusal in rock, satisfied only when all criteria are met, with the structural capacity of the pile and the driving energy governing where refusal occurs; Table 22.21 gives limiting penetration rates by pile type as a construction refusal criterion. A refusal criterion is not a driving criterion - state both and ensure adequate pile driveability analysis supports them.
14. Estimate installation productivity and cost sensitivity with Table 22.22, noting down-hole hammers give high productivity at higher cost and that the presence of water carries significant cost implications for bored piles.

## Decision rules

- Choose the failure mode from joint spacing relative to footing width first - the equation follows the mode, not the reverse.
- Do not rely on base resistance unless the socket base can be inspected and cleaned and the investigation extends below it.
- Socket roughness is a construction outcome; if the design assumes a rough socket, the specification and inspection must deliver and verify it.
- Where the calculated capacity in low strength rock looks implausibly low, the method is out of range - use a different mode or a load test.
- Non-durable rock must be assessed at its post-exposure condition; specify protection of the founding surface where exposure is unavoidable.
- Match the factor of safety to the construction control actually specified and enforceable, not the ideal case.

## Checks

- Joint spacing measured and compared with footing or socket width to justify the failure mode
- Capacity computed by at least two methods and the spread reported
- RQD basis identical between parameter selection (Chapter 9) and capacity calculation
- Shaft and base contributions checked for displacement compatibility
- Refusal criteria and driving criteria stated separately, with a driveability analysis behind them
- Socket inspection and cleanliness hold points written into the specification where base capacity is relied on

## Common errors

- Applying a single rock bearing capacity method regardless of joint spacing
- Using shallow-footing rock capacities for driven piles, or the reverse
- Assuming a rough socket when the drilling method produces a smooth or smeared wall
- Counting base resistance in a socket constructed under drilling fluid without base cleaning verification
- Treating RQD-based bearing values as detailed design values
- Confusing pile refusal criteria with driving criteria in the specification

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- Roughness classes were developed for Sydney sandstones and shales; the project's existing Pells-based rock socket skills cover that geology in more detail and should govern in the Sydney Basin.
- Look notes several of these methods return inconsistent results in low strength rock - bracket, do not average.

## Standards cited

AS 2159 Piling - design and installation, AS 5100.3 Bridge design - foundations, Pells, Rowe and Turner rock socket design literature

## Related

- [[Rock socket length]]
- [[Bored pier inspection]]
- [[AS 2159 piling]]
- [[Weathered siltstone]]
- [[Rock strength classes]]
- [[Borehole log conventions]]
- [[Skills]]
