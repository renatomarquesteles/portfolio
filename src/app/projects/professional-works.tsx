'use client'

import Image from 'next/image'

import vexCardsImg from '@/assets/vex-cards.png'
import vexUIImg from '@/assets/vex-ui.png'
import { SectionTitle } from '@/components/section-title'
import { MotionDiv } from '@/components/motion-div'

export function ProfessionalWorks() {
  return (
    <section>
      <SectionTitle>Professional Works</SectionTitle>

      <MotionDiv>
        <div className="w-full my-6 flex justify-center gap-8 flex-wrap">
          <a
            href="https://vexpenses.com.br/en-US/cartao-corporativo-e-cartao-empresarial"
            target="_blank"
            className="w-full flex flex-col items-center text-slate text-opacity-90 sm:w-fit"
          >
            <Image
              src={vexCardsImg}
              alt="Two blue credit cards crossing each other, showing their front and back sides"
              width={240}
              height={130}
              quality={100}
              className="w-full rounded-xl mb-2 sm:w-[240px]"
            />

            <div className="w-full text-center sm:max-w-[240px]">
              <h3 className="text-lg">VExpenses Cards</h3>
              <p className="text-sm">
                A credit card services platform for a startup focused on
                managing corporate expense reimbursement.
              </p>
            </div>
          </a>

          <a
            href="https://focused-snyder-cf8a6e.netlify.app/"
            target="_blank"
            className="w-full flex flex-col items-center text-slate text-opacity-90 sm:w-fit"
          >
            <Image
              src={vexUIImg}
              alt='The VExpenses logo with a search input under it written "Find components"'
              width={240}
              height={130}
              quality={100}
              className="w-full rounded-xl mb-2 sm:w-[240px]"
            />

            <div className="w-full text-center sm:max-w-[240px]">
              <h3 className="text-lg">VExpenses UI</h3>
              <p className="text-sm">
                A React UI components library following the VExpenses Design
                System.
              </p>
            </div>
          </a>
        </div>
      </MotionDiv>
    </section>
  )
}
