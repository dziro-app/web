<script>
import Blueprint from '../../lib/Template.svelte'
import Button from '../../../../../packages/ui/lib//Button.svelte'
</script>
    
<Blueprint title='Button' code="
<Button form='outline' loading > Outline </Button>
<Button form='outline' > Outline </Button>
<br/>
<Button> Normal </Button>
<Button loading > Normal </Button>
" >
    <p slot='description'>
        Componente para botón
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
                <td>form</td>
                <td>string</td>
                <td>"normal"</td>
                <td>Estilo del botón</td>
            </tr>
        
            <tr>
                <td>type</td>
                <td>string</td>
                <td>"button"</td>
                <td>Tipo de botón</td>
            </tr>
        
            <tr>
                <td>loading</td>
                <td>boolean</td>
                <td>false</td>
                <td>Bandera que indica el loading</td>
            </tr>
        
            <tr>
                <td>color</td>
                <td>string</td>
                <td>"#464646"</td>
                <td>Color del botón</td>
            </tr>
        
        </tbody>
    </table>

    <div slot='example' >
        
<Button form='outline' loading > Outline </Button>
<Button form='outline' > Outline </Button>
<br/>
<Button> Normal </Button>
<Button loading > Normal </Button>

    </div>
</Blueprint>
        