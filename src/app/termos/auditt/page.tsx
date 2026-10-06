import { StandardDocumentNotice } from '@/components/document-links'
import { Container } from '@/components/ui/container'
import { Prose, ProseH2, ProseHeader, ProseP } from '@/components/ui/prose'
import { productDocument, STANDARD_DOCUMENTS } from '@/lib/documents'
import { pageMetadata } from '@/lib/metadata'

const { product, doc } = productDocument('auditt', 'terms')
const TITLE = `${STANDARD_DOCUMENTS.terms.title} · ${product.name}`

export const metadata = pageMetadata({
  title: TITLE,
  description: `O que é particular do ${product.name} nos Termos de Uso da Mettrics.`,
  path: doc.href,
})

export default function AudittTermsPage() {
  return (
    <Container className="py-16 md:py-20">
      <Prose>
        <ProseHeader
          label={`Termos · ${product.name}`}
          title={product.name}
          updated={doc.updated}
        />
        <StandardDocumentNotice kind="terms" />

        <ProseH2 id="objeto">Objeto</ProseH2>
        <ProseP>
          O Auditt oferece auditoria de veiculação de mídia offline, comparando o planejado, o
          aprovado e o realizado em campanhas de rádio.
        </ProseP>

        <ProseH2 id="dados-de-campanha">Dados de campanha</ProseH2>
        <ProseP>
          O resultado da auditoria depende dos dados de campanha inseridos pelo cliente. Garantir a
          veracidade desses dados é responsabilidade de quem os insere.
        </ProseP>
      </Prose>
    </Container>
  )
}
