---
name: define-outcomes-success-signals
description: Define desired user and product outcomes plus measurable success signals, operational definitions, owners, baseline and target status, and guardrails without inventing metrics or commitments.
---

# Define Outcomes and Success Signals

## Goal

Describe how the team would recognize meaningful improvement while separating desired outcomes, observable signals, approved metrics, and unresolved measurement decisions.

## Method

1. Link each desired outcome to approved problem and opportunity identifiers.
2. State the change expected for the affected user or role without prescribing the design.
3. Identify behavioral, attitudinal, operational, accessibility, business, and guardrail signals appropriate to the outcome.
4. Record the operational definition, population, segment, journey stage, source, owner, cadence, and data-quality needs when known.
5. Record baseline and target values only when approved and traceable; otherwise use `unknown` or `not-approved`.
6. Identify counter-metrics and unintended consequences.
7. Route missing measurement definitions or targets to Product and Analytics owners.

## Rules

- A desired outcome is not a feature acceptance criterion.
- Do not invent a baseline, target, KPI owner, causal relationship, or expected lift.
- Distinguish diagnostic research signals from durable product metrics.
- Preserve segment differences and do not hide harm inside an aggregate.
- Include accessibility, support burden, error, and recovery guardrails where relevant.

## Output

Populate `desired_outcomes` and `success_signals` in `../templates/PROBLEM-DEFINITION.md`, including measurement gaps and decision owners.
