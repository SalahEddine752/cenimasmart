import * as React from "react"
import { cn } from "../../lib/utils"

export function Button({ className, variant = "default", ...props }) {
  const variants = {
    default: "bg-black text-white hover:bg-gray-800",
    outline: "border border-gray-300 hover:bg-gray-100",
  }

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}
