<script lang="ts">
  import {Button} from "../index"
  import BaseModal from "./ModalBase.svelte"

  export let onClose: () => void
  export let onConfirm: () => void
  export let confirmText: string
  

</script>

<BaseModal title="Eliminar" onClose={onClose} >
  <p> {confirmText} </p>
  <p>
    ¿Estás seguro que desea continuar?
  </p>
  <div class="buttonWrapper">
    <Button type="button" on:click={onClose} > Cancelar </Button>  
    <Button type="button" on:click={onConfirm}> Eliminar </Button>  
  </div>

</BaseModal>

<style lang="scss">
  @use "../Styles/texts";
  
  p {
    @include texts.subtitle;
    text-align: center;
  }

  .buttonWrapper {
    margin: 8px 0;
    text-align: center;
  }

</style>