import { expect, test } from "@playwright/test";
import { dismissCookies, mockSupport } from "./helpers";

// Prompt 18: on these pages, as served (before any menu is opened), no anchor text appears more than twice and no
// anchor text points to two different URLs. Logo links are named by aria-label, so they're compared by that name.

const pages = ["/", "/features", "/pricing", "/blog/staff-salary-calculation-per-day"];

function decode(text: string): string {
  return text.replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
}

for (const path of pages) {
  test(`anchor texts on ${path} are varied and unambiguous`, async ({ request }) => {
    const html = await (await request.get(path)).text();
    const anchors = [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)].map((m) => {
      const attrs = m[1];
      const href = decode(attrs.match(/href="([^"]*)"/)?.[1] ?? "");
      const label = decode(attrs.match(/aria-label="([^"]*)"/)?.[1] ?? m[2].replace(/<[^>]+>/g, " "))
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase();
      return { href: href.replace(/^https:\/\/teamshastra\.com(?=\/)/, ""), label };
    });
    const byLabel = new Map<string, string[]>();
    for (const anchor of anchors) {
      if (!anchor.label || anchor.href.startsWith("#")) continue;
      byLabel.set(anchor.label, [...(byLabel.get(anchor.label) ?? []), anchor.href]);
    }
    const problems: string[] = [];
    for (const [label, hrefs] of byLabel) {
      if (hrefs.length > 2) problems.push(`"${label}" appears ${hrefs.length} times`);
      if (new Set(hrefs).size > 1) problems.push(`"${label}" points to ${[...new Set(hrefs)].join(" and ")}`);
    }
    console.log(`${path}: ${anchors.length} links, ${byLabel.size} distinct texts`);
    expect(problems, problems.join("\n")).toEqual([]);
  });
}

test("the mobile menu still opens, works by keyboard and closes at 360 px", async ({ page }) => {
  await mockSupport(page);
  await page.setViewportSize({ width: 360, height: 740 });
  await page.goto("/");
  await dismissCookies(page);
  const toggle = page.getByRole("button", { name: "Open menu" });
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator("#mobile-nav a")).toHaveCount(0);
  await toggle.click();
  await expect(page.getByRole("button", { name: "Close menu" }).first()).toHaveAttribute("aria-expanded", "true");
  const drawer = page.locator("#mobile-nav");
  await expect(drawer).toBeVisible();
  await expect(drawer.getByRole("link", { name: "Pricing" })).toBeVisible();
  await expect(drawer.getByRole("link", { name: "Get it on Google Play" })).toBeVisible();
  await page.keyboard.press("Tab");
  await expect(drawer.locator("a").first()).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Open menu" })).toHaveAttribute("aria-expanded", "false");
  await page.getByRole("button", { name: "Open menu" }).click();
  await drawer.getByRole("link", { name: "Pricing" }).click();
  await expect(page).toHaveURL(/\/pricing$/);
});

test("the desktop nav shows every link and both buttons at 1366 px", async ({ page }) => {
  await mockSupport(page);
  await page.setViewportSize({ width: 1366, height: 800 });
  await page.goto("/");
  const nav = page.locator(".nav-links");
  for (const label of ["Features", "Solutions", "Industries", "Locations", "Pricing", "Blog", "About", "Contact"]) {
    await expect(nav.getByRole("link", { name: label, exact: true })).toBeVisible();
  }
  await expect(page.locator(".nav-actions").getByRole("link", { name: "Login" })).toBeVisible();
  await expect(page.locator(".nav-actions").getByRole("link", { name: "Start free trial" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Open menu" })).toBeHidden();
});
