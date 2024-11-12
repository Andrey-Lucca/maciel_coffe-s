import React, { useState } from "react";
import { Layout, Input, Button, Modal, Select, ConfigProvider } from "antd";
import { SearchOutlined, PlusCircleFilled } from "@ant-design/icons";
import styles from "./headerStyle.module.scss";
import coffe_logo from "../../assets/images/cafe.png";
import DrawerMenu from "../drawer/drawer";
import ModalProduct from "../modal/modal";
const { Header } = Layout;

type HeaderComponentProps = {
  productInput: string;
  setProductInput: (word: string) => void;
  refreshProducts: () => void;
};

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  productInput,
  setProductInput,
  refreshProducts,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleInput = (): void => {
    setVisible(!visible);
  };

  const handleDrawerClose = (): void => {
    setVisible(false);
  };

  const showModal = (): void => {
    setIsModalOpen(true);
  };

  const handleSearchProduct = (word: string) => {
    setProductInput(word);
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
          onClick={showModal}
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
            width: 200,
          }}
          onChange={(e) => handleSearchProduct(e.target.value)}
        />
      </div>
      <div className={styles.setDrawer}>
        <PlusCircleFilled className={styles.headerIcon} onClick={showModal} />
        <SearchOutlined
          className={styles.headerIcon}
          onClick={toggleInput}
          id={styles.search}
        />
        <DrawerMenu
          visible={visible}
          productInput={productInput}
          setProductInput={handleSearchProduct}
          onClose={handleDrawerClose}
        />
      </div>
      <ModalProduct
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        refreshProducts={refreshProducts}
      />
    </Header>
  );
};

export default HeaderComponent;
