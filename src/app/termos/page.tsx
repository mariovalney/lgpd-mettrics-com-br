import type { Metadata } from 'next'
import Link from 'next/link'
import { ProductDocumentsSection } from '@/components/document-links'
import { Container } from '@/components/ui/container'
import { Prose, ProseH2, ProseHeader, ProseList, ProseP } from '@/components/ui/prose'
import { STANDARD_DOCUMENTS } from '@/lib/documents'
import { CONTROLLER } from '@/lib/site'

const DOC = STANDARD_DOCUMENTS.terms
const EMAIL = CONTROLLER.privacyEmail

export const metadata: Metadata = {
  title: DOC.title,
  description: DOC.summary,
  alternates: { canonical: DOC.href },
}

export default function TermsPage() {
  return (
    <Container className="py-16 md:py-20">
      <Prose>
        <ProseHeader label="Legal" title={DOC.title} updated={DOC.updated} />

        <ProseP>
          Estes termos regem o uso das plataformas da Mettrics por usuários autorizados de clientes
          e agências parceiras. Ao acessar uma plataforma, você concorda com estes termos e com a{' '}
          <Link href={STANDARD_DOCUMENTS.privacy.href}>{STANDARD_DOCUMENTS.privacy.title}</Link>. O
          que é particular de cada plataforma está na página dela, listada ao final.
        </ProseP>

        <ProseH2 id="acesso">1. Condições de acesso</ProseH2>
        <ProseP>
          As plataformas da Mettrics não têm autoatendimento nem cadastro público: o acesso é
          concedido pela Mettrics a clientes e agências com contrato comercial vigente.
        </ProseP>
        <ProseList>
          <li>
            O acesso acontece por login único (SSO) da Mettrics, com conta pessoal e intransferível.
          </li>
          <li>
            A disponibilidade da conta está vinculada ao contrato comercial entre a Mettrics e o
            cliente ou agência; o acesso é suspenso ao término desse contrato.
          </li>
          <li>
            A Mettrics pode suspender ou revogar o acesso em caso de uso indevido da plataforma.
          </li>
        </ProseList>

        <ProseH2 id="responsabilidades">2. Responsabilidades de quem usa</ProseH2>
        <ProseList>
          <li>Manter a confidencialidade das próprias credenciais de acesso.</li>
          <li>Usar a plataforma apenas para os fins a que se destina.</li>
          <li>Garantir a veracidade dos dados inseridos na plataforma.</li>
        </ProseList>

        <ProseH2 id="propriedade">3. Propriedade intelectual</ProseH2>
        <ProseP>
          O software, a marca e as metodologias das plataformas pertencem à Mettrics. Os dados
          inseridos por cada cliente continuam de titularidade desse cliente; a Mettrics os trata
          apenas para prestar o serviço contratado.
        </ProseP>

        <ProseH2 id="disponibilidade">4. Disponibilidade e limitação de responsabilidade</ProseH2>
        <ProseP>
          As plataformas são fornecidas "como estão", sem garantia de disponibilidade ininterrupta.
          Compromissos de nível de serviço, garantias e responsabilidades específicas da relação
          comercial são definidos no contrato firmado entre a Mettrics e o cliente ou agência, que
          prevalece sobre estes termos em caso de conflito.
        </ProseP>

        <ProseH2 id="alteracoes">5. Alterações destes termos</ProseH2>
        <ProseP>
          Estes termos podem ser atualizados para refletir mudanças nas plataformas ou na
          legislação. A data no início de cada página indica a versão vigente.
        </ProseP>

        <ProseH2 id="foro">6. Lei aplicável e foro</ProseH2>
        <ProseP>
          Estes termos são regidos pelas leis brasileiras. Fica eleito o foro da comarca de
          domicílio da Mettrics para dirimir eventuais controvérsias, com renúncia a qualquer outro,
          por mais privilegiado que seja.
        </ProseP>

        <ProseH2 id="contato">7. Contato</ProseH2>
        <ProseP>
          Dúvidas sobre estes termos podem ser enviadas para <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          .
        </ProseP>

        <ProductDocumentsSection kind="terms" />
      </Prose>
    </Container>
  )
}
