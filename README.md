# Mettrics · Privacidade e LGPD

Mettrics privacy centre: the single home for the company's LGPD documents and privacy channel,
published at https://lgpd.mettrics.com.br.

| Route | Content |
|---|---|
| `/` | Published documents and the data controller's identification |
| `/privacidade` | Standard privacy policy, valid for every Mettrics product |
| `/privacidade/<product>` | What is particular to one product (`site`, `auditt`) |
| `/termos` | Standard terms of use for the Mettrics platforms |
| `/termos/<product>` | What is particular to one platform (`auditt`). The site has no users, so no terms |
| `/direitos-do-titular` | Data subject rights under LGPD art. 18 and how to exercise them |

The methodology for updating these texts lives in Brain, under Produtos.

Static site: Next.js 16 App Router exported to plain HTML, served by nginx. No database, no
authentication, no runtime server.

## Running it

```bash
pnpm install          # Node 22+, pnpm 10
pnpm dev              # http://localhost:3000
pnpm verify           # typecheck + lint + build + export check. This is the gate.
pnpm preview          # serves out/ exactly as nginx will, on http://localhost:3001
```

## Structure

```
src/app/            pages, sitemap.ts, robots.ts, not-found.tsx, favicons
src/lib/site.ts     name, URL, navigation, company data (CONTROLLER)
src/lib/documents.ts  standard documents, products and their pages, last update dates
src/lib/routes.ts   build-time route discovery, feeds the sitemap
src/components/ui/  container, button, section label, prose (legal copy)
src/styles/         globals.css — Mettrics tokens, the only file with colour literals
public/brand/       Mettrics wordmark
scripts/            export check and local preview
docs/DEPLOY.md      Easypanel service, build arguments, domain
```

## Adding a page

Create `src/app/<path>/page.tsx`, export `metadata` with a title, and add the entry to `NAV` in
`src/lib/site.ts` if it belongs in the menu. The sitemap needs no edit: it reads the route tree
from disk at build time, and `pnpm verify` fails if an exported page is missing from it.

## Rules that keep the site consistent

- **No hex outside `src/styles/globals.css`.** Use the tokens (`text-fg-primary`, `bg-bg-surface`,
  `border-border`). The single exception is `THEME_COLOR` in `src/lib/site.ts`, which a browser
  meta tag requires as a literal.
- **No Route Handlers, no `revalidate`, no server-side data at request time.** The build produces
  static files; anything needing a server silently stops working. If the site starts needing one,
  see the note at the end of `docs/DEPLOY.md`.
- **`pnpm verify` before every commit.** CI runs the same command.

## Deploy

`docs/DEPLOY.md`. In short: Easypanel app service, built from this `Dockerfile`, listening on
port 8080.
