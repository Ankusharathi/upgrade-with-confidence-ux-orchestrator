# Phase 3: Define

## Purpose

Convert approved evidence into an agreed problem and opportunity space without disguising assumptions, stakeholder preferences, or proposed solutions as user findings.

## Contract

| Item | Definition |
|---|---|
| Primary agent | UX Synthesis Agent |
| Supporting agents | UX Journey Architecture Agent; UX Opportunity Agent |
| Required input | Approved Research Findings and passing Discover gate |
| Primary artifact | Problem Definition |
| Supporting artifacts | Insight Synthesis, Opportunity Map, Opportunity Prioritization, and applicable Journey Map, Information Architecture, or Task Flow |
| Default formats | FigJam journeys, opportunity maps, IA, and task flows; Word/PDF stakeholder report; Excel/CSV prioritization and traceability; Markdown workflow record |
| Accountable human owner | UX Lead or explicitly named Problem Owner |
| Gate question | Is the problem framing supported and approved? |
| Gate template | `../../templates/DEFINE-GATE-RESULT.md` |
| Next phase | Design |

## Entry conditions

Define may start only when the current Research Findings are `approved`, the Discover gate is `pass` with `next_phase: define`, and limitations, unresolved questions, risks, and accepted evidence boundaries are carried forward.

If evidence is insufficient for a decision-critical claim, return the gap to Discover. Do not repair missing evidence with a plausible insight or persona.

## Workflow

1. **Load approved context.** Read the approved UX Brief, Research Findings, Evidence Register, Discover approval decision, gate result, handoff, and project state.
2. **Verify evidence eligibility.** Exclude synthetic, unapproved, superseded, or otherwise decision-ineligible inputs from real problem framing. Record exclusions rather than silently dropping them.
3. **Cluster evidence.** Use `../../skills/cluster-research-evidence.md` and `../../templates/INSIGHT-SYNTHESIS.md` to group approved findings while preserving context, contradictions, negative cases, variation, and inference limits.
4. **Formulate insights.** Use `../../skills/formulate-ux-insights.md`. Each insight must link evidence, interpretation, alternatives, implication, confidence, and evidence needed to raise confidence.
5. **Model the journey and structure when applicable.** The UX Journey Architecture Agent uses `../../skills/map-user-journeys.md`, `../../skills/define-information-architecture.md`, and `../../skills/model-task-flows.md` with their matching templates. Define outputs must be current-state evidence or clearly labeled hypotheses; approved future-state behavior belongs to Design.
6. **Frame problems.** Use `../../skills/frame-ux-problems.md` and `../../templates/PROBLEM-DEFINITION.md`. Keep affected users or roles, context, barrier, consequence, evidence boundary, and solution-language check explicit.
7. **Map and prioritize opportunities.** The UX Opportunity Agent uses `../../skills/map-ux-opportunities.md`, `../../skills/prioritize-ux-opportunities.md`, `../../templates/OPPORTUNITY-MAP.md`, and `../../templates/OPPORTUNITY-PRIORITIZATION.md`. Preserve uncertainty, dependencies, specialist decisions, and disagreement.
8. **Define outcomes.** Use `../../skills/define-outcomes-success-signals.md`. Keep desired outcomes distinct from features and record baseline and target status without invention.
9. **Review completeness.** Evaluate the Problem Definition and supporting artifacts against the gate criteria and create `../../templates/DEFINE-GATE-RESULT.md`.
10. **Return the handoff.** Create `../../templates/DEFINE-HANDOFF.md` and pause for the accountable human owner.
11. **Record approval.** Only after explicit human approval, mark the Problem Definition `approved`, record the decision, set the gate to `pass`, update project state, and route the approved package to Design.

When Define is being tested, evaluate the complete run with `../../templates/DEFINE-EVALUATION.md`. Workflow-test success, artifact approval, and product-gate passage remain separate.

## Problem Definition requirements

The artifact must:

- reference the approved Research Findings and evidence identifiers;
- identify affected users, context, behaviors, needs, obstacles, and outcomes only to the extent supported;
- distinguish evidence, synthesis, assumptions, hypotheses, implications, and recommendations;
- frame problem statements without embedding a preferred solution;
- define in-scope and out-of-scope boundaries;
- identify opportunity areas and prioritize them using explicit criteria;
- state desired outcomes and measurable signals without inventing baselines or targets;
- preserve contradictions, excluded evidence, limitations, accessibility and inclusion implications, dependencies, risks, and open questions;
- identify decisions belonging to Product, Legal, Privacy, Security, Accessibility, Engineering, or another specialist;
- name the next consumer and validation needs for Design.

## Supporting artifact requirements

The Insight Synthesis must preserve input eligibility, cluster membership, evidence IDs, contradictions, segment variation, inference boundaries, alternatives, and confidence. The Opportunity Map and Opportunity Prioritization must keep outcome spaces separate from features, define ordinal criteria, avoid false numeric precision, distinguish value from feasibility, and record relationships, disagreements, dependencies, evidence gaps, and return-to-Discover decisions.

When journey, IA, or task-flow work is in scope, each artifact must declare its mode and evidence classification. Current-state claims require approved evidence. Future-state and hypothesis outputs must not be presented as observed behavior, validated navigation, or approved design.

## Gate definition

**Artifact evaluated:** Problem Definition

**Accountable human owner:** UX Lead or named Problem Owner

### Automated completion criteria

- required artifact metadata conforms to the Artifact Contract;
- the approved Discover artifact and gate decision are referenced;
- every problem statement and priority links to traceable approved evidence;
- unsupported assumptions and hypotheses remain labeled;
- user needs and pain points are not created from stakeholder opinion or expert review alone;
- problem statements describe users, context, barrier, and consequence without prescribing a solution;
- opportunity prioritization uses explicit criteria and preserves material disagreements;
- journey, IA, and task-flow artifacts declare their mode, evidence boundary, assumptions, missing states, and validation needs when included;
- scope, exclusions, dependencies, constraints, risks, and open questions are visible;
- desired outcomes map to evidence and approved business goals without invented targets;
- accessibility, inclusion, privacy, safety, and operational implications are considered;
- recommendations do not silently expand the approved scope;
- decision-critical evidence gaps are returned to Discover;
- the accountable human explicitly approves the current version before `pass`.

### Outcome routing

| Outcome | Use when | Destination |
|---|---|---|
| `pass` | Criteria pass and the accountable human approves the Problem Definition | Design |
| `revise` | Synthesis or framing has correctable gaps | UX Synthesis Agent |
| `human-decision` | Priority, scope, risk acceptance, or approval is pending | Accountable human owner |
| `blocked` | Required approved evidence or decision authority is unavailable | Orchestrator; remain in Define or return to Discover |

## Exit conditions

Define is complete only when the current Problem Definition is `approved`, its decision is recorded, the gate is `pass` with `next_phase: design`, and unresolved evidence boundaries and risks are carried into the Design handoff.

## Revision rules

- Preserve the artifact identifier and increment the version for revisions.
- Never overwrite an approved version; supersede it only after a replacement is approved.
- New evidence that changes the problem returns through Discover and Define review.
- A proposed solution that changes the problem or scope requires a recorded human decision.
