# Phase 4: Design

## Purpose

Develop an evidence-informed experience direction that completely describes intended behavior, states, content, accessibility expectations, and validation assumptions before testing.

## Contract

| Item | Definition |
|---|---|
| Primary agent | UX Design Agent |
| Supporting agents | UX Journey Architecture Agent |
| Required input | Approved Problem Definition and passing Define gate |
| Primary artifact | Design Specification |
| Supporting artifacts | Design Direction, future-state Journey Map, proposed Information Architecture, Task Flow, Interaction and State Specification, UX Content Specification, Accessibility Design Specification, and Design Traceability |
| Default formats | Figma Design for designs and prototypes; FigJam for supporting journeys and flows; Word/PDF design review; Excel/CSV registers; Markdown workflow record |
| Accountable human owner | UX Lead or explicitly named Design Owner |
| Gate question | Is the design direction complete and approved for validation? |
| Gate template | `../../templates/DESIGN-GATE-RESULT.md` |
| Next phase | Validate |

## Entry conditions

Design may start only when the current Problem Definition is `approved`, the Define gate is `pass` with `next_phase: design`, and approved scope, evidence boundaries, success criteria, risks, and open questions are carried forward.

If Define inputs are synthetic, hypothetical, unapproved, or blocked, Design may run only as an explicitly authorized workflow test. Its outputs remain hypotheses and cannot pass the real Design gate.

## Workflow

1. **Load approved context.** Read the approved Problem Definition, Insight Synthesis, opportunity artifacts, Define decision, gate, handoff, requirements, and project state.
2. **Verify entry and scope.** Confirm exact versions, evidence eligibility, accountable owner, design decision, constraints, and return-to-Define conditions.
3. **Frame directions.** Use `../../skills/translate-problems-to-design-directions.md` and `../../templates/DESIGN-DIRECTION.md` to compare outcome-linked directions, trade-offs, dependencies, risks, and validation needs.
4. **Model the future state.** Coordinate the UX Journey Architecture Agent with `../../skills/model-future-state-experience.md` and the shared Journey Map, Information Architecture, and Task Flow templates. Use `future-state` or `proposed` mode, never `current-state`.
5. **Specify interactions and states.** Use `../../skills/specify-interactions-and-states.md` and `../../templates/INTERACTION-STATE-SPECIFICATION.md`. Cover success, loading, empty, permission, unavailable, error, interruption, timeout, recovery, confirmation, cancellation, retry, and post-task behavior.
6. **Specify content.** Use `../../skills/write-ux-content-specification.md` and `../../templates/UX-CONTENT-SPECIFICATION.md`. Record exact, draft, and requirement-only content distinctly with owners and review status.
7. **Specify accessibility.** Use `../../skills/specify-accessible-design.md` and `../../templates/ACCESSIBILITY-DESIGN-SPECIFICATION.md`. Requirements must be testable and must not claim conformance.
8. **Maintain traceability.** Use `../../skills/maintain-design-traceability.md` and `../../templates/DESIGN-TRACEABILITY.md` to connect requirements, problems, outcomes, decisions, flows, states, content, accessibility, dependencies, and validation.
9. **Assess feasibility inputs.** Use `../../skills/assess-design-feasibility-inputs.md`. Record specialist-owned items as confirmed, conditional, pending, or blocked without inventing approval.
10. **Prepare validation.** Use `../../skills/prepare-design-validation.md` to define hypotheses, questions, tasks, criteria, critical errors, representative coverage, fidelity, test data, authorization, and specialist checks.
11. **Assemble the Design Specification.** Use `../../templates/DESIGN-SPECIFICATION.md`, then evaluate it with `../../templates/DESIGN-GATE-RESULT.md`.
12. **Return the handoff.** Create `../../templates/DESIGN-HANDOFF.md` and pause for explicit human approval.
13. **Record approval.** Only after approval, mark the Design Specification `approved`, record the decision, set the gate to `pass`, update state, and route the exact approved package to Validate.

