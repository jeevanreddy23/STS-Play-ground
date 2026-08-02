---
title: Run the AEMC soil resistivity test (Wenner method) to the STS SOP
type: skill
tags: [skill, field-records, field-source]
confidence: high
updated: 2026-08-02
---

# Run the AEMC soil resistivity test (Wenner method) to the STS SOP

> **Source:** [Google Drive — Field Resistivity Test/SOP - AEMC Resistivity Test.pdf](https://drive.google.com/file/d/1Se7pAZ8SfcW7Omjd5WZeUPuJaSAI3e4U/view) (Full 3-page STS SOP 'AEMC Resistivity Test - Wenner' covering equipment, terminal connections, layout, setup, measurement, storage and shutdown). Reconstructed from STS's own
> field records on Google Drive — completed forms, labelled photos and
> scans, catalogued in [[Field records catalogue]]. It shows what the
> records evidence, not necessarily the current approved procedure —
> confirm against the current STS form and procedure before treating it
> as the standard method.

**Outcome.** A set of stored apparent soil resistivity measurements at multiple electrode spacings using the AEMC Model 6471, per the STS standard operating procedure.

## Inputs

- AEMC Model 6471 ground resistance tester
- 2x 150+ m lead reels and 2x 50+ m lead reels
- Four electrodes
- Straight, unobstructed test line long enough for the largest spacing

## Procedure

1. Connect the four electrodes to the tester: terminal H (Z) to current electrode C1, S (Y) to potential electrode P1, ES (Xv) to potential electrode P2, E (X) to current electrode C2; ensure all leads are secure.
2. Install the four electrodes in a straight line at equal spacing 'a'; electrode penetration depth should be less than one twentieth of the electrode spacing where practicable.
3. Instrument setup: inspect instrument and leads, verify battery condition, connect all four leads, turn the rotary switch to ρ (Soil Resistivity) — the instrument automatically recognises the connected electrodes.
4. Select measurement method: press Hz/OPTIONS until 'W' (Wenner) appears; if 'S' (Schlumberger) shows, change to Wenner before testing.
5. Program electrode spacing: press DISTANCE, use the arrow buttons to enter the spacing, confirm; the tester uses this for automatic resistivity calculation. Typical spacings in the SOP: 1, 2, 4, 8, 15, 30, 75, 100 m.
6. Press START — the instrument injects current, measures voltage, calculates resistance and apparent resistivity (ρ). Wait until the reading stabilises; display shows resistance, soil resistivity, test frequency and electrode status.
7. Press MEM to save, storing test number, electrode spacing and soil resistivity (the 6471 stores up to 512 measurements).
8. Repeat: increase the spacing, reposition all four electrodes maintaining equal spacing, and re-run for each required spacing.
9. Press DISPLAY to cycle additional readouts if needed: resistance, resistivity, test voltage, test current, test frequency, electrode resistance.
10. On completion: turn selector to OFF, disconnect leads, remove electrodes, clean equipment, recharge the instrument if required.

## Decision rules

- 'W' on the display is the gate to proceed — never record with 'S' (Schlumberger) selected.
- Keep all four electrodes equally spaced at every spacing step; the programmed distance must match the actual layout or the auto-calculated resistivity is wrong.
- Keep electrode depth < a/20 where practicable.

## Checks

- Battery condition verified before starting
- All four leads connected and recognised by the instrument
- Reading stable before saving
- Electrode status display checked for poor contacts
- Each stored record carries test number, spacing and resistivity

## Common errors

- Testing in Schlumberger mode by not checking the W/S indicator
- Programmed spacing not updated after moving electrodes
- Electrodes driven too deep relative to close spacings
- Not waiting for the reading to stabilise before pressing MEM

## Caveats

- This one is an actual STS SOP rather than a reconstructed practice, so it can be treated as the documented method — but check for a newer revision (the copy carries no revision number)
- The SOP's step numbering is internally inconsistent ('Repeat Steps 7-9' where steps are numbered 1-8); the sequence above follows the document order
- No field record sheet for resistivity results was among the retrieved files — recording format is not evidenced

## Standards cited

None cited in the source passage.

## Related

- [[Field records catalogue]]
- [[Skills]]
