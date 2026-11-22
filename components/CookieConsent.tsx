"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cookieConsentStorageKey as STORAGE_KEY, googleAnalyticsId } from "@/lib/site";

type ConsentChoice = "accepted" | "declined";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  }
}

/** gtag.js is only fetched once analytics is accepted; before that it would send nothing anyway. */
function loadGtag() {
  if (document.getElementById("gtag-js")) return;
  window.gtag?.("js", new Date());
  const script = document.createElement("script");
  script.id = "gtag-js";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
  document.head.appendChild(script);
}

function applyConsent(choice: ConsentChoice) {
  ensureGtag();
  const granted = choice === "accepted";
  window.gtag?.("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied"
  });
  if (granted) {
    loadGtag();
    window.gtag?.("config", googleAnalyticsId, { anonymize_ip: true });
  }
}

export function CookieConsent() {
  // Rendered in the server HTML so first-time visitors see it at first paint. Returning visitors
  // never see it: the inline script in the layout marks <html data-ts-consent> before paint.
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    ensureGtag();
    window.gtag?.("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500
    });

    const stored = window.localStorage.getItem(STORAGE_KEY) as ConsentChoice | null;
    if (stored === "accepted" || stored === "declined") {
      applyConsent(stored);
      setVisible(false);
      return;
    }
    setVisible(true);
  }, []);

  function choose(choice: ConsentChoice) {
    window.localStorage.setItem(STORAGE_KEY, choice);
    applyConsent(choice);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <div className="cookie-banner-inner">
        <p>
          We use optional analytics cookies on this marketing site to understand traffic. The app does not use these cookies.{" "}
          <Link href="/cookies">Cookie policy</Link>
          {" · "}
          <Link href="/privacy">Privacy</Link>
        </p>
        <div className="cookie-banner-actions">
          <button
            type="button"
            className="button secondary"
            data-testid="cookie-decline"
            onClick={() => choose("declined")}
          >
            Decline
          </button>
          <button
            type="button"
            className="button primary"
            data-testid="cookie-accept"
            onClick={() => choose("accepted")}
          >
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  );
}

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="cookie-settings-link"
      onClick={() => {
        window.localStorage.removeItem(STORAGE_KEY);
        window.location.reload();
      }}
    >
      Cookie settings
    </button>
  );
}
