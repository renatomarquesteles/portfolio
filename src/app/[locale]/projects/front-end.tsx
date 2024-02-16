import { useTranslations } from 'next-intl'
import Image from 'next/image'

import coffeDeliveryImg from '@/assets/coffee-delivery.png'
import uploadAiImg from '@/assets/upload-ai.png'
import adminDashboardImg from '@/assets/admin-dashboard.png'
import igniteUIImg from '@/assets/ignite-ui.png'
import { MotionDiv } from '@/components/motion-div'

export function FrontEnd() {
  const t = useTranslations('FrontEnd')

  return (
    <div className="w-full my-6 flex justify-center gap-8 flex-wrap">
      <a
        href="https://cheerful-hotteok-38b9a0.netlify.app"
        target="_blank"
        className="w-full flex flex-col items-center text-slate text-opacity-90 sm:w-fit dark:text-white dark:text-opacity-90"
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
        href="https://admin-dashboard-bay-six.vercel.app/"
        target="_blank"
        className="w-full flex flex-col items-center text-slate text-opacity-90 sm:w-fit dark:text-white dark:text-opacity-90"
      >
        <MotionDiv delay={0.3}>
          <Image
            src={adminDashboardImg}
            alt={t('adminDashboardAlt')}
            width={240}
            height={130}
            quality={100}
            className="w-full rounded-xl mb-2 sm:w-[240px]"
          />

          <div className="w-full text-center sm:max-w-[240px]">
            <h3 className="text-lg">{t('adminDashboard')}</h3>
            <p className="text-sm">{t('adminDashboardDescription')}</p>
          </div>
        </MotionDiv>
      </a>

      <a
        href="https://renatomarquesteles.github.io/ignite-05-rmt-ignite-ui/"
        target="_blank"
        className="w-full flex flex-col items-center text-slate text-opacity-90 sm:w-fit dark:text-white dark:text-opacity-90"
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
        href="https://github.com/renatomarquesteles/nlw-upload-ai"
        target="_blank"
        className="w-full flex flex-col items-center text-slate text-opacity-90 sm:w-fit dark:text-white dark:text-opacity-90"
      >
        <MotionDiv delay={0.4}>
          <Image
            src={uploadAiImg}
            alt={t('uploadAIAlt')}
            width={240}
            height={130}
            quality={100}
            className="w-full rounded-xl mb-2 sm:w-[240px]"
          />

          <div className="w-full text-center sm:max-w-[240px]">
            <h3 className="text-lg">{t('uploadAI')}</h3>
            <p className="text-sm">{t('uploadAIDescription')}</p>
          </div>
        </MotionDiv>
      </a>
    </div>
  )
}
