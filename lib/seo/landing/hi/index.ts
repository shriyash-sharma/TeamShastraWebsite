import { hindiFeatures } from "./features";
import { hindiHome } from "./home";
import { hindiIndustries } from "./industries";
import type { HindiPage } from "./types";

export type { HindiPage } from "./types";

/** Every page under /hi, home first. */
export const hindiPages: HindiPage[] = [hindiHome, ...hindiFeatures, ...hindiIndustries];

export function getHindiPage(path: string): HindiPage | undefined {
  return hindiPages.find((page) => page.path === path);
}

export function getHindiPageBySlug(slug: string): HindiPage | undefined {
  return hindiPages.find((page) => page.slug === slug);
}

/** Hindi body text we wrote (for content tests): headings, prose, lists, link reasons and FAQs. */
export function hindiBodyText(page: HindiPage): string {
  return [
    page.h1,
    page.intro,
    ...page.sections.flatMap((section) => [
      section.heading,
      ...(section.paragraphs ?? []),
      ...(section.list ?? []),
      ...(section.links ?? []).flatMap((link) => [link.label, link.text])
    ]),
    ...page.faqs.flatMap((faq) => [faq.question, faq.answer])
  ].join("\n");
}
