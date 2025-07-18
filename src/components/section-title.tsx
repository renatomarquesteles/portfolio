import { ReactNode } from 'react'

interface SectionTitleProps {
  children: ReactNode
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="my-4 font-bold text-xl underline underline-offset-[6px] decoration-4 decoration-gray-400 text-slate text-opacity-90 font-open-sans dark:text-white dark:text-opacity-90">
      {children}
    </h2>
  )
}
