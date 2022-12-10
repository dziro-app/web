<script lang="ts">
  import BaseModal from "./ModalBase.svelte"

  export let onClose: () => void
</script>

<BaseModal title="Nuevo artículo" onClose={onClose} >
  <p>Agrega la url del artículo</p>
</BaseModal>