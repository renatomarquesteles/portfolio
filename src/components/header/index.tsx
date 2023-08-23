import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { PiMoonFill, PiCubeFill, PiGithubLogoFill } from 'react-icons/pi'

import { NavLink } from './nav-link'
import { NavDropdown } from './nav-dropdown'
import { LangDropdown } from './lang-dropdown'

export function Header() {
  const t = useTranslations('Header')

  return (
    <header className="w-full h-16 bg-white bg-opacity-25 flex justify-center fixed top-0 z-40 backdrop-blur-md">
      <div className="w-full max-w-3xl px-4 flex justify-between items-center">
        <div className="h-full flex items-center gap-5">
          <Link href="/" className="flex items-center gap-1 group p-3">
            <div className="rotate-[-30deg] transition-transform group-hover:rotate-0">
              <PiCubeFill size={25} color="#1a202c" />
            </div>
            <span className="font-extrabold text-base text-slate tracking-tighter leading-none">
              Renato Marques Teles
            </span>
          </Link>

          <nav className="h-full p-2 gap-2 text-slate hidden sm:flex">
            <NavLink href="/projects">{t('projects')}</NavLink>
            <a
              href="https://www.github.com/renatomarquesteles/portfolio"
              target="_blank"
              className="h-full text- p-2 flex items-center gap-1 [&>svg]:fill-slate hover:underline underline-offset-4"
            >
              <PiGithubLogoFill size={16} />
              {t('source')}
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <LangDropdown />

          <button
            type="button"
            className="w-10 h-10 rounded-md bg-purple-500 flex items-center justify-center transition-colors hover:bg-purple-600"
          >
            <PiMoonFill size={16} color="#fff" />
          </button>

          <NavDropdown />
        </div>
      </div>
    </header>
  )
}
