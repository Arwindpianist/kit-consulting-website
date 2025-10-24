"use client"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface AuroraTextProps {
  children: ReactNode
  className?: string
}

export default function AuroraText({ children, className }: AuroraTextProps) {
  return (
    <span
      className={cn(
        "relative inline-block font-bold",
        className
      )}
      style={{
        background: "linear-gradient(110deg, #0066cc 0%, #38bdf8 20%, #818cf8 40%, #c084fc 60%, #0066cc 80%, #38bdf8 100%)",
        backgroundSize: "400% 400%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animation: "aurora 8s ease infinite"
      }}
    >
      {children}
    </span>
  )
}

