import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('Layout')

  return (
    <footer className="w-full flex justify-center py-6 px-3">
      <p className="text-slate text-opacity-60 text-xs dark:text-white dark:text-opacity-60">
        {t('footer')}
      </p>
    </footer>
  )
}
