<script lang="ts" >
  import { Router, Route } from "svelte-navigator"
  import {Wishlist} from "ui"

  // Respositories
  import {ApiUrl} from "./Repository/api"

  import { CollectionRepo } from "./Repository/collection"
  import { ItemRepo } from "./Repository/item"
  import { FireBaseAnalytics } from "./Repository/firebase"

  // Store
  import {sessionStore} from "./Store/session"

  let cRepo
  let aRepo
  let iRepo

  $:{
    cRepo = new CollectionRepo(ApiUrl, $sessionStore.token)
    iRepo = new ItemRepo(ApiUrl, $sessionStore.token)
    aRepo = new FireBaseAnalytics()
  }
</script>

<Router basepath="/">
  <Route path="/" >
    <Wishlist 
      analyticsRepo={aRepo}
      itemRepo={iRepo} 
      collectionRepo={cRepo}
    />
  </Route>
</Router>