// Lightweight client-side spam throttle. This is a speed bump, not security:
// real enforcement must happen server-side (e.g. Cloudflare Turnstile / rate limit).
const MIN_FILL_MS = 3000; // bots tend to submit instantly
const COOLDOWN_MS = 60_000; // one submission per minute per form
const WINDOW_MS = 60 * 60_000;
const MAX_PER_WINDOW = 5;

const mountedAt = Date.now();

export type ThrottleResult = { ok: true } | { ok: false; reason: string };

export function checkThrottle(formKey: string, now = Date.now(), startedAt = mountedAt): ThrottleResult {
  if (now - startedAt < MIN_FILL_MS) {
    return { ok: false, reason: "Please take a moment to complete the form before submitting." };
  }
  let history: number[] = [];
  try {
    history = JSON.parse(localStorage.getItem(`evenor.throttle.${formKey}`) ?? "[]");
    if (!Array.isArray(history)) history = [];
  } catch {
    history = [];
  }
  history = history.filter((t) => typeof t === "number" && now - t < WINDOW_MS);
  const last = history[history.length - 1];
  if (last !== undefined && now - last < COOLDOWN_MS) {
    return { ok: false, reason: "You've just submitted. Please wait a minute before trying again." };
  }
  if (history.length >= MAX_PER_WINDOW) {
    return { ok: false, reason: "Too many submissions. Please try again later or email us directly." };
  }
  return { ok: true };
}

export function recordSubmission(formKey: string, now = Date.now()) {
  try {
    const key = `evenor.throttle.${formKey}`;
    const prev: unknown = JSON.parse(localStorage.getItem(key) ?? "[]");
    const list = Array.isArray(prev) ? prev.filter((t) => typeof t === "number" && now - t < WINDOW_MS) : [];
    localStorage.setItem(key, JSON.stringify([...list, now]));
  } catch {
    /* storage unavailable: ignore */
  }
}
