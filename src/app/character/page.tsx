import Card from "@/components/card"
import Paginator from "@/components/pagination"
import { api } from "@/service/api"
import { Character } from "@/types/character"

export default async function Characters({ searchParams }: {
  searchParams: Promise<{ page: string }>
}
) {
  const query = await searchParams
  const queryPage = parseInt(query.page, 10)
  const limit = 20
  const response = await api('/characters', `offset=${(queryPage - 1) * limit}`)
  const characters = response.data
  const page = Math.ceil((response.offset + 1) / limit)
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-2 w-3/4 self-center">
        {characters.map((item: Character) => {
          return (
            <Card key={item.id} name={item.name} description={item.description} id={item.id} thumbnail={item.thumbnail} />
          )
        })}
      </div>
      <Paginator offset={response.offset + 1} total={response.total} count={limit} page={page} />
    </div>
  )
}