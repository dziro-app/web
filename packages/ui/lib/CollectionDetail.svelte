<!--D Componente para preview de una colección -->
<script lang="ts">
  import { fly } from 'svelte/transition'
  import Icon from "./Icon.svelte"
  import {getUiColors} from "../Utils/colors"

  import Menu from "./Menu.svelte"
  import type {Option} from "./Menu.svelte"


  export let name: string // Nombre de la colección
  export let color: string // Color de la colección
  export let emoji: string // Emoji de la colección
  export let options: Array<Option> = [] // Array de opciones para el menú

  let showOptions = false
  let colors = getUiColors(color)

  const onDefaultOptionClick = () => {
    showOptions=false
  }

  $: {
    colors = getUiColors(color)
  }


</script>

<div style={`background: ${colors.background}; height: 100%`}>
  <div 
    class="header"
    style={`background: ${colors.main}`}>
    <div class="iconWrapper">
      {emoji}
    </div>
    <h3 style={`color: ${colors.text}`} > 
      {name}
    </h3>
    <div class="menu">
      <div class="trigger">
        <Icon 
          on:click={() => { showOptions = !showOptions }}
          color={colors.text} />
      </div>
        {#if showOptions}
        <div class="options">
          <Menu options={options} onClick={onDefaultOptionClick} />
        </div>
      {/if}
    </div>
  </div>

  <div class="content">
    <slot></slot>
  </div>
</div>

<style lang="scss">
  @use "../Styles/colors.scss";
  @import "../Styles/_texts.scss";
  @import "../Styles/_sizing.scss";

  .header {
    align-items: center;
    box-shadow: 0 4px 4px rgba(0,0,0,0.06);
    display: grid;
    grid-template-columns: 36px 1fr 20px;
    padding: 24px;
    position: relative;
    z-index: 1;

    .iconWrapper {
      align-items: center;
      background: colors.$base-color-white-100;
      border-radius: 50%;
      display: flex;
      font-size: 24px;
      height: 36px;
      justify-content: center;
      width: 36px;
    }
    h3 {
      font-size: 36px;
      font-family: 'Raleway', sans-serif;
      margin: 0;
      margin-left: 16px;
    }

    .menu {
      position: relative;
    }

    .trigger {
      opacity: 0.6;
    }

    .options {
      position: absolute;
      right: 0;
      top: 100%;
    }

    &:hover {
      .trigger {
        opacity: 1;
      }
    }
    
  }

  .content {
    padding: sizing(6) sizing(4);
  }
</style>

<!--E
<CollectionDetail 
  name='Ropa' color='#EDE63E' emoji='👕'
  options={[{'id': 0, 'text': 'Editar', 'icon': 'rename', 'onClick': () => { console.log('Editar') }}, {'id': 1, 'text': 'Eliminar', 'icon': 'trash-empty', 'onClick': () => { console.log('Eliminar') }}]} >
  Con un solo color calculamos el resto.
</CollectionDetail>
-->