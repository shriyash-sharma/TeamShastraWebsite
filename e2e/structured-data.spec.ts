import { expect, test } from "@playwright/test";
import { keyPages } from "./key-pages";

// JSON-LD on the key pages: parses, one Organization, breadcrumbs off home, no ratings or reviews.

type Node = Record<string, unknown> & { "@type"?: string | string[]; "@id"?: string };

function typesOf(node: Node): string[] {
  const type = node["@type"];
  return Array.isArray(type) ? type : type ? [type] : [];
}

for (const path of keyPages) {
  test(`structured data on ${path}`, async ({ request }) => {
    const html = await (await request.get(path)).text();
    const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
    expect(blocks.length, "JSON-LD blocks").toBeGreaterThan(0);
    const nodes: Node[] = blocks.flatMap((text) => {
      const parsed = JSON.parse(text) as Node & { "@graph"?: Node[] };
      return parsed["@graph"] ?? [parsed];
    });
    const types = nodes.flatMap(typesOf);

    const organizations = nodes.filter((node) => typesOf(node).includes("Organization"));
    expect(organizations.length, "Organization nodes").toBeLessThanOrEqual(1);
    if (organizations.length) expect(organizations[0]["@id"]).toBe("https://teamshastra.com/#organization");

    if (path !== "/") expect(types, "BreadcrumbList").toContain("BreadcrumbList");
    expect(types).not.toContain("LocalBusiness");
    const raw = blocks.join("\n");
    expect(raw).not.toContain("aggregateRating");
    expect(raw).not.toMatch(/"@type":\s*"Review"/);
  });
}

test("home describes the app with real offers only", async ({ request }) => {
  const html = await (await request.get("/")).text();
  const block = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1] ?? "{}";
  const graph = (JSON.parse(block)["@graph"] ?? []) as Node[];
  const website = graph.find((node) => typesOf(node).includes("WebSite"));
  expect(website?.inLanguage).toBe("en-IN");
  expect(website).not.toHaveProperty("potentialAction");
  const app = graph.find((node) => typesOf(node).includes("SoftwareApplication")) as Node & { offers: Node[] };
  expect(app.operatingSystem).toBe("Android, Web");
  expect(app.applicationCategory).toBe("BusinessApplication");
  expect(app.offers.map((offer) => offer.price)).toEqual(["0", "200"]);
});
