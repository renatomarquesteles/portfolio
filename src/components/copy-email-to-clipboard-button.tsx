'use client'

import { useState } from 'react'

export function CopyEmailToClipboardButton() {
  const [copyEmailTxt, setCopyEmailTxt] = useState('COPY')

  function copyEmailToClipboard() {
    navigator.clipboard.writeText('renatomarquesteles@gmail.com')

    setCopyEmailTxt('COPIED!')

    setTimeout(() => {
      setCopyEmailTxt('COPY')
    }, 1000)
  }
  return (
    <button
      type="button"
      onClick={copyEmailToClipboard}
      disabled={copyEmailTxt !== 'COPY'}
      className={`hidden w-[60px] h-min p-1 text-teal-700 text-xs rounded-md font-bold font-sans transition-all border border-teal-700 hover:bg-teal-50 sm:inline-block ${
        copyEmailTxt !== 'COPY' &&
        'bg-teal-700 text-white disabled:hover:bg-teal-700'
      }`}
    >
      {copyEmailTxt}
    </button>
  )
}
