# Handoff Contract

Every specialist agent returns a compact handoff to the orchestrator.

```yaml
handoff:
  phase: intake
  agent: ux-intake-agent
  status: complete

decision_addressed: null
artifacts_created: []
evidence_used: []
assumptions: []
limitations: []
open_questions: []
confidence: medium
recommended_next_action: review the UX brief
human_decision_required: true
```

The handoff must distinguish evidence, interpretation, and assumptions. It must not declare its own artifact approved.
