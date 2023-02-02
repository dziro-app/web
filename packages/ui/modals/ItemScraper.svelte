<script lang="ts">
  // Components
  import BaseModal from "./ModalBase.svelte"
  import Danger from "./Danger.svelte"
  import ArtileForm from "../forms/article.svelte"
  import UrlForm from "../forms/articleUrl.svelte"
  
  // Types
  import type {CreateItemDto} from "../../data/Dtos/Item"
  import type { Item as ItemEntity } from "../../data/Entities/Item"
  import type { Item as ItemRepo } from "../../data/Repository/item"

  // Component props
  export let mode: "create" | "edit"
  export let collectionId: string
  export let onClose: () => void
  export let onSubmit: (data: ItemEntity) => void
  export let defaultValues: ItemEntity | null = null
  export let itemRepo: ItemRepo

  let texts = new Map([
    ["create", {
      title: "Nuevo artículo",
      buttonText: "Crear"
    }],
    ["edit", {
      title: "Editar artículo",
      buttonText: "Editar"
    }],
  ])

  let errors = []
  let fetching = false
  let step = (defaultValues === null ? 0 : 1)

  const onUrlScraped = (values) => {
    defaultValues = values
    errors = []
    step ++
  }

  const convertItemToEdit = (item: ItemEntity) : CreateItemDto  => {
    let aux : CreateItemDto = {
      title: item.title,
      image: item.image,
      website: item.website,
      price: `${item.price}`
    }
    return aux
  }

  const createItem = async (itemDto: CreateItemDto) => {
    fetching = true
    try {
      if (mode === "create") {
        const newItem = await itemRepo.create(collectionId, itemDto)
        onSubmit(newItem)
      } else if (mode === "edit") {
        const updatedItem = await itemRepo.update(defaultValues.id, itemDto)
        onSubmit(updatedItem)
      }
    }
    catch (e) {
      errors = [e]
    }
    fetching = false
  }

</script>

<BaseModal title={texts.get(mode).title} onClose={onClose} >
  <Danger errors={errors} />

  {#if step == 0}
    <UrlForm 
      itemRepo={itemRepo}
      onSubmit={onUrlScraped}
      onError={(e) => { errors = e }}
    />
  {/if}

  {#if step == 1}
    <ArtileForm  
      onSubmit={(values) => createItem(values)} 
      onError={ (e) => errors = e}
      defaultValues={convertItemToEdit(defaultValues)}
    />
  {/if}

</BaseModal>