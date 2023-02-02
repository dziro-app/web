<script lang="ts" >
  import { onMount } from "svelte";

  // Data Repositories
  import type { Collection as CollectionRepo } from "data/Repository/collection"
  import type { Item as ItemRepo } from "data/Repository/item"

  import type { Item as ItemEntity } from "data/Entities/Item"
  // Components
  import { Sidebar, Loader } from "ui"
  import SideMenu from "./SideMenu.svelte"
  import Empty from "./Empty.svelte"
  import CurrentCollection from  "./CurrentCollection.svelte"

  // Modals
  import ItemScraper from "ui/modals/ItemScraper.svelte"
  import CollectionModal from "ui/modals/Collection.svelte"
  import DeleteConfirmModal from "ui/modals/DeleteConfirm.svelte"
  import ShareCollectionModal from  "ui/modals/ShareCollection.svelte"

  // Store
  import { collectionStore } from "../../Store/collection"

  export let collectionRepo: CollectionRepo // Repositorio de colecciones
  export let itemRepo: ItemRepo // Repositorio de items

  let fetching = false

  // Flags for Collection modals
  let showCreateCollectionModal = false
  let showEditCollectionModal = false
  let showShareCollectionModal = false
  let showDeleteColletionModal = false

  // Flags for Item modals
  let showAddItemModal = false
  let editAttemptItem: ItemEntity | null = null
  let deleteItemAttemptModal: ItemEntity | null = null

  const load = async () => {
    fetching = true
    try {
      const collections = await collectionRepo.list()
      collectionStore.set(collections)
    } catch(e) {
      console.log(e)
    }
    fetching = false
  }

  onMount(() => {
    load()
  })

  $: currentCollection = $collectionStore.collections[$collectionStore.currentCollectionIndex]

  const deleteCollection = async () => {
    try {
      await collectionRepo.delete(currentCollection.id)
      collectionStore.deleteCollection(currentCollection.id)
      showDeleteColletionModal = false
    } catch (e) {
      console.log(e)
    }
  }

  const toggleBuyedItem = async(id: string) => {
    try {
      const updatedItem = await itemRepo.toggleObtained(id)
      collectionStore.update(currentCollection.id, updatedItem)
    }
    catch(e) {
      console.log(e)
    }
  }

  const deleteItem = async(item: ItemEntity) => {
    try {
      await itemRepo.delete(item.id)
      collectionStore.deleteItem(currentCollection.id, item.id)
      deleteItemAttemptModal = null
    }
    catch(e) {
      console.log(e)
    }
  }

</script>

<!-- Collection Modals -->

{#if showCreateCollectionModal}
  <CollectionModal
    mode="create"
    repository={collectionRepo}
    onSubmit={(created) => { collectionStore.addCollection(created) ;showCreateCollectionModal = false }}
    onClose={() => { showCreateCollectionModal = false }} />
{/if}

{#if showEditCollectionModal}
  <CollectionModal
    mode="edit"
    repository={collectionRepo}
    defaultValues={currentCollection}
    onSubmit={(updated) => { collectionStore.updateCollection(currentCollection.id, updated) ;showEditCollectionModal = false }}
    onClose={() => { showEditCollectionModal = false }} />
{/if}

{#if showShareCollectionModal}
  <ShareCollectionModal
    collectionRepo={collectionRepo}
    collectionId={currentCollection.id}
    onClose={ () => { showShareCollectionModal = false } }
  />
{/if}

{#if showDeleteColletionModal }
  <DeleteConfirmModal
    confirmText={`Vas a eliminar la colección "${currentCollection.name}"`}
    onClose={() => { showDeleteColletionModal = false }}
    onConfirm={deleteCollection}
  />
{/if}

<!-- Item Modals -->
{#if showAddItemModal}
  <ItemScraper
    mode="create" collectionId={currentCollection.id} itemRepo={itemRepo}
    onSubmit={(created) => { collectionStore.addItem( currentCollection.id, created); showAddItemModal = false }}
    onClose={() => { showAddItemModal = false }} />
{/if}
{#if editAttemptItem}
  <ItemScraper
    mode="edit" collectionId={currentCollection.id} itemRepo={itemRepo} defaultValues={editAttemptItem}
    onSubmit={(updated) => { collectionStore.update(currentCollection.id, updated); editAttemptItem = null }}
    onClose={() => { editAttemptItem = null }} />
{/if}

{#if deleteItemAttemptModal !== null}
<DeleteConfirmModal
  confirmText={`Vas a eliminar el artículo "${deleteItemAttemptModal.title}"`}
  onClose={() => { deleteItemAttemptModal = null }}
  onConfirm={() => { deleteItem(deleteItemAttemptModal)  }}
/>
{/if}

<!-- View content -->
{#if $collectionStore.collections.length > 0}
  <Sidebar>
    <SideMenu slot="side" onCreateClick={() => showCreateCollectionModal=true} />
    <CurrentCollection 
      onEditCollection={() => { showEditCollectionModal = true }}
      onShareCollection={() => { showShareCollectionModal = true }}
      onDeleteCollection={() => { showDeleteColletionModal = true }}
      onAddItem={() => { showAddItemModal = true }}
      onToggleObtained={(itemId) => { toggleBuyedItem(itemId) }}
      onEditIem={(item) => { editAttemptItem = item }}
      onDeleteItem={(item) => { deleteItemAttemptModal = item }}
    />
  </Sidebar>
{:else}
  {#if fetching}
    <Loader />
  {:else}
    <Empty onCreateClick={() => showCreateCollectionModal=true}  />
  {/if}
{/if}