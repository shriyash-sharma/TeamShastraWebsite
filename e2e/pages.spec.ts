import { expect, test } from "@playwright/test";
import { dismissCookies } from "./helpers";

test.beforeEach(async ({ page }) => {
  await dismissCookies(page);
});

test("home shows chat launcher and core CTAs", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/TeamShastra/);
  await expect(page.getByRole("heading", { name: "TeamShastra", level: 1 })).toBeVisible();
  await expect(page.getByTestId("hero-app-preview").getByRole("img").first()).toBeVisible();
  await expect(page.getByTestId("app-screenshot-gallery")).toBeVisible();
  await expect(page.getByTestId("visitor-chat-launch")).toBeVisible();
  const noHorizontalScroll = await page.evaluate(
    () => document.documentElement.scrollWidth <= window.innerWidth + 4
  );
  expect(noHorizontalScroll).toBe(true);
  await expect(page.getByRole("link", { name: "Join Beta" }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: "Login" }).first()).toBeVisible();
});

test("features page describes visitor chat", async ({ page }) => {
  await page.goto("/features");
  await expect(page.getByRole("heading", { name: /What TeamShastra does/i })).toBeVisible();
  await expect(page.getByTestId("app-screenshot-gallery")).toBeVisible();
  await expect(page.getByText(/visitor chat on this site/i)).toBeVisible();
  await expect(page.getByText(/Work orders/i).first()).toBeVisible();
});

test("login path sends people to the app", async ({ page }) => {
  const response = await page.goto("/login", { waitUntil: "commit" });
  expect(page.url()).toMatch(/app\.teamshastra\.com/);
  expect(response?.status() ?? 200).toBeLessThan(400);
});

test("contact page points people to chat", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.getByRole("heading", { name: /Talk to TeamShastra/i })).toBeVisible();
  await expect(page.getByText(/Chat with us/i).first()).toBeVisible();
  await expect(page.getByText(/email and mobile number/i)).toBeVisible();
});
