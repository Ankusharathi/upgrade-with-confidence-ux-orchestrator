# Validation Readiness Check Template

```yaml
readiness_check:
  id: READY-VALIDATE-001
  project: project-name
  evaluated_at: YYYY-MM-DD
  evaluator: ux-validation-agent
  plan: {id: ART-VALIDATE-001, version: 1}
  protocol: {id: ART-VALIDATE-002, version: 1}
  tested_artifact: {id: ART-DESIGN-001, version: 1}
  overall_status: blocked # ready | conditional | blocked
checks:
  approved_design: {status: blocked, owner: name-or-role, notes: ""}
  prototype_or_build_fidelity: {status: blocked, owner: name-or-role, notes: ""}
  content_and_test_data: {status: blocked, owner: name-or-role, notes: ""}
  environment_and_accounts: {status: blocked, owner: name-or-role, notes: ""}
  instrumentation: {status: conditional, owner: name-or-role, notes: ""}
  accessibility_setup: {status: blocked, owner: name-or-role, notes: ""}
  participant_coverage: {status: blocked, owner: name-or-role, notes: ""}
  consent_privacy_recording: {status: blocked, owner: name-or-role, notes: ""}
  execution_authorization: {status: blocked, owner: name-or-role, notes: ""}
  moderator_and_observer_setup: {status: blocked, owner: name-or-role, notes: ""}
  dry_run_and_backup: {status: blocked, owner: name-or-role, notes: ""}
conditional_items: []
blocking_items: []
stop_conditions: []
unblock_actions: []
execution_permitted: false
```

Only `ready`, or an explicitly accepted `conditional` result with no evidence-invalidating or participant-safety blocker, permits execution.
