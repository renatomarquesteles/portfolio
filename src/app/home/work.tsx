import Link from 'next/link'
import { PiCaretRightBold } from 'react-icons/pi'

import { SectionTitle } from '@/components/section-title'

export function Work() {
  return (
    <section className="mb-6">
      <SectionTitle>Work</SectionTitle>

      <p className="my-4 text-slate text-opacity-90">
        I&apos;m a front-end developer passionate about building beautiful and
        responsive interfaces and amazing user experiences. I&apos;ve worked
        with various clients and collaborated with cross-functional teams to
        deliver successful projects. My last big project was to fully develop
        and deploy the interface of a credit card related platform for{' '}
        <a
          href="https://vexpenses.com.br/en-US"
          target="_blank"
          className="text-blue underline-offset-4 hover:underline"
        >
          VExpenses
        </a>
        , a startup focused on managing corporate expense reimbursements. Also,
        my{' '}
        <a
          href="https://www.github.com/renatomarquesteles"
          target="_blank"
          className="text-blue underline-offset-4 hover:underline"
        >
          GitHub
        </a>{' '}
        profile contains more than 99 repositories of side projects I have built
        along the way.
      </p>

      <Link
        href="/projects"
        className="w-fit my-4 mx-auto py-[10px] px-5 rounded-md bg-teal-700 text-white flex items-baseline gap-3 font-semibold transition-colors hover:bg-teal-800"
      >
        My portfolio
        <PiCaretRightBold size={12} />
      </Link>
    </section>
  )
}
