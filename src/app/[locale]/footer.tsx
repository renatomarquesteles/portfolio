import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('Layout')

  return (
    <footer className="py-6 px-3 pointer-events-auto">
      <p className="text-slate text-opacity-60 text-xs dark:text-white dark:text-opacity-60">
        {t('footer')}
      </p>
    </footer>
  )
}
