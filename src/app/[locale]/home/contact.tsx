'use client'

import { BsEnvelopeFill } from 'react-icons/bs'
import { PiWhatsappLogoFill } from 'react-icons/pi'
import { useTranslations } from 'next-intl'

import { SectionTitle } from '@/components/section-title'
import { MotionDiv } from '@/components/motion-div'

export function Contact() {
  const t = useTranslations('Contact')

  return (
    <section className="mb-6">
      <MotionDiv delay={0.6}>
        <SectionTitle>{t('title')}</SectionTitle>

        <p className="text-slate text-opacity-90 dark:text-white dark:text-opacity-90">
          {t('description')}
        </p>

        <div className="w-fit mx-auto">
          <a
            href="mailto:renatomarquesteles@gmail.com"
            className="w-full my-4 mx-auto py-[10px] px-5 rounded-md bg-blue-500 text-white flex items-center gap-3 font-semibold transition-colors hover:bg-blue-600 dark:bg-pink dark:hover:bg-pink/80 dark:text-slate"
          >
            <BsEnvelopeFill size={16} />
            {t('emailButton')}
          </a>
          <a
            href="https://wa.me/5516992921771"
            target="_blank"
            className="w-fit my-4 mx-auto py-[10px] px-5 rounded-md bg-blue-500 text-white flex items-center gap-3 font-semibold transition-colors hover:bg-blue-600 dark:bg-pink dark:hover:bg-pink/80 dark:text-slate"
          >
            <PiWhatsappLogoFill size={16} />
            {t('whatsappButton')}
          </a>
        </div>
      </MotionDiv>
    </section>
  )
}
