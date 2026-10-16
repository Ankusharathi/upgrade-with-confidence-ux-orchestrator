# Requirement Inventory

```yaml
requirement_inventory:
  id: REQINV-001
  project: upgrade-with-confidence
  phase: intake
  source_analysis: SRC-001
  version: 1
  status: human-reviewed
  prepared_by: ux-intake-agent
  prepared_at: 2026-10-11

evidence_status:
  classification: synthetic-academic-project
  note: These requirements come from the approved project framing. They are not validated customer findings or real business requirements.

completeness:
  business_goal: present
  user_goal: present
  problem_statement: present
  target_users: present
  core_use_cases: partial
  functional_requirements: missing
  non_functional_requirements: missing
  constraints: present
  assumptions: present
  success_measures: partial
  known_pain_points: partial
  stakeholders: partial
  dependencies: missing
  risks: partial
  in_scope: present
  out_of_scope: present
  open_questions: present

items:
  - id: REQ-001
    category: business-goal
    statement: Increase completion of the digital device-upgrade journey.
    source_ids: [SRC-001]
    source_location: Primary conversion goal
    classification: explicitly-stated
    verification_status: approved-project-direction
    priority: high
    approval_status: approved-input
    related_items: [REQ-002, REQ-006]
  - id: REQ-002
    category: user-goal
    statement: Understand the full cost and account impact before committing to an upgrade.
    source_ids: [SRC-001]
    source_location: Problem statement and design challenge
    classification: explicitly-stated
    verification_status: unvalidated-project-hypothesis
    priority: high
    approval_status: approved-input
    related_items: [REQ-001, REQ-003]
  - id: REQ-003
    category: known-pain-point
    statement: Customers may be uncertain about today's payment, the new monthly bill, trade-in effects, and plan changes.
    source_ids: [SRC-001]
    source_location: Problem statement
    classification: explicitly-stated
    verification_status: synthetic-hypothesis
    priority: high
    approval_status: requires-discover-evidence
    related_items: [REQ-002]
  - id: REQ-004
    category: target-user
    statement: Existing telecom customers who are eligible for a device upgrade and begin the digital upgrade journey.
    source_ids: [SRC-001]
    source_location: Problem statement
    classification: explicitly-stated
    verification_status: approved-scope
    priority: high
    approval_status: approved
    related_items: [GAP-001]
  - id: REQ-005
    category: in-scope
    statement: Cost and impact clarity from upgrade consideration through order confirmation, with emphasis on review and checkout.
    source_ids: [SRC-001]
    source_location: Design challenge
    classification: explicitly-stated
    verification_status: approved-scope
    priority: high
    approval_status: approved
    related_items: [REQ-006]
  - id: REQ-006
    category: success-measure
    statement: The primary success signal is the percentage of eligible customers who move from starting an upgrade to a confirmed order.
    source_ids: [SRC-001]
    source_location: Primary conversion goal
    classification: explicitly-stated
    verification_status: no-baseline-or-target
    priority: high
    approval_status: approved-direction
    related_items: [REQ-001]
  - id: REQ-007
    category: constraint
    statement: All evidence and outcomes created for this project must be clearly labeled synthetic and must not be attributed to Verizon customers or systems.
    source_ids: [SRC-001]
    source_location: Evidence status and measurement note
    classification: confirmed-fact
    verification_status: project-rule
    priority: high
    approval_status: approved
    related_items: []
  - id: REQ-008
    category: out-of-scope
    statement: Claims about real Verizon customers, systems, conversion rates, or business performance.
    source_ids: [SRC-001]
    source_location: Evidence status
    classification: confirmed-fact
    verification_status: project-rule
    priority: high
    approval_status: approved
    related_items: []

conflicts: []

missing_information:
  - id: GAP-004
    field: success-measures
    information_needed: Define synthetic targets only after the baseline model and measurement assumptions are documented.
    decision_affected: Validation and case-study claims
    owner: ux-research-agent

summary:
  present: [business-goal, user-goal, problem-statement, target-users, assumptions, constraints, in-scope, out-of-scope, open-questions]
  partial: [core-use-cases, success-measures, known-pain-points, stakeholders, risks]
  conflicting: []
  missing: [functional-requirements, non-functional-requirements, dependencies]

decisions_recorded:
  - DEC-INTAKE-001

next_action: Route remaining evidence and measurement gaps to Discover.
```
