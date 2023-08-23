'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import anubisRushImg from '@/assets/anubis-rush.png'
import cryptwitterImg from '@/assets/cryptwitter.png'
import hycImg from '@/assets/hyc.png'
import paperhandsImg from '@/assets/paperhands.png'
import { SectionTitle } from '@/components/section-title'
import { MotionDiv } from '@/components/motion-div'

export function Web3() {
  const t = useTranslations('Web3')

  return (
    <section>
      <MotionDiv delay={0.5}>
        <SectionTitle>{t('title')}</SectionTitle>
      </MotionDiv>

      <div className="w-full my-6 flex justify-center gap-8 flex-wrap">
        <a
          href="https://twitter.com/GodsgameNFT/status/1511346299504836620"
          target="_blank"
          className="w-full flex flex-col items-center text-slate text-opacity-90 sm:w-fit"
        >
          <MotionDiv delay={0.6}>
            <Image
              src={paperhandsImg}
              alt={t('paperhandsAlt')}
              width={240}
              height={130}
              quality={100}
              className="w-full rounded-xl mb-2 sm:w-[240px]"
            />

            <div className="w-full text-center sm:max-w-[240px]">
              <h3 className="text-lg">{t('paperhands')}</h3>
              <p className="text-sm">{t('paperhandsDescription')}</p>
            </div>
          </MotionDiv>
        </a>

        <a
          href="https://anubis-rush.netlify.app/"
          target="_blank"
          className="w-full flex flex-col items-center text-slate text-opacity-90 sm:w-fit"
        >
          <MotionDiv delay={0.6}>
            <Image
              src={anubisRushImg}
              alt={t('anubisAlt')}
              width={240}
              height={130}
              quality={100}
              className="w-full rounded-xl mb-2 sm:w-[240px]"
            />

            <div className="w-full text-center sm:max-w-[240px]">
              <h3 className="text-lg">{t('anubis')}</h3>
              <p className="text-sm">{t('anubisDescription')}</p>
            </div>
          </MotionDiv>
        </a>

        <a
          href="https://github.com/renatomarquesteles/hold-your-crypto"
          target="_blank"
          className="w-full flex flex-col items-center text-slate text-opacity-90 sm:w-fit"
        >
          <MotionDiv delay={0.7}>
            <Image
              src={hycImg}
              alt={t('hycAlt')}
              width={240}
              height={130}
              quality={100}
              className="w-full rounded-xl mb-2 sm:w-[240px]"
            />

            <div className="w-full text-center sm:max-w-[240px]">
              <h3 className="text-lg">{t('hyc')}</h3>
              <p className="text-sm">{t('hycDescription')}</p>
            </div>
          </MotionDiv>
        </a>

        <a
          href="https://github.com/renatomarquesteles/web3-cryptwitter/"
          target="_blank"
          className="w-full flex flex-col items-center text-slate text-opacity-90 sm:w-fit"
        >
          <MotionDiv delay={0.7}>
            <Image
              src={cryptwitterImg}
              alt={t('cryptwitterAlt')}
              width={240}
              height={130}
              quality={100}
              className="w-full rounded-xl mb-2 sm:w-[240px]"
            />

            <div className="w-full text-center sm:max-w-[240px]">
              <h3 className="text-lg">{t('cryptwitter')}</h3>
              <p className="text-sm">{t('cryptwitterDescription')}</p>
            </div>
          </MotionDiv>
        </a>
      </div>
    </section>
  )
}
