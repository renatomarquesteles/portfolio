'use client'

import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PiList } from 'react-icons/pi'

export function DropdownMenu() {
  const pathname = usePathname()

  return (
    <RadixDropdown.Root>
      <RadixDropdown.Trigger className="w-10 h-10 rounded-md flex items-center justify-center border-beige border-2 [&>svg]:fill-slate transition-colors data-[state=open]:bg-gray-200 data-[state=open]:border-gray-200 sm:hidden">
        <PiList size={16} />
      </RadixDropdown.Trigger>

      <RadixDropdown.Portal>
        <RadixDropdown.Content className="bg-white py-2 mt-4 mx-2 z-50 rounded-md w-56 shadow-sm shadow-shadow">
          <Link href="/">
            <RadixDropdown.Item
              className={`py-3 px-4 text-slate text-opacity-90 ${
                pathname === '/' && 'bg-gray-200 bg-opacity-50'
              }`}
            >
              About
            </RadixDropdown.Item>
          </Link>

          <Link href="/projects">
            <RadixDropdown.Item
              className={`py-3 px-4 text-slate text-opacity-90 ${
                pathname === '/projects' && 'bg-gray-200 bg-opacity-50'
              }`}
            >
              Projects
            </RadixDropdown.Item>
          </Link>

          <a href="https://www.github.com/renatomarquesteles/portfolio">
            <RadixDropdown.Item className="py-3 px-4 text-slate text-opacity-90">
              View Source
            </RadixDropdown.Item>
          </a>
        </RadixDropdown.Content>
      </RadixDropdown.Portal>
    </RadixDropdown.Root>
  )
}
