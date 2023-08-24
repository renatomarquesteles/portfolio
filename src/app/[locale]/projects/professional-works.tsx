'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import vexCardsImg from '@/assets/vex-cards.png'
import vexUIImg from '@/assets/vex-ui.png'
import { SectionTitle } from '@/components/section-title'
import { MotionDiv } from '@/components/motion-div'

export function ProfessionalWorks() {
  const t = useTranslations('Professional')

  return (
    <section>
      <SectionTitle>{t('title')}</SectionTitle>

      <MotionDiv>
        <div className="w-full my-6 flex justify-center gap-8 flex-wrap">
          <a
            href="https://vexpenses.com.br/en-US/cartao-corporativo-e-cartao-empresarial"
            target="_blank"
            className="w-full flex flex-col items-center text-slate text-opacity-90 sm:w-fit dark:text-white dark:text-opacity-90"
          >
            <Image
              src={vexCardsImg}
              alt={t('vexCardsAlt')}
              width={240}
              height={130}
              quality={100}
              className="w-full rounded-xl mb-2 sm:w-[240px]"
            />

            <div className="w-full text-center sm:max-w-[240px]">
              <h3 className="text-lg">{t('vexCards')}</h3>
              <p className="text-sm">{t('vexCardsDescription')}</p>
            </div>
          </a>

          <a
            href="https://focused-snyder-cf8a6e.netlify.app/"
            target="_blank"
            className="w-full flex flex-col items-center text-slate text-opacity-90 sm:w-fit dark:text-white dark:text-opacity-90"
          >
            <Image
              src={vexUIImg}
              alt={t('vexUIAlt')}
              width={240}
              height={130}
              quality={100}
              className="w-full rounded-xl mb-2 sm:w-[240px]"
            />

            <div className="w-full text-center sm:max-w-[240px]">
              <h3 className="text-lg">{t('vexUI')}</h3>
              <p className="text-sm">{t('vexUIDescription')}</p>
            </div>
          </a>
        </div>
      </MotionDiv>
    </section>
  )
}
