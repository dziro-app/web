<!--D Componente de icono -->

<script lang="ts" context="module" >
  export type IconType = 
  "arrow-left-r" | 
  "smile" | 
  "spinner-alt" | 
  "add" | 
  "ShoppingBag" | 
  "chevron-down-o" | 
  "chevron-right-r" | 
  "controller" | 
  "layout-grid-small" | 
  "more-vertical-alt"|
  "more-vertical-r" | 
  "rename" | 
  "ShoppingBag" | 
  "trash-empty"

</script>
<script lang="ts">
  export let name: IconType = "more-vertical-r" // Nombre del ícono basado en clases de icomoon
  export let size = 32 // Tamaño del componente
  export let color = "#000000" // Color del componente
  export let additionalClass = "" // Extra class para el coponente
</script>

<button
  on:click
  >
  <span 
    style={`color: ${color}; font-size: ${size}px`}
    class={`icon-${name} ${additionalClass}`}>
  </span>
</button>

<style lang="scss" >
  button {
    background: transparent;
    border: none;
  }
</style>

<!--E
  <Icon name='arrow-left-r' color='#aaa' />
  <Icon name='smile' color='#aaa' />
  <Icon name='spinner-alt' color='#aaa' />
  <Icon name='add' color='#aaa' />
  <Icon name='chevron-down-o' color='#aaa' />
  <Icon name='chevron-right-r' color='#aaa' />
  <Icon name='controller' color='#aaa' />
  <Icon name='layout-grid-small' color='#aaa' />
  <Icon name='more-vertical-alt' color='#aaa' />
  <Icon name='more-vertical-r' color='#aaa' />
  <Icon name='rename' color='#aaa' />
  <Icon name='ShoppingBag' color='#aaa' />
  <Icon name='trash-empty' color='#aaa' />
-->
