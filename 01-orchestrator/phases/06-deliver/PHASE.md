# Phase 6: Deliver

## Purpose

Make the approved, validated design implementation-ready, versioned, traceable, and reviewable without silently changing the design or hiding unresolved implementation risk.

## Contract

| Item | Definition |
|---|---|
| Primary agent | UX Delivery Agent |
| Supporting agents | UX QA Agent; UX Design, Journey Architecture, and Validation agents when clarification or revision is required |
| Required input | Approved Validation Report and passing Validate gate |
| Primary artifact | Handoff Package |
| Supporting artifacts | Implementation Specification, Design-System Component Map, Analytics and Measurement Plan, Implementation Question Log, Delivery Change Log, Delivery Traceability, UX QA Plan, UX QA Checklist, UX QA Defect Register, Implementation Fidelity Review, and Release UX Readiness |
| Default formats | Figma Design implementation reference; Word/PDF handoff report; Excel/CSV registers; Jira/Linear-compatible defect and change lists; Markdown workflow record |
| Accountable human owner | UX Lead or explicitly named Handoff Owner, with implementation-owner acceptance |
| Gate question | Is the approved experience implementation-ready, QA-ready, accepted by accountable owners, and safely closable as a UX workflow package? |
| Gate template | `../../templates/DELIVER-GATE-RESULT.md` |
| Next phase | Complete, or return to Design or Validate for missing work |

## Entry conditions

Deliver may start only when the Validation Report is `approved`, the Validate gate is `pass` with `next_phase: deliver`, the exact approved design version is identified, accepted risks are recorded, and implementation owners are named.

If the Validate input is synthetic, hypothetical, unapproved, or blocked, Deliver may run only as an explicitly authorized workflow test. Synthetic packages may test handoff and QA routing, but cannot prove implementation readiness, create build evidence, close defects, pass the real Deliver gate, or authorize release.

## Workflow

1. **Load approved context.** Read the approved problem, design, validation, decisions, gates, handoffs, accepted risks, open issues, and project state.
2. **Verify entry and ownership.** Confirm exact versions, source-of-truth locations, implementation owner, UX owner, UX QA owner, engineering-QA interfaces, release authority, and return routes.
3. **Prepare the handoff.** Use `../../skills/prepare-implementation-handoff.md` and `../../templates/HANDOFF-PACKAGE.md` to index the complete package and ownership.
4. **Specify implementation behavior.** Use `../../skills/specify-implementation-behavior.md` and `../../templates/IMPLEMENTATION-SPECIFICATION.md` for flows, states, rules, dependencies, and acceptance criteria.
5. **Map components and measurement.** Use `../../skills/map-design-system-components.md`, `../../templates/DESIGN-SYSTEM-COMPONENT-MAP.md`, `../../skills/define-analytics-measurement.md`, and `../../templates/ANALYTICS-MEASUREMENT-PLAN.md`.
6. **Manage questions and change.** Use `../../skills/manage-implementation-decisions.md`, `../../templates/IMPLEMENTATION-QUESTION-LOG.md`, `../../skills/control-delivery-changes-revalidation.md`, and `../../templates/DELIVERY-CHANGE-LOG.md`.
7. **Maintain traceability.** Use `../../skills/maintain-delivery-traceability.md` and `../../templates/DELIVERY-TRACEABILITY.md`.
8. **Plan UX QA.** Coordinate the UX QA Agent with `../../skills/plan-ux-qa.md`, `../../templates/UX-QA-PLAN.md`, and `../../templates/UX-QA-CHECKLIST.md`.
9. **Review implemented fidelity and behavior.** Use `../../skills/execute-design-fidelity-review.md`, `../../skills/verify-interaction-and-state-coverage.md`, `../../skills/verify-content-and-accessibility-implementation.md`, and `../../templates/IMPLEMENTATION-FIDELITY-REVIEW.md`. Do not claim execution without a real identified build and evidence.
10. **Triage defects.** Use `../../skills/triage-ux-qa-defects.md` and `../../templates/UX-QA-DEFECT-REGISTER.md`; require evidence for fixes and retest.
11. **Assess readiness.** Use `../../skills/assess-release-ux-readiness.md`, `../../templates/RELEASE-UX-READINESS.md`, and `../../skills/assess-delivery-readiness.md`.
12. **Evaluate and hand off.** Complete `../../templates/DELIVER-GATE-RESULT.md` and `../../templates/DELIVER-HANDOFF.md`; pause for accountable UX-owner and implementation-owner acceptance.
13. **Close the UX workflow.** Only after the Handoff Package is approved, blocking defects and revalidation are resolved or authorized, both owners accept the exact version, and the gate is `pass`, set `next_phase: complete`. Production release remains outside this gate.

For workflow testing, use `../../templates/DELIVER-EVALUATION.md`. Workflow-test approval, handoff approval, QA execution, UX readiness, engineering-QA completion, owner acceptance, gate passage, workflow completion, and production release are separate states.

