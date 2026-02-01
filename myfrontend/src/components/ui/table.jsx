import * as React from "react"
import { cn } from "../../lib/utils"

export function Table({ columns = [], data = [], className }) {
  return (
    <div className="overflow-x-auto">
      <table className={cn("min-w-full border-collapse", className)}>
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                className="border px-4 py-2 text-left text-sm font-medium text-gray-700"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50">
              {columns.map((col) => (
                <td key={col} className="border px-4 py-2 text-sm">
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
