import Contador from './Contador';

import {Link} from 'react-router-dom'

function Home(){

    return( 
    <div>
        <Contador initial="5" />
        <Contador initial="15" />
        <Contador initial="10" />
        <Link to='/about'>ABOUT</Link>   
    </div>
    );
}

export default Home;
 