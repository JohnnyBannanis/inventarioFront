import { Button, Input, Row, Col, Card, Typography } from "antd";
import { useState } from "react";
import axios from "axios";
const { Title } = Typography;

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
        {/* <Row> */}
        {/* <Col md={24} lg={{ span: 6, offset: 9 }}> */}
        <Card
          style={{
            backgroundColor: "#f0f2f5",
            margin: "13%",
          }}
        >
          <Title level={2} style={{ textAlign: "center" }}>
            Login
          </Title>
          <Input
            style={{ marginBottom: "10px" }}
            onChange={(e) => {
              setUsuario(e.target.value);
            }}
            placeholder="Usuario"
          />
          <Input.Password
            style={{ marginBottom: "10px" }}
            onChange={(e) => {
              setPass(e.target.value);
            }}
            placeholder="Contraseña"
          />
          <Button block htmlType="submit" danger type="primary">
            Enviar
          </Button>
        </Card>
        {/* </Col>
        </Row> */}
      </form>
    </div>
  );
}

export default Login;
