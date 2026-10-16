---
name: prd-brd-analysis
description: Analyze a PRD, BRD, product brief, or comparable requirements document during UX Intake to identify its intent, evidence quality, internal consistency, and decision-relevant gaps without treating every statement as validated fact.
---

# PRD and BRD Analysis

## Goal

Turn a supplied requirements document into a traceable analysis that preserves what the document says while exposing unsupported claims, contradictions, and missing information.

## Analysis

1. Record the source document, version or date when known, author or source when known, and approval status.
2. Identify the document's product, business intent, requested outcome, proposed solution, intended decision, users, surfaces, market, and release context.
3. Classify material statements as:
   - `confirmed-fact`: validated by an approved or authoritative source;
   - `explicitly-stated`: directly stated in the supplied document but not independently validated;
   - `assumption`: implied or provisionally believed;
   - `unknown-gap`: required for a confident UX decision but currently missing.
4. Identify contradictions, ambiguous terms, overlapping boundaries, unstated ownership, and requirements without a source.
5. Inventory evidence referenced by the document and state exactly what each source supports.
6. Assess whether the document is sufficient for requirement extraction and stakeholder questioning. Do not approve the document or product direction.

## Rules

- A statement being present in a BRD or PRD does not make it user evidence.
- Do not convert desired features, example quotations, personas, needs, metrics, or deadlines into validated facts without provenance.
- Preserve exact business terminology when it affects scope or routing.
- Retain uncertainty explicitly; do not repair contradictions by guessing.
- Do not begin solution design or research execution.

## Output

Create a document analysis using `../templates/DOCUMENT-ANALYSIS.md`. It must contain source metadata, intent, classification of statements, evidence inventory, contradictions, limitations, gaps, and a sufficiency assessment. Pass it to `requirement-extraction` and `ux-question-framing`.
