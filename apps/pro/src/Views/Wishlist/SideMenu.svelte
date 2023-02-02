<script lang="ts" >
  //Components
  import { Button, Collapsable, CollectionButton } from "ui"
  import { toggleSideBar } from "ui/lib/Header.svelte"
  // Types
  import type { Collection } from "data/Entities/Collection"
  // Store
  import { sessionStore } from "../../Store/session"
  import { collectionStore, getOwnCollections, getSharedCollections } from "../../Store/collection"

  export let onCreateClick: () => void

  $: ownedCollections = $collectionStore.collections.filter(getOwnCollections($sessionStore.user.id))
  $: sharedCollections = $collectionStore.collections.filter(getSharedCollections($sessionStore.user.id))

  const selectCollection = (collection: Collection) => {
    collectionStore.setCollectionIndex(collection)
    toggleSideBar()
  }
</script>

<div class="side__content" >
  <div class='buttonsList' >
    <Button color="#000" on:click={onCreateClick} >
      Crear colección
    </Button>
  </div>

  <div id="collections" class="collectionsButtonsList">

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

<style lang="scss" >
  @use '~ui/Styles/_sizing.scss';
  @use '~ui/Styles/_breakpoints.scss';


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

  @media screen and (max-width: breakpoints.$mobile) {
    .side__content {
      #collections { 
        margin-bottom: sizing.sizing(8);
      }
    }
  }
</style>