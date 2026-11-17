// The texts of the site's own pages (home, the two paths, the facade systems,
// the subsidy, the quote request), per language. Short interface strings
// (menus, buttons) are in src/i18n/ui/; the FAQ and the legal texts are
// Markdown in src/content/. Every language of the site has a file here with
// the same shape (the type PageTexts makes sure of it).
import type { Lang } from "../i18n";
import sl from "./sl";

/** One step of a numbered process line: what happens and what the owner does then. */
export interface Step {
  title: string;
  text: string;
  /** What the house owner does, or decides, at this step. */
  owner: string;
}

/** A block of text with a heading: paragraphs, a list, or both. */
export interface TextBlock {
  heading: string;
  paragraphs?: string[];
  items?: string[];
}

/** The top of a page: its title, the line above it, the lead and the search description. */
export interface PageIntro {
  title: string;
  eyebrow: string;
  lead: string;
  /** The page's description for search engines and sharing. */
  description: string;
}

/** A facade system in the comparison (Vrste fasad). */
export interface FacadeSystem {
  id: string;
  name: string;
  summary: string;
  /** The layers from the wall out. */
  layers: string[];
  /** The comparison table's three cells. */
  use: string;
  look: string;
  care: string;
}

/** A choice of the quote form. */
export interface Choice {
  value: string;
  label: string;
}

export interface PageTexts {
  home: {
    intro: PageIntro;
    pathsHeading: string;
    stepsHeading: string;
    stepsLead: string;
    steps: Step[];
    systemsHeading: string;
    systemsLead: string;
    subsidyHeading: string;
    subsidyText: string;
  };
  paths: {
    renovation: { title: string; text: string };
    newFacade: { title: string; text: string };
  };
  quoteCta: {
    heading: string;
    text: string;
    next: string[];
  };
  renovation: {
    intro: PageIntro;
    when: TextBlock;
    stepsHeading: string;
    steps: Step[];
    includedHeading: string;
    included: string[];
    subsidy: TextBlock;
  };
  newFacade: {
    intro: PageIntro;
    meaning: TextBlock;
    stepsHeading: string;
    steps: Step[];
    includedHeading: string;
    included: string[];
    excludedHeading: string;
    excludedLead: string;
    excluded: string[];
  };
  systems: {
    intro: PageIntro;
    layersLabel: string;
    tableHeading: string;
    tableCaption: string;
    columns: { system: string; use: string; look: string; care: string };
    items: FacadeSystem[];
    choosing: TextBlock;
  };
  subsidy: {
    intro: PageIntro;
    what: TextBlock;
    who: TextBlock;
    howMuch: TextBlock;
    order: { heading: string; steps: Step[] };
    documents: TextBlock;
    help: TextBlock;
    checkedLabel: string;
  };
  quote: {
    intro: PageIntro;
    stepLabel: string;
    case: { legend: string; choices: Choice[] };
    building: {
      legend: string;
      houseType: string;
      houseTypes: Choice[];
      age: string;
      ages: Choice[];
      area: string;
      areaHint: string;
      municipality: string;
    };
    wish: {
      legend: string;
      work: string;
      works: Choice[];
      timeframe: string;
      timeframes: Choice[];
      subsidy: string;
      subsidyChoices: Choice[];
      message: string;
      messageHint: string;
    };
    contact: {
      legend: string;
      name: string;
      phone: string;
      email: string;
      reachHint: string;
      consentBefore: string;
      consentLink: string;
      consentAfter: string;
    };
    optional: string;
    choose: string;
    submit: string;
    /** Shown while the form can't be sent: before the page has the Environment's settings, or without JavaScript. */
    formOff: string;
    nextHeading: string;
    next: string[];
    helpsHeading: string;
    helps: string[];
  };
  thanks: { intro: PageIntro; next: string[] };
  failed: { intro: PageIntro; text: string };
}

const texts: Record<Lang, PageTexts> = { sl };

export function pageTexts(lang: Lang): PageTexts {
  return texts[lang];
}
