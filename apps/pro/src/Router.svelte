<script lang="ts" >
  import { Router, Route } from "svelte-navigator"
  // import {Wishlist} from "ui"
  import Wishlist from "./Views/Wishlist/Main.svelte"

  // Respositories
  import {ApiUrl} from "./Repository/api"

  import { CollectionRepo } from "./Repository/collection"
  import { ItemRepo } from "./Repository/item"

  // Store
  import {sessionStore} from "./Store/session"

  let cRepo
  let iRepo

  $:{
    cRepo = new CollectionRepo(ApiUrl, $sessionStore.token)
    iRepo = new ItemRepo(ApiUrl, $sessionStore.token)
  }
</script>

<Router basepath="/">
  <Route path="/" >
    <Wishlist
      itemRepo={iRepo} 
      collectionRepo={cRepo} />
  </Route>
</Router>