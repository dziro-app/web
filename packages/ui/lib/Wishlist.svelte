<script lang='ts'>
  import { onMount } from "svelte"

  // Entities & Dtos
  import type { CreateCollectionDto } from "../../data/Dtos/Collection"
  import type { CreateItemDto } from "../../data/Dtos/Item"
  import type { Item as ItemEntity } from "../../data/Entities/Item"
  // Data Repositories
  import type { Collection as CollectionRepo } from "../../data/Repository/collection"
  import type { Item as ItemRepo } from "../../data/Repository/item"
  // Components
  import Button from "./Button.svelte"
  import CollectionDetail from "./CollectionDetail.svelte"
  import CollectionButton from "./CollectionButton.svelte"
  import CollectionAddItem from "./CollectionAddItem.svelte"
  import CollectionItem from "./CollectionItem.svelte"
  import type {Option} from "./Menu.svelte"
  // Modals
  import ItemExtendedModal from "../modals/ItemExtended.svelte"
  import ItemScraper from "../modals/ItemScraper.svelte"
  import CollectionModal from "../modals/Collection.svelte"
  import DeleteConfirmModal from "../modals/DeleteConfirm.svelte"
  // Store
  import { collectionStore } from "../../data/Store/collection"

  export let collectionRepo: CollectionRepo // Repositorio de colecciones
  export let itemRepo: ItemRepo // Repositorio de items
  export let isUserFree: boolean = true

  let selectedColection: number | null = null
  let showMobileSideBar = false
  
  // Flags for modals
  let showCreateModal = false
  let showEditModal = false
  let showAddItemModal = false
  let showDeleteColletionModal = false
  let editAttemptItem: ItemEntity | null = null
  let deleteItemAttemptModal: ItemEntity | null = null

  const load = async () => {
    $collectionStore = await collectionRepo.list()
    if ( $collectionStore.length > 0) {
      selectedColection = 0
    }
  }

  const createCollection = async (data: CreateCollectionDto) => {
    try {
      const created = await collectionRepo.create(data)
      collectionStore.addCollection(created)
      showCreateModal = false
    }
    catch (e) {
      console.log(e)
    }
  }

  const editCollection = async(data: CreateCollectionDto) => {
    try {
      let current = $collectionStore[selectedColection]
      const updated = await collectionRepo.update(current.id, data)
      collectionStore.updateCollection(selectedColection, updated)
      showEditModal = false
    } catch (e) {
      console.log(e)
    }
  }

  const deleteCollection = async () => {
    const current = $collectionStore[selectedColection]

    try {
      await collectionRepo.delete(current.id)
      collectionStore.deleteCollection(current.id)
      if ( $collectionStore.length > 0) {
        selectedColection = 0
      }
      showDeleteColletionModal = false
    } catch (e) {
      console.log(e)
    }
  }

  const createItem = async (data: CreateItemDto) => {
    let current = $collectionStore[selectedColection]
    
    try {
      const newItem = await itemRepo.create(current.id, data)

      collectionStore.addItem(current.id, newItem)
      showAddItemModal = false  
    }
    catch (e) {
      console.log(e)
    }
  }

  const updateItem = async(data: CreateItemDto) => {
    try {
      const updated = await itemRepo.update(editAttemptItem.id, data)
      collectionStore.update(selectedColection, updated)
      editAttemptItem = null
    }
    catch (e) {
      console.log(e)
    }
    
  }

  const toggleBuyedItem = async(id: string) => {
    try {
      const updatedItem = await itemRepo.toggleObtained(id)
      collectionStore.update(selectedColection, updatedItem)
    }
    catch(e) {
      console.log(e)
    }
  }

  const deleteItem = async(item: ItemEntity) => {
    let current = $collectionStore[selectedColection]
    try {
      await itemRepo.delete(item.id)
      collectionStore.deleteItem(current.id, item.id)
      deleteItemAttemptModal = null
    }
    catch(e) {
      console.log(e)
    }
  }

  const menuOptions: Option[] = [{
    'id': 0,
    'icon': 'rename',
    'text': 'Editar', 
    onClick: ()=>{ showEditModal = true }
  }, {
    'id': 1,
    'icon': 'trash-empty',
    'text': 'Eliminar', 
    onClick: () => { showDeleteColletionModal = true }
  }]

  const convertItemToEdit = (item: ItemEntity) : CreateItemDto  => {
    let aux : CreateItemDto = {
      title: item.title,
      image: item.image,
      website: item.website,
      price: `${item.price}`
    }
    return aux
  }

  onMount(() => {
    load()
    window.addEventListener("handleSideBar", () => {
      showMobileSideBar = !showMobileSideBar
    })
  })

</script>

