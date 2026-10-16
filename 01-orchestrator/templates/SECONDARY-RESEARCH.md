# Secondary Research Template

```yaml
secondary_research:
  id: SR-001
  project: project-name
  phase: discover
  status: draft # draft | agent-reviewed | human-reviewed
  prepared_by: ux-research-agent
  prepared_at: YYYY-MM-DD
  objective: ""
  linked_question_ids: []

search_scope:
  population: ""
  context: ""
  geography: ""
  date_range: ""
  included_source_types: []
  exclusion_criteria: []
  queries_or_routes: []
  searched_at: YYYY-MM-DD

included_sources:
  - evidence_id: EVID-001
    author_or_organization: ""
    title: ""
    published_at: null
    source_or_location: ""
    accessed_at: YYYY-MM-DD
    source_type: original-research # original-research | official-data | internal-research | systematic-review | expert-guidance | market-report | other
    population_and_method: ""
    relevant_evidence: ""
    credibility: unknown # high | medium | low | unknown
    applicability: unknown # high | medium | low | unknown
    limitations: []

synthesis:
  converging_evidence: []
  conflicting_evidence: []
  context_specific_evidence: []
  unsupported_claims: []
  evidence_gaps: []

limitations: []
next_action: ""
```

Every synthesized statement must remain traceable to an included source. Record search limits so absence of evidence is not misreported as evidence of absence.

