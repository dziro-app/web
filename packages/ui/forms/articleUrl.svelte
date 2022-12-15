<script lang="ts">
  import {Button, InputText} from "../index"
  import type {CreateItemDto} from "../../data/Dtos/Item"
  import type { Item as ItemRepo } from "../../data/Repository/item"


  export let onSubmit: (data: CreateItemDto) => void
  export let onError: (errors: Array<string>) => void
  export let itemRepo: ItemRepo


  let url: string = ""
  let fetching = false

  const validateUrl = async () => {
    if (fetching) return
    if (url == "") {
      onError(["Url invalida"])
      return
    }
    fetching = true
    try {
      const data = await itemRepo.scrap(url)
      onSubmit(data)
    } catch (e) {
      console.log(e)
      onError(["Url invalida"]) 
    }
    fetching = false
  }
</script>

<form autocomplete="off" on:submit|preventDefault={validateUrl} >
  <InputText label="Url del artículo" name="url" bind:value={url} />
  <div class="buttonWrapper">
    <Button type="submit" loading={fetching}> Continuar </Button>  
  </div>
</form>

<style lang='scss'>
  @use "../Styles/inputs";

  form {
   @include inputs.form;
  }  
</style>