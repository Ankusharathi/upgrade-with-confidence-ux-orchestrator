# Research Plan Template

Use this Discover artifact to define the decision, evidence needs, methods, safeguards, and authorization required before research execution. Delete unused example rows; do not leave empty placeholders in a completed artifact.

```yaml
artifact:
  id: ART-DISCOVER-001
  type: research-plan
  version: 1
  status: draft # draft | agent-reviewed | human-reviewed | approved | superseded
  project: project-name
  phase: discover
  producer: ux-research-agent

approved_context:
  ux_brief:
    id: ART-INTAKE-001
    version: 1
  intake_decision: DEC-INTAKE-001
  decision_to_support: ""
  accountable_human: name-or-role

research_frame:
  objective: ""
  scope:
    in: []
    out: []
  known_context: []
  assumptions: []
  hypotheses: []
  research_questions:
    - id: RQ-001
      question: ""
      priority: high # high | medium | low
      evidence_needed: ""
      decision_consequence: ""
      status: planned # planned | answered | partial | unanswered | removed

existing_evidence:
  register_id: EVIDREG-001
  reviewed_ids: []
  evidence_gaps: []

evidence_workstreams:
  - type: competitor-analysis # competitor-analysis | secondary-research | current-experience-audit | heuristic-evaluation | industry-ux-standards-review | product-data-evidence-intake
    status: planned # planned | in-progress | complete | deferred | not-applicable
    linked_question_ids: []
    scope: ""
    rationale: ""
    output_path: null
    deferral_decision_id: null

methods:
  - id: METHOD-001
    type: existing-evidence-review
    linked_question_ids: []
    rationale: ""
    sources_or_participants: ""
    inclusion_criteria: []
    exclusion_criteria: []
    sample_rationale: ""
    procedure: []
    analysis_approach: ""
    limitations: []
    stopping_condition: ""

responsible_research:
  consent: []
  privacy_and_data_minimization: []
  accessibility_and_inclusion: []
  participant_safety: []
  recording: not-applicable # approved | not-approved | not-applicable
  incentives: not-applicable
  storage_location: ""
  retention_and_deletion: ""
  access_restrictions: []
  specialist_reviews: []

execution_authorization:
  status: not-required # pending | approved | denied | not-required
  authorized_activities: []
  owner: name-or-role
  decision_id: null
  decided_at: null

analysis_plan:
  approach: ""
  comparison_dimensions: []
  contradiction_handling: ""
  confidence_method: ""

timeline:
  start: null
  end: null
  milestones: []

dependencies: []
risks: []
limitations: []
expected_deliverables:
  - research-findings
  - evidence-register
  - competitor-analysis
  - secondary-research
  - current-experience-audit
  - heuristic-evaluation
  - industry-ux-standards-review
  - product-data-evidence-request
related_decisions: []
next_action: ""
```

## Planning rules

- A plan may be `approved` for execution while the Discover gate remains open.
- Method choice must follow the research question and intended inference.
- Participant contact, recruitment, scheduling, recording, and data collection require explicit authorization when applicable.
- Do not use a fixed sample size without a decision- and method-specific rationale.
- Each requested evidence workstream must be completed or explicitly deferred with a rationale and decision owner.
