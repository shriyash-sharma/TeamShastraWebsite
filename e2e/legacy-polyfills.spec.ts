import { expect, test, type Page } from "@playwright/test";
import { mockSupport } from "./helpers";

// Next's built-in polyfill-module is swapped for lib/polyfills/modern-polyfill.js (see next.config.mjs).
// Runs in Chromium, Firefox and WebKit (projects in playwright.config.ts). GA hits are aborted and the
// support API is mocked, so nothing reaches analytics or the support inbox.

/** Assignments from Next's polyfill-module; none of them may ship. */
const POLYFILL_SIGNATURES = [
  "String.prototype.trimStart=",
  "String.prototype.trimEnd=",
  "Array.prototype.flat=function",
  "Array.prototype.flatMap=function",
  "Object.fromEntries=function",
  "Array.prototype.at=function",
  "Object.hasOwn=function",
  "Promise.prototype.finally=function"
];

/** Console errors from the site itself (aborted GA hits are the test's own doing). */
function collectConsoleErrors(page: Page) {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() !== "error") return;
    const url = message.location().url ?? "";
    if (/google-analytics\.com|googletagmanager\.com|google\.com\/g\/collect/.test(url)) return;
    errors.push(message.text());
  });
  return errors;
}

test.beforeEach(async ({ page }) => {
  await mockSupport(page);
  await page.route(/google-analytics\.com\/(g\/)?collect|google\.com\/g\/collect/, (route) => route.abort());
});

test("no JS chunk on home ships Next's legacy polyfills", async ({ page }) => {
  const chunks: Array<Promise<{ url: string; body: string }>> = [];
  page.on("response", (response) => {
    if (response.url().includes("/_next/static/chunks/") && response.url().endsWith(".js")) {
      chunks.push(response.text().then((body) => ({ url: response.url(), body })));
    }
  });
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  const bodies = await Promise.all(chunks);
  expect(bodies.length).toBeGreaterThan(0);
  const hits = bodies.flatMap(({ url, body }) =>
    POLYFILL_SIGNATURES.filter((signature) => body.includes(signature)).map((signature) => `${url}: ${signature}`)
  );
  expect(hits, hits.join("\n")).toEqual([]);
  expect(bodies.filter(({ body }) => /URL\.canParse\s*=\s*function/.test(body)).length).toBe(1);
  expect(await page.evaluate(() => URL.canParse("https://teamshastra.com/") && !URL.canParse("not a url"))).toBe(true);
});

for (const viewport of [{ width: 360, height: 740 }, { width: 1366, height: 768 }]) {
  test(`home works at ${viewport.width} px: menu, cookie Accept and chat`, async ({ page }) => {
    const errors = collectConsoleErrors(page);
    await page.setViewportSize(viewport);
    await page.goto("/");
    await expect(page.getByTestId("visitor-chat-launch")).toBeVisible({ timeout: 15_000 });

    if (viewport.width < 721) {
      await page.getByRole("button", { name: "Open menu" }).click();
      await expect(page.locator("#mobile-nav")).toBeVisible();
      await page.getByRole("button", { name: "Close menu" }).first().click();
    }

    await page.getByTestId("cookie-accept").click();
    await expect(page.locator(".cookie-banner")).toBeHidden();

    await page.getByTestId("visitor-chat-launch").click();
    await expect(page.getByTestId("visitor-chat-panel")).toBeVisible();
    await page.waitForTimeout(1000);
    expect(errors).toEqual([]);
  });
}
