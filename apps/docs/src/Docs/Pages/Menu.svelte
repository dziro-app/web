<script>
import Blueprint from '../../lib/Template.svelte'
import Menu from '../../../../../packages/ui/lib//Menu.svelte'
</script>
    
<Blueprint title='Menu' code="
<Menu onClick={(o) => { alert(o.id) }} options={[{'id': 0, 'text': 'Editar', 'icon': 'rename'}, {'id': 1, 'text': 'Eliminar', 'icon': 'trash-empty'}]} />
" >
    <p slot='description'>
        Componente para manejar un menú
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
                <td>options</td>
                <td>-</td>
                <td>-</td>
                <td>Opciones a mostrar en el menú</td>
            </tr>
        
            <tr>
                <td>onClick</td>
                <td>-</td>
                <td>-</td>
                <td>Callback para la selección de una opción</td>
            </tr>
        
        </tbody>
    </table>

    <div slot='example' >
        
<Menu onClick={(o) => { alert(o.id) }} options={[{'id': 0, 'text': 'Editar', 'icon': 'rename'}, {'id': 1, 'text': 'Eliminar', 'icon': 'trash-empty'}]} />

    </div>
</Blueprint>
        