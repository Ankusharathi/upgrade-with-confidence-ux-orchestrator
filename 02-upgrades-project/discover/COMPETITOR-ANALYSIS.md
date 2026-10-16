# Competitor and Adjacent-Pattern Analysis

## Evidence status

This is a dated review of publicly available information accessed on October 11, 2026. It is not customer research, a complete authenticated-flow audit, or proof of usability.

## Decision supported

Which cost and account-impact categories should a synthetic upgrade experience make easy to review before commitment?

| Product | Relationship | Publicly observable pattern | Evidence | Limitation |
|---|---|---|---|---|
| Verizon | Direct carrier | Upgrade eligibility, plan choice, possible fee, promotion-credit timing, qualifying-plan conditions, and consequences of early payoff or upgrade are documented across support pages. | [Upgrade FAQs](https://www.verizon.com/support/upgrade-device-faqs/), [device deals FAQs](https://www.verizon.com/support/device-deals-faqs/) | Signed-in order flow was not reviewed; this project does not claim Verizon customer evidence. |
| AT&T | Direct carrier | Public guidance identifies upgrade fees, plan constraints, account locks, trade-in programs, and possible limits when keeping an older plan. | [Upgrade eligibility and options](https://www.att.com/support/article/wireless/KM1002380/), [trade-in program](https://tradein.att.com/) | Automated access to trade-in details was partial. |
| T-Mobile | Direct carrier | Trade-in estimation is separated from additional promotional value; public offers expose taxes, connection charges, qualifying service, recurring credits, and early-payoff or cancellation consequences. | [Trade-in page](https://www.t-mobile.com/devices/phone-trade-in/), [offers](https://www.t-mobile.com/offers) | Promotions are temporary, and the personalized upgrade flow was not reviewed. |
| Google Store | Adjacent device retailer | Trade-in value is explicitly described as estimated and subject to inspection after receipt. | [Estimated trade-in value](https://support.google.com/store/answer/13982671?co=GENIE.CountryCode%3DUS&hl=en) | Does not include carrier plan impacts. |

## Cross-product patterns

1. **Estimate versus final value:** trade-in amounts may depend on later inspection.
2. **Immediate versus delayed value:** a customer can owe money now while promotional credits arrive over later bills.
3. **Device price versus account impact:** the advertised device amount may depend on a qualifying service plan or account condition.
4. **Offer value versus commitment:** receiving the full value may require maintaining service or installments for a stated term.
5. **Eligibility versus readiness:** being eligible to upgrade does not guarantee that all promotion, account, or device conditions are satisfied.

## Design opportunities requiring validation

- Present five categories together: due today, estimated monthly bill, trade-in status, promotion timeline, and plan or account changes.
- Label each amount as confirmed, estimated, conditional, or delayed.
- Explain what could change an amount and when the customer will know.
- Provide an editable confirmation step before placing the order.
- Avoid using a headline promotional value as a substitute for the actual personalized financial impact.

These are design opportunities derived from public patterns. They are not validated customer needs or proven conversion tactics.
