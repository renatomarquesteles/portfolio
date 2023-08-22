'use client'

import { MotionDiv } from '@/components/motion-div'
import { SectionTitle } from '@/components/section-title'

export function Interests() {
  return (
    <section className="mb-6">
      <MotionDiv delay={0.4}>
        <SectionTitle>I ♥</SectionTitle>

        <p className="indent-4 text-slate text-opacity-90">
          When I&apos;m not coding, I like to hang out with my friends, go to
          the gym, play soccer, watch TV shows and movies, and play video games.
        </p>
      </MotionDiv>
    </section>
  )
}
