---
title: Set up the plate load test evaluation workbook and select the national evaluation sheet
type: skill
tags: [skill, testing]
confidence: medium
updated: 2026-08-01
---

# Set up the plate load test evaluation workbook and select the national evaluation sheet

> **Source:** `AX01 Sample Results with GPS.xlsm` (Sheet 'Statistik stat' (metadata block and required Ev2 / Ev2-Ev1 limit cells), per-record sheets 'AX01 (n)' (header, stage table, results and rating block, hidden fit-parameter block), and the parallel national evaluation sheets), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** The engineer can drive the transferred-data workbook correctly: enter project metadata once, set the acceptance limits that the per-record pass/fail ratings key off, and pick the evaluation sheet matching the standard the test is reported against.

## Inputs

- Transferred test records in the supplied macro-enabled workbook
- The standard the results are to be reported against
- Project metadata: testing organisation, test depth, layer, weather and temperature, operator, remarks
- The specified acceptance limits: the required minimum Ev2 and the maximum permitted Ev2/Ev1

## Procedure

1. Enter the project metadata once on the statistics sheet. Each per-record sheet pulls those fields through by formula, so re-typing them per record is unnecessary and invites inconsistency.
2. Enter the required minimum Ev2 and the maximum permitted Ev2/Ev1 on the statistics sheet. These two cells feed the nominal column and the OK / failed rating on every record sheet, and they feed the quality-number acceptance test at the bottom of the statistics sheet.
3. Choose the evaluation sheet that matches the reporting standard. The workbook carries a default sheet for the German static plate load standard plus parallel sheets for the Italian, Swiss, Austrian, Slovenian, Swedish, French and Hungarian national methods, each computing that country's own moduli and reporting fields.
4. Where the national sheet needs an extra parameter - a Poisson's ratio for the French method, a bedding modulus output for the Austrian method, the sequence of deformation moduli for the Italian method - populate it before reading results off that sheet.
5. Read results from one sheet family only. Do not mix a modulus from one national sheet with an acceptance limit written for another.
6. For each record sheet, check the header block first: record number, card number, start and end time, device number, plate diameter, lever ratio, and the maximum plate tilt if the device captured it.
7. Check the stage table on the record sheet reproduces the intended loading schedule (first loading, unloading, second loading, and third loading where run) before accepting the fitted moduli.
8. Read the results block: maximum first-cycle stress, Ev1, Ev2 and their ratio with the OK / failed ratings, the third-cycle modulus where a third cycle was run, and the subgrade reaction modulus where the curve reaches the reference settlement.
9. Treat the generated sheets as static output - the moduli come from the device firmware and the stored polynomial fit parameters, and editing the tabulated stress or settlement cells will not recompute them.

## Decision rules

- The rating logic is one-sided in each direction: Ev2 must reach or exceed its nominal value, the Ev2/Ev1 ratio must not exceed its nominal value. Both must pass for the record to conform.
- Set the acceptance limits from the project specification, not from the workbook's example defaults or the alternative limit sets stored in the hidden parameter block.
- The subgrade reaction modulus is only calculated where the load-settlement curve actually reaches the reference settlement; a blank is a genuine 'not determinable', not an error.
- A third-cycle modulus only appears where a third loading cycle was actually run.
- Use the national evaluation sheet that corresponds to the specification being reported against; do not convert between national moduli informally.

## Checks

- Confirm the plate diameter and lever ratio in the record header match the equipment actually used - these drive the modulus calculation.
- Confirm the acceptance limits shown in the nominal column on the record sheets are the specified values, and that they propagated from the statistics sheet.
- Confirm the record and card numbers on each sheet are unique and match the field record.
- Confirm the number of stages in the table matches the schedule the test was run to.
- Confirm the same record's results agree between the on-site printout and the transferred sheet.

## Common errors

- Leaving the workbook's example acceptance limits in place, so every record is rated against the wrong target.
- Typing metadata onto individual record sheets and overwriting the formulas that pull it from the statistics sheet.
- Reporting a modulus from a national evaluation sheet against a limit written for a different standard.
- Editing values in a generated sheet and assuming the moduli and graphs update.
- Reading a blank subgrade reaction cell as a fault rather than as a curve that never reached the reference settlement.
- Opening the file as a template rather than as a document, which blocks the data-transfer functions.

## Caveats

- Reconstructed from a working calculation file - verify the method against the governing standard before reuse.
- The workbook is macro-enabled and built around a legacy Excel version; menu paths and macro-security steps differ in current Excel.
- The national evaluation sheets are supplied by the equipment maker; verify each against the relevant national standard before reporting against it.
- The statistical acceptance test at the foot of the statistics sheet belongs to a German road-earthworks framework and does not automatically transfer to Australian specifications.

## Standards cited

DIN 18134, TP BF-StB Teil E1, ONORM B 4417, NF P94-117, CNR BU 146

## Related

- [[Library - plate load testing]]
- [[Skills]]
