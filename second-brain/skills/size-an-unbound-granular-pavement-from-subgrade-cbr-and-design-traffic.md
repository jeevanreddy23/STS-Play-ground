---
title: Size an unbound granular pavement from subgrade CBR and design traffic
type: skill
tags: [skill, pavements]
confidence: medium
updated: 2026-08-01
---

# Size an unbound granular pavement from subgrade CBR and design traffic

> **Source:** `Pavement Thickness of Material, mm.xlsx` (Sheet1 (log CBR row, cover coefficient row, thickness row, wearing course and total rows)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** The engineer can compute a total granular cover thickness over a subgrade of known CBR for a given design traffic loading, and add the surfacing to obtain a total pavement thickness.

## Inputs

- Design subgrade CBR, in per cent
- Design traffic loading in equivalent standard axles (DESA) over the design period
- Surfacing type and its nominal thickness (thin bituminous seal or asphalt wearing course)
- Any specified minimum layer thicknesses and material quality requirements

## Procedure

1. Take the base-10 logarithm of the design CBR.
2. Evaluate the cover coefficient from the quadratic in log(CBR): coefficient = 219 - 211 x log(CBR) + 58 x [log(CBR)]^2. This is the empirical granular-cover expression underlying the standard design chart for unbound pavements with a thin bituminous surfacing.
3. Take the base-10 logarithm of the traffic ratio, log(DESA / 120).
4. Multiply the two to obtain the required granular cover thickness in millimetres.
5. Add the wearing course thickness appropriate to the traffic level and surfacing type to obtain the total pavement thickness.
6. Round up to a constructable thickness and check the result against the specification's minimum base and subbase thicknesses and against the layer-by-layer cover requirements for each material quality.
7. Repeat the calculation across the range of subgrade CBRs measured on the site, and adopt the thickness governed by the design (characteristic, not average) CBR.

## Decision rules

- Set up the sheet as a row of columns, one column per design case, so a range of CBR and traffic combinations can be compared at once; a blank or zero CBR in any column produces an error rather than a silent wrong answer.
- Adopt a heavier wearing course as design traffic increases; the source sheet steps the wearing course up between the lower and higher traffic columns.
- The expression is only valid for unbound granular pavements with a thin bituminous surfacing - it does not apply to full-depth asphalt, bound or stabilised layers, or rigid pavements.
- Where the design CBR is very low, check against the standard's lower bound for the chart and consider subgrade improvement, a capping layer or geosynthetic reinforcement instead of extrapolating the formula.
- The design CBR should be a characteristic (lower-bound) value at the expected in-service moisture condition, not a peak laboratory value.

## Checks

- Confirm both logarithms are base 10.
- Confirm CBR is entered as a percentage (a value of 3 for CBR 3 per cent, not 0.03), otherwise the logarithm goes negative and the answer is meaningless.
- Confirm DESA exceeds 120, otherwise log(DESA/120) is negative or zero and the cover thickness collapses.
- Check the computed cover against the published design chart for the same CBR and traffic - the formula should reproduce the chart, and any divergence means a transcription error.
- Check the total thickness against practical minimum construction thicknesses for each layer.

## Common errors

- Leaving comparison columns without CBR or traffic inputs, which propagates numeric errors across the whole row (visible in the source sheet, where only the first column carries inputs).
- Entering CBR as a decimal fraction instead of a percentage.
- Treating the computed cover as the total pavement thickness and forgetting to add the wearing course, or conversely double-counting the surfacing inside the cover.
- Applying the expression to a stabilised or bound pavement.
- Designing to an average site CBR rather than a characteristic value.

## Caveats

- Reconstructed from a working calculation file - verify the method against the governing standard before reuse.
- The constants in the quadratic reproduce a specific published design chart; confirm the edition of the guide the coefficients came from before reusing them.
- The row of alternative constants sitting above the working row in the source sheet is not used by any formula - do not assume those values apply.
- The second sheet in the same workbook is unrelated plate load test load / stress / mass conversion scratch work, not part of the pavement calculation.

## Standards cited

Austroads Guide to Pavement Technology Part 2, AS 3798

## Related

- [[Borehole log conventions]]
- [[Skills]]
