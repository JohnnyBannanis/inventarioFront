import { useState } from "react";
import { Layout, Menu } from "antd";
import { useHistory } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  InfoCircleOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const SliderDemo = (props) => {
  const history = useHistory();
  const [collapsed, setCollapse] = useState(false);

  const toggle = () => {
    setCollapse((value) => !value);
  };

  return (
    <Layout
      style={{ minHeight: "100vh" }}
      id="components-layout-demo-custom-trigger"
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item
            key="1"
            icon={<HomeOutlined />}
            onClick={() => history.push("/")}
          >
            Home
          </Menu.Item>
          <Menu.Item
            key="2"
            onClick={() => history.push("/about")}
            icon={<InfoCircleOutlined />}
          >
            About
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div
            onClick={toggle}
            style={{ paddingLeft: "30px" }}
            className="trigger"
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default SliderDemo;