When Design is being tested, use `../../templates/DESIGN-EVALUATION.md`. Workflow-test success, design approval, feasibility confirmation, participant-research authorization, and gate passage remain separate states.

## Design Specification requirements

The artifact must:

- reference approved problem statements, evidence, requirements, and decisions;
- cover the end-to-end journey, entry and exit points, roles, permissions, account categories, and supported channels;
- inventory standard, loading, empty, permission, unavailable, error, recovery, confirmation, interruption, timeout, and post-task states;
- define navigation, interactions, content, hierarchy, system feedback, review, correction, cancellation, retry, and duplicate-prevention behavior;
- define commercial, privacy, security, data-exposure, analytics, and operational considerations at the appropriate level;
- document responsive behavior and platform differences;
- include accessibility requirements for structure, labels, keyboard, focus, status, errors, contrast, zoom, reflow, motion, target size, and assistive-technology behavior as applicable;
- identify components, patterns, tokens, assets, content ownership, dependencies, feasibility assumptions, and unresolved decisions;
- map design choices to evidence or clearly labeled hypotheses;
- define what Validate must test and the criteria for success.

## Supporting artifact requirements

- Design Direction records alternatives, trade-offs, assumptions, risks, and the human selection decision.
- Future-state Journey, IA, and Task Flow artifacts declare their proposed mode and do not impersonate observed current behavior.
- Interaction and State Specification covers consequential and recovery behavior, not only the happy path.
- UX Content Specification separates requirements, drafts, reviewed copy, and approved copy with ownership.
- Accessibility Design Specification provides testable expected behavior and verification methods without certification claims.
- Design Traceability identifies uncovered requirements, unsupported elements, orphaned states, deferred items, and validation coverage.

## Gate definition

**Artifact evaluated:** Design Specification

**Accountable human owner:** UX Lead or named Design Owner

### Automated completion criteria

- required metadata and approved Define inputs are referenced;
- all in-scope roles, account categories, tasks, branches, and consequential states are covered or explicitly deferred;
- requirements, problems, design decisions, and validation criteria are traceable;
- account, line, role, transaction, and system status remain clear where consequential;
- financial, service, permission, eligibility, error, recovery, and post-task behavior is explicit;
- content is reviewable and ownership is named;
- accessibility requirements are testable and unresolved specialist decisions are routed;
- privacy, security, legal, operational, data, and analytics dependencies are recorded without invented approval;
- responsive and platform behavior is specified;
- feasibility is confirmed, conditional, or explicitly blocked by a named owner;
- known assumptions and prototype limitations remain visible;
- content status and ownership are explicit, and no unapproved policy or commercial claim is presented as final;
- future-state journey, IA, and task flow outputs use proposed modes and trace to approved inputs;
- every material design element maps upstream to an approved input or labeled hypothesis and downstream to validation;
- validation tasks and success criteria follow from the approved problem;
- the accountable human explicitly approves the current version before `pass`.

### Outcome routing

| Outcome | Use when | Destination |
|---|---|---|
| `pass` | Criteria pass and the accountable human approves the Design Specification | Validate |
| `revise` | Design coverage, traceability, interaction, content, or specification gaps are correctable | UX Design Agent |
| `human-decision` | Direction, feasibility tradeoff, scope, or risk acceptance is pending | Accountable human or named specialist owner |
| `blocked` | Required decision, specialist input, source material, or safe technical basis is unavailable | Orchestrator; remain in Design or return to Define |

## Exit conditions

Design is complete only when the current Design Specification is `approved`, its decision is recorded, the gate is `pass` with `next_phase: validate`, and the validation handoff contains the approved design version, criteria, hypotheses, risks, and required participant or specialist coverage.

## Revision rules

- Preserve the artifact identifier and increment its version.
- Never overwrite an approved version.
- A design change that alters the approved problem or scope returns to Define.
- A material change after validation requires proportionate revalidation.
- Expert evaluation is not a substitute for user or implementation evidence.
- A complete specification is not proof that the design is usable, accessible, feasible, or effective.
