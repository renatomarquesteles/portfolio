'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface NavLinkProps extends LinkProps {
  children: ReactNode
}

export function NavLink({ children, href, ...rest }: NavLinkProps) {
  const pathname = usePathname()
  console.log({ pathname })
  console.log({ href })

  return (
    <Link
      href={href}
      className={`p-2 flex items-center hover:underline underline-offset-4 ${
        pathname === href && 'bg-teal-200'
      }`}
      {...rest}
    >
      {children}
    </Link>
  )
}
