import type { Metadata } from 'next'
import { Inter, M_PLUS_Rounded_1c } from 'next/font/google'

import '../styles/global.css'

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
  weight: '800',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-m-plus-rounded-1c',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mPlusRounded1c.variable} dark`}
    >
      <body className="bg-beige">{children}</body>
    </html>
  )
}
