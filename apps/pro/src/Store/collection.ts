import { writable } from 'svelte/store'

import type { Item } from "data/Entities/Item"
import type { Collection } from 'data/Entities/Collection'


type CollectionState = {
  collections: Collection[], // All the collections returned by the api
  currentCollectionIndex: null | number, // Id of the current collection
  currentItemId: null | string, // Id of the  current Item
}

const defaultState:CollectionState = {
  collections: [],
  currentCollectionIndex: null,
  currentItemId: null
}


// This fuction returns the collections off the current user
export const getOwnCollections = (userId: string) => {
  return function (collection: Collection) {
    return collection.owner_id === userId
  }
}

// This fuction returns the shared collections
export const getSharedCollections = (userId: string) => {
  return function (collection: Collection) {
    const collabs = collection.shared_with.filter(collaborators => (collaborators.user_id === userId))
    return collabs.length > 0
  }
}

function createCollection() {
	const { subscribe, set, update } = writable(defaultState);

  /*
    * This functions sets collections of the user
    * Receives a list of collections and split them into owned and shared
  */
  const setInitial = (initial: Collection[]) => update((state) => {
    const newState = {...state}
    newState.collections = initial
    if (newState.collections.length > 0) {
      newState.currentCollectionIndex = 0
    } 
    return newState
  })

  /*
    * This function adds a collecton to store
  */
  const addCollection = (created: Collection) => update(state => {
    const newState = {...state}
    newState.collections.push(created)
    return newState
  })

  /*
    * This function updates a collection of the store
    * Temporal solution as it does not considerate when ownership changes
  */
  const updateCollection = (id: string, updated: Collection) => update(state => {
    const collectionIndex = state.collections.findIndex(c => c.id === id)
    if (collectionIndex === -1) return state
  
    const newState = {...state}
    newState.collections[collectionIndex] = updated
    return newState
  })

  /*
    * Deletes a collection from the store  
  */
  const deleteCollection = (id: string) => update(state => {
    const collectionIndex = state.collections.findIndex(c => c.id === id)
    if (collectionIndex === -1) return state

    const newState = {...state}
    newState.collections.splice(collectionIndex, 1)
    newState.currentCollectionIndex = null
    return newState
  })

  /*
  * This function adds an item to a collection in store
  */

  const addItem = (collectionId: string, item: Item) => update(state => {
    const collectionIndex = state.collections.findIndex(c => c.id === collectionId)
    if (collectionIndex === -1) return state

    const newState = {...state}
    newState.collections[collectionIndex].items.push(item)
    return newState
  })

  /*
    * This function updates an item of a collection in the store 
  */

  const updateItem = (collectionId: string,  updated: Item) => update(state => {
    const collectionIndex = state.collections.findIndex(c => c.id === collectionId)
    if (collectionIndex === -1) return state

    const itemIndex = state.collections[collectionIndex].items.findIndex(item => item.id === updated.id)
    if (itemIndex === -1) return state
    
    const newState = {...state}
    newState.collections[collectionIndex].items[itemIndex] = updated
    return newState
  })

  /*
    * This function deletes an item of a collection in the store
  */

  const deleteItem = (collectionId: string, itemId: string) => update(state => {
    const collectionIndex = state.collections.findIndex(c => c.id === collectionId)
    if (collectionIndex === -1) return state
  
    const itemIndex = state.collections[collectionIndex].items.findIndex(item => item.id === itemId)
    if (itemIndex === -1) return state

    const newState = {...state}
    newState.collections[collectionIndex].items.splice(itemIndex, 1)
    return newState
  })

  const setCollectionIndex = (collection: Collection) => update((state) => {
    const collectionIndex = state.collections.findIndex(c => c.id === collection.id)
    if (collectionIndex === -1) return state

    const newState = {...state}
    newState.currentCollectionIndex = collectionIndex
    return newState
  })


	return {
		subscribe,
    set: setInitial,
    addCollection: addCollection,
    updateCollection:updateCollection,
    deleteCollection: deleteCollection,
    addItem: addItem,
    update: updateItem,
    deleteItem: deleteItem,
    setCollectionIndex: setCollectionIndex,
		reset: () => set(defaultState)
	};
}

export const collectionStore = createCollection();