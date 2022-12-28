<!--D Header -->
<script lang="ts">
  import { onMount } from 'svelte'
  import Logo from './Logo.svelte'
  import Menu from './UserMenu.svelte'
  import Icon from './Icon.svelte'

  export let username: string = "" // Nombre del usuario
  export let picture: string = "" // Url del perfil del usuario
  export let options = [] // Opciones que se pasarán al componente de menú
  
  let event

  const handleSideBar = () => {
    window.dispatchEvent(event)
  }
  onMount(() => {
    event = new window.CustomEvent("handleSideBar")
  })

</script>

<header>
  {#if username && picture}
    <div class="mobile">
      <Icon name='List' size={15} color="inherit" on:click={handleSideBar} />
    </div>
  {/if}

  <div class="logo_wrapper">
    <Logo />
  </div>
  <div>
    {#if username && picture}
      <Menu 
        username={username}
        picture={picture}
        options={options}
        />
    {/if}
  </div>
</header>

<style lang="scss" >
  @use '../Styles/breakpoints';
  @use '../Styles/_colors.scss';
  @use '../Styles/_sizing.scss';
  header {
    align-items: center;
    background: colors.$black;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 0px 10px;
    height: sizing.$nav-height;
      
    .mobile {
      display: none;
      color: colors.$white;
    }
  }

  @media screen and (max-width: breakpoints.$mobile) {
    header {
      .mobile {
        display: block;
      }
    }
  }
</style>

<!--E
<Header />
<br>
<Header 
  username='evesan' 
  picture='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftresubresdobles.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fskft-23aff38e10ee3c4e430a1f3450c4a01d.jpeg&f=1&nofb=1'
  options={[{'text': 'Acerca de', onClick: ()=>{ alert('acerca de') }}]}
/>
-->
