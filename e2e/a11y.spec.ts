import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";
import { dismissCookies } from "./helpers";
import { keyPages } from "./key-pages";

test.beforeEach(async ({ page }) => {
  await dismissCookies(page);
});

async function axeViolations(page: Page) {
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"])
    .analyze();
  return results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).slice(0, 3).join(" | ")}`);
}

for (const path of keyPages) {
  test(`no axe violations on ${path}`, async ({ page }) => {
    await page.goto(path);
    await page.waitForLoadState("networkidle");
    const violations = await axeViolations(page);
    expect(violations, violations.join("\n")).toEqual([]);
  });
}

test("no axe violations on home at 360px", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 740 });
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  const violations = await axeViolations(page);
  expect(violations, violations.join("\n")).toEqual([]);
});

test("footer YouTube link is named by its visible text", async ({ page }) => {
  await page.goto("/");
  const link = page.locator("footer a.support-channel[href*='youtube']");
  await expect(link).not.toHaveAttribute("aria-label", /.*/);
  await expect(link).toHaveAccessibleName(/YouTube/);
});

for (const path of ["/features", "/pricing"]) {
  test(`headings never skip a level on ${path}`, async ({ page }) => {
    await page.goto(path);
    const levels = await page.locator("main h1, main h2, main h3, main h4, main h5, main h6").evaluateAll((nodes) =>
      nodes.map((node) => Number(node.tagName.slice(1)))
    );
    expect(levels[0]).toBe(1);
    for (let i = 1; i < levels.length; i += 1) expect(levels[i] - levels[i - 1]).toBeLessThanOrEqual(1);
  });
}

test("WhatsApp button on contact has at least 4.5:1 contrast", async ({ page }) => {
  await page.goto("/contact");
  const ratio = await page.locator("a.operator-phone-action.is-whatsapp").evaluate((el) => {
    const parse = (value: string) => (value.match(/[\d.]+/g) ?? []).slice(0, 3).map(Number);
    const luminance = ([r, g, b]: number[]) => {
      const channel = (c: number) => {
        const s = c / 255;
        return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
      };
      return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
    };
    const style = getComputedStyle(el);
    const fg = luminance(parse(style.color));
    const bg = luminance(parse(style.backgroundColor));
    return (Math.max(fg, bg) + 0.05) / (Math.min(fg, bg) + 0.05);
  });
  expect(ratio).toBeGreaterThanOrEqual(4.5);
});
