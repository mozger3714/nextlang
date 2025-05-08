'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { useEffect, useState } from 'react'

export function SectionAnimatedDivider() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })

  const [lineVisible, setLineVisible] = useState(false)

  useEffect(() => {
    if (isInView) {
      setLineVisible(true)
    }
  }, [isInView])

  return (
    <div ref={ref} className="relative py-16 flex items-center justify-center">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: lineVisible ? '80%' : 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: lineVisible ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="w-3 h-3 rounded-full bg-[var(--color-accent)] shadow-[0_0_5px_var(--color-accent)]"
          />
        </div>
      </motion.div>
    </div>
  )
}
