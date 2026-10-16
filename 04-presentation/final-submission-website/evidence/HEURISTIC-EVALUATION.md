# Heuristic Evaluation — Supplied Upgrade Reference

> **EXPERT REVIEW ONLY.** This is a structured evaluation of the visible supplied Figma flow. It is not customer research, a complete production audit, or proof that an issue causes abandonment.

## Scope

- Source: supplied `Upgrades` Figma file and its connected four-frame prototype
- Flow observed: line selection → device grid → PDP/configuration → confirmation
- Method: Nielsen’s ten usability heuristics
- Evidence limit: visible-frame review; authenticated behavior, responsive behavior, component internals and production rules were not available

## Severity scale

| Rating | Meaning |
| --- | --- |
| 0 | No issue observed |
| 1 | Cosmetic or low-priority concern |
| 2 | Minor friction; correct when practical |
| 3 | Major usability risk; important to address |
| 4 | Critical risk to confident completion |

## Scorecard

| Heuristic | Observation | Severity | V2 response |
| --- | --- | ---: | --- |
| Visibility of system status | Eligibility and selected products are visible, but the complete financial state is not persistently consolidated before commitment. | 3 | Add a persistent Upgrade Impact layer that updates from confirmed choices. |
| Match between system and the real world | Device price, bill impact, one-time fees and delayed promotional credits use different timelines without one plain-language calculation. | 3 | Present “pay today,” “estimated next bill,” and “estimated ongoing bill,” with the math shown. |
| User control and freedom | The connected path does not show a complete editable review immediately before order submission. | 4 | Add an editable pre-commitment review that returns to the relevant choice without losing context. |
| Consistency and standards | Familiar shopping, PDP and selection patterns are strong; financial consequences are presented differently across sections. | 2 | Preserve the full familiar flow while applying one consistent financial summary pattern. |
| Error prevention | A financial confirmation step and safe unknown-order recovery were not visible in the supplied path. | 3 | Add explicit commitment language, preserved choices, a status check and one safe retry. |
| Recognition rather than recall | Customers must remember payment, plan, offer and trade-in values across a long flow. | 4 | Keep current impact visible next to the choices that produced it. |
| Flexibility and efficiency | Search, filtering and comparison support browsing, but the observed path does not provide a fast route back to the exact financial choice that needs correction. | 2 | Add targeted edit links from review to device, payment, plan and trade-in. |
| Aesthetic and minimalist design | Rich PDP content supports product choice but can compete with the financial decision needed to complete the upgrade. | 2 | Retain PDP content and progressively emphasize decision-critical information. |
| Help users recognize and recover from errors | Error, interruption and ambiguous submission states were not visible in the reference. | 3 | Provide specific error summaries, preserve choices and prohibit retry until order status is known. |
| Help and documentation | Support resources may exist outside the inspected path; their relationship to the transaction could not be verified. | Not rated | Keep Upgrade Guide separate and route account-specific questions to authenticated support. |

## Synthesis

The review does not justify replacing the supplied journey. The familiar flow already supports account context, device discovery, product configuration and confirmation. The strongest opportunity is to preserve those patterns and add a coherent financial decision layer across them.

## Evidence boundary

The severity ratings express expert judgment about potential usability risk. They do not establish frequency, customer preference, conversion impact or business value. Those questions require representative-user research and production measurement.
