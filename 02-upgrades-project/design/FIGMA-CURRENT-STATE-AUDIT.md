# Figma Current-State Audit

> **REFERENCE REVIEW ONLY — NOT CUSTOMER RESEARCH, USABILITY EVIDENCE, OR A PRODUCTION AUDIT**

```yaml
artifact:
  id: ART-DESIGN-005
  type: figma-current-state-audit
  version: 1
  status: draft-for-human-review
  project: upgrade-with-confidence
  phase: design
  producer: ux-design-agent

source:
  file_name: Upgrades
  file_key: wndbrbbkENkPneTNHKm0kk
  supplied_node: 0:1
  inspected_on: 2026-10-11
  inspection_mode: read-only visual review of the Figma canvas and prototype
  connected_prototype_frames: 4

evidence_notice:
  project_type: synthetic-academic-project
  classification: design-reference
  rule: Content in the supplied Figma file is not treated as verified customer evidence, internal analytics, approved policy, or proof of conversion impact.
  privacy_rule: Realistic-looking names, phone numbers, account numbers, order numbers, dates, prices, and offers must not be carried into the synthetic submission.

inspection_limitations:
  - Figma's programmatic inspection tools reported insufficient edit access for the connected account.
  - Findings are based on visible frames and prototype navigation, not a complete component, variable, interaction, or accessibility-tree inspection.
  - The review does not establish responsive behavior, technical feasibility, production accuracy, or WCAG conformance.
```

## Executive assessment

The supplied Figma file is a useful **current-state reference** for the broad upgrade journey, but it is not the proposed “Upgrade With Confidence” solution.

The prototype establishes a recognizable sequence from line selection to device shopping, product configuration, and order confirmation. Its principal conversion gap is that consequential financial information is distributed across the journey and is not visibly consolidated into an editable, pre-commitment Upgrade Impact review.

The file should therefore be used for structural and interaction reference only. The synthetic submission should create a narrower future-state demonstration focused on comprehension before commitment.

## Observed prototype sequence

| Sequence | Observed frame | What is visible | Current-state value | Conversion concern |
|---|---|---|---|---|
| 1 | Account and line selection | Account groups, device rows, line details, offer/plan information, eligibility status, search, sort, filter, multi-line selection, Continue action | Establishes account and upgrade context | Dense business-account information competes with the primary action; the approved synthetic scope is one eligible consumer line |
| 2 | Device grid | Device cards, pricing and offer labels, filters, search, comparison controls and promotional content | Supports device discovery and comparison | Cards do not visibly explain complete due-today, monthly, plan, fee and trade-in impact together |
| 3 | Upgrade product detail/configuration | Device identity, available offer, color, payment, SIM, plan selection, device protection, product information, reviews and comparison content | Provides detailed configuration choices | The page is very long; financial consequences are fragmented across sections and no persistent Upgrade Impact summary was observed |
| 4 | Order confirmation | Submitted-order message, account/order identifiers, date, product summary, trade-in device and promotional content | Provides a clear success state and order reference | Important order and trade-in information becomes especially clear only after submission; no connected editable final review was observed immediately before commitment |

## Additional canvas content observed

The `Happy path` section also contains top-level layers or frames named:

- `Cart`
- `Single device Trade in`
- `Group 1000005276`
- `ULP - Account/Line Selection Page`
- `MyBiz UPG PDP (D)`
- `MyBiz AAL Gridwall (D)`

The connected prototype exposed four frames. The separate Cart and trade-in material may contain useful reference patterns, but their role and connections could not be verified through the visible prototype sequence.

## Alignment with the approved strategy

| Approved requirement | Observed alignment | Assessment |
|---|---|---|
| Preserve selected-line context | Account/line details are visible | Partial alignment |
| Show complete impact before commitment | Costs and offers appear in different parts of the journey | Major gap |
| Separate due-today, next-bill, ongoing, estimated, delayed and conditional amounts | No single grouped presentation was observed | Major gap |
| Keep trade-in estimate status and conditions visible | Trade-in appears as separate canvas content and in confirmation | Major gap in the connected path |
| State plan impact explicitly | Plan choices are visible on the PDP | Partial alignment; net effect is not consolidated |
| Provide editable final review | No connected pre-submission review was observed | Critical gap |
| Use explicit commitment language | Could not be verified before the confirmation frame | Unverified |
| Prevent duplicate submission and support safe recovery | Loading, timeout and recovery behavior were not shown | Unverified |
| Support responsive web | Only desktop compositions were observed | Major gap |
| Use synthetic and masked data | The reference contains Verizon Business branding and realistic-looking customer/order data | Not aligned with submission evidence rules |

## Conversion-critical findings

### GAP-001 — Complete financial impact is not visible as one decision aid

The user must interpret offers, payment, plan and protection information across a long journey. This increases memory burden and makes it difficult to answer the core conversion question: **What will this upgrade change for me?**

Mapped requirements: `OPP-001`, `INFO-002`, `INFO-003`, `INFO-005`, `INFO-006`, `INFO-007`, `INFO-008`, `NODE-006`.

### GAP-002 — Trade-in value, timing and conditions are not integrated into the connected decision path

A trade-in layer exists, but the four-frame prototype does not demonstrate how the estimate changes the projected monthly impact before commitment.

Mapped requirements: `OPP-002`, `INFO-004`, `INFO-005`, `NODE-003`, `NODE-004`, `NODE-005`.

### GAP-003 — The connected flow does not show an editable final review

The visible sequence moves from a detailed PDP to order confirmation. Without an explicit review state, customers may discover the complete financial effect too late or submit without confidently understanding it.

Mapped requirements: `OPP-003`, `NODE-006`, `NODE-007`, `NODE-008`, `A11Y-009`.

### GAP-004 — The reference is broader and denser than the approved project scope

The Figma file supports business accounts, multiple lines, long product information, protection and merchandising. The synthetic project intentionally focuses on one eligible line and the financial comprehension needed to finish one upgrade.

Mapped requirements: `PROBLEM-001`, `DEC-DESIGN-DIRECTION-001`.

### GAP-005 — Responsive and exception behavior is not demonstrated

Only desktop happy-path compositions were observed. Loading, empty, permission, unavailable, error, interruption, timeout, recovery and safe-submission states remain necessary for a credible working demonstration.

Mapped requirements: `STATE-006` through `STATE-015`, `A11Y-003`, `A11Y-005`, `A11Y-006`, `A11Y-007`, `A11Y-009`.

## Patterns worth retaining

- Clear progression from line context to device selection and configuration.
- Search, sort and filter support for larger device or account sets.
- Product-card comparison patterns.
- Explicit plan and device-protection choice surfaces.
- A recognizable submitted-order confirmation with order identifiers and product summary.
- Strong visual distinction between major page sections.

These are reference patterns, not approved artifacts. Any reuse must be simplified, relabelled with fictional data, and traced to the synthetic project requirements.

## Recommendation

Use the supplied Figma as a baseline for **what exists**, not as the final design strategy. Create a focused future-state prototype that adds a live Upgrade Impact summary throughout configuration and an editable final review before the explicit `Place upgrade order` action.

The future-state design must use the fictional `SCENARIO-001` values and must visibly identify the work as a synthetic academic demonstration.

