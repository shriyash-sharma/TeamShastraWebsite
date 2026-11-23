import { expect, test } from "@playwright/test";
import { EMOJI_PATTERN, styleHits } from "../lib/seo/style-rules";

// Prompt 18: Google cuts titles at about 580 px of Arial 20 px. Widths below are Arial's advance widths per 1000 units
// of the em; the table gives 670 px for the old home title, which Seobility measured at 673 px.

const origin = "https://teamshastra.com";
const MAX_TITLE_PX = 580;
const MAX_DESCRIPTION_CHARS = 158;
/** Known duplicate, left for the owner to decide (Prompt 18, section 2). */
const allowedDuplicateTitles = new Set(["Privacy Policy | TeamShastra"]);

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const upperWidths = [667, 667, 722, 722, 667, 611, 778, 722, 278, 500, 667, 556, 833, 722, 778, 667, 778, 722, 667, 611, 722, 667, 944, 667, 667, 611];
const lower = "abcdefghijklmnopqrstuvwxyz";
const lowerWidths = [556, 556, 500, 556, 556, 278, 556, 556, 222, 222, 500, 222, 833, 556, 556, 556, 556, 333, 500, 278, 556, 500, 722, 500, 500, 500];
const arial: Record<string, number> = {
  " ": 278, "!": 278, '"': 355, "#": 556, $: 556, "%": 889, "&": 667, "'": 191, "(": 333, ")": 333, "*": 389, "+": 584,
  ",": 278, "-": 333, ".": 278, "/": 278, ":": 278, ";": 278, "<": 584, "=": 584, ">": 584, "?": 556, "@": 1015,
  "[": 278, "\\": 278, "]": 278, "^": 469, _: 556, "`": 333, "{": 334, "|": 260, "}": 334, "~": 584,
  "–": 556, "—": 1000, "‘": 222, "’": 222, "“": 333, "”": 333, "₹": 556, "·": 278
};
for (const digit of "0123456789") arial[digit] = 556;
[...upper].forEach((ch, i) => (arial[ch] = upperWidths[i]));
[...lower].forEach((ch, i) => (arial[ch] = lowerWidths[i]));

/** Estimated width in px at Arial 20 px. Unknown characters (Devanagari on the Hindi pages) count as 556. */
function titleWidth(title: string): number {
  return ([...title].reduce((sum, ch) => sum + (arial[ch] ?? 556), 0) * 20) / 1000;
}

function decode(text: string): string {
  return text.replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
}

test("the width table matches Seobility's reading of the old home title", () => {
  expect(Math.round(titleWidth("TeamShastra | Field Service Software for Jobs, GST Invoices & Attendance"))).toBe(670);
});

test(`every sitemap title is under ${MAX_TITLE_PX} px, descriptions are ${MAX_DESCRIPTION_CHARS} characters or less, and both stay unique`, async ({ request }) => {
  test.setTimeout(300_000);
  const xml = await (await request.get("/sitemap.xml")).text();
  const paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].slice(origin.length) || "/");
  const rows: { path: string; title: string; width: number }[] = [];
  const problems: string[] = [];
  const seen = { title: new Map<string, string>(), description: new Map<string, string>(), h1: new Map<string, string>() };
  for (const path of paths) {
    const html = await (await request.get(path)).text();
    const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
    const description = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "");
    const h1 = decode((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "").replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
    const width = titleWidth(title);
    for (const [kind, value] of [["title", title], ["description", description], ["h1", h1]] as const) {
      const other = seen[kind].get(value);
      if (other && !(kind === "title" && allowedDuplicateTitles.has(value))) problems.push(`${path}: ${kind} also on ${other}`);
      seen[kind].set(value, path);
    }
    const hits = styleHits(`${title}\n${description}`);
    if (hits.length) problems.push(`${path}: banned wording ${hits.join(", ")}`);
    if (EMOJI_PATTERN.test(title + description)) problems.push(`${path}: emoji in title or description`);
    rows.push({ path, title, width });
    if (width > MAX_TITLE_PX) problems.push(`${path}: title ${width.toFixed(0)} px "${title}"`);
    if ([...description].length > MAX_DESCRIPTION_CHARS) problems.push(`${path}: description ${[...description].length} chars`);
  }
  rows.sort((a, b) => b.width - a.width);
  console.log(`10 widest titles of ${rows.length} (Arial 20 px estimate):`);
  console.log(rows.slice(0, 10).map((row) => `${row.width.toFixed(0).padStart(4)} px  ${row.path}  "${row.title}"`).join("\n"));
  expect(problems, problems.join("\n")).toEqual([]);
});
