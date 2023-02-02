<!--D Componte para mostrar un artículo -->
<script context="module" lang="ts" >
  export type Option = {
    display: string,
    onClick: Function
  }

</script>

<script lang="ts">
  import { fly } from "svelte/transition"
  import Icon from "./Icon.svelte"


  export let image: string // Imagen del artículo
  export let name: string // Nombre del artículo
  export let website: string // Url del artículo
  export let price: number // Precio del artículo
  export let obtained: boolean = false// Muestra indicador de compra hecha
  export let options: Array<Option> = [] // Array de opciones para el menú

  let showOptions = false

  const onDefaultOptionClick = (option: Option) => {
    showOptions=false
    option.onClick()
  }

  const getDisplayLink = (url: string) => {
    const res = url.match(/http[s]?:\/\/[\w.]+/i)
    if (res.length > 0) {
      return res[0].split("//")[1]
    }
    return "---"
  }

  const nameLength = 44
  
</script>

<a target="_blank" rel="noreferrer" href={website}>
  <div class="Item">

    <div class="Item__header">
      <div>
        {#if obtained}
          <div class="tag">Comprado</div>
        {/if}
      </div>
      {#if options.length > 0}
        <button class="menu" on:click|preventDefault={() => { showOptions = !showOptions }} >
          <div class="menuTrigger">
            <Icon size={22} name="more-vertical-alt" color="#fff" />
          </div>
          {#if showOptions}
            <div transition:fly="{{y: -10}}" class="options" >
              { #each options as option }
                <button class="option" on:click|stopPropagation|preventDefault={() => onDefaultOptionClick(option)} > {option.display} </button>
              {/each}
            </div>
          {/if}
        </button>
      {/if}

    </div>
    <div class="Item__image" >
      <img src={image} alt="preview" />
    </div>
    <div class="Item__info">
      <div class="name"> { name.length > nameLength ? name.substring(0, nameLength)+" ..." : name } </div>

      <div class="website" >
        { getDisplayLink(website)}
      </div>
      <div class="price">
        $ {price}
      </div>
    </div>
  </div>
</a>

<style lang="scss">
  @use '../Styles/reset';
  @use "../Styles/_colors.scss";
  @use "../Styles/_item.scss";
  @use "../Styles/_sizing.scss";
  @use "../Styles/breakpoints";
  @import "../Styles/_texts.scss";
  @import "../Styles/_menu.scss";


  a{
      color: colors.$asphalt;
      text-decoration: none;
      &:hover, &:visited {
        color: colors.$black;
        color: inherit;
        text-decoration: none;
      }
    }
  .Item {
    @include item.item-card;
    align-items: center;
    background: colors.$white;
    color: colors.$black;
    box-shadow: 0 1px 1px  rgba(0,0,0,0.05);
    display: grid;
    grid-template-rows: 50px 175px 140px;
    overflow: hidden;
    // position: relative;
    transition: all 0.3s;

    .tag {
      @include mini-text;
      background: $orange;
      border-radius: 12px;
      padding: 4px 6px;
    }

    &__header {
      display: grid;
      grid-template-columns: 1fr 30px;
      padding: 0 sizing.sizing(1);

      .menu {
        @include menu;
        @include reset.button;
        .menuTrigger {
          background: colors.$black;
          border-radius: 3px;
          cursor: default;
          display: flex;
          justify-content: center;
          opacity: 0.8;
          transition: all 0.3s;
          height: 22px;
          width: 22px;
          &:hover{
            box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
            opacity: 1;
          }
        }
        .options {
          @include options;
          top: 110%;
          z-index: 1;
        }
        .option {
          @include reset.button;
          @include option;
          width: 100%;
        }
      }
    }

    &__image {
      // margin-left: -16px;
      height: 100%;
      width: 100%;
      overflow: hidden;
      position: relative;
      z-index: 0;
      img {
        transition: all 0.4s;
        display: block;
        height: 100%;
        object-fit: contain;
        margin: 0 auto;
        transform: scale(2) translateY(0);
      }
    }

    &:hover &__image  {
      img {
        transform: scale(1) translateY(0);
      }
      
      // margin-top: sizing(2);
    }
    &__info {
      align-items: stretch;
      box-sizing: border-box;
      display: grid;
      height: 100%;
      padding:  sizing.sizing(2);

      .name {
        @include subtitle;
        align-self: center;
        font-size: 18px;
      }

      .price {
        @include subtitle;
        text-align: center;
      }
    }

    .website {
      @include small-text;
      align-items: center;
      display: flex;
      grid-gap: 0.5em;
    }

    &:hover {
      box-shadow: 0 2px 4px 2px rgba(0,0,0,0.1);
    }
  }

  @media screen and (max-width: breakpoints.$mobile) {
    
    .Item {
      &__header{
        .menu {
          .menuTrigger {
            height: 30px;
            width: 30px;
          }
        }
      }
      &__image {
        img {
          transform: scale(1) translateY(0);
        }
      }
    }
  }
</style>

<!--E
<div style='background: rgb(187 228 224); padding: 1em; display: flex; flex-wrap: wrap; grid-gap: 1em;' >
  <CollectionItem
    options={[{'display': 'Eliminar', onClick: ()=>{ alert('Eliminar') }}]}
    name='Guía de arquitectura Ciudad de México | Arquine'
    website='https://www.arquine.com/libros/guia-de-arquitectura-ciudad-de-mexico/'
    image='https://www.arquine.com/wp-content/uploads/2015/04/guia1.jpg' 
    price={29.00} />
  <CollectionItem
    options={[{'display': 'Eliminar', onClick: ()=>{ alert('Eliminar') }}]}
    name='Disco sólido SSD interno Kingston SA400S37/480G 480GB negro'
    website='https://www.mercadolibre.com.mx/disco-solido-ssd-interno-kingston-sa400s37480g-480gb-negro/p/MLM17978326?pdp_filters=category:MLM1672#searchVariation=MLM17978326&position=1&search_layout=stack&type=product&tracking_id=79ed35e4-7e46-4a7a-9309-34ddff9ec179'
    image='https://http2.mlstatic.com/D_NQ_NP_2X_751939-MLA46221843872_052021-F.webp' 
    price={29.20} />
  <CollectionItem 
    name='Kimono'
    obtained
    options={[{'display': 'Eliminar', onClick: ()=>{ alert('Eliminar') }}]}
    website='https://www.amazon.com.mx/chamarra-cl%C3%A1sico-algod%C3%B3n-japonesa-531-azul/dp/B08CR4PR1Y/ref=sr_1_14?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2587NQ2OIQSEM&keywords=kimono+hombre&qid=1650321884&sprefix=kimono+hombre%2Caps%2C100&sr=8-14'
    image='https://images-na.ssl-images-amazon.com/images/I/41bsNInFzRL.__AC_SY445_SX342_QL70_ML2_.jpg' 
    price={488.57} />
</div>
-->