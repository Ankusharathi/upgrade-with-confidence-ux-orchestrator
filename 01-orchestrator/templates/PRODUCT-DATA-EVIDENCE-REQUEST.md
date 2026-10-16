# Product Data Evidence Request Template

Use this Discover artifact with the Product Owner to identify available tools, route precise data requests, and assess what is received.

```yaml
product_data_evidence_request:
  id: PDER-001
  project: project-name
  phase: discover
  status: draft # draft | routed | partially-received | received | closed
  prepared_by: ux-research-agent
  prepared_at: YYYY-MM-DD
  request_coordinator: product-owner
  decision_to_support: ""
  linked_question_ids: []

tool_inventory:
  - id: TOOL-001
    name: Quantum Metric
    category: session-and-journey-analytics # session-and-journey-analytics | voc | kpi-dashboard | product-analytics | support | experimentation | accessibility | operations | other
    purpose: ""
    source_owner: unassigned
    access_owner: unassigned
    available_outputs: []
    approved_access_method: unknown # read-only | saved-report | de-identified-export | aggregate-screenshot | analyst-walkthrough | unknown
    coverage: ""
    known_restrictions: []
    privacy_and_masking_status: unknown

data_requests:
  - id: DATAREQ-001
    tool_ids: []
    linked_question_ids: []
    decision_relevance: ""
    signal_or_metric: ""
    operational_definition_needed: true
    population_and_eligibility: ""
    segments: []
    journey_steps: []
    date_range: ""
    comparison_period: ""
    granularity: ""
    required_fields: []
    preferred_delivery: de-identified-export
    acceptable_formats: [csv, xlsx]
    data_owner: unassigned
    access_approver: unassigned
    due_at: null
    status: open # open | routed | received | partial | unavailable | declined
    fallback: ""

definition_checks:
  - request_id: DATAREQ-001
    numerator: unknown
    denominator: unknown
    event_or_query_logic: unknown
    exclusions: unknown
    baseline: unknown
    target_status: unknown
    reporting_cadence: unknown
    instrumentation_changes: unknown
    quality_notes: []

source_specific_checks:
  session_and_journey_analytics:
    journey_and_funnel_definition: unknown
    traffic_coverage_or_capture_rate: unknown
    friction_signal_definitions: unknown
    error_and_performance_context: unknown
    replay_authorization: not-requested # not-requested | pending | approved | denied
    masking_verified: false
  voice_of_customer:
    question_wording: unknown
    invitation_trigger_and_channel: unknown
    eligible_population: unknown
    response_or_coverage_information: unknown
    coding_taxonomy: unknown
    verbatims_de_identified: false
  kpis_and_product_analytics:
    metric_owner: unassigned
    data_source_and_event_logic: unknown
    definitions_verified: false
    segments_and_exclusions_verified: false
    data_quality_verified: false

received_evidence:
  - request_id: DATAREQ-001
    evidence_id: EVID-001
    received_at: null
    source_or_location: ""
    format: ""
    provenance_verified: false
    privacy_status: unknown
    completeness: unknown # complete | partial | unusable | unknown
    supports: ""
    does_not_support: ""
    limitations: []

unresolved_access_or_data_gaps: []
next_action: product owner routes open requests to the named source and access owners
```

## Suggested transfer order

1. Existing governed read-only dashboard or saved report.
2. De-identified aggregate export with a data dictionary.
3. Analyst walkthrough with documented definitions and resulting evidence record.
4. Aggregate screenshot or PDF only when the underlying report cannot be shared.
5. Raw session replay or record-level data only when necessary, authorized, masked, and securely handled.

The Product Owner coordinates the request; the named source owner remains accountable for definitions and the access owner remains accountable for authorization.

