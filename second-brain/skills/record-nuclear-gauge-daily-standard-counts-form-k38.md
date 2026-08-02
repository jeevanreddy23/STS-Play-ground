---
title: Record nuclear gauge daily standard counts (Form K38)
type: skill
tags: [skill, field-records, field-source]
confidence: medium
updated: 2026-08-02
---

# Record nuclear gauge daily standard counts (Form K38)

> **Source:** [Google Drive — Field standard count/density reading_250818_075031.pdf](https://drive.google.com/file/d/1pB4ZoKaKkoaESFDHjKBiJD0rZ0Q8AeWu/view) (15 pages of completed K38 sheets for gauge 1449 (Humboldt, PS 0.64) with daily rows of density counts ~3130-3160 and moisture counts ~455-520, computed means, PL values, upper/lower limits and Y/N ticks). Reconstructed from STS's own
> field records on Google Drive — completed forms, labelled photos and
> scans, catalogued in [[Field records catalogue]]. It shows what the
> records evidence, not necessarily the current approved procedure —
> confirm against the current STS form and procedure before treating it
> as the standard method.

**Outcome.** A daily standard count check for a nuclear density gauge, verifying density and moisture counts fall within control limits before field density testing, combined with the gauge's remote storage record.

## Inputs

- Form K38 'Daily Standard Count Check & Remote Storage Record Sheet' (Date of Issue 01/10/19, Revision 1) — one sheet per gauge
- Nuclear density gauge with its gauge number and type (examples: gauge no. 1449, type Humboldt)
- The gauge's (PS) Prescale Value (0.64 on the examples)
- Previous four standard count readings for the running means

## Procedure

1. Head the sheet with Nuclear Gauge No., Type, and (PS) Prescale Value.
2. Each working day take the standard counts and complete one row: Date Checked, Checked By (initials), Standard Density Count.
3. Compute and record the density control values in the printed columns: (DS) Mean of Last 4 Readings; PL = √(DS/PS); Upper Limit DS + 2(PL); Lower Limit DS − 2(PL).
4. Tick/cross the 'Density Count within Limits (Y/N)' column by comparing today's count against the limits.
5. Repeat for moisture: Standard Moisture Count; (MS) Mean of Last 4 Readings; PL = √(MS/PS); Upper and Lower Limits from MS and PL; tick 'Moisture Count within Limits (Y/N)'.
6. Complete the storage-security fields on the sheet: circle storage location Vehicle/Garage, Vehicle Rego No., Base Storage Address, and 'Vehicle Equipped With Locked Alarm System: Y/N'.
7. File the sheets per gauge; the record set runs as a continuous multi-page daily log (15 pages in the example, with site annotations such as the depot address added by hand).

## Decision rules

- Limits are derived from the mean of the last four readings, so the running mean must be carried forward every day.
- A count outside its limits fails the daily check — the Y/N column exists to force that comparison before the gauge is used for field density testing.
- One sheet (and one running mean) per gauge — gauge number and prescale value are fixed in the sheet header.

## Checks

- Today's density and moisture counts each marked within limits
- Mean-of-last-4 recalculated, not copied
- Checked By initials present on every row
- Storage location, vehicle rego and alarm fields completed for source security

## Common errors

- Carrying yesterday's limits without updating the 4-reading mean
- Recording the count but skipping the within-limits Y/N decision
- Leaving the remote-storage/security section blank

## Caveats

- Reconstructed from STS field records — confirm against the current STS procedure before treating as the standard method
- The printed limit-formula text is small and partly unclear on the scans; the recorded numbers are consistent with limits of mean ± 2×PL for density, but verify the printed formulas (including the moisture limit multiplier) on a clean copy of Form K38
- The recorded PL values (~7.0 for DS ≈ 3140) match √(DS/PS) only with a scaling convention; confirm the intended calculation with the office before computing limits from scratch

## Standards cited

None cited in the source passage.

## Related

- [[Field records catalogue]]
- [[Borehole log conventions]]
- [[Skills]]
