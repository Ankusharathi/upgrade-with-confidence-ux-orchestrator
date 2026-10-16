# Figma-to-Future-State Mapping

> **PROPOSED SYNTHETIC SOLUTION — NOT A VERIZON DESIGN, POLICY, CUSTOMER FINDING, OR CONVERSION FORECAST**

```yaml
artifact:
  id: ART-DESIGN-006
  type: current-to-future-state-mapping
  version: 1
  status: draft-for-human-review
  project: upgrade-with-confidence
  phase: design
  producer: ux-design-agent

inputs:
  - ART-DESIGN-001
  - ART-DESIGN-005
  - JOURNEY-DESIGN-001
  - IA-DESIGN-001
  - TASKFLOW-DESIGN-001
  - ART-DESIGN-002
  - ART-DESIGN-003
  - ART-DESIGN-004

decision:
  selected_direction_id: DIRECTION-002
  mapping_intent: Adapt useful structural patterns from the reference while creating a narrower guided upgrade with live Upgrade Impact.
  reuse_rule: Reuse interaction ideas only; do not reproduce Verizon branding, realistic customer data, unverified prices, offers, policies or claims.
```

## Future-state design goal

Help one eligible synthetic customer finish a device upgrade by making four questions answerable before commitment:

1. What do I pay today?
2. What changes on my next bill?
3. What changes every month after credits begin?
4. What trade-in, promotion or plan conditions could change those amounts?

## Recommended primary-screen set

The submission should remain intentionally small. Six primary screens are sufficient to demonstrate the strategy.

| Future screen | Purpose | Reference starting point | Required future-state change | Traceability |
|---|---|---|---|---|
| `FSCREEN-001` Eligible line | Confirm the correct masked line and eligibility | Account/line selection | Reduce the multi-account table to one fictional line ending 2048; state eligibility in text; initialize Upgrade Impact | `NODE-001`, `STATE-001`, `CONTENT-001`, `CONTENT-002` |
| `FSCREEN-002` Choose device | Select Nova X and compare payment information | Device grid | Use fictional products; show full price, device payment, term and due-today estimate; add live Upgrade Impact on desktop and a controlled summary on mobile | `NODE-002`, `STATE-002`, `INFO-002`, `INFO-003`, `A11Y-003`, `A11Y-006` |
| `FSCREEN-003` Configure trade-in | Add or decline a trade-in and obtain a synthetic estimate | Separate trade-in reference layer | Make trade-in optional; collect only necessary fictional condition details; label `$360` as estimated and conditional; explain `$10/month for 36 months` and inspection timing | `NODE-003`–`NODE-005`, `STATE-003`, `CONTENT-007`–`CONTENT-010` |
| `FSCREEN-004` Review Upgrade Impact | Understand all financial and account effects together | New surface; no equivalent connected frame observed | Group due today, estimated next bill, ongoing monthly impact, trade-in, promotion, plan effect, one-time fee and delayed credits; provide direct Edit actions | `NODE-006`, `NODE-007`, `STATE-004`, `INFO-002`–`INFO-008`, `CONTENT-011`–`CONTENT-016` |
| `FSCREEN-005` Final review and commitment | Verify the complete order immediately before submission | Cart may provide layout reference, pending deeper inspection | Retain the full impact snapshot, delivery details and correction paths; use the explicit action `Place upgrade order`; separate review from commitment | `NODE-008`, `NODE-009`, `STATE-005`, `A11Y-009`, `ACTION-001` |
| `FSCREEN-006` Confirmation | Confirm one synthetic order and explain next steps | Existing confirmation frame | Replace realistic identifiers with a fictional order ID; restate final impact, trade-in next steps and credit timing; remove unrelated merchandising from the core demonstration | `NODE-012`, `STATE-014`, `STATE-015` |

## Persistent Upgrade Impact component

`Upgrade Impact` is the main differentiator and should remain structurally consistent across `FSCREEN-002` through `FSCREEN-005`.

### Required content order

1. **Due today** — `$72.00 synthetic device tax`
2. **Estimated next bill impact** — `$60.00 more`, consisting of the `$35.00` one-time upgrade fee and `$25.00` device payment before credits
3. **Ongoing monthly impact after credits begin** — `$15.00 more`
4. **Trade-in value** — `Estimated $360 promotional value`
5. **Credit method and timing** — `$10.00 monthly credits for 36 months`, beginning after eligibility and inspection; may take `1–2 synthetic billing cycles`
6. **Plan impact** — `No plan change; synthetic plan remains $65.00 a month`
7. **Shipping** — `$0.00 standard shipping`

