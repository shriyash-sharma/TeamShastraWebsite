#!/usr/bin/env node
// Mobile Lighthouse on the key pages, median of N runs per page.
//   node scripts/lighthouse.mjs http://127.0.0.1:3000          (after `npm run build && npx next start`)
//   node scripts/lighthouse.mjs https://teamshastra.com 3 /,/pricing
// Writes JSON reports to ./lighthouse-reports and prints a table.
import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync } from "node:fs";
import path from "node:path";

const keyPages = [
  "/",
  "/features",
  "/pricing",
  "/contact",
  "/industries",
  "/solutions",
  "/features/gps-attendance-app",
  "/features/gst-billing-invoice",
  "/industries/cctv-installer-software",
  "/hvac-service-management",
  "/field-service-management-mumbai",
  "/vyapar-alternative"
];

const base = (process.argv[2] ?? "http://127.0.0.1:3000").replace(/\/$/, "");
const runs = Number(process.argv[3] ?? 3);
const pages = process.argv[4] ? process.argv[4].split(",") : keyPages;
const outDir = path.resolve("lighthouse-reports");
mkdirSync(outDir, { recursive: true });

const median = (values) => {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
};

const rows = [];
for (const page of pages) {
  const results = [];
  for (let run = 1; run <= runs; run += 1) {
    const file = path.join(outDir, `${page === "/" ? "home" : page.replace(/\//g, "_")}-${run}.json`);
    try {
      execFileSync(
        "npx",
        ["-y", "lighthouse@12", `${base}${page}`, "--quiet", "--chrome-flags=--headless=new", "--output=json", `--output-path=${file}`,
          "--only-categories=performance,accessibility,best-practices,seo"],
        { stdio: "ignore" }
      );
    } catch {
      continue;
    }
    const report = JSON.parse(readFileSync(file, "utf8"));
    const audits = report.audits;
    const score = (key) => Math.round((report.categories[key]?.score ?? 0) * 100);
    results.push({
      perf: score("performance"),
      a11y: score("accessibility"),
      bp: score("best-practices"),
      seo: score("seo"),
      lcp: audits["largest-contentful-paint"].numericValue,
      tbt: audits["total-blocking-time"].numericValue,
      cls: audits["cumulative-layout-shift"].numericValue,
      unusedJsKb: (audits["unused-javascript"]?.details?.overallSavingsBytes ?? 0) / 1024,
      legacyJsKb: (audits["legacy-javascript"]?.details?.overallSavingsBytes ?? audits["legacy-javascript-insight"]?.details?.overallSavingsBytes ?? 0) / 1024,
      failing: Object.values(audits)
        .filter((audit) => audit.score === 0 && ["accessibility", "best-practices", "seo"].some((c) => report.categories[c]?.auditRefs.some((ref) => ref.id === audit.id)))
        .map((audit) => audit.id)
    });
  }
  if (!results.length) {
    rows.push(`${page} | no result`);
    continue;
  }
  const pick = (key) => median(results.map((r) => r[key]));
  rows.push(
    [
      page,
      pick("perf"),
      pick("a11y"),
      pick("bp"),
      pick("seo"),
      `${(pick("lcp") / 1000).toFixed(2)}s`,
      `${Math.round(pick("tbt"))}ms`,
      pick("cls").toFixed(3),
      `${pick("unusedJsKb").toFixed(0)}KB`,
      `${pick("legacyJsKb").toFixed(1)}KB`,
      [...new Set(results.flatMap((r) => r.failing))].join(",") || "-"
    ].join(" | ")
  );
}

console.log(`Lighthouse mobile, median of ${runs} runs, ${base}`);
console.log("page | perf | a11y | bp | seo | LCP | TBT | CLS | unused JS | legacy JS | failing audits");
console.log(rows.join("\n"));
