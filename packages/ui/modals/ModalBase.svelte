<!--D Base para crear modales -->
<script lang="ts" >
  import { fly } from 'svelte/transition'
  import Icon from "../lib/Icon.svelte"
  export let onClose: () => void // Callback para el click en parte opaca
  export let title: string // Título del modal

  const checkEscKeyAndClose = (e) => {
    if (e.code === "Escape") {
      onClose()
    }
  }
</script>

<div 
  class="Modal" 
  transition:fly="{{ y: -10}}"
  on:keydown={checkEscKeyAndClose}
  >
  <div>
    <div class="header">
      <div class="close">
        <Icon on:click={onClose} size={25} color="inherit" name="XCircle"/>
      </div>
      <h3> {title} </h3>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</div>

<style lang="scss">
  @use "../Styles/colors";
  @import "../Styles/_colors.scss";
  @import "../Styles/_texts.scss";
  @import "../Styles/_scroll.scss";

  @include scrollBar(colors.$smoke, colors.$gray);

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
    position: relative;

    .close {
      color: colors.$white;
      position: absolute;
      right: 10px;
      top: 10px;
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    }
    h3 {
      color: colors.$white; 
      @include title;
      padding: 16px 100px;
      margin: 0;
      text-align: center;
    }

  }

  .content {
    background: colors.$white;
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