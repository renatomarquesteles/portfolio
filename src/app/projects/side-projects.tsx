import Image from 'next/image'

import coffeDeliveryImg from '@/assets/coffee-delivery.png'
import dtMoneyImg from '@/assets/dt-money.png'
import igniteShopImg from '@/assets/ignite-shop.png'
import igniteUIImg from '@/assets/ignite-ui.png'
import { SectionTitle } from '@/components/section-title'

export function SideProjects() {
  return (
    <section>
      <SectionTitle>Side-projects</SectionTitle>

      <div className="w-full my-6 flex justify-center gap-8 flex-wrap">
        <a
          href="https://cheerful-hotteok-38b9a0.netlify.app"
          target="_blank"
          className="w-full flex flex-col items-center text-slate text-opacity-90 sm:w-fit"
        >
          <Image
            src={coffeDeliveryImg}
            alt="A black and white cup written Coffe Delivery and coffee seeds around it"
            width={240}
            height={130}
            quality={100}
            className="w-full rounded-xl mb-2 sm:w-[240px]"
          />

          <div className="w-full text-center sm:max-w-[240px]">
            <h3 className="text-lg">Coffee Delivery</h3>
            <p className="text-sm">
              A coffee shop delivery from the products list to the checkout and
              success pages.
            </p>
          </div>
        </a>

        <a
          href="https://github.com/renatomarquesteles/ignite-04-ignite-shop"
          target="_blank"
          className="w-full flex flex-col items-center text-slate text-opacity-90 sm:w-fit"
        >
          <Image
            src={igniteShopImg}
            alt={`4 different black t-shirts and it's written "order completed!"`}
            width={240}
            height={130}
            quality={100}
            className="w-full rounded-xl mb-2 sm:w-[240px]"
          />

          <div className="w-full text-center sm:max-w-[240px]">
            <h3 className="text-lg">Ignite Shop</h3>
            <p className="text-sm">
              A t-shirts e-commerce integrated with Stripe.
            </p>
          </div>
        </a>

        <a
          href="https://renatomarquesteles.github.io/ignite-05-rmt-ignite-ui/"
          target="_blank"
          className="w-full flex flex-col items-center text-slate text-opacity-90 sm:w-fit"
        >
          <Image
            src={igniteUIImg}
            alt='The Storybook logo with a search input under it written "Find components"'
            width={240}
            height={130}
            quality={100}
            className="w-full rounded-xl mb-2 sm:w-[240px]"
          />

          <div className="w-full text-center sm:max-w-[240px]">
            <h3 className="text-lg">Ignite UI</h3>
            <p className="text-sm">
              Design System packages built and release on NPM to be installed
              and used in other projects.
            </p>
          </div>
        </a>

        <a
          href="https://github.com/renatomarquesteles/ignite-03-dt-money"
          target="_blank"
          className="w-full flex flex-col items-center text-slate text-opacity-90 sm:w-fit"
        >
          <Image
            src={dtMoneyImg}
            alt="A dark UI dashboard with a list of money transactions"
            width={240}
            height={130}
            quality={100}
            className="w-full rounded-xl mb-2 sm:w-[240px]"
          />

          <div className="w-full text-center sm:max-w-[240px]">
            <h3 className="text-lg">DT Money</h3>
            <p className="text-sm">A personal transactions tracker system.</p>
          </div>
        </a>
      </div>
    </section>
  )
}
