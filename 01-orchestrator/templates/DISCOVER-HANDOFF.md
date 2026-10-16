# Discover Handoff Template

```yaml
handoff:
  phase: discover
  agent: ux-research-agent
  status: complete

decision_addressed: ""
artifacts_created:
  - id: ART-DISCOVER-001
    type: research-plan
    version: 1
    status: agent-reviewed
  - id: EVIDREG-001
    type: evidence-register
    version: 1
    status: active
  - id: ART-DISCOVER-002
    type: research-findings
    version: 1
    status: agent-reviewed
supporting_outputs:
  competitor_analysis: null
  secondary_research: null
  current_experience_audit: null
  heuristic_evaluation: null
  industry_ux_standards_review: null
  product_data_evidence_request: null
questions_answered: []
questions_unanswered: []
strongest_finding_ids: []
evidence_used: []
assumptions: []
limitations: []
risks: []
confidence: medium # high | medium | low
gate_recommendation: human-decision
recommended_next_action: accountable human reviews the findings
human_decision_required: true
```

`handoff.status` reports whether the agent completed its assigned work. It does not approve findings or pass the Discover gate. After approval, the orchestrator refreshes statuses, records the decision, sets `next_phase: define`, and carries unresolved evidence boundaries forward.
