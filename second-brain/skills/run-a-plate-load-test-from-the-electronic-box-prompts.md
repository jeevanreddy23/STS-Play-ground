---
title: Run a plate load test from the electronic box prompts
type: skill
tags: [skill, testing]
confidence: high
updated: 2026-08-01
---

# Run a plate load test from the electronic box prompts

> **Source:** `PLT Training Presentation.pptx` (Display-during-measurement slide and the perform-the-test slide sequence (adjust, preload, stage loading and finish prompts), with the hydraulic pump operation slide), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** The operator can execute the two-cycle test following the device prompts, hold each stage for the right time, and finish the test so the record is actually stored, without losing the test at the last step.

## Inputs

- A set-up loading train under an adequate reaction mass, with the plate seated and the reference beam and displacement transducer positioned
- The chosen loading schedule with stage stresses and hold times
- A device configured with the correct plate diameter, lever ratio and evaluation standard, and a card with free space

## Procedure

1. Start the test from the device. Confirm the prompt showing the test will be stored to the card - if it does not appear, the record has nowhere to go.
2. At the adjust prompt, bring the displacement transducer to approximately zero using the tripod adjusting screws. The device then sets the settlement reading to zero automatically.
3. Check the displayed normal stress reads zero before loading. If it does not, exit and zero the force sensor through the menu first, then restart.
4. Apply the seating load to the schedule's preload stress and hold it for the preload period, then confirm with the OK key. The settlement reading is set to zero again at this point, so the recorded curve starts from the seated condition.
5. Apply the first stage load with the hand pump, hold it for the stage hold period, and confirm with OK. Work off the displayed stress, which is shown in the smaller pressure unit, not the schedule's larger unit - confirm the factor of a thousand between them once at the start.
6. Read the display as you go: it shows the test point number, the elapsed time since the last step, and the stress and settlement for both the previous and current stages, so the pair can be compared before committing.
7. Repeat for every remaining first-cycle stage, then the three unloading stages, then the second-cycle stages, holding and confirming each one the same way.
8. Complete the final stage of the last cycle and store it with OK before doing anything else.
9. Only then press the menu key to finish and save the test. The record is written at this point.
10. Print or review the record on the device, and confirm the moduli and the header details before breaking down the setup - re-testing while the equipment is still standing costs minutes, returning to site costs a day.

## Decision rules

- Each load change must be completed within the time the standard allows; if reaching a stage takes longer, note it, because the stage is no longer compliant.
- The preload hold and the working stage holds are different durations - use the schedule, not habit.
- The last stage of the test must be stored with OK before finishing; pressing the finish key with an unconfirmed stage loses that stage.
- Holding the on/off key terminates the test immediately with no storage - it is an abort, not a finish.
- If the plate tilts during loading, or the reference beam is disturbed, abort and re-set rather than continuing; the curve will be unusable.
- If the reaction mass lifts or shifts under load, stop - the reaction is inadequate for the target stress.

## Checks

- Confirm the displayed stress is zero before the seating load.
- Confirm the settlement reading zeroed at both the adjust prompt and after the preload.
- Confirm the elapsed-time counter reached the required hold before each confirmation.
- Confirm the stage count on the display matches the schedule as the test progresses.
- Confirm the stored record's stage table matches the schedule before leaving the test position.

## Common errors

- Pressing the finish key before storing the final stage, which drops the last point.
- Using the on/off key to end the test, which discards it entirely.
- Confirming a stage before the hold time has elapsed, which understates settlement and inflates the modulus.
- Starting with a non-zero force reading because the sensor was not zeroed.
- Confusing the display's pressure unit with the schedule's unit and loading to a thousandth or a thousand times the intended stress.
- Leaving the hydraulic coupling cap nut short of fully closed, after which oil will not pass the coupling and the cylinder cannot be depressurised at the end of the test.

## Caveats

- Reconstructed from a working calculation file - verify the method against the governing standard before reuse.
- Prompt wording and key functions are firmware-version dependent.
- Setup of the plate, counterweight, reference beam and pump is covered by the separate equipment setup procedures; this covers the test execution only.

## Standards cited

DIN 18134, ASTM D1195, ASTM D1196

## Related

- [[Library - plate load testing]]
- [[Skills]]
