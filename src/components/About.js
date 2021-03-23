import {Link} from 'react-router-dom'
import Container from '@material-ui/core/Container'
import SearchBar from './SearchBar';

function About(){
    return( 
    <div>
        <Container className="Container">
          <SearchBar/>
          <p>Pagina About muestra contenido muy about About nada</p>
          <Link to='/'>Home</Link> 
        </Container> 
    </div>
    );
}

export default About;