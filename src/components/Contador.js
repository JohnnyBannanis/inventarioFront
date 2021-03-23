import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';


function Contador(props){
    const [contador, setContador] = useState(parseInt(props.initial));

    const aumentar = () => {
      setContador(contador + 1)
    }
    const disminuir = () => {
      setContador(contador - 1)
    }
    
    return( 
    <div>
        <p>{contador}</p>
        <Button onClick={aumentar} variant="contained">+</Button>
        <Button onClick={disminuir} variant="contained">-</Button>
    </div>
    );
}

export default Contador;