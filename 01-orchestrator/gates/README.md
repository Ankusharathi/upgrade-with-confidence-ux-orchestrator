# Human Gates

The Orchestrator does not advance work automatically. Every phase ends in a recorded human decision: `pass`, `revise`, `human-decision`, or `blocked`.

| Phase | Decision question | Reusable template | Demonstration record |
|---|---|---|---|
| 01 Intake | Is the framing clear enough to begin discovery? | [`INTAKE-GATE-RESULT.md`](../templates/INTAKE-GATE-RESULT.md) | [`Intake result`](../../02-upgrades-project/intake/INTAKE-GATE-RESULT.md) |
| 02 Discover | Is the evidence sufficient and honestly bounded? | [`DISCOVER-GATE-RESULT.md`](../templates/DISCOVER-GATE-RESULT.md) | [`Discover result`](../../02-upgrades-project/discover/DISCOVER-GATE-RESULT.md) |
| 03 Define | Is the problem and opportunity approved for design? | [`DEFINE-GATE-RESULT.md`](../templates/DEFINE-GATE-RESULT.md) | [`Define result`](../../02-upgrades-project/define/DEFINE-GATE-RESULT.md) |
| 04 Design | Is the proposed experience complete enough to validate? | [`DESIGN-GATE-RESULT.md`](../templates/DESIGN-GATE-RESULT.md) | [`Design result`](../../02-upgrades-project/design/DESIGN-GATE-RESULT.md) |
| 05 Validate | Does the evidence support delivery, revision, or a stop? | [`VALIDATE-GATE-RESULT.md`](../templates/VALIDATE-GATE-RESULT.md) | [`Validate result`](../../02-upgrades-project/validate/VALIDATE-GATE-RESULT.md) |
| 06 Deliver | Is the package ready to release with limitations visible? | [`DELIVER-GATE-RESULT.md`](../templates/DELIVER-GATE-RESULT.md) | [`Delivery summary`](../../02-upgrades-project/deliver/DELIVERY-SUMMARY.md) |

The governing rules are defined in [`workflow/GATES.md`](../workflow/GATES.md). A synthetic gate approval demonstrates workflow completeness; it is not evidence of production readiness or business impact.
