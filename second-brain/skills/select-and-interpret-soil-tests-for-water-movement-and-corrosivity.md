---
title: Select and interpret soil tests for water movement and corrosivity
type: skill
tags: [skill, salinity]
confidence: high
updated: 2026-08-01
---

# Select and interpret soil tests for water movement and corrosivity

> **Source:** `booklet3siteinvestigationsforurbansalinity (2).pdf` (Phase 2 'Soil Tests for Urban Salinity' pp. 9-10; Phase 3 interpretation pp. 13-14; Appendices 2-3 pp. 22-25), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A test suite and interpretation that establishes how water (and therefore salt) moves through the site and how aggressive the soil/groundwater will be to concrete and steel.

## Inputs

- Representative soil samples per horizon/landform unit and groundwater samples
- Lab capability for permeability, CEC, ESP, Emerson class, sulphate, pH, chloride, resistivity and EC
- AS 2159 durability tables (and DIN 4030 if magnesium/ammonium are of interest)

## Procedure

1. Run the water-movement suite: permeability (controlled by texture, structure, compaction, sodicity, impermeable layers), cation exchange capacity (needed to compute sodicity), sodicity as ESP = exchangeable Na / CEC x 100, and dispersibility by the Emerson aggregate test (AS 1289.3.8.1-1997).
2. Run the corrosivity suite: sulphate (report as % by weight of soil for direct comparison with AS 2159), soil pH (AS 1289.4.3.1-1997), chloride (report as ppm or mg/L in water for AS 2159 comparison), and resistivity in ohm.cm (AS 1289.4.4.1-1997) for steel corrosion.
3. Interpret sodicity against ESP bands used in the booklet: below 5 non-sodic, 5-15 sodic, above 15 highly sodic (p. 14); consider depth and thickness of sodic layers, not just presence.
4. Interpret Emerson classes: classes 1-2 prone to tunnelling erosion; class 3 stable and water-holding when compacted; classes 4-6 highly aggregated and poor at holding water even compacted; classes 7-8 non-slaking, split on swelling.
5. Compare corrosivity results with AS 2159 exposure classification tables, DIN 4030 limits (which add carbonic acid, ammonium and magnesium in mg/L), and manufacturers' specifications.
6. Note that AS 2159 flags (without quantifying) that magnesium and ammonium ions increase sulphate aggressiveness on concrete — use DIN 4030 only as a guide since it reflects German soils and practice.

## Decision rules

- AS 2159 distinguishes soil condition classes: (A) high-permeability soils below groundwater vs (B) low-permeability soils and all soils above groundwater; in urban settings where leaks and perched water tables can raise groundwater, the precautionary path is to adopt the more conservative condition-A classification.
- Where water flow can be concentrated (through-flow layers, pale-coloured horizons), expect concentrated salt — corrosivity sampling should target these zones.
- Salinity (EC) itself is not a corrosivity parameter in this framework; use it for landscaping/plant tolerance decisions and use sulphate/pH/chloride/resistivity for aggressivity.

## Checks

- Units match the comparison standard exactly: sulphate as % soil weight, chloride as ppm or mg/L, resistivity as ohm.cm — otherwise the AS 2159 tables cannot be applied directly.
- EC results labelled as EC1:5, EC1:2 or ECe with conversion factors stated.
- Dispersibility considered alongside sodicity: low-sodium soils with poor structure and low organic matter can still be highly dispersive.

## Common errors

- Comparing raw EC1:5 against ECe-based criteria (underestimates salinity by roughly a texture factor of 14 for sandy loam to 6 for heavy clay).
- Assuming compacted wet dispersive fill will hold water regardless of Emerson class (classes 4-6 do not).
- Ignoring magnesium/ammonium when sulphate is present.
- Treating an arbitrary ECe threshold as a building-damage predictor — damage depends on salt type, water supply and wetting/drying cycles.

## Caveats

- Classification and aggressivity calls must be verified against the current editions of AS 2159/AS 3600 and the project specification — the booklet's extracts reference superseded editions.
- ESP banding (5/15) is one example scheme; other rating schemes exist.
- DIN 4030 limits are for mainly natural waters under German conditions — guide only.
- T56 (INDUSTRY_GUIDE_T56...pdf, Section 4) provides the complementary mechanism view (physical attack, chemical/sulfate attack, reinforcement corrosion) for the same decisions.

## Standards cited

AS 2159-2009 Piling - Design and Installation, Section 6 durability tables, AS 1289.3.8.1-1997 (Emerson class), AS 1289.4.3.1-1997 (soil pH), AS 1289.4.4.1-1997 (soil resistivity), DIN 4030 Assessment of Water, Soil and Gases for their Aggressiveness to Concrete, AS 3600 Concrete Structures (durability section)

## Related

- [[AS 2159 piling]]
- [[Groundwater observations]]
- [[Library - salinity and sodic soils]]
- [[Soil description order]]
- [[Skills]]
