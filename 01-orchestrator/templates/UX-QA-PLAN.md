# UX QA Plan Template

```yaml
artifact: {id: ART-QA-001, type: ux-qa-plan, version: 1, status: draft, project: project-name, phase: deliver, producer: ux-qa-agent}
sources: {handoff_package: {id: ART-DELIVER-001, version: 1}, implementation_specification: {id: ART-DELIVER-002, version: 1}, tested_build: {id: null, version: null}}
scope: {flows: [], states: [], roles: [], permissions: [], platforms: [], breakpoints: [], locales: [], accessibility_settings: [], analytics: []}
environments:
  - {id: ENV-001, device: "", operating_system: "", browser_or_app: "", viewport: "", assistive_technology: [], network: "", account_role_and_data: "", readiness: pending}
coverage_matrix:
  - {qa_check_id: QA-001, source_ids: [], environment_ids: [ENV-001], owner: ux-qa-agent, evidence_required: [], status: planned}
entry_criteria: []
exit_criteria: []
stop_conditions: []
engineering_qa_interfaces: {functional: pending, integration: pending, security: pending, performance: pending, regression: pending, operational: pending}
limitations: []
approval: {status: pending, owner: name-or-role, decision_id: null}
```
