import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500/40",
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white shadow-[0_12px_30px_rgba(37,99,235,0.35)] hover:shadow-[0_16px_36px_rgba(37,99,235,0.45)] hover:brightness-105 active:translate-y-[1px]',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/30 dark:focus-visible:ring-destructive/40 dark:bg-destructive/70',
        outline:
          'border border-blue-500/40 bg-white/90 text-blue-600 shadow-[0_6px_18px_rgba(37,99,235,0.12)] hover:border-blue-500/70 hover:bg-white hover:text-blue-700',
        secondary:
          'bg-blue-50 text-blue-700 hover:bg-blue-100',
        ghost:
          'hover:bg-blue-50 hover:text-blue-700',
        link: 'text-blue-600 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-6 has-[>svg]:px-5',
        sm: 'h-10 rounded-full gap-1.5 px-4 has-[>svg]:px-3.5',
        lg: 'h-12 rounded-full px-7 has-[>svg]:px-6',
        icon: 'size-10',
        'icon-sm': 'size-9',
        'icon-lg': 'size-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
