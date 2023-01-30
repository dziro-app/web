<!--D Componente para emoji -->
<script type="ts">
  // import emojis from "emojis-list"
  import { onMount } from "svelte"
  import Icon from "./Icon.svelte"
  import data from "@emoji-mart/data"

  import { Picker } from "emoji-mart"
  import BaseInput from "./InputBase.svelte"

  export let label: string = ""
  export let name: string
  export let value = ""

  let showOptions = false
  let pickerLib

  const onChange = (e) => {
    value = e.native
    showOptions = false
  }

  const picker = new Picker({ 
    data, 
    "locale": "es", 
    onEmojiSelect: onChange,
    dynamicWidth: true
  })

  onMount(() => {
    pickerLib.appendChild(picker)
  })

</script>

<div class="EmojiInput">
  <BaseInput label={label} name={name} >
    <button class="EmojiInput__trigger" type="button" on:click={() => {showOptions = !showOptions}}>
      <span>
      {#if value === ""}
        <span class="placeholder">{label}</span>
      {:else}
        {value}
        {/if}
    </span>
    <div class="EmojiInput__trigger__icon" class:open={showOptions}>
      <Icon 
        size={22} 
        color="inherit" 
        name="chevron-down-o" />
      </div>
    </button>
      
      <div class="EmojiInput__pickerLib" class:EmojiInput__pickerLib--active={showOptions}  bind:this={pickerLib} ></div>
      
      <input
      readonly
      id={name} name={name} placeholder={label} 
      bind:value={value} type="hidden">
  </BaseInput>
</div>

<style lang="scss">
  @use "../Styles/colors";
  @use "../Styles/reset";
  @import "../Styles/_inputs.scss";
  @import "../Styles/_sizing.scss";

  .EmojiInput{
    position: relative;

    &__trigger {
      @include reset.button;
      @include input;

      display: flex;
      align-items: center;
      color: colors.$base-color-gray-60;
      justify-content: space-between;
      width: 100%;

      &:hover {
        color: colors.$base-color-black-80;
      }

      &__icon {
        align-items: center;
        transition: all 0.3s;
        cursor: pointer;
        justify-content: center;
        display: flex;
        height: 30px;
        width: 30px;

        &.open {
          transform: rotateZ(180deg);
        }
      
      }
    }

    &__pickerLib {
      display: none;
      // position: absolute;
      z-index: 1;

      :global(em-emoji-picker) {
        width: 100%;
      }

      &--active {
        display: block;
      }
    }

    .placeholder {
      color: colors.$base-color-gray-60;
    }
  }
</style>
<!--E
<InputEmoji name='emoji' label='Emoji' />
-->
