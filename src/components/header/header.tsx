import React, { useState } from "react";
import { Layout, Input, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import styles from "./headerStyle.module.scss";
import coffe_logo from "../../assets/images/cafe.png";
import DrawerMenu from "../drawer/drawer";
const { Header } = Layout;

const HeaderComponent: React.FC = () => {
  const [productInput, setProductInput] = useState<string>("");
  const [visible, setVisible] = useState(false);

  const toggleDrawer = () => {
    visible ? setVisible(false) : setVisible(true);
  };

  return (
    <Header id={styles.header}>
      <div className={styles.logoContainer}>
        <img src={coffe_logo} alt="coffe_logo" />
      </div>
      <div className={styles.menuContainer}>
        <Button
          type="primary"
          style={{
            color: "#FFF",
            borderColor: "#556B2F",
            background: "#556B2F",
          }}
        >
          Adicionar produto
        </Button>
        <Input
          placeholder="Digite o nome do produto"
          value={productInput}
          style={{
            marginLeft: "16px",
            width: "60%",
            borderColor: "#556B2F",
            color: "#A1887F",
          }}
        />
      </div>
      <DrawerMenu
        visible={visible}
        productInput={productInput}
        setProductInput={setProductInput}
      />
      <MenuOutlined onClick={toggleDrawer} className={styles.setDrawer} />
    </Header>
  );
};

export default HeaderComponent;
