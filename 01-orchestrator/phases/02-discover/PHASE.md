# Phase 2: Discover

## Purpose

Gather and synthesize sufficient evidence about users, behavior, context, and constraints so the team can define the right problem without presenting assumptions as research findings.

## Contract

| Item | Definition |
|---|---|
| Primary agent | UX Research Agent |
| Required input | Approved UX Brief and passing Intake gate |
| Optional inputs | Existing research, analytics, support data, policies, prior decisions, and authorized participant-research materials |
| Primary artifact | Research Findings |
| Supporting artifacts | Research Plan, Evidence Register, and applicable analysis or audit reports |
| Default formats | Markdown workflow record; FigJam evidence or current-flow maps; Word/PDF findings report; Excel/CSV evidence and data registers |
| Accountable human owner | UX Lead or explicitly named Research Lead |
| Gate question | Is the evidence sufficient and approved for problem definition? |
| Next phase | Define |

The phase follows the shared workflow contracts in `../../workflow/` and the agent contract in `../../agents/ux-research-agent/AGENT.md`. A plan is not evidence, and completed research is not automatically approved product direction.

## Entry conditions

Discover may start only when:

- the current UX Brief is `approved`;
- the Intake gate is `pass` and points to Discover;
- the accountable human owner and decision to support are identifiable;
- unresolved Intake questions, risks, assumptions, and evidence requests are carried forward.

If these conditions are not met, return a `blocked` or `human-decision` gate result without beginning participant research.

## Workflow

1. **Load approved context.** Read the approved UX Brief, Intake decision, question pack, handoff, and project state. Treat unresolved stakeholder answers as business inputs, not user evidence.
2. **Frame the study.** Use `../../skills/frame-research-study.md` to convert the decision and uncertainty into focused research objectives, questions, and evidence needs.
3. **Audit existing evidence.** Use `../../skills/manage-research-evidence.md` and `../../templates/EVIDENCE-REGISTER.md`. Review supplied research before proposing new collection.
4. **Run applicable evidence workstreams.** The Research Plan must include or explicitly defer each requested workstream with a rationale:
   - `../../skills/secondary-research.md` with `../../templates/SECONDARY-RESEARCH.md`;
   - `../../skills/competitor-analysis.md` with `../../templates/COMPETITOR-ANALYSIS.md`;
   - `../../skills/current-experience-audit.md` with `../../templates/CURRENT-EXPERIENCE-AUDIT.md`;
   - `../../skills/heuristic-evaluation.md` with `../../templates/HEURISTIC-EVALUATION.md`;
   - `../../skills/industry-ux-standards-review.md` with `../../templates/UX-STANDARDS-REVIEW.md`;
   - `../../skills/product-data-evidence-intake.md` with `../../templates/PRODUCT-DATA-EVIDENCE-REQUEST.md` for Quantum Metric, VoC, KPIs, analytics, support, and related product-data sources.
5. **Select the lightest credible methods.** Use `../../skills/select-research-methods.md` and document the rationale, limits, participants or sources, analysis approach, and stopping conditions in `../../templates/RESEARCH-PLAN.md`.
6. **Review execution readiness.** Obtain explicit authorization before recruiting, contacting, scheduling, recording, or collecting participant data. Confirm consent, privacy, accessibility, incentives, data handling, and any specialist review.
7. **Conduct only authorized research.** Use `../../skills/conduct-responsible-research.md`. Record deviations, anonymized source identifiers, and evidence provenance. Never fabricate a participant, observation, quotation, or metric.
8. **Synthesize.** Use `../../skills/synthesize-research-findings.md` and `../../templates/RESEARCH-FINDINGS.md`. Connect each finding to evidence, interpretation, implication, and confidence; preserve contradictions and meaningful outliers.
9. **Review sufficiency.** Evaluate coverage, evidence quality, limitations, unanswered questions, and decision relevance. Create `../../templates/DISCOVER-GATE-RESULT.md`.
10. **Return the handoff.** Create `../../templates/DISCOVER-HANDOFF.md`. A complete draft normally routes to the accountable human as `human-decision`.
11. **Record approval.** Only after explicit human approval, mark the Research Findings `approved`, record the decision and owner, set the gate to `pass`, update project state, and route the approved evidence package to Define.

