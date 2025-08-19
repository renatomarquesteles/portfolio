import { Metadata } from 'next'

import { GlowingEffect } from '@/components/ui/glowing-effect'
import { SubNav } from '@/components/sub-nav'
import path from 'path'

export const metadata: Metadata = {
  title: "Home | Renato's Portfolio",
}

interface HomeLayoutProps {
  children: React.ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  const sections = [
    { id: 'info', title: 'Info', pathname: '/home/info' },
    { id: 'work', title: 'Work', pathname: '/home/work' },
    { id: 'bio', title: 'Bio', pathname: '/home/bio' },
    { id: 'socials', title: 'Socials', pathname: '/home/socials' },
    { id: 'contact', title: 'Contact', pathname: '/home/contacts' },
  ]

  return (
    <>
      <div className="bg-white/75 dark:bg-gray-900/75 relative z-10 px-8 py-8 my-20 rounded-lg pointer-events-auto backdrop-blur">
        <GlowingEffect
          spread={45}
          glow={true}
          disabled={false}
          proximity={900}
          inactiveZone={0.01}
          borderWidth={2}
          className="rounded-lg opacity-80"
        />

        <div className="absolute z-10 -left-28">
          <SubNav sections={sections} />
        </div>

        <div className="max-w-[800px] w-full max-h-[70vh] px-8 overflow-y-auto overflow-x-hidden">
          {children}
        </div>
      </div>
    </>
  )
}
