'use client'

import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next-intl/client'
import { PiList } from 'react-icons/pi'

export function NavDropdown() {
  const pathname = usePathname()
  const t = useTranslations('Header')

  return (
    <RadixDropdown.Root>
      <RadixDropdown.Trigger className="w-10 h-10 rounded-md flex items-center justify-center border-beige border-2 shrink-0 [&>svg]:fill-slate transition-colors data-[state=open]:bg-gray-200 data-[state=open]:border-gray-200 sm:hidden">
        <PiList size={16} />
      </RadixDropdown.Trigger>

      <RadixDropdown.Portal>
        <RadixDropdown.Content className="z-50">
          <motion.div
            initial={{ x: 112, y: -80, scale: 0, opacity: 0 }}
            animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0 }}
            className="bg-white py-2 mt-4 mx-2 rounded-md w-56 shadow-sm shadow-shadow"
          >
            <Link href="/">
              <RadixDropdown.Item
                className={`py-3 px-4 text-slate text-opacity-90 ${
                  pathname === '/' && 'bg-gray-200 bg-opacity-50'
                }`}
              >
                {t('about')}
              </RadixDropdown.Item>
            </Link>

            <Link href="/projects">
              <RadixDropdown.Item
                className={`py-3 px-4 text-slate text-opacity-90 ${
                  pathname === '/projects' && 'bg-gray-200 bg-opacity-50'
                }`}
              >
                {t('projects')}
              </RadixDropdown.Item>
            </Link>

            <a
              href="https://www.github.com/renatomarquesteles/portfolio"
              target="_blank"
            >
              <RadixDropdown.Item className="py-3 px-4 text-slate text-opacity-90">
                {t('viewSource')}
              </RadixDropdown.Item>
            </a>
          </motion.div>
        </RadixDropdown.Content>
      </RadixDropdown.Portal>
    </RadixDropdown.Root>
  )
}
