# Phase 1: Intake

## Purpose

Convert an unstructured request into a reviewable UX engagement without turning assumptions into facts or beginning discovery prematurely.

## Contract

| Item | Definition |
|---|---|
| Primary agent | UX Intake Agent |
| Required input | A request from a stakeholder, designer, or product team |
| Optional inputs | Existing evidence, prior decisions, constraints, links, and artifacts |
| Primary artifact | UX Brief |
| Default formats | Markdown workflow record; Word/PDF stakeholder brief; Excel/CSV requirement and question registers when useful |
| Accountable human owner | Designer or explicitly named UX lead |
| Gate question | Is the brief complete and approved enough to begin evidence gathering? |
| Next phase | Discover |

The phase follows the workflow contracts in `../../workflow/` and the agent contract in `../../agents/ux-intake-agent/AGENT.md`. The UX Brief, gate result, and handoff are separate records. The agent may recommend a gate outcome but cannot approve the brief.

## Entry conditions

Intake may start when:

- there is a UX-related request or a request whose UX relevance needs classification;
- the request has an identifiable source;
- supplied files or links can be recorded, even if they have not yet been evaluated.

If no actionable request exists, return a `blocked` gate result with the missing input. Do not fabricate a project objective.

## Workflow

1. **Load context.** Read the request, approved workflow contracts, and any supplied approved artifacts. Treat unapproved materials as inputs, not settled context.
2. **Create the artifact manifest.** Use `../../templates/PROJECT-ARTIFACT-MANIFEST.md` and `../../workflow/ARTIFACT-FORMATS.md` to register supplied sources, access, versions, owners, desired formats, destinations, and source-of-truth roles.
3. **Analyze the source.** For a PRD, BRD, or comparable product document, use `../../skills/prd-brd-analysis.md` and `../../templates/DOCUMENT-ANALYSIS.md`; for a short unstructured request, use `../../skills/parse-ux-request.md`. Separate confirmed facts, explicitly stated claims or requirements, assumptions, and unknown gaps.
4. **Extract requirements.** Use `../../skills/requirement-extraction.md` and `../../templates/REQUIREMENT-INVENTORY.md` to create a traceable inventory of goals, users, use cases, requirements, constraints, metrics, pain points, stakeholders, dependencies, risks, scope, exclusions, and open questions.
5. **Decide whether Intake applies.** Classify the request as `ux-engagement`, `ux-adjacent`, `not-ux`, or `unclear`. Route `not-ux` work out of the UX workflow; clarify materially ambiguous routing.
6. **Frame questions.** Use `../../skills/ux-question-framing.md` and `../../templates/STAKEHOLDER-QUESTIONS.md` to separate stakeholder clarification questions, evidence requests, and initial UX research questions.
7. **Draft the UX Brief.** Use `../../skills/create-ux-brief.md` and `../../templates/UX-BRIEF.md`. Preserve provenance for every evidence item and decision.
8. **Triage risks.** Use `../../skills/identify-ux-risks.md`. Record risk, basis, impact, owner, and the next treatment; do not present hypothetical risks as observed failures.
9. **Review completeness.** Evaluate the brief and stakeholder question pack against the gate criteria below and create `../../templates/INTAKE-GATE-RESULT.md`.
10. **Return the handoff.** Create `../../templates/INTAKE-HANDOFF.md` and pause for the accountable human owner whenever approval or another consequential decision is required.
11. **Record answers and approval.** Preserve question IDs and record each answer with its source. Only after explicit human approval, change the brief status to `approved`, record the decision identifier and owner, mark any prior approved version `superseded`, and set the gate to `pass` with `next_phase: discover`.
12. **Finalize state and handoff.** The orchestrator records the approved artifact version and decision in project state, updates the manifest, then refreshes the handoff so it points to the approved brief and routes unresolved questions to Discover.

When Intake is being tested, evaluate the complete run with `../../templates/INTAKE-EVALUATION.md`. Test success, artifact approval, and gate passage remain separate decisions.

Ask only questions whose answers would materially change scope, method, target users, safety, authority, or routing. Lower-risk unknowns remain labeled assumptions or open questions for Discover.

## UX Brief requirements

The brief must contain:

- project name, request source, and accountable human owner;
- request summary and UX classification;
- decision or outcome the work is intended to support;
- target users or an explicit statement that they are unknown;
- known context and evidence, with provenance;
- assumptions kept separate from known facts;
- in-scope and out-of-scope boundaries;
- constraints, dependencies, and success signals;
- initial research questions and evidence gaps;
- prioritized stakeholder clarification questions and evidence requests in the linked Stakeholder Question Pack;
- accessibility, inclusion, privacy, consent, and other ethical considerations;
- risks, open questions, related decisions, and proposed next action.

Unknowns are acceptable when clearly labeled and routed. Empty placeholders, silent omissions, and invented answers are not.

## Gate definition

**Artifact evaluated:** UX Brief

**Accountable human owner:** Designer or named UX lead

### Automated completion criteria

- required artifact metadata conforms to `../../workflow/ARTIFACTS.md`;
- the request and intended decision are understandable;
- target users are named or explicitly unknown;
- facts, evidence, interpretations, and assumptions are distinguishable;
- evidence items identify a source or are labeled as unverified input;
- scope and exclusions are explicit;
- material constraints, dependencies, risks, and open questions are recorded;
- success signals are stated without inventing baselines or targets;
- research questions and evidence gaps are actionable for Discover;
- stakeholder questions are prioritized, assigned, linked to gaps, and kept separate from user research questions;
- privacy, accessibility, inclusion, consent, and safety implications have been considered;
- the recommended next action and next consumer are specified;
- no blocking uncertainty makes evidence gathering unsafe, unauthorized, or directionless.

### Outcome routing

| Outcome | Use when | Destination |
|---|---|---|
| `pass` | All criteria pass and the accountable human explicitly approved the brief | Discover |
| `revise` | The brief has specific correctable gaps | UX Intake Agent with a revision request |
| `human-decision` | The brief is complete enough to review, but approval, scope, ownership, or another consequential choice is pending | Accountable human owner |
| `blocked` | A required input, authority, or safe basis for proceeding is unavailable | Orchestrator; remain in Intake |

An automated reviewer normally returns `human-decision` for a complete draft. It must not convert its own recommendation into `pass`.

## Exit conditions

Intake is complete only when:

- the current UX Brief version is `approved`;
- the approving human and approval decision are recorded;
- the gate result is `pass` and names Discover as the next phase;
- the handoff names the approved brief and unresolved items that Discover must carry forward;
- project state records the approved artifact version, current gate, decisions, risks, and next action.

## Failure and revision rules

- Preserve the artifact identifier and increment the version when revising the same brief.
- Never overwrite an approved version; mark it `superseded` only after a replacement is approved.
- Route new evidence that changes an approved assumption back through Intake review.
- Do not start recruiting, contact participants, schedule research, or collect personal data during Intake without explicit authorization.
- Do not solve the design problem or claim research findings in this phase.
