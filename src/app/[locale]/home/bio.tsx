'use client'

import { useTranslations } from 'next-intl'

import { MotionDiv } from '@/components/motion-div'
import { SectionTitle } from '@/components/section-title'
import { Badge } from '@/components/ui/badge'

export function Bio() {
  const t = useTranslations('Bio')

  return (
    <section className="mb-6">
      <MotionDiv delay={0.3}>
        <SectionTitle>{t('title')}</SectionTitle>

        <div className="flex flex-col gap-1 sm:gap-0">
          <div className="flex gap-4">
            <span className="font-bold text-slate text-opacity-90 dark:text-white dark:text-opacity-90">
              1995
            </span>
            <span className="text-slate text-opacity-90 dark:text-white dark:text-opacity-90">
              {t('born')}
            </span>
          </div>
          <div className="flex gap-4">
            <span className="font-bold text-slate text-opacity-90 whitespace-nowrap dark:text-white dark:text-opacity-90">
              2018-2019
            </span>
            <span className="text-slate text-opacity-90 dark:text-white dark:text-opacity-90">
              {t('smn')}
            </span>
          </div>
          <div className="flex gap-4">
            <span className="font-bold text-slate text-opacity-90 dark:text-white dark:text-opacity-90">
              2020
            </span>
            <span className="text-slate text-opacity-90 dark:text-white dark:text-opacity-90">
              {t('gostack')}
            </span>
          </div>
          <div className="flex gap-4">
            <span className="font-bold text-slate text-opacity-90 whitespace-nowrap dark:text-white dark:text-opacity-90">
              2020-2021
            </span>
            <span className="text-slate text-opacity-90 dark:text-white dark:text-opacity-90">
              {t('vexpenses')}
            </span>
          </div>
          <div className="flex gap-4">
            <span className="font-bold text-slate text-opacity-90 dark:text-white dark:text-opacity-90">
              2021
            </span>
            <div className="text-slate text-opacity-90 dark:text-white dark:text-opacity-90">
              <span>{t('unifacef')}</span>
              <Badge variant="outline" className="ml-2">
                Uni-FACEF
              </Badge>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="font-bold text-slate text-opacity-90 dark:text-white dark:text-opacity-90">
              2023
            </span>
            <span className="text-slate text-opacity-90 dark:text-white dark:text-opacity-90">
              {t('ignite')}
            </span>
          </div>
          <div className="flex gap-4">
            <span className="font-bold text-slate text-opacity-90 dark:text-white whitespace-nowrap dark:text-opacity-90">
              2023 {t('toPresent')}
            </span>
            <span className="text-slate text-opacity-90 dark:text-white dark:text-opacity-90">
              {t('freelance')}
            </span>
          </div>
        </div>
      </MotionDiv>
    </section>
  )
}
