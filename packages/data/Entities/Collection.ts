import type { Item } from "./Item"
import type { Collaborator } from "./Collaborator"


export type SingleCollection = {
  id: string
  name: string
  color: string
  emoji: string
  ownerId: number
  createdAt: Date
}

export type Collection = SingleCollection & {
  collaborators: Collaborator[]
  items: Item[],
}