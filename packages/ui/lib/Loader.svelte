<!--D Componente de loader -->
<script lang="ts">
  export let size = 24 // Tamaño del loader
  export let color = "#000" // Color del loader
  import Icon from "./Icon.svelte"
</script>

<div 
  class="Loader"
  style={`height: ${size+8}px; width: ${size+8}px;`}>
  <Icon size={size} color={color} name="spinner-alt" />
</div>

<style lang="scss" >

  @keyframes spinAround {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
  }
  
  .Loader {
    animation: 1s linear 0s normal none infinite spinAround;
    // border: 1px solid red;
    text-align: left;
  }
</style>

<!--E
 <Loader size={30} />
 <Loader size={20} color='red' />
 <Loader size={10} color='green' />
-->