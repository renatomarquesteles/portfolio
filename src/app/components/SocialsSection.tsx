import { PiEnvelope, PiGithubLogoFill } from 'react-icons/pi'
import { FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'

import thumbnailImg from '../../assets/youtube-thumbnail.png'

export function SocialsSection() {
  return (
    <section className="mb-6">
      <h2 className="my-4 font-bold text-xl underline underline-offset-[6px] decoration-4 decoration-gray-400 text-slate text-opacity-90 font-m-plus-rounded-1c">
        My socials
      </h2>

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
        <a
          href="mailto:renatomarquesteles@gmail.com"
          className="w-fit py-3 px-4 flex items-center gap-2 text-teal-700 rounded-md font-semibold transition-colors hover:bg-teal-50"
        >
          <PiEnvelope size={16} />
          renatomarquesteles@gmail.com
        </a>
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
    </section>
  )
}
