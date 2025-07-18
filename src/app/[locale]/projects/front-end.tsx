import { useTranslations } from 'next-intl'

import coffeDeliveryImg from '@/assets/coffee-delivery.png'
import uploadAiImg from '@/assets/upload-ai.png'
import adminDashboardImg from '@/assets/admin-dashboard.png'
import igniteUIImg from '@/assets/ignite-ui.png'
import { ProjectCard } from '@/components/project-card'

export function FrontEnd() {
  const t = useTranslations('FrontEnd')

  return (
    <div className="grid grid-cols-1 gap-4 mx-auto w-full sm:grid-cols-2">
      <ProjectCard
        image={coffeDeliveryImg}
        alt={t('coffeeAlt')}
        title={t('coffee')}
        description={t('coffeeDescription')}
        tags={[
          'React.js',
          'TypeScript',
          'HTML',
          'CSS',
          'Git',
          'ViteJS',
          'Zod',
          'Styled-components',
          'Toast',
          'React Hook Form',
        ]}
        websiteUrl="https://cheerful-hotteok-38b9a0.netlify.app"
        sourceCodeUrl="https://github.com/renatomarquesteles/ignite-02-coffee-delivery"
      />

      <ProjectCard
        image={adminDashboardImg}
        alt={t('adminDashboardAlt')}
        title={t('adminDashboard')}
        description={t('adminDashboardDescription')}
        tags={[
          'React.js',
          'TypeScript',
          'Next.js',
          'HTML',
          'CSS',
          'Git',
          'Nivo charts',
          'Material UI',
          'Formik',
          'Yup',
        ]}
        websiteUrl="https://admin-dashboard-bay-six.vercel.app/"
        sourceCodeUrl="https://github.com/renatomarquesteles/admin-dashboard"
      />

      <ProjectCard
        image={igniteUIImg}
        alt={t('igniteUIAlt')}
        title={t('igniteUI')}
        description={t('igniteUIDescription')}
        tags={[
          'React.js',
          'TypeScript',
          'Monorepo',
          'HTML',
          'CSS',
          'Git',
          'CI/CD',
          'Changesets',
          'Stitches',
          'Storybook',
          'NPM Publishing',
        ]}
        websiteUrl="https://renatomarquesteles.github.io/ignite-05-rmt-ignite-ui/"
        sourceCodeUrl="https://github.com/renatomarquesteles/ignite-05-rmt-ignite-ui"
      />

      <ProjectCard
        image={uploadAiImg}
        alt={t('uploadAIAlt')}
        title={t('uploadAI')}
        description={t('uploadAIDescription')}
        tags={[
          'React.js',
          'Next.js',
          'OpenAI API',
          'HTML',
          'CSS',
          'TypeScript',
          'Git',
          'Tailwind CSS',
          'Node.js',
          'Fastify',
          'Prisma',
          'ffmpeg',
          'Zod',
        ]}
        sourceCodeUrl="https://github.com/renatomarquesteles/nlw-upload-ai"
      />
    </div>
  )
}
