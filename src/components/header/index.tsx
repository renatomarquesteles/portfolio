import Link from 'next/link'
import { PiCubeFill } from 'react-icons/pi'

import { NavDropdown } from './nav-dropdown'
import { LangDropdown } from './lang-dropdown'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className="w-full h-16 bg-white/75 flex justify-center fixed top-0 z-40 backdrop-blur-md dark:bg-gray-900/25">
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
