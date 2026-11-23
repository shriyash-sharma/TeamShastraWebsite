import { growGuides } from "./guides/grow";
import { gstGuides } from "./guides/gst";
import { jobsGuides } from "./guides/jobs";
import { moneyGuides } from "./guides/money";
import { salaryGuides } from "./guides/salary";
import { serviceGuides } from "./guides/service";
import { startGuides } from "./guides/start";
import { teamGuides } from "./guides/team";
import { templateGuides } from "./guides/templates";
import type { Guide, GuideBlock, GuideCategory } from "./types";

export type { Guide, GuideCategory } from "./types";

export const guides: Guide[] = [
  ...salaryGuides,
  ...gstGuides,
  ...serviceGuides,
  ...startGuides,
  ...moneyGuides,
  ...teamGuides,
  ...jobsGuides,
  ...growGuides,
  ...templateGuides
];

/** Groups on /blog, in display order. */
export const guideCategories: Array<{ id: GuideCategory; heading: string }> = [
  { id: "salary", heading: "Salary & staff" },
  { id: "gst", heading: "GST & billing" },
  { id: "service", heading: "AMC & service" },
  { id: "start", heading: "Start a service business" },
  { id: "money", heading: "GST & money" },
  { id: "team", heading: "Team & hiring" },
  { id: "jobs", heading: "Jobs & AMC" },
  { id: "grow", heading: "Grow your business" },
  { id: "templates", heading: "Templates" }
];

export const guidesAuthor = { name: "TeamShastra team", url: "/about" };

export const guideDisclaimer =
  "This guide is general information, not tax or legal advice. Rules change; check the official source or ask your CA.";

/** The one fixed disclaimer sentence on Prompt 17 guides; each guide adds its own `disclaimerNote`. */
export const guideDisclaimerShared =
  "This guide is general information, not tax or legal advice. Rules change, so check the official source or ask your CA or lawyer.";

export function guideDisclaimerText(guide: Guide): string {
  return guide.disclaimerNote ? `${guideDisclaimerShared} ${guide.disclaimerNote}` : guideDisclaimer;
}

const guideMap = new Map(guides.map((guide) => [guide.slug, guide]));

export function getGuide(slug: string): Guide | undefined {
  return guideMap.get(slug);
}

export function guidePath(slug: string): string {
  return `/blog/${slug}`;
}

function blockText(block: GuideBlock): string[] {
  return [
    block.heading,
    ...(block.paragraphs ?? []),
    ...(block.list ?? []),
    ...(block.table ? [block.table.caption, ...block.table.head, ...block.table.rows.flat()] : []),
    ...(block.after ?? [])
  ];
}

/** Every word of a guide's own copy: H1, quick answer, sections, the help box and FAQs. */
export function guideBodyText(guide: Guide): string {
  return [
    guide.h1,
    guide.summary,
    ...guide.sections.flatMap((section) => [...blockText(section), ...(section.subsections ?? []).flatMap(blockText)]),
    guide.helps,
    ...guide.faqs.flatMap((faq) => [faq.question, faq.answer])
  ]
    .filter(Boolean)
    .join("\n");
}

/** Minutes to read at 200 words a minute, rounded up. */
export function readingTime(guide: Guide): number {
  const count = guideBodyText(guide).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(count / 200));
}

export function formatGuideDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
