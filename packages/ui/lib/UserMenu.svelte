<!--D Menu del header para usuario pro -->
<script lang='ts' >
  import Icon from "./Icon.svelte"
  import Menu from "./Menu.svelte"
  import type {Option} from "./Menu.svelte"

  export let username: string // Nombre del usuario
  export let picture: string // Url del perfil del usuario
  export let options: Array<Option> = [] // array de opciones para el menú


  let isOpen = false

  const onDefaultOptionClick = () => {
    isOpen=false
  }

</script>

<div class="Menu">
  <div class="info" >
    <img class="profilePic" src={picture} alt="profile_image">
    <span class="username" > {username} </span>
    <button 
      class="trigger"
      class:open={isOpen}
      on:click={() => { isOpen = !isOpen }}>
      <Icon size={20} name="chevron-down-o" color="inherit" />
    </button>
  </div>

  {#if isOpen && options.length > 0}
    <div class="options">
      <Menu options={options} onClick={onDefaultOptionClick} />
    </div>
  {/if}
</div>

<style lang="scss" >
  @use '../Styles/colors';
  @use '../Styles/reset';
  @import "../Styles/_sizing.scss";
  @import "../Styles/_texts.scss";

  .Menu {
    background: colors.$base-color-black-100;
    border-radius: 10px;
    color: colors.$base-color-white-100;
    display: inline-block;
    padding: sizing(1) sizing(1);
    position: relative;
    .info {
      align-items: center;
      display: flex;
      justify-content: center;
    }

    .profilePic {
      border-radius: 50%;
      object-fit: cover;
      height: 30px;
      width: 30px;
    }
    .username {
      padding: 0 20px;
      font-size: 20px;
      font-family: 'Raleway', sans-serif;
    }
    .trigger {
      @include reset.button;
      transition: all 0.3s;
      color: colors.$base-color-gray-60;

      &:hover {
        color: colors.$base-color-white-100;
      }
      &.open {
        transform: rotateZ(180deg);
      }
    }
    .options {
      @include small-text;
      box-sizing: border-box;
      left: 0;  
      position: absolute;
      top: calc(100% + sizing(2));
      width: 100%;
      z-index: 3;
    }
  }
</style>


<!--E
<UserMenu
  username='evesan' 
  picture='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftresubresdobles.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fskft-23aff38e10ee3c4e430a1f3450c4a01d.jpeg&f=1&nofb=1'
  options={[{'text': 'Acerca de', onClick: ()=>{ alert('acerca de') }}]}
/>
-->