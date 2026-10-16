const form = document.querySelector("#chat-form");
const input = document.querySelector("#question");
const sendButton = document.querySelector("#send-button");
const messages = document.querySelector("#messages");
const clearButton = document.querySelector("#clear-chat");
const suggestionButtons = document.querySelectorAll("[data-question]");

const initialMessage = messages.innerHTML;

function scrollToLatest() {
  messages.scrollTop = messages.scrollHeight;
}

function appendLinkedText(container, text) {
  const urlPattern = /(https?:\/\/[^\s]+)/g;
  let lastIndex = 0;
  for (const match of text.matchAll(urlPattern)) {
    container.append(document.createTextNode(text.slice(lastIndex, match.index)));
    const anchor = document.createElement("a");
    anchor.href = match[0];
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.textContent = match[0];
    container.append(anchor);
    lastIndex = match.index + match[0].length;
  }
  container.append(document.createTextNode(text.slice(lastIndex)));
}

function addMessage(role, text, meta = "") {
  const article = document.createElement("article");
  article.className = `message ${role}-message`;

  if (role === "assistant") {
    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.setAttribute("aria-hidden", "true");
    avatar.textContent = "V";
    article.append(avatar);
  }

  const body = document.createElement("div");
  body.className = "message-body";

  const speaker = document.createElement("p");
  speaker.className = "speaker";
  speaker.textContent = role === "assistant" ? "Verizon FAQ Assistant" : "You";

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  appendLinkedText(bubble, text);

  body.append(speaker, bubble);
  if (meta) {
    const detail = document.createElement("p");
    detail.className = "message-meta";
    detail.textContent = meta;
    body.append(detail);
  }
  article.append(body);
  messages.append(article);
  scrollToLatest();
  return article;
}

function addTyping() {
  const article = document.createElement("article");
  article.className = "message assistant-message";
  article.id = "typing-message";
  article.innerHTML = '<div class="avatar" aria-hidden="true">V</div><div class="message-body"><p class="speaker">Verizon FAQ Assistant</p><div class="bubble typing" aria-label="Assistant is responding"><i></i><i></i><i></i></div></div>';
  messages.append(article);
  scrollToLatest();
  return article;
}

function resizeInput() {
  input.style.height = "auto";
  input.style.height = `${Math.min(input.scrollHeight, 130)}px`;
}

async function sendQuestion(question) {
  const cleanQuestion = question.trim();
  if (!cleanQuestion || sendButton.disabled) return;

  addMessage("user", cleanQuestion);
  input.value = "";
  resizeInput();
  sendButton.disabled = true;
  input.disabled = true;
  const typing = addTyping();

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: cleanQuestion }),
    });
    const payload = await response.json();
    typing.remove();

    if (!response.ok) {
      addMessage("assistant", payload.detail || "I couldn’t complete that request. Please try again.");
      return;
    }

    const confidence = payload.confidence ? `${payload.confidence} confidence` : "";
    const meta = [payload.category, confidence].filter(Boolean).join(" · ");
    addMessage("assistant", payload.answer, meta);
  } catch (error) {
    typing.remove();
    addMessage("assistant", "The local app could not reach the assistant. Confirm the Python server is still running, then try again.");
  } finally {
    sendButton.disabled = false;
    input.disabled = false;
    input.focus();
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendQuestion(input.value);
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    form.requestSubmit();
  }
});

input.addEventListener("input", resizeInput);

suggestionButtons.forEach((button) => {
  button.addEventListener("click", () => sendQuestion(button.dataset.question));
});

clearButton.addEventListener("click", () => {
  messages.innerHTML = initialMessage;
  input.focus();
});

input.focus();
