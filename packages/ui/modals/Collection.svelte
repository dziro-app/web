<script lang='ts'>
  import * as yup from "yup"

  import type {CreateCollectionDto} from "../../data/Dtos/Collection"
  
  export let title: string = "Nueva colección"
  export let submitText: string = "CREAR"
  export let onClose: () => void
  export let onSubmit: (data: CreateCollectionDto) => void
  export let defaultValues: CreateCollectionDto | null

  import BaseModal from "./ModalBase.svelte"

  import {
    Button,
    InputText,
    InputEmoji,
    InputColor
  } from "../index"
  import Danger from "./Danger.svelte"

  const schema = yup.object().shape({
    name: yup.string().required("El nombre no puede ser vacío"),
    emoji: yup.string().required("El emoji no puede estar vacío"),
    color: yup.string().required("El color no puede estar vacío"),
  })

  let values: CreateCollectionDto = {
    name: "",
    emoji: "",
    color: ""
  }

  if (defaultValues) {
    values.name = defaultValues.name
    values.color = defaultValues.color
    values.emoji = defaultValues.emoji
  }

  let errors = []

  const validateForm = async (e: Event) => {
    try {
      await schema.validate(values, { abortEarly: false })
      onSubmit(values)
    } catch (e) {
      errors = e.errors
    }
  }

</script>


<BaseModal title={title} onClose={onClose} >
  <div class="NewCollection">
    <p>Agrega la información de la colección.</p>
    <Danger errors={errors} />
    <form autocomplete="off" on:submit|preventDefault={validateForm} >
      <InputText label="Nombre" name="name" bind:value={values.name} />
      <InputEmoji label="Emoji" name="emoji" bind:value={values.emoji} />
      <InputColor label="Color" name="color" bind:value={values.color} />
      <div class="buttonWrapper">
        <Button type="submit" >
          {submitText}
        </Button>  
      </div>
    </form>
  </div>
</BaseModal>


<style lang='scss'>
  @use "../Styles/_texts.scss";

  p {
    @include texts.subtitle;
    text-align: center;
  }
  form {
    display: grid;
    grid-row-gap: 28px;
    margin: 0 auto;
    width: 300px;

    .buttonWrapper {
      margin: 8px 0;
      text-align: center;
    }
  }
  
</style>