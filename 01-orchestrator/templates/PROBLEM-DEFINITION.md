# Problem Definition Template

Use this as the primary Define artifact. It records the approved problem and opportunity space without selecting a design solution.

```yaml
artifact:
  id: ART-DEFINE-002
  type: problem-definition
  version: 1
  status: draft # draft | agent-reviewed | human-reviewed | approved | superseded
  project: project-name
  phase: define
  producer: ux-synthesis-agent
  evidence_classification: approved-real-evidence # approved-real-evidence | synthetic-test-only | mixed-ineligible

approved_context:
  ux_brief:
    id: ART-INTAKE-001
    version: 1
  research_findings:
    id: ART-DISCOVER-002
    version: 1
  insight_synthesis:
    id: ART-DEFINE-001
    version: 1
  supporting_artifacts:
    opportunity_map: OPPMAP-DEFINE-001
    journey_map: null
    information_architecture: null
    task_flow: null
  discover_decision: DEC-DISCOVER-001
  decision_to_support: ""
  accountable_human: name-or-role

executive_summary: ""

affected_context:
  supported_users_or_roles: []
  contexts: []
  journey_stages: []
  supported_behaviors: []
  supported_needs: []
  supported_obstacles: []
  excluded_or_unknown_populations: []

problem_statements:
  - id: PROBLEM-001
    status: supported # supported | hypothesis | blocked
    statement: ""
    affected_users_or_roles: []
    context: ""
    barrier_or_unmet_outcome: ""
    supported_consequence: ""
    insight_ids: []
    finding_ids: []
    evidence_ids: []
    contradicting_evidence_ids: []
    assumptions: []
    exclusions: []
    confidence: low # high | medium | low
    confidence_basis: ""
    solution_language_check: pass # pass | fail
    multiple_solution_directions_possible: true
    invalidation_conditions: []
    open_questions: []

opportunity_areas:
  - id: OPP-001
    outcome_space: ""
    problem_ids: []
    insight_ids: []
    intended_user_change: ""
    business_relevance: ""
    constraints: []
    dependencies: []
    assumptions: []
    excluded_solutions_or_scope: []
    priority_reference: OPPRIO-DEFINE-001

desired_outcomes:
  - id: OUTCOME-001
    problem_ids: []
    opportunity_ids: []
    affected_users_or_roles: []
    desired_change: ""
    evidence_basis: []
    guardrails: []
    confidence: low

success_signals:
  - id: SIGNAL-001
    outcome_ids: []
    signal_type: behavioral # behavioral | attitudinal | operational | accessibility | business | guardrail
    signal: ""
    operational_definition: unknown
    population_and_segments: []
    journey_stage: ""
    source: unknown
    owner: unassigned
    baseline: null
    baseline_status: unknown # approved | unapproved | unknown
    target: null
    target_status: not-approved # approved | proposed | not-approved | unknown
    cadence: unknown
    data_quality_needs: []
    does_not_prove: []

scope:
  in: []
  out: []
  deferred: []

design_principles:
  - id: PRINCIPLE-001
    principle: ""
    basis_problem_ids: []
    basis_insight_ids: []
    validation_need: ""

accessibility_and_inclusion_implications: []
privacy_security_and_safety_implications: []
operational_and_cross_channel_implications: []
constraints: []
dependencies: []
assumptions: []
limitations: []
risks: []
open_questions: []
decisions_needed: []
return_to_discover: []
related_decisions: []

approval:
  required: true
  owner: name-or-role
  decision_id: null
  outcome: pending # pending | approved | revision-requested | returned-to-discover
  decided_at: null

next_consumer: ux-design-agent
recommended_next_action: "Accountable human reviews the problem framing and evidence alignment."
```

The Problem Definition may contain hypotheses, but only `supported` statements may be treated as approved product context. A human approval does not convert a labeled hypothesis into evidence.
