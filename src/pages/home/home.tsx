import React, { useState } from "react";
import { Layout } from "antd";
import styles from "./homeStyle.module.scss";
import HeaderComponent from "../../components/header/header";
import ProductSelection from "../../components/productSelection/productSelection";
import Products from "../../components/products/products";

const Home: React.FC = () => {
  const [selectedScreen, setSelectedScreen] = useState<
    "default" | "drinks" | "cakes"
  >("default");

  const handleSelectScreen = (screen: "drinks" | "cakes") => {
    setSelectedScreen(screen);
  };
  return (
    <Layout className={styles.mainContainer}>
      <HeaderComponent />
      {selectedScreen === "default" && (
        <ProductSelection onSelectScreen={handleSelectScreen} />
      )}

      {selectedScreen !== "default" && (
        <Products selectedScreen={selectedScreen} />
      )}

      {/* {selectedScreen === "drinks" && (
        <div className={styles.drinksScreen}>
          <Card />
          <Card />
        </div>
      )}

      {selectedScreen === "cakes" && (
        <div className={styles.cakesScreen}>
          <h2>Tela de Bolos</h2>
        </div>
      )} */}
    </Layout>
  );
};

export default Home;
