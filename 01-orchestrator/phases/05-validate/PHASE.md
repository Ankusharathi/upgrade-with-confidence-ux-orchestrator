# Phase 5: Validate

## Purpose

Evaluate whether the approved design meets its agreed user, accessibility, product, operational, and implementation criteria, while keeping observed evidence separate from recommendations and risk decisions.

## Contract

| Item | Definition |
|---|---|
| Primary agent | UX Validation Agent |
| Supporting agents | UX Research Agent; named accessibility and domain specialists as required |
| Required input | Approved Design Specification and passing Design gate |
| Primary artifact | Validation Report |
| Supporting artifacts | Validation Plan, Validation Scenarios, Readiness Check, Session Records, Evidence Register, Accessibility Validation, Issue Register, and Validation Traceability |
| Default formats | Figma prototype or identified build as test object; Word/PDF validation report; Excel/CSV evidence, session, issue, and traceability registers; Markdown workflow record |
| Accountable human owner | UX Lead or explicitly named Validation Owner |
| Gate question | Does the design meet the agreed validation criteria? |
| Gate template | `../../templates/VALIDATE-GATE-RESULT.md` |
| Next phase | Deliver, or return to Design when criteria are not met |

## Entry conditions

Validate may start only when the Design Specification is `approved`, the Design gate is `pass` with `next_phase: validate`, validation questions and success criteria are explicit, and participant research, recording, sensitive-data access, incentives, and specialist reviews are authorized when applicable.

Do not recruit, contact, schedule, record, incentivize, access sensitive participant data, or execute participant sessions without explicit authorization for the applicable activity.

If the Design input is synthetic, hypothetical, unapproved, or blocked, Validate may run only as an explicitly authorized workflow test. Synthetic or dry-run records may test orchestration behavior but cannot become participant evidence, validate the design, support risk acceptance, or pass the real Validate gate.

## Workflow

1. **Load approved context.** Read the approved Design Specification, direction, state, content, accessibility, traceability, decision, gate, handoff, and project state.
2. **Verify entry and authority.** Confirm exact versions, evidence eligibility, accountable owner, criteria, prototype or build, participant and specialist authority, privacy, and return routes.
3. **Frame the plan.** Use `../../skills/frame-validation-plan.md` and `../../templates/VALIDATION-PLAN.md` to connect the pending decision and every criterion to a credible method and evidence source.
4. **Design scenarios.** Use `../../skills/design-validation-scenarios.md` and `../../templates/VALIDATION-SCENARIOS.md` to define neutral tasks, coverage, success, failure, critical errors, recovery, probes, and pilot rules.
5. **Check readiness.** Use `../../skills/assess-validation-readiness.md` and `../../templates/VALIDATION-READINESS-CHECK.md`. Block execution when authorization, safety, fidelity, environment, content, data, accessibility, or evidence integrity is insufficient.
6. **Execute authorized work.** Coordinate the UX Research Agent and use `../../skills/conduct-validation-sessions.md`. Create `../../templates/VALIDATION-SESSION-RECORD.md` only for traceable planned, dry-run, completed, stopped, or excluded sessions with honest status.
7. **Manage and analyze evidence.** Use `../../skills/analyze-validation-evidence.md` and `../../templates/VALIDATION-EVIDENCE-REGISTER.md`. Preserve raw source links, deviations, successful cases, contradictions, outliers, measures, confidence, and inference limits.
8. **Evaluate accessibility.** Use `../../skills/evaluate-accessibility-validation.md` and `../../templates/ACCESSIBILITY-VALIDATION.md`; distinguish automated, manual, assistive-technology, participant, and specialist evidence.
9. **Classify and route issues.** Use `../../skills/classify-validation-issues.md` and `../../templates/VALIDATION-ISSUE-REGISTER.md` to record severity, confidence, consequence, recoverability, owner, revision route, retest, and residual risk.
10. **Maintain traceability.** Use `../../skills/maintain-validation-traceability.md` and `../../templates/VALIDATION-TRACEABILITY.md` to connect design intent through criteria, evidence, findings, issues, changes, decisions, and retest.
11. **Assemble the Validation Report.** Use `../../templates/VALIDATION-REPORT.md`, then evaluate it with `../../templates/VALIDATE-GATE-RESULT.md`.
12. **Return the handoff.** Create `../../templates/VALIDATE-HANDOFF.md` and pause for explicit human approval, revision choice, or residual-risk decision.
13. **Record approval.** Only after approval and recorded risk decisions, mark the Validation Report `approved`, set the gate to `pass`, update state, and route the exact validated package to Deliver.

