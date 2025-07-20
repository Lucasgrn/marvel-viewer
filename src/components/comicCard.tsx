import { Comic } from "@/types/comic";
import Image from "next/image";

export default function ComicCard(props: Comic) {

  return (
    <div className="w-auto h-110 border-1 border-neutral-400 rounded-lg bg-neutral-700 m-5 ">
      <Image className="rounded-md w-full h-1/2" src={`${props.thumbnail?.path}.${props.thumbnail?.extension}`} width={200} height={200} alt={`${props.title} image`} />
      <div className="m-5">
        <h1 className="text-xl font-bold">{props.title}</h1>
        <p>{props.description.length < 1 ? props.description.slice(0, 90) + "..." : "Empty description"}</p>
      </div>
    </div>
  )
}