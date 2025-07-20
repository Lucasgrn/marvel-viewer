import { Character } from "@/types/character";
import Image from "next/image";
import Link from "next/link";

export default function Card(props: Character) {

  return (
    <Link href={`/character/${props.id}`} className="w-auto h-90 border-1 bg-neutral-700 border-neutral-400 rounded-lg m-5 ">
      <Image className="rounded-md w-full h-1/2" src={`${props.thumbnail?.path}.${props.thumbnail?.extension}`} width={200} height={200} alt={`${props.name} image`} />
      <div className="m-5">
        <h1 className="text-xl font-bold">{props.name}</h1>
        <p>{props.description.length > 1 ? props.description.slice(0, 70) + "..." : "Empty description"}</p>
      </div>
    </Link>
  )
}