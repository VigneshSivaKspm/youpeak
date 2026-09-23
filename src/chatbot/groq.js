import { SYSTEM_PROMPT } from "./knowledge";

const API_URL = "https://api.groq.com/openai/v1/chat/completions";
const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

// Best first. Each model has its own free-tier budget (~8K tokens/minute, a
// couple of questions), so when one is rate-limited the next one answers.
// openai/gpt-oss-20b is deliberately left out: in testing it misread pricing
// tiers even with explicit examples.
const MODELS = [
  import.meta.env.VITE_GROQ_MODEL || "openai/gpt-oss-120b",
  "qwen/qwen3.8-27b",
];

// Reasoning models: think briefly and stream only the final answer.
function modelParams(model) {
  if (model.startsWith("openai/gpt-oss")) {
    return { reasoning_effort: "low", include_reasoning: false };
  }
  if (model.startsWith("qwen/")) return { reasoning_format: "hidden" };
  return {};
}

// Older turns are dropped to keep requests fast and inside free-tier limits.
const MAX_HISTORY = 10;
// When every model is rate-limited, wait this long at most before one retry.
const MAX_WAIT_SECONDS = 25;

export class ChatError extends Error {
  constructor(message, { retryable = true } = {}) {
    super(message);
    this.retryable = retryable;
  }
}

const sleep = (ms, signal) =>
  new Promise((resolve, reject) => {
    const t = setTimeout(resolve, ms);
    signal?.addEventListener("abort", () => {
      clearTimeout(t);
      reject(new DOMException("Aborted", "AbortError"));
    });
  });

/**
 * Streams an assistant reply for `history` ([{ role, content }]).
 * `onToken(fullTextSoFar)` fires as text arrives; `onStatus(text | null)`
 * reports waits such as a rate-limit countdown. Resolves with the final text.
 */
export async function streamReply(history, { onToken, onStatus, signal }) {
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

  for (let round = 0; round < 2; round++) {
    let waitSeconds = Infinity;
    let lastStatus = 0;

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
            max_completion_tokens: 1500,
            ...modelParams(model),
          }),
          signal,
        });
      } catch (err) {
        if (err.name === "AbortError") throw err;
        throw new ChatError("Can't reach the assistant. Check your connection and try again.");
      }

      if (res.ok) {
        onStatus?.(null);
        return readStream(res, onToken);
      }

      lastStatus = res.status;
      if (res.status === 429) {
        // Groq says how long to wait, e.g. "Please try again in 19.07s."
        const body = await res.text().catch(() => "");
        const secs = parseFloat(body.match(/try again in ([\d.]+)s/)?.[1]);
        if (secs) waitSeconds = Math.min(waitSeconds, secs);
        continue;
      }
      // Model retired, unavailable or overloaded: try the next one.
      if ([400, 404, 498, 500, 502, 503].includes(res.status)) continue;
      break;
    }

    if (lastStatus === 401) {
      throw new ChatError(
        "The assistant is temporarily unavailable. Please email support@youpeak.in.",
        { retryable: false },
      );
    }
    if (lastStatus !== 429 || round === 1) break;

    // Every model is busy: count down, then try once more.
    const wait = Math.ceil(Number.isFinite(waitSeconds) ? waitSeconds : 10);
    if (wait > MAX_WAIT_SECONDS) break;
    for (let s = wait; s > 0; s--) {
      onStatus?.(`Lots of questions right now — answering in ${s}s…`);
      await sleep(1000, signal);
    }
    onStatus?.(null);
  }

  throw new ChatError("I'm getting a lot of questions right now. Please try again in a minute.");
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
