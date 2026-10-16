# Implementation Question and Decision Log Template

```yaml
artifact: {id: ART-DELIVER-005, type: implementation-question-log, version: 1, status: active, project: project-name, phase: deliver, producer: ux-delivery-agent}
questions:
  - id: IQ-001
    raised_at: YYYY-MM-DD
    raised_by: name-or-role
    question: ""
    source_and_conflict: ""
    affected_artifact_ids: []
    affected_criteria_ids: []
    options: []
    evidence: []
    recommendation: ""
    decision_owner: name-or-role
    due_at: null
    status: open # open | answered | decision-required | blocked | closed
    decision: null
    rationale: null
    decision_id: null
    revision_route: deliver # deliver | design | validate | define | discover
    required_updates: []
```

Chat, meeting memory, or agent inference does not close a question without a traceable decision.
