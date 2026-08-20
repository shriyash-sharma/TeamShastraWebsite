"use client";

import { useEffect } from "react";
import { appUrl } from "@/lib/site";

const APP_HASH_ROUTES = ["/login", "/signup", "/forgot-password", "/reset-password"];

export function AppHashRedirect() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash.startsWith("#/")) return;
    const path = hash.slice(1);
    const matched = APP_HASH_ROUTES.some(
      (route) => path === route || path.startsWith(`${route}?`) || path.startsWith(`${route}/`)
    );
    if (!matched) return;
    window.location.replace(`${appUrl}${path}`);
  }, []);
  return null;
}
