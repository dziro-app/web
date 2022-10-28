<script lang="ts">
  export let errors: Array<string> 
</script>

{#if errors.length > 0 }
  <div class="Danger">
    {#each errors as error}
      <div class="errorMessage" > {error} </div>
    {/each}
  </div>
{/if}

<style lang="scss" >
  @use "../Styles//colors";
  @use "../Styles/texts";

  .errorMessage {
    @include texts.small-text;
    background: colors.$error;
    color: colors.$white;
    text-align: center;
    padding: 0.5em;
    margin: 5px 0;
  }  
</style>