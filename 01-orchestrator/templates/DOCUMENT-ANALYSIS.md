# Document Analysis Template

Use this supporting Intake artifact to analyze a BRD, PRD, product brief, or comparable source before requirements are normalized. Delete unused example rows; do not leave empty placeholders in a completed artifact.

```yaml
document_analysis:
  id: DA-001
  project: project-name
  phase: intake
  source:
    id: INP-001
    path_or_url: ""
    document_type: brd # brd | prd | brief | request | other
    title: ""
    version: null
    date: null
    author_or_source: unknown
    approval_status: unknown
  analyzed_by: ux-intake-agent
  analyzed_at: YYYY-MM-DD
  status: draft # draft | agent-reviewed | human-reviewed

intent:
  product_or_service: ""
  business_intent: ""
  requested_outcome: ""
  proposed_solution: ""
  decision_to_support: ""
  users: []
  surfaces: []
  market: unknown
  release_context: unknown

classified_statements:
  confirmed_facts:
    - id: CF-001
      statement: ""
      source_ids: []
      verification_status: verified
  explicitly_stated:
    - id: ES-001
      statement: ""
      source_location: ""
      approval_status: unknown
  assumptions:
    - id: AS-001
      statement: ""
      validation_needed: ""
  unknown_gaps:
    - id: GAP-001
      gap: ""
      why_needed: ""
      owner: unassigned

evidence_inventory:
  - id: EVID-001
    source: ""
    accessed_or_dated: null
    source_type: internal # internal | external | research | analytics | policy | other
    supports: ""
    limitations: ""

contradictions_and_ambiguities:
  - id: AMB-001
    description: ""
    related_ids: []
    resolution_needed: ""

limitations: []

sufficiency:
  requirement_extraction_ready: false
  stakeholder_questioning_ready: false
  rationale: ""

next_action: ""
```

## Classification rules

- `confirmed-fact` requires an approved or authoritative source; appearing in a BRD or PRD is not sufficient.
- `explicitly-stated` preserves what the source says without claiming independent validation.
- `assumption` records something implied or believed but not validated.
- `unknown-gap` records information needed for a confident UX decision but currently missing.
- Preserve contradictions and exact business terminology instead of resolving them by inference.

