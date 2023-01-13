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
    } else {
      // request to obtain token when browser refresh
      try {
        let res = await sessionRepo.refreshToken()
        if (res.access_token === undefined) {
          console.log("Invalid session, no token")
        } else {
          const user = JSON.parse(localStorage.getItem(localStorageUserKey))
          sessionStore.setToken(res.access_token)
          sessionStore.setUser(user)
        }
      } catch (e) {
        console.log("Invalid session")
      }
    }
  })

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


{#if oauthLoading}
  <header>
    <Header />
  </header>
  <div class="loading">
    <Loader size={50} ></Loader>
  </div>
{:else if session === null}
  <header>
    <Header />
  </header>
  <LoginView repository={sessionRepo} />

{:else}
  <header>
    <Header 
      username={$sessionStore.user.username}
      picture={$sessionStore.user.profile}
      options={userOptions}
    />
  </header>
  <slot></slot>
{/if}


<style lang="scss" >
  @use "~ui/Styles/_colors.scss";
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  }

  .loading {
    background: colors.$white;
    display: flex;
    justify-content: center;
    height: calc(100vh - 80px);
    align-items: center;
  }
</style>