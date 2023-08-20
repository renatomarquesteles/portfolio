import '../styles/global.css'

import type { Metadata } from 'next'
import { Inter, M_PLUS_Rounded_1c, Open_Sans } from 'next/font/google'

import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: {
    template: "%s | Renato's Portfolio",
    default: "Renato's Portfolio",
  },
  description: "Renato's professional and personal projects",
}

const inter = Inter({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const mPlusRounded1c = M_PLUS_Rounded_1c({
  weight: ['700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-m-plus-rounded-1c',
})

const openSans = Open_Sans({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mPlusRounded1c.variable} ${openSans.variable} dark`}
    >
      <body className="bg-beige">
        <Header />

        <div className="px-4 pt-16 sm:px-0">{children}</div>

        <footer className="w-full flex justify-center py-6 px-3">
          <p className="text-slate text-opacity-60 text-xs">
            © 2023 Renato Marques Teles. All Rights Reserved.
          </p>
        </footer>
      </body>
    </html>
  )
}
