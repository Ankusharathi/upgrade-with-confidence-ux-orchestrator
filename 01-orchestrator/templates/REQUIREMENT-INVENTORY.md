# Requirement Inventory Template

Use this supporting Intake artifact to normalize UX-relevant requirements while retaining source traceability and uncertainty. Delete unused example rows; do not leave empty placeholders in a completed artifact.

```yaml
requirement_inventory:
  id: REQINV-001
  project: project-name
  phase: intake
  source_analysis: DA-001
  version: 1
  status: draft # draft | agent-reviewed | human-reviewed
  prepared_by: ux-intake-agent
  prepared_at: YYYY-MM-DD

completeness:
  business_goal: missing
  user_goal: missing
  problem_statement: missing
  target_users: missing
  core_use_cases: missing
  functional_requirements: missing
  non_functional_requirements: missing
  constraints: missing
  assumptions: missing
  success_measures: missing
  known_pain_points: missing
  stakeholders: missing
  dependencies: missing
  risks: missing
  in_scope: missing
  out_of_scope: missing
  open_questions: missing

items:
  - id: REQ-001
    category: functional-requirement
    statement: ""
    source_ids: []
    source_location: ""
    classification: explicitly-stated # confirmed-fact | explicitly-stated | assumption | unknown-gap
    verification_status: unknown
    priority: unknown
    approval_status: unknown
    related_items: []

conflicts:
  - id: CONFLICT-001
    description: ""
    related_item_ids: []
    clarification_question_id: null

missing_information:
  - id: GAP-001
    field: user_goal
    information_needed: ""
    decision_affected: ""
    owner: unassigned

summary:
  present: []
  partial: []
  conflicting: []
  missing: []

next_action: ""
```

## Field and classification rules

- Every completeness value must be `present`, `partial`, `missing`, or `conflicting`.
- Valid item categories include `business-goal`, `user-goal`, `problem-statement`, `target-user`, `core-use-case`, `functional-requirement`, `non-functional-requirement`, `constraint`, `assumption`, `success-measure`, `known-pain-point`, `stakeholder`, `dependency`, `risk`, `in-scope`, `out-of-scope`, and `open-question`.
- Do not infer a user goal from a business goal or turn proposed metrics into approved commitments.
- Keep conflicting statements as separate traceable items and link them to a clarification question.

