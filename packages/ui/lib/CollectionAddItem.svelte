<!--D Botón para agregar un item  -->
<script lang="ts" >
  import Icon from "./Icon.svelte"
  export let text: string = "Agregar Item" // Texto del botón
</script>

<button class="AddItem" on:click >
  <div>
    {text}
  </div>
  <Icon name="add" color="inherit" />
</button>

<style lang="scss">
  @use "../Styles/colors";
  @use "../Styles/reset";
  @import "../Styles/_item.scss";
  @import "../Styles/_sizing.scss";
  @import "../Styles/_texts.scss";

  .AddItem {
    @include reset.button;
    @include item-card;
    @include  normal-text;
    align-content: center;
    align-items: center;
    border: 2px dashed colors.$base-color-gray-60;
    color: colors.$base-color-gray-60;
    cursor: pointer;
    display: grid;
    grid-gap: sizing(3);
    justify-content: center;
    text-align: center;
    transition: all 0.3s;
    opacity: 0.7;
    :global(svg) {
      margin: 0 auto;
    }

    &:hover{
      opacity: 1;
    }
  }
</style>

<!--E
<CollectionAddItem  />
-->