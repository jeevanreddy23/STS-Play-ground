---
title: Assign preliminary hydrogeological parameters to Sydney rock classes for groundwater modelling
type: skill
tags: [skill, parameters, ocr-source]
confidence: medium
updated: 2026-08-01
---

# Assign preliminary hydrogeological parameters to Sydney rock classes for groundwater modelling

> **Source:** `PELLS MOSTYN WONG (2019) CLASSIFICATION OF SANDSTONES AND SHALES IN THE SYDNEY.pdf` (Section 6 and Tables 7-8 (pp 44-45)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Class-linked first-pass ranges of hydraulic conductivity, porosity, drainable storage and mass stiffness for saturated groundwater models of Hawkesbury Sandstone and Wianamatta shale, with structural features handled explicitly.

## Inputs

- Rock class per the Pells classification, and the volume of each hydrogeological unit
- Packer (Lugeon) or pumping test data where available
- Guideline parameter ranges in Tables 7 (sandstone) and 8 (shale) of the 2019 paper
- Knowledge of dykes, faults and fractured zones in the model domain

## Procedure

1. Divide the model into hydrogeological units and assign each a class where the engineering geological model already uses the Pells system.
2. Select mass hydraulic conductivity, Poisson's ratio, total porosity and drainable storage ranges from Tables 7 and 8 (conductivity tabulated in units of 1e-7 m/s, roughly 1 Lugeon).
3. Compute specific storage from mass compressibility (Young's modulus and Poisson's ratio) and porosity using the paper's Equation 2 rather than picking it arbitrarily.
4. Expect the conductivity trend: Class I approaches substance values; Classes II-III are defect-dominated and more permeable; Class V drops again as weathering-derived clay fills defects, with higher compressibility and lower drainable storage.
5. Model permeable structural features (dyke margins, fault zones) explicitly, including their connection to nearby water bodies; they are outside the class-based ranges.

## Decision rules

- Use the class linkage only for preliminary, saturated-condition analyses on projects where the classification already frames the geological model; it is not a hydrogeological classification.
- For unsaturated analyses, additional suction-dependent functions are required that the class tables do not provide.

## Checks

- Packer/pumping test data used to confirm or override the tabulated ranges wherever available.
- Specific storage consistent with the adopted mass modulus, not independently assumed.

## Common errors

- Applying class-based ranges across dykes and fault zones.
- Adopting specific storage values inconsistent with the mechanical parameters.
- Treating the guideline ranges as site-specific measurements.

## Caveats

- OCR corrupted parts of the specific-storage equation; retrieve Equation 2 from the published paper before use.
- The authors note no classification system is ideal for hydrogeology; use with care.
- Design reference only: ranges must be verified against the source tables and reviewed by a qualified engineer/hydrogeologist before use.

## Standards cited

Standard packer (Lugeon) testing practice

## Related

- [[Rock weathering classes]]
- [[Weathered siltstone]]
- [[Rock strength classes]]
- [[Groundwater observations]]
- [[Library - Pells papers on Sydney sandstone and shale]]
- [[Soil description order]]
- [[Skills]]
