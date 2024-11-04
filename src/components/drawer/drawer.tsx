import React from "react";
import { Drawer, Button, Input } from "antd";
import styles from "./drawerStyle.module.scss";

interface DrawerMenuProps {
  visible: boolean;
  productInput: string;
  setProductInput: React.Dispatch<React.SetStateAction<string>>;
  onClose: () => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({
  visible,
  productInput,
  setProductInput,
  onClose,
}) => {
  return (
    <div className={styles.containerStyle}>
      <Drawer
        title="Procurar Produto"
        placement="bottom"
        closable={true}
        open={visible}
        onClose={onClose}
        height="20%"
      >
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
