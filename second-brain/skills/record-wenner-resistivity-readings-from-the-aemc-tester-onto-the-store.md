---
title: Record Wenner resistivity readings from the AEMC tester onto the stored-measurements datasheet
type: skill
tags: [skill, field-records, field-source]
confidence: medium
updated: 2026-08-02
---

# Record Wenner resistivity readings from the AEMC tester onto the stored-measurements datasheet

> **Source:** [Google Drive — Field Resistivity Test/Datasheet - blank - FRM-StoredMeasurements.pdf and Layout - Wenner.pptx](https://drive.google.com/file/d/1lJBBzVVjTwowr9KA4ZNKpb3KONAbRUT5/view) (Blank AEMC (Chauvin Arnoux) stored-measurements table (Date/Test #/Operator/Test Site/Results/Comments, Rev01 08/20) plus a one-slide Wenner four-terminal layout diagram with 100 m spacings). Reconstructed from STS's own
> field records on Google Drive — completed forms, labelled photos and
> scans, catalogued in [[Field records catalogue]]. It shows what the
> records evidence, not necessarily the current approved procedure —
> confirm against the current STS form and procedure before treating it
> as the standard method.

**Outcome.** A paper backup of every stored soil-resistivity measurement, tied to test number, operator and site, matching the tester's internal memory.

## Inputs

- AEMC FRM-StoredMeasurements blank datasheet (Rev01 - 08/20, 3 pages of table)
- Wenner electrode layout diagram (four terminals E(X), ES(Xv), S(Y), H(Z) set out at equal spacings along the traverse, e.g. 100 m a-spacings across a 300 m line with 50/150 m position markers)
- AEMC ground resistance tester with stored test numbers
- The already-documented AEMC Wenner resistivity SOP for the test procedure itself

## Procedure

1. Set out the four-electrode Wenner array per the layout diagram: electrodes in a straight line at equal spacing a, connected to the tester terminals in order E(X), ES(Xv), S(Y), H(Z); keep the geometry consistent when the array is walked along or the spacing changed.
2. Run the measurement per the SOP and let the instrument store the result under its test number.
3. Immediately transcribe each stored reading to the datasheet: date, test # (the instrument's stored-measurement number), operator, test site (traverse/station and spacing), results (reading with units) and comments (conditions, electrode contact issues, re-tests).
4. Use the comments column to flag any reading taken with degraded contact or nearby buried metal so the office interpretation can weight it.
5. Reconcile the sheet against the instrument memory before leaving site - every stored test number should appear once.

## Decision rules

- The instrument memory is not the record - the datasheet is the auditable record; transcribe on site, not back at the office.
- One row per stored measurement, including repeats - do not overwrite a bad reading, add the retest as a new row with a comment.
- Record the a-spacing with each result (in Test Site or Comments) since resistivity interpretation depends on it.

## Checks

- Row count equals stored-measurement count on the tester.
- Units stated in the Results column (ohm or ohm-m) - a bare number is ambiguous between resistance and computed resistivity.
- Operator and date filled on every page, since pages can separate.

## Common errors

- Recording only the computed resistivity and losing the raw resistance/test number linkage to the instrument memory.
- Omitting spacing changes mid-traverse, making depth interpretation impossible.
- Leaving transcription to end of day and losing readings when memory positions are reused.

## Caveats

- Reconstructed from STS field records — confirm against the current STS procedure before treating as the standard method
- The datasheet is a vendor form, not STS-coded; the test procedure itself is covered by the separately documented AEMC Wenner SOP.

## Standards cited

AS/IEEE ground-resistance practice per the AEMC instrument documentation (Wenner four-point method)

## Related

- [[Field records catalogue]]
- [[Skills]]
