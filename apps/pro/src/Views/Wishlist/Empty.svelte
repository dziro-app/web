<script lang="ts" >
  import {Button} from "ui"

  export let onCreateClick: () => void
</script>

<div class="empty__whislists">
  <h1> Bienvenido </h1>

  <p> Empieza creando una nueva colección </p>

  <div>
    <Button color="#000" on:click={onCreateClick} >
      Crear colección
    </Button>
  </div>
</div>

<style lang="scss" >
  @use '~ui/Styles/_texts.scss';
  .empty__whislists {
      text-align: center;
      display: grid;
      height: 100%;
      h1 {
        @include texts.title;
        align-self: center;
      }
      p {
        @include texts.normal-text;
      }
    }
</style>