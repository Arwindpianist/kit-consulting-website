import type React from "react"
import Link from "next/link"
import { ArrowRight } from "./icons"

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary"
  className?: string
}

export default function CTAButton({ href, children, variant = "primary", className = "" }: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 hover:gap-3"

  const variantStyles = {
    primary: "bg-[#0066cc] text-white hover:bg-[#003366] shadow-md hover:shadow-lg",
    secondary: "border-2 border-[#0066cc] text-[#0066cc] hover:bg-[#0066cc] hover:text-white",
  }

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  )
}
