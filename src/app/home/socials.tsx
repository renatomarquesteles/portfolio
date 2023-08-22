'use client'

import { PiEnvelope, PiGithubLogoFill } from 'react-icons/pi'
import { FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'

import thumbnailImg from '@/assets/youtube-thumbnail.png'
import { CopyEmailToClipboardButton } from '@/components/copy-email-to-clipboard-button'
import { SectionTitle } from '@/components/section-title'
import { MotionDiv } from '@/components/motion-div'

export function Socials() {
  return (
    <section className="mb-6">
      <MotionDiv delay={0.5}>
        <SectionTitle>My socials</SectionTitle>

        <div className="font-open-sans">
          <a
            href="https://www.github.com/renatomarquesteles"
            target="_blank"
            className="w-fit py-3 px-4 flex items-center gap-2 text-teal-700 rounded-md font-semibold transition-colors hover:bg-teal-50"
          >
            <PiGithubLogoFill size={16} />
            @renatomarquesteles
          </a>
          <a
            href="https://www.linkedin.com/in/renato-marques-teles/"
            target="_blank"
            className="w-fit py-3 px-4 flex items-center gap-2 text-teal-700 rounded-md font-semibold transition-colors hover:bg-teal-50"
          >
            <FaLinkedin size={16} />
            /in/renato-marques-teles
          </a>

          <div className="flex gap-3 items-center">
            <a
              href="mailto:renatomarquesteles@gmail.com"
              className="w-fit py-3 px-4 flex items-center gap-2 text-teal-700 rounded-md font-semibold transition-colors hover:bg-teal-50"
            >
              <PiEnvelope size={16} />
              renatomarquesteles@gmail.com
            </a>
            <CopyEmailToClipboardButton />
          </div>
        </div>

        <div className="w-full my-2 flex justify-center">
          <a
            href="https://www.youtube.com/@renatomarquesteles3517"
            target="_blank"
            className="w-fit flex flex-col items-center text-slate text-opacity-90"
          >
            <Image
              src={thumbnailImg}
              alt='A YouTube thumbnail written "Renato Marques, a software engineer"'
              width={240}
              height={130}
              className="rounded-xl mb-2"
            />

            <h3 className="text-base">Renato Marques Teles</h3>
            <p className="text-sm">My YouTube channel (&gt;2k views)</p>
          </a>
        </div>
      </MotionDiv>
    </section>
  )
}
