'use client'

import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import IntlLink from 'next-intl/link'
import { usePathname } from 'next-intl/client'
import { PiCaretDownBold } from 'react-icons/pi'

import brazilFlag from '@/assets/brazil-flag.svg'
import usaFlag from '@/assets/usa-flag.svg'

export function LangDropdown() {
  const locale = useLocale()
  const pathname = usePathname()

  return (
    <RadixDropdown.Root>
      <RadixDropdown.Trigger>
        {locale === 'en' && (
          <span className="flex items-center gap-2">
            <Image
              src={usaFlag}
              alt="USA flag"
              width={36}
              height={24}
              className="h-6"
            />
            <span className="hidden sm:inline-block text-sm text-slate dark:text-white dark:text-opacity-90">
              EN-US
            </span>
            <span className="[&>svg]:fill-slate [&>svg]:dark:fill-white">
              <PiCaretDownBold />
            </span>
          </span>
        )}

        {locale === 'pt-BR' && (
          <span className="flex items-center gap-2">
            <Image
              src={brazilFlag}
              alt="Brazil flag"
              width={36}
              height={24}
              className="h-6"
            />
            <span className="hidden sm:inline-block text-sm text-slate dark:text-white dark:text-opacity-90">
              PT-BR
            </span>
            <span className="[&>svg]:fill-slate [&>svg]:dark:fill-white">
              <PiCaretDownBold />
            </span>
          </span>
        )}
      </RadixDropdown.Trigger>

      <RadixDropdown.Portal>
        <RadixDropdown.Content className="z-50">
          <motion.div
            initial={{ x: 0, y: -80, scale: 0, opacity: 0 }}
            animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0 }}
            className="bg-white py-2 mt-3 mx-2 relative z-50 rounded-md w-24 shadow-sm shadow-shadow dark:bg-gray-400"
          >
            <IntlLink locale="en" href={pathname}>
              <RadixDropdown.Item
                className={`py-3 px-4 text-slate text-opacity-90 dark:text-white dark:text-opacity-90 ${
                  locale === 'en' && 'bg-gray-200 bg-opacity-50 dark:text-white'
                }`}
              >
                EN-US
              </RadixDropdown.Item>
            </IntlLink>

            <IntlLink locale="pt-BR" href={pathname}>
              <RadixDropdown.Item
                className={`py-3 px-4 text-slate text-opacity-90 dark:text-white dark:text-opacity-90 ${
                  locale === 'pt-BR' &&
                  'bg-gray-200 bg-opacity-50 dark:text-white'
                }`}
              >
                PT-BR
              </RadixDropdown.Item>
            </IntlLink>
          </motion.div>
        </RadixDropdown.Content>
      </RadixDropdown.Portal>
    </RadixDropdown.Root>
  )
}
