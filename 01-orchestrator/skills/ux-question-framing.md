---
name: ux-question-framing
description: Turn Intake gaps, assumptions, conflicts, and decision needs into prioritized stakeholder clarification questions, evidence requests, and initial UX research questions without asking stakeholders to speak for users.
---

# UX Question Framing

## Goal

Produce the smallest useful set of questions that resolves material Intake uncertainty and gives Discover a credible evidence frame.

## Question types

Create three distinct groups:

1. **Stakeholder clarification questions** — ownership, business goals, scope, terminology, constraints, policies, dependencies, priorities, timelines, and approval decisions.
2. **Evidence requests** — existing research, analytics, support themes, operational data, policies, system rules, accessibility findings, and prior decisions.
3. **Initial UX research questions** — user behavior, needs, mental models, comprehension, accessibility, context, and usability that require user or behavioral evidence.

## Method

For each question, record:

- stable identifier;
- question type;
- one clear, neutral question;
- why the answer matters;
- answer owner or evidence owner;
- priority: `blocking`, `before-discover`, `during-discover`, or `later`;
- related requirement, assumption, risk, gap, or decision identifiers;
- status: `open`, `answered`, `deferred`, or `superseded`;
- answer and source when resolved.

Ask a question only when its answer changes scope, routing, research method, participant selection, safety, permissions, success criteria, or a consequential product decision. Combine duplicates, but do not combine questions with different owners or decisions.

## Rules

- Do not ask stakeholders to validate user needs, behavior, pain-point prevalence, or usability from opinion alone.
- Convert those uncertainties into research questions or evidence requests.
- Avoid leading, compound, accusatory, or solution-confirming wording.
- Do not ask for information already explicit and unambiguous in an approved source.
- Separate questions required before Discover from questions Discover should investigate.
- Preserve unanswered questions in the UX Brief and handoff.

## Output

Create a stakeholder question pack using `../templates/STAKEHOLDER-QUESTIONS.md` and return initial UX research questions for the UX Brief. The pack is an Intake output and does not itself approve any answer or decision.

