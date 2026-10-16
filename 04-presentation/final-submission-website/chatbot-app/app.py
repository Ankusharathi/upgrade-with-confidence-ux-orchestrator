from __future__ import annotations

import asyncio
import json
import logging
import os
from pathlib import Path
from typing import Any

from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field


BASE_DIR = Path(__file__).resolve().parent
NOTEBOOK_PATH = BASE_DIR / "telecommunications and wireless retail_faq_assistant.ipynb"
STATIC_DIR = BASE_DIR / "static"

os.environ.setdefault("CREWAI_STORAGE_DIR", str(BASE_DIR / ".crewai"))
os.environ.setdefault("CREWAI_TRACING_ENABLED", "false")

logger = logging.getLogger("upgrade-guide-ui")


def load_notebook_runtime() -> dict[str, Any]:
    """Load the assistant definitions without running notebook UI or live test cells."""
    notebook = json.loads(NOTEBOOK_PATH.read_text(encoding="utf-8"))
    namespace: dict[str, Any] = {"__name__": "verizon_notebook_runtime"}

    for cell in notebook["cells"]:
        if cell.get("cell_type") != "code":
            continue
        source_value = cell.get("source", [])
        source = "".join(source_value) if isinstance(source_value, list) else source_value

        if "required_packages =" in source:
            continue
        if "while True:" in source and "input(" in source:
            continue
        if "verified_dataset =" in source:
            continue

        # Jupyter needs nest_asyncio; a standalone ASGI server must keep asyncio.run intact.
        source = source.replace("nest_asyncio.apply()", "")

        exec(
            compile(
                source,
                f"{NOTEBOOK_PATH.name}:runtime",
                "exec",
                dont_inherit=True,
            ),
            namespace,
        )

    if "run_assistant" not in namespace:
        raise RuntimeError("The notebook did not define run_assistant")
    return namespace


RUNTIME = load_notebook_runtime()
RUN_ASSISTANT = RUNTIME["run_assistant"]
CHAT_LOCK = asyncio.Lock()


class ChatRequest(BaseModel):
    message: str = Field(min_length=1, max_length=2000)


class ChatResponse(BaseModel):
    answer: str
    category: str
    confidence: str
    escalated: bool


app = FastAPI(title="Upgrade Guide", docs_url=None, redoc_url=None)
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")


@app.get("/", include_in_schema=False)
async def index() -> FileResponse:
    return FileResponse(STATIC_DIR / "index.html")


@app.get("/health")
async def health() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest) -> ChatResponse:
    message = request.message.strip()
    if not message:
        raise HTTPException(status_code=422, detail="Please enter a question.")

    try:
        # The notebook uses a sequential multi-agent crew. Keep local requests ordered.
        async with CHAT_LOCK:
            result = await RUN_ASSISTANT(message)
    except Exception:
        logger.exception("Assistant request failed")
        raise HTTPException(
            status_code=503,
            detail="The assistant could not complete this request. Check the API key and connection, then try again.",
        ) from None

    return ChatResponse(
        answer=result.final_response,
        category=result.category,
        confidence=result.confidence,
        escalated=result.escalated,
    )


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=7862)
