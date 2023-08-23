'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import coffeDeliveryImg from '@/assets/coffee-delivery.png'
import dtMoneyImg from '@/assets/dt-money.png'
import igniteShopImg from '@/assets/ignite-shop.png'
import igniteUIImg from '@/assets/ignite-ui.png'
import { SectionTitle } from '@/components/section-title'
import { MotionDiv } from '@/components/motion-div'

export function SideProjects() {
  const t = useTranslations('SideProjects')

  return (
    <section>
      <MotionDiv delay={0.2}>
        <SectionTitle>{t('title')}</SectionTitle>
      </MotionDiv>

      <div className="w-full my-6 flex justify-center gap-8 flex-wrap">
        <a
          href="https://cheerful-hotteok-38b9a0.netlify.app"
          target="_blank"
          className="w-full flex flex-col items-center text-slate text-opacity-90 sm:w-fit"
        >
          <MotionDiv delay={0.3}>
            <Image
              src={coffeDeliveryImg}
              alt={t('coffeeAlt')}
              width={240}
              height={130}
              quality={100}
              className="w-full rounded-xl mb-2 sm:w-[240px]"
            />

            <div className="w-full text-center sm:max-w-[240px]">
              <h3 className="text-lg">{t('coffee')}</h3>
              <p className="text-sm">{t('coffeeDescription')}</p>
            </div>
          </MotionDiv>
        </a>

        <a
          href="https://github.com/renatomarquesteles/ignite-04-ignite-shop"
          target="_blank"
          className="w-full flex flex-col items-center text-slate text-opacity-90 sm:w-fit"
        >
          <MotionDiv delay={0.3}>
            <Image
              src={igniteShopImg}
              alt={t('igniteShopAlt')}
              width={240}
              height={130}
              quality={100}
              className="w-full rounded-xl mb-2 sm:w-[240px]"
            />

            <div className="w-full text-center sm:max-w-[240px]">
              <h3 className="text-lg">{t('igniteShop')}</h3>
              <p className="text-sm">{t('igniteShopDescription')}</p>
            </div>
          </MotionDiv>
        </a>

        <a
          href="https://renatomarquesteles.github.io/ignite-05-rmt-ignite-ui/"
          target="_blank"
          className="w-full flex flex-col items-center text-slate text-opacity-90 sm:w-fit"
        >
          <MotionDiv delay={0.4}>
            <Image
              src={igniteUIImg}
              alt={t('igniteUIAlt')}
              width={240}
              height={130}
              quality={100}
              className="w-full rounded-xl mb-2 sm:w-[240px]"
            />

            <div className="w-full text-center sm:max-w-[240px]">
              <h3 className="text-lg">{t('igniteUI')}</h3>
              <p className="text-sm">{t('igniteUIDescription')}</p>
            </div>
          </MotionDiv>
        </a>

        <a
          href="https://github.com/renatomarquesteles/ignite-03-dt-money"
          target="_blank"
          className="w-full flex flex-col items-center text-slate text-opacity-90 sm:w-fit"
        >
          <MotionDiv delay={0.4}>
            <Image
              src={dtMoneyImg}
              alt={t('dtMoneyAlt')}
              width={240}
              height={130}
              quality={100}
              className="w-full rounded-xl mb-2 sm:w-[240px]"
            />

            <div className="w-full text-center sm:max-w-[240px]">
              <h3 className="text-lg">{t('dtMoney')}</h3>
              <p className="text-sm">{t('dtMoneyDescription')}</p>
            </div>
          </MotionDiv>
        </a>
      </div>
    </section>
  )
}
