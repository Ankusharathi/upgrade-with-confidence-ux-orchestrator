# Heuristic Evaluation Template

```yaml
heuristic_evaluation:
  id: HE-001
  project: project-name
  phase: discover
  status: draft # draft | agent-reviewed | human-reviewed
  evaluated_by: ux-research-agent
  evaluated_at: YYYY-MM-DD
  product_version: unknown
  surfaces: []
  roles: []
  tasks: []
  devices_and_environment: []

framework:
  name: ""
  source: ""
  version_or_accessed_at: ""
  domain_specific_additions: []

coverage:
  states_reviewed: []
  states_unavailable: []
  evidence_ids: []

issues:
  - id: HEUR-001
    title: ""
    location: ""
    task_or_state: ""
    heuristic: ""
    observed_evidence: ""
    evidence_ids: []
    likely_consequence: ""
    affected_users_or_roles: []
    severity: 2 # 0 not an issue | 1 cosmetic | 2 minor | 3 major | 4 critical
    severity_rationale: ""
    confidence: medium # high | medium | low
    validation_needed: ""
    specialist_review: null

strengths: []
evaluator_disagreements: []
limitations: []
next_action: ""
```

Severity reflects likely impact, persistence, and reach—not evidence confidence. These are expert-evaluation issues until validated by user or behavioral evidence.

