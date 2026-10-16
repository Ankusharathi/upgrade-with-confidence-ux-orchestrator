---
name: parse-ux-request
description: Convert an unstructured product or design request into traceable Intake fields while separating stated facts, supplied claims, assumptions, and unknowns.
---

# Parse UX Request

## Goal

Create a faithful structured intake record without interpreting uncertainty away.

## Method

1. Preserve the original request as an input reference.
2. Extract the requested outcome, triggering problem, expected decision, target users, surfaces, timing, constraints, dependencies, supplied success measures, and named owners.
3. Assign each extracted statement one label:
   - `stated-fact`: directly observable administrative context, such as a supplied deadline or named product;
   - `supplied-claim`: a stakeholder assertion that still needs evidence;
   - `evidence-reference`: a traceable source offered in support;
   - `assumption`: an inference being used provisionally;
   - `unknown`: information not available.
4. Classify the request as `ux-engagement`, `ux-adjacent`, `not-ux`, or `unclear` and state the basis.
5. Generate only clarification questions that materially affect routing, scope, participants, safety, authority, or the Discover method.

## Rules

- Do not turn a desired solution into a validated user need.
- Do not call stakeholder opinion user evidence.
- Do not infer demographic characteristics or create personas.
- Retain contradictions as open questions.
- If a low-risk field is missing, record `unknown` and continue.

## Output

Return a structured request digest with classification, extracted statements and their labels, material ambiguities, and recommended routing. The digest is an input to the UX Brief, not an approved artifact.
