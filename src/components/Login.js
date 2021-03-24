import { Button, Input } from "antd";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div>
      <Input
        onChange={(e) => {
          setUsuario(e.target.value);
        }}
        placeholder="Usuario"
      />
      <Input.Password
        onChange={(e) => {
          setPass(e.target.value);
        }}
        placeholder="Contraseña"
      />
      <Button
        onClick={() => {
          axios
            .post("http://sistema_inventario.test/api/login", {
              email: usuario,
              password: pass,
            })
            .then((response) => {
              console.log(response);
            });
        }}
        danger
        type="primary"
      >
        Enviar
      </Button>
    </div>
  );
}

export default Login;
