# Secondary Research

## Evidence status

This review uses real public sources accessed on October 11, 2026. It contains no Verizon-provided research, real customer records, internal analytics, participant quotations, or proprietary evidence. Findings from general ecommerce research are not treated as telecom-specific prevalence.

## Objective

Identify documented upgrade-cost variables, trade-in uncertainties, checkout patterns, and accessibility safeguards relevant to a synthetic responsive-web upgrade experience.

## Included evidence

| Evidence | Source | What it supports | Important limit |
|---|---|---|---|
| EVID-001 | [Verizon upgrade FAQs](https://www.verizon.com/support/upgrade-device-faqs/) | Eligibility, plan choice, possible upgrade fees, and consequences for existing promotional credits | Public support content, not an authenticated-flow usability study |
| EVID-002 | [Verizon device deals FAQs](https://www.verizon.com/support/device-deals-faqs/) | Credit timing, qualifying-plan conditions, trade-in requirements, and loss of remaining credits under some changes | Offer-specific conditions vary |
| EVID-003 | [AT&T upgrade eligibility and options](https://www.att.com/support/article/wireless/KM1002380/) | Upgrade fees, plan effects, account locks, and legacy-plan promotion limits | Does not show actual customer behavior |
| EVID-004 | [AT&T trade-in program](https://tradein.att.com/) | Promotional trade-in value can be delivered through bill credits and depends on terms | Automated access was partial |
| EVID-005 | [T-Mobile trade-in page](https://www.t-mobile.com/devices/phone-trade-in/) | Trade-in estimate, device-condition questions, and distinction between trade-in value and additional promotion value | Values vary by device and offer |
| EVID-006 | [T-Mobile offers](https://www.t-mobile.com/offers) | Monthly-credit terms, plan requirements, tax, fees, and consequences of early payoff or cancellation | Promotions change over time |
| EVID-007 | [Google Store estimated trade-in value](https://support.google.com/store/answer/13982671?co=GENIE.CountryCode%3DUS&hl=en) | Estimated value can change after device inspection | Adjacent retailer, not a carrier journey |
| EVID-008 | [Baymard payment UX](https://baymard.com/blog/payment-ux) | Visible total cost, accessible order summary, review step, and descriptive action labels; reports 12% survey abandonment when total cost was unavailable upfront | General ecommerce, not telecom-specific |
| EVID-009 | [WCAG 2.2 financial error prevention](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html) | Review, confirmation, and correction safeguards for financial transactions | Does not prescribe one layout |
| EVID-010 | [WCAG 2.2 labels and instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions) | Visible labels and instructions for inputs | One part of broader accessibility coverage |

## Synthesis

### Converging public evidence

- Upgrade cost is multidimensional: a customer may face a due-today amount, a recurring device payment, a changed service-plan price, a one-time fee, tax, and delayed promotional credits.
- Promotional value is conditional. Public carrier pages describe qualifying plans, device condition, return timing, account status, installment terms, and consequences of early payoff, cancellation, or another upgrade.
- A trade-in amount may be an estimate rather than a guaranteed final value. Inspection and actual device condition can change the result.
- General checkout research and WCAG guidance both support a clear review point before a financial commitment, including the ability to inspect and correct information.

### Context-specific differences

- Credit timing, installment length, fees, plan rules, and trade-in requirements differ by carrier and promotion.
- Some public information appears in support pages or detailed terms rather than a single comparative summary.
- The evidence establishes complexity and relevant information categories; it does not establish which item causes the most telecom-upgrade abandonment.

### Unsupported claims

- That cost confusion is the leading cause of real Verizon upgrade abandonment.
- That a summary card will produce a specific conversion lift.
- That any reviewed public carrier experience is preferred or more usable.
- That simulated funnel results represent real customers.

## Evidence gaps

- Direct comprehension and behavior evidence from representative eligible customers.
- Real stage-level funnel data and support-contact reasons.
- Review of authenticated, personalized carrier upgrade experiences.

## Next action

Use the supported information categories to define a design direction, then test comprehension and task completion with clearly labeled synthetic scenarios during Validate.
