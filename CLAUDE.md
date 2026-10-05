# Mettrics · Privacidade e LGPD — static site

Next.js 16 App Router in TypeScript, exported to static files (`output: 'export'`) and served by
nginx. There is no database, no authentication and no server at runtime: the production image
contains HTML, CSS and JavaScript, nothing else.

Code, identifiers, comments and commit messages in English. Only the interface is in the site's
own language.

## Structure

```
src/app/            pages, sitemap.ts, robots.ts, not-found.tsx, favicons
src/lib/site.ts     name, URL, navigation, THEME_COLOR, CONTROLLER (company, CNPJ, privacy channel)
src/lib/documents.ts  standard documents, products and their pages, last update dates
src/lib/routes.ts   build-time route discovery, feeds the sitemap
src/components/ui/  container, button, section label, prose (legal copy)
src/styles/         globals.css — Mettrics tokens, the only file with colour literals
public/brand/       Mettrics wordmark
scripts/            check-export.mjs (post-build assertions), preview.mjs
Dockerfile          multi-stage build ending in nginx on port 8080
docs/DEPLOY.md      the Easypanel service
```

Central de privacidade da Mettrics: the canonical home of the company's LGPD documents (privacy
policy, data subject rights) and of the privacy channel. Visual identity follows the Mettrics
design system: dark ground only, Lato and JetBrains Mono, a single accent used sparingly.

## Legal content

- **Legal text is published, not written here.** The approved wording and the update
  methodology live in Brain, collection [LGPD](https://brain.mettrics.cloud/collection/lgpd-Ri49Z1W1en).
  Change a document only with the approved wording. Do not paraphrase, "improve" or summarise a clause in passing.
- **Standard text first, product page second.** `/privacidade` and `/termos` hold what applies to
  every product; `/privacidade/<product>` and `/termos/<product>` hold only what differs. A clause
  shared by every product belongs in the standard text, not repeated per product.
- **A new product** is an entry in `PRODUCTS` plus one page per document kind it has particulars
  for.
- **Bump `updated` in `src/lib/documents.ts`** whenever a document's content changes. The home
  card and the page header both read it.
- **Company data lives in `CONTROLLER`** (`src/lib/site.ts`). Never repeat the CNPJ, the legal
  name or the privacy e-mail as a literal in a page.
- **Cite the article** (`art. 18, § 3º`) when copy restates an obligation from Lei 13.709/2018.

## How to work here

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm verify     # typecheck + lint + build + export check. This is the gate.
pnpm preview    # serves out/ the way nginx does, after a build
```

## Always do this

- **Put every colour in `src/styles/globals.css`.** Style with the tokens (`text-fg-primary`,
  `bg-bg-surface`, `border-border`). A loose hex is how a site starts drifting visually, and the
  drift is only obvious once it is everywhere. `THEME_COLOR` in `src/lib/site.ts` is the single
  exception, because a browser meta tag cannot read a CSS variable.
- **Export `metadata` from every page**, with a title and a description. The `%s · <site>`
  template is already in the root layout, so give only the page name.
- **Run `pnpm verify` before calling a task done.** It fails when a page is missing from the
  sitemap, which is the mistake that otherwise reaches production unnoticed.
- **Add a new page to `NAV`** in `src/lib/site.ts` when it belongs in the menu. The sitemap needs
  nothing: it discovers the route.

## Never do this

- **Never add a Route Handler, `revalidate`, ISR, a Server Action or anything else that needs a
  server at request time.** The static export drops them silently — the build passes and the
  feature simply does not exist in production. If the site genuinely needs one, that is a change
  of deployment model: switch to `output: 'standalone'` and a Node runtime image, deliberately.
- **Never add a database or a CMS without deciding the deployment first.** Content that changes
  without a rebuild has nowhere to live in this architecture.
- **Never hardcode the domain in a page.** It lives in `src/lib/site.ts`; use `absoluteUrl()`.
- **Never use `any`, and never disable a Biome rule with a comment** without saying why in the
  pull request.
- **Never commit `.env.local`.**

## Adding a dynamic route

`src/lib/routes.ts` cannot enumerate `[slug]` from the folder name. Export `generateStaticParams`
in the page, and add the same routes to `src/app/sitemap.ts` from the same source, so the two
cannot disagree. `pnpm check:export` fails if an exported page is missing from the sitemap.
