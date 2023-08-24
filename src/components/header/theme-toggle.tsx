'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { PiMoonFill, PiSunBold } from 'react-icons/pi'

export function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  function changeTheme(newTheme: string) {
    setTheme(newTheme)
  }

  if (!isMounted)
    return (
      <button
        type="button"
        className="w-10 h-10 rounded-md bg-purple-500 flex items-center justify-center transition-colors hover:bg-purple-600 [&>svg]:fill-white"
      >
        <PiMoonFill size={16} />
      </button>
    )

  if (theme === 'light') {
    return (
      <button
        type="button"
        onClick={() => changeTheme('dark')}
        className="w-10 h-10 rounded-md bg-purple-500 flex items-center justify-center transition-colors hover:bg-purple-600 [&>svg]:fill-white"
      >
        <PiMoonFill size={16} />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={() => changeTheme('light')}
      className="w-10 h-10 rounded-md bg-yellow-200 flex items-center justify-center transition-colors hover:bg-yellow-400 [&>svg]:fill-slate"
    >
      <PiSunBold size={16} />
    </button>
  )
}
