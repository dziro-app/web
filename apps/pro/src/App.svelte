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

  @include scroll.scrollBar(colors.$smoke, colors.$gray);

  main {
    display: grid;
    grid-template-rows: 65px 1fr;
    height: 100vh;
  }

</style>