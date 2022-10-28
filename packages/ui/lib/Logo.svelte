<!--D Componente de logotipo -->
<script lang="ts" >
  import Icon from "./Icon.svelte"

  export let color: "black" | "white" = "white" // Color del logotipo
  export let size: "lg" | "md" | "sm" = "lg" // Tamaño del logotipo completo


  const logoIconSize = new Map([
    ["lg", 32],
    ["md", 20],
    ["sm", 12]
  ])
</script>

<div 
  class={`Logo ${size}`}
  class:black={color ==="black"}
  >
  <div class="wrapper" >
    <Icon name="ShoppingBag" color={color} size={logoIconSize.get(size)} />
    <div class="name">
      DZIRO
    </div>
  </div>
</div>

<style lang='scss' >
  @import '../Styles/_colors.scss';
  @import '../Styles/_texts.scss';
  @import '../Styles/_sizing.scss';
  .Logo {
    @include title;
    display: inline-block;
    color: $white;
    padding: sizing(0.5) sizing(1);
    
    .wrapper {
      align-items: center;
      display: flex;
    }

    .name {
      padding-left: 0.3em;
    }

    //  Color variants
    &.black {
      color: $black;
    }

    // Size variants
    &.lg {
      @include title;
    }

    &.md {
      font-size: 20px;
    }

    &.sm {
      font-size: 12px;
    }
  }
</style>

<!--E
<div>
  <div style='padding: 1em;' >
    <Logo color='black' />
    <Logo color='black' size='md' />
    <Logo color='black' size='sm' />
  </div>

  <div style='background: #000; padding: 1em;' >
    <Logo />
    <Logo size='md' />
    <Logo size='sm' />
  </div>
</div>
-->