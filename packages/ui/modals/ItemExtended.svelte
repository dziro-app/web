<script lang="ts" >
  import * as yup from 'yup'

  import type {CreateItemDto} from "../../data/Dtos/Item"
  import BaseModal from "./ModalBase.svelte"

  import {Button, InputText } from "../index"
  import Danger from "./Danger.svelte"

  export let title: string = "Nuevo artículo"
  export let submitText: string = "CREAR"
  export let onClose: () => void
  export let onSubmit: (data: CreateItemDto, useCode: boolean) => void
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

  let extCode: string = ""
  let errors = []
  let showCodeInput = false


  if (defaultValues) {
    values = { 
      ...values,
      ...defaultValues
    }
  }

  const validateCode = () => {
    try {
      let dataStr = window.atob(extCode)
      values = JSON.parse(dataStr)
      showCodeInput = false
      errors = []
    } catch(e) {
      errors = ["Código inválido"]
    }
  }

  const validateForm = async (e: Event) => {
    try {
      await schema.validate(values, { abortEarly: false })
      onSubmit(values, extCode !== "")
    } catch (e) {
      errors = e.errors
    }
  }

</script>

<BaseModal title={title} onClose={onClose} >

  <form autocomplete="off" on:submit|preventDefault={validateForm} >
    <p>Agrega la información del artículo</p>
    <p class='lit'> 
      <span>Para usar</span>
      {#if showCodeInput}
        <span> el formulario completo </span>
      {:else}
        <span> un código de la extensión </span>
      {/if}
      <span class="link" on:click={() => { showCodeInput = ! showCodeInput}} > haz click aquí </span>
    </p>
    <Danger errors={errors} />

  {#if showCodeInput}
    <InputText label="Código de extensión" name="extensionCode" bind:value={extCode} />
    <div class="buttonWrapper">
      <Button type="button" on:click={validateCode} > Validar código </Button>  
    </div>
  {:else}
    <InputText label="Título" name="title" bind:value={values.title} />
    <InputText label="Imagen (Url)" name="image" bind:value={values.image} />
    <InputText label="Precio" name="price" bind:value={values.price} />
    <InputText label="Sitio web" name="website" bind:value={values.website} />
    <div class="buttonWrapper">
      <Button type="submit" >
        {submitText}
      </Button>  
    </div>
  {/if}
  </form>

</BaseModal>


<style lang='scss'>
  @import "../Styles/_colors.scss";
  @import "../Styles/_texts.scss";
  p {
    @include subtitle;
    text-align: center;
  }

  .lit {
    @include small-text;
    margin: 0;

    .link{
      text-decoration: underline;
      &:hover {
        cursor: pointer;
      } 
    }
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