### Required status language

- `Confirmed` for a selected synthetic configuration value.
- `Estimated` for tax, next-bill projection and trade-in value.
- `Conditional` for promotional credits dependent on eligibility and inspection.
- `Delayed` for credits that may begin after one or more billing cycles.
- `One-time` for the synthetic upgrade fee.

Color may support these states but must never be the only status cue.

## Current-to-future changes

| Current-state pattern | Future-state decision |
|---|---|
| Multi-account, multi-line selection | Narrow to one masked eligible line; retain a `Change line` escape route only if needed for the demonstration |
| Verizon Business branding and navigation | Replace with a neutral fictional telecom shell for the synthetic academic submission |
| Realistic-looking customer and order information | Replace with explicitly fictional and masked values |
| Device-card promotional price emphasis | Pair price with full cost, term and impact; never present a promotional headline without conditions |
| Long PDP with many merchandising sections | Prioritize device, payment, trade-in and plan-impact decisions; move specifications, reviews and comparison outside the critical demonstration path |
| Offer, plan and protection information in separate sections | Reflect every consequential selection in the live Upgrade Impact summary |
| Trade-in outside the connected prototype | Make trade-in an explicit, optional step with estimate status, inspection condition and credit timing |
| Confirmation provides clear order details | Preserve that clarity, but also provide it in the editable final review before submission |
| Promotional content beside confirmation | Remove from the core task so it does not compete with next steps and order verification |

## Responsive behavior

### Desktop

- Keep Upgrade Impact visible in a right-side region while the user configures the upgrade.
- Do not obscure the primary form, selected options or keyboard focus.
- Keep the final review in normal document order even when a visual two-column layout is used.

### Mobile and narrow widths

- Present a clearly labelled `Review Upgrade Impact` control after meaningful changes.
- Show a short current-impact summary without hiding material conditions.
- Expand to the complete grouped review before commitment.
- Preserve the user's position and focus when opening, closing or editing the summary.
- Reflow at 320 CSS pixels without clipped values or required horizontal scrolling.

## Required supporting states

The six primary screens should be supplemented by a compact state set rather than full duplicate pages:

| State | Demonstration treatment | Source |
|---|---|---|
| Recalculating | Inline progress in Upgrade Impact; retain the previous valid values until replacement values are ready | `STATE-006` |
| Estimate unavailable | Explain that trade-in cannot be estimated; allow retry, correction or continuation without trade-in | `STATE-009`, `STATE-010` |
| Session interruption | Preserve non-sensitive choices and explain what must be refreshed | `STATE-011`, `STATE-012` |
| Submission processing | Disable repeat submission and announce progress | `NODE-009`, `A11Y-006`, `A11Y-009` |
| Unknown submission result | Verify order status before enabling retry | `NODE-010`, `NODE-011`, `STATE-013` |
| Confirmation | Show one fictional order ID, submitted snapshot and next steps | `STATE-014`, `STATE-015` |

## Figma build priorities

### Priority 1 — Conversion-critical happy path

- `FSCREEN-002` through `FSCREEN-006`
- Live Upgrade Impact component
- Trade-in estimate and status language
- Editable final review
- Explicit commitment action

### Priority 2 — Responsive proof

- One narrow-width configuration screen
- One narrow-width Upgrade Impact review
- One narrow-width final review

### Priority 3 — Credibility and recovery

- Recalculation
- Estimate unavailable
- Submission processing
- Unknown-result recovery

## Acceptance criteria for the mapped design

- A reviewer can identify due-today, next-bill and ongoing monthly impact without calculating across screens.
- The trade-in value is never presented as guaranteed.
- The timing and conditions of credits are visible before commitment.
- Plan effect is stated explicitly, including when there is no change.
- Every material section in the final review has a direct correction path.
- `Place upgrade order` is the only action that represents financial commitment.
- The confirmation reflects the same submitted impact snapshot shown in the final review.
- Desktop and narrow-width layouts preserve complete information and actions.
- All customer, product, account, price and order information used in the submission is visibly fictional or synthetic.
- The design makes no claim that conversion will improve; conversion impact remains a hypothesis for validation.

## Decision needed after mapping

Before altering the supplied Figma file, decide whether to:

1. Create a clearly labelled synthetic future-state page in the same file, preserving the reference frames untouched; or
2. Create the synthetic future-state design in a separate Figma file.

The safer academic-evidence option is a separate file or a clearly isolated page named `SYNTHETIC FUTURE STATE — Upgrade With Confidence`.

