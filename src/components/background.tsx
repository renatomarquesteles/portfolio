'use client'

import DotGrid from './ui/DotGrid'
import { useIsDarkMode } from '@/hooks/useIsDarkMode'

export function Background() {
  const isDarkMode = useIsDarkMode()

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <DotGrid
        dotSize={4}
        gap={16}
        baseColor={isDarkMode ? '#121212' : '#e2e8f0'}
        activeColor={isDarkMode ? '#525252' : '#202023'}
        proximity={160}
        shockRadius={180}
        shockStrength={3}
        resistance={1000}
        returnDuration={1.5}
      />
    </div>
  )
}
