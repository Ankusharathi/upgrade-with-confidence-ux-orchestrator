# Opportunity Map Template

```yaml
artifact:
  id: OPPMAP-DEFINE-001
  type: opportunity-map
  version: 1
  status: draft # draft | agent-reviewed | human-reviewed | approved | superseded
  project: project-name
  phase: define
  producer: ux-opportunity-agent
  evidence_classification: approved-real-evidence

decision_context:
  decision_to_support: ""
  accountable_human: name-or-role
  problem_definition_id: ART-DEFINE-002
  problem_definition_version: 1

outcome_hierarchy:
  desired_outcomes:
    - id: OUTCOME-001
      desired_change: ""
      affected_users_or_roles: []
      problem_ids: []
      evidence_ids: []
      guardrails: []
  opportunities:
    - id: OPP-001
      parent_outcome_id: OUTCOME-001
      outcome_space: ""
      status: supported # supported | hypothesis | investigate | blocked
      affected_users_or_roles: []
      journey_stage_ids: []
      problem_ids: []
      insight_ids: []
      finding_ids: []
      evidence_ids: []
      contradicting_evidence_ids: []
      user_value: ""
      business_relevance: ""
      accessibility_inclusion_or_safety_implications: []
      constraints: []
      dependencies: []
      assumptions: []
      evidence_gap: null
      success_signal_ids: []

relationships:
  - from_opportunity_id: OPP-001
    to_opportunity_id: OPP-002
    relationship: prerequisite # prerequisite | enabling | overlapping | competing | mutually-exclusive | independent
    rationale: ""

tensions_and_tradeoffs:
  - id: TENSION-001
    opportunity_ids: []
    tension: ""
    affected_outcomes: []
    decision_owner: unassigned
    decision_id: null

unsupported_feature_requests:
  - request: ""
    source: ""
    related_opportunity_ids: []
    treatment: reframe-or-exclude

portfolio_gaps: []
scope_exclusions: []
specialist_decisions_needed: []
limitations: []
next_consumer: opportunity-prioritization
```

An opportunity describes an outcome space. It must not silently select a feature, interface pattern, channel, or technology.
