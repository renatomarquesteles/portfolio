'use-client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface MotionDivProps {
  children: ReactNode
  delay?: number
}
export function MotionDiv({ delay = 0, children }: MotionDivProps) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  )
}
