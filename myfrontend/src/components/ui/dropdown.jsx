import * as React from "react"
import { cn } from "../../lib/utils"

export function Dropdown({ options = [], onChange, className }) {
  return (
    <select
      onChange={(e) => onChange && onChange(e.target.value)}
      className={cn(
        "rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black",
        className
      )}
    >
      {options.map((opt, idx) => (
        <option key={idx} value={opt.value || opt}>
          {opt.label || opt}
        </option>
      ))}
    </select>
  )
}
