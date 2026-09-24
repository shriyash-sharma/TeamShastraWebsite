"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { loginUrl, navItems, playStoreUrl, signupUrl } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="TeamShastra home" onClick={() => setOpen(false)}>
          <Image src="/brand/teamshastra_header_logo.svg" width={210} height={43} alt="TeamShastra" priority />
        </Link>
        <div className="nav-links">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="nav-actions">
          <a className="button secondary" href={loginUrl}>
            Login
          </a>
          <a className="button primary" href={signupUrl}>
            Get started
          </a>
        </div>
        <button
          type="button"
          className={`nav-toggle${open ? " is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div
        id="mobile-nav"
        className={`nav-drawer${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="nav-drawer-links">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="nav-drawer-actions">
          <a className="button secondary" href={loginUrl} onClick={() => setOpen(false)}>
            Login
          </a>
          <a className="button primary" href={signupUrl} onClick={() => setOpen(false)}>
            Get started
          </a>
          <a className="button ghost" href={playStoreUrl} onClick={() => setOpen(false)}>
            Get it on Google Play
          </a>
        </div>
      </div>
      {open ? <button type="button" className="nav-scrim" aria-label="Close menu" onClick={() => setOpen(false)} /> : null}
    </header>
  );
}
