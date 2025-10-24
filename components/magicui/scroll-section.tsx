"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ScrollSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  snapScroll?: boolean
}

export default function ScrollSection({
  children,
  className,
  id,
  snapScroll = false,
}: ScrollSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2,
    margin: "-100px",
  })

  useEffect(() => {
    if (isInView && ref.current) {
      // Add data attribute when section is in view for styling purposes
      ref.current.setAttribute("data-in-view", "true")
    } else if (ref.current) {
      ref.current.setAttribute("data-in-view", "false")
    }
  }, [isInView])

  return (
    <motion.section
      ref={ref}
      id={id}
      className={cn(
        snapScroll && "scroll-snap-align-start min-h-screen",
        className
      )}
      initial={{ opacity: 0.8 }}
      animate={{ opacity: isInView ? 1 : 0.8 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.section>
  )
}

