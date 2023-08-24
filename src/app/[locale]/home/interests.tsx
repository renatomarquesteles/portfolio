'use client'

import { useTranslations } from 'next-intl'

import { MotionDiv } from '@/components/motion-div'
import { SectionTitle } from '@/components/section-title'

export function Interests() {
  const t = useTranslations('Interests')

  return (
    <section className="mb-6">
      <MotionDiv delay={0.4}>
        <SectionTitle>{t('title')}</SectionTitle>

        <p className="indent-4 text-slate text-opacity-90 dark:text-white dark:text-opacity-90">
          {t('description')}
        </p>
      </MotionDiv>
    </section>
  )
}
