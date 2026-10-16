# Upgrades FAQ Chatbot

This folder contains a safe source copy of the existing `RND chatbot` application. The original application remains unchanged at `/Users/ankusha/Documents/ChatGPT/RND chatbot`.

## Included

- FastAPI application and `/api/chat` endpoint
- Existing customer-facing chatbot interface
- Verified 150-question phone and upgrades FAQ dataset
- Existing notebook-based sequential CrewAI assistant

## Excluded

- `.env` and API credentials
- Local virtual environments
- CrewAI runtime storage and databases
- Generated cache files

## Website integration

The presentation website embeds the locally running original application at `http://127.0.0.1:7860`. The website and chatbot remain separate processes so the case-study page can stay static while the chatbot keeps its existing backend.

For a hosted submission, deploy the chatbot backend separately and store its API credential as a protected runtime secret. Do not place the key in this folder or the static website.
