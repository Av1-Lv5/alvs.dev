import { sitemapSections } from "@data/sitemap";

export type SitePage = {
  title: string;
  path: string;
  description: string;
  category: string;
  keywords: string[];
};

export type RankedPage = SitePage & { score: number };

/**
 * Flattens the sitemap into the flat page list the search UIs consume.
 * Shared by MobileDock and CommandPalette so they always search the same
 * set. Server-side only (called from component frontmatter); the client
 * scripts receive the result as a JSON island.
 */
export function getSitePages(): SitePage[] {
  return sitemapSections.flatMap((section) =>
    section.items.map((item) => ({
      title: item.label,
      path: item.href,
      description: item.description,
      category: section.title,
      keywords: item.keywords ?? [],
    })),
  );
}

/** Groups pages by category, preserving first-seen order. */
export function groupByCategory(items: SitePage[]): Map<string, SitePage[]> {
  const groups = new Map<string, SitePage[]>();
  for (const item of items) {
    const list = groups.get(item.category) ?? [];
    list.push(item);
    groups.set(item.category, list);
  }
  return groups;
}

/**
 * Builds a result <a> with title/description spans, prefixed by the
 * caller's CSS namespace ("dock" or "cmdk"). Uses textContent (never
 * innerHTML) so page copy can't inject nodes. DOM helper — client only.
 */
export function createResultLink(
  entry: SitePage,
  prefix: string,
): HTMLAnchorElement {
  const link = document.createElement("a");
  link.href = entry.path;
  link.className = `${prefix}-result-link`;

  const title = document.createElement("span");
  title.className = `${prefix}-result-title`;
  title.textContent = entry.title;

  const desc = document.createElement("span");
  desc.className = `${prefix}-result-desc`;
  desc.textContent = entry.description;

  link.append(title, desc);
  return link;
}

function normalize(value: string) {
  return value.toLowerCase();
}

/**
 * Ordered-subsequence fuzzy match: every character of `query` must appear
 * in `text` in order (not necessarily contiguous). Returns null if the
 * full subsequence isn't found. Tighter, earlier matches score higher.
 */
function fuzzyScore(text: string, query: string): number | null {
  let cursor = 0;
  let firstMatch = -1;
  let lastMatch = -1;

  for (const char of query) {
    const found = text.indexOf(char, cursor);
    if (found === -1) return null;
    if (firstMatch === -1) firstMatch = found;
    lastMatch = found;
    cursor = found + 1;
  }

  const span = lastMatch - firstMatch + 1;
  const density = query.length / span; // 1 = fully contiguous match
  return 40 * density - Math.min(firstMatch, 20) * 0.5;
}

/**
 * Floor for fuzzy (non-substring) matches. The subsequence rule alone is
 * very lenient — for "work" it happily matches w-o-r in "worth" plus k
 * in "keeps" scattered across "Shows worth the commute... keeps
 * growing", surfacing Podcasts for a query that has nothing to do with
 * it. Requiring a minimum tightness (density ≥ ~0.4 for an early match)
 * keeps useful typos like "pdcst" → Podcasts (~29) and "cntct" →
 * Connect (~17) while dropping that scattered-characters noise (<5).
 */
const MIN_FUZZY_SCORE = 15;

/** Score a single field against the query, or null if it doesn't match at all. */
function scoreField(text: string, query: string): number | null {
  const t = normalize(text);
  const q = normalize(query);
  if (!q) return null;

  if (t === q) return 100;
  if (t.startsWith(q)) return 90;

  const idx = t.indexOf(q);
  if (idx !== -1) {
    // Word-start bonus: "me" at the front of a word ("Hire Me") is a
    // much stronger signal than the same substring buried mid-word.
    const prev = idx === 0 ? " " : t[idx - 1];
    const isWordStart = /[\s/&-]/.test(prev);
    return (isWordStart ? 85 : 80) - Math.min(idx, 20);
  }

  const fuzzy = fuzzyScore(t, q);
  return fuzzy !== null && fuzzy >= MIN_FUZZY_SCORE ? fuzzy : null;
}

/**
 * Best score across a page's alternate names, or null if none match.
 * Keywords are meant to be found by their *whole* phrase, so only
 * substring/fuzzy scoring applies (scoreField's own exact/startsWith
 * rules still apply per keyword).
 */
function scoreKeywords(keywords: string[], query: string): number | null {
  let best: number | null = null;
  for (const keyword of keywords) {
    const score = scoreField(keyword, query);
    if (score !== null && (best === null || score > best)) best = score;
  }
  return best;
}

/**
 * Ranks pages against a query with fuzzy matching. Tier layout:
 *   1200+ exact/prefix title · 1100+ exact/prefix keyword ·
 *   1000+ weaker (mid-word/fuzzy) title · 850+ weaker keyword ·
 *   500+ description · 0+ category
 * Tiers are spaced further apart than any within-field score, so a
 * weak title match still beats a strong description match — but an
 * exact keyword hit ("resume" → the Resume page's "hire me" alias)
 * outranks a buried mid-word title substring ("me" inside "Home").
 * Returns [] for an empty query (caller should fall back to the
 * default grouped/browse view).
 */
export function rankPages(pages: SitePage[], query: string): RankedPage[] {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const results: RankedPage[] = [];

  for (const page of pages) {
    const titleScore = scoreField(page.title, trimmed);
    const keywordScore = scoreKeywords(page.keywords, trimmed);
    const descScore = scoreField(page.description, trimmed);
    const categoryScore = scoreField(page.category, trimmed);

    let score: number | null = null;
    if (titleScore !== null) {
      score = (titleScore >= 90 ? 1200 : 1000) + titleScore;
    } else if (keywordScore !== null) {
      score = (keywordScore >= 90 ? 1100 : 850) + keywordScore;
    } else if (descScore !== null) {
      score = 500 + descScore;
    } else if (categoryScore !== null) {
      score = categoryScore;
    }

    if (score !== null) results.push({ ...page, score });
  }

  return results.sort((a, b) => b.score - a.score);
}

/**
 * Serializes the page list for a JSON data island. Escapes `<` so page
 * copy containing "</script>" can't terminate the script tag early.
 */
export function serializePageData(pages: SitePage[]): string {
  return JSON.stringify(pages).replace(/</g, "\\u003c");
}

export function debounce<Args extends unknown[]>(
  fn: (...args: Args) => void,
  waitMs: number,
) {
  let timer: ReturnType<typeof setTimeout> | undefined;
  return (...args: Args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), waitMs);
  };
}
