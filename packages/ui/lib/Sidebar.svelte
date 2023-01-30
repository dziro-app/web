<script lang="ts" >
  import { onMount } from "svelte";
  let showMobileSideBar = false
  
  onMount(() => {
    window.addEventListener("toggleSideBar", () => {
      showMobileSideBar = !showMobileSideBar
    })
  })

</script>

<div class="SideBar">
  <div class="SideBar__side" class:SideBar__side--show={showMobileSideBar}>
    <slot name="side"></slot>
  </div>
  <div class="SideBar__content">
    <slot> </slot>
  </div>
</div>

<style lang="scss" >
  @use "../Styles/colors";
  @use "../Styles/sizing";
  @use "../Styles/breakpoints";

  .SideBar {
    display: grid;
    grid-template-columns: 250px 1fr;
    height: 100%;

    &__side {
      background: colors.$white;
      box-sizing: border-box;
      padding: 0 sizing.sizing(2);
      box-shadow: inset -2px 0 8px #cacaca;
    }

    &__content {
      height: 100%;
    }
  }
  
  @media screen and (max-width: breakpoints.$mobile) {
    .SideBar {
      grid-template-columns: 1fr;

      &__side {
        height: 100%;
        position: fixed;
        transform: translate3d(-100%, 0, 0);
        transition: all 0.3s;
        width: 100%;
        z-index: 3;
        &--show {
          transform: translate3d(0, 0, 0);
        }
      }
    }
  }
</style>