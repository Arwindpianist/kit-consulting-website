'use client'

import { useEffect, useMemo, useRef } from 'react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ProtectedEmailLinkProps {
  email: string
  className?: string
  label?: string
  subject?: string
  rel?: string
  children?: ReactNode
}

export default function ProtectedEmailLink({
  email,
  className,
  label,
  subject,
  rel,
  children,
}: ProtectedEmailLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [user, domain] = useMemo(() => email.split('@'), [email])

  useEffect(() => {
    if (!ref.current) return
    const href = `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`
    ref.current.href = href
    if (!children) {
      ref.current.textContent = label ?? `${user}@${domain}`
    } else if (label) {
      ref.current.setAttribute('aria-label', label)
    }
  }, [children, domain, email, label, subject, user])

  const fallbackText = label ?? `${user} [at] ${domain}`

  return (
    <a
      ref={ref}
      className={cn(
        'inline-flex items-center gap-1 text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline',
        className,
      )}
      data-user={user}
      data-domain={domain}
      rel={rel}
    >
      {children}
      {children ? <span className="sr-only">{label ?? `${user}@${domain}`}</span> : fallbackText}
    </a>
  )
}
