'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import IntlLink from 'next-intl/link'
import Image from 'next/image'
import { PiCaretDownBold } from 'react-icons/pi'

import brazilFlag from '@/assets/brazil-flag.svg'
import usaFlag from '@/assets/usa-flag.svg'

export function LanguageToggle() {
  const locale = useLocale()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div className="inline-block">
        {locale === 'pt-BR' && (
          <IntlLink
            locale="en"
            href="/"
            className="flex items-center gap-2 text-sm text-slate"
          >
            <Image
              src={usaFlag}
              alt="USA flag"
              width={36}
              height={24}
              className="h-6"
            />
            EN-US
            <PiCaretDownBold />
          </IntlLink>
        )}

        {locale === 'en' && (
          <IntlLink
            locale="pt-BR"
            href="/"
            className="flex items-center gap-2 text-sm text-slate"
          >
            <Image
              src={brazilFlag}
              alt="Brazil flag"
              width={36}
              height={24}
              className="h-6"
            />
            PT-BR
            <PiCaretDownBold />
          </IntlLink>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
