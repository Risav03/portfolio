import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/utils/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-blue-500/40 bg-blue-500/10 text-blue-300",
        cyan: "border-cyan-500/40 bg-cyan-500/10 text-cyan-300",
        outline: "border-blue-500/30 text-blue-400",
        secondary: "border-white/10 bg-white/5 text-white/70",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
