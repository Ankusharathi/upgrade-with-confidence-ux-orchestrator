# Validation Session Record Template

```yaml
session_record:
  id: SESSION-VALIDATE-001
  status: planned # planned | completed | stopped | excluded | synthetic-dry-run
  participant_id: null # anonymized identifier only
  eligibility_status: pending
  consent_status: pending
  recording_status: not-started
  accommodation_status: none-requested
  moderator: name-or-role
  observers: []
  executed_at: null
  plan_version: 1
  protocol_version: 1
  tested_artifact: {id: ART-DESIGN-001, version: 1}
  environment: {device: "", browser: "", assistive_technology: [], network: "", account_or_role: ""}
task_records:
  - scenario_id: VS-001
    start_time: null
    end_time: null
    outcome: not-run # completed | partial | failed | abandoned | not-run
    assistance: []
    errors: []
    recovery: []
    observation_ids: []
observations:
  - id: OBS-001
    type: direct-observation # direct-observation | participant-words | measured-value | moderator-interpretation
    text: ""
    exact_quote: false
    scenario_id: VS-001
    timestamp_or_location: ""
deviations: []
incidents: []
exclusion_reason: null
privacy:
  identifying_data_collected: []
  storage_location: ""
  access_restrictions: []
  deletion_date: null
```

Do not populate this template as a real session without executed, authorized evidence. Synthetic dry runs must remain explicitly labeled and ineligible as participant evidence.
