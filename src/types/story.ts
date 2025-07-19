import { Character } from "./character"
import { Thumbnail } from "./thumbnail"

export interface Story {
  id: number,
  title: string,
  description: string,
  type: string,
  thumbnail: Thumbnail,
  characters: Array<Character>
  creator: Array<string>
}