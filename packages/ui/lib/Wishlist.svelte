<script lang='ts'>
  import { onMount } from "svelte"

  // Entities & Dtos
  import type { CreateItemDto } from "../../data/Dtos/Item"
  import type { Item as ItemEntity } from "../../data/Entities/Item"
  import type { Collection as CollectionEntity} from "../../data/Entities/Collection"
  // Data Repositories
  import type { Collection as CollectionRepo } from "../../data/Repository/collection"
  import type { Item as ItemRepo } from "../../data/Repository/item"
  // Components
  import Button from "./Button.svelte"
  import { toggleSideBar } from "ui/lib/Header.svelte"
  import Collapsable from "./Collapsable.svelte"
  import CollectionDetail from "./CollectionDetail.svelte"
  import CollectionButton from "./CollectionButton.svelte"
  import CollectionAddItem from "./CollectionAddItem.svelte"
  import CollectionItem from "./CollectionItem.svelte"
  import SideBar from "./Sidebar.svelte"
  import type {Option} from "./Menu.svelte"
  // Modals
  import ItemExtendedModal from "../modals/ItemExtended.svelte"
  import ItemScraper from "../modals/ItemScraper.svelte"
  import CollectionModal from "../modals/Collection.svelte"
  import DeleteConfirmModal from "../modals/DeleteConfirm.svelte"
  import ShareCollectionModal from  "../modals/ShareCollection.svelte"
  // Store
  import { collectionStore } from "../../data/Store/collection"


  export let collectionRepo: CollectionRepo // Repositorio de colecciones
  export let itemRepo: ItemRepo // Repositorio de items
  export let userId: null | string = null // user Id is only present whenm there is session

  let selectedColection: number | null = null
  
  // Flags for Collection modals
  let showCreateCollectionModal = false
  let showEditCollectionModal = false
  let showShareCollectionModal = false
  // Flags for Item modals
  let showAddItemModal = false
  let showDeleteColletionModal = false
  let editAttemptItem: ItemEntity | null = null
  let deleteItemAttemptModal: ItemEntity | null = null

  $: ownedCollections = $collectionStore.filter((c) => (c.owner_id === userId))
  $: sharedCollections = $collectionStore.filter((c) => {
    const collabs = c.shared_with.filter(collaborators => (collaborators.user_id === userId))
    return collabs.length > 0
  })

  const load = async () => {
    $collectionStore = await collectionRepo.list()
    // console.log($collectionStore)
    if ( $collectionStore.length > 0) {
      selectedColection = 0
    }
  }

  const selectCollection = (collection: CollectionEntity) => {
    const index = $collectionStore.findIndex(c => c.id === collection.id)
    selectedColection = index; 
    toggleSideBar()
  }

  const deleteCollection = async () => {
    const current = $collectionStore[selectedColection]

    try {
      await collectionRepo.delete(current.id)
      collectionStore.deleteCollection(current.id)
      if ( $collectionStore.length > 0) {
        selectedColection = 0
      } else {
        selectedColection = null
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
      collectionStore.update($collectionStore[selectedColection].id, updated)
      editAttemptItem = null
    }
    catch (e) {
      console.log(e)
    }
    
  }

  const toggleBuyedItem = async(id: string) => {
    try {
      const updatedItem = await itemRepo.toggleObtained(id)
      collectionStore.update($collectionStore[selectedColection].id, updatedItem)
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

  // Menus Options
  const EditOption: Option = {
    'id': 0,
    'icon': 'rename',
    'text': 'Editar', 
    onClick: ()=>{ showEditCollectionModal = true }
  }
  const ExportOption: Option = {
    'id': 1,
    'icon': 'Export',
    'text': 'Compartir', 
    onClick: () => { showShareCollectionModal = true }
  }
  const DeleteOption: Option = {
    'id': 2,
    'icon': 'trash-empty',
    'text': 'Eliminar', 
    onClick: () => { showDeleteColletionModal = true }
  }

  const getCollectionMenuOptions = (collection: CollectionEntity): Option[] => {
    const menuOptions: Option[] = []

    if (collection.owner_id === userId) {
      menuOptions.push(EditOption)
      menuOptions.push(ExportOption)
      menuOptions.push(DeleteOption)
    } else {

      const me = collection.shared_with.filter(c => c.user_id === userId)
      if (me.length > 0) {
        if (me[0].can_edit) {
          menuOptions.push(EditOption)
          menuOptions.push(ExportOption)
          menuOptions.push(DeleteOption)
        }
      }
    }

    return menuOptions
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

  onMount(() => {
    load()
  })

</script>

<div id='WhishListsView' >
  <!-- Modals -->
  {#if showCreateCollectionModal}
    <CollectionModal
      mode="create"
      repository={collectionRepo}
      onSubmit={() => { showCreateCollectionModal = false; if(selectedColection === null) selectedColection = 0 }}
      onClose={() => { showCreateCollectionModal = false }} />
  {/if}

  {#if showEditCollectionModal}
    <CollectionModal
      mode="edit"
      repository={collectionRepo}
      defaultValues={$collectionStore[selectedColection]}
      onSubmit={() => { showEditCollectionModal = false }}
      onClose={() => { showEditCollectionModal = false }} />
  {/if}

  {#if showShareCollectionModal}
    <ShareCollectionModal
      collectionRepo={collectionRepo}
      collectionId={$collectionStore[selectedColection].id}
      onClose={ () => { showShareCollectionModal = false } }
    />
  {/if}

  {#if !userId}
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
        mode="create"
        collectionId={$collectionStore[selectedColection].id}
        itemRepo={itemRepo}
        onSubmit={(created) => { collectionStore.addItem($collectionStore[selectedColection].id, created); showAddItemModal = false  }}
        onClose={() => { showAddItemModal = false }} />
    {/if}
    {#if editAttemptItem}
      <ItemScraper
        mode="edit"
        itemRepo={itemRepo}
        defaultValues={editAttemptItem}
        collectionId={$collectionStore[selectedColection].id}
        onSubmit={(updated) => { collectionStore.update($collectionStore[selectedColection].id, updated); showAddItemModal = false  }}
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
  {#if selectedColection !== null}
    <SideBar>
      <div slot="side" class="side__content" >
        <div class='buttonsList' >
          <Button color="#000" on:click={() => showCreateCollectionModal=true} >
            Crear colección
          </Button>
        </div>
        <div class="collectionsButtonsList">
  
          {#if ownedCollections.length > 0}
            <Collapsable title="Mis colecciones" isOpen={true} >
              <div class="collectionsButtonsList">
                {#each ownedCollections as collection}
                  <CollectionButton 
                    name={collection.name} 
                    color={collection.color}
                    emoji={collection.emoji}
                    on:click={() => { selectCollection(collection) }} />
                {/each}
              </div>
            </Collapsable>
          {/if}
  
          {#if sharedCollections.length > 0}
            <Collapsable title="Compartidas">
              <div class="collectionsButtonsList">
                {#each sharedCollections as collection}
                  <CollectionButton 
                    name={collection.name} 
                    color={collection.color}
                    emoji={collection.emoji}
                    on:click={() => { selectCollection(collection) }} />
                {/each}
              </div>
            </Collapsable>
          {/if}
        </div>
      </div>
      <CollectionDetail
        name={$collectionStore[selectedColection].name} 
        color={$collectionStore[selectedColection].color}
        emoji={$collectionStore[selectedColection].emoji}
        options={getCollectionMenuOptions($collectionStore[selectedColection])} >
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
    </SideBar>
    
  {:else}
    <div class="empty__whislists">
      <h1> Bienvenido </h1>

      <p> Empieza creando una nueva colección </p>

      <div>
        <Button color="#000" on:click={() => showCreateCollectionModal=true} >
          Crear colección
        </Button>
      </div>
    </div>
  {/if}


</div>

<style lang='scss' >
  @use '../Styles/_colors.scss';
  @use '../Styles/_breakpoints.scss';
  @use '../Styles/_sizing.scss';
  @use '../Styles/_texts.scss';

  #WhishListsView {

    .empty__whislists {
      text-align: center;
      display: grid;
      height: 100%;
      h1 {
        @include texts.title;
        align-self: center;
      }
      p {
        @include texts.normal-text;
      }
    }

    .side__content {
      .buttonsList {
        display: flex;
        align-content: center;
        justify-content: center;
        padding: 32px 0;
      }
      .collectionsButtonsList {
        text-align: center;
        display: grid;
        grid-row-gap: sizing.sizing(2);
        margin: sizing.sizing(2) 0;
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

      .side__content {
        .collectionsButtonsList { 
          margin-bottom: sizing.sizing(8);
        }
      }
      .itemList {
        justify-content: center;
      }
    }
  }
</style>