When Validate is being tested, use `../../templates/VALIDATE-EVALUATION.md`. Workflow-test success, plan approval, session authorization, executed evidence, validation approval, risk acceptance, and gate passage remain separate states.

## Validation Report requirements

The artifact must:

- reference the approved design version, criteria, plan, authorization, and deviations;
- describe methods, participants or sources, tasks, environments, versions, inclusion, exclusions, and limitations;
- report each criterion as met, partially met, not met, or untested with traceable evidence;
- separate observations, participant words, metrics, interpretation, issue severity, confidence, and recommendations;
- document successful behavior, failures, contradictions, outliers, accessibility findings, and specialist results;
- avoid prevalence or representativeness claims unsupported by the method and sample;
- identify issue ownership, affected flows and roles, remediation recommendation, retest need, and residual risk;
- preserve privacy, consent, accessibility, safety, storage, and incident records;
- identify changes made during validation and whether prior evidence remains valid;
- state whether the design is ready for Deliver, needs more validation, or must return to Design, Define, or Discover.

## Supporting artifact requirements

- Validation Plan maps every criterion to a credible method, evidence source, analysis rule, authorization, and inference limit.
- Validation Scenarios use neutral prompts and define success, failure, critical errors, assistance, recovery, coverage, accommodations, and pilot status.
- Readiness Check identifies blocking or conditional fidelity, environment, data, instrumentation, privacy, accessibility, participant, specialist, and execution conditions.
- Session Records preserve consent, tested versions, task outcomes, observations, participant words, measures, interpretations, deviations, incidents, and privacy controls as distinct fields.
- Evidence Register identifies provenance, eligibility, quality, environment, authorization, and exclusions; planned or synthetic sources remain ineligible for real findings.
- Accessibility Validation records applicable automated, manual, assistive-technology, participant, and specialist methods without certification claims.
- Issue Register separates severity from confidence and assigns owner, route, remediation intent, retest need, and human-owned risk acceptance.
- Validation Traceability reports uncovered criteria, orphaned findings, ownerless issues, changed evidence validity, and revalidation gaps.

## Gate definition

**Artifact evaluated:** Validation Report

**Accountable human owner:** UX Lead or named Validation Owner

### Automated completion criteria

- required metadata and the approved design version are referenced;
- execution authorization and responsible-research obligations are satisfied;
- every agreed criterion has an evidence-linked result;
- methods, sample or sources, environment, prototype fidelity, and deviations are transparent;
- observations, interpretations, severity, confidence, and recommendations remain distinct;
- successful cases, failures, contradictions, and material outliers are preserved;
- accessibility findings identify method and do not overclaim certification;
- qualitative evidence does not become unsupported prevalence;
- issue severity reflects consequence and recoverability, not frequency alone;
- blocking issues are resolved, returned for design revision, or explicitly accepted by an authorized human;
- material design changes are identified for proportionate revalidation;
- the accountable human explicitly approves the current report and residual-risk decision before `pass`.
- workflow-test approval is not treated as validation approval or participant evidence.

### Outcome routing

| Outcome | Use when | Destination |
|---|---|---|
| `pass` | Agreed criteria are met or residual risks are explicitly accepted, and the accountable human approves | Deliver |
| `revise` | Reporting gaps return to Validation; design defects return to Design; invalid framing may return to Define or Discover | Destination recorded in `revision_route` |
| `human-decision` | Approval, residual-risk acceptance, or further-validation choice is pending | Accountable human owner |
| `blocked` | Required authorization, participants, environment, data, specialist input, or safe execution basis is unavailable | Orchestrator; remain in Validate |

## Exit conditions

Validate is complete only when the current Validation Report is `approved`, its decision and accepted risks are recorded, the gate is `pass` with `next_phase: deliver`, and the handoff identifies validated behavior, limitations, open issues, and implementation-stage verification.

## Revision rules

- Correct report defects without altering raw evidence.
- Route interaction or specification defects to Design and record affected artifacts.
- Route invalid problem framing to Define and evidence gaps to Discover.
- Revalidate any change that could alter an agreed criterion or user outcome.
- Never fabricate a missing session, observation, quotation, metric, or test result.
