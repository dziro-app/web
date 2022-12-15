import type { CreateItemDto, UpdateItemDto } from "data/Dtos/Item";
import type {  Item as ItemEntity } from "data/Entities/Item";
import type { Item } from "data/Repository/item"
import { Fetch } from "./fetch";

const API_PATH = "/items"

export class ItemRepo extends Fetch implements Item {
  constructor(base: string, token: string) {
    super(base, token)
  }

  scrap = (url: string): Promise<CreateItemDto> => {
    return this.post(`${API_PATH}/scrap`, {url})
  }
  
  create = (collectionId: string, data: CreateItemDto) : Promise<ItemEntity> => {
    return this.post(`${API_PATH}/${collectionId}`, data)
  }
  
  toggleObtained = (itemId: string): Promise<ItemEntity> => {
    return this.patch(`${API_PATH}/${itemId}/toggle_obtained`)
  }

  update = (id: string, data: UpdateItemDto) : Promise<ItemEntity> =>  {
    return this.patch(`${API_PATH}/${id}`, data)
  }

  delete = (id: string): Promise<boolean> => {
    return this.remove(`${API_PATH}/${id}`)
  };
}