# Interaction and State Specification

```yaml
artifact:
  id: ART-DESIGN-002
  type: interaction-state-specification
  version: 1
  status: agent-reviewed
  project: upgrade-with-confidence
  phase: design
  producer: ux-design-agent

evidence_notice: All states describe proposed synthetic behavior and require Figma mapping and validation.

surfaces:
  - id: SURFACE-001
    name: Upgrade configuration with live Upgrade Impact
    platform: responsive-web
    roles: [Synthetic eligible consumer customer]
    entry_points: [Eligibility confirmation]
    linked_task_flow_ids: [TASKFLOW-DESIGN-001]
  - id: SURFACE-002
    name: Final review, submission, and confirmation
    platform: responsive-web
    roles: [Synthetic eligible consumer customer]
    entry_points: [Continue from complete Upgrade Impact]
    linked_task_flow_ids: [TASKFLOW-DESIGN-001]

states:
  - id: STATE-001
    surface_id: SURFACE-001
    type: standard
    purpose: Confirm eligible line and begin configuration.
    entry_conditions: [Eligibility response succeeds]
    displayed_information: [Masked line, current device, eligibility status]
    controls_and_inputs: [Continue, Exit upgrade]
    defaults: [No device or trade-in selected]
    business_and_system_rules: [No financial amount is labeled confirmed until its synthetic calculation completes.]
    validation_rules: []
    system_feedback: [Eligibility confirmed]
    retained_context: [Masked line]
    navigation_and_exits: [Continue to device, safe exit]
    focus_intent: Move focus to eligibility result heading on entry.
    persistence_and_resume: Session may resume at last valid configuration during the demo.
    responsive_behavior: [Single column on narrow viewports, line context precedes action]
    platform_differences: []
    content_ids: [CONTENT-001, CONTENT-002]
    accessibility_requirement_ids: [A11Y-001, A11Y-002, A11Y-003]
    analytics_event_ids: [eligibility-confirmed]
    dependency_ids: [DEP-DATA-001]
    assumptions: []
    validation_criteria_ids: [VAL-001]
  - id: STATE-002
    surface_id: SURFACE-001
    type: standard
    purpose: Select device and payment while viewing the current impact.
    entry_conditions: [STATE-001 complete]
    displayed_information: [Device, full price, term, monthly device charge, due-today tax, Upgrade Impact]
    controls_and_inputs: [Device option, payment option, Continue, Back]
    defaults: [No silent preselection that creates a commitment]
    business_and_system_rules: [Recalculate impact after a valid change]
    validation_rules: [One device and payment option required]
    system_feedback: [Updated amounts and calculation status]
    retained_context: [Line and prior valid selections]
    navigation_and_exits: [Continue to trade-in, Back, Exit]
    focus_intent: Keep focus on activated control; announce summary update separately.
    persistence_and_resume: Retain last valid choice.
    responsive_behavior: [Desktop summary remains adjacent; mobile summary is reachable before Continue and can expand without trapping focus.]
    platform_differences: []
    content_ids: [CONTENT-003, CONTENT-004, CONTENT-005, CONTENT-006]
    accessibility_requirement_ids: [A11Y-001, A11Y-003, A11Y-004, A11Y-006, A11Y-008]
    analytics_event_ids: [device-selected, payment-selected]
    dependency_ids: [DEP-DATA-001]
    assumptions: []
    validation_criteria_ids: [VAL-001, VAL-004]
  - id: STATE-003
    surface_id: SURFACE-001
    type: standard
    purpose: Add or decline a trade-in and show estimate status.
    entry_conditions: [Valid device and payment]
    displayed_information: [Optional trade-in choice, estimate explanation, condition questions]
    controls_and_inputs: [Add trade-in, Continue without, device and condition fields, Get estimate]
    defaults: [Trade-in not selected]
    business_and_system_rules: [Estimate is never labeled guaranteed or confirmed]
    validation_rules: [Required condition questions must be answered before estimate]
    system_feedback: [Field errors, estimate loading, estimated result]
    retained_context: [Line, device, payment, entered trade-in details]
    navigation_and_exits: [Continue to impact, Back, Cancel trade-in]
    focus_intent: On error, focus error summary then link each error to its field; on success, focus estimate heading only when user requested calculation.
    persistence_and_resume: Retain invented non-sensitive input in session.
    responsive_behavior: [Inputs stack, help remains associated with each field]
    platform_differences: []
    content_ids: [CONTENT-007, CONTENT-008, CONTENT-009, CONTENT-010]
    accessibility_requirement_ids: [A11Y-001, A11Y-002, A11Y-003, A11Y-005, A11Y-006]
    analytics_event_ids: [trade-in-added, trade-in-declined, estimate-requested, estimate-returned]
    dependency_ids: [DEP-DATA-001, DEP-CONTENT-001]
    assumptions: []
    validation_criteria_ids: [VAL-002, VAL-004]
  - id: STATE-004
    surface_id: SURFACE-001
    type: standard
    purpose: Review the complete Upgrade Impact and edit choices.
    entry_conditions: [Required calculations are current]
    displayed_information: [Due today, next bill, ongoing monthly, trade-in, promotion, plan, conditions, last-updated status]
    controls_and_inputs: [Edit device, Edit payment, Edit trade-in, View conditions, Continue to final review]
    defaults: [Expanded primary totals, additional conditions available in context]
    business_and_system_rules: [Show pre-credit and post-credit monthly effects when credit timing differs]
    validation_rules: [No stale calculation may proceed]
    system_feedback: [Changed values are identified after edit]
    retained_context: [Complete configuration and return position]
    navigation_and_exits: [Direct edit, Continue, Back, Exit]
    focus_intent: Return focus to edited section heading and identify changed values without moving focus unexpectedly.
    persistence_and_resume: Store current synthetic configuration in session.
    responsive_behavior: [Desktop grouped summary; mobile linear reading order with a sticky summary trigger that does not obscure content]
    platform_differences: []
    content_ids: [CONTENT-011, CONTENT-012, CONTENT-013, CONTENT-014, CONTENT-015, CONTENT-016]
    accessibility_requirement_ids: [A11Y-001, A11Y-003, A11Y-004, A11Y-006, A11Y-007, A11Y-008]
    analytics_event_ids: [impact-reviewed, impact-detail-expanded, edit-used]
    dependency_ids: [DEP-DATA-001, DEP-CONTENT-001]
    assumptions: [Hierarchy is understandable.]
    validation_criteria_ids: [VAL-001, VAL-002, VAL-003, VAL-004]
  - id: STATE-005
    surface_id: SURFACE-002
    type: standard
    purpose: Present final editable review before submission.
    entry_conditions: [STATE-004 complete and calculations current]
    displayed_information: [Device, trade-in, delivery, all impact categories, commitment statement]
    controls_and_inputs: [Place upgrade order, Edit, Exit]
    defaults: [No consent checkbox unless a real policy requires one]
    business_and_system_rules: [Activation of Place upgrade order is the only submission trigger]
    validation_rules: [Configuration must remain valid]
    system_feedback: [No order created before activation]
    retained_context: [Complete configuration]
    navigation_and_exits: [Edit, Submit, Exit]
    focus_intent: Initial focus follows document order; validation error moves to summary, not the submit button.
    persistence_and_resume: Preserve configuration until successful confirmation or explicit exit.
    responsive_behavior: [Single logical order; primary action follows review content]
    platform_differences: []
    content_ids: [CONTENT-017, CONTENT-018, CONTENT-019]
    accessibility_requirement_ids: [A11Y-001, A11Y-004, A11Y-007, A11Y-009]
    analytics_event_ids: [final-review-viewed, checkout-started]
    dependency_ids: [DEP-DATA-001, DEP-CONTENT-001]
    assumptions: []
    validation_criteria_ids: [VAL-003, VAL-005]
  - id: STATE-006
    surface_id: SURFACE-001
    type: loading
    purpose: Communicate a calculation or estimate in progress.
    entry_conditions: [A user-triggered calculation begins]
    displayed_information: [What is updating, retained previous values labeled out of date when necessary]
    controls_and_inputs: [Cancel when safe]
    defaults: []
    business_and_system_rules: [Do not replace known values with misleading zeroes]
    validation_rules: []
    system_feedback: [Polite status announcement, completion announcement]
    retained_context: [All valid choices]
    navigation_and_exits: [Remain in context]
    focus_intent: Do not move focus for background updates.
    persistence_and_resume: Resume current calculation if supported; otherwise recover to last valid state.
    responsive_behavior: [Status appears near affected content]
    platform_differences: []
    content_ids: [CONTENT-020]
    accessibility_requirement_ids: [A11Y-003, A11Y-006]
    analytics_event_ids: [calculation-started, calculation-completed]
    dependency_ids: [DEP-DATA-001]
    assumptions: []
    validation_criteria_ids: [VAL-004]
  - id: STATE-007
    surface_id: SURFACE-001
    type: empty
    purpose: Explain that no eligible device, trade-in, or offer is available in the simulated branch.
    entry_conditions: [Synthetic response contains no options]
    displayed_information: [Unavailable category, reason when known, next action]
    controls_and_inputs: [Change selection, Continue without optional item, Exit]
    defaults: []
    business_and_system_rules: [Do not imply an unavailable promotion exists]
    validation_rules: []
    system_feedback: [Empty-state explanation]
    retained_context: [Unaffected selections]
    navigation_and_exits: [Recovery action and safe exit]
    focus_intent: Focus empty-state heading after user-requested navigation.
    persistence_and_resume: Preserve prior valid selections.
    responsive_behavior: [Action remains adjacent to explanation]
    platform_differences: []
    content_ids: [CONTENT-021]
    accessibility_requirement_ids: [A11Y-001, A11Y-002]
    analytics_event_ids: [empty-state-shown]
    dependency_ids: [DEP-DATA-001]
    assumptions: []
    validation_criteria_ids: [VAL-005]
  - id: STATE-008
    surface_id: SURFACE-001
    type: permission
    purpose: Explain an account lock or insufficient-role condition.
    entry_conditions: [Synthetic permission check blocks upgrade]
    displayed_information: [What is blocked, no sensitive details, next action]
    controls_and_inputs: [Return to account, Exit demo]
    defaults: []
    business_and_system_rules: [Do not reveal protected account information]
    validation_rules: []
    system_feedback: [Permission status]
    retained_context: [Minimal safe context]
    navigation_and_exits: [Safe exit]
    focus_intent: Focus blocking heading.
    persistence_and_resume: Resume only after synthetic permission becomes valid.
    responsive_behavior: [Single-column message]
    platform_differences: []
    content_ids: [CONTENT-022]
    accessibility_requirement_ids: [A11Y-001, A11Y-002]
    analytics_event_ids: [permission-block-shown]
    dependency_ids: [DEP-DATA-001]
    assumptions: []
    validation_criteria_ids: [VAL-005]
  - id: STATE-009
    surface_id: SURFACE-001
    type: unavailable
    purpose: Explain temporary pricing, promotion, inventory, or trade-in unavailability.
    entry_conditions: [Required synthetic service unavailable]
    displayed_information: [Unavailable information, effect on proceeding, safe retry]
    controls_and_inputs: [Try again, Return to prior step, Exit]
    defaults: []
    business_and_system_rules: [Do not permit commitment with unknown material impact]
    validation_rules: []
    system_feedback: [Unavailable status]
    retained_context: [All valid selections]
    navigation_and_exits: [Retry, back, exit]
    focus_intent: Focus unavailable heading after failure.
    persistence_and_resume: Retain last valid state.
    responsive_behavior: [Recovery action follows explanation]
    platform_differences: []
    content_ids: [CONTENT-023]
    accessibility_requirement_ids: [A11Y-001, A11Y-002, A11Y-006]
    analytics_event_ids: [dependency-unavailable]
    dependency_ids: [DEP-DATA-001]
    assumptions: []
    validation_criteria_ids: [VAL-005]
  - id: STATE-010
    surface_id: SURFACE-001
    type: error
    purpose: Identify invalid input or failed calculation and provide correction.
    entry_conditions: [Validation or recoverable calculation failure]
    displayed_information: [Error summary, field error, retained data, next action]
    controls_and_inputs: [Correct field, Retry]
    defaults: []
    business_and_system_rules: [Never clear unrelated valid input]
    validation_rules: [Error names the problem and correction]
    system_feedback: [Assertive error summary for submission errors]
    retained_context: [All safe valid input]
    navigation_and_exits: [Error links to field, retry, back]
    focus_intent: Focus error summary and preserve field association.
    persistence_and_resume: Retain safe inputs.
    responsive_behavior: [Errors remain adjacent to fields]
    platform_differences: []
    content_ids: [CONTENT-024, CONTENT-025]
    accessibility_requirement_ids: [A11Y-002, A11Y-005, A11Y-006]
    analytics_event_ids: [validation-error, calculation-error]
    dependency_ids: [DEP-DATA-001]
    assumptions: []
    validation_criteria_ids: [VAL-004, VAL-005]
  - id: STATE-011
    surface_id: SURFACE-001
    type: interruption
    purpose: Restore a session after refresh or accidental navigation.
    entry_conditions: [Recoverable local synthetic session exists]
    displayed_information: [Restored status and last complete step]
    controls_and_inputs: [Resume, Start over]
    defaults: [Resume is not automatic when it could surprise the user]
    business_and_system_rules: [Do not restore expired or incompatible totals as current]
    validation_rules: []
    system_feedback: [Restoration outcome]
    retained_context: [Last valid configuration]
    navigation_and_exits: [Resume, restart, exit]
    focus_intent: Focus restoration heading.
    persistence_and_resume: Explicit resume choice.
    responsive_behavior: [Same behavior across viewport sizes]
    platform_differences: []
    content_ids: [CONTENT-026]
    accessibility_requirement_ids: [A11Y-001, A11Y-002, A11Y-003]
    analytics_event_ids: [session-restored, session-restarted]
    dependency_ids: [DEP-DATA-001]
    assumptions: []
    validation_criteria_ids: [VAL-005]
  - id: STATE-012
    surface_id: SURFACE-001
    type: timeout
    purpose: Prevent use of stale prices or expired session data.
    entry_conditions: [Synthetic session expires]
    displayed_information: [Expiration, retained non-sensitive choices, required refresh]
    controls_and_inputs: [Refresh upgrade details, Exit]
    defaults: []
    business_and_system_rules: [Order submission is unavailable until recalculation succeeds]
    validation_rules: []
    system_feedback: [Session expired]
    retained_context: [Safe choices only]
    navigation_and_exits: [Refresh, exit]
    focus_intent: Focus timeout heading.
    persistence_and_resume: Revalidate all consequential amounts.
    responsive_behavior: [Same behavior across viewport sizes]
    platform_differences: []
    content_ids: [CONTENT-027]
    accessibility_requirement_ids: [A11Y-001, A11Y-002, A11Y-006]
    analytics_event_ids: [session-timeout]
    dependency_ids: [DEP-DATA-001]
    assumptions: []
    validation_criteria_ids: [VAL-005]
  - id: STATE-013
    surface_id: SURFACE-002
    type: recovery
    purpose: Verify order status after submission failure or timeout before retry.
    entry_conditions: [Submission outcome unknown or recoverable failure]
    displayed_information: [What is known, what is being checked, safe next action]
    controls_and_inputs: [Check again, Return to review, Retry when enabled]
    defaults: [Retry disabled until no existing order is confirmed]
    business_and_system_rules: [Use synthetic idempotency key]
    validation_rules: []
    system_feedback: [Status verification results]
    retained_context: [Submitted snapshot]
    navigation_and_exits: [Safe retry, review, exit]
    focus_intent: Announce status result; focus recovery heading only after user-triggered navigation.
    persistence_and_resume: Retain submitted snapshot until resolution.
    responsive_behavior: [Primary safe action follows explanation]
    platform_differences: []
    content_ids: [CONTENT-028, CONTENT-029]
    accessibility_requirement_ids: [A11Y-002, A11Y-003, A11Y-006, A11Y-009]
    analytics_event_ids: [submission-status-unknown, status-check, safe-retry]
    dependency_ids: [DEP-DATA-001]
    assumptions: [Prototype simulates status verification.]
    validation_criteria_ids: [VAL-005]
  - id: STATE-014
    surface_id: SURFACE-002
    type: confirmation
    purpose: Confirm exactly one synthetic order.
    entry_conditions: [Submission succeeds or existing order is found]
    displayed_information: [Confirmation heading, synthetic order ID, final impact, delivery next step]
    controls_and_inputs: [View summary, End demo]
    defaults: []
    business_and_system_rules: [Read-only submitted snapshot]
    validation_rules: []
    system_feedback: [Confirmation announced once]
    retained_context: [Final submitted snapshot]
    navigation_and_exits: [Post-task summary, end]
    focus_intent: Focus confirmation heading after navigation completes.
    persistence_and_resume: Confirmation can be revisited read-only.
    responsive_behavior: [Logical single-column confirmation]
    platform_differences: []
    content_ids: [CONTENT-030, CONTENT-031]
    accessibility_requirement_ids: [A11Y-001, A11Y-003, A11Y-006]
    analytics_event_ids: [order-confirmed]
    dependency_ids: [DEP-DATA-001]
    assumptions: []
    validation_criteria_ids: [VAL-003, VAL-005]
  - id: STATE-015
    surface_id: SURFACE-002
    type: post-task
    purpose: Provide read-only order impact and next steps.
    entry_conditions: [STATE-014 complete]
    displayed_information: [Submitted configuration, impact, trade-in return reminder, delivery status placeholder]
    controls_and_inputs: [End demo]
    defaults: []
    business_and_system_rules: [No editing of confirmed synthetic order]
    validation_rules: []
    system_feedback: [Read-only status]
    retained_context: [Final submitted snapshot]
    navigation_and_exits: [End demo]
    focus_intent: Normal document order.
    persistence_and_resume: Read-only for the demo session.
    responsive_behavior: [Reflow all sections without horizontal scrolling]
    platform_differences: []
    content_ids: [CONTENT-031, CONTENT-032]
    accessibility_requirement_ids: [A11Y-001, A11Y-007, A11Y-008]
    analytics_event_ids: [order-summary-viewed]
    dependency_ids: [DEP-DATA-001]
    assumptions: []
    validation_criteria_ids: [VAL-001]

transitions:
  - {from: STATE-001, to: STATE-002, trigger: Continue, condition: Eligibility valid, system_response: Load device choices}
  - {from: STATE-002, to: STATE-003, trigger: Continue, condition: Device and payment valid, system_response: Retain configuration}
  - {from: STATE-003, to: STATE-006, trigger: Get estimate, condition: Trade-in inputs valid, system_response: Calculate estimate}
  - {from: STATE-006, to: STATE-004, trigger: Calculation completes, condition: Impact current, system_response: Announce meaningful change}
  - {from: STATE-004, to: STATE-005, trigger: Continue to final review, condition: No stale or unavailable material value, system_response: Freeze review snapshot}
  - {from: STATE-005, to: STATE-006, trigger: Place upgrade order, condition: Valid once-only submission, system_response: Show submission progress}
  - {from: STATE-006, to: STATE-014, trigger: Submission succeeds, condition: One order exists, system_response: Show confirmation}
  - {from: STATE-006, to: STATE-013, trigger: Submission fails or times out, condition: Status unknown or recoverable, system_response: Verify order status}
  - {from: STATE-013, to: STATE-014, trigger: Order found, condition: Matching order exists, system_response: Show confirmation}
  - {from: STATE-014, to: STATE-015, trigger: View summary, condition: Confirmation complete, system_response: Show read-only summary}

consequential_actions:
  - id: ACTION-001
    state_id: STATE-005
    consequence: Creates one synthetic upgrade order.
    prevention: [Explicit action label, complete review, valid and current totals]
    review_and_correction: [Edit links for device, payment, trade-in, and delivery]
    confirmation: [STATE-014]
    reversibility: prototype-only
    idempotency: required
    status_verification: required
    owner: ux-design-agent

state_coverage:
  required: [standard, loading, empty, permission, unavailable, error, interruption, timeout, recovery, confirmation, post-task]
  covered: [standard, loading, empty, permission, unavailable, error, interruption, timeout, recovery, confirmation, post-task]
  deferred: []

unresolved_behavior:
  - Production cancellation and refund policy
  - Production authentication and account-role handling
  - Real carrier timing and promotion rules
limitations: [Figma frame mapping pending, prototype behavior unvalidated, no production feasibility confirmation]
next_consumer: design-specification
```
