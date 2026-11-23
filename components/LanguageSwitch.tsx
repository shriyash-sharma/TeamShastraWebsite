import Link from "next/link";
import { hindiPathFor } from "@/lib/seo/landing/hi/paths";

type Props =
  | { englishPath: string; hindiPath?: never }
  | { hindiPath: string; englishPath: string };

/**
 * "हिंदी में पढ़ें" on an English page that has a Hindi version, or "Read in English" on a Hindi page.
 * Renders nothing on English pages without a Hindi version.
 */
export function LanguageSwitch({ englishPath, hindiPath }: Props) {
  if (hindiPath) {
    return (
      <p className="lang-switch">
        <Link href={englishPath} hrefLang="en-IN" lang="en">Read this page in English</Link>
      </p>
    );
  }
  const target = hindiPathFor(englishPath);
  if (!target) return null;
  return (
    <p className="lang-switch">
      <Link href={target} hrefLang="hi-IN" lang="hi">यह पेज हिंदी में पढ़ें</Link>
    </p>
  );
}
