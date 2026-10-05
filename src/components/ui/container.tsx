import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** Horizontal rhythm of the whole site: the 1100px marketing measure of the Mettrics site. */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('mx-auto w-full max-w-[1100px] px-5 md:px-12', className)}>{children}</div>
  )
}
