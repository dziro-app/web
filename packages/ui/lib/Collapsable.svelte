<!--D Collapsable component -->
<script lang="ts">
  import Icon from "./Icon.svelte"
  export let title: String = ""

  let show = false

</script>

<div class="Collapsable" >
  <button  class="Collapsable__trigger" on:click={() => {show = !show}} >
    <div 
      class="Collapsable__trigger__icon"
      class:Collapsable__trigger__icon--opened={show} >
      <Icon name="chevron-right-r" size={24} color="inherit" />
    </div>
    <div class="Collapsable__trigger__title"> { title } </div>
  </button>
  
  {#if show}
    <div class="Collapsable__content">
      <slot></slot>
    </div>
  {/if}
</div>

<style lang="scss" >
  @use "../Styles/colors";
  @use "../Styles/sizing";
  @use "../Styles/texts";
  @use "../Styles/reset";

  .Collapsable {
    color: colors.$base-color-gray-60;

    &__trigger {
      @include reset.button;

      align-items: center;
      display: flex;
      grid-column-gap: sizing.sizing(1);

      &__icon {
        transition: all 0.3s;
        &--opened {
          transform: rotate(90deg);
        }
      }

      &__title {
        @include texts.subtitle;
      }
    }

    &__content {
      padding: sizing.sizing(1) sizing.sizing(0);
      display: grid;
    }
  }

</style>

<!--E
<Collapsable title='This is title'>
  content
</Collapsable>
-->