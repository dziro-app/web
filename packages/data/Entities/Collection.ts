import type { Item } from "./Item"
import type { Collaborator } from "./Collaborator"


export type SingleCollection = {
  id: string
  name: string
  color: string
  emoji: string
  owner_id: string
  created_at: Date
}

export type Collection = SingleCollection & {
  shared_with: Collaborator[]
  items: Item[],
}