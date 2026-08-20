"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import { apiBaseUrl } from "@/lib/api";

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
  if (payload && typeof payload === "object" && "detail" in payload) {
    const detail = (payload as { detail: unknown }).detail;
    if (typeof detail === "string") return detail;
  }
  return fallback;
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

  useEffect(() => {
    setSession(loadSession());
  }, []);

  const headers = useCallback((token: string) => {
    return {
      "Content-Type": "application/json",
      "X-Visitor-Session": token
    };
  }, []);

  const refreshMessages = useCallback(
    async (token: string) => {
      const resp = await fetch(`${apiBaseUrl}/api/v1/support/visitor/messages?limit=200`, {
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
      const resp = await fetch(`${apiBaseUrl}/api/v1/support/visitor/start`, {
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
      const resp = await fetch(`${apiBaseUrl}/api/v1/support/visitor/messages`, {
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

  return (
    <div className="visitor-chat">
      {open ? (
        <section className="visitor-chat-panel" aria-label="Chat with TeamShastra">
          <header className="visitor-chat-head">
            <strong>Chat with TeamShastra</strong>
            <button type="button" className="visitor-chat-close" onClick={() => setOpen(false)} aria-label="Close chat">
              ×
            </button>
          </header>
          {!session ? (
            <form className="visitor-chat-form" onSubmit={(e) => void startChat(e)}>
              <p>Share your email and mobile number to start. A TeamShastra admin will see this as a visitor chat.</p>
              <label>
                Name (optional)
                <input value={name} onChange={(e) => setName(e.target.value)} maxLength={80} />
              </label>
              <label>
                Email
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </label>
              <label>
                Mobile number
                <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} />
              </label>
              {error ? <p className="visitor-chat-error">{error}</p> : null}
              <button className="button primary" type="submit" disabled={busy}>
                {busy ? "Starting…" : "Start chat"}
              </button>
            </form>
          ) : (
            <>
              <div className="visitor-chat-messages">
                {messages.length === 0 ? (
                  <p className="visitor-chat-empty">Send a message and we will reply here.</p>
                ) : null}
                {messages.map((msg) => {
                  const mine = !msg.sender_is_staff && msg.sender_kind !== "staff";
                  return (
                    <div key={msg.id} className={mine ? "visitor-bubble mine" : "visitor-bubble theirs"}>
                      {msg.body}
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
                  onClick={() => {
                    setCallbackSent(true);
                    void send(`Please call me on ${session.visitor_phone}.`);
                  }}
                >
                  No reply yet — ask us to call {session.visitor_phone}
                </button>
              ) : null}
              {callbackSent ? <p className="visitor-chat-note">We will call you back on {session.visitor_phone}.</p> : null}
              {error ? <p className="visitor-chat-error">{error}</p> : null}
              <form
                className="visitor-chat-composer"
                onSubmit={(e) => {
                  e.preventDefault();
                  void send(draft);
                }}
              >
                <input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Message"
                  maxLength={4000}
                  disabled={busy}
                />
                <button className="button primary" type="submit" disabled={busy || !draft.trim()}>
                  Send
                </button>
              </form>
            </>
          )}
        </section>
      ) : null}
      <button type="button" className="visitor-chat-launch" onClick={() => setOpen((value) => !value)}>
        {open ? "Close chat" : "Chat with us"}
      </button>
    </div>
  );
}
