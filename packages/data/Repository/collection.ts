import type {Collection as CollectionEntity} from "../Entities/Collection"
import type { CreateCollectionDto, UpdateCollectionDto } from "../Dtos/Collection"

export interface Collection {
  list: () => Promise<CollectionEntity[]>
  create: (data: CreateCollectionDto) => Promise<CollectionEntity>
  update: (id: string, data: UpdateCollectionDto) => Promise<CollectionEntity>
  delete: (id: string) => Promise<boolean>
}