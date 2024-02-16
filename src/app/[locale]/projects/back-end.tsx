import { useTranslations } from 'next-intl'
import Image from 'next/image'

import pollsImg from '@/assets/polls.png'
import barcodesImg from '@/assets/barcode.png'
import { MotionDiv } from '@/components/motion-div'

export function BackEnd() {
  const t = useTranslations('BackEnd')

  return (
    <div className="w-full my-6 flex justify-center gap-8 flex-wrap">
      <a
        href="https://github.com/renatomarquesteles/nlw-expert-node"
        target="_blank"
        className="w-full flex flex-col items-center text-slate text-opacity-90 sm:w-fit dark:text-white dark:text-opacity-90"
      >
        <MotionDiv delay={0.3}>
          <Image
            src={pollsImg}
            alt={t('pollsAlt')}
            width={240}
            height={130}
            quality={100}
            className="w-full rounded-xl mb-2 sm:w-[240px]"
          />

          <div className="w-full text-center sm:max-w-[240px]">
            <h3 className="text-lg">{t('polls')}</h3>
            <p className="text-sm">{t('pollsDescription')}</p>
          </div>
        </MotionDiv>
      </a>

      <a
        href="https://github.com/renatomarquesteles/nlw-expert-python"
        target="_blank"
        className="w-full flex flex-col items-center text-slate text-opacity-90 sm:w-fit dark:text-white dark:text-opacity-90"
      >
        <MotionDiv delay={0.3}>
          <Image
            src={barcodesImg}
            alt={t('barcodesAlt')}
            width={240}
            height={130}
            quality={100}
            className="w-full rounded-xl mb-2 sm:w-[240px]"
          />

          <div className="w-full text-center sm:max-w-[240px]">
            <h3 className="text-lg">{t('barcodes')}</h3>
            <p className="text-sm">{t('barcodesDescription')}</p>
          </div>
        </MotionDiv>
      </a>
    </div>
  )
}
