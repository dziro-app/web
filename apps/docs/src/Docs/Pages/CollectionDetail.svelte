<script>
import Blueprint from '../../lib/Template.svelte'
import CollectionDetail from '../../../../../packages/ui/lib//CollectionDetail.svelte'
</script>
    
<Blueprint title='CollectionDetail' code="
<CollectionDetail 
  name='Ropa' color='#EDE63E' emoji='👕'
  options={[{'id': 0, 'text': 'Editar', 'icon': 'rename', 'onClick': () => { console.log('Editar') }}, {'id': 1, 'text': 'Eliminar', 'icon': 'trash-empty', 'onClick': () => { console.log('Eliminar') }}]} >
  Con un solo color calculamos el resto.
</CollectionDetail>
" >
    <p slot='description'>
        Componente para preview de una colección
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
                <td>name</td>
                <td>-</td>
                <td>-</td>
                <td>Nombre de la colección</td>
            </tr>
        
            <tr>
                <td>color</td>
                <td>-</td>
                <td>-</td>
                <td>Color de la colección</td>
            </tr>
        
            <tr>
                <td>emoji</td>
                <td>-</td>
                <td>-</td>
                <td>Emoji de la colección</td>
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
        
<CollectionDetail 
  name='Ropa' color='#EDE63E' emoji='👕'
  options={[{'id': 0, 'text': 'Editar', 'icon': 'rename', 'onClick': () => { console.log('Editar') }}, {'id': 1, 'text': 'Eliminar', 'icon': 'trash-empty', 'onClick': () => { console.log('Eliminar') }}]} >
  Con un solo color calculamos el resto.
</CollectionDetail>

    </div>
</Blueprint>
        