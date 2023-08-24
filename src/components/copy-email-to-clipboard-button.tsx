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
      className="hidden w-[70px] h-min p-1 text-teal-700 text-xs rounded-md font-bold font-sans transition-all border border-teal-700 hover:bg-teal-50 sm:inline-block disabled:bg-teal-700 disabled:text-white disabled:hover:bg-teal-700 dark:text-teal-300 dark:border:teal-300 dark:hover:bg-teal-400 dark:hover:bg-opacity-20 dark:disabled:bg-teal-400 dark:disabled:text-slate"
    >
      {showCopied ? t('copied') : t('copy')}
    </button>
  )
}
