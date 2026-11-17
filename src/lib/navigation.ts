// Every address of the site, in one place and in one language (Slovenian,
// docs/brief.md "Pages or modules"). The template's English page names
// (/imprint, /privacy, /accessibility, /sitemap) are renamed here and in
// src/pages/; scripts/check-design.mjs fails the build on a link to one of
// them. Read by the header, the footer, the sitemap page, the legal texts'
// links and the quote form.
import type { UiKey } from "../i18n/ui/en";
import { t, type Lang } from "../i18n";
import site from "../site.config";

export interface NavLink {
  href: string;
  label: string;
}

/** The pages of the site's own design, in menu order. */
export const PAGES = [
  { href: "/prenova-fasade", key: "nav.renovation" },
  { href: "/nova-fasada-na-kljuc", key: "nav.newFacade" },
  { href: "/vrste-fasad", key: "nav.systems" },
  { href: "/subvencije", key: "nav.subsidy" },
] as const satisfies readonly { href: string; key: UiKey }[];

/** The quote request and the two pages the form Worker sends the visitor to. */
export const QUOTE_PATH = "/povprasevanje";
export const THANKS_PATH = "/povprasevanje/hvala";
export const FAILED_PATH = "/povprasevanje/napaka";

/** The legal pages and the sitemap for people, by their Slovenian address. */
export const LEGAL_PATHS = {
  imprint: "/pravno-obvestilo",
  privacy: "/zasebnost",
  accessibility: "/dostopnost",
  sitemap: "/zemljevid-strani",
} as const;

/** The links of the main menu, without the quote request button. */
export function menuLinks(lang: Lang): NavLink[] {
  return [
    ...PAGES.map(({ href, key }) => ({ href, label: t(lang, key) })),
    ...site.collections.filter((collection) => collection.nav).map((collection) => ({ href: `/${collection.id}`, label: collection.title[lang] })),
  ];
}

/** The legal pages this site has (src/site.config.ts legalPages), without the sitemap. */
export function legalLinks(lang: Lang): NavLink[] {
  return [
    { on: site.legalPages.imprint, href: LEGAL_PATHS.imprint, label: t(lang, "legal.imprint") },
    { on: site.legalPages.privacy, href: LEGAL_PATHS.privacy, label: t(lang, "legal.privacy") },
    { on: site.legalPages.accessibility, href: LEGAL_PATHS.accessibility, label: t(lang, "legal.accessibility") },
  ]
    .filter((link) => link.on)
    .map(({ href, label }) => ({ href, label }));
}

/** True when `path` is the page of `href` or one under it (/pogosta-vprasanja/trajanje). */
export function isCurrent(path: string, href: string): boolean {
  return path === href || path.startsWith(`${href}/`);
}
