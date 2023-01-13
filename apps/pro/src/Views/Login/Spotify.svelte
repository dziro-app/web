<script lang="ts" >
  import { onMount } from "svelte"
  import { Button } from "ui"
  import type { Session } from "data/Repository/session"
  
  export let repository: Session

  const localStorageUserKey = "user" // key to set user info in localstorage
  let loading = false

  const startLogin = async () => {
    try {
      loading = true
      const res = await repository.login()
      window.location.href = res.redirect
    } catch(e) {
      loading = false
      console.log(e)
    }
  }

  onMount(() => {
    if (location.search !== "") {
      // This happens when spotify redirects to our site with code and state in url
      loading = true
      continueOauth()
    }
  })

  const continueOauth = async () => {
    const query = new URLSearchParams(location.search);
    const code = query.get("code")
    const viaState = query.get("state")

    if (code && viaState) {
      if (viaState === "dzirospotify") {
        const res = await repository.getToken("spotify", code)
        localStorage.setItem(localStorageUserKey, JSON.stringify(res.user))
        location.href = "/"
      }
    }
  }
  

</script>

<Button
  color="#1ed760"
  loading={loading}
  on:click={startLogin} > Iniciar con Spotify </Button>