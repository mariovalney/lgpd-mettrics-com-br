import type { Metadata } from 'next'
import Link from 'next/link'
import { ProductDocumentsSection } from '@/components/document-links'
import { Container } from '@/components/ui/container'
import { Prose, ProseH2, ProseHeader, ProseList, ProseP } from '@/components/ui/prose'
import { DATA_SUBJECT_RIGHTS, STANDARD_DOCUMENTS } from '@/lib/documents'
import { CONTROLLER } from '@/lib/site'

const DOC = STANDARD_DOCUMENTS.privacy
const EMAIL = CONTROLLER.privacyEmail

export const metadata: Metadata = {
  title: DOC.title,
  description: DOC.summary,
  alternates: { canonical: DOC.href },
}

export default function PrivacyPage() {
  return (
    <Container className="py-16 md:py-20">
      <Prose>
        <ProseHeader label="Legal" title={DOC.title} updated={DOC.updated} />

        <ProseP>
          A Mettrics respeita a privacidade de quem usa seus produtos e trata dados pessoais em
          conformidade com a Lei Geral de Proteção de Dados (Lei n.º 13.709/2018, LGPD). Esta
          política vale para todos os produtos da Mettrics. O que é particular de cada um está na
          página do produto, listada ao final.
        </ProseP>

        <ProseH2 id="quem-somos">1. Quem trata os seus dados</ProseH2>
        <ProseP>
          O controlador dos dados é a Mettrics (CNPJ{' '}
          <span className="text-numeric">{CONTROLLER.cnpj}</span>). Dúvidas, solicitações ou
          reclamações sobre privacidade podem ser enviadas para{' '}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </ProseP>

        <ProseH2 id="dados">2. Dados que tratamos</ProseH2>
        <ProseP>
          Os dados tratados variam conforme o produto e estão descritos na página de cada um.
        </ProseP>

        <ProseH2 id="uso">3. Como usamos os dados</ProseH2>
        <ProseList>
          <li>Prestar o serviço contratado e oferecer suporte técnico.</li>
          <li>Manter a segurança dos produtos e entender o seu uso para melhorá-los.</li>
          <li>Cumprir obrigações legais e regulatórias.</li>
        </ProseList>
        <ProseP>
          Não vendemos, alugamos nem compartilhamos dados pessoais com terceiros para fins
          comerciais.
        </ProseP>

        <ProseH2 id="base-legal">4. Base legal</ProseH2>
        <ProseP>
          O tratamento de dados é fundamentado nas seguintes bases legais previstas na LGPD. A
          página de cada produto indica qual se aplica a cada dado.
        </ProseP>
        <ProseList>
          <li>
            <strong>Consentimento</strong>
          </li>
          <li>
            <strong>Execução de contrato</strong>
          </li>
          <li>
            <strong>Legítimo interesse</strong>
          </li>
          <li>
            <strong>Cumprimento de obrigação legal</strong>
          </li>
        </ProseList>

        <ProseH2 id="cookies">5. Cookies e métricas de uso</ProseH2>
        <ProseP>
          Todos os produtos da Mettrics utilizam métricas de uso para melhorar o produto: páginas
          visitadas, tempo de sessão, origem do acesso e tipo de dispositivo. A coleta não usa
          cookies, não faz fingerprinting nem rastreamento entre sites, e produz apenas métricas
          agregadas e anônimas, sem identificar a pessoa usuária. Esse tratamento se baseia no
          legítimo interesse.
        </ProseP>
        <ProseP>
          Não usamos cookies de publicidade nem de rastreamento de terceiros. Quando um produto usa
          cookies, eles estão descritos na página do produto.
        </ProseP>

        <ProseH2 id="compartilhamento">6. Compartilhamento de dados</ProseH2>
        <ProseP>Os dados podem ser compartilhados apenas com:</ProseP>
        <ProseList>
          <li>
            Prestadores de serviço que operam a infraestrutura dos produtos (hospedagem,
            infraestrutura), sob obrigações contratuais de confidencialidade.
          </li>
          <li>Autoridades competentes, quando exigido por lei ou ordem judicial.</li>
        </ProseList>

        <ProseH2 id="retencao">7. Retenção de dados</ProseH2>
        <ProseP>
          Dados de contato são mantidos enquanto necessários para a finalidade que motivou a coleta.
          Dados de clientes são mantidos enquanto durar o contrato e, após o encerramento, pelo
          prazo exigido por obrigações legais, fiscais ou de auditoria.
        </ProseP>

        <ProseH2 id="direitos">8. Seus direitos</ProseH2>
        <ProseP>Como titular dos dados, você tem direito a:</ProseP>
        <ProseList>
          <li>Confirmar a existência de tratamento de seus dados.</li>
          <li>Acessar os dados que temos sobre você.</li>
          <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
          <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.</li>
          <li>Revogar o consentimento a qualquer momento.</li>
          <li>Solicitar a portabilidade dos dados.</li>
        </ProseList>
        <ProseP>
          Para exercer seus direitos, entre em contato pelo e-mail{' '}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Responderemos em até 15 dias úteis. O passo a
          passo está em <Link href={DATA_SUBJECT_RIGHTS.href}>{DATA_SUBJECT_RIGHTS.title}</Link>.
        </ProseP>

        <ProseH2 id="seguranca">9. Segurança</ProseH2>
        <ProseP>
          Adotamos medidas técnicas e organizacionais adequadas para proteger os dados contra acesso
          não autorizado, alteração, divulgação ou destruição. Toda comunicação com nossos
          servidores acontece por HTTPS.
        </ProseP>

        <ProseH2 id="alteracoes">10. Alterações nesta política</ProseH2>
        <ProseP>
          Esta política pode ser atualizada para refletir mudanças nos produtos ou na legislação.
          Mudanças na finalidade, na forma ou na duração do tratamento, na identificação do
          controlador ou no compartilhamento de dados serão informadas ao titular, com destaque para
          o que mudou. A data no início de cada página indica a versão vigente.
        </ProseP>

        <ProductDocumentsSection kind="privacy" />
      </Prose>
    </Container>
  )
}
