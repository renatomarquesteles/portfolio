'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { HiDocumentText } from 'react-icons/hi'
import { Arrow } from '@radix-ui/react-tooltip'
import { useParams } from 'next/navigation'
import { ArrowRight } from 'lucide-react'

import { SectionTitle } from '@/components/section-title'
import { MotionDiv } from '@/components/motion-div'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function Work() {
  const t = useTranslations('Work')
  const params = useParams()
  const locale = params.locale as string

  const cvFile = locale === 'pt-BR' ? '/cv-ptbr.pdf' : '/cv-en.pdf'

  return (
    <section className="mb-6">
      <MotionDiv delay={0.2}>
        <SectionTitle>{t('title')}</SectionTitle>

        <p className="my-4 text-slate text-opacity-90 dark:text-white dark:text-opacity-90">
          {t.rich('description', {
            vexLink: (chunks) => (
              <Tooltip>
                <TooltipTrigger>
                  <a
                    href="https://vexpenses.com.br"
                    target="_blank"
                    className="text-blue-500 underline-offset-4 hover:underline dark:text-pink dark:text-opacity-90"
                  >
                    {chunks}
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <Arrow />
                  <p>vexpenses.com.br</p>
                </TooltipContent>
              </Tooltip>
            ),
            ghLink: (chunks) => (
              <Tooltip>
                <TooltipTrigger>
                  <a
                    href="https://www.github.com/renatomarquesteles"
                    target="_blank"
                    className="text-blue-500 underline-offset-4 hover:underline dark:text-pink dark:text-opacity-90"
                  >
                    {chunks}
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <Arrow />
                  <p>github.com/renatomarquesteles</p>
                </TooltipContent>
              </Tooltip>
            ),
          })}
        </p>

        <div className="w-fit mx-auto sm:flex sm:gap-4">
          <a
            href={cvFile}
            target="_blank"
            rel="noopener noreferrer"
            className="justify-between my-4 py-[10px] px-5 rounded-md bg-blue-500 text-white flex items-center gap-3 font-semibold transition-colors hover:bg-blue-600 dark:bg-pink dark:hover:bg-pink/80 dark:text-slate"
          >
            {t('cvButton')}
            <HiDocumentText size={16} />
          </a>
          <Link
            href="/projects"
            className="justify-between my-4 py-[10px] px-5 rounded-md bg-blue-500 text-white flex items-center gap-3 font-semibold transition-colors hover:bg-blue-600 dark:bg-pink dark:hover:bg-pink/80 dark:text-slate"
          >
            {t('button')}
            <ArrowRight size={15} absoluteStrokeWidth />
          </Link>
        </div>
      </MotionDiv>
    </section>
  )
}
