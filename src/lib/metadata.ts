import type { Metadata } from 'next'
import { SITE } from './site'

/** Open Graph wants `pt_BR`; the html lang attribute wants `pt-BR`. */
const OG_LOCALE = SITE.locale.replace('-', '_')

const OG_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Como a Mettrics trata dados pessoais. Central de privacidade e LGPD da Mettrics.',
}

/**
 * Metadata for one page. Next replaces a parent's `openGraph` and `twitter` objects instead of
 * merging them, so a page that sets only title and description would share its link with the
 * home page's title, description and URL, and would lose the image as well.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  /** Omit on the home page, which uses the site name alone. */
  title?: string
  description: string
  path: string
}): Metadata {
  const fullTitle = title ? `${title} · ${SITE.name}` : SITE.name
  return {
    title: title ?? { absolute: SITE.name },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      locale: OG_LOCALE,
      title: fullTitle,
      description,
      url: path,
      images: [OG_IMAGE],
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [OG_IMAGE] },
  }
}
