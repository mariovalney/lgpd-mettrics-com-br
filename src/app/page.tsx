import Link from 'next/link'
import { ButtonLink } from '@/components/ui/button-link'
import { Container } from '@/components/ui/container'
import { SectionLabel } from '@/components/ui/section-label'
import { DATA_SUBJECT_RIGHTS, STANDARD_DOCUMENTS } from '@/lib/documents'
import { CONTROLLER } from '@/lib/site'
import { cn } from '@/lib/utils'

const DOCUMENTS = [STANDARD_DOCUMENTS.privacy, STANDARD_DOCUMENTS.terms, DATA_SUBJECT_RIGHTS]

const CONTROLLER_FACTS: ReadonlyArray<{
  label: string
  value: string
  href?: string
  numeric?: boolean
}> = [
  { label: 'Controlador', value: CONTROLLER.legalName },
  { label: 'CNPJ', value: CONTROLLER.cnpj, numeric: true },
  ...(CONTROLLER.dpoName ? [{ label: 'Encarregado', value: CONTROLLER.dpoName }] : []),
  {
    label: 'Canal de privacidade',
    value: CONTROLLER.privacyEmail,
    href: `mailto:${CONTROLLER.privacyEmail}`,
  },
]

export default function HomePage() {
  return (
    <>
      <Container className="py-20 md:py-28">
        <SectionLabel>Privacidade · LGPD</SectionLabel>
        <h1 className="max-w-3xl text-[clamp(32px,5vw,56px)] leading-[1.08] tracking-[-1px]">
          Como a Mettrics trata dados pessoais.
        </h1>
        <p className="mt-5 max-w-xl text-fg-secondary">
          Documentos e canais da Mettrics sobre a Lei Geral de Proteção de Dados (Lei n.º
          13.709/2018), reunidos em um só endereço.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href={STANDARD_DOCUMENTS.privacy.href}>
            Ler a Política de Privacidade
          </ButtonLink>
          <ButtonLink href={`mailto:${CONTROLLER.privacyEmail}`} variant="secondary">
            Escrever para {CONTROLLER.privacyEmail}
          </ButtonLink>
        </div>
      </Container>

      <section className="border-t border-border bg-bg-surface py-16 md:py-20">
        <Container>
          <h2 className="text-[clamp(22px,3vw,30px)] tracking-[-0.5px]">Documentos</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {DOCUMENTS.map((doc) => (
              <li key={doc.href}>
                <Link
                  href={doc.href}
                  className="flex h-full flex-col rounded-xl border border-border-subtle bg-bg-elevated p-6 transition-colors duration-200 hover:border-border hover:bg-bg-elevated-2"
                >
                  <h3 className="text-[17px]">{doc.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-fg-secondary">{doc.summary}</p>
                  <p className="mt-5 font-mono text-[11px] text-fg-muted">
                    Atualizado em {doc.updated}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-border py-16 md:py-20">
        <Container>
          <h2 className="text-[clamp(22px,3vw,30px)] tracking-[-0.5px]">
            Quem responde pelos dados
          </h2>
          <dl className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {CONTROLLER_FACTS.map((fact) => (
              <div key={fact.label} className="bg-bg-elevated px-6 py-5 sm:odd:last:col-span-2">
                <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-fg-muted">
                  {fact.label}
                </dt>
                <dd className={cn('mt-1.5 text-fg-primary', fact.numeric && 'text-numeric')}>
                  {fact.href ? (
                    <a href={fact.href} className="font-bold hover:text-accent-hover">
                      {fact.value}
                    </a>
                  ) : (
                    fact.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
    </>
  )
}
