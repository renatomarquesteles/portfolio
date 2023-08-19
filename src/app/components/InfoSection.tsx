import Image from 'next/image'

import avatarImg from '../../assets/avatar.png'

export function InfoSection() {
  return (
    <header className="my-8 px-8 md:px-0">
      <div className="bg-white bg-opacity-30 my-6 p-3 rounded-lg">
        <p className="text-center text-slate">
          Hello, I&apos;m a front-end developer based in Brazil!
        </p>
      </div>

      <div className="flex justify-between flex-wrap gap-3">
        <div className="text-slate text-opacity-90">
          <h1 className="font-bold text-[34px] font-m-plus-rounded-1c tracking-tighter">
            Renato Marques Teles
          </h1>
          <p className="text-sm">
            Software Engineer{' '}
            <span className="whitespace-nowrap">
              ( React / JavaScript / Next.js )
            </span>
          </p>
        </div>

        <Image
          src={avatarImg}
          alt="Picture of the author"
          width={100}
          height={100}
          className="w-[100px] h-[100px] rounded-full border-2 border-white border-opacity-80"
        />
      </div>
    </header>
  )
}
