import Link from 'next/link'
import {
  PiMoonFill,
  PiCubeFill,
  PiGithubLogoFill,
  PiList,
} from 'react-icons/pi'

export function Header() {
  return (
    <header className="w-full h-16 bg-white bg-opacity-25 flex justify-center">
      <div className="w-full max-w-3xl px-4 flex justify-between items-center">
        <div className="h-full flex items-center gap-5">
          <Link href="/" className="flex items-center gap-1 group p-3">
            <div className="rotate-[-30deg] transition-transform group-hover:rotate-0">
              <PiCubeFill size={25} color="#1a202c" />
            </div>
            <span className="font-extrabold text-base text-gray tracking-tighter leading-none">
              Renato Marques Teles
            </span>
          </Link>

          <nav className="h-full p-2 gap-2 text-gray hidden sm:flex">
            <Link
              href="/projects"
              className="h-full p-2 flex items-center hover:underline underline-offset-4"
            >
              Projects
            </Link>
            <a
              href="github.com/renatomarquesteles/portfolio"
              target="_blank"
              className="h-full text- p-2 flex items-center gap-1 [&>svg]:fill-gray hover:underline underline-offset-4"
            >
              <PiGithubLogoFill size={16} />
              Source
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="w-10 h-10 rounded-md bg-purple-500 flex items-center justify-center transition-colors hover:bg-purple-600"
          >
            <PiMoonFill size={16} color="#fff" />
          </button>
          <button
            type="button"
            className="w-10 h-10 rounded-md flex items-center justify-center border-beige border-2 [&>svg]:fill-gray sm:hidden"
          >
            <PiList size={16} />
          </button>
        </div>
      </div>
    </header>
  )
}