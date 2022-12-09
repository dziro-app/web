<script>
import Blueprint from '../../lib/Template.svelte'
import CollectionItem from '../../../../../packages/ui/lib//CollectionItem.svelte'
</script>
    
<Blueprint title='CollectionItem' code="
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
" >
    <p slot='description'>
        Componte para mostrar un artículo
    </p>
    <table slot='props'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
                    
            <tr>
                <td>image</td>
                <td>-</td>
                <td>-</td>
                <td>Imagen del artículo</td>
            </tr>
        
            <tr>
                <td>name</td>
                <td>-</td>
                <td>-</td>
                <td>Nombre del artículo</td>
            </tr>
        
            <tr>
                <td>website</td>
                <td>-</td>
                <td>-</td>
                <td>Url del artículo</td>
            </tr>
        
            <tr>
                <td>price</td>
                <td>-</td>
                <td>-</td>
                <td>Precio del artículo</td>
            </tr>
        
            <tr>
                <td>obtained</td>
                <td>boolean</td>
                <td>false</td>
                <td>Muestra indicador de compra hecha</td>
            </tr>
        
            <tr>
                <td>options</td>
                <td>array</td>
                <td>[]</td>
                <td>Array de opciones para el menú</td>
            </tr>
        
        </tbody>
    </table>

    <div slot='example' >
        
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

    </div>
</Blueprint>
        