import { StandardDocumentNotice } from '@/components/document-links'
import { Container } from '@/components/ui/container'
import { Prose, ProseH2, ProseHeader, ProseList, ProseP } from '@/components/ui/prose'
import { productDocument, STANDARD_DOCUMENTS } from '@/lib/documents'
import { pageMetadata } from '@/lib/metadata'

const { product, doc } = productDocument('site', 'privacy')
const TITLE = `${STANDARD_DOCUMENTS.privacy.title} · ${product.name}`

export const metadata = pageMetadata({
  title: TITLE,
  description: `O que é particular do ${product.name.toLowerCase()} da Mettrics na Política de Privacidade.`,
  path: doc.href,
})

export default function SitePrivacyPage() {
  return (
    <Container className="py-16 md:py-20">
      <Prose>
        <ProseHeader
          label={`Privacidade · ${product.name}`}
          title={product.name}
          updated={doc.updated}
        />
        <StandardDocumentNotice kind="privacy" />

        <ProseH2 id="escopo">Escopo</ProseH2>
        <ProseP>
          Vale para o site institucional <a href={product.url}>mettrics.com.br</a>.
        </ProseP>

        <ProseH2 id="dados">Dados que coletamos</ProseH2>
        <ProseList>
          <li>
            <strong>Dados fornecidos voluntariamente:</strong> nome e e-mail quando você preenche o
            formulário de contato ou solicita demonstração.
          </li>
        </ProseList>

        <ProseH2 id="uso">Como usamos os dados</ProseH2>
        <ProseList>
          <li>Responder a solicitações de contato e demonstração.</li>
        </ProseList>

        <ProseH2 id="base-legal">Base legal</ProseH2>
        <ProseList>
          <li>
            <strong>Consentimento:</strong> para envio de comunicações.
          </li>
          <li>
            <strong>Legítimo interesse:</strong> para segurança do site.
          </li>
        </ProseList>
      </Prose>
    </Container>
  )
}
