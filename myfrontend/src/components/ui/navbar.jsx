import * as React from "react"
import { Button } from "./button"
import { cn } from "../../lib/utils"


export function Navbar({ className, links = [] }) {
  return (
    <nav
      className={cn(
        "bg-white shadow-md px-6 py-4 flex items-center justify-between",
        className
      )}
    >
      <div className="text-2xl font-bold text-black">SmartCinema</div>
      <div className="flex space-x-4">
        {links.length > 0
          ? links.map((link) => (
              <Button key={link} variant="outline">{link}</Button>
            ))
          : null}
      </div>
    </nav>
  )
}


// export function Navbar({ className }) {
//   return (
//     <nav
//       className={cn(
//         "bg-white shadow-md px-6 py-4 flex items-center justify-between",
//         className
//       )}
//     >
//       <div className="text-2xl font-bold text-black">SmartCinema</div>
//       <div className="space-x-4">
//         <Button variant="outline">Home</Button>
//         <Button variant="outline">Movies</Button>
//         <Button variant="outline">Booking</Button>
//         <Button variant="outline">Contact</Button>
//       </div>
//     </nav>
//   )
// }
