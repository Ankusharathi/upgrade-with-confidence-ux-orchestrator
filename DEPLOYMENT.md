# Deployment Walkthrough

This submission follows the required three-service architecture:

```text
GitHub source repository
        |
        +--> Render: Python/FastAPI backend + private OPENAI_API_KEY
        |
        `--> Vercel: public case-study + Upgrade Guide frontend
```

## Actual project folders

| Service | Repository path | Responsibility |
|---|---|---|
| GitHub | repository root | Complete structured submission and version history |
| Render | `03-chatbot/working-application` | `/health` and `/api/chat` backend endpoints |
| Vercel | repository root using `vercel.json` | Builds `04-presentation/final-submission-website/dist` as the public frontend |

## Safety rules

- Never commit `.env` or `OPENAI_API_KEY`.
- Enter the real key only in Render's environment-variable screen.
- Set `UPGRADE_GUIDE_API_ORIGIN` in Vercel to the Render origin only, such as `https://upgrade-guide.onrender.com`.
- Do not append `/api` or `/api/chat`; the frontend adds `/api/chat` when it sends a question.
- A free Render service may sleep after inactivity, so its first response can be slow.

## Part 1 — GitHub

Repository: <https://github.com/Ankusharathi/upgrade-with-confidence-ux-orchestrator>

The committed repository must include:

- `render.yaml`
- `vercel.json`
- `03-chatbot/working-application/requirements.txt`
- `03-chatbot/working-application/.python-version`
- `scripts/build-vercel.mjs`
- `04-presentation/final-submission-website/dist/chatbot/`

## Part 2 — Render backend

Create the service from the repository's `render.yaml`, or use these equivalent settings:

| Setting | Value |
|---|---|
| Service type | Web Service |
| Runtime | Python |
| Plan | Free |
| Root directory | `03-chatbot/working-application` |
| Build command | `pip install -r requirements.txt` |
| Start command | `uvicorn app:app --host 0.0.0.0 --port $PORT` |
| Health check | `/health` |

Add this protected environment variable in Render:

```text
OPENAI_API_KEY = [enter privately in Render]
```

Successful backend verification:

```text
GET https://upgrade-with-confidence-ux-orchestrator.onrender.com/health
{"status":"ok"}
```

## Part 3 — Vercel frontend

Import the same GitHub repository. The committed `vercel.json` runs:

```text
node scripts/build-vercel.mjs
```

The build copies the final frontend into `.vercel-dist` and injects the public Render origin into the chatbot configuration.

Add this non-secret production environment variable in Vercel:

```text
UPGRADE_GUIDE_API_ORIGIN = https://upgrade-with-confidence-ux-orchestrator.onrender.com
```

Use the origin only—no trailing `/api` or `/api/chat`.

Production frontend: <https://upgrade-with-confidence-ux-orchestr.vercel.app/>

## Part 4 — End-to-end verification

1. Open the Vercel production URL on a device that is not running the local chatbot.
2. Confirm the case-study page and interactive prototype load.
3. Open Upgrade Guide from the floating launcher.
4. Ask one supported public FAQ question.
5. Confirm the answer comes from the Render service.
6. Ask an account-specific question and verify that the assistant states its boundary instead of guessing.
7. Record the GitHub, Render, and Vercel URLs in the submission README.

All seven checks were completed on October 18, 2026. The production frontend loaded successfully, its generated chatbot configuration referenced the Render origin, Render returned the expected CORS header for the Vercel domain, and a live FAQ request returned a grounded response.

## Evidence boundary

A successful deployment proves that the application is publicly reachable and that the frontend and backend communicate. It does not prove customer comprehension, conversion lift, retention impact, production feasibility, or accessibility conformance.
