import React, { useState } from "react";
import { Layout, Input, Button } from "antd";
import {
  MenuOutlined,
  SearchOutlined,
  PlusCircleFilled,
  PlusCircleOutlined,
} from "@ant-design/icons";
import styles from "./headerStyle.module.scss";
import coffe_logo from "../../assets/images/cafe.png";
import DrawerMenu from "../drawer/drawer";
const { Header } = Layout;

const HeaderComponent: React.FC = () => {
  const [productInput, setProductInput] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);

  const toggleInput = () => {
    setVisible(!visible);
  };
  const handleDrawerClose = () => {
    setVisible(false);
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
            borderColor: "#556B2F",
            color: "#A1887F",
            width: 200
          }}
        />
      </div>
      <div className={styles.setDrawer}>
        <PlusCircleFilled className={styles.headerIcon} />
        <SearchOutlined
          className={styles.headerIcon}
          onClick={toggleInput}
          id={styles.search}
        />
        <DrawerMenu
          visible={visible}
          productInput={productInput}
          setProductInput={setProductInput}
          onClose={handleDrawerClose}
        />
      </div>
    </Header>
  );
};

export default HeaderComponent;
