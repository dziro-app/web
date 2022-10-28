<!--D Base para crear modales -->
<script lang="ts" >
  import { fly } from 'svelte/transition'
  export let onClose: () => void // Callback para el click en parte opaca
  export let title: string // Título del modal
  
  let ref

  const defaultClose = (e) => {
    if(ref === e.target) {
      onClose()
    }
  }
</script>

<div 
  class="Modal" 
  bind:this={ref}
  transition:fly="{{ y: -10}}"
  on:click={defaultClose}  >
  <div>
    <div class="header">
      <h3> {title} </h3>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</div>

<style lang="scss">
  @import "../Styles/_colors.scss";
  @import "../Styles/_texts.scss";
  @import "../Styles/_scroll.scss";

  @include scrollBar($smoke, $gray);

  .Modal {
    align-items: center;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 2;
  }
  .header {
    background: $black;
    box-sizing: border-box;
    padding: 16px 120px;
    h3 {
      border: 2px solid $white;
      color: $white; 
      @include title;
      padding: 16px 100px;
      margin: 0;
      text-align: center;
    }

  }

  .content {
    background: $white;
    padding: 1em;
    max-height: 60vh;
    overflow-y: scroll;
  }
</style>

<!--E
<ModalBase title='Ejemplo de modal' >
  Contenido del modal
</ModalBase> 
-->