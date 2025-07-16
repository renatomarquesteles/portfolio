import { Metadata } from 'next'

import { ProfessionalWorks } from './professional-works'
import { SideProjects } from './side-projects'
import { Web3 } from './web3'
import { GlowingEffect } from '@/components/ui/glowing-effect'

export const metadata: Metadata = {
  title: 'Projects',
}

export default function Projects() {
  return (
    <main className="w-full max-w-lg mx-auto my-0 px-4 py-4 mb-6 sm:px-0">
      <GlowingEffect
        spread={45}
        glow={true}
        disabled={false}
        proximity={900}
        inactiveZone={0.01}
        borderWidth={2}
        className="rounded-lg opacity-80"
      />
      <ProfessionalWorks />
      <SideProjects />
      <Web3 />
    </main>
  )
}
