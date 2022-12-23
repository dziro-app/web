<script lang='ts' >
  import type { SessionRepo } from "../Repository/session"
  import {Button} from "ui"

  export let repository: SessionRepo
  let loading = false

  const spotifyLogin = async () => {
    try {
      loading = true
      const res = await repository.login()
      window.location.href = res.redirect
    } catch(e) {
      loading = false
      console.log(e)
    }
  }
</script>

<div class="Landing">

  <h1> Login </h1>

  <Button 
    color="#1ed760"
    loading={loading}
    on:click={spotifyLogin} > Iniciar con Spotify </Button>

</div>

<style lang='scss' >
  @use "~ui/Styles/_texts.scss";
  @use "~ui/Styles/_colors.scss";
  .Landing {
    background: colors.$white;
    padding: 1em;
    h1 {
      @include texts.title;
    }
  }
</style>