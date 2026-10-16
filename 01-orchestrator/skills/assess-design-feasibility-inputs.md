---
name: assess-design-feasibility-inputs
description: Record design feasibility inputs, dependencies, constraints, owners, evidence, decisions, and status without allowing the UX agent to invent technical, policy, operational, or commercial approval.
---

# Assess Design Feasibility Inputs

## Goal

Make feasibility visible and owned before validation without substituting UX judgment for specialist confirmation.

## Method

1. Inventory technical, data, identity, permission, policy, legal, privacy, security, accessibility, analytics, content, operational, support, and commercial dependencies.
2. Record the requirement, source, owner, decision needed, evidence, status, condition, risk, and affected artifact IDs.
3. Classify each item as `confirmed`, `conditional`, `pending`, or `blocked`.
4. Identify assumptions that require prototype, spike, policy, or specialist validation.
5. Route blocked inputs and material trade-offs to the accountable owner.

## Rules

- The UX Design Agent may document but cannot grant specialist approval.
- “Technically possible” does not mean operationally, legally, or ethically acceptable.
- Conditional feasibility remains visible at the gate.
- Do not hide dependencies in annotation prose.

## Output

Populate feasibility and dependency sections in `../templates/DESIGN-SPECIFICATION.md` and `../templates/DESIGN-GATE-RESULT.md`.

