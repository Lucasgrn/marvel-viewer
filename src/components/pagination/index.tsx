"use client"

import { Pagination, usePagination } from "./usePagination"
import Link from "next/link"

export default function Paginator(props: Pagination) {
  const { pages, isCurrent } = usePagination(props)
  return (
    <div className="flex items-center justify-between bg-neutral-900 px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <Link
          href={`?page=${props.page - 1}`}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </Link>
        <Link
          href={`?page=${props.page + 1}`}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </Link>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-white">
            Showing <span className="font-medium">{props.offset}</span> to <span className="font-medium">{props.offset + props.count - 1}</span> of{' '}
            <span className="font-medium">{props.total}</span> results
          </p>
        </div>
        <div>
          <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-xs">
            {pages.map((item, index) => {
              if (typeof item == 'string' || isCurrent(item)) {
                return (
                  <span
                    key={index}
                    aria-current="page"
                    className="relative z-10 inline-flex items-center rounded-xl bg-neutral-800 px-4 py-2 text-sm font-semibold mr-2 text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {item}
                  </span>
                )
              }

              return (
                <Link
                  key={index}
                  href={`?page=${item}`}
                  aria-current="page"
                  className="relative z-10 inline-flex items-center rounded-xl bg-neutral-600  hover:bg-neutral-400 px-4 py-2 mr-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {item}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </div>
  )
}