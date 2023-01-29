<script>
  import {Logo} from "ui"
  // Common components
  import LogoDoc from "./Docs/Pages/Logo.svelte"
  import Icon from "./Docs/Pages/Icon.svelte"
  import Loader from "./Docs/Pages/Loader.svelte"
  import Button from "./Docs/Pages/Button.svelte"
  import Menu from "./Docs/Pages/Menu.svelte"
  import UserMenu from "./Docs/Pages/UserMenu.svelte"
  import Header from "./Docs/Pages/Header.svelte"
  import Collapsable from "./Docs/Pages/Collapsable.svelte"

  // Collection
  import CollectionButton from "./Docs/Pages/CollectionButton.svelte"
  import CollectionDetail from "./Docs/Pages/CollectionDetail.svelte"
  import CollectionAddItem from "./Docs/Pages/CollectionAddItem.svelte"
  import CollectionItem from "./Docs/Pages/CollectionItem.svelte"

  // Inputs
  import InputText from "./Docs/Pages/InputText.svelte"
  import InputColor from "./Docs/Pages/InputColor.svelte"
  import InputEmoji from "./Docs/Pages/InputEmoji.svelte"


  let CurrentComponent = Collapsable
  
  const componentMap = [{
    name: "Logo",
    component: LogoDoc
  }, {
    name: "Icon",
    component: Icon
  }, {
    name: "Loader",
    component: Loader
  }, {
    name: "Button",
    component: Button
  }, {
    name: "Menu",
    component: Menu
  }, {
    name: "UserMenu",
    component: UserMenu
  }, {
    name: "Header",
    component: Header
  }, {
    name: "Collapsable",
    component: Collapsable
  }, {
    name: "CollectionButton",
    component: CollectionButton
  }, {
    name: "CollectionDetail",
    component: CollectionDetail
  },  {
    name: "CollectionItem",
    component: CollectionItem
  }, {
    name: "CollectionAddItem",
    component: CollectionAddItem
  }, {
    name: "InputText",
    component: InputText
  }, {
    name: "InputColor",
    component: InputColor
  }, {
    name: "InputEmoji",
    component: InputEmoji
  }]


  const seeComponent = (index) => {
    CurrentComponent = componentMap[index].component
  }
</script>

<main>
  <div class="left">
    <Logo />
    {#each componentMap as compo, i}
      <button on:click={ () => {seeComponent(i)}} > {compo.name} </button>
    {/each}
  </div>
  <div class="right">
    <svelte:component this={CurrentComponent}/>
  </div>
</main>

<style lang='scss'>
  @use "~ui/Styles/_colors.scss";
  @use "~ui/Styles/_reset.scss";
  @use "~ui/Styles/_texts.scss";

  :global(body) {
    margin: 0;
    padding: 0;
  }

  main {
    display: grid;
    grid-template-columns: 260px 1fr;
  
    .left {
      background: colors.$black;
      color: colors.$smoke;
      min-height: 100vh;
      padding: 1em;
      button {
        @include reset.button;
        @include texts.normal-text;
  
        color: colors.$base-color-gray-60;
        cursor: pointer;
        display: block;
        text-align: left;
        width: 100%;
        &:hover {
          color: colors.$white;
        }
      }
    }
  }
</style>

