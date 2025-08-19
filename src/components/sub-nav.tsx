import Link from 'next/link'

type Section = {
  id: string
  title: string
  pathname: string
}

interface SubNavProps {
  sections: Section[]
}

export function SubNav({ sections }: SubNavProps) {
  return (
    <nav className="rounded-lg bg-white/75 dark:bg-gray-900/75 backdrop-blur relative z-10 flex flex-col justify-center gap-3 pointer-events-auto">
      {sections.map((section) => (
        <Link
          key={section.id}
          href={section.pathname}
          className="px-4 py-2 text-slate text-opacity-90 dark:text-white dark:text-opacity-90"
        >
          {section.title}
        </Link>
      ))}
    </nav>
  )
}
