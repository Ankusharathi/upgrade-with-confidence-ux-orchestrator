# Validation Scenarios

> These scenarios are prepared for a non-participant synthetic dry run. A task is not “tested” until an authorized, traceable record exists.

```yaml
artifact:
  id: ART-VALIDATE-002
  type: validation-scenarios
  version: 1
  status: agent-reviewed
  project: upgrade-with-confidence
  phase: validate
  producer: ux-validation-agent
protocol_version: 1

scenario_answer_key:
  due_today: $72.00 synthetic device tax
  estimated_next_bill: +$60.00 composed of $25.00 device charge plus $35.00 one-time upgrade fee before promotional credits begin
  ongoing_before_credit: +$25.00 per month
  ongoing_after_credit: +$15.00 per month
  trade_in: Estimated $360 promotional value
  promotion: $10.00 per month for 36 months; conditional on eligibility and inspection
  credit_timing: May take 1–2 synthetic billing cycles
  plan_effect: No plan change; synthetic plan remains $65.00 per month
  note: Use the displayed prototype value if it differs; record the discrepancy instead of silently correcting it.

scenarios:
  - id: VS-001
    name: Configure and explain the complete impact
    criterion_ids: [VAL-001, VAL-002]
    design_element_ids: [INFO-002, INFO-003, INFO-004, INFO-005, INFO-006, INFO-007, INFO-008, CMP-004, CMP-005]
    role_and_context: You are upgrading the eligible synthetic mobile line ending 2048 and want to understand the consequences before deciding.
    starting_state: STATE-001 eligibility confirmed
    test_data: [SCENARIO-001, Nova X 128 GB, 36-month payment, Nova 11 128 GB trade-in]
    neutral_prompt: Configure the available upgrade. Before continuing to final review, explain what would be paid now, what would affect the next bill, what would continue monthly, and what could change later.
    branches_and_states: [STATE-001, STATE-002, STATE-003, STATE-004, STATE-006]
    completion_evidence:
      - All required categories are located and correctly associated.
      - Trade-in is described as estimated rather than guaranteed.
      - Promotion condition and delayed timing are stated.
      - Plan effect is identified.
    partial_completion: Most categories are located but one timing, status, or relationship is missing or ambiguous.
    failure: A material amount is not found or is assigned to the wrong time horizon.
    critical_errors: [Estimate described as guaranteed, delayed credit described as immediate, due-today or monthly impact materially misstated]
    assistance_rule: After an unsuccessful independent attempt, one neutral reminder may ask whether any other costs or conditions are shown; record assistance.
    recovery_rule: Return to the most recent complete state and preserve valid configuration.
    probes:
      - What would you expect to pay today?
      - What changes on the next bill and after credits begin?
      - Which values are not final, and why?
      - Does the plan change?
    accessibility_accommodations: [Allow keyboard-only navigation, sufficient review time, zoom, and reflow without changing success rules]
    end_state: STATE-004 complete Upgrade Impact

  - id: VS-002
    name: Correct the trade-in from review
    criterion_ids: [VAL-003, VAL-004]
    design_element_ids: [NODE-006, NODE-007, NODE-004, CMP-001, CMP-002]
    role_and_context: At review, you notice that the selected trade-in details are not what you intended.
    starting_state: STATE-004 with a completed synthetic configuration
    test_data: [SCENARIO-001]
    neutral_prompt: Correct the trade-in choice, then return and verify that the rest of the upgrade is still accurate.
    branches_and_states: [STATE-004, STATE-003, STATE-006, STATE-004]
    completion_evidence:
      - A relevant edit path is located without using browser history.
      - Device, payment, line, and other valid choices remain intact.
      - Updated impact is identifiable after returning.
    partial_completion: Correction succeeds but context, return position, or changed-value feedback is unclear.
    failure: Correction cannot be completed or unrelated valid configuration is lost.
    critical_errors: [Wrong section edited, material context lost, updated totals cannot be distinguished]
    assistance_rule: No step names or control labels are supplied; one general goal reminder is allowed and recorded.
    recovery_rule: Use the specified return path rather than restarting the flow.
    probes: [What changed, What stayed the same, How do you know the displayed impact is current]
    accessibility_accommodations: [Keyboard-only completion, visible-focus inspection]
    end_state: STATE-004 with corrected trade-in and current impact

  - id: VS-003
    name: Review and knowingly commit
    criterion_ids: [VAL-001, VAL-003]
    design_element_ids: [NODE-008, NODE-009, ACTION-001, STATE-005, STATE-006, STATE-014]
    role_and_context: The synthetic configuration is correct and you are ready to decide whether to place the order.
    starting_state: STATE-005 final review
    test_data: [SCENARIO-001]
    neutral_prompt: Verify the complete upgrade and, only when satisfied, complete the order once.
    branches_and_states: [STATE-005, STATE-006, STATE-014, STATE-015]
    completion_evidence:
      - Review and commitment are visibly distinct.
      - The commitment label explains the action.
      - Repeat activation is unavailable during submission.
      - One synthetic confirmation and final impact are shown.
    partial_completion: The path completes but review, submission feedback, or confirmation is insufficiently clear.
    failure: Commitment is accidental, ambiguous, repeated, or produces no understandable outcome.
    critical_errors: [Unintended commitment, duplicate submission, confirmation without identifiable final impact]
    assistance_rule: No assistance before the commitment decision; stop rather than prompt an irreversible action.
    recovery_rule: Before commitment, edit or exit; after activation, wait for a known status.
    probes: [What action placed the order, What proves it happened once, What happens next]
    accessibility_accommodations: [Keyboard activation, focus and status inspection]
    end_state: STATE-014 or STATE-015

  - id: VS-004
    name: Correct an input error
    criterion_ids: [VAL-004, VAL-005]
    design_element_ids: [STATE-010, A11Y-005, CMP-006]
    role_and_context: A required synthetic trade-in answer is missing or invalid.
    starting_state: STATE-003 trade-in input
    test_data: [SCENARIO-001 with one intentionally invalid or missing field]
    neutral_prompt: Continue the trade-in estimate and resolve anything that prevents progress.
    branches_and_states: [STATE-003, STATE-010, STATE-006, STATE-004]
    completion_evidence:
      - Error is identified in text and associated with the affected input.
      - A useful correction is available.
      - Valid answers remain intact.
      - Focus behavior is predictable at implemented fidelity.
    partial_completion: Correction succeeds but error identification, association, focus, or preservation is incomplete.
    failure: Error cannot be located or corrected, or valid inputs are lost.
    critical_errors: [Unidentified error, destructive reset, inaccessible blocking state]
    assistance_rule: One neutral reminder that the page contains feedback is allowed after an independent attempt.
    recovery_rule: Correct only the affected field and resubmit once.
    probes: [What went wrong, What needs to change, Did anything else reset]
    accessibility_accommodations: [Keyboard and screen-reader-oriented semantic inspection where available]
    end_state: STATE-004 or documented limitation if the interactive error is absent

  - id: VS-005
    name: Recover from unknown submission status
    criterion_ids: [VAL-003, VAL-005]
    design_element_ids: [NODE-010, NODE-011, STATE-013, A11Y-009, CMP-006]
    role_and_context: After attempting the synthetic order, the result is not yet known.
    starting_state: STATE-013 unknown submission status
    test_data: [SCENARIO-001, synthetic idempotency key, unknown response]
    neutral_prompt: Determine what happened and reach a safe next step without risking a second order.
    branches_and_states: [STATE-013, STATE-014, STATE-005]
    completion_evidence:
      - Retry remains unavailable until status is checked.
      - The next action and reason are understandable.
      - Existing order routes to confirmation; confirmed absence permits one safe retry or return to review.
    partial_completion: Safe behavior is documented but not interactive in the prototype.
    failure: Immediate retry is possible while order status remains unknown.
    critical_errors: [Duplicate order risk, missing status check, unsafe retry]
    assistance_rule: Do not identify the safe control; stop if the available path could create a duplicate.
    recovery_rule: Verify status before any retry.
    probes: [Why is retry available or unavailable, How would you know whether an order exists]
    accessibility_accommodations: [Status-message and focus inspection]
    end_state: STATE-014, STATE-005, or documented-only result

moderator_guidance:
  introduction:
    - State that this is a synthetic academic prototype with invented data.
    - Explain that the interface is being evaluated, not the evaluator.
    - Record the exact file and prototype version before starting.
  non_leading_behavior:
    - Read the neutral prompt exactly.
    - Do not name controls, sections, expected amounts, or the intended path during an independent attempt.
    - Record assistance and deviations immediately.
  incident_and_stop_rules:
    - Stop if real personal, account, payment, or credential data appears.
    - Stop if the prototype version changes, a critical unsafe path appears, or a task requires invented behavior.
    - Classify unavailable behavior as untested or documented-only rather than simulating a success.
  closing:
    - Confirm that no result will be described as real customer research.
    - Preserve contradictions, failures, and untested criteria.

pilot:
  status: not-run
  evidence_ids: []
  changes: []

coverage:
  criteria:
    required: [VAL-001, VAL-002, VAL-003, VAL-004, VAL-005]
    covered: [VAL-001, VAL-002, VAL-003, VAL-004, VAL-005]
    uncovered: []
  roles:
    required: [Synthetic eligible customer context, desktop, mobile, keyboard-only]
    covered: [Synthetic eligible customer context, desktop, mobile, keyboard-only]
    uncovered: []
  states:
    required: [STATE-001, STATE-002, STATE-003, STATE-004, STATE-005, STATE-006, STATE-010, STATE-013, STATE-014, STATE-015]
    covered: [STATE-001, STATE-002, STATE-003, STATE-004, STATE-005, STATE-006, STATE-010, STATE-013, STATE-014, STATE-015]
    uncovered: []

limitations:
  - Scenario coverage does not mean execution or successful performance.
  - Comprehension probes completed by an expert are interface inspections, not user evidence.
  - Documented-only error and recovery states cannot be reported as implemented behavior.
approval: {status: approved, owner: Ankusha, Project Owner and UX Lead, decision_id: DEC-VALIDATION-PLAN-001}
```
