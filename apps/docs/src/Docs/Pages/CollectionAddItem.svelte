<script>
import Blueprint from '../../lib/Template.svelte'
import CollectionAddItem from '../../../../../packages/ui/lib//CollectionAddItem.svelte'
</script>
    
<Blueprint title='CollectionAddItem' code="
<CollectionAddItem  />
" >
    <p slot='description'>
        Botón para agregar un item 
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
                <td>text</td>
                <td>string</td>
                <td>"Agregar Item"</td>
                <td>Texto del botón</td>
            </tr>
        
        </tbody>
    </table>

    <div slot='example' >
        
<CollectionAddItem  />

    </div>
</Blueprint>
        