<script lang="ts">
  import { Button } from "ui"
  import type { Session } from "data/Repository/session"

  export let repository: Session

  const localStorageUserKey = "user" // key to set user info in localstorage
  let loading = false

  const startLogin = () => {
    loading = true
    FB.login((response) => {
      if (response.status === "connected") {
        console.log(response.authResponse)
        const code = response.authResponse.accessToken
        repository.getToken("facebook", code)
          .then(res => {
            console.log(res)
            localStorage.setItem(localStorageUserKey, JSON.stringify(res.user))
            location.href = "/"
          })
          .catch((e) => {
            console.log(e)
          })
      }
      loading = false
    })
  }


</script>

<svelte:head>
  <script>
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '957120631953374',
        cookie     : true,
        xfbml      : true,
        version    : 'v15.0'
      });
        
      FB.AppEvents.logPageView();   
        
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  </script>


</svelte:head>

<Button 
  on:click={startLogin}
  color="#1877f2"
  loading={loading}
  >
  Iniciar con facebook
</Button>



