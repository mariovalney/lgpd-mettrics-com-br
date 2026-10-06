import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Lato } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { Container } from '@/components/ui/container'
import { ANALYTICS_SCRIPT_URL, CONTROLLER, NAV, SITE, THEME_COLOR } from '@/lib/site'
import '@/styles/globals.css'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  // Makes every relative URL in metadata (canonical, Open Graph, images) resolve to an absolute
  // one. Without it, crawlers receive paths they cannot follow.
  metadataBase: new URL(SITE.url),
  title: { default: SITE.name, template: `%s · ${SITE.name}` },
  description: SITE.description,
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
    locale: SITE.locale,
  },
}

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
  colorScheme: 'dark',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={SITE.locale} className={`${lato.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script defer data-domain={new URL(SITE.url).host} src={ANALYTICS_SCRIPT_URL} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <header className="sticky top-0 z-10 border-b border-border bg-bg-base/90 backdrop-blur-md">
          <Container className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-4 md:py-5">
            <Link href="/" aria-label={`${CONTROLLER.tradeName} · Central de privacidade`}>
              <Image
                src="/brand/logo-mettrics.png"
                alt={CONTROLLER.tradeName}
                width={109}
                height={34}
                priority
              />
            </Link>
            <nav aria-label="Principal">
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] tracking-[0.3px]">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-fg-muted transition-colors duration-200 hover:text-fg-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Container>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-border">
          <Container className="flex flex-col gap-4 py-10 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div className="text-xs text-fg-muted">
              {CONTROLLER.legalName} · CNPJ <span className="text-numeric">{CONTROLLER.cnpj}</span>
            </div>
            <div className="font-mono text-[11px] text-fg-muted">
              <a href={`mailto:${CONTROLLER.privacyEmail}`} className="hover:text-fg-primary">
                {CONTROLLER.privacyEmail}
              </a>
              {' · '}
              <a href={CONTROLLER.website} className="hover:text-fg-primary">
                mettrics.com.br
              </a>
            </div>
          </Container>
        </footer>
      </body>
    </html>
  )
}
