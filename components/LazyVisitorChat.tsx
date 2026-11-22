"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const VisitorChat = dynamic(() => import("./VisitorChat").then((m) => m.VisitorChat), { ssr: false });

/** Loads the chat widget once the page is idle so it doesn't compete with first paint. */
export function LazyVisitorChat() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(() => setReady(true), { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    }
    const timer = setTimeout(() => setReady(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return ready ? <VisitorChat /> : null;
}
