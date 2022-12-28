<script lang="ts">
  import Header from "ui/lib/Header.svelte"
</script>

<main>
  <Header></Header>
  <div class="wrapper">
    <slot></slot>
  </div>
</main>


<style lang="scss">
  @use "ui/Styles/_sizing.scss";
  @use "ui/Styles/_colors.scss";
  @use "ui/Styles/_scroll.scss";

  @include scroll.scrollBar(colors.$smoke, colors.$gray);


  :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }


  main {
    display: grid;
    grid-template-rows: sizing.$nav-height 1fr;

    .wrapper {
      height: calc(100vh - sizing.$nav-height);
      overflow-y: scroll;
      overflow-x: hidden;
    }
  }

</style>