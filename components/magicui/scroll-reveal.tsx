"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  yOffset?: number
  className?: string
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 20,
  className,
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: false, // Allow animations to retrigger
    amount: 0.3, // Trigger when 30% of element is visible
    margin: "-50px", // Trigger slightly before entering viewport
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{
        duration,
        delay: isInView ? delay : 0,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

