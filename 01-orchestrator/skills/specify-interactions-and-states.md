---
name: specify-interactions-and-states
description: Define screen or surface behavior, interactions, state transitions, feedback, validation, recovery, responsive rules, and consequential-action protections for a complete design specification.
---

# Specify Interactions and States

## Goal

Make intended behavior unambiguous enough for validation and later implementation planning.

## Method

1. Inventory surfaces and states using stable IDs linked to task-flow nodes.
2. For each state, define purpose, displayed information, controls, inputs, defaults, rules, feedback, navigation, focus intent, persistence, and exit behavior.
3. Specify loading, empty, permission, unavailable, error, interruption, timeout, recovery, confirmation, cancellation, retry, and post-task states.
4. For consequential actions, define prevention, review, correction, confirmation, reversibility, idempotency, and status verification.
5. Define responsive and platform changes without removing essential information or actions.
6. Record assumptions, unresolved system behavior, dependencies, analytics needs, and validation criteria.

## Rules

- Do not specify only the happy path.
- Do not hide unknown behavior behind “system handles it.”
- Defaults that change cost, service, privacy, or irreversible state require explicit rationale and review.
- Static design cannot prove runtime behavior.

## Output

Create `../templates/INTERACTION-STATE-SPECIFICATION.md` and link all states to the main Design Specification.

