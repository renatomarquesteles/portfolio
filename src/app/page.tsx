import { Metadata } from 'next'

import { Header } from './components/Header'

export const metadata: Metadata = {
  title: "Home | Renato's Portfolio",
}

export default function Home() {
  return (
    <>
      <Header />
    </>
  )
}
