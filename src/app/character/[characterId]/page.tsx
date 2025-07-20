import ComicCard from "@/components/comicCard"
import { api } from "@/service/api"
import { Comic } from "@/types/comic"
import Image from "next/image"

export default async function name({ params }: {
  params: Promise<{ characterId: number }>
}) {
  const data = await params
  const characterId = data.characterId

  const response = await api(`/characters/${characterId}`)
  const comicsResponse = await api(`/characters/${characterId}/comics`, 'limit=8')
  const comics = comicsResponse.data
  const details = response.data[0]
  return (
    <div className="flex flex-col">
      <div className="border-b-1 border-neutral-400 bg-neutral-900 p-5">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 w-3/4 self-center">
          <Image className="rounded-4xl" src={`${details.thumbnail?.path}.${details.thumbnail?.extension}`} width={300} height={300} alt={`${details.name} image`} />
          <div>
            <div className="flex">
              <h1 className="font-bold text-2xl mr-2">Name: </h1>
              <p className="self-end text-xl">{details.name}</p>
            </div>
            <div>
              <h1 className="font-bold text-2xl mr-2">Description: </h1>
              <p className="self-end text-xl text-justify">{details.description.length > 0 ? details.description : 'Empty description'}</p>
            </div>
          </div>
        </div>
      </div>
      {comics.length > 0 &&
        <>
          <div className="m-4">
            <h1 className="font-bold text-3xl">Comics featuring {details.name}</h1>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-2 w-3/4 self-center">
            {comics.map((item: Comic) => {
              return (
                <ComicCard key={item.id} title={item.title} description={item.description} thumbnail={item.thumbnail} id={item.id} />
              )
            })}
          </div>
        </>
      }
    </div>
  )
}