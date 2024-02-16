import { useTranslations } from 'next-intl'
import Image from 'next/image'

import restaurantDeliveryImg from '@/assets/restaurant-delivery.png'
import dailyDietImg from '@/assets/daily-diet.png'
import teamsImg from '@/assets/teams.png'
import { MotionDiv } from '@/components/motion-div'

export function Mobile() {
  const t = useTranslations('Mobile')

  return (
    <div className="w-full my-6 flex justify-center gap-8 flex-wrap">
      <a
        href="https://github.com/renatomarquesteles/nlw-expert-rn"
        target="_blank"
        className="w-full flex flex-col items-center text-slate text-opacity-90 sm:w-fit dark:text-white dark:text-opacity-90"
      >
        <MotionDiv delay={0.3}>
          <Image
            src={restaurantDeliveryImg}
            alt={t('restaurantDeliveryAlt')}
            width={240}
            height={130}
            quality={100}
            className="w-full rounded-xl mb-2 sm:w-[240px]"
          />

          <div className="w-full text-center sm:max-w-[240px]">
            <h3 className="text-lg">{t('restaurantDelivery')}</h3>
            <p className="text-sm">{t('restaurantDeliveryDescription')}</p>
          </div>
        </MotionDiv>
      </a>

      <a
        href="https://github.com/renatomarquesteles/rn-02-daily-diet"
        target="_blank"
        className="w-full flex flex-col items-center text-slate text-opacity-90 sm:w-fit dark:text-white dark:text-opacity-90"
      >
        <MotionDiv delay={0.3}>
          <Image
            src={dailyDietImg}
            alt={t('dailyDietAlt')}
            width={240}
            height={130}
            quality={100}
            className="w-full rounded-xl mb-2 sm:w-[240px]"
          />

          <div className="w-full text-center sm:max-w-[240px]">
            <h3 className="text-lg">{t('dailyDiet')}</h3>
            <p className="text-sm">{t('dailyDietDescription')}</p>
          </div>
        </MotionDiv>
      </a>

      <a
        href="https://github.com/renatomarquesteles/rn-02-ignite-teams"
        target="_blank"
        className="w-full flex flex-col items-center text-slate text-opacity-90 sm:w-fit dark:text-white dark:text-opacity-90"
      >
        <MotionDiv delay={0.3}>
          <Image
            src={teamsImg}
            alt={t('teamsAlt')}
            width={240}
            height={130}
            quality={100}
            className="w-full rounded-xl mb-2 sm:w-[240px] border-gray-400 border-2 border-opacity-20"
          />

          <div className="w-full text-center sm:max-w-[240px]">
            <h3 className="text-lg">{t('teams')}</h3>
            <p className="text-sm">{t('teamsDescription')}</p>
          </div>
        </MotionDiv>
      </a>
    </div>
  )
}
