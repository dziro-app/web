<script lang="ts">
  import {Button, InputText } from "../index"
  import type {CreateItemDto} from "../../data/Dtos/Item"

  export let onSubmit: (data: CreateItemDto) => void
  export let onError: (errors: Array<string>) => void

  let extCode: string = ""
  let values: CreateItemDto = {
    title: "",
    image: "",
    price: "",
    website: ""
  }


  const validateCode = () => {
    try {
      let dataStr = window.atob(extCode)
      values = JSON.parse(dataStr)
      onSubmit(values)
    } catch(e) {
      onError(["Código inválido"])
    }
  }
</script>

<form autocomplete="off" on:submit|preventDefault={validateCode} >
  <InputText label="Código de extensión" name="extensionCode" bind:value={extCode} />
  <div class="buttonWrapper">
    <Button type="submit" > Validar código </Button>  
  </div>
</form>

<style lang='scss'>
  @use "../Styles/inputs";

  form {
   @include inputs.form;
  }  
</style>