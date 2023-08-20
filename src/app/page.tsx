import { Metadata } from 'next'

import { InfoSection } from './components/InfoSection'
import { WorkSection } from './components/WorkSection'
import { BioSection } from './components/BioSection'
import { InterestsSection } from './components/InterestsSection'
import { SocialsSection } from './components/SocialsSection'
import { ContactSection } from './components/ContactSection'

export const metadata: Metadata = {
  title: "Home | Renato's Portfolio",
}

export default function Home() {
  return (
    <main className="w-full max-w-lg mx-auto my-0">
      <InfoSection />
      <WorkSection />
      <BioSection />
      <InterestsSection />
      <SocialsSection />
      <ContactSection />
    </main>
  )
}
