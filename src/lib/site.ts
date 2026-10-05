/**
 * Everything that names or locates the site, in one place.
 *
 * The URL is baked in at scaffold time rather than read from the environment because it is
 * public information and a build that silently falls back to localhost produces a sitemap full
 * of unreachable URLs. `NEXT_PUBLIC_SITE_URL` still overrides it, for a preview or a staging
 * domain; that variable is inlined into the bundle at build time, so changing it afterwards in
 * the hosting panel does nothing — the image has to be rebuilt.
 */

const FALLBACK_URL = 'https://lgpd.mettrics.com.br'

function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_URL
  let parsed: URL
  try {
    parsed = new URL(raw)
  } catch {
    throw new Error(
      `Invalid site URL: ${raw}. Set NEXT_PUBLIC_SITE_URL to an absolute URL, or fix FALLBACK_URL in src/lib/site.ts.`,
    )
  }
  // Stored without the trailing slash so `${SITE.url}${route}` never produces a double slash.
  return parsed.origin + parsed.pathname.replace(/\/$/, '')
}

export const SITE = {
  name: 'Mettrics · Privacidade e LGPD',
  description: 'Central de privacidade e proteção de dados pessoais da Mettrics.',
  locale: 'pt-BR',
  url: resolveSiteUrl(),
} as const

/**
 * The one literal colour outside src/styles/globals.css. The browser reads it from a meta tag
 * before any stylesheet exists, so it cannot be a CSS token. Keep it in sync with --color-bg-base.
 */
export const THEME_COLOR = '#1a1915'

/** Header navigation. Adding a page here does not affect the sitemap — that one discovers routes. */
export const NAV: ReadonlyArray<{ href: string; label: string }> = [
  { href: '/privacidade', label: 'Privacidade' },
  { href: '/termos', label: 'Termos' },
  { href: '/direitos-do-titular', label: 'Direitos do titular' },
]

/**
 * The data controller, as registered at Receita Federal. Every page that names the company or
 * the privacy channel reads from here, so a change of address or of encarregado is one edit.
 */
export const CONTROLLER = {
  tradeName: 'Mettrics',
  legalName: 'Mettrics Agências de Publicidade Ltda.',
  cnpj: '65.937.126/0001-32',
  website: 'https://mettrics.com.br',
  privacyEmail: 'lgpd@mettrics.com.br',
  /**
   * Full name of the encarregado (DPO). Resolução CD/ANPD nº 18/2024, art. 9, requires the name
   * to be public once one is appointed. Left empty until the appointment is formalised; the pages
   * then show only the privacy channel.
   */
  dpoName: '' as string,
} as const

/** Absolute URL for a route, the form sitemaps and canonical tags need. */
export function absoluteUrl(route: string): string {
  return route === '/' ? `${SITE.url}/` : `${SITE.url}${route}`
}
