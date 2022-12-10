<script>
import Blueprint from '../../lib/Template.svelte'
import Icon from '../../../../../packages/ui/lib//Icon.svelte'
</script>
    
<Blueprint title='Icon' code="
  <Icon name='XCircle' color='#aaa' />
  <Icon name='arrow-left-r' color='#aaa' />
  <Icon name='smile' color='#aaa' />
  <Icon name='spinner-alt' color='#aaa' />
  <Icon name='add' color='#aaa' />
  <Icon name='chevron-down-o' color='#aaa' />
  <Icon name='chevron-right-r' color='#aaa' />
  <Icon name='controller' color='#aaa' />
  <Icon name='layout-grid-small' color='#aaa' />
  <Icon name='more-vertical-alt' color='#aaa' />
  <Icon name='more-vertical-r' color='#aaa' />
  <Icon name='rename' color='#aaa' />
  <Icon name='ShoppingBag' color='#aaa' />
  <Icon name='trash-empty' color='#aaa' />
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
                <td>Nombre del ícono basado en clases de icomoon</td>
            </tr>
        
            <tr>
                <td>size</td>
                <td>number</td>
                <td>32</td>
                <td>Tamaño del componente</td>
            </tr>
        
            <tr>
                <td>color</td>
                <td>string</td>
                <td>"#000000"</td>
                <td>Color del componente</td>
            </tr>
        
            <tr>
                <td>additionalClass</td>
                <td>string</td>
                <td>""</td>
                <td>Extra class para el coponente</td>
            </tr>
        
        </tbody>
    </table>

    <div slot='example' >
        
  <Icon name='XCircle' color='#aaa' />
  <Icon name='arrow-left-r' color='#aaa' />
  <Icon name='smile' color='#aaa' />
  <Icon name='spinner-alt' color='#aaa' />
  <Icon name='add' color='#aaa' />
  <Icon name='chevron-down-o' color='#aaa' />
  <Icon name='chevron-right-r' color='#aaa' />
  <Icon name='controller' color='#aaa' />
  <Icon name='layout-grid-small' color='#aaa' />
  <Icon name='more-vertical-alt' color='#aaa' />
  <Icon name='more-vertical-r' color='#aaa' />
  <Icon name='rename' color='#aaa' />
  <Icon name='ShoppingBag' color='#aaa' />
  <Icon name='trash-empty' color='#aaa' />

    </div>
</Blueprint>
        