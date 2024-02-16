'use client'

import { useTranslations } from 'next-intl'

import { SectionTitle } from '@/components/section-title'
import { MotionDiv } from '@/components/motion-div'
import { FrontEnd } from './front-end'

export function SideProjects() {
  const t = useTranslations('SideProjects')

  return (
    <section>
      <MotionDiv delay={0.2}>
        <SectionTitle>{t('title')}</SectionTitle>
      </MotionDiv>

      <MotionDiv delay={0.3}>
        <SectionTitle>{t('frontend')}</SectionTitle>
      </MotionDiv>
      <FrontEnd />
    </section>
  )
}
