# UX Orchestrator: Start Here

This folder is the canonical system of record for the completed, gated UX Orchestrator workflow.

## Release status

- **Version:** `1.0.0`
- **Status:** Complete and approved
- **Release record:** `workflow/WORKFLOW-RELEASE.md`
- **Presentation website:** <https://ankusharathi.github.io/upgrade-with-confidence-ux-orchestrator/>
- **Submission scope:** Reusable framework definitions plus one synthetic end-to-end demonstration

The website presents the system. The contracts, phase records, approvals, skills, templates, and tests in this folder remain authoritative.

## Mental model

Each phase follows the same contract:

`Orchestrator -> Agent -> Skills -> Artifact -> Gate -> Next phase or revision`

- The **orchestrator** controls routing and project state.
- An **agent** owns a bounded UX responsibility.
- A **skill** performs a reusable task.
- An **artifact** records the result.
- A **gate** decides whether work advances.
- The **designer** retains consequential UX decisions.

## Folder map

```text
ux-orchestrator/
|-- START-HERE.md
|-- workflow/
|   |-- ORCHESTRATOR.md
|   |-- ARTIFACTS.md
|   |-- ARTIFACT-FORMATS.md
|   |-- GATES.md
|   `-- HANDOFF.md
|-- agents/       Specialist agent contracts
|-- phases/
|   |-- 01-intake/
|   |-- 02-discover/
|   |-- 03-define/
|   |-- 04-design/
|   |-- 05-validate/
|   `-- 06-deliver/
|-- skills/       Reusable workflow skill definitions
|-- gates/        Human approval map for all six transitions
|-- templates/    Reusable artifact templates
`-- workflow/     Routing, traceability, and handoff rules
```

The larger development project included framework tests and duplicate working records. This final-submission copy intentionally keeps the reusable contracts and the single upgrades demonstration needed for assessment.

## Artifact formats

Every project starts and maintains `templates/PROJECT-ARTIFACT-MANIFEST.md` under its project records. Follow `workflow/ARTIFACT-FORMATS.md` for cross-system versions, ownership, access, approval, and synchronization.

- **Figma Design:** designs, component usage, specifications, and prototypes.
- **FigJam:** journeys, information architecture, opportunity maps, and task or service flows.
- **Word/PDF:** stakeholder-ready reports and review copies.
- **Excel/CSV:** requirements, evidence, traceability, issues, coverage, and measurement registers.
- **Markdown:** canonical workflow records, decisions, gates, handoffs, evaluations, and state.
- **Jira/Linear compatible:** implementation questions, changes, and UX QA defects. Live synchronization requires an available connected integration; otherwise create a compatible export and mark it `not-connected`.

## Use sequence

1. Read `workflow/WORKFLOW-RELEASE.md` for the approved scope and limitations.
2. Load the shared contracts in `workflow/`.
3. Start a project in Intake using `phases/01-intake/PHASE.md`.
4. Use the relevant specialist-agent contract, skill definitions, and artifact templates.
5. Record the gate result and human decision before advancing.
6. Follow backward-routing and release-maintenance rules whenever evidence or scope changes.

## Current milestone

The complete Intake workflow test is approved. Discover Tests 1 through 4 cover public evidence, product-data intake, current-flow audit, heuristic and accessibility review, and responsible usability-study planning. The synthetic Discover tests are approved, while the real Verizon Discover gate remains blocked on validated evidence.

All six phases have complete reusable contracts and approved workflow tests. The Verizon end-to-end integration test is approved across Intake, Discover, Define, Design, Validate, Deliver, artifact-format routing, and backward revision routing. The reusable architecture is ready for packaging, while the real Verizon project remains blocked in Discover pending real evidence.

Reusable workflow release `1.0.0` is approved and complete. Its registry and reference audit passes, Deliver Test 2 is approved as a workflow test only, and Full Synthetic Demo Run 1 is approved as a demo only. The real Verizon project remains a separate blocked product lane in Discover.

## Phase gate map

| Phase | Artifact evaluated | Gate result template | Pass destination |
|---|---|---|---|
| Intake | UX Brief | `templates/INTAKE-GATE-RESULT.md` | Discover |
| Discover | Research Findings | `templates/DISCOVER-GATE-RESULT.md` | Define |
| Define | Problem Definition | `templates/DEFINE-GATE-RESULT.md` | Design |
| Design | Design Specification | `templates/DESIGN-GATE-RESULT.md` | Validate |
| Validate | Validation Report | `templates/VALIDATE-GATE-RESULT.md` | Deliver |
| Deliver | Handoff Package | `templates/DELIVER-GATE-RESULT.md` | Complete |

Each gate supports `pass`, `revise`, `human-decision`, and `blocked`. Workflow-test approval never substitutes for approval of the real phase artifact.

## Run Intake

1. Load the approved files in `workflow/`.
2. Follow `phases/01-intake/PHASE.md`.
3. Use `agents/ux-intake-agent/AGENT.md` as the specialist-agent contract.
4. For a substantial source document, produce a Document Analysis and Requirement Inventory from `templates/`.
5. Produce the UX Brief, Stakeholder Question Pack, Intake gate result, and Intake handoff from `templates/`.
6. Stop for human approval; only an approved brief may advance to Discover.

### Core Intake skills

- `skills/prd-brd-analysis.md` analyzes a PRD or BRD and separates facts, stated claims, assumptions, and gaps.
- `skills/requirement-extraction.md` extracts the complete, traceable requirement set.
- `skills/ux-question-framing.md` produces stakeholder questions, evidence requests, and initial UX research questions.

### Reusable Intake templates

- `templates/PROJECT-ARTIFACT-MANIFEST.md` records source files, requested output formats, destinations, versions, permissions, and synchronization.
- `templates/DOCUMENT-ANALYSIS.md` preserves source interpretation, evidence quality, contradictions, and gaps.
- `templates/REQUIREMENT-INVENTORY.md` stores the complete traceable requirement set and completeness assessment.
- `templates/STAKEHOLDER-QUESTIONS.md` separates stakeholder questions, evidence requests, and research questions.
- `templates/UX-BRIEF.md` records the reviewable engagement brief.
- `templates/INTAKE-GATE-RESULT.md` and `templates/INTAKE-HANDOFF.md` control routing and ownership.
- `templates/INTAKE-EVALUATION.md` evaluates repeatable Intake tests without conflating test success with approval.

## BRD inputs

- Start new projects from `templates/BRD-TEMPLATE.md`.
- Keep project-specific BRDs as test inputs under `tests/intake/`.
- The current realistic test input is `tests/intake/verizon-business-device-upgrade/INPUT-BRD.md`.

## Run Discover

1. Confirm the current UX Brief is approved and the Intake gate points to Discover.
2. Follow `phases/02-discover/PHASE.md`.
3. Use `agents/ux-research-agent/AGENT.md` as the specialist-agent contract.
4. Produce the Research Plan, Evidence Register, Research Findings, Discover gate result, and Discover handoff from `templates/`.
5. Stop for explicit authorization before participant recruitment, contact, recording, or data collection.
6. Stop for human approval before Research Findings advance to Define.

### Core Discover skills

- `skills/frame-research-study.md` turns the approved decision into focused research questions and evidence needs.
- `skills/select-research-methods.md` chooses the lightest credible methods and sampling rationale.
- `skills/manage-research-evidence.md` preserves source provenance, quality, sensitivity, and traceability.
- `skills/competitor-analysis.md` compares relevant market and analogous experiences using observable evidence.
- `skills/secondary-research.md` finds and assesses current published and internal evidence.
- `skills/current-experience-audit.md` inventories the current designs, states, and end-to-end flow.
- `skills/heuristic-evaluation.md` identifies likely usability issues through an explicit expert-review framework.
- `skills/industry-ux-standards-review.md` maps applicable standards, official guidance, and mature conventions.
- `skills/product-data-evidence-intake.md` routes precise evidence requests through Product Owners to Quantum Metric, VoC, KPI, analytics, support, and tool owners.
- `skills/conduct-responsible-research.md` governs authorized research execution and stop conditions.
- `skills/synthesize-research-findings.md` produces evidence-linked findings, implications, confidence, and separate recommendations.

### Reusable Discover templates

- `templates/RESEARCH-PLAN.md`
- `templates/EVIDENCE-REGISTER.md`
- `templates/COMPETITOR-ANALYSIS.md`
- `templates/SECONDARY-RESEARCH.md`
- `templates/CURRENT-EXPERIENCE-AUDIT.md`
- `templates/HEURISTIC-EVALUATION.md`
- `templates/UX-STANDARDS-REVIEW.md`
- `templates/PRODUCT-DATA-EVIDENCE-REQUEST.md`
- `templates/RESEARCH-FINDINGS.md`
- `templates/DISCOVER-GATE-RESULT.md`
- `templates/DISCOVER-HANDOFF.md`
- `templates/DISCOVER-EVALUATION.md`

## Run Define

1. Confirm the current Research Findings are approved and the Discover gate is `pass` with `next_phase: define`.
2. Follow `phases/03-define/PHASE.md`.
3. Use `agents/ux-synthesis-agent/AGENT.md` as the specialist-agent contract.
4. Use `agents/ux-journey-architecture-agent/AGENT.md` for journey maps, information architecture, and task flows when applicable.
5. Use `agents/ux-opportunity-agent/AGENT.md` for opportunity mapping, prioritization, outcomes, and success signals.
6. Produce Insight Synthesis, Problem Definition, Opportunity Map, Opportunity Prioritization, applicable Journey/IA/Task Flow artifacts, Define gate result, and Define handoff from `templates/`.
7. Return decision-critical evidence gaps to Discover instead of filling them with assumptions.
8. Stop for human approval before the Problem Definition advances to Design.

### Core Define skills

- `skills/cluster-research-evidence.md` groups approved findings while preserving contradictions, variation, and inference boundaries.
- `skills/formulate-ux-insights.md` creates evidence-linked interpretations with alternatives, implications, and confidence.
- `skills/frame-ux-problems.md` creates non-solution problem statements with affected users or roles, context, barrier, and consequence.
- `skills/prioritize-ux-opportunities.md` prioritizes outcome spaces using explicit ordinal criteria and uncertainty.
- `skills/define-outcomes-success-signals.md` defines desired outcomes, signals, owners, and baseline or target gaps without invention.
- `skills/map-ux-opportunities.md` builds the outcome-space landscape before prioritization.
- `skills/map-user-journeys.md` creates evidence-bounded current, future, or hypothesis journeys.
- `skills/define-information-architecture.md` defines information objects, hierarchy, labels, navigation, permissions, and governance.
- `skills/model-task-flows.md` models actors, decisions, branches, errors, recovery, and completion.

### Reusable Define templates

- `templates/INSIGHT-SYNTHESIS.md`
- `templates/PROBLEM-DEFINITION.md`
- `templates/OPPORTUNITY-PRIORITIZATION.md`
- `templates/OPPORTUNITY-MAP.md`
- `templates/JOURNEY-MAP.md`
- `templates/INFORMATION-ARCHITECTURE.md`
- `templates/TASK-FLOW.md`
- `templates/DEFINE-GATE-RESULT.md`
- `templates/DEFINE-HANDOFF.md`
- `templates/DEFINE-EVALUATION.md`

## Run Design

1. Confirm the current Problem Definition is approved and the Define gate is `pass` with `next_phase: design`.
2. Follow `phases/04-design/PHASE.md`.
3. Use `agents/ux-design-agent/AGENT.md` as the primary agent contract.
4. Use `agents/ux-journey-architecture-agent/AGENT.md` for future-state journeys, proposed IA, and detailed task flows.
5. Produce the complete Design Specification and supporting artifacts from `templates/`.
6. Keep design hypotheses, specialist decisions, feasibility status, content approval, and accessibility verification explicit.
7. Stop for human approval before the Design Specification advances to Validate.

### Core Design skills

- `skills/translate-problems-to-design-directions.md`
- `skills/model-future-state-experience.md`
- `skills/specify-interactions-and-states.md`
- `skills/write-ux-content-specification.md`
- `skills/specify-accessible-design.md`
- `skills/maintain-design-traceability.md`
- `skills/assess-design-feasibility-inputs.md`
- `skills/prepare-design-validation.md`

### Reusable Design templates

- `templates/DESIGN-DIRECTION.md`
- `templates/JOURNEY-MAP.md`
- `templates/INFORMATION-ARCHITECTURE.md`
- `templates/TASK-FLOW.md`
- `templates/INTERACTION-STATE-SPECIFICATION.md`
- `templates/UX-CONTENT-SPECIFICATION.md`
- `templates/ACCESSIBILITY-DESIGN-SPECIFICATION.md`
- `templates/DESIGN-TRACEABILITY.md`
- `templates/DESIGN-SPECIFICATION.md`
- `templates/DESIGN-GATE-RESULT.md`
- `templates/DESIGN-HANDOFF.md`
- `templates/DESIGN-EVALUATION.md`

## Run Validate

1. Confirm the current Design Specification is approved and the Design gate is `pass` with `next_phase: validate`.
2. Follow `phases/05-validate/PHASE.md`.
3. Use `agents/ux-validation-agent/AGENT.md` as the primary agent contract.
4. Use `agents/ux-research-agent/AGENT.md` for authorized participant-research execution and evidence synthesis.
5. Create and approve the Validation Plan, scenarios, and readiness check before participant execution.
6. Stop for explicit authorization before recruitment, contact, recording, incentives, sensitive-data access, or sessions.
7. Produce the evidence, accessibility, issue, traceability, report, gate, and handoff artifacts from `templates/`.
8. Stop for human approval and residual-risk decisions before the Validation Report advances to Deliver.

### Core Validate skills

- `skills/frame-validation-plan.md`
- `skills/design-validation-scenarios.md`
- `skills/assess-validation-readiness.md`
- `skills/conduct-validation-sessions.md`
- `skills/analyze-validation-evidence.md`
- `skills/evaluate-accessibility-validation.md`
- `skills/classify-validation-issues.md`
- `skills/maintain-validation-traceability.md`

### Reusable Validate templates

- `templates/VALIDATION-PLAN.md`
- `templates/VALIDATION-SCENARIOS.md`
- `templates/VALIDATION-READINESS-CHECK.md`
- `templates/VALIDATION-SESSION-RECORD.md`
- `templates/VALIDATION-EVIDENCE-REGISTER.md`
- `templates/ACCESSIBILITY-VALIDATION.md`
- `templates/VALIDATION-ISSUE-REGISTER.md`
- `templates/VALIDATION-TRACEABILITY.md`
- `templates/VALIDATION-REPORT.md`
- `templates/VALIDATE-GATE-RESULT.md`
- `templates/VALIDATE-HANDOFF.md`
- `templates/VALIDATE-EVALUATION.md`

## Run Deliver

1. Confirm the current Validation Report is approved and the Validate gate is `pass` with `next_phase: deliver`.
2. Follow `phases/06-deliver/PHASE.md`.
3. Use `agents/ux-delivery-agent/AGENT.md` as the primary agent contract.
4. Use `agents/ux-qa-agent/AGENT.md` for fidelity, experience QA, defect triage, and release UX readiness.
5. Produce the implementation, component, analytics, question, change, traceability, and Handoff Package artifacts.
6. Identify an exact implementation build before marking any UX QA check executed.
7. Run the applicable UX QA skills and link relevant engineering-QA evidence without substituting for its owners.
8. Route material changes to Design or Validate and complete required revalidation and retest.
9. Stop for UX-owner and implementation-owner acceptance before the gate reaches `complete`.
10. Keep production-release authority outside the UX workflow.

### Core Delivery skills

- `skills/prepare-implementation-handoff.md`
- `skills/specify-implementation-behavior.md`
- `skills/map-design-system-components.md`
- `skills/define-analytics-measurement.md`
- `skills/manage-implementation-decisions.md`
- `skills/control-delivery-changes-revalidation.md`
- `skills/maintain-delivery-traceability.md`
- `skills/assess-delivery-readiness.md`

### UX QA skills

- `skills/plan-ux-qa.md`
- `skills/execute-design-fidelity-review.md`
- `skills/verify-interaction-and-state-coverage.md`
- `skills/verify-content-and-accessibility-implementation.md`
- `skills/triage-ux-qa-defects.md`
- `skills/assess-release-ux-readiness.md`

### Reusable Deliver and UX QA templates

- `templates/HANDOFF-PACKAGE.md`
- `templates/IMPLEMENTATION-SPECIFICATION.md`
- `templates/DESIGN-SYSTEM-COMPONENT-MAP.md`
- `templates/ANALYTICS-MEASUREMENT-PLAN.md`
- `templates/IMPLEMENTATION-QUESTION-LOG.md`
- `templates/DELIVERY-CHANGE-LOG.md`
- `templates/DELIVERY-TRACEABILITY.md`
- `templates/UX-QA-PLAN.md`
- `templates/UX-QA-CHECKLIST.md`
- `templates/UX-QA-DEFECT-REGISTER.md`
- `templates/IMPLEMENTATION-FIDELITY-REVIEW.md`
- `templates/RELEASE-UX-READINESS.md`
- `templates/DELIVER-GATE-RESULT.md`
- `templates/DELIVER-HANDOFF.md`
- `templates/DELIVER-EVALUATION.md`
