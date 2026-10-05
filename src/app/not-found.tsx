import { ButtonLink } from '@/components/ui/button-link'
import { Container } from '@/components/ui/container'
import { SectionLabel } from '@/components/ui/section-label'

/**
 * Exported as out/404.html. nginx serves it for any unknown path, with a real 404 status —
 * a soft 404 (200 with an error page) gets the whole site treated as low quality by crawlers.
 */
export default function NotFound() {
  return (
    <Container className="py-28 text-center">
      <p className="mb-8 font-mono text-[clamp(72px,14vw,128px)] leading-none font-medium tracking-[-4px] text-fg-dim select-none">
        404
      </p>
      <SectionLabel>Página não encontrada</SectionLabel>
      <h1 className="text-[clamp(20px,3vw,28px)] tracking-[-0.5px]">Este endereço não existe.</h1>
      <div className="mt-10 flex justify-center">
        <ButtonLink href="/">Voltar ao início</ButtonLink>
      </div>
    </Container>
  )
}
