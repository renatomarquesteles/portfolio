import { Metadata } from 'next'

import { ProfessionalWorks } from './professional-works'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import { Tabs, TabsContent, TabsList } from '@/components/ui/tabs'
import { TabsListItems } from './tabs-list-items'
import { FrontEnd } from './front-end'
import { BackEnd } from './back-end'
import { Mobile } from './mobile'
import { Web3 } from './web3'

export const metadata: Metadata = {
  title: "Projects | Renato's Portfolio",
}

export default function Projects() {
  return (
    <div className="bg-white/75 dark:bg-gray-900/75 relative z-10 px-8 py-8 my-20 rounded-lg pointer-events-auto backdrop-blur">
      <GlowingEffect
        spread={45}
        glow={true}
        disabled={false}
        proximity={900}
        inactiveZone={0.01}
        borderWidth={2}
        className="rounded-lg opacity-80 hidden sm:block"
      />

      <Tabs defaultValue="professional-works">
        <TabsList className="mx-auto opacity-80">
          <TabsListItems />
        </TabsList>
        <div className="max-w-[800px] w-full max-h-[70vh] px-8 overflow-y-auto">
          <TabsContent value="professional-works">
            <ProfessionalWorks />
          </TabsContent>
          <TabsContent value="front-end">
            <FrontEnd />
          </TabsContent>
          <TabsContent value="mobile">
            <Mobile />
          </TabsContent>
          <TabsContent value="back-end">
            <BackEnd />
          </TabsContent>
          <TabsContent value="web3">
            <Web3 />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
