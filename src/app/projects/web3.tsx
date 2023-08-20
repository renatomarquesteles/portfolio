import Image from 'next/image'

import anubisRushImg from '@/assets/anubis-rush.png'
import cryptwitterImg from '@/assets/cryptwitter.png'
import hycImg from '@/assets/hyc.png'
import paperhandsImg from '@/assets/paperhands.png'
import { SectionTitle } from '@/components/section-title'

export function Web3() {
  return (
    <section>
      <SectionTitle>On the Web 3.0</SectionTitle>

      <div className="w-full my-6 flex justify-center gap-8 flex-wrap">
        <a
          href="https://twitter.com/GodsgameNFT/status/1511346299504836620"
          target="_blank"
          className="w-fit flex flex-col items-center text-slate text-opacity-90"
        >
          <Image
            src={paperhandsImg}
            alt='A dark background with a yellow glowing eye written "Paperhands Tracker" under it'
            width={240}
            height={130}
            quality={100}
            className="rounded-xl mb-2"
          />

          <div className="max-w-[240px] text-center">
            <h3 className="text-lg">Paperhands Tracker</h3>
            <p className="text-sm">
              A blockchain contract transaction tracker that checks for
              &quot;paperhands&quot;.
            </p>
          </div>
        </a>

        <a
          href="https://anubis-rush.netlify.app/"
          target="_blank"
          className="w-fit flex flex-col items-center text-slate text-opacity-90"
        >
          <Image
            src={anubisRushImg}
            alt='A 3D typography written "Anubis Rush" in purple and yellow with a dark purple background'
            width={240}
            height={130}
            quality={100}
            className="rounded-xl mb-2"
          />

          <div className="max-w-[240px] text-center">
            <h3 className="text-lg">Anubis Rush</h3>
            <p className="text-sm">
              Game developed for the Game Jam competition at the GodsGame NFT
              community.
            </p>
          </div>
        </a>

        <a
          href="https://github.com/renatomarquesteles/hold-your-crypto"
          target="_blank"
          className="w-fit flex flex-col items-center text-slate text-opacity-90"
        >
          <Image
            src={hycImg}
            alt={`A purple background with a white "H" as the logo and it's written "Hold Your Crypto" in white under the logo`}
            width={240}
            height={130}
            quality={100}
            className="rounded-xl mb-2"
          />

          <div className="max-w-[240px] text-center">
            <h3 className="text-lg">Hold Your Crypto</h3>
            <p className="text-sm">
              Mobile App that helps people keep track of their crypto
              investments.
            </p>
          </div>
        </a>

        <a
          href="https://github.com/renatomarquesteles/web3-cryptwitter/"
          target="_blank"
          className="w-fit flex flex-col items-center text-slate text-opacity-90"
        >
          <Image
            src={cryptwitterImg}
            alt={`A white background written "CrypTwitter" in black and a blue button with a fox icon and it's written "Connect with MetaMask"`}
            width={240}
            height={130}
            quality={100}
            className="rounded-xl mb-2"
          />

          <div className="max-w-[240px] text-center">
            <h3 className="text-lg">CrypTwitter</h3>
            <p className="text-sm">
              Web3 version of Twitter&quot;s timeline, on the blockchain.
            </p>
          </div>
        </a>
      </div>
    </section>
  )
}
