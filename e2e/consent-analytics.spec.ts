import { expect, test } from "@playwright/test";

// Cookie banner and Google Analytics: gtag.js loads only after "Accept analytics", and page_view still fires.
// GA hits are intercepted and aborted, so tests never send data to the real property.

test("first visit shows the banner and loads no analytics", async ({ page }) => {
  const gtagRequests: string[] = [];
  page.on("request", (request) => {
    if (request.url().includes("googletagmanager.com/gtag/js")) gtagRequests.push(request.url());
  });
  await page.goto("/");
  await expect(page.getByRole("dialog", { name: "Cookie consent" })).toBeVisible();
  await page.waitForLoadState("networkidle");
  expect(gtagRequests).toEqual([]);
});

test("a stored choice hides the banner before first paint", async ({ page }) => {
  await page.addInitScript(() => window.localStorage.setItem("ts_cookie_consent_v1", "declined"));
  await page.goto("/");
  expect(await page.evaluate(() => document.documentElement.getAttribute("data-ts-consent"))).toBe("declined");
  await expect(page.locator(".cookie-banner")).toBeHidden();
});

test("declining keeps analytics off", async ({ page }) => {
  const gtagRequests: string[] = [];
  page.on("request", (request) => {
    if (request.url().includes("googletagmanager.com/gtag/js")) gtagRequests.push(request.url());
  });
  await page.goto("/");
  await page.getByTestId("cookie-decline").click();
  await expect(page.locator(".cookie-banner")).toBeHidden();
  await page.waitForLoadState("networkidle");
  expect(gtagRequests).toEqual([]);
});

test("accepting loads gtag and sends page_view", async ({ page }) => {
  const hits: string[] = [];
  await page.route(/google-analytics\.com\/(g\/)?collect/, async (route) => {
    hits.push(`${route.request().url()} ${route.request().postData() ?? ""}`);
    await route.abort();
  });
  await page.goto("/");
  await page.getByTestId("cookie-accept").click();
  await expect.poll(() => hits.some((hit) => hit.includes("en=page_view")), { timeout: 20_000 }).toBe(true);
  expect(await page.evaluate(() => window.localStorage.getItem("ts_cookie_consent_v1"))).toBe("accepted");
});

test("a returning visitor who accepted gets page_view without the banner", async ({ page }) => {
  const hits: string[] = [];
  await page.route(/google-analytics\.com\/(g\/)?collect/, async (route) => {
    hits.push(route.request().url());
    await route.abort();
  });
  await page.addInitScript(() => window.localStorage.setItem("ts_cookie_consent_v1", "accepted"));
  await page.goto("/pricing");
  await expect(page.locator(".cookie-banner")).toBeHidden();
  await expect.poll(() => hits.some((hit) => hit.includes("en=page_view")), { timeout: 20_000 }).toBe(true);
});
