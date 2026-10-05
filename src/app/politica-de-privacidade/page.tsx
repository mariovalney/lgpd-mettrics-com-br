import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Prose, ProseH2, ProseHeader, ProseList, ProseP, ProseRule } from '@/components/ui/prose'
import { DOCUMENTS } from '@/lib/documents'
import { CONTROLLER } from '@/lib/site'

const DOC = DOCUMENTS.privacyPolicy

export const metadata: Metadata = {
  title: DOC.title,
  description:
    'Quais dados pessoais a Mettrics coleta, como usa, com quem compartilha e quais são os seus direitos pela LGPD.',
  alternates: { canonical: DOC.href },
}

const EMAIL = CONTROLLER.privacyEmail

export default function PrivacyPolicyPage() {
  return (
    <Container className="py-16 md:py-20">
      <Prose>
        <ProseHeader label="Legal" title={DOC.title} updated={DOC.updated} />

        <ProseP>
          A Mettrics respeita a privacidade de seus usuários e está comprometida com a proteção de
          dados pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei n.º 13.709/2018,
          LGPD). Esta política descreve quais dados coletamos, como os utilizamos e quais são seus
          direitos.
        </ProseP>

        <ProseH2 id="quem-somos">1. Quem somos</ProseH2>
        <ProseP>
          Mettrics (CNPJ <span className="text-numeric">{CONTROLLER.cnpj}</span>) é uma plataforma
          de planejamento de mídia offline para agências e anunciantes brasileiros. Para contato
          relacionado a privacidade e dados: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </ProseP>

        <ProseH2 id="dados-coletados">2. Dados que coletamos</ProseH2>
        <ProseP>No site institucional (mettrics.com.br) coletamos:</ProseP>
        <ProseList>
          <li>
            <strong>Dados de navegação agregados:</strong> páginas visitadas, tempo de sessão,
            origem do acesso, tipo de dispositivo. Coletados via analytics próprio (Plausible), sem
            cookies de rastreamento e sem identificação individual.
          </li>
          <li>
            <strong>Dados fornecidos voluntariamente:</strong> nome e e-mail quando você preenche o
            formulário de contato ou solicita demonstração.
          </li>
        </ProseList>
        <ProseP>
          Na plataforma (acesso por contrato), coletamos adicionalmente dados necessários para a
          prestação do serviço, conforme descrito no contrato firmado com cada cliente.
        </ProseP>

        <ProseH2 id="uso">3. Como usamos os dados</ProseH2>
        <ProseList>
          <li>Analisar o desempenho do site e melhorar a experiência de navegação.</li>
          <li>Responder a solicitações de contato e demonstração.</li>
          <li>Prestar o serviço contratado e oferecer suporte técnico.</li>
          <li>Cumprir obrigações legais e regulatórias.</li>
        </ProseList>
        <ProseP>
          Não vendemos, alugamos nem compartilhamos dados pessoais com terceiros para fins
          comerciais.
        </ProseP>

        <ProseH2 id="base-legal">4. Base legal</ProseH2>
        <ProseP>
          O tratamento de dados é fundamentado nas seguintes bases legais previstas na LGPD:
        </ProseP>
        <ProseList>
          <li>
            <strong>Consentimento:</strong> para envio de comunicações e uso de analytics.
          </li>
          <li>
            <strong>Execução de contrato:</strong> para a prestação dos serviços contratados.
          </li>
          <li>
            <strong>Legítimo interesse:</strong> para análise agregada de uso do site e segurança.
          </li>
          <li>
            <strong>Cumprimento de obrigação legal:</strong> quando exigido por lei.
          </li>
        </ProseList>

        <ProseH2 id="cookies">5. Cookies e analytics</ProseH2>
        <ProseP>
          O site utiliza o <strong>Plausible Analytics</strong>, uma solução de análise que não usa
          cookies, não rastreia usuários individualmente e não compartilha dados com terceiros.
          Todos os dados são agregados e anonimizados. O Plausible é compatível com LGPD, GDPR e
          CCPA por padrão.
        </ProseP>

        <ProseH2 id="compartilhamento">6. Compartilhamento de dados</ProseH2>
        <ProseP>Os dados podem ser compartilhados apenas com:</ProseP>
        <ProseList>
          <li>
            Prestadores de serviço que auxiliam na operação da plataforma (hospedagem,
            infraestrutura), sob obrigações contratuais de confidencialidade.
          </li>
          <li>Autoridades competentes, quando exigido por lei ou ordem judicial.</li>
        </ProseList>

        <ProseH2 id="retencao">7. Retenção de dados</ProseH2>
        <ProseP>
          Dados de contato são mantidos enquanto necessários para a finalidade que motivou a coleta.
          Dados de clientes são retidos pelo prazo contratual e, após o encerramento, pelo período
          exigido pela legislação aplicável.
        </ProseP>

        <ProseH2 id="direitos">8. Seus direitos (LGPD)</ProseH2>
        <ProseP>Você tem direito a:</ProseP>
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
          passo está em <Link href={DOCUMENTS.dataSubjectRights.href}>Direitos do titular</Link>.
        </ProseP>

        <ProseH2 id="seguranca">9. Segurança</ProseH2>
        <ProseP>
          Adotamos medidas técnicas e organizacionais adequadas para proteger os dados contra acesso
          não autorizado, alteração, divulgação ou destruição. A comunicação com nossos servidores é
          realizada via HTTPS.
        </ProseP>

        <ProseH2 id="alteracoes">10. Alterações nesta política</ProseH2>
        <ProseP>
          Esta política pode ser atualizada periodicamente. Alterações relevantes serão comunicadas
          por e-mail aos clientes ativos. A versão vigente estará sempre disponível nesta página com
          a data da última atualização.
        </ProseP>

        <ProseRule />
        <p className="text-[13px] text-fg-muted">
          Dúvidas? Fale com a gente: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </Prose>
    </Container>
  )
}
