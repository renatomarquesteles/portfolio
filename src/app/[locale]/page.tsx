import { Metadata } from 'next'

import { GlowingEffect } from '@/components/ui/glowing-effect'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Info } from './home/info'
import { Work } from './home/work'
import { Contact } from './home/contacts'
import { Bio } from './home/bio'
import { Socials } from './home/socials'

export const metadata: Metadata = {
  title: "Home | Renato's Portfolio",
}

export default function HomeLayout() {
  return (
    <>
      <div className="bg-white/75 dark:bg-gray-900/75 relative z-10 px-8 py-8 my-20 rounded-lg pointer-events-auto backdrop-blur">
        <GlowingEffect
          spread={45}
          glow={true}
          disabled={false}
          proximity={900}
          inactiveZone={0.01}
          borderWidth={2}
          className="rounded-lg opacity-80"
        />

        <Tabs defaultValue="info">
          <TabsList>
            <TabsTrigger value="info">Info</TabsTrigger>
            <TabsTrigger value="work">Work</TabsTrigger>
            <TabsTrigger value="bio">Bio</TabsTrigger>
            <TabsTrigger value="socials">Socials</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>
          <div className="max-w-[800px] w-full max-h-[70vh] px-8 overflow-y-auto overflow-x-hidden">
            <TabsContent value="info">
              <Info />
            </TabsContent>
            <TabsContent value="work">
              <Work />
            </TabsContent>
            <TabsContent value="bio">
              <Bio />
            </TabsContent>
            <TabsContent value="socials">
              <Socials />
            </TabsContent>
            <TabsContent value="contact">
              <Contact />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </>
  )
}
