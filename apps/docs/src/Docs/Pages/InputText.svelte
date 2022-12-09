<script>
import Blueprint from '../../lib/Template.svelte'
import InputText from '../../../../../packages/ui/lib//InputText.svelte'
</script>
    
<Blueprint title='InputText' code="
<InputText name='nombre' label='Nombre' />
" >
    <p slot='description'>
        Componente para input text
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
        
<InputText name='nombre' label='Nombre' />

    </div>
</Blueprint>
        