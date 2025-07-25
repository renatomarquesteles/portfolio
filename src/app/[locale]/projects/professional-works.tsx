'use client'

import { useTranslations } from 'next-intl'

import vexCardsImg from '@/assets/vex-cards.png'
import vexUIImg from '@/assets/vex-ui.png'
import { SectionTitle } from '@/components/section-title'
import { MotionDiv } from '@/components/motion-div'
import { ProjectCard } from '@/components/project-card'

export function ProfessionalWorks() {
  const t = useTranslations('Professional')

  return (
    <section>
      <MotionDiv>
        <SectionTitle>{t('title')}</SectionTitle>

        <div className="grid grid-cols-1 gap-4 mx-auto w-full sm:grid-cols-2">
          <MotionDiv delay={0.1}>
            <ProjectCard
              image={vexCardsImg}
              alt={t('vexCardsAlt')}
              title={t('vexCards')}
              description={t('vexCardsDescription')}
              tags={[
                'React.js',
                'TypeScript',
                'HTML',
                'CSS',
                'Git',
                'Styled-components',
                'Scrum',
                'i18n',
              ]}
              websiteUrl="https://vexpenses.com.br/cartao-corporativo-e-cartao-empresarial"
            />
          </MotionDiv>
          <MotionDiv delay={0.2}>
            <ProjectCard
              image={vexUIImg}
              alt={t('vexUIAlt')}
              title={t('vexUI')}
              description={t('vexUIDescription')}
              tags={[
                'React.js',
                'TypeScript',
                'HTML',
                'CSS',
                'Git',
                'Styled-components',
                'Storybook',
              ]}
              websiteUrl="https://focused-snyder-cf8a6e.netlify.app/"
            />
          </MotionDiv>
        </div>
      </MotionDiv>
    </section>
  )
}
