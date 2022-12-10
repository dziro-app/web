<script lang="ts">
  import * as yup from 'yup'
  import {Button, InputText } from "../index"
  import type {CreateItemDto} from "../../data/Dtos/Item"

  export let onSubmit: (data: CreateItemDto) => void
  export let onError: (errors: Array<string>) => void
  export let defaultValues: CreateItemDto | null = null


  const schema = yup.object().shape({
    title: yup.string().required("El título no puede ser vacío"),
    image: yup.string().url("Url inválida").required("La imagen no puede ser vacío"),
    price: yup.string().required("El precio no puede estar vacío"),
    website: yup.string().url("Url inválida").required("El website no puede estar vacío"),
  })

  let values: CreateItemDto = {
    title: "",
    image: "",
    price: "",
    website: ""
  }

  if (defaultValues) {
    values = { 
      ...values,
      ...defaultValues
    }
  }

  const validateForm = async (e: Event) => {
    try {
      await schema.validate(values, { abortEarly: false })
      onSubmit(values)
    } catch (e) {
      onError(e.errors)
    }
  }


</script>

<form autocomplete="off" on:submit|preventDefault={validateForm} >
  <InputText label="Título" name="title" bind:value={values.title} />
  <InputText label="Imagen (Url)" name="image" bind:value={values.image} />
  <InputText label="Precio" name="price" bind:value={values.price} />
  <InputText label="Sitio web" name="website" bind:value={values.website} />

  <div class="buttonWrapper">
    <Button type="submit" >
      Guardar
    </Button>  
  </div>
</form>


<style lang='scss'>
  @use "../Styles/inputs";

  form {
   @include inputs.form;
  }  
</style>