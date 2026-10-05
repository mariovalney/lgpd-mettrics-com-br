import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** The uppercase mono eyebrow that names a page or section before its heading. */
export function SectionLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn('mb-4 font-mono text-[11px] uppercase tracking-[1.5px] text-accent', className)}
    >
      {children}
    </p>
  )
}
