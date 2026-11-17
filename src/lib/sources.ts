// The sources of the facts on the site's own pages, with the date each was
// last checked (docs/brief.md: every fact cites its source with that date).
// The FAQ entries give theirs in their front matter (src/content.config.ts).
// Check a source again before a release and update `checked`; when the call
// closes or changes, update the Subvencije page (src/texts/sl.ts) with it.

export interface Source {
  title: string;
  url: string;
  /** The day the fact was last checked against the source, YYYY-MM-DD. */
  checked: string;
}

export const SOURCES = {
  call: {
    title: "Eko sklad: Javni poziv 126SUB-OB26, nepovratne finančne spodbude občanom",
    url: "https://www.ekosklad.si/prebivalstvo/pridobite-spodbudo/objava/javni-poziv-126sub-ob26-nepovratne-financne-spodbude-obcanom-za-nove-nalozbe-v-vecjo-energijsko-ucinkovitost-in-rabo-obnovljivih-virov-energije-v-stavbah",
    checked: "2026-11-17",
  },
  callText: {
    title: "Eko sklad: čistopis besedila javnega poziva 126SUB-OB26 (PDF)",
    url: "https://ekosklad.si/uploads/116079c0-d67b-4eff-9189-b2642533e4a0/Javni-poziv-126SUB-OB26_%C4%8Distopis.pdf",
    checked: "2026-11-17",
  },
} satisfies Record<string, Source>;
