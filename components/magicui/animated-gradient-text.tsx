"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

export default function AnimatedGradientText({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "animate-gradient bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-[200%_auto] bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  )
}

