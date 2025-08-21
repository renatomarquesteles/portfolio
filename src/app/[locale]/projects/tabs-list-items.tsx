'use client'

import { TabsTrigger } from '@/components/ui/tabs'
import { useTranslations } from 'next-intl'

export function TabsListItems() {
  const t = useTranslations('ProjectsTabs')

  return (
    <>
      <TabsTrigger value="professional-works">
        {t('professional-works')}
      </TabsTrigger>
      <TabsTrigger value="front-end">{t('frontend')}</TabsTrigger>
      <TabsTrigger value="mobile">{t('mobile')}</TabsTrigger>
      <TabsTrigger value="back-end">{t('backend')}</TabsTrigger>
      <TabsTrigger value="web3">{t('web3')}</TabsTrigger>
    </>
  )
}
