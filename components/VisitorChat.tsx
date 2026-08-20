"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { supportApiBase } from "@/lib/api";

const STORAGE_KEY = "ts_visitor_support_v1";
const CALLBACK_WAIT_MS = 60_000;
const POLL_MS = 4000;

type Session = {
  conversation_id: string;
  session_token: string;
  visitor_name?: string | null;
  visitor_email: string;
  visitor_phone: string;
};

type ChatMessage = {
  id: string;
  body?: string | null;
  sender_kind: string;
  sender_is_staff: boolean;
  created_at: string;
};

function loadSession(): Session | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Session;
  } catch {
    return null;
  }
}

function saveSession(session: Session) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
}

function errorMessage(payload: unknown, fallback: string): string {
  if (!payload || typeof payload !== "object" || !("detail" in payload)) {
    return fallback;
  }
  const detail = (payload as { detail: unknown }).detail;
  if (typeof detail === "string") return detail;
  if (Array.isArray(detail) && detail[0] && typeof detail[0] === "object" && "msg" in detail[0]) {
    return String((detail[0] as { msg: string }).msg);
  }
  return fallback;
}

function formatTime(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export function VisitorChat() {
  const [open, setOpen] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [showCallback, setShowCallback] = useState(false);
  const [callbackSent, setCallbackSent] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSession(loadSession());
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const headers = useCallback((token: string) => {
    return {
      "Content-Type": "application/json",
      "X-Visitor-Session": token
    };
  }, []);

  const refreshMessages = useCallback(
    async (token: string) => {
      const resp = await fetch(`${supportApiBase}/visitor/messages?limit=200`, {
        headers: headers(token)
      });
      if (resp.status === 401) {
        localStorage.removeItem(STORAGE_KEY);
        setSession(null);
        setMessages([]);
        return;
      }
      if (!resp.ok) return;
      const data = (await resp.json()) as { items?: ChatMessage[] };
      setMessages(data.items ?? []);
    },
    [headers]
  );

  useEffect(() => {
    if (!open || !session) return;
    void refreshMessages(session.session_token);
    const id = window.setInterval(() => {
      void refreshMessages(session.session_token);
    }, POLL_MS);
    return () => window.clearInterval(id);
  }, [open, session, refreshMessages]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    if (open && session) {
      window.setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open, session]);

  useEffect(() => {
    if (!session || callbackSent || messages.length === 0) {
      setShowCallback(false);
      return;
    }
    let lastVisitorAt: number | null = null;
    let staffAfter = false;
    for (const msg of messages) {
      if (msg.sender_is_staff || msg.sender_kind === "staff") {
        if (lastVisitorAt != null) staffAfter = true;
      } else {
        lastVisitorAt = Date.parse(msg.created_at);
        staffAfter = false;
      }
    }
    if (lastVisitorAt == null || staffAfter) {
      setShowCallback(false);
      return;
    }
    const remaining = CALLBACK_WAIT_MS - (Date.now() - lastVisitorAt);
    if (remaining <= 0) {
      setShowCallback(true);
      return;
    }
    setShowCallback(false);
    const timer = window.setTimeout(() => setShowCallback(true), remaining);
    return () => window.clearTimeout(timer);
  }, [messages, session, callbackSent]);

  async function startChat(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const resp = await fetch(`${supportApiBase}/visitor/start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim() || undefined,
          email: email.trim(),
          phone: phone.trim()
        })
      });
      const data = await resp.json();
      if (!resp.ok) {
        setError(errorMessage(data, "Could not start chat. Try again."));
        return;
      }
      const next = data as Session;
      saveSession(next);
      setSession(next);
    } catch {
      setError("Could not reach TeamShastra. Try again in a moment.");
    } finally {
      setBusy(false);
    }
  }

  async function send(body: string) {
    if (!session || !body.trim()) return;
    setBusy(true);
    setError("");
    try {
      const resp = await fetch(`${supportApiBase}/visitor/messages`, {
        method: "POST",
        headers: headers(session.session_token),
        body: JSON.stringify({ body: body.trim() })
      });
      const data = await resp.json();
      if (!resp.ok) {
        setError(errorMessage(data, "Message could not be sent."));
        return;
      }
      setDraft("");
      await refreshMessages(session.session_token);
    } catch {
      setError("Message could not be sent.");
    } finally {
      setBusy(false);
    }
  }

  function resetSession() {
    localStorage.removeItem(STORAGE_KEY);
    setSession(null);
    setMessages([]);
    setCallbackSent(false);
    setShowCallback(false);
    setError("");
  }

  return (
    <div className="visitor-chat">
      {open ? (
        <section
          className="visitor-chat-panel"
          aria-label="Chat with TeamShastra"
          data-testid="visitor-chat-panel"
        >
          <header className="visitor-chat-head">
            <div className="visitor-chat-identity">
              <span className="visitor-chat-avatar" aria-hidden="true">
                TS
              </span>
              <div>
                <strong>TeamShastra</strong>
                <span className="visitor-chat-status">
                  <span className="visitor-chat-dot" /> Usually replies in a few minutes
                </span>
              </div>
            </div>
            <button
              type="button"
              className="visitor-chat-close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              data-testid="visitor-chat-close"
            >
              ×
            </button>
          </header>
          {!session ? (
            <form className="visitor-chat-form" onSubmit={(e) => void startChat(e)}>
              <p>
                Tell us how to reach you, then start chatting. A TeamShastra admin will see this as a
                visitor conversation.
              </p>
              <label>
                Name <span>(optional)</span>
                <input
                  data-testid="visitor-chat-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={80}
                  placeholder="Your name"
                  autoComplete="name"
                />
              </label>
              <label>
                Email
                <input
                  data-testid="visitor-chat-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  autoComplete="email"
                />
              </label>
              <label>
                Mobile number
                <input
                  data-testid="visitor-chat-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="98765 43210"
                  autoComplete="tel"
                  inputMode="tel"
                />
                <em className="visitor-chat-hint">10-digit Indian mobile, or include country code</em>
              </label>
              {error ? (
                <p className="visitor-chat-error" data-testid="visitor-chat-error">
                  {error}
                </p>
              ) : null}
              <button
                className="button primary visitor-chat-cta"
                type="submit"
                disabled={busy}
                data-testid="visitor-chat-start"
              >
                {busy ? "Connecting…" : "Start chat"}
              </button>
              <p className="visitor-chat-legal">
                By starting, you agree we may use this email and number to reply.{" "}
                <Link href="/privacy">Privacy</Link>
              </p>
            </form>
          ) : (
            <>
              <div className="visitor-chat-meta">
                <span>
                  Chatting as <strong>{session.visitor_email}</strong>
                </span>
                <button type="button" className="visitor-chat-reset" onClick={resetSession}>
                  New chat
                </button>
              </div>
              <div className="visitor-chat-messages" data-testid="visitor-chat-thread">
                {messages.length === 0 ? (
                  <div className="visitor-bubble theirs">
                    Hi{session.visitor_name ? ` ${session.visitor_name}` : ""} — how can we help
                    your field team today?
                    <span className="visitor-bubble-time">Now</span>
                  </div>
                ) : null}
                {messages.map((msg) => {
                  const mine = !msg.sender_is_staff && msg.sender_kind !== "staff";
                  return (
                    <div
                      key={msg.id}
                      className={mine ? "visitor-bubble mine" : "visitor-bubble theirs"}
                      data-testid={mine ? "visitor-chat-mine" : "visitor-chat-theirs"}
                    >
                      {msg.body}
                      <span className="visitor-bubble-time">{formatTime(msg.created_at)}</span>
                    </div>
                  );
                })}
                <div ref={bottomRef} />
              </div>
              {showCallback && !callbackSent ? (
                <button
                  type="button"
                  className="visitor-chat-callback"
                  disabled={busy}
                  data-testid="visitor-chat-callback"
                  onClick={() => {
                    setCallbackSent(true);
                    void send(`Please call me on ${session.visitor_phone}.`);
                  }}
                >
                  No reply yet — ask us to call {session.visitor_phone}
                </button>
              ) : null}
              {callbackSent ? (
                <p className="visitor-chat-note">We will call you back on {session.visitor_phone}.</p>
              ) : null}
              {error ? (
                <p className="visitor-chat-error" data-testid="visitor-chat-error">
                  {error}
                </p>
              ) : null}
              <form
                className="visitor-chat-composer"
                onSubmit={(e) => {
                  e.preventDefault();
                  void send(draft);
                }}
              >
                <input
                  ref={inputRef}
                  data-testid="visitor-chat-input"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Write a message…"
                  maxLength={4000}
                  disabled={busy}
                  aria-label="Message"
                />
                <button
                  className="visitor-chat-send"
                  type="submit"
                  disabled={busy || !draft.trim()}
                  data-testid="visitor-chat-send"
                  aria-label="Send message"
                >
                  Send
                </button>
              </form>
            </>
          )}
        </section>
      ) : null}
      <button
        type="button"
        className="visitor-chat-launch"
        onClick={() => setOpen((value) => !value)}
        data-testid="visitor-chat-launch"
        aria-expanded={open}
      >
        <span className="visitor-chat-launch-icon" aria-hidden="true">
          {open ? (
            "×"
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 6.8A2.8 2.8 0 0 1 7.8 4h8.4A2.8 2.8 0 0 1 19 6.8v6.4A2.8 2.8 0 0 1 16.2 16H10l-4.2 3.2A.8.8 0 0 1 4.5 18.6V6.8Z"
                fill="currentColor"
              />
            </svg>
          )}
        </span>
        <span>{open ? "Close" : "Chat with us"}</span>
      </button>
    </div>
  );
}
