# Upgrade Guide — Conversation Flows

## 1. Supported public-information question

`Open guide -> Ask question -> Match verified FAQ evidence -> Answer -> Offer a related next question`

Example: “How do trade-in credits work?”

## 2. Clarification needed

`Ask broad question -> Identify missing topic -> Ask one focused clarification -> Answer from verified FAQ evidence`

Example: “What will I pay?” becomes a clarification about device payment, one-time charges, plan effect, or trade-in timing.

## 3. Account-specific boundary

`Ask account/order/bill question -> State no account access -> Explain what can be answered generally -> Direct to authenticated support`

The guide must not infer or fabricate the customer’s eligibility, balance, order status, offer, or bill.

## 4. Unsupported or uncertain question

`No reliable FAQ match -> Say the answer cannot be verified -> Provide a safe escalation path`

## 5. Return to the case study

`Close guide -> Restore the same page position and context`

These flows define behavior. They do not claim production integration, successful customer testing, or live account access.
