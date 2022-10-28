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
  export let name: IconType = "more-vertical-r"
  export let size = 32
  export let color = "#000000"
  export let additionalClass = "" // Extra class par ael coponente
</script>

<span 
  on:click
  style={`color: ${color}; font-size: ${size}px`}
  class={`icon-${name} ${additionalClass}`}>
</span>

<!--E
  <Icon name='arrow-left-r' />
  <Icon name='smile' />
  <Icon name='spinner-alt' />
  <Icon name='add' />
  <Icon name='chevron-down-o' />
  <Icon name='chevron-right-r' />
  <Icon name='controller' />
  <Icon name='layout-grid-small' />
  <Icon name='more-vertical-alt' />
  <Icon name='more-vertical-r' />
  <Icon name='rename' />
  <Icon name='ShoppingBag' />
  <Icon name='trash-empty' />
-->
