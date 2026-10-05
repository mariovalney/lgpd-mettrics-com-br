import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Prose, ProseH2, ProseHeader, ProseList, ProseP, ProseRule } from '@/components/ui/prose'
import { DOCUMENTS } from '@/lib/documents'
import { CONTROLLER } from '@/lib/site'

const DOC = DOCUMENTS.dataSubjectRights
const EMAIL = CONTROLLER.privacyEmail
const LGPD_URL = 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm'
const ANPD_URL = 'https://www.gov.br/anpd/pt-br'

export const metadata: Metadata = {
  title: DOC.title,
  description:
    'Os direitos do titular de dados pessoais pela LGPD e como exercê-los junto à Mettrics.',
  alternates: { canonical: DOC.href },
}

/** Art. 18, items I to IX, in the order of the law so the roman numeral matches the inciso. */
const RIGHTS = [
  'Confirmação de que tratamos dados pessoais seus.',
  'Acesso aos dados.',
  'Correção de dados incompletos, inexatos ou desatualizados.',
  'Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD.',
  'Portabilidade dos dados a outro fornecedor de serviço ou produto, mediante pedido expresso, observados os segredos comercial e industrial.',
  'Eliminação dos dados tratados com o seu consentimento, exceto nas hipóteses do art. 16 da LGPD.',
  'Informação sobre as entidades públicas e privadas com as quais compartilhamos seus dados.',
  'Informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa.',
  'Revogação do consentimento.',
] as const

export default function DataSubjectRightsPage() {
  return (
    <Container className="py-16 md:py-20">
      <Prose>
        <ProseHeader label="LGPD · Art. 18" title={DOC.title} updated={DOC.updated} />

        <ProseP>
          Se a Mettrics trata dados pessoais seus, você pode fazer os pedidos abaixo a qualquer
          momento. Eles seguem o art. 18 da{' '}
          <a href={LGPD_URL} rel="noopener">
            Lei n.º 13.709/2018
          </a>{' '}
          e não têm custo.
        </ProseP>

        <ProseH2 id="o-que-pedir">O que você pode pedir</ProseH2>
        <ProseList ordered>
          {RIGHTS.map((right) => (
            <li key={right}>{right}</li>
          ))}
        </ProseList>
        <ProseP>
          Se alguma decisão que afete seus interesses for tomada unicamente com base em tratamento
          automatizado, você também pode pedir a revisão dela (art. 20).
        </ProseP>

        <ProseH2 id="como-pedir">Como fazer o pedido</ProseH2>
        <ProseP>
          Escreva para <a href={`mailto:${EMAIL}`}>{EMAIL}</a> informando:
        </ProseP>
        <ProseList>
          <li>seu nome completo;</li>
          <li>qual dos pedidos acima você quer fazer;</li>
          <li>
            como você se relaciona com a Mettrics: contato pelo site, usuário da plataforma, cliente
            ou outro.
          </li>
        </ProseList>
        <ProseP>
          O pedido pode ser feito por você ou por um representante legalmente constituído (art. 18,
          § 3º). Para não entregar dados a quem não é o titular, podemos pedir informações que
          confirmem sua identidade antes de responder.
        </ProseP>

        <ProseH2 id="resposta">Como respondemos</ProseH2>
        <ProseP>
          A confirmação de tratamento e o acesso aos dados podem ser fornecidos em formato
          simplificado ou por declaração completa, com a origem dos dados, a existência de registro,
          os critérios usados e a finalidade do tratamento (art. 19). Os prazos estão na{' '}
          <Link href={DOCUMENTS.privacyPolicy.href}>Política de Privacidade</Link>.
        </ProseP>
        <ProseP>
          Quando não for possível atender, explicamos o motivo: por exemplo, quando a Mettrics não é
          a controladora daqueles dados, indicamos quem é, sempre que soubermos (art. 18, § 4º).
        </ProseP>

        <ProseH2 id="anpd">Se a resposta não resolver</ProseH2>
        <ProseP>
          Você pode peticionar contra a Mettrics na{' '}
          <a href={ANPD_URL} rel="noopener">
            Autoridade Nacional de Proteção de Dados (ANPD)
          </a>
          , conforme o art. 18, § 1º.
        </ProseP>

        <ProseRule />
        <p className="text-[13px] text-fg-muted">
          Canal de privacidade: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </Prose>
    </Container>
  )
}
