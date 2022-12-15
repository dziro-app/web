<script>
import Blueprint from '../../lib/Template.svelte'
import Wishlist from '../../../../../packages/ui/lib//Wishlist.svelte'
</script>
    
<Blueprint title='Wishlist' code="No example" >
    <p slot='description'>
        No description
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
                <td>collectionRepo</td>
                <td>-</td>
                <td>-</td>
                <td>Repositorio de colecciones</td>
            </tr>
        
            <tr>
                <td>itemRepo</td>
                <td>-</td>
                <td>-</td>
                <td>Repositorio de items</td>
            </tr>
        
            <tr>
                <td>isUserFree</td>
                <td>boolean</td>
                <td>true</td>
                <td>-</td>
            </tr>
        
        </tbody>
    </table>

    <div slot='example' >
        No example
    </div>
</Blueprint>
        