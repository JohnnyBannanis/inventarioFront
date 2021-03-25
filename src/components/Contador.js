import { useState } from "react";
import { Button } from "antd";

function Contador(props) {
  const [contador, setContador] = useState(parseInt(props.initial));

  const aumentar = () => {
    setContador(contador + 1);
  };
  const disminuir = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <p>{contador}</p>
      <Button.Group>
        <Button onClick={aumentar} type="primary">
          +
        </Button>
        <Button onClick={disminuir} danger type="primary">
          -
        </Button>
      </Button.Group>
    </div>
  );
}

export default Contador;
