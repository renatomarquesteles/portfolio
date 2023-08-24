import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { PiCubeFill, PiGithubLogoFill } from 'react-icons/pi'

import { NavLink } from './nav-link'
import { NavDropdown } from './nav-dropdown'
import { LangDropdown } from './lang-dropdown'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  const t = useTranslations('Header')

  return (
    <header className="w-full h-16 bg-white bg-opacity-25 flex justify-center fixed top-0 z-40 backdrop-blur-md dark:bg-gray-900 dark:bg-opacity-25">
      <div className="w-full max-w-3xl px-4 flex justify-between items-center">
        <div className="h-full flex items-center gap-5">
          <Link href="/" className="flex items-center gap-1 group p-3">
            <div className="rotate-[-30deg] transition-transform group-hover:rotate-0 [&>svg]:fill-slate [&>svg]:dark:fill-[#ffffffeb]">
              <PiCubeFill size={25} />
            </div>
            <span className="font-extrabold text-base text-slate tracking-tighter leading-none dark:text-white dark:text-opacity-90">
              Renato Marques Teles
            </span>
          </Link>

          <nav className="h-full p-2 gap-2 text-slate hidden sm:flex dark:text-white dark:text-opacity-90">
            <NavLink href="/projects">{t('projects')}</NavLink>
            <a
              href="https://www.github.com/renatomarquesteles/portfolio"
              target="_blank"
              className="h-full p-2 flex items-center gap-1 underline-offset-4 [&>svg]:fill-slate hover:underline [&>svg]:dark:fill-[#ffffffeb]"
            >
              <PiGithubLogoFill size={16} />
              {t('source')}
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <LangDropdown />

          <ThemeToggle />

          <NavDropdown />
        </div>
      </div>
    </header>
  )
}
