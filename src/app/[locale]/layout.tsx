import '@/styles/global.css'

import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

import { Header } from '@/components/header'
import { Footer } from './footer'
import { ThemeProvider } from './theme-provider'

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
    <html lang={locale} className={`${inter.variable} ${openSans.variable}`}>
      <body className="bg-beige dark:bg-gray-900">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <Header />

            <div className="px-4 pt-16 sm:px-0">{children}</div>

            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
