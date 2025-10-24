import React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const rainbowButtonVariants = cva(
  cn(
    "group relative inline-flex items-center justify-center gap-2 shrink-0",
    "rounded-lg font-semibold whitespace-nowrap transition-all",
    "bg-blue-600 text-white shadow-lg",
    "backdrop-blur-sm border border-blue-400/30",
    "hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5",
    "active:translate-y-0 active:shadow-lg",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
    "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r",
    "before:from-blue-400/0 before:via-blue-300/30 before:to-blue-400/0",
    "before:opacity-0 before:transition-opacity before:duration-500",
    "hover:before:opacity-100"
  ),
  {
    variants: {
      variant: {
        default: "",
        outline: "bg-white/80 backdrop-blur-md border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:shadow-blue-200/50",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-9 px-3 text-xs",
        lg: "h-11 px-8 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof rainbowButtonVariants> {
  asChild?: boolean
}

const RainbowButton = React.forwardRef<HTMLButtonElement, RainbowButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        data-slot="button"
        className={cn(rainbowButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

RainbowButton.displayName = "RainbowButton"

export { RainbowButton, rainbowButtonVariants, type RainbowButtonProps }

