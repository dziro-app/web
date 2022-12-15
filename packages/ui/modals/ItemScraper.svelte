<script lang="ts">
  // Components
  import BaseModal from "./ModalBase.svelte"
  import Danger from "./Danger.svelte"
  import ArtileForm from "../forms/article.svelte"
  import UrlForm from "../forms/articleUrl.svelte"
  
  // Types
  import type {CreateItemDto} from "../../data/Dtos/Item"
  import type { Item as ItemRepo } from "../../data/Repository/item"

  // Component props
  export let title: string = "Nuevo artículo"
  export let onClose: () => void
  export let onSubmit: (data: CreateItemDto) => void
  export let defaultValues: CreateItemDto | null = null
  export let itemRepo: ItemRepo

  let errors = []
  let step = (defaultValues === null ? 0 : 1)

  const onUrlScraped = (values) => {
    defaultValues = values
    errors = []
    step ++
  }

</script>

<BaseModal title={title} onClose={onClose} >
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
      onSubmit={(values) => onSubmit(values)} 
      onError={ (e) => errors = e}
      defaultValues={defaultValues}
    />
  {/if}

</BaseModal>