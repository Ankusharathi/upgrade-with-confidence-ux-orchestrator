# UX Content Specification

> **DRAFT SYNTHETIC CONTENT — NOT CARRIER POLICY OR APPROVED COMMERCIAL COPY**

```yaml
artifact:
  id: ART-DESIGN-003
  type: ux-content-specification
  version: 1
  status: agent-reviewed
  project: upgrade-with-confidence
  phase: design
  producer: ux-design-agent

content_system:
  voice_and_tone: [direct, calm, specific, transparent, non-promotional at commitment points]
  terminology_source: IA-DESIGN-001
  reading_and_comprehension_needs:
    - Use common words and short sentences.
    - Pair every amount with its timing and status.
    - State conditions near the value they affect.
    - Distinguish an estimate from a confirmed amount in text, not color alone.
  localization_scope: English prototype only; structure must allow text expansion and locale-aware currency later.
  content_owner: Ankusha, academic design owner

content_items:
  - id: CONTENT-001
    state_ids: [STATE-001]
    type: heading
    intent: Confirm that the selected line can begin the synthetic upgrade.
    text: "This line is ready to upgrade"
    text_status: draft
    variants: []
    source_or_policy: SCENARIO-001
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Use as the page h1; eligibility status must also be present in text.]
    localization_notes: []
    constraints: [Do not imply promotion eligibility.]
    validation_criteria_ids: [VAL-001]
  - id: CONTENT-002
    state_ids: [STATE-001]
    type: status
    intent: Identify the synthetic line without exposing a full phone number.
    text: "Mobile line ending 2048 · Nova 11"
    text_status: draft
    variants: []
    source_or_policy: SCENARIO-001
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Do not rely on visual grouping alone.]
    localization_notes: []
    constraints: [Invented masked data only.]
    validation_criteria_ids: [VAL-001]
  - id: CONTENT-003
    state_ids: [STATE-002]
    type: heading
    intent: Introduce device and payment selection.
    text: "Choose your new device"
    text_status: draft
    variants: []
    source_or_policy: DEC-DESIGN-DIRECTION-001
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Use as the page h1.]
    localization_notes: []
    constraints: []
    validation_criteria_ids: [VAL-001]
  - id: CONTENT-004
    state_ids: [STATE-002]
    type: label
    intent: State the complete fictional device price.
    text: "Full price: $899.99"
    text_status: draft
    variants: []
    source_or_policy: SCENARIO-001
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Associate with Nova X option.]
    localization_notes: [Currency formatting required in production.]
    constraints: [Synthetic value.]
    validation_criteria_ids: [VAL-001]
  - id: CONTENT-005
    state_ids: [STATE-002]
    type: label
    intent: State device payment without implying it is the whole bill.
    text: "$25.00 a month for 36 months for the device"
    text_status: draft
    variants: []
    source_or_policy: SCENARIO-001
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Read amount, period, term, and object together.]
    localization_notes: []
    constraints: [Do not label as new monthly bill.]
    validation_criteria_ids: [VAL-001]
  - id: CONTENT-006
    state_ids: [STATE-002]
    type: status
    intent: Announce a meaningful impact change.
    text: "Upgrade Impact updated. Device payment is now $25.00 a month."
    text_status: draft
    variants: [Trade-in added, Trade-in removed, Plan changed]
    source_or_policy: DEC-DESIGN-DIRECTION-001
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Use a polite live region; do not announce the entire summary.]
    localization_notes: []
    constraints: [Announce only user-triggered meaningful changes.]
    validation_criteria_ids: [VAL-004]
  - id: CONTENT-007
    state_ids: [STATE-003]
    type: heading
    intent: Frame trade-in as optional.
    text: "Would you like to trade in a device?"
    text_status: draft
    variants: []
    source_or_policy: SCENARIO-001
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Group Add trade-in and Continue without trade-in under this question.]
    localization_notes: []
    constraints: []
    validation_criteria_ids: [VAL-002]
  - id: CONTENT-008
    state_ids: [STATE-003]
    type: disclosure
    intent: Prevent an estimate from being interpreted as guaranteed value.
    text: "Your trade-in value is an estimate until the device is received and inspected."
    text_status: draft
    variants: []
    source_or_policy: FIND-002
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Keep visible near estimate, not only in expandable terms.]
    localization_notes: []
    constraints: [Synthetic scenario wording; not carrier policy.]
    validation_criteria_ids: [VAL-002]
  - id: CONTENT-009
    state_ids: [STATE-003]
    type: instruction
    intent: Explain why invented device-condition questions are required.
    text: "Answer each condition question so we can calculate a synthetic estimate."
    text_status: draft
    variants: []
    source_or_policy: SCENARIO-001
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Associate instruction with the field group.]
    localization_notes: []
    constraints: [Explicitly say synthetic.]
    validation_criteria_ids: [VAL-002]
  - id: CONTENT-010
    state_ids: [STATE-003]
    type: status
    intent: Present estimate with method and timing.
    text: "Estimated promotional value: $360, delivered as $10.00 monthly credits for 36 months after eligibility and inspection are confirmed."
    text_status: draft
    variants: [Estimate unavailable, Trade-in declined]
    source_or_policy: SCENARIO-001
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Keep status word, value, delivery method, duration, and conditions in the same semantic group.]
    localization_notes: []
    constraints: [Never shorten to "$360 off" without conditions.]
    validation_criteria_ids: [VAL-002]
  - id: CONTENT-011
    state_ids: [STATE-004]
    type: heading
    intent: Introduce the grouped financial and account review.
    text: "Your Upgrade Impact"
    text_status: draft
    variants: []
    source_or_policy: DEC-DESIGN-DIRECTION-001
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Use as the page h1 or labeled region heading.]
    localization_notes: []
    constraints: []
    validation_criteria_ids: [VAL-001]
  - id: CONTENT-012
    state_ids: [STATE-004]
    type: label
    intent: State the immediate synthetic charge.
    text: "Due today: $72.00 device tax"
    text_status: draft
    variants: []
    source_or_policy: SCENARIO-001
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Amount and timing must be read together.]
    localization_notes: []
    constraints: [Synthetic value, not tax guidance.]
    validation_criteria_ids: [VAL-001]
  - id: CONTENT-013
    state_ids: [STATE-004]
    type: label
    intent: Explain the synthetic next-bill difference before recurring credits begin.
    text: "Estimated next bill impact: $60.00 more — $35.00 one-time upgrade fee plus $25.00 device payment. Promotional credits may begin in 1–2 synthetic billing cycles."
    text_status: draft
    variants: []
    source_or_policy: SCENARIO-001
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Do not split the amount from its included items.]
    localization_notes: []
    constraints: [Use "estimated" and "synthetic".]
    validation_criteria_ids: [VAL-001, VAL-002]
  - id: CONTENT-014
    state_ids: [STATE-004]
    type: label
    intent: State the synthetic ongoing monthly difference after credits.
    text: "Ongoing monthly impact after credits begin: $15.00 more"
    text_status: draft
    variants: [Before-credit amount: $25.00 more]
    source_or_policy: SCENARIO-001
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Expose before-credit and after-credit states as related values.]
    localization_notes: []
    constraints: [Do not imply credit start is guaranteed.]
    validation_criteria_ids: [VAL-001, VAL-002]
  - id: CONTENT-015
    state_ids: [STATE-004]
    type: status
    intent: State the plan consequence.
    text: "Plan impact: No plan change. Your synthetic plan remains $65.00 a month."
    text_status: draft
    variants: [Plan change required, Plan information unavailable]
    source_or_policy: SCENARIO-001
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Do not communicate unchanged status by icon alone.]
    localization_notes: []
    constraints: [Synthetic plan only.]
    validation_criteria_ids: [VAL-001]
  - id: CONTENT-016
    state_ids: [STATE-004]
    type: disclosure
    intent: Explain the conditions affecting the synthetic promotional value.
    text: "To receive all synthetic credits, send the described trade-in for inspection and keep the qualifying configuration for the 36-month credit period."
    text_status: draft
    variants: []
    source_or_policy: SCENARIO-001
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Material conditions must be available without hover.]
    localization_notes: []
    constraints: [Not a real carrier term.]
    validation_criteria_ids: [VAL-002]
  - id: CONTENT-017
    state_ids: [STATE-005]
    type: heading
    intent: Establish the final review boundary.
    text: "Review your upgrade before placing the order"
    text_status: draft
    variants: []
    source_or_policy: FIND-003
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Use as page h1.]
    localization_notes: []
    constraints: []
    validation_criteria_ids: [VAL-003]
  - id: CONTENT-018
    state_ids: [STATE-005]
    type: control
    intent: Name the consequential action explicitly.
    text: "Place upgrade order"
    text_status: draft
    variants: [Submitting order…]
    source_or_policy: FIND-003
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Accessible name must match visible label; disable repeat activation only while status is being resolved.]
    localization_notes: []
    constraints: [Do not use Continue or Submit.]
    validation_criteria_ids: [VAL-003, VAL-005]
  - id: CONTENT-019
    state_ids: [STATE-005]
    type: disclosure
    intent: State what the consequential action does.
    text: "Selecting Place upgrade order creates one synthetic order using the details shown above."
    text_status: draft
    variants: []
    source_or_policy: SCENARIO-001
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Associate with the action using nearby text or programmatic description.]
    localization_notes: []
    constraints: [Explicitly synthetic.]
    validation_criteria_ids: [VAL-003]
  - id: CONTENT-020
    state_ids: [STATE-006]
    type: status
    intent: Explain an in-progress calculation.
    text: "Updating your Upgrade Impact…"
    text_status: draft
    variants: [Calculating trade-in estimate…, Placing your order…, Checking order status…]
    source_or_policy: DEC-DESIGN-DIRECTION-001
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Announce once with appropriate politeness.]
    localization_notes: []
    constraints: [Do not announce decorative progress repeatedly.]
    validation_criteria_ids: [VAL-004]
  - id: CONTENT-021
    state_ids: [STATE-007]
    type: status
    intent: Explain an empty result and recovery.
    text: "No eligible options are available for this synthetic selection. Change your selection or continue without the optional item."
    text_status: draft
    variants: []
    source_or_policy: synthetic-state
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Provide a heading and direct recovery action.]
    localization_notes: []
    constraints: []
    validation_criteria_ids: [VAL-005]
  - id: CONTENT-022
    state_ids: [STATE-008]
    type: error
    intent: Explain a synthetic permission block without exposing sensitive data.
    text: "This account cannot complete an upgrade in the demo. Return to the account or end the demo."
    text_status: draft
    variants: []
    source_or_policy: synthetic-state
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Focus the blocking heading.]
    localization_notes: []
    constraints: [Do not reveal a protected role or account detail.]
    validation_criteria_ids: [VAL-005]
  - id: CONTENT-023
    state_ids: [STATE-009]
    type: error
    intent: Prevent commitment while material impact is unavailable.
    text: "We cannot confirm your complete Upgrade Impact right now. Try again before placing the order."
    text_status: draft
    variants: [Price unavailable, Promotion unavailable, Trade-in unavailable]
    source_or_policy: synthetic-state
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [State the affected information and recovery action.]
    localization_notes: []
    constraints: [Do not show stale values as current.]
    validation_criteria_ids: [VAL-005]
  - id: CONTENT-024
    state_ids: [STATE-010]
    type: error
    intent: Summarize validation errors.
    text: "Check the information below before continuing."
    text_status: draft
    variants: []
    source_or_policy: accessibility-requirement
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Error summary receives focus and links to each invalid field.]
    localization_notes: []
    constraints: []
    validation_criteria_ids: [VAL-004]
  - id: CONTENT-025
    state_ids: [STATE-010]
    type: error
    intent: Identify a specific correction.
    text: "Choose whether the trade-in device powers on."
    text_status: draft
    variants: [Other field-specific errors]
    source_or_policy: SCENARIO-001
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Associate text with the field and include it in error summary.]
    localization_notes: []
    constraints: [Do not say only "Invalid input".]
    validation_criteria_ids: [VAL-004]
  - id: CONTENT-026
    state_ids: [STATE-011]
    type: recovery
    intent: Offer a predictable session restoration choice.
    text: "We saved your last valid synthetic configuration. Resume where you stopped or start over."
    text_status: draft
    variants: []
    source_or_policy: synthetic-state
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Use two explicitly labeled actions.]
    localization_notes: []
    constraints: []
    validation_criteria_ids: [VAL-005]
  - id: CONTENT-027
    state_ids: [STATE-012]
    type: recovery
    intent: Explain stale values and require recalculation.
    text: "Your upgrade session expired. Refresh the details before continuing so the amounts are current."
    text_status: draft
    variants: []
    source_or_policy: synthetic-state
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Focus heading and preserve safe choices.]
    localization_notes: []
    constraints: [Submission remains unavailable until refresh completes.]
    validation_criteria_ids: [VAL-005]
  - id: CONTENT-028
    state_ids: [STATE-013]
    type: error
    intent: Explain an unknown submission result without encouraging duplicate submission.
    text: "We could not confirm whether your synthetic order was placed. We are checking the order status before you try again."
    text_status: draft
    variants: []
    source_or_policy: synthetic-state
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Announce status changes without repeatedly interrupting.]
    localization_notes: []
    constraints: [Retry disabled until safe.]
    validation_criteria_ids: [VAL-005]
  - id: CONTENT-029
    state_ids: [STATE-013]
    type: recovery
    intent: Enable a safe retry only when no order exists.
    text: "No order was found. It is safe to try again."
    text_status: draft
    variants: [Order found; showing confirmation, Status still unavailable; check again]
    source_or_policy: synthetic-state
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Status and enabled action must be programmatically related.]
    localization_notes: []
    constraints: []
    validation_criteria_ids: [VAL-005]
  - id: CONTENT-030
    state_ids: [STATE-014]
    type: confirmation
    intent: Confirm one successful synthetic order.
    text: "Your synthetic upgrade order is confirmed"
    text_status: draft
    variants: []
    source_or_policy: SCENARIO-001
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Focus confirmation heading and announce once.]
    localization_notes: []
    constraints: [Always retain "synthetic".]
    validation_criteria_ids: [VAL-003, VAL-005]
  - id: CONTENT-031
    state_ids: [STATE-014, STATE-015]
    type: status
    intent: Provide a traceable invented order reference.
    text: "Demo order: SYN-2048-1011"
    text_status: draft
    variants: []
    source_or_policy: SCENARIO-001
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Read letters and numbers clearly; provide copy action only if implemented accessibly.]
    localization_notes: []
    constraints: [Invented identifier only.]
    validation_criteria_ids: [VAL-003]
  - id: CONTENT-032
    state_ids: [STATE-015]
    type: instruction
    intent: Explain synthetic post-order next steps.
    text: "This demonstration ends here. No device was purchased, no trade-in is required, and no account was changed."
    text_status: draft
    variants: []
    source_or_policy: project-safety-rule
    owner: Ankusha
    legal_policy_or_compliance_review: not-required
    accessibility_notes: [Keep visible on final summary.]
    localization_notes: []
    constraints: [Do not imitate a real fulfillment promise.]
    validation_criteria_ids: [VAL-003]

terminology_decisions:
  - Use Upgrade Impact for the grouped financial and account summary.
  - Use estimated, confirmed, conditional, and delayed as explicit value-status words.
  - Use Place upgrade order for the consequential action.
missing_content:
  - Real policy, legal, promotion, tax, fulfillment, cancellation, and support content is intentionally unavailable.
assumptions: [Draft copy is understandable at the intended reading level.]
limitations: [No content testing, legal review, localization review, or Figma fit check yet.]
next_consumer: design-specification
```
