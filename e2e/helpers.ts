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

/**
 * Answers the website's support proxy (/api/support/visitor/*) inside the browser, so tests that
 * open or use the chat never start a real conversation or send a message to the support inbox.
 */
export async function mockSupport(page: Page) {
  const messages: Array<{ id: string; body: string; sender_kind: string; sender_is_staff: boolean; created_at: string }> = [];
  await page.route(/\/api\/support\/visitor\//, async (route) => {
    const request = route.request();
    const path = new URL(request.url()).pathname;
    if (path.endsWith("/visitor/start")) {
      await route.fulfill({ json: { conversation_id: "e2e-conversation", session_token: "e2e-session" } });
      return;
    }
    if (path.endsWith("/visitor/messages") && request.method() === "POST") {
      const { body } = request.postDataJSON() as { body: string };
      const saved = {
        id: `e2e-${messages.length + 1}`,
        body,
        sender_kind: "visitor",
        sender_is_staff: false,
        created_at: new Date().toISOString()
      };
      messages.push(saved);
      await route.fulfill({ json: saved });
      return;
    }
    await route.fulfill({ json: { items: messages } });
  });
}
