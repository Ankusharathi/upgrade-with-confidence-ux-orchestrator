# Discover Evidence Register

```yaml
evidence_register:
  id: EVIDREG-001
  project: upgrade-with-confidence
  phase: discover
  version: 1
  status: frozen
  owner: ux-research-agent
  updated_at: 2026-10-11

evidence_notice:
  real_customer_evidence_count: 0
  public_source_count: 10
  synthetic_model_count: 1
  rule: Public evidence, project hypotheses, and synthetic data are not interchangeable.

sources:
  - id: EVID-001
    title_or_record: Verizon — Upgrade your mobile device FAQs
    source_or_location: https://www.verizon.com/support/upgrade-device-faqs/
    source_owner: Verizon
    evidence_type: secondary-source
    created_or_collected_at: null
    accessed_at: 2026-10-11
    access_status: available
    verification_status: primary-source
    linked_question_ids: [RQ-001, RQ-003]
    supports: Upgrade eligibility, plan choice, possible one-time upgrade fee, and promotional-credit consequences are documented parts of an upgrade.
    does_not_support: Customer comprehension, abandonment, or preference.
    population_and_context: Public US support information; authenticated flow not reviewed.
    quality: high
    limitations: [Page content may change, some answers are expanded dynamically.]
    sensitivity: public
    storage_location: External public URL
    retention_or_deletion: Citation only
    access_restrictions: []
    related_finding_ids: [FIND-001]
  - id: EVID-002
    title_or_record: Verizon — Device deals and promotions FAQs
    source_or_location: https://www.verizon.com/support/device-deals-faqs/
    source_owner: Verizon
    evidence_type: secondary-source
    created_or_collected_at: null
    accessed_at: 2026-10-11
    access_status: available
    verification_status: primary-source
    linked_question_ids: [RQ-001, RQ-004]
    supports: Trade-in and promotional credits can depend on device condition, plan eligibility, return, credit timing, and continued compliance.
    does_not_support: How frequently customers misunderstand these conditions.
    population_and_context: Public US promotion support information.
    quality: high
    limitations: [Offer-specific details vary.]
    sensitivity: public
    storage_location: External public URL
    retention_or_deletion: Citation only
    access_restrictions: []
    related_finding_ids: [FIND-001, FIND-002]
  - id: EVID-003
    title_or_record: AT&T — Check upgrade eligibility and options
    source_or_location: https://www.att.com/support/article/wireless/KM1002380/
    source_owner: AT&T
    evidence_type: secondary-source
    created_or_collected_at: 2026-06-04
    accessed_at: 2026-10-11
    access_status: available
    verification_status: primary-source
    linked_question_ids: [RQ-001, RQ-003]
    supports: Upgrades can involve older-plan promotion eligibility, irreversible plan changes, account locks, and a one-time fee.
    does_not_support: Actual checkout behavior or conversion impact.
    population_and_context: Public US wireless support information.
    quality: high
    limitations: [Does not show the complete authenticated upgrade flow.]
    sensitivity: public
    storage_location: External public URL
    retention_or_deletion: Citation only
    access_restrictions: []
    related_finding_ids: [FIND-001]
  - id: EVID-004
    title_or_record: AT&T — Phone trade-in program
    source_or_location: https://tradein.att.com/
    source_owner: AT&T
    evidence_type: secondary-source
    created_or_collected_at: null
    accessed_at: 2026-10-11
    access_status: partial
    verification_status: primary-source
    linked_question_ids: [RQ-001, RQ-004]
    supports: Promotional trade-in value may be delivered through monthly bill credits and depends on program terms.
    does_not_support: Complete signed-in checkout presentation or customer understanding.
    population_and_context: Public US trade-in terms.
    quality: medium
    limitations: [Automated access returned limited page content; only public indexed information was reviewed.]
    sensitivity: public
    storage_location: External public URL
    retention_or_deletion: Citation only
    access_restrictions: []
    related_finding_ids: [FIND-001, FIND-002]
  - id: EVID-005
    title_or_record: T-Mobile — Phone trade-in value and process
    source_or_location: https://www.t-mobile.com/devices/phone-trade-in/
    source_owner: T-Mobile
    evidence_type: secondary-source
    created_or_collected_at: null
    accessed_at: 2026-10-11
    access_status: available
    verification_status: primary-source
    linked_question_ids: [RQ-001, RQ-004]
    supports: Trade-in values are estimates, depend on device details and condition, and may be distinct from additional promotional value.
    does_not_support: User comprehension, trust, or completion behavior.
    population_and_context: Public US trade-in page.
    quality: high
    limitations: [Offer and value details vary by customer and device.]
    sensitivity: public
    storage_location: External public URL
    retention_or_deletion: Citation only
    access_restrictions: []
    related_finding_ids: [FIND-002]
  - id: EVID-006
    title_or_record: T-Mobile — Public deals and device promotion terms
    source_or_location: https://www.t-mobile.com/offers
    source_owner: T-Mobile
    evidence_type: secondary-source
    created_or_collected_at: null
    accessed_at: 2026-10-11
    access_status: available
    verification_status: primary-source
    linked_question_ids: [RQ-001, RQ-003, RQ-004]
    supports: Public offers disclose monthly-credit terms, plan requirements, tax, connection charges, credit timing, and consequences of early payoff or cancellation.
    does_not_support: Actual customer behavior or the authenticated upgrade flow.
    population_and_context: Public US offers available on access date.
    quality: high
    limitations: [Promotions are temporary and subject to change.]
    sensitivity: public
    storage_location: External public URL
    retention_or_deletion: Citation only
    access_restrictions: []
    related_finding_ids: [FIND-001, FIND-002]
  - id: EVID-007
    title_or_record: Google Store Help — Estimated trade-in value
    source_or_location: https://support.google.com/store/answer/13982671?co=GENIE.CountryCode%3DUS&hl=en
    source_owner: Google
    evidence_type: secondary-source
    created_or_collected_at: null
    accessed_at: 2026-10-11
    access_status: available
    verification_status: primary-source
    linked_question_ids: [RQ-004]
    supports: Estimated trade-in value can change after inspection if actual condition differs from supplied information.
    does_not_support: Telecom-plan or carrier-promotion effects.
    population_and_context: Public US Google Store trade-in help.
    quality: high
    limitations: [Adjacent retailer rather than a carrier upgrade flow.]
    sensitivity: public
    storage_location: External public URL
    retention_or_deletion: Citation only
    access_restrictions: []
    related_finding_ids: [FIND-002]
  - id: EVID-008
    title_or_record: Baymard — Payment UX research-backed standards
    source_or_location: https://baymard.com/blog/payment-ux
    source_owner: Baymard Institute
    evidence_type: secondary-source
    created_or_collected_at: 2026-06-01
    accessed_at: 2026-10-11
    access_status: available
    verification_status: secondary-source
    linked_question_ids: [RQ-002, RQ-003]
    supports: General ecommerce evidence favors a visible order summary, a clear review step, descriptive actions, and total cost before payment; the page reports 12% of surveyed US shoppers abandoned when total cost was unavailable upfront.
    does_not_support: Telecom-specific prevalence or guaranteed conversion lift.
    population_and_context: General ecommerce checkout research.
    quality: medium
    limitations: [Not specific to carrier upgrades; full underlying dataset was not independently audited.]
    sensitivity: public
    storage_location: External public URL
    retention_or_deletion: Citation only
    access_restrictions: []
    related_finding_ids: [FIND-003]
  - id: EVID-009
    title_or_record: W3C WAI — WCAG 2.2 Error Prevention for legal, financial, and data transactions
    source_or_location: https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html
    source_owner: W3C Web Accessibility Initiative
    evidence_type: standards-source
    created_or_collected_at: null
    accessed_at: 2026-10-11
    access_status: available
    verification_status: primary-source
    linked_question_ids: [RQ-003]
    supports: Financial transactions need a way to review, confirm, and correct information, or another permitted safeguard.
    does_not_support: A particular visual design or conversion outcome.
    population_and_context: WCAG 2.2 Level AA guidance.
    quality: high
    limitations: [Understanding document is informative; normative criterion should govern conformance claims.]
    sensitivity: public
    storage_location: External public URL
    retention_or_deletion: Citation only
    access_restrictions: []
    related_finding_ids: [FIND-003, FIND-004]
  - id: EVID-010
    title_or_record: W3C WAI — WCAG 2.2 Labels or Instructions
    source_or_location: https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions
    source_owner: W3C Web Accessibility Initiative
    evidence_type: standards-source
    created_or_collected_at: null
    accessed_at: 2026-10-11
    access_status: available
    verification_status: primary-source
    linked_question_ids: [RQ-003, RQ-004]
    supports: Inputs require visible labels or instructions sufficient to communicate expected information.
    does_not_support: The final content wording or hierarchy by itself.
    population_and_context: WCAG 2.2 Level A guidance.
    quality: high
    limitations: [Must be combined with other criteria for full accessibility coverage.]
    sensitivity: public
    storage_location: External public URL
    retention_or_deletion: Citation only
    access_restrictions: []
    related_finding_ids: [FIND-004]

synthetic_artifacts:
  - id: SYN-001
    title_or_record: Synthetic upgrade funnel model
    source_or_location: SYNTHETIC-FUNNEL-MODEL.md
    evidence_type: other
    verification_status: synthetic-assumption-model
    linked_question_ids: [RQ-002]
    supports: Demonstrates how stage conversion could be measured and compared.
    does_not_support: Any real baseline, user behavior, causal effect, forecast, or business result.
    related_finding_ids: []

evidence_gaps:
  - id: EGAP-001
    linked_question_ids: [RQ-001, RQ-002, RQ-003, RQ-004]
    missing_evidence: Direct research with representative eligible customers.
    decision_impact: User needs and comprehension remain hypotheses until Validate.
    owner: ux-validation-agent
    status: accepted
  - id: EGAP-002
    linked_question_ids: [RQ-002]
    missing_evidence: Real conversion analytics by stage and segment.
    decision_impact: No real baseline or forecast can be claimed.
    owner: Ankusha
    status: accepted

collection_deviations: []
data_incidents: []
```
