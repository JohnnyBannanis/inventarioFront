import Contador from './Contador';
import Container from '@material-ui/core/Container'
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar';

function Home(){

    return( 
    <div>
        <Container className="Container">
            <SearchBar/>
            <Contador initial="5" />
            <Contador initial="15" />
            <Contador initial="10" />
            <Link to='/about'>ABOUT</Link> 

        </Container> 
    </div>
    );
}

export default Home;
 