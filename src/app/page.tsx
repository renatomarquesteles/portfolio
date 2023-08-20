import { Metadata } from 'next'

import { Header } from './components/Header'
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
    <>
      <Header />

      <main className="w-full max-w-lg mx-auto my-0">
        <InfoSection />
        <WorkSection />
        <BioSection />
        <InterestsSection />
        <SocialsSection />
        <ContactSection />
      </main>

      <footer className="w-full flex justify-center py-6 px-3">
        <p className="text-slate text-opacity-60 text-xs">
          © 2023 Renato Marques Teles. All Rights Reserved.
        </p>
      </footer>
    </>
  )
}
