---
title: Handle GPS-tagged plate load test records
type: skill
tags: [skill, testing]
confidence: medium
updated: 2026-08-01
---

# Handle GPS-tagged plate load test records

> **Source:** `AX01 Sample Results with GPS.xlsm and PLT Electronic Menu Structure Training.pptx` (Per-record sheets 'AX01 (n)' (conditional latitude/longitude header cells and the raw position rows in the hidden block), workbook settings sheet (automatic map loading option), and the GNSS receiver function slide), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** The engineer can rely on the position stamp the tester writes with each record to tie results to locations, knows when a fix will not be available, and can spot records that cannot be trusted to a location.

## Inputs

- Test records transferred from the device into the evaluation workbook
- The intended test locations (lot boundaries, chainages, pad or hardstand numbers)
- A site plan or GIS layer to plot against

## Procedure

1. Before the first test of the day, let the receiver acquire a fix in the open. Allow up to a couple of minutes; the device needs roughly thirty to a hundred and twenty seconds to display coordinates depending on satellite signal strength.
2. Confirm coordinates are showing on the device before starting the test, so the record carries a position rather than blank coordinate fields.
3. After transfer, check each record sheet's header: the latitude and longitude fields only appear when the device captured a fix, so a record with no coordinate row is a record with no position.
4. Plot the coordinates for the day's records against the intended locations and confirm each record falls inside the lot or element it is meant to represent.
5. Where a record has no fix, fall back on the written field record for its location and say so in the report - do not infer a position from the record order.
6. Where the workbook's mapping option is enabled, use the automatic map load to visually verify the spread of test points across the lot rather than reading coordinates as numbers.
7. Carry the coordinates through to the report alongside the record number, card number and time stamp, so any result can be traced back to a place and a moment.

## Decision rules

- Reception is limited or absent under coverings and inside enclosed spaces - tunnels, basements, under structures, inside sheds. Testing and data storage still work without a fix; only the position is lost.
- A satellite position is a horizontal position of metre-scale accuracy. It is adequate for confirming which lot a test belongs to; it is not a survey pickup and must not be used to set out or to report a level.
- Randomly located test points required by a statistical acceptance scheme must still be located randomly; the position stamp records where the test went, it does not choose the location.
- If a plotted point falls outside the lot it is nominally assigned to, treat the assignment as wrong until proven otherwise - this is the main value of the position stamp.

## Checks

- Confirm the number of records carrying coordinates matches the number of tests logged in the open.
- Confirm the plotted spread of points covers the lot rather than clustering, where the specification calls for distributed testing.
- Confirm the time stamps run in a sensible sequence with the plotted positions - a large jump in position with a small jump in time indicates a mis-assigned record.
- Confirm the coordinate reference the workbook reports matches the reference of the site plan before overlaying.

## Common errors

- Starting the first test before the receiver has acquired, so the first records of the day have no position.
- Assuming a blank coordinate field is a transfer fault rather than a genuine no-fix condition.
- Treating the position stamp as survey-grade and reporting it to more precision than it has.
- Relying on the position stamp instead of keeping a written field record of test locations.
- Overlaying coordinates on a site plan in a different coordinate system and concluding the tests were in the wrong place.

## Caveats

- Reconstructed from a working calculation file - verify the method against the governing standard before reuse.
- Position accuracy depends on satellite geometry and obstruction; no accuracy figure is stated in the source.
- The coordinate fields carry no elevation, so founding level or test depth must still be recorded separately.

## Standards cited

DIN 18134

## Related

- [[Library - plate load testing]]
- [[Skills]]
