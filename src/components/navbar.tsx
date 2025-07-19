"use client"
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
        <input className="border-1 border-black rounded-md p-2"
          placeholder="Procurar personagem..."
          onChange={(event) => { setInput(event.target.value) }}
          onKeyDown={handleKey}
        />
        <h1>History</h1>
      </div>
    </nav>
  )
}