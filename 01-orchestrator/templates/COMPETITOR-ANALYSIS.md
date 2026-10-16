# Competitor Analysis Template

```yaml
competitor_analysis:
  id: CA-001
  project: project-name
  phase: discover
  status: draft # draft | agent-reviewed | human-reviewed
  prepared_by: ux-research-agent
  prepared_at: YYYY-MM-DD
  decision_to_support: ""
  task_or_journey: ""
  market_and_context: ""

selection:
  criteria: []
  products:
    - id: COMP-001
      name: ""
      relationship: direct # direct | adjacent | benchmark
      inclusion_rationale: ""
      surface: ""
      market: ""
      account_or_access_context: public
      observed_at: YYYY-MM-DD
      evidence_ids: []
      access_limitations: []

comparison_criteria:
  - id: CRIT-001
    criterion: ""
    why_it_matters: ""
    linked_question_ids: []

observations:
  - id: CAOBS-001
    product_id: COMP-001
    criterion_id: CRIT-001
    observable_behavior: ""
    evidence_ids: []
    interpretation: ""
    confidence: low # high | medium | low
    limitations: []

cross_product_patterns: []
meaningful_differences: []
opportunities:
  - id: CAOPP-001
    opportunity: ""
    basis_observation_ids: []
    user_validation_needed: true

limitations: []
next_action: ""
```

Competitor observations describe the reviewed experience at a dated point in time. They do not prove user preference, usability, or an industry requirement.

