# Design Traceability

```yaml
design_traceability:
  id: TRACE-DESIGN-001
  version: 1
  project: upgrade-with-confidence
  phase: design
  status: approved
  maintained_by: ux-design-agent

links:
  - id: TRACE-001
    requirement_ids: [REQ-001, REQ-002, REQ-005, REQ-006]
    problem_ids: [PROBLEM-001]
    opportunity_ids: [OPP-001]
    outcome_ids: [OUTCOME-001]
    evidence_ids: [EVID-001, EVID-002, EVID-003, EVID-004, EVID-006]
    decision_ids: [DEC-DEFINE-001, DEC-DESIGN-DIRECTION-001, DEC-DESIGN-001]
    direction_ids: [DIRECTION-002]
    journey_stage_ids: [FSTAGE-001, FSTAGE-002, FSTAGE-004]
    ia_object_ids: [INFO-002, INFO-003, INFO-006, INFO-007, INFO-008]
    task_flow_node_ids: [NODE-001, NODE-002, NODE-006, NODE-007]
    state_ids: [STATE-001, STATE-002, STATE-004, STATE-006, STATE-015]
    content_ids: [CONTENT-001, CONTENT-003, CONTENT-011, CONTENT-012, CONTENT-015]
    accessibility_requirement_ids: [A11Y-001, A11Y-003, A11Y-006, A11Y-007, A11Y-008]
    dependency_ids: [DEP-DATA-001, DEP-A11Y-001]
    validation_criteria_ids: [VAL-001, VAL-004]
    status: active
    notes: Complete-impact understanding is the primary hypothesis; no conversion lift is claimed.
  - id: TRACE-002
    requirement_ids: [REQ-002, REQ-003, REQ-005]
    problem_ids: [PROBLEM-001]
    opportunity_ids: [OPP-002]
    outcome_ids: [OUTCOME-001]
    evidence_ids: [EVID-002, EVID-004, EVID-005, EVID-006, EVID-007]
    decision_ids: [DEC-DESIGN-DIRECTION-001, DEC-DESIGN-003]
    direction_ids: [DIRECTION-002]
    journey_stage_ids: [FSTAGE-003, FSTAGE-004]
    ia_object_ids: [INFO-004, INFO-005, INFO-008]
    task_flow_node_ids: [NODE-003, NODE-004, NODE-005, NODE-006]
    state_ids: [STATE-003, STATE-004, STATE-006, STATE-009, STATE-010]
    content_ids: [CONTENT-007, CONTENT-008, CONTENT-009, CONTENT-010, CONTENT-013, CONTENT-014, CONTENT-016]
    accessibility_requirement_ids: [A11Y-001, A11Y-002, A11Y-005, A11Y-006, A11Y-008]
    dependency_ids: [DEP-DATA-001, DEP-CONTENT-001]
    validation_criteria_ids: [VAL-002, VAL-004, VAL-005]
    status: active
    notes: Estimate, condition, and timing remain visible together.
  - id: TRACE-003
    requirement_ids: [REQ-002, REQ-005]
    problem_ids: [PROBLEM-001]
    opportunity_ids: [OPP-003]
    outcome_ids: [OUTCOME-002]
    evidence_ids: [EVID-008, EVID-009, EVID-010]
    decision_ids: [DEC-DESIGN-DIRECTION-001, DEC-DESIGN-002]
    direction_ids: [DIRECTION-002]
    journey_stage_ids: [FSTAGE-004, FSTAGE-005]
    ia_object_ids: [INFO-001, INFO-008]
    task_flow_node_ids: [NODE-006, NODE-007, NODE-008, NODE-009, NODE-010, NODE-011, NODE-012]
    state_ids: [STATE-004, STATE-005, STATE-006, STATE-010, STATE-011, STATE-012, STATE-013, STATE-014, STATE-015]
    content_ids: [CONTENT-017, CONTENT-018, CONTENT-019, CONTENT-020, CONTENT-024, CONTENT-025, CONTENT-028, CONTENT-029, CONTENT-030, CONTENT-031, CONTENT-032]
    accessibility_requirement_ids: [A11Y-003, A11Y-004, A11Y-005, A11Y-006, A11Y-007, A11Y-009, A11Y-010, A11Y-011]
    dependency_ids: [DEP-DATA-001, DEP-A11Y-001]
    validation_criteria_ids: [VAL-003, VAL-004, VAL-005]
    status: active
    notes: Review, correction, explicit commitment, duplicate prevention, recovery, and confirmation are linked.
  - id: TRACE-004
    requirement_ids: [REQ-007, REQ-008]
    problem_ids: [PROBLEM-001]
    opportunity_ids: [OPP-001, OPP-002, OPP-003]
    outcome_ids: [OUTCOME-001, OUTCOME-002]
    evidence_ids: []
    decision_ids: [DEC-INTAKE-001, DEC-DESIGN-GATE-001]
    direction_ids: [DIRECTION-002]
    journey_stage_ids: [FSTAGE-001, FSTAGE-002, FSTAGE-003, FSTAGE-004, FSTAGE-005]
    ia_object_ids: [INFO-001, INFO-002, INFO-003, INFO-004, INFO-005, INFO-006, INFO-007, INFO-008]
    task_flow_node_ids: [NODE-001, NODE-002, NODE-003, NODE-004, NODE-005, NODE-006, NODE-007, NODE-008, NODE-009, NODE-010, NODE-011, NODE-012]
    state_ids: [STATE-001, STATE-002, STATE-003, STATE-004, STATE-005, STATE-006, STATE-007, STATE-008, STATE-009, STATE-010, STATE-011, STATE-012, STATE-013, STATE-014, STATE-015]
    content_ids: []
    accessibility_requirement_ids: []
    dependency_ids: []
    validation_criteria_ids: [VAL-001, VAL-002, VAL-003, VAL-004, VAL-005]
    status: active
    notes: Synthetic labels and claim limits apply to the entire design and validation package.

coverage:
  uncovered_requirement_ids: []
  unsupported_design_element_ids: []
  orphaned_state_ids: []
  untested_hypothesis_ids: [HYP-DESIGN-001, HYP-DESIGN-002, HYP-DESIGN-003, HYP-DESIGN-004]
  deferred_items: [Editable Figma transfer, production analytics, assisted support, production feasibility, specialist accessibility review]
  conflicting_decisions: []

version_links:
  - {artifact_id: ART-DESIGN-007, version: 1, prototype_version: local-v1-v7}
  - {artifact_id: ART-DESIGN-002, version: 1}
  - {artifact_id: ART-DESIGN-003, version: 1}
  - {artifact_id: ART-DESIGN-004, version: 1}
next_consumer: ux-validation-agent
```

