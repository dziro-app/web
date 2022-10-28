<script lang="ts">
  import {Header, Wishlist} from "ui"
  import {CollectionRepo} from "./Repository/collection"
  import {ItemRepo} from "./Repository/item"
  import { FireBaseAnalytics } from "./Repository/firebase"


  const aRepo = new FireBaseAnalytics()
  const cRepo = new CollectionRepo()
  const iRepo = new ItemRepo()
</script>

<main>
  <Header />
  <Wishlist 
    analyticsRepo={aRepo}
    itemRepo={iRepo} 
    collectionRepo={cRepo} />
</main>

<style global lang="scss">
  @use "~ui/Styles/_scroll.scss";
  @use "~ui/Styles/_colors.scss";

  @include scroll.scrollBar(colors.$smoke, colors.$gray);

  main {
    display: grid;
    grid-template-rows: 65px 1fr;
    height: 100vh;
  }
</style>