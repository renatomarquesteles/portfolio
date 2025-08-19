import { ReactNode } from 'react'
import Link from 'next/link'
import { Arrow } from '@radix-ui/react-tooltip'

import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import { cn } from '@/lib/utils'

interface DockLinkProps {
  icon: ReactNode
  title: string
  href: string
  isActive?: boolean
}

export function DockLink({
  icon,
  title,
  href,
  isActive = false,
}: DockLinkProps) {
  const isExternal = href.startsWith('http')

  const content = (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(
            'p-3 rounded-full transition-colors',
            isActive
              ? 'bg-blue-50 text-blue-500 dark:bg-blue-600/20 dark:text-blue-400'
              : 'hover:bg-gray-300 dark:hover:bg-gray-400',
          )}
        >
          {icon}
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <Arrow className="dark:fill-white fill-gray-950" />
        <p>{title}</p>
      </TooltipContent>
    </Tooltip>
  )

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return <Link href={href}>{content}</Link>
}
