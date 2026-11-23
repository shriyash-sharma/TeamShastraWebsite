import { expect, test, type Page } from "@playwright/test";
import { mockSupport } from "./helpers";

// The floating "Chat with us" launcher must never cover the cookie banner's buttons.
// GA hits are intercepted and aborted, so tests never send data to the real property.

const viewports = [
  { width: 320, height: 640 },
  { width: 360, height: 740 },
  { width: 390, height: 844 },
  { width: 414, height: 896 },
  { width: 768, height: 1024 },
  { width: 1280, height: 800 },
  { width: 1366, height: 768 },
  { width: 1920, height: 1080 }
];

const buttons = ["cookie-accept", "cookie-decline"] as const;
const POSITION_KEY = "ts_visitor_chat_pos_v1";

// Opening the chat starts a support session; keep it off the real support API.
test.beforeEach(async ({ page }) => {
  await mockSupport(page);
});

/** Which element sits at the left edge + 4 px, centre and right edge − 4 px of a button. */
async function hitTest(page: Page, testId: string) {
  return page.evaluate((id) => {
    // The Next.js dev tools badge only exists on the dev server; it is not part of the site.
    document.querySelectorAll("nextjs-portal").forEach((el) => el.remove());
    const button = document.querySelector(`[data-testid="${id}"]`);
    if (!button) return ["missing"];
    const rect = button.getBoundingClientRect();
    const y = rect.top + rect.height / 2;
    return [rect.left + 4, rect.left + rect.width / 2, rect.right - 4].map((x) => {
      const hit = document.elementFromPoint(x, y);
      if (hit && button.contains(hit)) return "button";
      return hit ? `${hit.tagName.toLowerCase()}.${hit.className}` : "nothing";
    });
  }, testId);
}

/** The chat widget loads when the page is idle; wait for it so the overlap check is real. */
async function waitForChat(page: Page) {
  await expect(page.getByTestId("visitor-chat-launch")).toBeVisible({ timeout: 15_000 });
}

async function chatBottomGap(page: Page) {
  return page.evaluate(() => {
    const chat = document.querySelector(".visitor-chat");
    return chat ? window.innerHeight - chat.getBoundingClientRect().bottom : -1;
  });
}

for (const viewport of viewports) {
  test(`cookie buttons are clear of the chat launcher at ${viewport.width}x${viewport.height}`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto("/");
    await expect(page.locator(".cookie-banner")).toBeVisible();
    await waitForChat(page);
    for (const id of buttons) {
      expect(await hitTest(page, id), `${id} at ${viewport.width}px`).toEqual(["button", "button", "button"]);
    }
  });
}

test("Accept at 360 px stores the choice, loads gtag and sends page_view", async ({ page }) => {
  const hits: string[] = [];
  const gtagRequests: string[] = [];
  page.on("request", (request) => {
    if (request.url().includes("googletagmanager.com/gtag/js")) gtagRequests.push(request.url());
  });
  await page.route(/google-analytics\.com\/(g\/)?collect/, async (route) => {
    hits.push(`${route.request().url()} ${route.request().postData() ?? ""}`);
    await route.abort();
  });
  await page.setViewportSize({ width: 360, height: 740 });
  await page.goto("/");
  await waitForChat(page);
  await page.getByTestId("cookie-accept").click();
  await expect(page.locator(".cookie-banner")).toBeHidden();
  expect(await page.evaluate(() => window.localStorage.getItem("ts_cookie_consent_v1"))).toBe("accepted");
  await expect.poll(() => gtagRequests.length, { timeout: 20_000 }).toBeGreaterThan(0);
  await expect.poll(() => hits.some((hit) => hit.includes("en=page_view")), { timeout: 20_000 }).toBe(true);
});

for (const viewport of [{ width: 360, height: 740 }, { width: 1366, height: 768 }]) {
  test(`Decline at ${viewport.width} px stores the choice and loads no gtag`, async ({ page }) => {
    const gtagRequests: string[] = [];
    page.on("request", (request) => {
      if (request.url().includes("googletagmanager.com/gtag/js")) gtagRequests.push(request.url());
    });
    await page.setViewportSize(viewport);
    await page.goto("/");
    await waitForChat(page);
    await page.getByTestId("cookie-decline").click();
    await expect(page.locator(".cookie-banner")).toBeHidden();
    expect(await page.evaluate(() => window.localStorage.getItem("ts_cookie_consent_v1"))).toBe("declined");
    await page.waitForLoadState("networkidle");
    expect(gtagRequests).toEqual([]);
  });
}

for (const { viewport, gap } of [
  { viewport: { width: 360, height: 740 }, gap: 12 },
  { viewport: { width: 1366, height: 768 }, gap: 20 }
]) {
  test(`chat launcher goes back to its spot after a choice at ${viewport.width} px and still opens`, async ({ page }) => {
    await page.route(/google-analytics\.com\/(g\/)?collect/, (route) => route.abort());
    await page.setViewportSize(viewport);
    await page.goto("/");
    await waitForChat(page);
    expect(await chatBottomGap(page)).toBeGreaterThan(gap + 40);
    await page.getByTestId("cookie-accept").click();
    await expect(page.locator(".cookie-banner")).toBeHidden();
    await expect.poll(() => chatBottomGap(page)).toBeGreaterThanOrEqual(gap - 2);
    expect(await chatBottomGap(page)).toBeLessThanOrEqual(gap + 2);
    await page.getByTestId("visitor-chat-launch").click();
    await expect(page.getByTestId("visitor-chat-panel")).toBeVisible();
  });
}

test("chat launcher opens while the banner is still shown", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 740 });
  await page.goto("/");
  await waitForChat(page);
  await page.getByTestId("visitor-chat-launch").click();
  await expect(page.getByTestId("visitor-chat-panel")).toBeVisible();
});

test("a dragged chat position is kept and never covers the cookie buttons", async ({ page }) => {
  await page.setViewportSize({ width: 1366, height: 768 });
  // Saved position that puts the open panel right over the banner's buttons.
  await page.addInitScript((key) => window.localStorage.setItem(key, JSON.stringify({ left: 1000, top: 150 })), POSITION_KEY);
  await page.goto("/");
  await waitForChat(page);
  await page.getByTestId("visitor-chat-launch").click();
  await expect(page.getByTestId("visitor-chat-panel")).toBeVisible();
  const box = await page.locator(".visitor-chat").boundingBox();
  expect(Math.round(box!.x)).toBe(1000);
  expect(Math.round(box!.y)).toBe(150);
  expect(box!.y + box!.height).toBeGreaterThan(768 - 90);
  for (const id of buttons) expect(await hitTest(page, id), id).toEqual(["button", "button", "button"]);
  await page.getByTestId("cookie-decline").click();
  await expect(page.locator(".cookie-banner")).toBeHidden();
});
