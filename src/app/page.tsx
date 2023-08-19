import { Metadata } from 'next'

import { Header } from './components/Header'
import { InfoSection } from './components/InfoSection'

export const metadata: Metadata = {
  title: "Home | Renato's Portfolio",
}

export default function Home() {
  return (
    <>
      <Header />

      <main className="w-full max-w-lg mx-auto my-0">
        <InfoSection />
      </main>
    </>
  )
}
