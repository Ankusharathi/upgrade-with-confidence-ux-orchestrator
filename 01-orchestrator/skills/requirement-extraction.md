---
name: requirement-extraction
description: Extract traceable UX-relevant business and product requirements from a PRD, BRD, brief, or intake request while preserving source wording, evidence status, uncertainty, and scope boundaries.
---

# Requirement Extraction

## Goal

Create a complete, source-linked requirement set without inventing missing requirements or confusing proposals with approved facts.

## Required extraction fields

Extract each field when present; otherwise mark it as an `unknown-gap`:

- business goal;
- user goal;
- problem statement;
- target users and authorized actors;
- core use cases and scenarios;
- functional requirements;
- non-functional requirements and constraints;
- assumptions;
- success measures and proposed targets;
- known pain points;
- stakeholders and decision owners;
- dependencies;
- risks;
- in-scope items;
- out-of-scope items;
- open questions.

## Method

For every material extracted item, record:

- a stable identifier;
- the extracted statement;
- source location or source identifier;
- classification: `confirmed-fact`, `explicitly-stated`, `assumption`, or `unknown-gap`;
- approval or verification status when known;
- related requirement, risk, decision, or question identifiers.

Normalize duplicate wording only when meaning is preserved. Retain conflicts as separate items and link them to a clarification question. Separate user needs from business needs and functional requirements from proposed solutions.

## Rules

- Do not infer a user goal from a business goal without labeling the inference.
- Do not convert example scenarios into universal requirements unless the source does so explicitly.
- Do not present proposed metrics as commitments or invent baselines.
- Do not create personas or claim pain-point prevalence without evidence.
- Do not silently add scope.

## Output

Create a requirement inventory using `../templates/REQUIREMENT-INVENTORY.md`. It must support the UX Brief, risk review, stakeholder question pack, and later traceability, and include a concise completeness summary listing present, partial, conflicting, and missing fields.
