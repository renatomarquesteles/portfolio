'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { PiCaretRightBold } from 'react-icons/pi'

import { SectionTitle } from '@/components/section-title'
import { MotionDiv } from '@/components/motion-div'

export function Work() {
  const t = useTranslations('Work')

  return (
    <section className="mb-6">
      <MotionDiv delay={0.2}>
        <SectionTitle>{t('title')}</SectionTitle>

        <p className="my-4 text-slate text-opacity-90 dark:text-white dark:text-opacity-90">
          {t.rich('description', {
            vexLink: (chunks) => (
              <a
                href="https://vexpenses.com.br/en-US"
                target="_blank"
                className="text-blue underline-offset-4 hover:underline dark:text-pink dark:text-opacity-90"
              >
                {chunks}
              </a>
            ),
            ghLink: (chunks) => (
              <a
                href="https://www.github.com/renatomarquesteles"
                target="_blank"
                className="text-blue underline-offset-4 hover:underline dark:text-pink dark:text-opacity-90"
              >
                {chunks}
              </a>
            ),
          })}
        </p>

        <Link
          href="/projects"
          className="w-fit my-4 mx-auto py-[10px] px-5 rounded-md bg-teal-700 text-white flex items-baseline gap-3 font-semibold transition-colors hover:bg-teal-800 dark:bg-teal-300 dark:hover:bg-teal-400 dark:text-slate"
        >
          {t('button')}
          <PiCaretRightBold size={12} />
        </Link>
      </MotionDiv>
    </section>
  )
}
