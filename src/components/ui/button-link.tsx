import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const VARIANTS = {
  primary:
    'bg-accent text-fg-primary font-black hover:bg-accent-hover hover:shadow-accent active:bg-accent-press',
  secondary: 'border border-border bg-bg-elevated text-fg-primary font-bold hover:bg-bg-elevated-2',
} as const

/**
 * The site's call to action. A static site has no forms to submit, so every button is a link,
 * which also covers mailto: targets.
 */
export function ButtonLink({
  href,
  children,
  variant = 'primary',
  className,
}: {
  href: string
  children: ReactNode
  variant?: keyof typeof VARIANTS
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex h-11 items-center justify-center rounded-md px-5 text-[13px] transition-[background-color,box-shadow] duration-200',
        VARIANTS[variant],
        className,
      )}
    >
      {children}
    </Link>
  )
}
