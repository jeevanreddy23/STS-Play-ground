---
title: Derive consistency and activity indices from limits and in-situ moisture
type: skill
tags: [skill, parameters]
confidence: medium
updated: 2026-08-01
---

# Derive consistency and activity indices from limits and in-situ moisture

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 4, §§4.5 (liquidity and consistency index) and 4.6 (activity)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Liquidity index, consistency index and activity for a clay, giving a first read on in-situ state, sensitivity risk and swelling mineralogy.

## Inputs

- Liquid limit and plastic limit of the soil
- In-situ (natural) moisture content of an undisturbed sample
- Clay-size fraction (percent finer than 0.002 mm) from a hydrometer analysis, for activity

## Procedure

1. Compute plasticity index as liquid limit minus plastic limit.
2. Compute liquidity index as the in-situ moisture content minus the plastic limit, divided by the plasticity index.
3. Compute consistency index using the complementary expression given in the source.
4. Compute activity as the plasticity index divided by the percent clay-size fraction by mass.
5. Interpret: liquidity index near or above 1 indicates a soil at or wetter than its liquid limit; near or below 0 indicates a heavily overconsolidated or desiccated state.
6. Compare the activity value to the published ranges for the common clay minerals to infer likely mineralogy and swell potential.

## Decision rules

- A liquidity index at or above 1 flags a potentially sensitive or quick clay that can lose most of its strength on remoulding — escalate to sensitivity testing before relying on undisturbed strength.
- A liquidity index at or below 0 flags a desiccated or heavily overconsolidated crust; expect a stiff response at low strain but check for fissuring.
- High activity flags smectite-dominated clay and therefore significant shrink-swell and low permeability; low activity suggests kaolinite.
- Activity is only meaningful when the clay-size fraction is measured on the same material as the limits.

## Checks

- Check the natural moisture content came from a sample that was sealed at recovery; drying in transit destroys the liquidity index.
- Check the clay-size fraction was determined with an effective deflocculant.
- Cross-check high inferred swell potential against a direct shrink-swell or swell-pressure test before design.

## Common errors

- Computing liquidity index from an average moisture content across a variable profile instead of the sampled horizon.
- Using percent passing 0.075 mm instead of percent finer than 0.002 mm in the activity calculation.
- Treating activity as a design parameter rather than an indicator.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Activity ranges for individual clay minerals are tabulated in the source; take the numbers from there rather than from memory.

## Standards cited

ASTM D4318, AS 1289.3.3.1

## Related

- [[Skills]]
- [[Skills]]
