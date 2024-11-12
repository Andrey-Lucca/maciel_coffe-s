import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import styles from "./homeStyle.module.scss";
import HeaderComponent from "../../components/header/header";
//import ProductSelection from "../../components/productSelection/productSelection";
import Products from "../../components/products/products";
import { getProducts } from "../../global/utils";

type ProductsType = {
  descricao: string;
  foto: string;
  nome: string;
  preco: string;
  token: string;
  idProduto: string;
  idCategoria: string;
};

const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedScreen, setSelectedScreen] = useState<
    "default" | "drinks" | "cakes"
  >("default");

  const handleSelectScreen = (screen: "drinks" | "cakes") => {
    setSelectedScreen(screen);
  };

  const refreshProducts = async () => {
    setLoading(true);
    const productsData = await getProducts();
    setProducts(productsData);
    setLoading(false);
  };

  useEffect(() => {
    refreshProducts();
  }, []);

  return (
    <Layout className={styles.mainContainer}>
      <HeaderComponent refreshProducts={refreshProducts} />
      <Products products={products} loading={loading} refreshProducts={refreshProducts}/>
    </Layout>
  );
};

export default Home;
