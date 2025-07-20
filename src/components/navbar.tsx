"use client"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"
import { useState } from "react"

export default function Navbar() {
  const [input, setInput] = useState('')
  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == 'Enter') {
      redirect(`/search/${input}`)
    }
  }

  return (
    <nav className="flex p-3 justify-center bg-neutral-900">
      <div className="flex justify-around w-full">
        <Link href={'/'} className="flex self-center" >
          <Image className="w-auto h-12 rounded-xl" src={"/M.png"} width={150} height={150} alt={'App Logo'} />
        </Link>
        <input className="border-1 border-neutral-400 rounded-md p-2 m-2"
          placeholder="Search character..."
          onChange={(event) => { setInput(event.target.value) }}
          onKeyDown={handleKey}
        />
        <Link href={'/character'} className="flex justify-between self-center  w-auto h-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          <h1>Characters</h1>
        </Link>
      </div>
    </nav>
  )
}