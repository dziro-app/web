<!-- 
  * This modal uses collection form and repository prop send data to backend api
  
  * If EDIT mode is used, defaultValues should be of the type collection Entity
 -->
<script lang='ts'>
  import Danger from "./Danger.svelte"
  import BaseModal from "./ModalBase.svelte"

  import type { Collection as CollectionEntity} from "data/Entities/Collection"
  import type {CreateCollectionDto} from "data/Dtos/Collection"
  import type { Collection as CollectionRepo } from "data/Repository/collection"
  import CollectionForm from  "../forms/collection.svelte"

  export let mode: "create" | "edit"
  export let repository: CollectionRepo
  export let defaultValues: CollectionEntity | null = null
  export let onClose: () => void
  export let onSubmit: (data: CollectionEntity) => void


  let texts = new Map([
    ["create", {
      title: "Nueva colección",
      buttonText: "Crear"
    }],
    ["edit", {
      title: "Editar colección",
      buttonText: "Editar"
    }],
  ])
  let errors = []
  let fetching = false

  const onValidated = async (data: CreateCollectionDto) => {
    fetching = true
    try {
      if (mode === "create") {
        const created = await repository.create(data)
        onSubmit(created)
      } else if (mode === "edit") {
        const updated = await repository.update(defaultValues.id, data)
        onSubmit(updated)
      }
    }
    catch (e) {
      errors = [e]
    }
    fetching = false
  }

</script>


<BaseModal title={texts.get(mode).title} onClose={onClose} >
  <div class="CollectionForm">
    <p>Agrega la información de la colección.</p>
    <Danger errors={errors} />
    <CollectionForm
      loading={fetching}
      defaultValues={defaultValues} submitText={texts.get(mode).buttonText}
      onErrors={(detected) => { errors = detected }} onValidated={onValidated}
    /> 
  </div>
</BaseModal>


<style lang='scss'>
  @use "../Styles/_texts.scss";

  p {
    @include texts.subtitle;
    text-align: center;
  }
  
</style>