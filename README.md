# astragroup-website-fasadanakljuc

Fasada na ključ, fasadanakljuc.si, built from `tl-template-website` v0.5.0. Read this first; the detail is in [`docs/`](docs/).

## What it is

An [Astro](https://astro.build) site built into static files, served by Cloudflare Pages. It explains, step by step, how a facade is renovated or built turnkey on a new house, and leads the visitor to a quote request. What to build is in [docs/brief.md](docs/brief.md). It sets no cookies and loads no outside service.

**Languages:** Slovenian only, at the root (no language prefix).

### Pages

Every address is in Slovenian; `scripts/check-design.mjs` fails the build on a page or a link at one of the template's English names (`/imprint`, `/privacy`, …). The addresses are kept in one place, [src/lib/navigation.ts](src/lib/navigation.ts).

| Page | Address |
| --- | --- |
| Domov | `/` |
| Prenova fasade | `/prenova-fasade` |
| Nova fasada na ključ | `/nova-fasada-na-kljuc` |
| Vrste fasad | `/vrste-fasad` |
| Subvencije | `/subvencije` |
| Pogosta vprašanja, and one page per question | `/pogosta-vprasanja`, `/pogosta-vprasanja/<vprašanje>` |
| Povpraševanje, its thank-you and error pages | `/povprasevanje`, `/povprasevanje/hvala`, `/povprasevanje/napaka` |
| Pravno obvestilo (the imprint) | `/pravno-obvestilo` |
| Politika zasebnosti | `/zasebnost` |
| Izjava o dostopnosti | `/dostopnost` |
| Zemljevid strani | `/zemljevid-strani` |

The texts of the site's own pages are in [src/texts/sl.ts](src/texts/sl.ts); the FAQ and the legal texts in `src/content/`. Every fact cites its source with the date it was checked ([src/lib/sources.ts](src/lib/sources.ts), the FAQ entries' `sources`).

The quote form waits for Trislab's shared form Worker: until [src/lib/quote-form.ts](src/lib/quote-form.ts) has its address, the form is shown with its button switched off. The site shows no e-mail address or phone number; the form is the only contact.

## Environments

| Environment | Address | Shows | Who can open it |
| --- | --- | --- | --- |
| `dev` | `dev.fasadanakljuc.si` | The newest merged work | Signed-in people only |
| `staging` | `staging.fasadanakljuc.si` | The newest release | Signed-in people only |
| `production` | `fasadanakljuc.si` | The promoted release | Everyone, after the cutover |

How a change moves between them is in [docs/deployment.md](docs/deployment.md). Where each one runs and which version is deployed: `pnpm status`.

## Before production

- Connect the quote form: the Worker's address and the Turnstile site key in `src/lib/quote-form.ts`, the form page's Content-Security-Policy rule in `public/_headers` ([docs/forms.md](docs/forms.md)); test a submission end to end and the form with a keyboard and a screen reader.
- Check the subsidy facts on `/subvencije` and in the FAQ against the call again, and update the `checked` dates.
- Choose licensed stock photos for the hero (the drawing in `src/components/HeroFacade.astro` stands in), or keep the drawing.
- Have a lawyer review the privacy policy and the client accept the texts, including "brezplačno in brez obveznosti" on the quote request.
- Check the facts in `src/site.config.ts` against the company's published data.

## Work on it

1. `pnpm install`, then `pnpm dev`, and open <http://localhost:4321>.
2. Run `pnpm test` and `pnpm test:a11y` before every push ([docs/getting-started.md](docs/getting-started.md)).
3. Every change is a PR to `main`. `ci / ci` must pass and a code owner must approve. A merge deploys to `dev`.

## More

- [AGENTS.md](AGENTS.md): the guide for coding agents and their skills.
- [Site settings](docs/site-settings.md): languages, lists of items, contact and legal pages, the brand.
- [Deployment](docs/deployment.md): deploy, release and promote.
- [Quality checks](docs/quality-checks.md): what `ci / ci` checks.
- [Updates from the template](docs/upgrading/README.md): `.template-version` and update PRs.
