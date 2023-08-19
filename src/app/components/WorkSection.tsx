import Link from 'next/link'
import { PiCaretRightBold } from 'react-icons/pi'

export function WorkSection() {
  return (
    <section>
      <h2 className="my-4 font-bold text-xl underline underline-offset-[6px] decoration-4 decoration-lightgray text-darkgray text-opacity-90 font-m-plus-rounded-1c">
        Work
      </h2>
      <p className="my-4 text-darkgray text-opacity-90">
        I&apos;m a front-end developer passionate about building beautiful and
        responsive interfaces and amazing user experiences. I&apos;ve worked
        with various clients and collaborated with cross-functional teams to
        deliver successful projects. My last big project was to fully develop
        and deploy the interface of a credit card related platform for{' '}
        <a
          href="https://vexpenses.com.br/en-US"
          className="text-blue underline-offset-4 hover:underline"
        >
          VExpenses
        </a>
        , a startup focused on managing corporate expense reimbursements. Also,
        my{' '}
        <a
          href="github.com/renatomarquesteles"
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
