<script>
import Blueprint from '../../lib/Template.svelte'
import Header from '../../../../../packages/ui/lib//Header.svelte'
</script>
    
<Blueprint title='Header' code="
<Header />
<br>
<Header 
  username='evesan' 
  picture='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftresubresdobles.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fskft-23aff38e10ee3c4e430a1f3450c4a01d.jpeg&f=1&nofb=1'
  options={[{'text': 'Acerca de', onClick: ()=>{ alert('acerca de') }}]}
/>
" >
    <p slot='description'>
        Header
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
                <td>username</td>
                <td>string</td>
                <td>""</td>
                <td>Nombre del usuario</td>
            </tr>
        
            <tr>
                <td>picture</td>
                <td>string</td>
                <td>""</td>
                <td>Url del perfil del usuario</td>
            </tr>
        
            <tr>
                <td>options</td>
                <td>array</td>
                <td>[]</td>
                <td>Opciones que se pasarán al componente de menú</td>
            </tr>
        
        </tbody>
    </table>

    <div slot='example' >
        
<Header />
<br>
<Header 
  username='evesan' 
  picture='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftresubresdobles.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fskft-23aff38e10ee3c4e430a1f3450c4a01d.jpeg&f=1&nofb=1'
  options={[{'text': 'Acerca de', onClick: ()=>{ alert('acerca de') }}]}
/>

    </div>
</Blueprint>
        