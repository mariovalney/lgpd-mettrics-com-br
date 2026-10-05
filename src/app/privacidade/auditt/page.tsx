import type { Metadata } from 'next'
import { StandardDocumentNotice } from '@/components/document-links'
import { Container } from '@/components/ui/container'
import { Prose, ProseH2, ProseHeader, ProseList, ProseP } from '@/components/ui/prose'
import { productDocument, STANDARD_DOCUMENTS } from '@/lib/documents'

const { product, doc } = productDocument('auditt', 'privacy')
const TITLE = `${STANDARD_DOCUMENTS.privacy.title} · ${product.name}`

export const metadata: Metadata = {
  title: TITLE,
  description: `O que é particular do ${product.name} na Política de Privacidade da Mettrics.`,
  alternates: { canonical: doc.href },
}

export default function AudittPrivacyPage() {
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
          O Auditt não tem cadastro público: o acesso acontece apenas por conta autorizada,
          vinculada a um contrato entre a Mettrics e o cliente ou agência, autenticada pelo login
          único (SSO) da Mettrics. Esta página cobre esse acesso autenticado e a navegação nas
          páginas públicas do produto.
        </ProseP>

        <ProseH2 id="dados">Dados que tratamos</ProseH2>
        <ProseList>
          <li>
            Dados de conta recebidos do login único da Mettrics: nome, e-mail e empresa ou agência
            vinculada.
          </li>
          <li>
            Dados de campanhas de rádio inseridos pelo próprio cliente para fins de auditoria:
            planejamento, aprovação e veiculação realizada. Não são dados de consumidor final.
          </li>
          <li>Métricas de uso agregadas da plataforma, coletadas pelo Plausible.</li>
        </ProseList>

        <ProseH2 id="base-legal">Por que tratamos esses dados</ProseH2>
        <ProseList>
          <li>
            <strong>Execução de contrato:</strong> o contrato firmado entre a Mettrics e o cliente
            ou agência.
          </li>
          <li>
            <strong>Cumprimento de obrigação legal</strong> ou regulatória.
          </li>
          <li>
            <strong>Legítimo interesse:</strong> manter a segurança da plataforma, prevenir fraude
            na auditoria e entender o uso do produto para melhorá-lo.
          </li>
        </ProseList>

        <ProseH2 id="cookies">Cookies</ProseH2>
        <ProseP>
          O Auditt usa apenas um cookie de sessão, estritamente necessário para manter o login
          autenticado. Ele não serve a fins de publicidade ou rastreamento, e é removido ao encerrar
          a sessão.
        </ProseP>

        <ProseH2 id="seguranca">Segurança</ProseH2>
        <ProseP>
          O acesso ao Auditt depende do login único (SSO) da Mettrics. Não há senha própria
          armazenada pela plataforma, e o acesso aos dados de auditoria é restrito a contas
          autorizadas.
        </ProseP>
      </Prose>
    </Container>
  )
}
