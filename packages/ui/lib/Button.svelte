<!--D Componente para botón -->
<script lang='ts'>
  import Loader from "./Loader.svelte"

  export let form: "outline" | "normal"  = "normal" // Estilo del botón
  export let type: "button" | "submit" = "button" // Tipo de botón
  export let loading: boolean = false // Bandera que indica el loading
  export let color: string = "#464646" // Color del botón
</script>

<button 
  class:outline={form==="outline"}
  class:normal={form==="normal"}
  class:loading={loading}
  style={`background: ${color};`}
  type={type}
  on:click>
  {#if loading}
    <div class="Loader">
      <Loader size={17} color="inherit" />
    </div>
  {:else}
    <slot></slot>
  {/if}
</button>


<style lang="scss">
  @use "../Styles/colors.scss";
  @import "../Styles/_texts.scss";
  @import "../Styles/_sizing.scss";

  button {
    @include  normal-text;
    background: none;
    border-radius: 5px;
    border: none;

    &.normal {
      background: colors.$base-color-black-80;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.06);
      color: colors.$base-color-white-100;;
      padding: sizing(2) sizing(2);
      min-width: 220px;
      transition: all 0.3s;
      &:hover {
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
      }
      &.loading{
        background-color: colors.$base-color-gray-60;
        padding: sizing(1.9) sizing(2);
      }
    }

    &.outline {
      border: 2px dashed colors.$base-color-gray-60;
      border-radius: 6px;
      background: transparent !important;
      color: colors.$base-color-gray-60;
      font-size: 18px;
      opacity: 0.8;
      transition: all linear 0.3s;
      padding: 16px;
      min-width: 220px;
      &:hover {
        background: colors.$base-color-white-50;
        opacity: 1;
      }
      &.loading {
        padding: sizing(1.9) sizing(2);
      }
    }


    :global(.Loader) {
      margin: 0 auto;
    }
  }
</style>

<!--E
<Button form='outline' loading > Outline </Button>
<Button form='outline' > Outline </Button>
<br/>
<Button> Normal </Button>
<Button loading > Normal </Button>
-->
