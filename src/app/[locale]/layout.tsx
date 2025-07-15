import '@/styles/global.css'

import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

import { Header } from '@/components/header'
import { Footer } from './footer'
import { ThemeProvider } from './theme-provider'
import { Background } from '@/components/background'
import { TooltipProvider } from '@/components/ui/tooltip'

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
      <body className="bg-gray-100 dark:bg-gray-950">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <TooltipProvider delayDuration={0}>
              <Header />

              <Background />
              <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 relative z-10 px-12 py-1 mt-24 rounded-lg">
                {children}
              </div>

              <Footer />
            </TooltipProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
