<script lang="ts" >
  // Components
  import { CollectionDetail, CollectionItem, CollectionAddItem } from "ui"
  // Types
  import type {Option as CollectionOption} from "ui/lib/Menu.svelte"
  import type {Option as ItemOption} from "ui/lib/CollectionItem.svelte"
  import type { Collection } from "data/Entities/Collection"
  import type { Item } from "data/Entities/Item"
  // Store
  import { collectionStore } from "../../Store/collection"
  import { sessionStore } from "../../Store/session"

  // Collection Callbacks
  export let onEditCollection: () => void
  export let onShareCollection: () => void
  export let onDeleteCollection: () => void
  
  // ItemCallbacks
  export let onAddItem: () => void
  export let onEditIem: (item: Item) => void
  export let onToggleObtained: (itemId: string) => void
  export let onDeleteItem: (item: Item) => void

  let canEditCollection = true


  $: collection = $collectionStore.collections[$collectionStore.currentCollectionIndex]
  $: userId = $sessionStore.user.id

  $: {
    const me = collection.shared_with.filter(c => c.user_id === userId)
    canEditCollection = (collection.owner_id === userId || ( me.length > 0 && me[0].can_edit))
  }



  // Menus Options
  const EditCollectionOption: CollectionOption = {
    'id': 0,
    'icon': 'rename',
    'text': 'Editar', 
    onClick: onEditCollection
  }
  const ShareCollectionOption: CollectionOption = {
    'id': 1,
    'icon': 'Export',
    'text': 'Compartir', 
    onClick: onShareCollection
  }
  const DeleteCollectionOption: CollectionOption = {
    'id': 2,
    'icon': 'trash-empty',
    'text': 'Eliminar', 
    onClick: onDeleteCollection
  }

  const getCollectionMenuOptions = (collection: Collection): CollectionOption[] => {
    const menuOptions: CollectionOption[] = []
    const me = collection.shared_with.filter(c => c.user_id === userId)

    if (collection.owner_id === userId || ( me.length > 0 && me[0].can_edit)) {
      menuOptions.push(EditCollectionOption)
      menuOptions.push(ShareCollectionOption)
      menuOptions.push(DeleteCollectionOption)
    }
    return menuOptions
  }


  // Item options
  const getItemOptions = (item: Item): ItemOption[] => {
    const itemOptions: ItemOption[] = []

    if (canEditCollection) {
      itemOptions.push({
        'display': 'Editar',
        onClick: () => { onEditIem(item) }
      })
      itemOptions.push({
        'display': item.obtained ? 'Pendiente':'Comprado',
        onClick: () => {onToggleObtained(item.id) }
      })
      itemOptions.push( {
        'display': 'Eliminar',
        onClick: () => { onDeleteItem(item)}
      })
    }

    return itemOptions
  }
</script>

{#if collection}
  <CollectionDetail
    name={collection.name} 
    color={collection.color}
    emoji={collection.emoji}
    options={getCollectionMenuOptions(collection)} >
    <div class="itemList">
      {#each collection.items as item}
        <CollectionItem
          options={getItemOptions(item)}
          image={item.image}
          name={item.title}
          price={item.price}
          obtained={item.obtained}
          website={item.website}
        />
      {/each}
      {#if canEditCollection}
        <CollectionAddItem  on:click={onAddItem} />
      {/if}
    </div>
  </CollectionDetail>
{/if}


<style lang="scss" >
  @use '~ui/Styles/_sizing.scss';
  @use '~ui/Styles/_breakpoints.scss';


  .itemList {
    display: flex;
    flex-wrap: wrap;
    grid-gap: sizing.sizing(2);
  }

  @media screen and (max-width: breakpoints.$mobile) {
  .itemList {
      justify-content: center;
    }
  }
</style>