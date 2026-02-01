import * as React from "react"
import { cn } from "../../lib/utils"

export function Footer({ className }) {
  return (
    <footer
      className={cn(
        "bg-gray-800 text-white px-6 py-6 mt-10",
        className
      )}
    >
      <div className="max-w-6xl mx-auto text-center space-y-2">
        <p>© 2025 SmartCinema. All rights reserved.</p>
      </div>
    </footer>
  )
}
