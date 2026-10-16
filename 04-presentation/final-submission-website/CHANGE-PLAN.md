# V2 Change Plan

This is the proposed revision map. It records requested changes without implementing them.

| Area | Proposed V2 change | Affects website | Affects Figma | Affects prototype | Approval |
| --- | --- | --- | --- | --- | --- |
| Opening proposition | Keep “AI can make UX work faster. It can also make the reasoning disappear.” unchanged. | No | No | No | Approved · retained |
| Redesign bridge | Replace “The redesign begins where confidence breaks” with copy centered on the unanswered payment question. | Yes | Possibly | No | Implemented in V2 |
| Audit method | Turn the existing visual/reference audit into a formal heuristic-evaluation scorecard with named principles, observations, severities, evidence limits and design responses. Add **Heuristic evaluation** as a Discover skill and expose the artifact in the phase story. | Yes | Yes | No | Implemented in V2 |
| Full-flow continuity | Retain the supplied line-selection, device-grid, PDP/configuration, color, payment, plan, protection, trade-in, review and confirmation patterns. Add Upgrade Impact as a persistent decision layer instead of replacing the journey. | Yes | Yes | Yes | Implemented in V2 prototype |
| Upgrade Impact math | Show both projected bill totals and changes from the current bill. Explain every calculation, credit timing and whether the $360 trade-in value is distributed as $10 × 36 monthly credits rather than paid immediately. | Yes | Yes | Yes | Implemented in V2 prototype |
| Upgrade Guide opening | Remove the “Clarity for your next move” hero. Begin directly with “What can we help with?” and useful starter prompts. | Yes | No | Yes | Implemented in V2 chatbot |
| User testing | Do not claim customer preference: no participants were used. Add a clearly labeled future comparative comprehension/usability study and the evidence needed before making preference claims. | Yes | Possibly | No | Implemented as study plan |
| Product-owner ending | Close with an evidence ladder, business-impact mechanism, primary/secondary metrics, guardrails and an experiment plan connecting comprehension to conversion, support demand, cancellations and retention. Keep impact as a hypothesis until measured. | Yes | No | No | Implemented in V2 |

## Current evidence status

- **Completed:** public secondary research, supplied-Figma visual review, heuristic design observations, current-to-proposed traceability, deterministic workflow walkthrough, keyboard/accessibility-tree sampling, responsive check and targeted retest.
- **Not completed:** representative-user usability or preference testing, production analytics, conversion measurement, retention measurement, complete heuristic scorecard, screen-reader testing or WCAG conformance evaluation.
- **Claim rule:** never write “customers preferred” until actual participants have compared the experiences.

## Proposed Upgrade Impact calculation

For the selected Nova X Pro example:

- **Pay today — $88.00 estimated:** device sales tax.
- **Estimated next bill — $130.56 total, $65.56 above the current $65 bill:** $65 plan + $30.56 device payment + $35 one-time upgrade fee. Promotional credits have not started.
- **Estimated ongoing bill — $85.56/month total, $20.56 above the current $65 bill:** $65 plan + $30.56 device payment − $10 conditional monthly trade-in credit.
- **Trade-in promotion — $360 total promotional value:** $10/month × 36 months after eligibility and inspection; not a $360 immediate payment.

These values remain fictional and synthetic.

## Proposed participant study before any preference claim

- Compare the supplied current/reference experience with Proposed V2 using the same upgrade scenario.
- Ask participants to identify what is paid today, the expected next bill, the ongoing bill and trade-in conditions.
- Measure comprehension accuracy, completion, critical errors, time, backtracking and confidence.
- Record preference only after both experiences have been attempted; explain the reason behind the preference.
- Treat a small qualitative sample as directional, not representative or predictive of conversion.

## Version rule

V1 remains frozen. If an approved change affects the shared prototype or chatbot, create a dedicated V2 copy of that component before editing it.
