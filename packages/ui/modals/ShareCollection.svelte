<script lang="ts">
  // Components
  import BaseModal from "./ModalBase.svelte"
  import Danger from "./Danger.svelte"
  import EmailForm from "../forms/shareByEmail.svelte"
  import type { Collection as CollectionRepo } from "../../data/Repository/collection"

  export let collectionRepo: CollectionRepo

  // Component props
  export let title: string = "Compartir"
  export let collectionId: string = ""
  export let onClose: () => void

  let errors = []
  let fetching = false

  const requestShare = async (email: string) => {
    fetching = true
    try {
      await collectionRepo.share(collectionId, email)
      onClose()
    } catch(e) {
      errors = ["Error en la solicitud"]
    }
    fetching = false
  }

</script>


<BaseModal title={title} onClose={onClose} >
  <Danger errors={errors} />

  <p> Agrega el correo de la persona con quien compartirás tu lista. </p>

  <EmailForm
    onSubmit={requestShare}
    loading={fetching}
    onError={(e)=> { errors = e }} />

</BaseModal>

<style lang="scss" >
  @use "../Styles/texts";

  p {
    @include texts.subtitle;
    text-align: center;
  }
</style>