## Handoff Package requirements

The artifact must:

- identify the approved problem, design, validation, decision, and source-of-truth versions;
- map requirements, flows, screens, states, components, content, rules, data, analytics, acceptance criteria, and test coverage;
- specify roles, permissions, account categories, responsive behavior, platform behavior, loading, empty, unavailable, error, recovery, timeout, confirmation, interruption, and post-task states;
- provide interaction annotations, content strings and ownership, component and token references, asset status, redlines or measurements where needed, and implementation dependencies;
- include testable accessibility requirements and implementation-stage accessibility verification;
- document privacy, security, legal, commercial, data, instrumentation, operational, and support obligations with their owners;
- define acceptance criteria for consequential behavior, duplicate prevention, review, correction, and recovery;
- preserve validation limitations, accepted risks, known debt, deferred scope, open questions, and escalation paths;
- define design-QA scope, environments, owners, timing, defect routing, and completion evidence;
- record UX-owner and implementation-owner acceptance.

## UX QA requirements

- UX QA identifies the exact approved design, implementation specification, build, environment, data, and test versions.
- Coverage includes visual fidelity, responsive and platform behavior, content, interactions, consequential and recovery states, accessibility behavior, and analytics as applicable.
- Every executed check records setup, expected behavior, observed behavior, result, evidence, and linked defect.
- Every defect records reproducible evidence, type, severity, confidence, consequence, recoverability, owner, route, fix evidence, and retest status.
- Open blocker and critical UX defects prevent readiness unless an authorized human explicitly records deferral or risk acceptance.
- Content and accessibility implementation checks preserve specialist authority and never claim certification from incomplete methods.
- Engineering functional, integration, security, performance, regression, and operational QA evidence is referenced but not impersonated by UX QA.
- Untested coverage, unavailable environments, unverified fixes, material changes, and revalidation needs remain explicit.
- Release UX Readiness is a recommendation; production release authority remains outside the UX workflow.

## Gate definition

**Artifact evaluated:** Handoff Package

**Accountable human owner:** UX Lead or named Handoff Owner, plus implementation owner

### Automated completion criteria

- required metadata and exact approved source versions are present;
- all approved requirements and validation findings trace to implementation specifications or recorded deferrals;
- every in-scope flow and state has implementation-ready behavior and acceptance criteria;
- content, components, tokens, assets, responsive rules, and platform differences are versioned and owned;
- accessibility requirements are testable and implementation verification is planned;
- data, analytics, privacy, security, legal, operational, and support dependencies are assigned;
- accepted risks, known debt, exclusions, unresolved questions, and decision owners remain visible;
- design-QA scope, environment, timing, evidence, and issue routing are defined;
- an identified implementation build exists before QA is marked executed;
- required UX QA coverage is executed or explicitly blocked, deferred, or not applicable with authority;
- critical UX defects are resolved, verified, explicitly deferred, or accepted by an authorized owner;
- content, accessibility behavior, analytics, responsive behavior, and consequential states have traceable implementation evidence or explicit gaps;
- material implementation changes have completed required Design review, revalidation, and QA retest;
- relevant engineering-QA dependencies and their status are visible without being inferred;
- Release UX Readiness distinguishes UX recommendation from production release authority;
- no unapproved design change is hidden inside the handoff;
- blockers are resolved or explicitly accepted by an authorized owner;
- UX and implementation owners accept the current package before `pass`.

### Outcome routing

| Outcome | Use when | Destination |
|---|---|---|
| `pass` | Package is implementation-ready and both accountable owners accept it | Complete |
| `revise` | Documentation gaps return to Delivery; implementation defects return to implementation; design gaps return to Design; validation gaps return to Validate | Destination recorded in `revision_route` |
| `human-decision` | Acceptance, implementation tradeoff, ownership, or risk decision is pending | Accountable UX and implementation owners |
| `blocked` | Approved source, owner, feasibility decision, asset, dependency, or safe implementation basis is unavailable | Orchestrator; remain in Deliver |

## Exit conditions

Deliver is complete only when the current Handoff Package is `approved`, UX and implementation acceptance decisions are recorded, the gate is `pass` with `next_phase: complete`, project state preserves accepted risks and known debt, and implementation and design-QA owners know the next action.

## Revision rules

- Preserve artifact IDs and increment versions; never overwrite approved handoff packages.
- Route behavior changes to Design and material outcome changes through revalidation.
- Record implementation-driven deviations and obtain the appropriate design and validation decision.
- A passed Deliver gate closes the UX workflow package; it does not certify production quality before implementation QA is complete.
- Any fix or change affecting approved behavior, evidence validity, accessibility, analytics, or user outcome receives proportionate design review, revalidation, and UX QA retest.
- Engineering QA, security review, performance testing, automated regression, operational readiness, and production release retain their own accountable owners and gates.
