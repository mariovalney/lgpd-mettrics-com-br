import type { ReactNode } from 'react'
import { SectionLabel } from '@/components/ui/section-label'
import { cn } from '@/lib/utils'

/**
 * Long-form legal copy. The 672px measure and the heading rhythm come from Auditt's Prose; links
 * are accent and bold, never underlined, per the brand direction.
 */
export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <article
      className={cn(
        'max-w-2xl',
        '[&_a]:font-bold [&_a]:text-accent [&_a:hover]:text-accent-hover',
        '[&_strong]:font-bold [&_strong]:text-fg-primary',
        className,
      )}
    >
      {children}
    </article>
  )
}

/** Page title block shared by every legal page. */
export function ProseHeader({
  label,
  title,
  updated,
}: {
  label: string
  title: string
  updated?: string
}) {
  return (
    <header className="mb-14">
      <SectionLabel>{label}</SectionLabel>
      <h1 className="text-[clamp(28px,4vw,40px)] leading-[1.1] tracking-[-0.5px]">{title}</h1>
      {updated ? (
        <p className="mt-3 font-mono text-xs text-fg-muted">Última atualização: {updated}</p>
      ) : null}
    </header>
  )
}

export function ProseH2({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2 id={id} className="mt-12 mb-3 scroll-mt-24 text-[17px]">
      {children}
    </h2>
  )
}

export function ProseP({ children }: { children: ReactNode }) {
  return <p className="mb-4">{children}</p>
}

export function ProseList({
  children,
  ordered = false,
}: {
  children: ReactNode
  ordered?: boolean
}) {
  const className = cn('mb-4 space-y-1.5', ordered ? 'list-[upper-roman] pl-10' : 'list-disc pl-5')
  return ordered ? (
    <ol className={className}>{children}</ol>
  ) : (
    <ul className={className}>{children}</ul>
  )
}
