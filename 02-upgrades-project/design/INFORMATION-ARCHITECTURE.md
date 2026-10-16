# Proposed Information Architecture

> **PROPOSED STRUCTURE — LABELS AND HIERARCHY REQUIRE VALIDATION**

```yaml
artifact:
  id: IA-DESIGN-001
  type: information-architecture
  version: 1
  status: agent-reviewed
  project: upgrade-with-confidence
  phase: design
  producer: ux-journey-architecture-agent
  mode: proposed
  evidence_classification: approved-design-direction

architecture_scope:
  product_or_service: Synthetic responsive-web device upgrade
  users_or_roles: [Eligible consumer customer in SCENARIO-001]
  tasks: [Select upgrade, add or decline trade-in, understand impact, review, edit, confirm]
  channels: [responsive-web]
  in_scope: [Upgrade Impact information and flow-local navigation]
  out_of_scope: [Global account navigation, production catalog taxonomy, support information architecture]

information_objects:
  - id: INFO-001
    name: Upgrade session
    definition: The retained synthetic configuration from eligibility through confirmation.
    attributes: [masked-line, eligibility-status, selected-device, payment-choice, trade-in-choice, plan-effect, totals, submission-status]
    identifiers: [synthetic-session-id]
    relationships: [contains INFO-002 through INFO-008]
    lifecycle_states: [initialized, configuring, reviewable, submitting, confirmed, failed, expired]
    source_of_truth: synthetic-prototype-state
    owner: ux-design-agent
    sensitivity: invented-data-only
    permission_rules: [One simulated signed-in customer]
    finding_ids: [FIND-001, FIND-003]
    evidence_ids: [EVID-001, EVID-003, EVID-009]
    assumptions: [Prototype can retain configuration across edits.]
  - id: INFO-002
    name: Due today
    definition: Amount charged at the time of the synthetic order.
    attributes: [amount, included-items, status, calculation-time]
    identifiers: []
    relationships: [part-of INFO-008]
    lifecycle_states: [unknown, calculating, confirmed, changed, unavailable]
    source_of_truth: synthetic-pricing-service
    owner: ux-design-agent
    sensitivity: invented-financial-data
    permission_rules: []
    finding_ids: [FIND-001]
    evidence_ids: [EVID-001, EVID-003, EVID-006]
    assumptions: []
  - id: INFO-003
    name: Monthly bill impact
    definition: Projected change to recurring monthly charges before and after promotional credits.
    attributes: [device-charge, service-plan-change, recurring-credit, pre-credit-delta, post-credit-delta, start-timing]
    identifiers: []
    relationships: [part-of INFO-008]
    lifecycle_states: [unknown, calculating, estimated, confirmed-for-scenario, changed]
    source_of_truth: synthetic-billing-model
    owner: ux-design-agent
    sensitivity: invented-financial-data
    permission_rules: []
    finding_ids: [FIND-001, FIND-002]
    evidence_ids: [EVID-002, EVID-004, EVID-006]
    assumptions: []
  - id: INFO-004
    name: Trade-in value
    definition: Estimated or confirmed value, its delivery method, timing, and conditions.
    attributes: [amount, status, device, condition-basis, inspection-rule, return-deadline, credit-method, credit-timing]
    identifiers: [synthetic-trade-in-id]
    relationships: [affects INFO-003, part-of INFO-008]
    lifecycle_states: [not-selected, estimating, estimated, changed, removed, confirmed-after-inspection]
    source_of_truth: synthetic-trade-in-service
    owner: ux-design-agent
    sensitivity: invented-device-data
    permission_rules: []
    finding_ids: [FIND-002]
    evidence_ids: [EVID-002, EVID-004, EVID-005, EVID-006, EVID-007]
    assumptions: [Prototype stops at estimated status.]
  - id: INFO-005
    name: Promotion
    definition: Conditional synthetic recurring credit and the actions required to retain it.
    attributes: [credit-amount, duration, start-timing, eligibility, conditions, loss-conditions]
    identifiers: [synthetic-promotion-id]
    relationships: [affects INFO-003, depends-on INFO-004]
    lifecycle_states: [eligible, conditional, pending-trade-in, unavailable, removed]
    source_of_truth: synthetic-promotion-service
    owner: ux-design-agent
    sensitivity: invented-commercial-data
    permission_rules: []
    finding_ids: [FIND-001, FIND-002]
    evidence_ids: [EVID-002, EVID-004, EVID-006]
    assumptions: []
  - id: INFO-006
    name: Plan impact
    definition: Whether the plan changes and how that affects the monthly service amount or eligibility.
    attributes: [current-plan, proposed-plan, price-delta, change-status, promotion-relationship]
    identifiers: []
    relationships: [affects INFO-003, part-of INFO-008]
    lifecycle_states: [unchanged, changed, required-change, unavailable]
    source_of_truth: synthetic-plan-service
    owner: ux-design-agent
    sensitivity: invented-account-data
    permission_rules: []
    finding_ids: [FIND-001]
    evidence_ids: [EVID-001, EVID-002, EVID-003, EVID-006]
    assumptions: [SCENARIO-001 keeps the plan unchanged.]
  - id: INFO-007
    name: One-time and delayed items
    definition: Fees or credits that occur on a later bill rather than today.
    attributes: [label, amount, timing, status, explanation]
    identifiers: []
    relationships: [part-of INFO-008]
    lifecycle_states: [estimated, confirmed-for-scenario, changed]
    source_of_truth: synthetic-billing-model
    owner: ux-design-agent
    sensitivity: invented-financial-data
    permission_rules: []
    finding_ids: [FIND-001]
    evidence_ids: [EVID-001, EVID-002, EVID-003, EVID-006]
    assumptions: []
  - id: INFO-008
    name: Upgrade Impact
    definition: Grouped review of immediate, monthly, delayed, estimated, and conditional effects.
    attributes: [due-today, next-bill, ongoing-monthly, trade-in, promotion, plan, conditions, update-status]
    identifiers: []
    relationships: [summarizes INFO-002 through INFO-007]
    lifecycle_states: [empty, partial, calculating, current, changed, unavailable]
    source_of_truth: derived-from-synthetic-session
    owner: ux-design-agent
    sensitivity: invented-financial-data
    permission_rules: []
    finding_ids: [FIND-001, FIND-002, FIND-003, FIND-004]
    evidence_ids: [EVID-001, EVID-002, EVID-003, EVID-005, EVID-006, EVID-007, EVID-008, EVID-009, EVID-010]
    assumptions: [Grouped review improves comprehension.]

taxonomy:
  top_level_concepts: [Your line, Your device, Due today, Your next bill, Ongoing monthly impact, Trade-in and promotion, Plan impact, Conditions, Delivery and next steps]
  terms:
    - id: TERM-001
      preferred_label: Due today
      definition: Amount charged when the order is placed.
      synonyms: [pay now]
      deprecated_terms: [upfront total without explanation]
      audience_or_role_variation: []
      evidence_or_decision_ids: [INSIGHT-001, DEC-DESIGN-DIRECTION-001]
      validation_status: untested
    - id: TERM-002
      preferred_label: New monthly bill
      definition: Projected recurring bill after device charge, plan effect, and active recurring credits.
      synonyms: [ongoing monthly impact]
      deprecated_terms: [monthly price when it excludes service effects]
      audience_or_role_variation: []
      evidence_or_decision_ids: [INSIGHT-001, DEC-DESIGN-DIRECTION-001]
      validation_status: untested
    - id: TERM-003
      preferred_label: Estimated trade-in value
      definition: Provisional value subject to inspection and synthetic offer conditions.
      synonyms: [trade-in estimate]
      deprecated_terms: [trade-in credit when not yet confirmed]
      audience_or_role_variation: []
      evidence_or_decision_ids: [FIND-002]
      validation_status: untested

hierarchy:
  root_id: INFO-001
  parent_child_relationships:
    - INFO-001 contains INFO-008
    - INFO-008 summarizes INFO-002
    - INFO-008 summarizes INFO-003
    - INFO-008 summarizes INFO-004
    - INFO-008 summarizes INFO-005
    - INFO-008 summarizes INFO-006
    - INFO-008 summarizes INFO-007
  cross_links: [INFO-004 affects INFO-003, INFO-005 affects INFO-003, INFO-006 affects INFO-003]
  depth_notes: Material amounts and status appear in the primary summary; definitions and conditions may expand in context without becoming undiscoverable.

navigation_and_findability:
  entry_points: [Eligibility confirmation]
  global_navigation: [Outside project scope]
  local_navigation: [Back, Continue, Edit, Review order, Place upgrade order, Exit upgrade]
  contextual_navigation: [Explain this amount, View conditions, Edit device, Edit trade-in, Edit payment]
  search_requirements: []
  filter_and_sort_requirements: []
  orientation_and_breadcrumb_requirements: [Visible step title and current context; progress indicator must not imply steps are complete when invalid.]
  empty_and_zero_result_requirements: [Explain unavailable selections and provide a recovery or exit path.]

task_and_journey_mapping:
  - task_or_stage_id: FSTAGE-004
    required_information_object_ids: [INFO-002, INFO-003, INFO-004, INFO-005, INFO-006, INFO-007, INFO-008]
    required_labels_or_cues: [Due today, New monthly bill, Estimated, Conditional, Starts after inspection, No plan change]
    role_or_permission_context: Synthetic signed-in customer

governance:
  content_owners: [Ankusha as academic design owner; real policy and commercial owners are not available]
  approval_workflow: [Human Design gate, synthetic validation, revision route]
  localization: [Not designed; allow flexible text expansion and locale-aware currency in implementation]
  versioning: [Artifact and Figma version must be linked before validation]
  retention_or_archival: [Retain with academic project]

ambiguities_and_conflicts: [New monthly bill may be misunderstood if promotional credits are delayed; show both early-bill and ongoing states.]
accessibility_requirements: [Semantic grouping, programmatic labels, non-color status, predictable reading order, reflow without lost relationships]
privacy_and_data_exposure_constraints: [Invented and masked data only]
technical_dependencies: [Synthetic state model now; real pricing, billing, trade-in, promotion, plan, and order services later]
assumptions: [The grouped structure is understandable.]
limitations: [Labels and hierarchy are unvalidated; visual mapping pending Figma]
validation_needs: [Findability, comprehension, mobile reflow, screen-reader relationship clarity]
related_decisions: [DEC-DEFINE-001, DEC-DESIGN-DIRECTION-001]
next_consumer: design-specification
```
