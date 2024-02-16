'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import profileImg from '@/assets/pfp.png'
import { MotionDiv } from '@/components/motion-div'

export function Info() {
  const t = useTranslations('Info')

  return (
    <header className="my-8 px-8 md:px-0">
      <MotionDiv delay={0.1}>
        <div className="bg-white bg-opacity-30 my-6 p-3 rounded-lg dark:bg-gray-400 dark:bg-opacity-30">
          <p className="text-center text-slate dark:text-white dark:text-opacity-90">
            {t('hello')}
          </p>
        </div>

        <div className="flex justify-between flex-wrap gap-3">
          <div className="text-slate text-opacity-90 dark:text-white dark:text-opacity-90">
            <h1 className="font-bold text-[34px] font-m-plus-rounded-1c tracking-tighter">
              Renato Marques Teles
            </h1>
            <p className="text-sm">
              {t('profession')}{' '}
              <span className="whitespace-nowrap">
                ( React / React Native / Node.js )
              </span>
            </p>
          </div>

          <Image
            src={profileImg}
            alt={t('avatarAlt')}
            width={100}
            height={100}
            className="w-[100px] h-[100px] rounded-full border-2 border-white border-opacity-80"
          />
        </div>
      </MotionDiv>
    </header>
  )
}
