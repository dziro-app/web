<script lang="ts">
  import SessionContainer from "./Session.svelte"
  import AppRoutes from "./Router.svelte"

</script>

<main>
  <SessionContainer>
    <AppRoutes />
  </SessionContainer>
</main>

<style global lang="scss">
  @use "~ui/Styles/_scroll.scss";
  @use "~ui/Styles/_colors.scss";
  @use "~ui/Styles/_sizing.scss";

  @include scroll.scrollBar(colors.$smoke, colors.$gray);

  main {
    background: colors.$black;
    display: grid;
    height: calc(100vh - sizing.$nav-height);
    position: relative;
    top: sizing.$nav-height;
  }

</style>