## Research Plan requirements

The plan must contain:

- the decision, objective, research questions, and evidence needed;
- known context, assumptions, and existing evidence;
- chosen method and why it is credible for each question;
- status, scope, and rationale for competitor analysis, secondary research, current-experience audit, heuristic evaluation, industry-standards review, and product-data evidence intake;
- participants or evidence sources and inclusion/exclusion criteria;
- session or collection procedure when applicable;
- consent, privacy, accessibility, participant-safety, recording, retention, and incentive provisions;
- analysis approach, timeline, dependencies, risks, limitations, and expected deliverables;
- execution authorization status and accountable owner.

## Research Findings requirements

The findings artifact must contain:

- the decision addressed and concise executive summary;
- methods, sources, participant/sample description, and deviations;
- question coverage and unanswered questions;
- findings linked to evidence, interpretation, implication, and confidence;
- needs, behaviors, pain points, contradictions, and meaningful outliers supported by evidence;
- limitations and boundaries on inference;
- recommendations kept separate from findings;
- unresolved risks, next research needs, related decisions, and next consumer.

## Gate definition

**Artifact evaluated:** Research Findings

**Accountable human owner:** UX Lead or named Research Lead

### Automated completion criteria

- the approved UX Brief and Intake decision are referenced;
- every research question is answered, partially answered, or explicitly unanswered;
- every finding links to traceable evidence;
- evidence, interpretation, implication, and recommendation remain distinguishable;
- confidence reflects evidence quality, consistency, and limitations;
- participant/sample claims do not imply unsupported prevalence;
- contradictions and material outliers are preserved;
- privacy, consent, accessibility, inclusion, and data-handling obligations were followed;
- deviations from the plan and missing evidence are visible;
- planned evidence workstreams are completed or explicitly deferred with a decision-relevant rationale;
- competitor and current-experience observations identify version, context, access, and date;
- heuristic issues remain labeled as expert evaluation rather than user evidence;
- standards claims cite current authoritative sources and distinguish requirements from guidance and conventions;
- product-data evidence records metric or signal definitions, population, segments, time range, provenance, ownership, data quality, privacy status, and limits on inference;
- recommendations follow from findings and do not silently expand scope;
- the evidence is sufficient for the stated Define decision, or the exact shortfall is named;
- the accountable human has explicitly approved the findings before `pass`.

### Outcome routing

| Outcome | Use when | Destination |
|---|---|---|
| `pass` | Criteria pass and the accountable human approves the findings | Define |
| `revise` | Analysis, traceability, or reporting has correctable gaps | UX Research Agent |
| `human-decision` | Findings are reviewable but approval, risk acceptance, or further-research choice is pending | Accountable human owner |
| `blocked` | Required evidence, authorization, safe data handling, or access is unavailable | Orchestrator; remain in Discover |

## Exit conditions

Discover is complete only when:

- the current Research Findings version is `approved`;
- its approving human and decision are recorded;
- the gate is `pass` and names Define as the next phase;
- the Evidence Register preserves traceability to the supporting sources;
- the handoff carries unresolved questions, limitations, risks, and approved findings into Define;
- project state records the approved artifact version and next action.

## Safety and revision rules

- Do not recruit, contact, schedule, record, or collect participant data without explicit authorization.
- Use synthetic or de-identified data unless approved handling of sensitive data is necessary.
- Do not place credentials, payment data, or unnecessary personal information in research artifacts.
- Never fabricate or repair missing evidence with plausible language.
- Preserve the artifact identifier and increment its version when revising the same findings.
- Never overwrite an approved version; supersede it only after a replacement is approved.
- New evidence that materially changes approved findings returns through Discover review.
- Personas and journey maps require supporting evidence or an explicit `hypothesis` label.
