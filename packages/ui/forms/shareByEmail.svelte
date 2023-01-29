<script lang="ts">
  import {Button, InputText} from "../index"
  import type { Collection as CollectionRepo } from "../../data/Repository/collection"

  export let onSubmit: (email: string) => void
  export let onError: (errors: Array<string>) => void
  export let loading = false

  let email: string = ""

  const validateEmail = async () => {

    if (email == "") {
      onError(["Email inválido"])
      return
    }
    onSubmit(email)
  }
</script>

<form autocomplete="off" on:submit|preventDefault={validateEmail} >
  <InputText label="Email" name="email" bind:value={email} />
  <div class="buttonWrapper">
    <Button type="submit" loading={loading}> Compartir </Button>  
  </div>
</form>

<style lang='scss'>
  @use "../Styles/inputs";

  form {
   @include inputs.form;
  }  
</style>