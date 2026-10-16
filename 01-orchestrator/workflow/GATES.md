# Gate Contract

A gate prevents incomplete or unsupported work from advancing.

## Gate outcomes

- `pass`: advance to the named next phase;
- `revise`: return to the producing agent with specific gaps;
- `human-decision`: pause for a decision the system cannot make;
- `blocked`: stop because a required input or authority is unavailable.

## Required gate definition

Each phase gate identifies:

- artifact being evaluated;
- accountable human owner;
- required evidence and completion criteria;
- conditions that trigger revision;
- decisions that require human approval;
- destination after each possible outcome.

## Gate result

```yaml
gate_result:
  phase: intake
  artifact_id: ART-001
  status: pass
  passed_criteria: []
  failed_criteria: []
  revision_request: null
  human_decision: null
  next_phase: discover
```

An automated reviewer may recommend a result. Only the named human owner can approve gates involving UX strategy, research interpretation, or design direction.

## Gate invariants

- A phase test may approve workflow behavior, but it does not pass a product gate.
- A gate may be `pass` only when its evaluated artifact is `approved` and the accountable human decision is recorded.
- `next_phase` is populated only for `pass`; otherwise it remains `null`.
- `revise` identifies the producing role, artifact, and exact correction required.
- `human-decision` identifies the decision, options, owner, and evidence needed.
- `blocked` identifies the unavailable input or authority, its owner, and an executable unblock action.
- Synthetic fixtures remain ineligible for a real product gate unless the gate itself is explicitly a synthetic workflow test.
- Open limitations and accepted risks remain traceable after passage; passage does not convert them into resolved facts.

## Phase gate registry

| Phase | Artifact evaluated | Gate template | Pass destination |
|---|---|---|---|
| Intake | UX Brief | `../templates/INTAKE-GATE-RESULT.md` | Discover |
| Discover | Research Findings | `../templates/DISCOVER-GATE-RESULT.md` | Define |
| Define | Problem Definition | `../templates/DEFINE-GATE-RESULT.md` | Design |
| Design | Design Specification | `../templates/DESIGN-GATE-RESULT.md` | Validate |
| Validate | Validation Report | `../templates/VALIDATE-GATE-RESULT.md` | Deliver |
| Deliver | Handoff Package | `../templates/DELIVER-GATE-RESULT.md` | Complete |

Validate and Deliver may route correctable product or implementation gaps back to an earlier phase. That return is a recorded revision route, not a passing gate.
