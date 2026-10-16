---
name: create-ux-brief
description: Draft a versioned UX Brief from parsed intake material using the artifact contract and preserving evidence provenance, uncertainty, and human decision authority.
---

# Create UX Brief

## Goal

Produce the smallest complete brief that makes Discover purposeful and reviewable.

## Method

1. Start from `../templates/UX-BRIEF.md` and assign stable identifiers.
2. State the requested outcome and the decision to be supported. If either is uncertain, label it and add an open question.
3. Record target users, context, scope, exclusions, constraints, dependencies, success signals, and evidence needs.
4. Keep known context, evidence, supplied claims, interpretations, and assumptions in their own sections.
5. Form a small set of research questions that reduce uncertainty relevant to the decision. Do not imply a preferred research method unless a constraint genuinely requires one.
6. Carry privacy, consent, inclusion, accessibility, and safety considerations into the brief.
7. Link risks, questions, and decisions by identifier.
8. Set status to `draft`; use `agent-reviewed` only after the Intake quality check passes.

## Quality standard

A reader unfamiliar with the original request should understand why the work exists, what decision it supports, what is known, what remains uncertain, what is in and out, and what Discover should investigate next.

## Prohibitions

- Do not invent quantitative targets or baselines.
- Do not present hypotheses as findings.
- Do not select a solution or approve problem framing.
- Do not set the artifact to `approved` without a recorded human approval decision.
