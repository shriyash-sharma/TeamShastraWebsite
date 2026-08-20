import type { Page } from "@playwright/test";

export async function dismissCookies(page: Page) {
  await page.addInitScript(() => {
    window.localStorage.setItem("ts_cookie_consent_v1", "declined");
    window.localStorage.removeItem("ts_visitor_support_v1");
  });
}

export async function openVisitorChat(page: Page) {
  await page.goto("/");
  await page.getByTestId("visitor-chat-launch").click();
  await page.getByTestId("visitor-chat-panel").waitFor();
}
