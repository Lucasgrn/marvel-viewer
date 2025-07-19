import Card from "@/components/card"
import { api } from "@/service/api"
import { Character } from "@/types/character"

export default async function Search({ params }: {
  params: Promise<{ input: string }>
}) {
  const search = await params
  const response = await api('/characters', `nameStartsWith=${search.input}`)
  const characters = response.data
  return (
    <div className="flex flex-col">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-2 w-3/4 self-center">
        {characters.map((item: Character) => {
          return (
            <Card key={item.id} name={item.name} description={item.description} id={item.id} thumbnail={item.thumbnail} />
          )
        })}
      </div>
    </div>
  )
}