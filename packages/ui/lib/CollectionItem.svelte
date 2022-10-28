<!--D Componte para mostrar un artículo -->
<script lang="ts">
  import { fly } from "svelte/transition"
  import Icon from "./Icon.svelte"

  type Option = {
    display: string,
    onClick: Function
  }

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

  const nameLength = 45
  
</script>

<a target="_blank" href={website}>
  <div class="Item">

    <div class="menuWrapper">
      <div class="menu" on:click|preventDefault={() => { showOptions = !showOptions }} >
        <div class="menuTrigger">
          <Icon size={22} name="more-vertical-alt" color="#fff" />
        </div>
        {#if showOptions}
          <div transition:fly="{{y: -10}}" class="options" >
            { #each options as option }
            <div class="option" on:click|stopPropagation|preventDefault={() => onDefaultOptionClick(option)} > {option.display} </div>
          {/each}
          </div>
        {/if}
      </div>
    </div>

    {#if obtained}
      <div class="tag">Comprado</div>
    {/if}

    <img src={image} alt="preview" />
    <div class="info">
      <div class="name"> { name.length > nameLength ? name.substring(0, nameLength)+" ..." : name } </div>
      <div class="website" >
        { getDisplayLink(website)}
      </div>
    </div>
    <div class="price">
      $ {price}
    </div>
  </div>
</a>

<style lang="scss">
  @import "../Styles/_colors.scss";
  @import "../Styles/_sizing.scss";
  @import "../Styles/_texts.scss";
  @import "../Styles/_item.scss";
  @import "../Styles/_menu.scss";


  a{
      color: $asphalt;
      text-decoration: none;
      &:hover, &:visited {
        color: $black;
        color: inherit;
        text-decoration: none;
      }
    }
  .Item {
    @include item-card;
    align-items: center;
    background: $white;
    box-shadow: 0 1px 1px  rgba(0,0,0,0.05);
    display: grid;
    grid-template-rows: 175px 70px 1fr;
    grid-row-gap: sizing(2);
    overflow: hidden;
    position: relative;
    transition: all 0.3s;
    .menuWrapper {
      position: absolute;
      right: sizing(1);
      top: sizing(1);
    }
    .menu {
      @include menu;
      .menuTrigger {
        background: $black;
        border-radius: 3px;
        cursor: default;
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
      }

      .option{
        @include option;
      }
    }

    .tag {
      @include mini-text;
      background: $orange;
      position: absolute;
      right: sizing(1);
      // bottom: sizing(1);
      border-radius: 12px;
      padding: 4px 6px;
    }

    img {
      display: block;
      height: 100%;
      transition: all 0.3s;
      margin: 0 auto;
      margin-left: -16px;
      object-fit: cover;
      width: 116%;
    }

    &:hover img {
      object-fit: scale-down;
      margin-top: sizing(2);
    }
    .info {
      align-items: stretch;
      display: grid;
      height: 100%;
      .name {
        @include subtitle;
        align-self: center;
        font-size: 18px;
      }
      .website {
        @include small-text;
        align-items: center;
        display: flex;
        grid-gap: 0.5em;
      }
    }
    .price {
      @include subtitle;
      text-align: center;
    }

    &:hover {
      box-shadow: 0 2px 4px 2px rgba(0,0,0,0.1);
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