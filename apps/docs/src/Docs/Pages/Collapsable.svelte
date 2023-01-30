<script>
import Blueprint from '../../lib/Template.svelte'
import Collapsable from '../../../../../packages/ui/lib//Collapsable.svelte'
</script>
    
<Blueprint title='Collapsable' code="
<Collapsable title='This is title'>
  content
</Collapsable>
" >
    <p slot='description'>
        Collapsable component
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
                <td>title</td>
                <td>string</td>
                <td>""</td>
                <td>-</td>
            </tr>
        
            <tr>
                <td>isOpen</td>
                <td>boolean</td>
                <td>false</td>
                <td>-</td>
            </tr>
        
        </tbody>
    </table>

    <div slot='example' >
        
<Collapsable title='This is title'>
  content
</Collapsable>

    </div>
</Blueprint>
        