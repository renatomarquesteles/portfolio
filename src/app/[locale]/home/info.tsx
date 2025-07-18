'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import profileImg from '@/assets/pfp.png'
import { MotionDiv } from '@/components/motion-div'
import { Badge } from '@/components/ui/badge'
import { GlowEffect } from '@/components/ui/motion-primitives/glow-effect'

export function Info() {
  const t = useTranslations('Info')

  return (
    <header className="my-8 px-8 md:px-0">
      <MotionDiv delay={0.1}>
        <div className="bg-gray-200 bg-opacity-30 my-6 p-3 rounded-lg dark:bg-gray-400 dark:bg-opacity-30">
          <p className="text-center text-slate dark:text-white dark:text-opacity-90">
            {t('hello')}
          </p>
        </div>

        <div className="flex justify-between flex-wrap gap-3">
          <div className="text-slate text-opacity-90 dark:text-white dark:text-opacity-90">
            <h1 className="font-bold text-[34px] font-open-sans tracking-tighter text-center sm:text-left">
              Renato Marques Teles
            </h1>
            <p className="text-sm text-center sm:text-left">
              {t('profession')}
            </p>
            <div className="flex gap-2 mt-2 sm:gap-3">
              <Badge variant="react">React</Badge>
              <Badge variant="reactNative">React Native</Badge>
              <Badge variant="node">Node.js</Badge>
            </div>
          </div>

          <div className="relative flex items-center justify-center w-[108px] h-[108px] rounded-full overflow-hidden mx-auto">
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <GlowEffect
                colors={['#0894FF', '#C959DD', '#FF2E54', '#FF9004']}
                mode="colorShift"
                blur="strong"
              />
            </div>
            <Image
              src={profileImg}
              alt={t('avatarAlt')}
              width={100}
              height={100}
              className="w-[100px] h-[100px] rounded-full relative z-10 border-2 border-white border-opacity-80"
            />
          </div>
        </div>
      </MotionDiv>
    </header>
  )
}
