# Validation Session Record

> **SYNTHETIC DRY RUN — INELIGIBLE AS PARTICIPANT EVIDENCE.** No participant, personal data, recording, or real transaction was involved.

```yaml
session_record:
  id: SESSION-VALIDATE-001
  status: synthetic-dry-run
  participant_id: null
  eligibility_status: not-applicable
  consent_status: not-applicable
  recording_status: not-recorded
  accommodation_status: evaluator-used-keyboard-and-responsive-checks
  moderator: ux-validation-agent
  observers: []
  executed_at: 2026-10-11
  plan_version: 1
  protocol_version: 1
  authorization_id: DEC-VALIDATION-PLAN-001
  tested_artifact: {id: ART-DESIGN-007, version: 1, prototype_version: local-v1-v7}
  environment:
    device: local desktop browser with temporary 320-by-800 viewport check
    browser: Codex in-app browser
    assistive_technology: [keyboard, accessibility-tree inspection]
    network: local HTTP prototype
    account_or_role: invented eligible customer for line ending 2048

task_records:
  - scenario_id: VS-001
    outcome: completed
    assistance: []
    errors: []
    recovery: []
    observation_ids: [OBS-001, OBS-002, OBS-008]
  - scenario_id: VS-002
    outcome: completed
    assistance: []
    errors: []
    recovery: [Edit trade-in returned to Step 3; changed condition recalculated values; review context was restored.]
    observation_ids: [OBS-003]
  - scenario_id: VS-003
    outcome: completed
    assistance: []
    errors: []
    recovery: []
    observation_ids: [OBS-004]
  - scenario_id: VS-004
    outcome: not-run
    assistance: []
    errors: [No integrated invalid-input trigger was available in the primary prototype flow.]
    recovery: []
    observation_ids: [OBS-007]
  - scenario_id: VS-005
    outcome: partial
    assistance: []
    errors: [Unknown-submission status was available only as a supporting-state preview and specification, not an executable order branch.]
    recovery: [Preview text instructed the evaluator not to retry while status was checked.]
    observation_ids: [OBS-007]

observations:
  - id: OBS-001
    type: direct-observation
    text: Step 4 grouped due today $72.00, next-bill increase $60.00, one-time fee $35.00, device payment $25.00, ongoing increase $15.00 after credits, shipping $0.00, and no plan change.
    exact_quote: false
    scenario_id: VS-001
    timestamp_or_location: Step 4 Upgrade Impact
  - id: OBS-002
    type: direct-observation
    text: Trade-in was labeled estimated, stated as $360.00 delivered through $10.00 monthly credits for 36 months, conditional on eligibility and inspection, with a 1–2 synthetic billing-cycle delay.
    exact_quote: false
    scenario_id: VS-001
    timestamp_or_location: Step 3 trade-in and persistent Upgrade Impact
  - id: OBS-003
    type: direct-observation
    text: Editing trade-in from Step 4 returned to Step 3 with prior choices preserved. Changing condition from good to damaged recalculated value from $360.00 to $180.00, monthly credit from $10.00 to $5.00, and ongoing impact from +$15.00 to +$20.00 before returning to review.
    exact_quote: false
    scenario_id: VS-002
    timestamp_or_location: Edit loop between Steps 4 and 3
  - id: OBS-004
    type: direct-observation
    text: Final review explicitly stated that nothing was submitted until Place upgrade order. Activation disabled the button as Placing order, then produced one synthetic confirmation ID and retained estimated and conditional language in next steps.
    exact_quote: false
    scenario_id: VS-003
    timestamp_or_location: Steps 5 and 6
  - id: OBS-005
    type: direct-observation
    text: Mobile mode exposed a Review impact control that opened a labeled modal drawer, moved focus to Close, and restored focus to Review impact when closed.
    exact_quote: false
    scenario_id: VS-001
    timestamp_or_location: Mobile Upgrade Impact drawer
  - id: OBS-006
    type: measured-value
    text: At a 320-by-800 viewport the document client width and scroll width were both 320 pixels, so no page-level horizontal overflow was measured. Keyboard order reached brand, Exit upgrade, Review impact, and the primary action; step navigation moved focus to the new screen heading.
    exact_quote: false
    scenario_id: VS-002
    timestamp_or_location: Responsive and keyboard check
  - id: OBS-007
    type: direct-observation
    text: Recalculating, estimate-unavailable, restored-session, and unknown-status messages were available as separate preview cards; invalid-input and unknown-submission recovery were not integrated into the executable primary flow.
    exact_quote: false
    scenario_id: VS-005
    timestamp_or_location: Responsive and states page plus primary-flow walkthrough
  - id: OBS-008
    type: direct-observation
    text: At Step 1, before the evaluator actively selected a device or trade-in, Upgrade Impact already displayed $72.00 due today, +$60.00 next bill, +$15.00 monthly, and $360.00 trade-in value.
    exact_quote: false
    scenario_id: VS-001
    timestamp_or_location: Step 1 initial state

deviations:
  - id: DEV-001
    description: Traceable record shells were populated immediately after the pilot rather than created before it.
    impact: Low; observations remained reconstructible from the exact prototype version, browser accessibility snapshots, and deterministic scenario values, but future rounds must prepare records first.
incidents: []
exclusion_reason: null
privacy:
  identifying_data_collected: []
  storage_location: 02-upgrades-project/validate
  access_restrictions: Academic project workspace only
  deletion_date: null
```

