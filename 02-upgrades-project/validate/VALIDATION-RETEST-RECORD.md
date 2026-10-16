# Validation Retest Record

> **SYNTHETIC DRY RUN — INELIGIBLE AS PARTICIPANT EVIDENCE.** This retest used invented data and evaluator inspection only. It does not demonstrate customer comprehension, conversion impact, usability success, or accessibility conformance.

```yaml
session_record:
  id: SESSION-VALIDATE-002
  status: synthetic-dry-run-complete
  participant_id: null
  eligibility_status: not-applicable
  consent_status: not-applicable
  recording_status: not-recorded
  moderator: ux-validation-agent
  observers: []
  executed_at: 2026-10-12
  plan_version: 1
  protocol_version: 1
  authorization_id: DEC-VALIDATION-PLAN-001
  tested_artifact: {id: ART-DESIGN-007, version: 1, prototype_revision: local-v2-v8}
  environment:
    device: local desktop browser
    browser: Codex in-app browser
    assistive_technology: [keyboard, accessibility-tree inspection]
    network: local HTTP prototype
    account_or_role: invented eligible customer for line ending 2048

change_set:
  - id: CHG-VALIDATE-001
    issue_ids: [VI-002]
    description: Replaced preconfigured Step 1 financial values with an explicit Not calculated state until device, payment, and trade-in choices are confirmed.
    changed_artifacts: [interactive-prototype/prototype.js, interactive-prototype/styles.css]
  - id: CHG-VALIDATE-002
    issue_ids: [VI-001]
    description: Added an executable missing-condition error with focus and state preservation, plus an unknown-order branch that blocks retry until status is checked and no order is found.
    changed_artifacts: [interactive-prototype/prototype.js, interactive-prototype/styles.css]

task_records:
  - scenario_id: VS-001
    outcome: completed
    assistance: []
    errors: []
    recovery: []
    observation_ids: [OBS-009]
  - scenario_id: VS-004
    outcome: completed
    assistance: []
    errors: [Attempted to continue without choosing a trade-in condition.]
    recovery: [Focused error summary identified the missing choice; earlier device and payment choices remained intact; choosing Good enabled progression.]
    observation_ids: [OBS-010]
  - scenario_id: VS-005
    outcome: completed
    assistance: []
    errors: [Validation control produced an unknown order result after submission.]
    recovery: [Retry was unavailable until Check order status returned No order was found; one retry then produced one synthetic confirmation.]
    observation_ids: [OBS-011, OBS-012]

observations:
  - id: OBS-009
    type: direct-observation
    text: Step 1 displayed Upgrade Impact as Not calculated and explained that eligibility alone does not set device price, payment, or trade-in value.
    exact_quote: false
    scenario_id: VS-001
    timestamp_or_location: Step 1 initial state
  - id: OBS-010
    type: direct-observation
    text: Continuing from trade-in without a condition moved focus to a visible error summary, marked the condition control invalid, preserved earlier selections, and allowed progress after a condition was chosen.
    exact_quote: false
    scenario_id: VS-004
    timestamp_or_location: Step 3 trade-in validation
  - id: OBS-011
    type: direct-observation
    text: The simulated unknown order result withheld retry and presented Check order status as the only recovery action.
    exact_quote: false
    scenario_id: VS-005
    timestamp_or_location: Unknown-order result
  - id: OBS-012
    type: direct-observation
    text: After status checking returned No order was found, one Retry order once action became available and produced one confirmation ID, SYN-UPG-2048-01.
    exact_quote: false
    scenario_id: VS-005
    timestamp_or_location: Status recovery and confirmation

incidents: []
deviations: []
privacy:
  identifying_data_collected: []
  storage_location: 02-upgrades-project/validate
  access_restrictions: Academic project workspace only
```

