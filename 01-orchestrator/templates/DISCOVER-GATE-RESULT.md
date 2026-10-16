# Discover Gate Result Template

```yaml
gate_result:
  phase: discover
  artifact_id: ART-DISCOVER-002
  artifact_version: 1
  evaluated_at: YYYY-MM-DD
  reviewer: ux-research-agent
  accountable_human: name-or-role
  status: human-decision # pass | revise | human-decision | blocked
  evidence_sufficiency: uncertain # sufficient | insufficient | uncertain
  passed_criteria: []
  failed_criteria: []
  revision_request: null
  human_decision:
    question: Approve these Research Findings as the evidence basis for Define?
    options: [approve, request-revision, conduct-more-research]
    owner: name-or-role
    decision_id: null
  next_phase: null
  next_action: accountable human reviews the findings and evidence sufficiency
```

Use `pass` only after accountable-human approval is recorded in the findings and gate result. If evidence is insufficient, identify the exact decision-critical gap rather than requesting research without a stopping condition.

