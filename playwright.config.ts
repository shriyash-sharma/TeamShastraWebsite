import { defineConfig, devices } from "@playwright/test";

const remoteBase = process.env.PLAYWRIGHT_BASE_URL;
const localPort = process.env.PLAYWRIGHT_PORT || "3357";
const localBase = `http://127.0.0.1:${localPort}`;

export default defineConfig({
  testDir: "./e2e",
  timeout: 60_000,
  expect: { timeout: 15_000 },
  fullyParallel: false,
  workers: 1,
  retries: process.env.CI ? 1 : 0,
  reporter: [["list"]],
  use: {
    baseURL: remoteBase || localBase,
    trace: "on-first-retry",
    screenshot: "only-on-failure"
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: remoteBase
    ? undefined
    : {
        command: `npm run dev -- --port ${localPort} --hostname 127.0.0.1`,
        url: localBase,
        reuseExistingServer: false,
        timeout: 120_000
      }
});
