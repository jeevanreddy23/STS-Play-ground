---
title: Transfer AX 01a test data from the SD card into Excel
type: skill
tags: [skill, testing]
confidence: high
updated: 2026-08-01
---

# Transfer AX 01a test data from the SD card into Excel

> **Source:** `BedAnlAx01a_engl V40a.pdf` (Chapters 7-8, pp. 17-18; SD file path in Section 6.3, p. 13), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** The engineer can pull stored test records off the device's SD card into the supplied Excel template and generate per-test sheets for reporting.

## Inputs

- SD card from the AX 01a (all tests live in one file, X:\AX01\PDG.CRD)
- PC with a card reader and Microsoft Excel (2000 or later)
- Supplied template: ax.xlt for Excel 2000/XP/2003 or ax.xltm for 2007+ with macros enabled

## Procedure

1. Open the appropriate template from the SD card and enable macros in Excel's security settings (p. 17).
2. Copy PDG.CRD from the SD card to the hard disk and work from that copy (recommended, p. 18).
3. In the template press the read-card button, then use the read-file option to open the .CRD file - for the AX 01a, ignore the card-info/read-card/card-reader buttons meant for the older chip-card version.
4. Mark the datasets to transfer (click to toggle the blue selection; a select-all button exists) and run the data-to-Excel transfer; each test becomes its own sheet with table and graph.
5. Treat the generated sheets as static output - do not edit values, because the modulus results and graph points will not recalculate (p. 18).

## Decision rules

- Use read-file, not the card-reader path, for AX 01a data; the dedicated card reader is only for the previous device generation.
- Optionally export via the separate software to ASCII .csv or GGU .pdr formats when other programs need the data (p. 4).

## Checks

- Number of records shown matches the device's card-info count.
- Each transferred sheet reproduces the Ev values printed on site.

## Common errors

- Editing cells in the generated sheet and assuming moduli update - they do not.
- Working directly on the SD card instead of a copied working file.
- Macros disabled, so the template buttons do nothing.

## Caveats

- Excel macro-security menus described are for legacy Excel versions; modern Excel places these controls elsewhere.
- The SD card stores roughly 200 tests; deleting the card erases all records at once.

## Standards cited

None cited in the source passage.

## Related

- [[Skills]]
- [[Skills]]
