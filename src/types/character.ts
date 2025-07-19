import { Thumbnail } from "./thumbnail";

export interface Character {
  id: number,
  name: string,
  description: string,
  thumbnail?: Thumbnail,
}