<script lang="ts" >
  import type {CreateItemDto} from "../../data/Dtos/Item"
  import BaseModal from "./ModalBase.svelte"

  import {Icon } from "../index"
  import Danger from "./Danger.svelte"
  import ArtileForm from "../forms/article.svelte"
  import ExtensionForm from  "../forms/codeExtension.svelte"

  export let title: string = "Nuevo artículo"
  export let onClose: () => void
  export let onSubmit: (data: CreateItemDto) => void
  export let defaultValues: CreateItemDto | null = null

  let errors = []
  let showCodeInput = (defaultValues === null)

</script>

<BaseModal title={title} onClose={onClose} >
  
  <Danger errors={errors} />

  {#if showCodeInput}
    <ExtensionForm 
      onSubmit={(values) => {
        showCodeInput = false
        defaultValues = values
        errors = []
      }}
      onError={(e) => { errors = e }}
    />

    <p class="lit">
      <button on:click={() => { showCodeInput = false; errors = [] }} class="link">
        Omitir
      </button>
    </p>
  {:else}
    <p class="lit">
      <button on:click={() => { showCodeInput = true; errors = [] }} class="link">
        <Icon name="arrow-left-r" size={14} />
        Regresar
      </button>
    </p>

    <ArtileForm  
      onSubmit={(values) => onSubmit(values)} 
      onError={ (e) => errors = e}
      defaultValues={defaultValues}
    />
  {/if}

</BaseModal>


<style lang='scss'>
  @use "../Styles/reset";
  @use "../Styles/texts";
  @use "../Styles/inputs";
  p {
    @include texts.subtitle;
    text-align: center;
  }

  .lit {
    @include texts.small-text;
    margin: 0;

    button {
      @include reset.button;
    }

    .link{
      text-decoration: underline;
      &:hover {
        cursor: pointer;
      } 
    }
  }
  
</style>