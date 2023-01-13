<script lang='ts' >
  import type { SessionRepo } from "../Repository/session"
  import FacebookLogin from "./Login/Facebook.svelte"
  import SpotifyLogin from "./Login/Spotify.svelte"


  export let repository: SessionRepo


</script>


<div class="Landing">

  <h1> Login </h1>

  <div class="buttons">

    <SpotifyLogin repository={repository} />
    <FacebookLogin repository={repository} />
  </div>

  

</div>

<style lang='scss' >
  @use "~ui/Styles/_texts.scss";
  @use "~ui/Styles/_colors.scss";
  @use "~ui/Styles/_sizing.scss";
  .Landing {
    background: colors.$white;
    padding: 1em;
    h1 {
      @include texts.title;
    }

    .buttons {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      grid-row-gap: sizing.sizing(2);
    }
  }

</style>