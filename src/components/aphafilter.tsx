import Link from "next/link"

export default function AlphaFilter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
  return (
    <div className="flex flex-row max-w-screen overflow-x-auto whitespace-nowrap">
      {alphabet.map((item, index) => {
        return (
          <Link
            key={index}
            href={`/search/${item}`}
            className="inline-flex flex-shrink-0 w-10 h-10 bg-neutral-600 p-2 m-1 mt-2 justify-center rounded-xl"
          >
            {item}
          </Link>
        )
      })
      }
    </div>
  )
}