<script>
import Blueprint from '../../lib/Template.svelte'
import InputEmoji from '../../../../../packages/ui/lib//InputEmoji.svelte'
</script>
    
<Blueprint title='InputEmoji' code="
<InputEmoji name='emoji' label='Emoji' />
" >
    <p slot='description'>
        Componente para emoji
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
                <td>string</td>
                <td>""</td>
                <td>-</td>
            </tr>
        
        </tbody>
    </table>

    <div slot='example' >
        
<InputEmoji name='emoji' label='Emoji' />

    </div>
</Blueprint>
        