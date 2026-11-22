import { expect, test } from "@playwright/test";
import { dismissCookies } from "./helpers";

test.beforeEach(async ({ page }) => {
  await dismissCookies(page);
});

test("home shows chat launcher and core CTAs", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/TeamShastra/);
  await expect(page.getByRole("heading", { name: "TeamShastra", level: 1 })).toBeVisible();
  await expect(page.getByText("GST invoices").first()).toBeVisible();
  await expect(page.getByRole("heading", { name: "GST invoices", exact: true })).toBeVisible();
  await expect(page.getByTestId("hero-app-preview").getByRole("img").first()).toBeVisible();
  await expect(page.getByTestId("app-screenshot-gallery")).toBeVisible();
  await expect(page.getByTestId("visitor-chat-launch")).toBeVisible();
  const noHorizontalScroll = await page.evaluate(
    () => document.documentElement.scrollWidth <= window.innerWidth + 4
  );
  expect(noHorizontalScroll).toBe(true);
  await expect(page.getByRole("link", { name: "Get started" }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: "Get it on Google Play" }).first()).toHaveAttribute(
    "href",
    "https://play.google.com/store/apps/details?id=com.teamshastra.mobile"
  );
  await expect(page.getByRole("link", { name: "Login" }).first()).toBeVisible();
  const youtube = page.locator('footer a[href="https://www.youtube.com/@teamshastra"]').first();
  await expect(youtube).toBeVisible();
  await expect(youtube).toHaveAttribute("target", "_blank");
  await expect(youtube).toHaveAttribute("rel", /noopener/);
  await expect(page.locator('footer a[href^="mailto:care@teamshastra.com"]').first()).toBeVisible();
  await expect(page.locator('footer a[href="tel:+917697012040"]').first()).toBeVisible();
  await expect(page.locator('footer a[href="https://wa.me/917697012040"]').first()).toBeVisible();
});

test("features page describes visitor chat", async ({ page }) => {
  await page.goto("/features");
  await expect(page.getByRole("heading", { name: /Field service app features/i })).toBeVisible();
  await expect(page.getByTestId("app-screenshot-gallery")).toBeVisible();
  await expect(page.getByText(/visitor chat on this site/i)).toBeVisible();
  await expect(page.getByText(/Work orders/i).first()).toBeVisible();
  await expect(page.getByRole("heading", { name: "GST invoices & quotations" })).toBeVisible();
});

test("login path sends people to the app", async ({ page }) => {
  const response = await page.goto("/login", { waitUntil: "commit" });
  expect(page.url()).toMatch(/app\.teamshastra\.com/);
  expect(response?.status() ?? 200).toBeLessThan(400);
});

test("contact page points people to chat", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.getByRole("heading", { name: /Contact TeamShastra support/i })).toBeVisible();
  await expect(page.getByText(/Chat with us/i).first()).toBeVisible();
  await expect(page.getByText(/email and mobile number/i)).toBeVisible();
  await expect(page.getByRole("link", { name: "Get it on Google Play" }).first()).toBeVisible();
  const youtube = page.locator('a[href="https://www.youtube.com/@teamshastra"]').first();
  await expect(youtube).toBeVisible();
  await expect(youtube).toHaveAttribute("target", "_blank");
  await expect(youtube).toHaveAttribute("rel", /noopener/);
});

test("retired feature-city pages redirect to the city hub", async ({ request }) => {
  const response = await request.get("/gst-invoicing-mumbai", { maxRedirects: 0 });
  expect([301, 308]).toContain(response.status());
  expect(response.headers()["location"]).toMatch(/\/field-service-management-mumbai$/);
});

test("city hub shows local GST, tax, and language notes", async ({ page }) => {
  await page.goto("/field-service-management-surat");
  await expect(page.getByRole("heading", { name: "Field Service Management Software in Surat", level: 1 })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Running a service business in Surat" })).toBeVisible();
  await expect(page.getByText(/GST state code 24 \(Gujarat\)/)).toBeVisible();
  await expect(page.getByText(/Daman and Silvassa/).first()).toBeVisible();
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    /\/field-service-management-surat\/opengraph-image$/
  );
});

test("sitemap lists only city hubs and has no duplicates", async ({ request }) => {
  const xml = await (await request.get("/sitemap.xml")).text();
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  expect(new Set(locs).size).toBe(locs.length);
  expect(locs.some((loc) => loc.endsWith("/gst-invoicing-mumbai"))).toBe(false);
  expect(locs.filter((loc) => loc.includes("/field-service-management-") && !loc.endsWith("-india"))).toHaveLength(14);
});

test("unknown pages render the 404 page", async ({ page }) => {
  const response = await page.goto("/this-page-does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: /couldn.t find that page/i })).toBeVisible();
});
