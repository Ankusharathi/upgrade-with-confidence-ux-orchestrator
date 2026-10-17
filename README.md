# Upgrade With Confidence — UX Orchestrator Final Submission

This repository demonstrates a governed, six-phase UX Orchestrator through a synthetic device-upgrade project. It connects project framing, evidence, design decisions, validation, a working upgrade prototype, and the Upgrade Guide chatbot in one inspectable submission.

## Start here

1. Experience the published case study: <https://ankusharathi.github.io/upgrade-with-confidence-ux-orchestrator/>.
2. Read [`01-orchestrator/START-HERE.md`](01-orchestrator/START-HERE.md) for the reusable system.
3. Follow the six project folders in [`02-upgrades-project/`](02-upgrades-project/) to inspect how the system was applied.
4. Review [`05-evidence/`](05-evidence/) before interpreting any research, testing, or business-impact statement.
5. Read [`DEPLOYMENT.md`](DEPLOYMENT.md) for the GitHub -> Render -> Vercel production walkthrough.

## Repository structure

```text
01-orchestrator/
├── phases/          Six phase contracts
├── agents/          Bounded specialist roles
├── skills/          Reusable methods, including heuristic evaluation
├── gates/           Human approval map and gate criteria
├── templates/       Reusable artifact formats
└── workflow/        Routing, traceability, and handoff rules

02-upgrades-project/
├── project-brief/
├── intake/
├── discover/
├── define/
├── design/
├── validate/
└── deliver/

03-chatbot/
├── chatbot-requirements/
├── conversation-flows/
└── working-application/

04-presentation/
├── case-study/
├── demo-script/
└── final-submission-website/

05-evidence/
├── synthetic-data/
├── assumptions/
└── limitations/
```

## How to assess the Orchestrator

Every phase exposes the same decision chain:

`Inputs -> Agent -> Skills -> Artifacts -> Human gate -> Next phase or revision`

The framework definitions live in `01-orchestrator/`. The corresponding project records live in `02-upgrades-project/`. This separation lets a reviewer distinguish the reusable system from one synthetic demonstration of that system.

## Evidence boundary

This is a synthetic academic demonstration. Public evidence supports the complexity of upgrade transactions, while customer confusion, preference, conversion lift, and retention impact remain hypotheses requiring participant research and production measurement.

No real customer data, private Verizon data, credentials, or production analytics are included.

## Local preview

From `04-presentation/final-submission-website/dist`:

```bash
python3 -m http.server 8789
```

Then open `http://127.0.0.1:8789/`.

The Upgrade Guide source and its explicit account-access boundaries are documented in `03-chatbot/`. A hosted AI version requires a protected backend and API secret; no secret is committed to this public repository.

## Deployment architecture

- **GitHub** stores the complete submission and remains the source of truth.
- **Render** runs the private Python/FastAPI assistant backend and stores `OPENAI_API_KEY` as an environment variable.
- **Vercel** hosts the public case-study and chatbot frontend. The browser receives the Render origin, never the API key.

See [`DEPLOYMENT.md`](DEPLOYMENT.md) for the exact folders, commands, variables, and verification checks.
