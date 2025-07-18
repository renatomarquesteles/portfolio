import { useTranslations } from 'next-intl'

import pollsImg from '@/assets/polls.png'
import barcodesImg from '@/assets/barcode.png'
import { ProjectCard } from '@/components/project-card'

export function BackEnd() {
  const t = useTranslations('BackEnd')

  return (
    <div className="grid grid-cols-1 gap-4 mx-auto w-full sm:grid-cols-2">
      <ProjectCard
        image={pollsImg}
        alt={t('pollsAlt')}
        title={t('polls')}
        description={t('pollsDescription')}
        tags={[
          'Node.js',
          'TypeScript',
          'Fastify',
          'Git',
          'Prisma',
          'PostgreSQL',
          'Redis',
          'Zod',
          'Cookies',
          'WebSockets',
        ]}
        sourceCodeUrl="https://github.com/renatomarquesteles/nlw-expert-node"
      />

      <ProjectCard
        image={barcodesImg}
        alt={t('barcodesAlt')}
        title={t('barcodes')}
        description={t('barcodesDescription')}
        tags={[
          'Python',
          'Flask',
          'Cerberus',
          'Git',
          'Python Barcode',
          'Pylint',
          'Pytest',
          'Virtualenv',
        ]}
        sourceCodeUrl="https://github.com/renatomarquesteles/nlw-expert-python"
      />
    </div>
  )
}
