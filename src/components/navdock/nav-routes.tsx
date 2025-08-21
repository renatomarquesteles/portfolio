'use client'

import { CodeXml, House } from 'lucide-react'
import { useParams, usePathname } from 'next/navigation'

import { DockIcon } from './dock'
import { DockLink } from './dock-link'

export function NavRoutes() {
  const pathname = usePathname()
  const { locale } = useParams()
  const currentPath = pathname.replace(`/${locale}`, '')

  return (
    <>
      <DockIcon>
        <DockLink
          title="Home"
          href="/"
          icon={<House />}
          isActive={currentPath === ''}
        />
      </DockIcon>
      <DockIcon>
        <DockLink
          title="Projects"
          href="/projects"
          icon={<CodeXml />}
          isActive={currentPath.startsWith('/projects')}
        />
      </DockIcon>
    </>
  )
}
