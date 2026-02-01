import * as React from "react"
import { useState } from "react"
import { cn } from "../../lib/utils"
import { Button } from "./button"

export function Carousel({ items = [], className }) {
  const [current, setCurrent] = useState(0)
  const length = items.length

  const next = () => setCurrent((prev) => (prev + 1) % length)
  const prev = () => setCurrent((prev) => (prev - 1 + length) % length)

  if (length === 0) return null

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div className="flex transition-transform duration-500"
           style={{ transform: `translateX(-${current * 100}%)` }}>
        {items.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <img src={item.src} alt={item.alt || `slide-${index}`} className="w-full h-64 object-cover rounded-lg" />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
        <Button variant="outline" onClick={prev}>Prev</Button>
        <Button variant="outline" onClick={next}>Next</Button>
      </div>
    </div>
  )
}
