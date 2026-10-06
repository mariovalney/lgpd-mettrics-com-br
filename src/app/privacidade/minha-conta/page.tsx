import type { Metadata } from 'next'
import { StandardDocumentNotice } from '@/components/document-links'
import { Container } from '@/components/ui/container'
import { Prose, ProseH2, ProseHeader, ProseList, ProseP } from '@/components/ui/prose'
import { productDocument, STANDARD_DOCUMENTS } from '@/lib/documents'

const { product, doc } = productDocument('minha-conta', 'privacy')
const TITLE = `${STANDARD_DOCUMENTS.privacy.title} · ${product.name}`

export const metadata: Metadata = {
  title: TITLE,
  description: `O que é particular da ${product.name} na Política de Privacidade da Mettrics.`,
  alternates: { canonical: doc.href },
}

export default function AccountPrivacyPage() {
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
          A Minha Conta é o gerenciamento da conta Mettrics: nela, cada pessoa cuida dos dados do
          perfil, da senha e das sessões autenticadas. Não tem cadastro público: o acesso acontece
          apenas por conta autorizada, vinculada a um contrato entre a Mettrics e o cliente ou
          agência.
        </ProseP>

        <ProseH2 id="dados">Dados que tratamos</ProseH2>
        <ProseList>
          <li>Dados de conta: nome, e-mail, foto de perfil e empresa ou agência vinculada.</li>
          <li>Credenciais de acesso.</li>
          <li>
            Dados de perfil recebidos do provedor escolhido, quando o login é feito por uma conta de
            terceiros.
          </li>
          <li>Registros de acesso e das sessões autenticadas.</li>
        </ProseList>

        <ProseH2 id="base-legal">Por que tratamos esses dados</ProseH2>
        <ProseList>
          <li>
            <strong>Execução de contrato:</strong> o contrato firmado entre a Mettrics e o cliente
            ou agência.
          </li>
          <li>
            <strong>Cumprimento de obrigação legal:</strong> guarda dos registros de acesso (Lei n.º
            12.965/2014, art. 15).
          </li>
          <li>
            <strong>Legítimo interesse:</strong> manter a segurança das contas e prevenir acesso
            indevido.
          </li>
        </ProseList>

        <ProseH2 id="cookies">Cookies</ProseH2>
        <ProseP>A Minha Conta utiliza cookies para manter o usuário autenticado.</ProseP>

        <ProseH2 id="seguranca">Segurança</ProseH2>
        <ProseP>Cada pessoa gerencia apenas a própria conta Mettrics.</ProseP>
      </Prose>
    </Container>
  )
}
