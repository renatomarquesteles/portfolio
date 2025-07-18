import { useTranslations } from 'next-intl'

import restaurantDeliveryImg from '@/assets/restaurant-delivery.png'
import dailyDietImg from '@/assets/daily-diet.png'
import teamsImg from '@/assets/teams.png'
import { ProjectCard } from '@/components/project-card'

export function Mobile() {
  const t = useTranslations('Mobile')

  return (
    <div className="grid grid-cols-1 gap-4 mx-auto w-full sm:grid-cols-2">
      <ProjectCard
        image={restaurantDeliveryImg}
        alt={t('restaurantDeliveryAlt')}
        title={t('restaurantDelivery')}
        description={t('restaurantDeliveryDescription')}
        tags={[
          'React Native',
          'TypeScript',
          'Expo',
          'Git',
          'Tailwind CSS',
          'Async Storage',
          'Zustand',
          'Whatsapp API',
        ]}
        sourceCodeUrl="https://github.com/renatomarquesteles/nlw-expert-rn"
      />

      <ProjectCard
        image={dailyDietImg}
        alt={t('dailyDietAlt')}
        title={t('dailyDiet')}
        description={t('dailyDietDescription')}
        tags={[
          'React Native',
          'TypeScript',
          'Expo',
          'Git',
          'Styled-components',
          'Async Storage',
          'Stack Navigator',
        ]}
        sourceCodeUrl="https://github.com/renatomarquesteles/rn-02-daily-diet"
      />

      <ProjectCard
        image={teamsImg}
        alt={t('teamsAlt')}
        title={t('teams')}
        description={t('teamsDescription')}
        tags={[
          'React Native',
          'TypeScript',
          'Expo',
          'Git',
          'Styled-components',
          'Async Storage',
          'Phosphor Icons',
        ]}
        sourceCodeUrl="https://github.com/renatomarquesteles/rn-02-ignite-teams"
      />
    </div>
  )
}
