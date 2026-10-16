---
name: frame-ux-problems
description: Create evidence-linked UX problem statements that identify affected users or roles, context, barrier, consequence, and uncertainty without embedding a preferred solution.
---

# Frame UX Problems

## Goal

Define the problem clearly enough to guide Design while keeping the solution space open and the evidence boundary visible.

## Method

1. Select approved insights relevant to the decision and scope.
2. Identify the supported affected users or roles and the context in which the problem occurs.
3. State the barrier, unmet outcome, or tension without naming a feature or implementation.
4. State the supported consequence and why it matters.
5. Link supporting and contradicting insight, finding, and evidence identifiers.
6. Record scope, exclusions, assumptions, confidence, open questions, and invalidation conditions.
7. Test for solution language by asking whether multiple materially different designs could address the statement.

## Problem-statement form

`[Supported user or role] in [supported context] encounters [barrier or unmet outcome], which contributes to [supported consequence].`

The form is a guide, not permission to fill missing evidence with plausible language.

## Rules

- Do not start with a feature request such as “users need a dashboard,” “add AI,” or “make a wizard.”
- Do not use “users” when the affected population or role is unknown.
- Do not use a pain point, need, or consequence unsupported by approved evidence.
- Keep business problems and user problems distinct but linked when evidence supports both.
- Return to Discover when a decision-critical element is unknown.

## Output

Populate `problem_statements` and evidence boundaries in `../templates/PROBLEM-DEFINITION.md`.

