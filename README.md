# Upgrade With Confidence — UX Orchestrator Final Submission

This repository demonstrates a governed, six-phase UX Orchestrator through a synthetic device-upgrade project. It connects project framing, evidence, design decisions, validation, a working upgrade prototype, and the Upgrade Guide chatbot in one inspectable submission.

## Start here

1. Open `04-presentation/final-submission-website/dist/index.html`, or serve that `dist` folder locally.
2. Use the case-study navigation to inspect the Orchestrator, current-to-proposed design story, validation evidence, customer-test plan, Product Owner measurement case, prototype, and chatbot.
3. Read `01-orchestrator/START-HERE.md` for the reusable framework.

## Repository structure

```text
01-orchestrator/     Reusable phases, agents, skills, gates, and templates
02-upgrades-project/ Synthetic project artifacts from Intake through Validate
03-chatbot/          Upgrade Guide source application and FAQ dataset
04-presentation/     Final case study, demo script, website, and presentation notes
```

## Evidence boundary

This is a synthetic academic demonstration. Public evidence supports the complexity of upgrade transactions, while customer confusion, preference, conversion lift, and retention impact remain hypotheses requiring participant research and production measurement.

No real customer data, private Verizon data, credentials, or production analytics are included.

## Local preview

From `04-presentation/final-submission-website/dist`:

```bash
python3 -m http.server 8789
```

Then open `http://127.0.0.1:8789/`.

The embedded Upgrade Guide requires its separate local backend. See `03-chatbot/README.md` and `04-presentation/final-submission-website/chatbot-app/README.md` for its setup and evidence limitations.

