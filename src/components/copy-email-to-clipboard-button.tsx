'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

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
    <button
      type="button"
      onClick={copyEmailToClipboard}
      disabled={showCopied}
      className="hidden w-[70px] h-min p-1 text-blue-500 text-xs rounded-md font-bold font-sans transition-all border border-blue-500 hover:bg-blue-50 sm:inline-block disabled:bg-blue-500 disabled:text-white disabled:hover:bg-blue-500 dark:text-pink dark:border-pink dark:hover:bg-pink/10 dark:hover:bg-opacity-20 dark:disabled:bg-pink dark:disabled:text-slate"
    >
      {showCopied ? t('copied') : t('copy')}
    </button>
  )
}
