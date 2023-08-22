import { Metadata } from 'next'

import { Bio } from './home/bio'
import { Contact } from './home/contact'
import { Info } from './home/info'
import { Interests } from './home/interests'
import { Socials } from './home/socials'
import { Work } from './home/work'

export const metadata: Metadata = {
  title: "Home | Renato's Portfolio",
}

export default function Home() {
  return (
    <main className="w-full max-w-lg mx-auto my-0 px-4 sm:px-0">
      <Info />
      <Work />
      <Bio />
      <Interests />
      <Socials />
      <Contact />
    </main>
  )
}
