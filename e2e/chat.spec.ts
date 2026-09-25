import { expect, test } from "@playwright/test";
import { dismissCookies, openVisitorChat } from "./helpers";

test.beforeEach(async ({ page }) => {
  await dismissCookies(page);
});

test("visitor can open chat and send a message immediately, no form", async ({ page }) => {
  await openVisitorChat(page);
  await expect(page.getByText(/Usually replies in a few minutes/i)).toBeVisible();

  // No name/email/phone form — the thread + composer are there right away.
  await expect(page.getByTestId("visitor-chat-thread")).toBeVisible({ timeout: 20_000 });
  await expect(page.getByTestId("visitor-chat-name")).toHaveCount(0);
  await expect(page.getByTestId("visitor-chat-email")).toHaveCount(0);
  await expect(page.getByTestId("visitor-chat-start")).toHaveCount(0);

  const body = `E2E ping ${new Date().toISOString()}`;
  await page.getByTestId("visitor-chat-input").fill(body);
  await page.getByTestId("visitor-chat-send").click();
  await expect(page.getByTestId("visitor-chat-mine").filter({ hasText: body })).toBeVisible({
    timeout: 20_000
  });
});

test("visitor can volunteer a mobile number as a normal chat message", async ({ page }) => {
  await openVisitorChat(page);
  await expect(page.getByTestId("visitor-chat-thread")).toBeVisible({ timeout: 20_000 });

  await page.getByTestId("visitor-chat-input").fill("call me on 9876543210");
  await page.getByTestId("visitor-chat-send").click();
  await expect(
    page.getByTestId("visitor-chat-mine").filter({ hasText: "9876543210" })
  ).toBeVisible({ timeout: 20_000 });
});
