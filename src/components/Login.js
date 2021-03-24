import { Button, Input, Row, Col } from "antd";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [pass, setPass] = useState("");

  function handleClick(e) {
    e.preventDefault();
    axios
      .post("http://sistema_inventario.test/api/login", {
        email: usuario,
        password: pass,
      })
      .then((response) => {
        console.log(response);
      });
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <Row>
          <Col offset={10}>
            <h1>Login</h1>
          </Col>
        </Row>
        <Row>
          <Col span={4} offset={10}>
            <Input
              onChange={(e) => {
                setUsuario(e.target.value);
              }}
              placeholder="Usuario"
            />
          </Col>
        </Row>
        <Row>
          <Col span={4} offset={10}>
            <Input.Password
              onChange={(e) => {
                setPass(e.target.value);
              }}
              placeholder="Contraseña"
            />
          </Col>
        </Row>
        <Row>
          <Col offset={10}>
            <Button htmlType="submit" danger type="primary">
              Enviar
            </Button>
          </Col>
        </Row>
      </form>
    </div>
  );
}

export default Login;
