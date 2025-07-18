'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { Arrow } from '@radix-ui/react-tooltip'

import { TextMorph } from './ui/motion-primitives/text-morph'
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip'

export function CopyEmailToClipboardButton() {
  const t = useTranslations('Socials')
  const [showCopied, setShowCopied] = useState(false)

  function copyEmailToClipboard() {
    navigator.clipboard.writeText('renatomarquesteles@gmail.com')

    setShowCopied(true)

    setTimeout(() => {
      setShowCopied(false)
    }, 1000)
  }
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          onClick={copyEmailToClipboard}
          disabled={showCopied}
          className="hidden w-[74px] h-min p-1 text-blue-500 text-xs rounded-md font-bold font-sans transition-all border border-blue-500 hover:bg-blue-50 sm:inline-block disabled:bg-blue-500 disabled:text-white disabled:hover:bg-blue-500 dark:text-pink dark:border-pink dark:hover:bg-pink/10 dark:hover:bg-opacity-20 dark:disabled:bg-pink dark:disabled:text-slate"
        >
          <TextMorph>{showCopied ? t('copied') : t('copy')}</TextMorph>
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <Arrow />
        <p>{t('copyTooltip')}</p>
      </TooltipContent>
    </Tooltip>
  )
}
