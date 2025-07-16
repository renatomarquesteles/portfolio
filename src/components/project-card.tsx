import Image, { StaticImageData } from 'next/image'
import { Code, Globe } from 'lucide-react'
import { Badge } from './ui/badge'
import { WobbleCard } from './ui/wobble-card'

interface ProjectCardProps {
  image: StaticImageData
  alt: string
  title: string
  description: string
  tags?: string[]
  websiteUrl?: string
  sourceCodeUrl?: string
}

export function ProjectCard({
  image,
  alt,
  title,
  description,
  tags = [],
  websiteUrl,
  sourceCodeUrl,
}: ProjectCardProps) {
  return (
    <WobbleCard
      containerClassName="w-full border hover:shadow-lg"
      className="flex flex-col"
    >
      <Image
        src={image}
        alt={alt}
        width={240}
        height={130}
        quality={100}
        className="w-full rounded-xl mb-2 border"
      />
      <div className="w-full flex-1">
        <h3 className="font-bold text-slate/90 font-inter">{title}</h3>
        <p className="text-sm text-gray-400 leading-tight mt-1">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1 mt-3">
        {tags.map((item) => (
          <Badge
            key={item}
            variant="secondary"
            className="px-2 leading-tight shadow rounded-sm border-none"
          >
            <span className="text-[10px]">{item}</span>
          </Badge>
        ))}
      </div>
      <div className="flex gap-1 mt-5">
        {websiteUrl && (
          <a href={websiteUrl} target="_blank">
            <Badge className="px-2 py-1 rounded-sm border-none">
              <Globe className="w-3 h-3 mr-1 inline-block" />
              <span className="text-[10px]">Website</span>
            </Badge>
          </a>
        )}
        {sourceCodeUrl && (
          <a href={sourceCodeUrl} target="_blank">
            <Badge className="px-2 py-1 rounded-sm border-none">
              <Code className="w-3 h-3 mr-1 inline-block" />
              <span className="text-[10px]">Source Code</span>
            </Badge>
          </a>
        )}
      </div>
    </WobbleCard>
  )
}
