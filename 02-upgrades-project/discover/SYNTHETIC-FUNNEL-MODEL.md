# Synthetic Upgrade Funnel Model

> **SYNTHETIC DATA — NOT REAL VERIZON ANALYTICS OR A FORECAST**

This model demonstrates how the project could measure upgrade completion. Every number below is invented for the academic workflow demonstration. The model does not describe actual customers, establish a baseline, or predict conversion lift.

## Measurement boundary

- Population: 1,000 simulated responsive-web sessions
- Start event: upgrade eligibility confirmed
- Completion event: upgrade order confirmed
- Proposed intervention point: cost and account-impact review

## Illustrative model

| Funnel stage | Synthetic baseline | Baseline stage conversion | Synthetic target scenario | Target stage conversion |
|---|---:|---:|---:|---:|
| Eligibility confirmed | 1,000 | — | 1,000 | — |
| Device selected | 760 | 76.0% | 780 | 78.0% |
| Trade-in or offer decision completed | 570 | 75.0% | 620 | 79.5% |
| Upgrade-impact review reached | 410 | 71.9% | 500 | 80.6% |
| Checkout started | 300 | 73.2% | 410 | 82.0% |
| Order confirmed | 230 | 76.7% | 330 | 80.5% |

## Illustrative arithmetic

- Synthetic baseline completion: `230 / 1,000 = 23%`
- Synthetic target completion: `330 / 1,000 = 33%`
- Illustrative absolute difference: `10 percentage points`
- Illustrative relative difference: `(33% - 23%) / 23% = 43.5%`

These calculations demonstrate measurement language only. They must never be presented as achieved results, expected lift, or evidence that the proposed design caused an improvement.

## Metrics proposed for a real implementation

- Eligibility-confirmed to order-confirmed completion rate
- Upgrade-impact-review to checkout-start rate
- Checkout-start to order-confirmed rate
- Percentage of users who expand cost explanations
- Percentage who edit a selection from the review step
- Comprehension of due-today cost, monthly bill change, trade-in status, and plan impact
- Upgrade-related support contact or channel-switch rate

## Required validation before real use

A real product team would need event definitions, instrumentation quality checks, customer segments, time ranges, experiment design, privacy review, and an approved baseline before setting or reporting any conversion target.
