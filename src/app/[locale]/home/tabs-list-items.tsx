'use client'

import { TabsTrigger } from '@/components/ui/tabs'
import { useTranslations } from 'next-intl'

export function TabsListItems() {
  const t = useTranslations('HomeTabs')

  return (
    <>
      <TabsTrigger value="info">{t('info')}</TabsTrigger>
      <TabsTrigger value="work">{t('work')}</TabsTrigger>
      <TabsTrigger value="bio">{t('bio')}</TabsTrigger>
      <TabsTrigger value="socials">{t('socials')}</TabsTrigger>
      <TabsTrigger value="contact">{t('contact')}</TabsTrigger>
    </>
  )
}
