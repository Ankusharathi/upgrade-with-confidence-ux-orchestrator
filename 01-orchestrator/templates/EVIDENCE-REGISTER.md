# Evidence Register Template

Use this living Discover artifact to track supplied sources, raw research records, provenance, quality, sensitivity, and links to questions and findings.

```yaml
evidence_register:
  id: EVIDREG-001
  project: project-name
  phase: discover
  version: 1
  status: active # active | frozen | superseded
  owner: ux-research-agent
  updated_at: YYYY-MM-DD

sources:
  - id: EVID-001
    title_or_record: ""
    source_or_location: ""
    source_owner: unknown
    evidence_type: prior-research # prior-research | participant-record | session-analytics | voc | kpi | product-analytics | support-data | policy | secondary-source | competitor-observation | current-design | standards-source | stakeholder-input | other
    created_or_collected_at: null
    accessed_at: null
    access_status: available # available | requested | unavailable | restricted
    verification_status: unverified # verified | unverified | primary-source | secondary-source
    linked_question_ids: []
    supports: ""
    does_not_support: ""
    population_and_context: ""
    quality: unknown # high | medium | low | unknown
    limitations: []
    sensitivity: internal # public | internal | confidential | restricted
    storage_location: ""
    retention_or_deletion: ""
    access_restrictions: []
    related_finding_ids: []

evidence_gaps:
  - id: EGAP-001
    linked_question_ids: []
    missing_evidence: ""
    decision_impact: ""
    owner: unassigned
    status: open # open | requested | resolved | accepted

collection_deviations:
  - id: DEV-001
    method_id: METHOD-001
    description: ""
    impact_on_evidence: ""
    resolution: ""

data_incidents: []
```

## Register rules

- Use anonymized participant identifiers; never use the register as a store for unnecessary personal information.
- `stakeholder-input` is not user evidence and must remain labeled as such.
- State both what a source supports and what it cannot support.
- A source can inform several findings, but every linkage must remain traceable.
