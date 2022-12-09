<script>
import Blueprint from '../../lib/Template.svelte'
import Logo from '../../../../../packages/ui/lib//Logo.svelte'
</script>
    
<Blueprint title='Logo' code="
<div>
  <div style='padding: 1em;' >
    <Logo color='black' />
    <Logo color='black' size='md' />
    <Logo color='black' size='sm' />
  </div>

  <div style='background: #000; padding: 1em;' >
    <Logo />
    <Logo size='md' />
    <Logo size='sm' />
  </div>
</div>
" >
    <p slot='description'>
        Componente de logotipo
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
                <td>color</td>
                <td>string</td>
                <td>"white"</td>
                <td>Color del logotipo</td>
            </tr>
        
            <tr>
                <td>o</td>
                <td>-</td>
                <td>-</td>
                <td>Tamaño del logotipo completo</td>
            </tr>
        
        </tbody>
    </table>

    <div slot='example' >
        
<div>
  <div style='padding: 1em;' >
    <Logo color='black' />
    <Logo color='black' size='md' />
    <Logo color='black' size='sm' />
  </div>

  <div style='background: #000; padding: 1em;' >
    <Logo />
    <Logo size='md' />
    <Logo size='sm' />
  </div>
</div>

    </div>
</Blueprint>
        