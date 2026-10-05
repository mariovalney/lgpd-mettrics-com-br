import type { Metadata } from 'next'
import { StandardDocumentNotice } from '@/components/document-links'
import { Container } from '@/components/ui/container'
import { Prose, ProseH2, ProseHeader, ProseList, ProseP } from '@/components/ui/prose'
import { productDocument, STANDARD_DOCUMENTS } from '@/lib/documents'

const { product, doc } = productDocument('minha-conta', 'terms')
const TITLE = `${STANDARD_DOCUMENTS.terms.title} · ${product.name}`

export const metadata: Metadata = {
  title: TITLE,
  description: `O que é particular da ${product.name} nos Termos de Uso da Mettrics.`,
  alternates: { canonical: doc.href },
}

export default function AccountTermsPage() {
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
          A Minha Conta permite gerenciar o acesso às plataformas da Mettrics: atualizar os dados do
          perfil, trocar a senha, ver as sessões autenticadas e encerrá-las.
        </ProseP>

        <ProseH2 id="responsabilidades">Responsabilidades</ProseH2>
        <ProseList>
          <li>Manter os dados do perfil corretos e atualizados.</li>
          <li>
            Encerrar as sessões que não reconhecer e trocar a senha ao suspeitar de uso indevido da
            conta.
          </li>
        </ProseList>
      </Prose>
    </Container>
  )
}
