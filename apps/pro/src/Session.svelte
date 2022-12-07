<script lang="ts" >
  import { onMount } from "svelte"

  import { Header, Loader } from "ui"
  import LoginView from "./Views/Login.svelte"

  import {SessionRepo} from "./Repository/session"
  import {ApiUrl} from "./Repository/api"
  import {sessionStore} from "./Store/session"


  const localStorageUserKey = "user" // key to set user info in localstorage
  let sessionRepo = new SessionRepo(ApiUrl)

  let timmer = null // Variable to set timer to refresh the cookie and access token
  let session = null
  let oauthLoading = false

  onMount(async () => {
    // this acts when a redirection via oauth is made
    if (location.search !== "") {
      oauthLoading = true
      continueOauth()
    } else {
    // request to obtain token when browser refresh
      try {
        let res = await sessionRepo.refreshToken()
        if (res.access_token === undefined) {
          console.error("Invalid session")
        } else {
          const user = JSON.parse(localStorage.getItem(localStorageUserKey))
          sessionStore.setToken(res.access_token)
          sessionStore.setUser(user)
        }
      } catch (e) {
        console.error("Invalid session")
      }
    }
  })

  const continueOauth = async () => {
    let via = ""
    const query = new URLSearchParams(location.search);
    const code = query.get("code")
    const viaState = query.get("state")

    if (code && viaState) {
      if (viaState === "dzirospotify") {
        via = "spotify"
      }
      const res = await sessionRepo.getToken(via, code)
      location.href = "/"
      localStorage.setItem(localStorageUserKey, JSON.stringify(res.user))
    }
  }

  const logOut = async () => {
    try {
      await sessionRepo.clearToken()
      localStorage.removeItem(localStorageUserKey)
      location.href = "/"
    } catch(e) {
      console.error(e)
    }
  }


  $: {
    session = $sessionStore.token

    if (session && timmer === null) { 
      timmer =setInterval(async () => {
        let res = await sessionRepo.refreshToken()
        sessionStore.setToken(res.access_token)
      }, 1000 * 60 * 5)
    }
  }

  const userOptions = [{
    id: 0,
    icon: 'smile',
    text: 'Perfil',
    onClick: () => { }
  }, {
    id: 1,
    icon: 'arrow-left-r',
    text: 'Salir',
    onClick: logOut
  }]
</script>

<main>
  {#if oauthLoading}
    <Loader size={50} ></Loader>
  {:else if session === null}
    <div class="Header">
      <Header />
      <LoginView repository={sessionRepo} />
    </div>
  {:else}
    <Header 
      username={$sessionStore.user.username}
      picture={$sessionStore.user.profile}
      options={userOptions}
    />
    <slot></slot>
  {/if}
</main>