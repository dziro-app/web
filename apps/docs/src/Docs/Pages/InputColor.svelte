<script>
import Blueprint from '../../lib/Template.svelte'
import InputColor from '../../../../../packages/ui/lib//InputColor.svelte'
</script>
    
<Blueprint title='InputColor' code="
<InputColor label='Color' name='color' />
" >
    <p slot='description'>
        Componente para input del tipo color
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
                <td>label</td>
                <td>string</td>
                <td>""</td>
                <td>-</td>
            </tr>
        
            <tr>
                <td>name</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
        
            <tr>
                <td>value</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
        
        </tbody>
    </table>

    <div slot='example' >
        
<InputColor label='Color' name='color' />

    </div>
</Blueprint>
        