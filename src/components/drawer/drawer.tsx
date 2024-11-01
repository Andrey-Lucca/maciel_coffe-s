import React from "react";
import { Drawer, Button, Input } from "antd";
import styles from "./drawerStyle.module.scss";

interface DrawerMenuProps {
  visible: boolean;
  productInput: string;
  setProductInput: React.Dispatch<React.SetStateAction<string>>;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({
  visible,
  productInput,
  setProductInput,
}) => {
  return (
    <div className={styles.containerStyle}>
      <Drawer
        title="Adicionar Produto"
        placement="right"
        closable={true}
        open={visible}
        getContainer={false}
      >
        <Button
          type="primary"
          style={{
            color: "#FFF",
            borderColor: "#556B2F",
            background: "#556B2F",
            width: "100%",
            marginBottom: "16px",
          }}
        >
          Adicionar produto
        </Button>

        <Input
          placeholder="Digite o nome do produto"
          value={productInput}
          onChange={(e) => setProductInput(e.target.value)}
          style={{
            width: "100%",
            borderColor: "#556B2F",
            color: "#A1887F",
          }}
        />
      </Drawer>
    </div>
  );
};

export default DrawerMenu;
