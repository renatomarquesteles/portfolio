'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next-intl/client'
import { ReactNode } from 'react'

interface NavLinkProps extends LinkProps {
  children: ReactNode
}

export function NavLink({ children, href, ...rest }: NavLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={`p-2 flex items-center hover:underline underline-offset-4 ${
        pathname === href && 'bg-blue-200 dark:bg-blue-900'
      }`}
      {...rest}
    >
      {children}
    </Link>
  )
}
