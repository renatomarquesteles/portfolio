'use client'

import { PiEnvelope, PiGithubLogoFill } from 'react-icons/pi'
import { FaLinkedin } from 'react-icons/fa'
import { useTranslations } from 'next-intl'
import { Arrow } from '@radix-ui/react-tooltip'

import { CopyEmailToClipboardButton } from '@/components/copy-email-to-clipboard-button'
import { SectionTitle } from '@/components/section-title'
import { MotionDiv } from '@/components/motion-div'
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip'

export function Socials() {
  const t = useTranslations('Socials')

  return (
    <section className="mb-6">
      <MotionDiv delay={0.5}>
        <SectionTitle>{t('title')}</SectionTitle>

        <div className="font-open-sans">
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://www.github.com/renatomarquesteles"
                target="_blank"
                className="w-fit py-3 px-4 flex items-center gap-2 text-blue-500 rounded-md font-semibold transition-colors hover:bg-blue-50 dark:text-pink dark:hover:bg-pink/10 dark:hover:bg-opacity-20"
              >
                <PiGithubLogoFill size={18} />
                @renatomarquesteles
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">
              <Arrow />
              <p>GitHub</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://www.linkedin.com/in/renato-marques-teles/"
                target="_blank"
                className="w-fit py-3 px-4 flex items-center gap-2 text-blue-500 rounded-md font-semibold transition-colors hover:bg-blue-50 dark:text-pink dark:hover:bg-pink/10 dark:hover:bg-opacity-20"
              >
                <FaLinkedin size={18} />
                /in/renato-marques-teles
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">
              <Arrow />
              <p>LinkedIn</p>
            </TooltipContent>
          </Tooltip>

          <div className="flex gap-3 items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="mailto:renatomarquesteles@gmail.com"
                  className="w-fit py-3 px-4 flex items-center gap-2 text-blue-500 rounded-md font-semibold transition-colors hover:bg-blue-50 dark:text-pink dark:hover:bg-pink/10 dark:hover:bg-opacity-20"
                >
                  <PiEnvelope size={18} />
                  renatomarquesteles@gmail.com
                </a>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <Arrow />
                <p>Email</p>
              </TooltipContent>
            </Tooltip>
            <CopyEmailToClipboardButton />
          </div>
        </div>
      </MotionDiv>
    </section>
  )
}