<div id='WhishListsView' >
  <!-- Modals -->
  {#if showCreateModal}
    <CollectionModal
      defaultValues={null}
      onSubmit={createCollection}
      onClose={() => { showCreateModal = false }} />
  {/if}

  {#if showEditModal}
    <CollectionModal
      submitText="GUARDAR"
      title="Editar colección"
      defaultValues={$collectionStore[selectedColection]}
      onSubmit={editCollection}
      onClose={() => { showEditModal = false }} />
  {/if}

  {#if isUserFree}
    {#if showAddItemModal}
      <ItemExtendedModal
        onSubmit={createItem}
        onClose={() => { showAddItemModal = false }} />
    {/if}
    {#if editAttemptItem}
      <ItemExtendedModal
        title="Editar artículo"
        defaultValues={convertItemToEdit(editAttemptItem)}
        onSubmit={updateItem}
        onClose={() => { editAttemptItem = null }} />
    {/if}
  {:else}
    {#if showAddItemModal}
      <ItemScraper
        itemRepo={itemRepo}
        onSubmit={createItem}
        onClose={() => { showAddItemModal = false }} />
    {/if}
    {#if editAttemptItem}
      <ItemScraper
        title="Editar artículo"
        defaultValues={convertItemToEdit(editAttemptItem)}
        itemRepo={itemRepo}
        onSubmit={updateItem}
        onClose={() => { editAttemptItem = null }} />
    {/if}
  {/if}

  {#if deleteItemAttemptModal !== null}
    <DeleteConfirmModal
      confirmText={`Vas a eliminar el artículo "${deleteItemAttemptModal.title}"`}
      onClose={() => { deleteItemAttemptModal = null }}
      onConfirm={() => { deleteItem(deleteItemAttemptModal)  }}
    />
  {/if}

  {#if showDeleteColletionModal }
    <DeleteConfirmModal
      confirmText={`Vas a eliminar la colección "${$collectionStore[selectedColection].name}"`}
      onClose={() => { showDeleteColletionModal = false }}
      onConfirm={deleteCollection}
    />
  {/if}

  <!-- Content Layout -->

  <div class='collectionList' class:show={showMobileSideBar} >
    <div class='buttonsList' >
      <Button color="#000" on:click={() => showCreateModal=true} >
        Crear colección
      </Button>
    </div>
    <h2> Colecciones </h2>
    <div class="collectionsButtonsList">
      {#each $collectionStore as collection, i}
        <CollectionButton 
          name={collection.name} 
          color={collection.color}
          emoji={collection.emoji}
          on:click={() => { selectedColection = i; showMobileSideBar = false }} />
      {/each}
    
    </div>
  </div>


  {#if selectedColection !== null}
    <CollectionDetail 
      name={$collectionStore[selectedColection].name} 
      color={$collectionStore[selectedColection].color}
      emoji={$collectionStore[selectedColection].emoji}
      options={menuOptions} >
      <div class="itemList">
        {#each $collectionStore[selectedColection].items as item}
        <CollectionItem
          options={[{
            'display': 'Editar',
            onClick: () => { editAttemptItem = item }
          }, {
            'display': item.obtained ? 'Pendiente':'Comprado',
            onClick: () => {toggleBuyedItem(item.id)}
          }, {
            'display': 'Eliminar',
            onClick: () => { deleteItemAttemptModal = item }
          }]}
          image={item.image}
          name={item.title}
          price={item.price}
          obtained={item.obtained}
          website={item.website}
        />
        {/each}
        <CollectionAddItem  on:click={() => { showAddItemModal = true }} />
      </div>
    </CollectionDetail> 
  {/if}


</div>

<style lang='scss' >
  @use '../Styles/_colors.scss';
  @use '../Styles/_breakpoints.scss';
  @use '../Styles/_sizing.scss';

  @import '../Styles/_texts.scss';

  #WhishListsView {
    display: grid;
    grid-template-columns: 250px 1fr;
    .collectionList {
      background: colors.$white;
      box-sizing: border-box;
      padding: sizing.sizing(2);
      box-shadow: inset -2px 0 8px #cacaca;
      h2 {
        @include title;
        color: colors.$gray;
      }

      .buttonsList {
        display: flex;
        align-content: center;
        justify-content: center;
      }
      .collectionsButtonsList {
        text-align: center;
        display: grid;
        grid-row-gap: 16px;
        margin: 16px 0;
      }
    }

    .itemList {
      display: flex;
      flex-wrap: wrap;
      grid-gap: sizing.sizing(2);
    }
  }

  @media screen and (max-width: breakpoints.$mobile) {
    #WhishListsView {
      grid-template-columns: 1fr;

      .collectionList {
        background: colors.$white;
        position: fixed;
        z-index: 3;
        height: calc(100vh - sizing.$nav-height);
        transform: translate3d(-100%, 0, 0);
        transition: all 0.4s;
        overflow-x: scroll;
        width: 100%;
        &.show {
          display: block;
          transform: translate3d(0, 0, 0);
        }
      }
      .itemList {
        justify-content: center;
      }
    }
  }
</style>