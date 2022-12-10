<!--D Componente para manejar un menú -->
<script context="module" lang="ts" >
  import type { IconType } from "./Icon.svelte"
  export type Option = {
    id: number,
    text: string,
    icon?: IconType,
    onClick: Function
  }

</script>

<script lang="ts" >
  import { fly } from "svelte/transition"
  import Icon from "./Icon.svelte"


  export let options: Option[] // Opciones a mostrar en el menú
  export let onClick: undefined | Function // Callback para la selección de una opción

</script>

<div class="Menu" transition:fly="{{ y: -10 }}">
  { #each options as option }
    <button class="option" on:click={() => {
      if(option.onClick) { option.onClick() }
      if(onClick) { onClick(option) }
    }} >
      {#if option.icon}
        <Icon color="inherit" size={16} name={option.icon} />
      {/if}
      <div class="text" > {option.text} </div>
  </button>
  {/each}
</div>

<style lang="scss">
  @use "../Styles/colors.scss";
  @use '../Styles/reset';
  @import "../Styles//sizing";
  @import "../Styles/_texts.scss";

  .Menu {
    background: colors.$base-color-black-100;
    box-sizing: border-box;
    border-radius: 4px;
    padding: sizing(1) 0;
    .option {
      @include reset.button;

      color: colors.$base-color-white-100;
      display: flex;
      align-items: center;
      grid-column-gap: sizing(1);
      padding: sizing(1);
      width: 100%;
      &:hover {
        background: colors.$base-color-white-100;
        color: colors.$base-color-black-100;
      }

      .text {
        cursor: default;
        @include small-text;
      }
    }
  }
</style>

<!--E
<Menu 
  onClick={(o) => { alert(o.id) }} 
  options={[{'id': 0, 'text': 'Editar', 'icon': 'rename'}, {'id': 1, 'text': 'Eliminar', 'icon': 'trash-empty'}]} 
/>
-->