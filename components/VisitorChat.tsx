"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import Link from "next/link";
import { supportApiBase } from "@/lib/api";
import { homeFaqs } from "@/lib/site";

const QUICK_FAQS = homeFaqs.slice(0, 5);

const STORAGE_KEY = "ts_visitor_support_v1";
const POSITION_KEY = "ts_visitor_chat_pos_v1";
const CALLBACK_WAIT_MS = 60_000;
const POLL_MS = 4000;
const DRAG_MEDIA = "(min-width: 721px)";
const DRAG_PAD = 8;

type ChatPosition = { left: number; top: number };

type Session = {
  conversation_id: string;
  session_token: string;
  visitor_name?: string | null;
  visitor_email?: string | null;
  visitor_phone?: string | null;
};

type ChatMessage = {
  id: string;
  body?: string | null;
  sender_kind: string;
  sender_is_staff: boolean;
  created_at: string;
  pending?: boolean;
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

function canDragChat() {
  return window.matchMedia(DRAG_MEDIA).matches;
}

function loadPosition(): ChatPosition | null {
  try {
    const raw = localStorage.getItem(POSITION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { left?: unknown; top?: unknown };
    if (typeof parsed.left !== "number" || typeof parsed.top !== "number") return null;
    if (!Number.isFinite(parsed.left) || !Number.isFinite(parsed.top)) return null;
    return { left: parsed.left, top: parsed.top };
  } catch {
    return null;
  }
}

function savePosition(position: ChatPosition) {
  localStorage.setItem(POSITION_KEY, JSON.stringify(position));
}

function clampPosition(left: number, top: number, el: HTMLElement): ChatPosition {
  const width = el.offsetWidth;
  const height = el.offsetHeight;
  const maxLeft = Math.max(DRAG_PAD, window.innerWidth - width - DRAG_PAD);
  const maxTop = Math.max(DRAG_PAD, window.innerHeight - height - DRAG_PAD);
  return {
    left: Math.min(Math.max(DRAG_PAD, left), maxLeft),
    top: Math.min(Math.max(DRAG_PAD, top), maxTop)
  };
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
  const [draft, setDraft] = useState("");
  const [error, setError] = useState("");
  const [showCallback, setShowCallback] = useState(false);
  const [callbackSent, setCallbackSent] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const stickToBottomRef = useRef(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef<ChatPosition | null>(null);
  const dragRef = useRef<{
    pointerId: number;
    offsetX: number;
    offsetY: number;
    startLeft: number;
    startTop: number;
    moved: boolean;
  } | null>(null);
  const [position, setPosition] = useState<ChatPosition | null>(null);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    setSession(loadSession());
    if (!canDragChat()) return;
    setPosition(loadPosition());
  }, []);

  useEffect(() => {
    positionRef.current = position;
  }, [position]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    function reclamp() {
      if (!canDragChat()) {
        setPosition(null);
        return;
      }
      if (!open) return;
      const el = rootRef.current;
      setPosition((prev) => {
        const next = prev ?? loadPosition();
        if (!next || !el) return next;
        return clampPosition(next.left, next.top, el);
      });
    }
    reclamp();
    window.addEventListener("resize", reclamp);
    return () => window.removeEventListener("resize", reclamp);
  }, [open]);

  function endDrag(event: PointerEvent<HTMLElement>) {
    const drag = dragRef.current;
    if (!drag || event.pointerId !== drag.pointerId) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    if (drag.moved && positionRef.current) {
      savePosition(positionRef.current);
    }
    dragRef.current = null;
    setDragging(false);
  }

  function onHeadPointerDown(event: PointerEvent<HTMLElement>) {
    if (event.button !== 0 || !canDragChat()) return;
    const target = event.target as HTMLElement | null;
    if (target?.closest(".visitor-chat-close")) return;
    const root = rootRef.current;
    if (!root) return;
    const rect = root.getBoundingClientRect();
    dragRef.current = {
      pointerId: event.pointerId,
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top,
      startLeft: rect.left,
      startTop: rect.top,
      moved: false
    };
    setPosition({ left: rect.left, top: rect.top });
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onHeadPointerMove(event: PointerEvent<HTMLElement>) {
    const drag = dragRef.current;
    const root = rootRef.current;
    if (!drag || !root || event.pointerId !== drag.pointerId) return;
    const left = event.clientX - drag.offsetX;
    const top = event.clientY - drag.offsetY;
    if (!drag.moved) {
      if (Math.hypot(left - drag.startLeft, top - drag.startTop) < 4) return;
      drag.moved = true;
      setDragging(true);
    }
    event.preventDefault();
    const next = clampPosition(left, top, root);
    positionRef.current = next;
    setPosition(next);
  }

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
      const server = data.items ?? [];
      setMessages((prev) => {
        const pending = prev.filter((msg) => msg.pending);
        if (pending.length === 0) return server;
        const unmatched = server
          .filter((msg) => !msg.sender_is_staff && msg.sender_kind !== "staff")
          .map((msg) => (msg.body ?? "").trim());
        const leftover = pending.filter((msg) => {
          const body = (msg.body ?? "").trim();
          const index = unmatched.indexOf(body);
          if (index === -1) return true;
          unmatched.splice(index, 1);
          return false;
        });
        return leftover.length === 0 ? server : [...server, ...leftover];
      });
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
    if (open) stickToBottomRef.current = true;
  }, [open]);

  function handleMessagesScroll() {
    const el = messagesRef.current;
    if (!el) return;
    const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    stickToBottomRef.current = distanceFromBottom < 48;
  }

  useEffect(() => {
    if (!stickToBottomRef.current) return;
    bottomRef.current?.scrollIntoView({ block: "end" });
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

  // Chat used to be gated behind a name/email/phone form before the first
  // message could be sent. It now starts anonymously the moment the panel
  // opens — the bot asks for name/number conversationally instead (see
  // backend/app/services/support_rag). ensureSession lazily creates (or
  // reuses, via sessionPromiseRef, if a start call is already in flight)
  // the visitor session with no identity info required.
  const sessionPromiseRef = useRef<Promise<Session> | null>(null);

  const ensureSession = useCallback(async (): Promise<Session> => {
    if (session) return session;
    if (sessionPromiseRef.current) return sessionPromiseRef.current;
    const promise = (async () => {
      let resp: Response;
      try {
        resp = await fetch(`${supportApiBase}/visitor/start`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({})
        });
      } catch {
        // One quick retry — a single dropped request on a flaky mobile
        // connection shouldn't surface an error before the visitor's even
        // sent a message.
        await new Promise((resolve) => window.setTimeout(resolve, 800));
        resp = await fetch(`${supportApiBase}/visitor/start`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({})
        });
      }
      const data = await resp.json();
      if (!resp.ok) {
        throw new Error(errorMessage(data, "Could not start chat. Try again."));
      }
      const next = data as Session;
      saveSession(next);
      setSession(next);
      return next;
    })();
    sessionPromiseRef.current = promise;
    try {
      return await promise;
    } finally {
      sessionPromiseRef.current = null;
    }
  }, [session]);

  useEffect(() => {
    if (!open || session) return;
    setError("");
    ensureSession().catch((err: unknown) => {
      // Surface the backend's actual reason when we have one (helps catch a
      // real API contract mismatch fast) — fall back to a generic message
      // only for an outright network failure (no response at all).
      setError(
        err instanceof Error && err.message
          ? err.message
          : "Could not reach TeamShastra. Try again in a moment."
      );
    });
  }, [open, session, ensureSession]);

  async function send(body: string) {
    const text = body.trim();
    if (!text) return;
    let activeSession: Session;
    try {
      activeSession = await ensureSession();
    } catch (err: unknown) {
      setError(
        err instanceof Error && err.message
          ? err.message
          : "Could not reach TeamShastra. Try again in a moment."
      );
      return;
    }
    stickToBottomRef.current = true;
    const localId = `local-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const optimistic: ChatMessage = {
      id: localId,
      body: text,
      sender_kind: "visitor",
      sender_is_staff: false,
      created_at: new Date().toISOString(),
      pending: true
    };
    setDraft("");
    setError("");
    setMessages((prev) => [...prev, optimistic]);
    window.setTimeout(() => inputRef.current?.focus(), 0);

    try {
      const resp = await fetch(`${supportApiBase}/visitor/messages`, {
        method: "POST",
        headers: headers(activeSession.session_token),
        body: JSON.stringify({ body: text })
      });
      const data = await resp.json();
      if (!resp.ok) {
        setMessages((prev) => prev.filter((msg) => msg.id !== localId));
        setDraft(text);
        setError(errorMessage(data, "Message could not be sent."));
        return;
      }
      const saved = data as ChatMessage;
      setMessages((prev) =>
        prev.map((msg) => (msg.id === localId ? { ...saved, pending: false } : msg))
      );
    } catch {
      setMessages((prev) => prev.filter((msg) => msg.id !== localId));
      setDraft(text);
      setError("Message could not be sent.");
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

  const moved = Boolean(open && position);
  const [nudge, setNudge] = useState(false);

  useEffect(() => {
    if (open || session) {
      setNudge(false);
      return;
    }
    const timer = window.setTimeout(() => setNudge(true), 4000);
    return () => window.clearTimeout(timer);
  }, [open, session]);

  return (
    <div
      ref={rootRef}
      className={`visitor-chat${moved ? " is-moved" : ""}${dragging ? " is-dragging" : ""}${open ? " is-open" : ""}`}
      style={open && position ? { left: position.left, top: position.top } : undefined}
    >
      {open ? (
        <section
          className="visitor-chat-panel"
          aria-label="Chat with TeamShastra"
          data-testid="visitor-chat-panel"
        >
          <header
            className="visitor-chat-head"
            onPointerDown={onHeadPointerDown}
            onPointerMove={onHeadPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onLostPointerCapture={endDrag}
            title="Drag to move"
          >
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
          {/* Chat opens straight into the thread — no name/email/phone form.
              ensureSession creates the (anonymous) session in the background
              the moment the panel opens; the bot asks for a name/number
              itself once the visitor's engaged (see backend bot_reply.py). */}
          <>
              <div className="visitor-chat-meta">
                <span>
                  Chatting with{" "}
                  <strong>{session?.visitor_email || session?.visitor_phone || "TeamShastra"}</strong>
                </span>
                <button type="button" className="visitor-chat-reset" onClick={resetSession}>
                  New chat
                </button>
              </div>
              <div
                className="visitor-chat-messages"
                data-testid="visitor-chat-thread"
                ref={messagesRef}
                onScroll={handleMessagesScroll}
              >
                {messages.length === 0 ? (
                  <>
                    <div className="visitor-bubble theirs">
                      Hey! 👋 Thanks for stopping by TeamShastra. I can walk you through what the
                      app does, pricing, or anything else — what's your name, and what kind of work
                      does your team do?
                      <span className="visitor-bubble-time">Now</span>
                    </div>
                    <div className="visitor-chat-quick-faq">
                      <p className="visitor-chat-quick-faq-title">
                        ⚡ Instant answers — tap a question
                      </p>
                      {QUICK_FAQS.map((faq) => (
                        <details key={faq.question} className="visitor-chat-faq-item">
                          <summary>{faq.question}</summary>
                          <p>{faq.answer}</p>
                        </details>
                      ))}
                    </div>
                  </>
                ) : null}
                {messages.map((msg) => {
                  const mine = !msg.sender_is_staff && msg.sender_kind !== "staff";
                  return (
                    <div
                      key={msg.id}
                      className={`${mine ? "visitor-bubble mine" : "visitor-bubble theirs"}${msg.pending ? " pending" : ""}`}
                      data-testid={mine ? "visitor-chat-mine" : "visitor-chat-theirs"}
                    >
                      {msg.body}
                      <span className="visitor-bubble-time">
                        {msg.pending ? "Sending…" : formatTime(msg.created_at)}
                      </span>
                    </div>
                  );
                })}
                <div ref={bottomRef} />
              </div>
              {session && showCallback && !callbackSent && session.visitor_phone ? (
                <button
                  type="button"
                  className="visitor-chat-callback"
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
                <p className="visitor-chat-note">We will call you back on {session?.visitor_phone}.</p>
              ) : null}
              {error ? (
                <p className="visitor-chat-error" data-testid="visitor-chat-error">
                  {error}
                </p>
              ) : null}
              <p className="visitor-chat-legal">
                By chatting, you agree we may use details you share to reply.{" "}
                <Link href="/privacy">Privacy</Link>
              </p>
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
                  aria-label="Message"
                />
                <button
                  className="visitor-chat-send"
                  type="submit"
                  disabled={!draft.trim()}
                  data-testid="visitor-chat-send"
                  aria-label="Send message"
                >
                  Send
                </button>
              </form>
            </>
        </section>
      ) : null}
      <button
        type="button"
        className={`visitor-chat-launch${!open && nudge ? " is-nudging" : ""}`}
        onClick={() => setOpen((value) => !value)}
        data-testid="visitor-chat-launch"
        aria-expanded={open}
      >
        {!open ? <span className="visitor-chat-launch-ring" aria-hidden="true" /> : null}
        <span className="visitor-chat-launch-icon" aria-hidden="true">
          {open ? (
            "×"
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 6.8A2.8 2.8 0 0 1 7.8 4h8.4A2.8 2.8 0 0 1 19 6.8v6.4A2.8 2.8 0 0 1 16.2 16H10l-4.2 3.2A.8.8 0 0 1 4.5 18.6V6.8Z"
                fill="currentColor"
              />
              <circle cx="8.6" cy="9.8" r="1" fill="var(--brand)" />
              <circle cx="12" cy="9.8" r="1" fill="var(--brand)" />
              <circle cx="15.4" cy="9.8" r="1" fill="var(--brand)" />
            </svg>
          )}
        </span>
        {open ? (
          <span>Close</span>
        ) : (
          <span className="visitor-chat-launch-text">
            <strong>Chat with us</strong>
            <em>
              <span className="visitor-chat-launch-live" aria-hidden="true" />
              Online now
            </em>
          </span>
        )}
      </button>
    </div>
  );
}
