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
      <div className="flex flex-row justify-between w-1/2">
        <Link href={'/'}>
          <h1>Viewer</h1>
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