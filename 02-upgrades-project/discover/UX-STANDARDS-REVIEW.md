# UX Standards Review

## Evidence status

This review applies public W3C accessibility guidance to a synthetic responsive-web financial transaction. It is not a conformance audit; conformance must be evaluated against the implemented experience.

## Applicable guidance

### Review and correction before commitment

[WCAG 2.2 Success Criterion 3.3.4](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html) addresses legal and financial transactions. A qualifying experience must provide an allowed safeguard such as reversibility, input checking with correction, or review and correction before final submission.

**Project implication:** The upgrade flow should include a clearly identified review step where customers can inspect and change the selected device, payment option, trade-in details, plan choice, fulfillment, and contact information before placing the order.

### Visible labels and instructions

[WCAG 2.2 Success Criterion 3.3.2](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions) requires labels or instructions when content requires user input.

**Project implication:** Trade-in questions, payment choices, plan selections, and confirmation controls need persistent visible labels and necessary instructions. Placeholder text or visual position alone should not carry the meaning.

### Understandable cost hierarchy

[WCAG 2.2](https://www.w3.org/TR/WCAG22/) requires understandable content and descriptive headings and labels. General checkout evidence also supports a visible total and clear review step before payment.

**Project implication:** Use descriptive sections such as “Due today,” “New monthly bill,” “Trade-in credit,” and “Plan changes.” Do not rely on color alone to distinguish a charge, credit, estimate, or warning.

## Design acceptance criteria for later phases

- A screen-reader user can identify each amount, its time period, and whether it is a charge or credit.
- Keyboard users can reach, inspect, edit, and confirm every decision without losing context.
- The final action uses explicit language such as “Place upgrade order,” not a vague label such as “Continue.”
- The review screen identifies estimated or conditional values in text.
- Errors identify the affected field and provide a correction path.
- Changing the device, trade-in, plan, or payment option updates the relevant totals and announces the change.
- The customer can review and correct the order before the financial commitment is finalized.

## Limitations

- These criteria cover only the most decision-relevant standards for Discover.
- Design and implementation require broader WCAG 2.2 review during Design, Validate, and Deliver.
