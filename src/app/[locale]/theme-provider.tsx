'use client'

import { ReactNode, useEffect, useState } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return <>{children}</>

  return <NextThemesProvider attribute="class">{children}</NextThemesProvider>
}
