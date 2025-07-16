'use client'

import { useTranslations } from 'next-intl'

import { SectionTitle } from '@/components/section-title'
import { MotionDiv } from '@/components/motion-div'
import { FrontEnd } from './front-end'
import { Mobile } from './mobile'
import { BackEnd } from './back-end'

export function SideProjects() {
  const t = useTranslations('SideProjects')

  return (
    <section>
      <MotionDiv delay={0.3}>
        <SectionTitle>{t('frontend')}</SectionTitle>
      </MotionDiv>
      <FrontEnd />

      <MotionDiv delay={0.3}>
        <SectionTitle>{t('mobile')}</SectionTitle>
      </MotionDiv>
      <Mobile />

      <MotionDiv delay={0.3}>
        <SectionTitle>{t('backend')}</SectionTitle>
      </MotionDiv>
      <BackEnd />
    </section>
  )
}
