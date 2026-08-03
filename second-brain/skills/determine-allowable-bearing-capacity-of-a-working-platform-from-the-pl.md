---
title: Determine allowable bearing capacity of a working platform from the plate load test curve
type: skill
tags: [skill, testing]
confidence: medium
updated: 2026-08-01
---

# Determine allowable bearing capacity of a working platform from the plate load test curve

> **Source:** `PLT Training Presentation.pptx` (Allowable bearing capacity slide with its second-loading curve figure and speaker notes, the zone-of-influence and operating-range slides, and the working-platform application slide), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** The engineer can use the second-cycle load-settlement curve to certify that a platform or founding surface carries a target allowable bearing pressure, and can say what the test does and does not prove.

## Inputs

- The second loading cycle load-settlement curve from a plate load test taken to a maximum stress above the target pressure
- The target allowable bearing pressure to be demonstrated
- Plate diameter used and the depth at which the test was carried out
- The dimensions of the actual loaded area (outrigger pad, mat, footing) the result will be applied to

## Procedure

1. Plot or read the second loading cycle curve of settlement against applied stress. Use the second cycle, not the first, because the first cycle includes bedding and initial plastic take-up.
2. Identify the range over which the curve is essentially a straight line - the elastic range. The stress at which the curve departs from that straight line and starts to bend is the allowable bearing capacity for the tested condition.
3. Confirm the target pressure sits inside the linear range. If it does, the platform can be certified as exhibiting at least that allowable bearing pressure.
4. Read the settlement at the target pressure off the same curve; this is the plate-scale settlement expected under that pressure.
5. Beyond the allowable pressure the curve enters contained plastic flow, and it becomes near-vertical at the ultimate bearing capacity. Only report an ultimate value if the test actually reached it.
6. Convert the result to the real loaded area with care: the plate loads a shallow zone of influence roughly proportional to its diameter, while a large pad or mat stresses a much deeper volume. Check what lies below the plate's zone of influence before extending the result to a larger footprint.
7. Test at the level at which the footing or mat will actually bear, since foundations are usually embedded and the material at that level may differ from the surface.
8. For crane and plant platforms, use the measured curve to size the outrigger spreader plates or mats and to state the ground movement expected under full load.

## Decision rules

- Identifying the departure from linearity requires judgement; state the criterion used and, where the transition is gradual, adopt the conservative (lower) stress.
- A result from a 300 mm plate represents a shallow zone only; where a weaker layer lies below that zone, the plate result overstates the capacity available to a larger foundation.
- Where the second-cycle curve is still linear at the maximum stress applied, the allowable capacity is at least that stress but is not determined - report it as such rather than extrapolating.
- Use a plate size appropriate to the ground and target pressure: larger plates for weaker ground and lower target stresses, the smallest plate where a high pressure must be reached.
- This is a bearing-capacity demonstration at the test location and test date. Moisture change, disturbance and trafficking after the test can invalidate it.

## Checks

- Confirm the test reached a maximum stress comfortably above the target pressure - the target must be inside the tested range, not extrapolated.
- Confirm the curve read is the second loading cycle.
- Confirm the test level matches the design founding or platform level.
- Confirm the settlement at the target pressure is acceptable for the intended plant or structure, not just the pressure itself.
- Cross-check against the Ev2 and Ev2/Ev1 results from the same test - a low ratio and a high Ev2 support the capacity claim; a poor ratio suggests the layer was not well compacted.

## Common errors

- Reading the allowable capacity off the first loading cycle.
- Extrapolating the curve beyond the maximum stress actually applied.
- Applying a small-plate result to a large mat or raft without considering the deeper zone of influence.
- Testing at the surface when the foundation will be embedded.
- Reporting an ultimate bearing capacity from a test that never reached failure.
- Ignoring settlement and certifying purely on pressure.

## Caveats

- Reconstructed from a working calculation file - verify the method against the governing standard before reuse.
- The source is equipment training material, not a design standard; the interpretation of the elastic-range limit as an allowable bearing capacity is presented there as requiring engineering judgement.
- No factor of safety is stated in the source - confirm what factor the specification expects between the tested pressure and the design pressure.
- The result applies to the tested location, level, plate size and moisture condition only.

## Standards cited

DIN 18134, ASTM D1195, ASTM D1196, BRE 470

## Related

- [[Library - plate load testing]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
