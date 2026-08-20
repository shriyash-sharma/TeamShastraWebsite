import { expect, test } from "@playwright/test";
import { dismissCookies, openVisitorChat } from "./helpers";

test.beforeEach(async ({ page }) => {
  await dismissCookies(page);
});

test("visitor can open chat, start a thread, and send a message", async ({ page }) => {
  await openVisitorChat(page);
  await expect(page.getByText(/Usually replies in a few minutes/i)).toBeVisible();

  await page.getByTestId("visitor-chat-name").fill("Website E2E");
  await page.getByTestId("visitor-chat-email").fill("e2e.website.chat@teamshastra.com");
  await page.getByTestId("visitor-chat-phone").fill("9876543210");
  await page.getByTestId("visitor-chat-start").click();

  await expect(page.getByTestId("visitor-chat-thread")).toBeVisible({ timeout: 20_000 });
  await expect(page.getByText(/e2e.website.chat@teamshastra.com/i)).toBeVisible();

  const body = `E2E ping ${new Date().toISOString()}`;
  await page.getByTestId("visitor-chat-input").fill(body);
  await page.getByTestId("visitor-chat-send").click();
  await expect(page.getByTestId("visitor-chat-mine").filter({ hasText: body })).toBeVisible({
    timeout: 20_000
  });
});

test("chat start validates email", async ({ page }) => {
  await openVisitorChat(page);
  await page.getByTestId("visitor-chat-email").fill("not-an-email");
  await page.getByTestId("visitor-chat-phone").fill("9876543210");
  await page.getByTestId("visitor-chat-start").click();
  await expect(page.getByTestId("visitor-chat-thread")).toHaveCount(0);
});
