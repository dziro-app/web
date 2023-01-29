<!--D Componente para seleccionar una colección -->
<script lang="ts" >
  import Icon from "./Icon.svelte"
  import {getUiColors} from "../Utils/colors"

  export let name: string // Nombre de la colección
  export let color: string // Color de la colección
  export let emoji: string // Emoji de la colección

</script>

<button
  on:click
  class="CollectionButton"
  style={`background: ${color}`}>
  <div class="iconWrapper">
    {emoji}
  </div>
  <div 
    class="name"
    style={`color: ${getUiColors(color).text}`} >
    {name}
  </div> 
  <div class="move_trigger" >
    <Icon name="layout-grid-small" color={getUiColors(color).text} />
  </div>
</button>

<style lang="scss" >
  @use '../Styles/reset';
  @import "../Styles/_colors.scss";
  @import "../Styles/_texts.scss";

  .CollectionButton {
    @include reset.button;

    align-items: center;
    border-radius: 5px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.05);
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 30px 1fr 1fr;
    transition: all 0.3s;
    padding: 12px 16px;

    &:hover {
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    }
  }

  .iconWrapper {
    align-items: center;
    background: $white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    height: 29px;
    width: 29px;
  }

  .name {
    @include normal-text;
    margin-left: 16px;
    cursor: default;
    justify-self: flex-start;
  }

  .move_trigger {
    justify-self: flex-end;
  }
</style>

<!--E
<CollectionButton name='Bandeja' color='#8D61EB' emoji='📥' />
<br>
<CollectionButton name='Ropa' color='#EDE63E' emoji='👕' />
<br>
<CollectionButton name='Libros' color='#1C84FF' emoji='📚' />
<br>
<CollectionButton name='Navidad' color='#E45264' emoji='🎄' />
-->
