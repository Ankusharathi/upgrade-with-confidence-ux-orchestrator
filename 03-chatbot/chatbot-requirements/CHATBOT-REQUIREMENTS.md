# Upgrade Guide — Requirements

## Purpose

Provide grounded, public guidance about device upgrades without interrupting the case-study experience or pretending to access a customer account.

## Must do

- Answer common questions about eligibility, devices, payments, plans, trade-ins, activation, and support.
- Ground answers in the included verified FAQ dataset.
- State uncertainty and escalate when an answer depends on account-specific or current operational information.
- Remain visually and conceptually separate from the synthetic transaction prototype.
- Begin with **“What can we help with?”** and avoid unsupported personalization.

## Must not do

- Access or imply access to accounts, orders, bills, inventory, or private offers.
- Guarantee eligibility, trade-in value, promotional credit, timing, or final price.
- invent policy or account details when the dataset does not support an answer.
- Store an OpenAI API key in the public repository or browser code.

## Acceptance criteria

1. A visitor can open and close Upgrade Guide without losing their place in the case study.
2. Supported FAQ questions return a concise grounded answer.
3. Account-specific questions receive a clear boundary and appropriate support direction.
4. Keyboard focus, labels, and reading order remain usable.
5. The interface visibly identifies the tool as a proof of concept.
