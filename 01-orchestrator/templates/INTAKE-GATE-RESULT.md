# Intake Gate Result Template

```yaml
gate_result:
  phase: intake
  artifact_id: ART-###
  artifact_version: 1
  evaluated_at: YYYY-MM-DD
  reviewer: ux-intake-agent # recommendation only, unless this names the accountable human
  accountable_human: name-or-role
  status: human-decision # pass | revise | human-decision | blocked
  passed_criteria: []
  failed_criteria: []
  revision_request: null
  human_decision:
    question: Approve this UX Brief as the basis for Discover?
    options: [approve, request-revision]
    owner: name-or-role
    decision_id: null
  next_phase: null
  next_action: accountable human reviews the brief
```

Use `pass` only after the accountable human's approval is recorded in both the brief and gate result. Before approval, a complete brief normally receives `human-decision`.

