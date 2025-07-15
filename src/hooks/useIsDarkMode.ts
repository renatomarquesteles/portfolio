import { useEffect, useState } from 'react'

export function useIsDarkMode() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkDark = () =>
      typeof document !== 'undefined' &&
      document.documentElement.classList.contains('dark')

    setIsDark(checkDark())

    const observer = new MutationObserver(() => {
      setIsDark(checkDark())
    })

    if (typeof document !== 'undefined') {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
      })
    }

    return () => observer.disconnect()
  }, [])

  return isDark
}
