import '@/styles/global.css'

import type { Metadata } from 'next'
import { Inter, M_PLUS_Rounded_1c, Open_Sans } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

import { Header } from '@/components/header'
import { Footer } from './footer'

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

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: {
    locale: string
  }
}) {
  let messages
  try {
    messages = (await import(`../../translations/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${mPlusRounded1c.variable} ${openSans.variable} dark`}
    >
      <body className="bg-beige">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />

          <div className="px-4 pt-16 sm:px-0">{children}</div>

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
