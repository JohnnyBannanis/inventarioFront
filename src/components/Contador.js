import { useEffect, useState } from 'react';

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
        <button onClick={aumentar}> + </button> 
        <button onClick={disminuir }> - </button>
    </div>
    );
}

export default Contador;