<!--D Componente para input del tipo color -->
<script type="ts">
  import { fly } from 'svelte/transition';
  export let label: string = ""
  export let name: string
  export let value

  import BaseInput from "./InputBase.svelte"

  let ref
  let defaultValue = value || "#fff"
  let initialOptions = [
    "#464646",
    "#FF0B3E",
    "#FE8802",  
    "#FFE400",
    "#78E62D",
    "#00E2AA",
    "#00AEFF",
    "#3B53FF",
    "#7000DE",
    "#AAA2A0",
  ]
  let showOptions = false

  const changeEvent = (e) => {
    defaultValue = e.target.value
    showOptions = false
  }

  const useSuggestion = (v: string) => {
    defaultValue = v
    value = v
    showOptions = false
  }

</script>

<div class="ColorInput">
  <BaseInput label={label} name={name} >
    <button type="button" class="display" on:click={() => {showOptions = !showOptions}} >
      {defaultValue}
      <div class="preview" style={`background: ${defaultValue}`} ></div>
    </button>
    <input
      id={name} name={name}
      bind:this={ref} 
      bind:value={value}
      on:change={changeEvent}
      placeholder={label} type="color">

  </BaseInput>
  {#if showOptions}
    <div class="options" transition:fly="{{y: -10}}" >
      {#each initialOptions as opt}
      <button 
          on:click={() => { useSuggestion(opt) }}
          type="button"
          class="option" 
          style={`background: ${opt}`}
        > </button>
      {/each}
      <button
        type="button"
        class="option add"
        on:click={() => { ref.click() }} 
        style={`background: #fff`} > + </button>
    </div>
  {/if}
</div>

<style lang="scss">
  @use "../Styles/reset";
  @use "../Styles/colors";
  @import "../Styles/_inputs.scss";
  @import "../Styles/_sizing.scss";

  .ColorInput{
    position: relative;
    .display {
      @include reset.button;
      @include input;

      align-items: center;
      color: colors.$gray;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
    }
    input { display: none;}
    .preview {
      border-radius: 50%;
      height: 16px;
      width: 16px;
    }

    .options {
      background: colors.$smoke;
      box-sizing: border-box;
      padding: sizing(2);
      display: flex;
      flex-wrap: wrap;
      grid-gap: sizing(1);
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      z-index: 2;

      .option {
        @include reset.button;

        border-radius: 50%;
        border: 1px solid colors.$gray;
        cursor: pointer;
        height: 45px;
        width: 45px;

        &:hover {
          border-color: colors.$black;
        }
        
        &.add {
          @include reset.button;

          align-items: center;
          font-size: 3em;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
</style>

<!--E
<InputColor label='Color' name='color' />
-->