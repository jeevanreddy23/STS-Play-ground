---
title: Choose between the six-stage and seven-stage plate load test loading schedules
type: skill
tags: [skill, testing]
confidence: high
updated: 2026-08-01
---

# Choose between the six-stage and seven-stage plate load test loading schedules

> **Source:** `AX01a recommended Loading Stages 6.xlsx and AX01a recommended Loading Stages 7.xlsx` (Sheets 'Loading Cycles' and 'Max Bearing Capacity' (six-stage file) and sheet 'Tabelle1' (seven-stage file), including the footnotes on stage definition, non-standard 200 kN devices and reaction load), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** The engineer can pick the right recommended loading schedule for the plate and jack in use, understand what the seven-stage variant buys, and build intermediate stage loads correctly from the plate factor.

## Inputs

- Plate diameter to be used (300, 600 or 762 mm)
- Jack capacity (100 kN standard, or a non-standard 200 kN device)
- Target maximum normal stress for the test
- Whether the deliverable is a compaction check, a bearing-capacity assessment, or a subgrade-reaction value

## Procedure

1. Confirm the plate and jack combination can reach the target stress, using the maximum-bearing-capacity table generated from the plate factor: capacity equals jack capacity divided by the plate factor (kN per MN/m2).
2. Choose the number of loading stages. The six-stage schedule is the default and satisfies the minimum in the standard. The seven-stage schedule adds one more increment in the upper part of the first cycle, giving finer curve definition near the maximum stress.
3. Read the schedule for the chosen plate and jack from the corresponding column. Each column gives the normal stress per stage and the derived jack load, plus the hold time per stage.
4. For the six-stage schedule, the first cycle runs a seating load followed by six increments to the maximum stress, then unloads in three steps to half, a quarter and about two per cent of maximum, then reloads through five increments stopping at the penultimate first-cycle stage.
5. For the seven-stage schedule, the first cycle runs a seating load followed by seven increments to the same maximum stress - the extra resolution is obtained by splitting the top of the range, so the upper increments are smaller than the lower ones - then unloads in the same three steps and reloads through six increments stopping at the penultimate stage.
6. Derive the jack load for any stage by multiplying the target normal stress by the plate factor for that plate diameter; derive the stress for any load by dividing. The factor is the plate area expressed in kN per MN/m2.
7. For the larger plates, generate the stage stresses from the 300 mm column by the plate-area ratio rather than typing them in, which is how the source sheets build the 600 mm and 762 mm columns.
8. Size the reaction load to exceed the maximum test load by at least the margin the standard requires, and prefer an unsprung reaction mass.

## Decision rules

- Use the seven-stage schedule where the shape of the curve near maximum stress matters - proving an allowable bearing pressure, identifying the departure from the elastic range, or where the maximum stress is close to the expected capacity of the ground.
- Use the six-stage schedule for routine compaction control, where Ev1, Ev2 and the ratio are the only deliverables and extra stages only add time.
- The standard fixes no stage list. It requires a minimum number of approximately equal increments to the required maximum stress, each load change completed within a minute, unloading in three steps, and a second cycle stopped at the penultimate first-cycle stage. Any schedule meeting those rules is compliant - the tabulated schedules are recommendations.
- The seven-stage schedule's upper increments are deliberately unequal (finer near the top), so check it still satisfies the 'approximately equal increments' wording of the governing standard for your application.
- Devices with 200 kN capacity fall outside the standard; their columns are recommendations only. Note that the six-stage sheet includes a 300 mm / 200 kN column while the seven-stage sheet does not, so a 300 mm plate on a 200 kN jack has no seven-stage schedule tabulated.
- Larger plates suit weaker ground and lower target stresses; the 300 mm plate is needed to reach high pressures.

## Checks

- Confirm the maximum stage stress does not exceed the plate-and-jack maximum bearing capacity from the table.
- Confirm each tabulated jack load equals the stage stress multiplied by the plate factor.
- Confirm the unloading steps sit at approximately half, a quarter and two per cent of the maximum load.
- Confirm the second cycle stops at the penultimate first-cycle stage and does not reach the maximum.
- Confirm the hold time for the seating load and for each subsequent stage matches the schedule.

## Common errors

- Mixing stages from the six-stage and seven-stage schedules within one test, which produces a load path that matches neither.
- Taking the second cycle to full maximum load.
- Assuming a seven-stage column exists for every plate and jack combination.
- Reading a stage load from the wrong plate column - the loads differ by a factor of four between the 300 mm and 600 mm plates for the same stress.
- Selecting a maximum stress the jack and plate cannot deliver, and discovering it mid-test.

## Caveats

- Reconstructed from a working calculation file - verify the method against the governing standard before reuse.
- Both sheets state explicitly that the standard prescribes no fixed stage list and that the tabulated stages are recommendations.
- The 200 kN columns are outside the scope of the standard.
- A companion skill already covers plate selection, the plate factors and reaction-mass sizing in detail; this one covers only the choice between the two schedules.

## Standards cited

DIN 18134, ASTM D1195, ASTM D1196

## Related

- [[Library - plate load testing]]
- [[Skills]]
