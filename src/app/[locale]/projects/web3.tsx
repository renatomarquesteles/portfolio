'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import anubisRushImg from '@/assets/anubis-rush.png'
import cryptwitterImg from '@/assets/cryptwitter.png'
import hycImg from '@/assets/hyc.png'
import paperhandsImg from '@/assets/paperhands.png'
import { SectionTitle } from '@/components/section-title'
import { MotionDiv } from '@/components/motion-div'
import { ProjectCard } from '@/components/project-card'

export function Web3() {
  const t = useTranslations('Web3')

  return (
    <section>
      <MotionDiv delay={0.5}>
        <SectionTitle>{t('title')}</SectionTitle>
      </MotionDiv>

      <div className="grid grid-cols-1 gap-4 mx-auto w-full sm:grid-cols-2">
        <ProjectCard
          image={paperhandsImg}
          alt={t('paperhandsAlt')}
          title={t('paperhands')}
          description={t('paperhandsDescription')}
          tags={['React.js', 'JavaScript', 'HTML', 'CSS', 'Git']}
          websiteUrl="https://x.com/GodsgameNFT/status/1511346299504836620"
        />

        <ProjectCard
          image={anubisRushImg}
          alt={t('anubisAlt')}
          title={t('anubis')}
          description={t('anubisDescription')}
          tags={[
            'Unity',
            'React.js',
            'JavaScript',
            'HTML',
            'CSS',
            'Styled-components',
            'Git',
            'Unity WebGL',
          ]}
          websiteUrl="https://anubis-rush.netlify.app/"
          sourceCodeUrl="https://github.com/renatomarquesteles/anubis-rush"
        />

        <ProjectCard
          image={hycImg}
          alt={t('hycAlt')}
          title={t('hyc')}
          description={t('hycDescription')}
          tags={[
            'React Native',
            'TypeScript',
            'Expo',
            'Git',
            'Styled-components',
            'Async Storage',
          ]}
          sourceCodeUrl="https://github.com/renatomarquesteles/hold-your-crypto"
        />

        <ProjectCard
          image={cryptwitterImg}
          alt={t('cryptwitterAlt')}
          title={t('cryptwitter')}
          description={t('cryptwitterDescription')}
          tags={[
            'Solidity',
            'React.js',
            'TypeScript',
            'Next.js',
            'HTML',
            'CSS',
            'Git',
            'MetaMask',
            'Binance Smart Chain',
          ]}
          sourceCodeUrl="https://github.com/renatomarquesteles/web3-cryptwitter"
        />
      </div>
    </section>
  )
}
