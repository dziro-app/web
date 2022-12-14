import type {Item as ItemEntity} from "../Entities/Item"
import type { CreateItemDto, UpdateItemDto } from "../Dtos/Item"

export interface Item {
  create: (collectionId: string, data: CreateItemDto) => Promise<ItemEntity>;
  scrap: (url: string) => Promise<CreateItemDto>;
  toggleObtained: (itemId: string) => Promise<ItemEntity>;
  update: (id: string, data: UpdateItemDto) => Promise<ItemEntity>;
  delete: (id: string) => Promise<boolean>;
}