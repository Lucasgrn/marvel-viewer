import Card from "@/components/card";
import { api } from "@/service/api";
import { Character } from "@/types/character";
import Link from "next/link";

export default async function Home() {
  const choose = Math.floor(Math.random() * 1000)
  const response = await api('/characters', `offset=${choose}`)
  const characters = response.data

  return (
    <section className="flex flex-col">
      <div className="flex m-4 justify-between">
        <h1 className="font-bold text-3xl">Some Characters featured in Marvel</h1>
        <button className="flex border border-black rounded-lg hover:bg-stone-600 h-auto w-35 align-middle ">
          <Link href={'/character'} className="flex justify-center align-middle h-full w-full p-2">
            <p className="mr-3">
              View all
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </button>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-2 w-3/4 self-center">
        {characters.map((item: Character) => {
          return (
            <Card key={item.id} name={item.name} description={item.description} id={item.id} thumbnail={item.thumbnail} />
          )
        })}
      </div>
    </section>
  );
}
