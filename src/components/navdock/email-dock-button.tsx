'use client'

import { useState } from 'react'
import { BsCheck, BsEnvelopeFill } from 'react-icons/bs'
import { Arrow } from '@radix-ui/react-tooltip'
import { useTranslations } from 'next-intl'

import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

export function EmailDockButton() {
  const [copied, setCopied] = useState(false)
  const t = useTranslations('HomeTabs')

  function handleEmailClick() {
    navigator.clipboard.writeText('renatomarquesteles@gmail.com')
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className="p-3 rounded-full transition-colors hover:bg-gray-300 dark:hover:bg-gray-400"
          onClick={handleEmailClick}
        >
          {copied ? <BsCheck size={20} /> : <BsEnvelopeFill size={20} />}
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <Arrow className="dark:fill-white fill-gray-950" />
        <p>{t('copyEmail')}</p>
      </TooltipContent>
    </Tooltip>
  )
}
