<script>
import Blueprint from '../../lib/Template.svelte'
import Icon from '../../../../../packages/ui/lib//Icon.svelte'
</script>
    
<Blueprint title='Icon' code="
  <Icon name='arrow-left-r' />
  <Icon name='smile' />
  <Icon name='spinner-alt' />
  <Icon name='add' />
  <Icon name='chevron-down-o' />
  <Icon name='chevron-right-r' />
  <Icon name='controller' />
  <Icon name='layout-grid-small' />
  <Icon name='more-vertical-alt' />
  <Icon name='more-vertical-r' />
  <Icon name='rename' />
  <Icon name='ShoppingBag' />
  <Icon name='trash-empty' />
" >
    <p slot='description'>
        Componente de icono
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
                <td>string</td>
                <td>"more-vertical-r"</td>
                <td>-</td>
            </tr>
        
            <tr>
                <td>size</td>
                <td>number</td>
                <td>32</td>
                <td>-</td>
            </tr>
        
            <tr>
                <td>color</td>
                <td>string</td>
                <td>"#000000"</td>
                <td>-</td>
            </tr>
        
            <tr>
                <td>additionalClass</td>
                <td>string</td>
                <td>""</td>
                <td>Extra class par ael coponente</td>
            </tr>
        
        </tbody>
    </table>

    <div slot='example' >
        
  <Icon name='arrow-left-r' />
  <Icon name='smile' />
  <Icon name='spinner-alt' />
  <Icon name='add' />
  <Icon name='chevron-down-o' />
  <Icon name='chevron-right-r' />
  <Icon name='controller' />
  <Icon name='layout-grid-small' />
  <Icon name='more-vertical-alt' />
  <Icon name='more-vertical-r' />
  <Icon name='rename' />
  <Icon name='ShoppingBag' />
  <Icon name='trash-empty' />

    </div>
</Blueprint>
        