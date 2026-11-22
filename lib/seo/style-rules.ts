/**
 * "Sounds human" writing rules shared by every page test (landing pages now; comparison pages,
 * Hindi pages and guides later). Matching is case-insensitive.
 */

/** Words and phrases that make copy read as machine-written or salesy. */
export const BANNED_PHRASES = [
  "seamless",
  "seamlessly",
  "leverage",
  "robust",
  "cutting-edge",
  "cutting edge",
  "state-of-the-art",
  "unlock",
  "elevate",
  "empower",
  "revolutionize",
  "revolutionise",
  "game-changer",
  "game changer",
  "in today's fast-paced world",
  "in today’s fast-paced world",
  "look no further",
  "delve",
  "tapestry",
  "streamline your",
  "harness",
  "in conclusion"
] as const;

/** Sentence patterns that read as templates. */
export const BANNED_PATTERNS: ReadonlyArray<{ name: string; pattern: RegExp }> = [
  { name: "Whether you're … or … opener", pattern: /(^|[.!?]\s+|\n)whether you('|’)re\b[^.!?\n]*\bor\b/i },
  { name: "is a powerful tool", pattern: /\bis a powerful tool\b/i },
  { name: "is the perfect solution", pattern: /\bis the perfect solution\b/i }
];

/** Openers that sound like stock marketing copy. Checked against the first words of each intro. */
export const STOCK_OPENERS = ["managing", "running a", "in the world of", "are you tired of"] as const;

export const EMOJI_PATTERN = /\p{Extended_Pictographic}/u;

/** Allowed em dashes for a page of `wordCount` words: one per 150 words. */
export function allowedEmDashes(wordCount: number): number {
  return Math.floor(wordCount / 150);
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const bannedPhrasePatterns = BANNED_PHRASES.map((phrase) => ({
  phrase,
  pattern: new RegExp(`(^|[^a-z])${escapeRegExp(phrase)}(?![a-z])`, "i")
}));

/** Every banned phrase or pattern found in `text`. */
export function styleHits(text: string): string[] {
  const hits: string[] = [];
  for (const { phrase, pattern } of bannedPhrasePatterns) if (pattern.test(text)) hits.push(phrase);
  for (const { name, pattern } of BANNED_PATTERNS) if (pattern.test(text)) hits.push(name);
  return hits;
}

export function emDashCount(text: string): number {
  return (text.match(/—/g) ?? []).length;
}

/** Sentences in `text`, split on sentence ends and line breaks. */
export function sentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+|\n+/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => /[a-z]/i.test(sentence));
}

/** First `count` words of a sentence, lower-cased, without punctuation. */
export function opener(sentence: string, count = 3): string {
  return sentence
    .toLowerCase()
    .replace(/[^a-z0-9₹'’\s-]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, count)
    .join(" ");
}
