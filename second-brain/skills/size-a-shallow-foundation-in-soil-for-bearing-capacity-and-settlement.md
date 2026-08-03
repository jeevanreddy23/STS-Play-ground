---
title: Size a shallow foundation in soil for bearing capacity and settlement
type: skill
tags: [skill, general]
confidence: high
updated: 2026-08-01
---

# Size a shallow foundation in soil for bearing capacity and settlement

> **Source:** `Handbook of Geotechnical Investigation and Design Tables_Bert Look 2014.pdf` (Chapter 21 Soil foundations, Sections 21.1-21.11 (Tables 21.1 to 21.11, Figure 21.2), pp 309-317; cross-reference Chapter 23 Sections 23.2-23.8), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** An allowable bearing pressure and a settlement estimate for a pad, strip or raft footing, with the governing criterion identified and the preliminary presumed value replaced by a design value that accounts for depth, size and shape.

## Inputs

- Soil description and classification at founding level, with consistency or density
- Undrained strength for cohesive soils, corrected SPT N or friction angle for granular soils
- Footing geometry: width, length, shape and embedment depth
- Groundwater level relative to the founding level and to the influence depth
- Applied loads including eccentricity and inclination, and the load duration
- Allowable total and differential settlement for the structure

## Procedure

1. Recognise what a preliminary bearing value is. Enter Table 21.4 with the soil description from the log to read a presumed bearing pressure - useful for feasibility, and explicitly qualified in the Preface as a value based on soil conditions for a typical surface footing only. The design value requires embedment, size, shape, footing type and location. Note the tabulated values are tied to a stated allowable settlement and a minimum footing width, with a reduction below that width, and that compacted structural fill at a stated relative compaction is treated separately.
2. Select the foundation type from Table 21.3, using the depth-to-width criterion Look gives for when a foundation is deep rather than shallow, and Table 21.2 where the foundation soil first needs treatment (fill placed over problem ground).
3. Compute ultimate bearing capacity from the general bearing capacity equation in Table 21.5 with the cohesion, friction and unit weight terms, the embedment surcharge term, and the shape, depth, inclination and eccentricity modifications. Take bearing capacity factors from Table 21.6 - Look uses the Vesic and Hansen sets and notes the older Terzaghi factors are higher.
4. For cohesive soils under undrained conditions, use the simplified route in Table 21.7: the strip-footing bearing capacity factor for the fully undrained case is fixed, and the factor increases with embedment ratio. Look notes this simple calculation often governs, because undrained strength typically controls in clay.
5. For granular soils, use Table 21.8 to read allowable bearing capacity directly from corrected SPT N and footing width, remembering it embeds a factor of safety and a settlement limit, assumes a surface footing (embedment increases capacity), and assumes the water table does not affect the influence zone. Where it does, apply the water table reduction.
6. Check settlement independently, because in granular soils settlement usually governs. Estimate from SPT with Table 21.9 using the average N over a depth equal to the footing width and the applied pressure, and bound the result with the settlement ratios in Table 21.10, which give an upper limit per unit pressure with the probable settlement a fraction of that. Note the Table 21.10 route uses uncorrected N and shows large scatter in loose sands.
7. In cohesive soils, split the settlement into immediate, consolidation and creep using Chapter 23 Tables 23.2, 23.3 and 23.4 - the immediate-to-total settlement ratio varies with overconsolidation and layer thickness, and the consolidation settlement is the oedometer value multiplied by a correction factor derived from pore pressure coefficient and geometry.
8. Select the factor of safety from Table 21.11 rather than defaulting. The table varies the factor with soil type, structure type, thoroughness of investigation and consequence; Look records the industry habit of using a single value regardless. Temporary structures may use a reduced factor subject to a floor.
9. Where the design is limit state rather than working stress, apply partial factors to loads and to material properties, with characteristic values for ultimate limit states and deformation criteria for serviceability - and check both, since shear failure tends to govern narrow footings while settlement governs wide ones.
10. Compare the final allowable pressure against the presumed value from Table 21.4 and explain any large divergence; a design value far above the presumed value needs the reason (embedment, size, fill treatment) stated on the drawings so it is not lost.
11. Check the settlement estimate against the structure's tolerance using Chapter 23 Tables 23.6, 23.7 and 23.8 - limiting total settlement, limiting angular distortion, and the damage relationship combining angular distortion with horizontal strain.

## Decision rules

- Never issue a presumed bearing pressure from a soil description as a design value.
- In granular soils assume settlement governs until shown otherwise; in cohesive soils assume undrained bearing governs until shown otherwise.
- Reduce the bearing pressure for footings narrower than the width the table assumes.
- Apply the water table reduction where the water table lies within the influence depth, not only where it is at founding level.
- Check bearing and settlement at the same load case - a bearing check at ultimate and a settlement check at an unrelated load combination is not a design.
- Where eccentricity exists, use an effective footing width; do not apply the full width with an average pressure.

## Checks

- Bearing capacity computed from the full equation and cross-checked against the simplified table for the soil type
- Settlement estimated by at least two routes and compared against the structure's tolerance
- Groundwater condition at founding level and through the influence depth confirmed
- Factor of safety selected from Table 21.11 criteria and justified, not defaulted
- Founding level inspection requirement stated where the design relies on a specific stratum
- Preliminary versus design bearing value distinguished on all issued documents

## Common errors

- Carrying a report's preliminary allowable bearing pressure into detailed design unchanged
- Designing a wide footing on granular soil for bearing capacity when settlement governs
- Ignoring embedment benefit and over-sizing, or claiming embedment benefit that excavation for services will later remove
- Using undrained strength in a long-term case in clay
- Omitting the water table reduction because the water table is below the founding level but within the pressure bulb

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- Tabulated allowable bearing capacities embed a factor of safety and a settlement limit - do not apply a further factor without checking what is already in the number.
- Bearing capacity factor sets differ between authors; state which set was used and keep it consistent through the calculation.

## Standards cited

AS 2159 Piling - design and installation (for the deep foundation boundary), AS 5100.3 Bridge design - foundations and soil-supporting structures, Eurocode 7 Section 6 (spread foundations)

## Related

- [[AS 2159 piling]]
- [[Groundwater observations]]
- [[Borehole log conventions]]
- [[Library - RMS and TfNSW specifications]]
- [[Soil description order]]
- [[Skills]]
