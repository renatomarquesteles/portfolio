import { Metadata } from 'next'

import { Bio } from './home/bio'
import { Contact } from './home/contact'
import { Info } from './home/info'
import { Socials } from './home/socials'
import { Work } from './home/work'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: "Home | Renato's Portfolio",
}

export default function Home() {
  return (
    <main className="w-full max-w-2xl mx-auto my-0 px-4 sm:px-0">
      <GlowingEffect
        spread={45}
        glow={true}
        disabled={false}
        proximity={900}
        inactiveZone={0.01}
        borderWidth={2}
        className="rounded-lg opacity-80"
      />
      <Info />
      <Work />
      <Separator />
      <Bio />
      <Separator />
      <Socials />
      <Separator />
      <Contact />
    </main>
  )
}
