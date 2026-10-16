# Handoff Package Template

```yaml
artifact:
  id: ART-DELIVER-001
  type: handoff-package
  version: 1
  status: draft
  project: project-name
  phase: deliver
  producer: ux-delivery-agent
approved_sources:
  problem_definition: {id: ART-DEFINE-001, version: 1, status: approved}
  design_specification: {id: ART-DESIGN-001, version: 1, status: approved}
  validation_report: {id: ART-VALIDATE-001, version: 1, status: approved}
  validate_gate_decision_id: DEC-VALIDATE-001
source_of_truth_locations: []
package_index:
  implementation_specification: ART-DELIVER-002
  component_map: ART-DELIVER-003
  analytics_plan: ART-DELIVER-004
  question_log: ART-DELIVER-005
  change_log: ART-DELIVER-006
  delivery_traceability: TRACE-DELIVER-001
  ux_qa_plan: ART-QA-001
  ux_qa_checklist: ART-QA-002
  defect_register: ART-QA-003
  fidelity_review: ART-QA-004
  release_ux_readiness: ART-QA-005
scope: {roles: [], platforms: [], flows: [], states: [], breakpoints: [], locales: []}
ownership: {ux: name-or-role, implementation: name-or-role, ux_qa: name-or-role, engineering_qa: name-or-role, product: name-or-role}
dependencies: []
accepted_risks: []
known_debt: []
deferred_scope: []
open_questions: []
blocking_items: []
ux_owner_acceptance: {status: pending, decision_id: null}
implementation_owner_acceptance: {status: pending, decision_id: null}
approval: {status: pending, decision_id: null}
next_consumer: implementation-and-qa-teams
```

Package completeness does not imply implementation completion, QA completion, or production-release approval.
