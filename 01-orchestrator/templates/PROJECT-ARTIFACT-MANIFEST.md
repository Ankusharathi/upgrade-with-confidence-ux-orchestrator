# Project Artifact Manifest Template

```yaml
manifest:
  id: MANIFEST-001
  project: project-name
  version: 1
  status: active
  maintained_by: ux-orchestrator
  updated_at: YYYY-MM-DD

format_policy:
  figma_design: designs-and-prototypes
  figjam: journeys-and-flows
  word_pdf: stakeholder-reports
  excel_csv: evidence-and-issue-registers
  markdown: workflow-system-of-record
  jira_linear: defect-execution-mirror

artifacts:
  - id: ART-001
    name: ""
    artifact_type: ""
    phase: intake
    direction: input # input | output | bidirectional
    format: markdown # figma | figjam | docx | pdf | xlsx | csv | markdown | jira | linear | image | other
    system: local-workspace
    location:
      path: null
      url: null
      file_id: null
      node_id: null
      branch_or_revision: null
      sheet_or_table: null
      issue_key: null
    version: 1
    updated_at: YYYY-MM-DD
    owner: name-or-role
    access_status: available # available | permission-required | unavailable | unknown
    source_of_truth_role: canonical # canonical | publication | structured-export | execution-mirror | reference
    purpose: ""
    consumers: []
    upstream_ids: []
    downstream_ids: []
    approval: {status: draft, decision_id: null}
    evidence_classification: not-evidence
    sensitivity: internal
    retention: project-policy
    sync_status: not-applicable # synchronized | pending | divergent | not-connected | not-applicable
    divergence_notes: null

output_requests:
  - id: OUT-001
    phase: design
    artifact_type: design-and-prototype
    required_formats: [figma]
    destination: null
    owner: name-or-role
    status: requested # requested | ready | blocked | delivered | accepted

blocked_sources: []
stale_sources: []
divergent_artifacts: []
```

The manifest records where artifacts live and which version is authoritative. It does not grant access or approve their contents.
