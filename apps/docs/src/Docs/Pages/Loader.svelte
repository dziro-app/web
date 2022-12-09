<script>
import Blueprint from '../../lib/Template.svelte'
import Loader from '../../../../../packages/ui/lib//Loader.svelte'
</script>
    
<Blueprint title='Loader' code="
 <Loader size={30} />
 <Loader size={20} color='red' />
 <Loader size={10} color='green' />
" >
    <p slot='description'>
        Componente de loader
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
                <td>size</td>
                <td>number</td>
                <td>24</td>
                <td>Tamaño del loader</td>
            </tr>
        
            <tr>
                <td>color</td>
                <td>string</td>
                <td>"#000"</td>
                <td>Color del loader</td>
            </tr>
        
        </tbody>
    </table>

    <div slot='example' >
        
 <Loader size={30} />
 <Loader size={20} color='red' />
 <Loader size={10} color='green' />

    </div>
</Blueprint>
        