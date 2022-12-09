<script>
import Blueprint from '../../lib/Template.svelte'
import CollectionButton from '../../../../../packages/ui/lib//CollectionButton.svelte'
</script>
    
<Blueprint title='CollectionButton' code="
<CollectionButton name='Bandeja' color='#8D61EB' emoji='📥' />
<br>
<CollectionButton name='Ropa' color='#EDE63E' emoji='👕' />
<br>
<CollectionButton name='Libros' color='#1C84FF' emoji='📚' />
<br>
<CollectionButton name='Navidad' color='#E45264' emoji='🎄' />
" >
    <p slot='description'>
        Componente para seleccionar una colección
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
                <td>-</td>
                <td>-</td>
                <td>Nombre de la colección</td>
            </tr>
        
            <tr>
                <td>color</td>
                <td>-</td>
                <td>-</td>
                <td>Color de la colección</td>
            </tr>
        
            <tr>
                <td>emoji</td>
                <td>-</td>
                <td>-</td>
                <td>Emoji de la colección</td>
            </tr>
        
        </tbody>
    </table>

    <div slot='example' >
        
<CollectionButton name='Bandeja' color='#8D61EB' emoji='📥' />
<br>
<CollectionButton name='Ropa' color='#EDE63E' emoji='👕' />
<br>
<CollectionButton name='Libros' color='#1C84FF' emoji='📚' />
<br>
<CollectionButton name='Navidad' color='#E45264' emoji='🎄' />

    </div>
</Blueprint>
        