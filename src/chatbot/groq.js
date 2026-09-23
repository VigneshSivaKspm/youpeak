import { SYSTEM_PROMPT } from "./knowledge";

const API_URL = "https://api.groq.com/openai/v1/chat/completions";
const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

// Tried in order: if a model is rate-limited or unavailable before it has
// streamed anything, the next one answers instead.
const MODELS = [
  import.meta.env.VITE_GROQ_MODEL || "llama-3.3-70b-versatile",
  "llama-3.1-8b-instant",
];

// Older turns are dropped to keep requests fast and inside free-tier limits.
const MAX_HISTORY = 12;

export class ChatError extends Error {
  constructor(message, { retryable = true } = {}) {
    super(message);
    this.retryable = retryable;
  }
}

export const isConfigured = Boolean(API_KEY);

/**
 * Streams an assistant reply for `history` ([{ role, content }]).
 * Calls `onToken(fullTextSoFar)` as text arrives and resolves with the final
 * text. Abort with `signal`.
 */
export async function streamReply(history, { onToken, signal }) {
  if (!API_KEY) {
    throw new ChatError(
      "The assistant isn't configured yet. Please email support@youpeak.in.",
      { retryable: false },
    );
  }

  const messages = [
    { role: "system", content: SYSTEM_PROMPT },
    ...history.slice(-MAX_HISTORY).map(({ role, content }) => ({ role, content })),
  ];

  let lastError;
  for (const model of [...new Set(MODELS)]) {
    let res;
    try {
      res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model,
          messages,
          stream: true,
          temperature: 0.4,
          top_p: 0.9,
          max_tokens: 900,
        }),
        signal,
      });
    } catch (err) {
      if (err.name === "AbortError") throw err;
      throw new ChatError("Can't reach the assistant. Check your connection and try again.");
    }

    if (res.ok) return readStream(res, onToken);

    lastError = res;
    // Rate limit, overloaded, or model retired: try the next model.
    if ([404, 429, 498, 500, 502, 503].includes(res.status)) continue;
    break;
  }

  if (lastError?.status === 429) {
    throw new ChatError("I'm getting a lot of questions right now. Please try again in a few seconds.");
  }
  if (lastError?.status === 401) {
    throw new ChatError("The assistant is temporarily unavailable. Please email support@youpeak.in.", {
      retryable: false,
    });
  }
  throw new ChatError("Something went wrong on my side. Please try again.");
}

async function readStream(res, onToken) {
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let text = "";

  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    // Server-sent events: one `data: {...}` payload per line.
    const lines = buffer.split("\n");
    buffer = lines.pop();
    for (const line of lines) {
      const data = line.trim();
      if (!data.startsWith("data:")) continue;
      const payload = data.slice(5).trim();
      if (payload === "[DONE]") return text;
      try {
        const delta = JSON.parse(payload).choices?.[0]?.delta?.content;
        if (delta) {
          text += delta;
          onToken(text);
        }
      } catch {
        // Ignore keep-alive or partial lines.
      }
    }
  }
  return text;
}
