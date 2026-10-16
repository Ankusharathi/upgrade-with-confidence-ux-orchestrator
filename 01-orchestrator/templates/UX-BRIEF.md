# UX Brief Template

```yaml
artifact:
  id: ART-###
  type: ux-brief
  version: 1
  status: draft # draft | agent-reviewed | human-reviewed | approved | superseded
  project: project-name
  phase: intake
  producer: ux-intake-agent

request:
  source: stakeholder-or-record-id
  received_at: YYYY-MM-DD
  original_input: input-or-link-id
  summary: ""
  ux_classification: ux-engagement # ux-engagement | ux-adjacent | not-ux | unclear
  classification_basis: ""

ownership:
  accountable_human: name-or-role
  requester: name-or-role
  decision_owners: []

engagement:
  requested_outcome: ""
  decision_to_support: ""
  target_users:
    known: []
    unknown: []
  context_of_use:
    known: []
    unknown: []
  scope:
    in: []
    out: []
  constraints: []
  dependencies: []
  success_signals: []

known_context: []
supplied_claims: []
inputs: []
evidence: []
interpretations: []
assumptions: []
limitations: []

research_frame:
  research_questions: []
  evidence_needed: []
  existing_evidence_to_review: []

stakeholder_question_pack:
  id: SQP-###
  version: 1
  status: draft

responsible_research:
  accessibility_and_inclusion: []
  privacy_and_data: []
  consent_and_participant_safety: []
  specialist_review_needed: []

risks:
  - id: RISK-###
    statement: "If ..., then ..., because ..."
    basis_type: unknown # evidence | supplied-claim | assumption | unknown
    basis_ids: []
    likelihood: unknown # low | medium | high | unknown
    impact: unknown # low | medium | high | unknown
    confidence: low # low | medium | high
    owner: unassigned
    treatment: investigate-in-discover

open_questions:
  - id: Q-###
    question: ""
    why_it_matters: ""
    owner: name-or-role-or-unassigned
    target_phase: intake # intake | discover | later
    blocking: false

related_decisions: []
approval:
  required: true
  decision_id: null
  owner: name-or-role
  decided_at: null

next_consumer: ux-research-agent
recommended_next_action: accountable human reviews the brief
```

## Entry conventions

- Use stable identifiers for list items that other records reference, such as `EVID-001`, `ASM-001`, `Q-001`, `RISK-001`, and `DEC-001`.
- Each evidence entry should identify its source, date when known, and verification status.
- Each assumption should state how it could be checked.
- Link the exact Stakeholder Question Pack version used to resolve Intake gaps.
- A success signal may be qualitative during Intake. Do not fabricate a target or baseline.
- Use `unknown` or an empty list only when the absence is intentional and visible.
