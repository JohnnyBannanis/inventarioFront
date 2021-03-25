import { Button, Input, Row, Col, Card, Typography } from "antd";
import { useState } from "react";
import axios from "axios";
const { Title } = Typography;

function Login() {
  const [usuario, setUsuario] = useState("");
  const [pass, setPass] = useState("");

  async function handleClick(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://sistema_inventario.test/api/login",
        {
          email: usuario,
          password: pass,
        }
      );

      const data = response.data;
      localStorage.setItem("token", data.token);

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <Row>
          <Col sm={24} lg={{ span: 8, offset: 8 }}>
            <Card
              style={{
                backgroundColor: "#f0f2f5",
              }}
            >
              <Title level={2} style={{ textAlign: "center" }}>
                Login
              </Title>
              <Input
                type="email"
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
          </Col>
        </Row>
      </form>
    </div>
  );
}

export default Login;
