// Checks the design rules of docs/brief.md that a machine can check, on every
// built page, so they can't drift as pages are added:
//
// - no `style` attribute in the HTML (styles live in src/styles/);
// - no placeholder text reaches a page: sample text, lorem ipsum, TBD, TODO;
// - every <img> has an alt attribute (empty only for decoration), and no
//   picture shows twice on a page;
// - every link names where it leads: never "Read more" or "Več" alone;
// - every address is in Slovenian: no page is built at, and no link leads to,
//   one of the template's English page names (src/lib/navigation.ts).
//
// Run by `pnpm test` after the build (check:built), so ci runs it on every PR.

import { readdir, readFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL("..", import.meta.url));
const dist = join(rootDir, "dist");

/** Words that mark text nobody has written yet, in Slovenian and English. */
const PLACEHOLDERS = /\b(lorem ipsum|TBD|TODO|FIXME|vzorčno besedilo|sample text|placeholder)\b/i;
/** Link texts that don't say where they lead. */
const VAGUE_LINKS = /^(več|več o tem|preberi več|preberite več|tukaj|kliknite tukaj|read more|more|here|click here)[\s.:…→]*$/i;
/** The template's English page names; this site's addresses are Slovenian. */
export const ENGLISH_SEGMENTS = ["about", "contact", "imprint", "privacy", "accessibility", "sustainability", "sitemap", "services"];

/** True when an address (a path or a site-relative href) has an English page name as one of its segments. */
export function hasEnglishSegment(path) {
  const clean = path.split(/[?#]/)[0].replace(/\.html$/, "");
  return clean.split("/").some((segment) => ENGLISH_SEGMENTS.includes(segment));
}

/** The text a reader sees: the body without scripts, styles, comments and tags. */
export function visibleText(html) {
  const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] ?? html;
  return body
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** The problems of one built page, one line each. */
export function designProblems(html) {
  const problems = [];
  const style = html.match(/<[a-z][^>]*\sstyle\s*=/i);
  if (style) problems.push(`has a style attribute (${style[0].slice(0, 60)}…); move it to src/styles/global.css`);

  const placeholder = visibleText(html).match(PLACEHOLDERS);
  if (placeholder) problems.push(`shows placeholder text "${placeholder[0]}"; write the real text`);

  const sources = new Map();
  for (const [tag] of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\salt\s*=/.test(tag)) problems.push(`has an image without alt text: ${tag.slice(0, 80)}`);
    const src = tag.match(/\ssrc="([^"]+)"/)?.[1];
    if (src) sources.set(src, (sources.get(src) ?? 0) + 1);
  }
  for (const [src, count] of sources) {
    if (count > 1) problems.push(`shows the picture ${src} ${count} times; a photo shows at most once on a page`);
  }

  for (const [, attributes, inner] of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)) {
    const href = attributes.match(/\shref="([^"]*)"/)?.[1];
    if (href?.startsWith("/") && hasEnglishSegment(href)) problems.push(`links to ${href}; use the Slovenian address from src/lib/navigation.ts`);
    if (/aria-label\s*=/.test(attributes)) continue;
    const text = inner.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    if (VAGUE_LINKS.test(text)) problems.push(`has a link that doesn't say where it leads: "${text}"`);
  }
  return problems;
}

async function main() {
  const files = (await readdir(dist, { withFileTypes: true, recursive: true }))
    .filter((entry) => entry.isFile() && entry.name.endsWith(".html"))
    .map((entry) => join(entry.parentPath, entry.name));
  const failures = [];
  for (const file of files) {
    const path = `/${relative(dist, file).split(sep).join("/")}`;
    if (hasEnglishSegment(path)) failures.push(`${path} is built at an English address; rename the page in src/pages/`);
    const html = await readFile(file, "utf8");
    for (const problem of designProblems(html)) failures.push(`${path} ${problem}`);
  }
  if (failures.length > 0) {
    for (const failure of failures) console.error(`design: ${failure}`);
    process.exit(1);
  }
  console.log(`design: ok. ${files.length} pages at Slovenian addresses, without style attributes, placeholder text, repeated pictures or vague links.`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) await main();
