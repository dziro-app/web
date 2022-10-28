<!--D Header -->
<script lang="ts">
  export let username: string = "" // Nombre del usuario
  export let picture: string = "" // Url del perfil del usuario
  export let options = [] // Opciones que se pasarán al componente de menú


  import Logo from './Logo.svelte'
  import Menu from './UserMenu.svelte'

</script>

<header>
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
  @import '../Styles/_colors.scss';
  @import '../Styles/_sizing.scss';
  header {
    align-items: center;
    background: $black;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 0px 10px;
    height: $nav-height;
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
