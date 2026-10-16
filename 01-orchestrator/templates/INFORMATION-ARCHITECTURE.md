# Information Architecture Template

```yaml
artifact:
  id: IA-001
  type: information-architecture
  version: 1
  status: draft # draft | agent-reviewed | human-reviewed | approved | superseded
  project: project-name
  phase: define # define | design
  producer: ux-journey-architecture-agent
  mode: current-state # current-state | proposed | hypothesis
  evidence_classification: approved-real-evidence

architecture_scope:
  product_or_service: ""
  users_or_roles: []
  tasks: []
  channels: []
  in_scope: []
  out_of_scope: []

information_objects:
  - id: INFO-001
    name: ""
    definition: ""
    attributes: []
    identifiers: []
    relationships: []
    lifecycle_states: []
    source_of_truth: unknown
    owner: unassigned
    sensitivity: unknown
    permission_rules: []
    finding_ids: []
    evidence_ids: []
    assumptions: []

taxonomy:
  top_level_concepts: []
  terms:
    - id: TERM-001
      preferred_label: ""
      definition: ""
      synonyms: []
      deprecated_terms: []
      audience_or_role_variation: []
      evidence_or_decision_ids: []
      validation_status: untested # supported | tested | untested | disputed

hierarchy:
  root_id: INFO-001
  parent_child_relationships: []
  cross_links: []
  depth_notes: []

navigation_and_findability:
  entry_points: []
  global_navigation: []
  local_navigation: []
  contextual_navigation: []
  search_requirements: []
  filter_and_sort_requirements: []
  orientation_and_breadcrumb_requirements: []
  empty_and_zero_result_requirements: []

task_and_journey_mapping:
  - task_or_stage_id: ""
    required_information_object_ids: []
    required_labels_or_cues: []
    role_or_permission_context: []

governance:
  content_owners: []
  approval_workflow: []
  localization: []
  versioning: []
  retention_or_archival: []

ambiguities_and_conflicts: []
accessibility_requirements: []
privacy_and_data_exposure_constraints: []
technical_dependencies: []
assumptions: []
limitations: []
validation_needs: []
related_decisions: []
next_consumer: ux-synthesis-agent
```

This artifact defines information structure, not screen layout or a technical data schema. Proposed labels, hierarchy, and navigation require validation.
