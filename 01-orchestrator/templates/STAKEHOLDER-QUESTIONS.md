# Stakeholder Question Pack Template

```yaml
stakeholder_question_pack:
  id: SQP-###
  project: project-name
  phase: intake
  source_artifact: ART-###
  version: 1
  status: draft # draft | agent-reviewed | human-reviewed | closed
  prepared_by: ux-intake-agent
  prepared_at: YYYY-MM-DD

summary:
  stakeholder_question_count: 0
  evidence_request_count: 0
  initial_research_question_count: 0
  blocking_count: 0
  before_discover_count: 0
  during_discover_count: 0
  later_count: 0

stakeholder_questions:
  - id: SQ-###
    question: ""
    why_it_matters: ""
    answer_owner: name-or-role-or-unassigned
    priority: before-discover # blocking | before-discover | later
    related_items: []
    status: open # open | answered | deferred | superseded
    answer: null
    answer_source: null

evidence_requests:
  - id: ER-###
    request: ""
    why_it_matters: ""
    evidence_owner: name-or-role-or-unassigned
    priority: during-discover # blocking | before-discover | during-discover | later
    related_items: []
    status: open
    source_received: null

initial_ux_research_questions:
  - id: RQ-###
    question: ""
    evidence_needed: ""
    related_items: []
    target_phase: discover

decisions_recorded: []
limitations: []
next_action: accountable owners answer or route the prioritized stakeholder questions
```

Stakeholder answers are business inputs, not user evidence. Update the answer, source, status, and linked decision when a question is resolved; do not erase the original question.
