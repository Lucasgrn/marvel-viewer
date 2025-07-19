import { Thumbnail } from "./thumbnail"

export interface Comic {
  id: number,
  title: string,
  description: string,
  thumbnail: Thumbnail,
}