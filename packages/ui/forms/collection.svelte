<!-- 
  This form asks and validates the informaion to create a collection.
  If data is correct, will call onValidated callback,
  othewrwise it will call onError 
 -->

<script lang="ts" >
  import * as yup from "yup"
  import {
    Button,
    InputText,
    InputEmoji,
    InputColor
  } from "../index"
  import type {CreateCollectionDto} from "../../data/Dtos/Collection"

  export let submitText: string = "CREAR" // this prop defines the text of submit button
  export let defaultValues: CreateCollectionDto | null // this prop defines deault values for the form
  export let onValidated: (data: CreateCollectionDto) => void
  export let onErrors: (errors: string[]) => void
  export let loading = false


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

  const validateForm = async (e: Event) => {
    try {
      await schema.validate(values, { abortEarly: false })
      onValidated(values)
    } catch (e) {
      onErrors(e.errors)
    }
  }

</script>

<form autocomplete="off" on:submit|preventDefault={validateForm} >
  <InputText label="Nombre" name="name" bind:value={values.name} />
  <InputEmoji label="Emoji" name="emoji" bind:value={values.emoji} />
  <InputColor label="Color" name="color" bind:value={values.color} />
  <div class="buttonWrapper">
    <Button type="submit" loading={loading} >
      {submitText}
    </Button>  
  </div>
</form>

<style lang="scss" > 
  @use "../Styles/forms";

  @include forms.form;
</style>