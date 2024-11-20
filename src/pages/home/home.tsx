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
  const [allProducts, setAllProducts] = useState<ProductsType[]>([]);
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedScreen, setSelectedScreen] = useState<
    "default" | "drinks" | "cakes"
  >("default");
  const [productInput, setProductInput] = useState<string>("");

  const handleSelectScreen = (screen: "drinks" | "cakes") => {
    setSelectedScreen(screen);
  };

  const refreshProducts = async () => {
    setLoading(true);
    const productsData = await getProducts();
    setAllProducts(productsData);
    setProducts(productsData);
    setLoading(false);
  };

  const handleProductSearch = (input: string) => {
    if (input === "") {
      setProducts(allProducts);
    } else {
      const regex = new RegExp(`${input}`, "i");
      const filteredProducts = allProducts.filter((product) =>
        regex.test(product.nome)
      );
      setProducts(filteredProducts);
    }
  };

  useEffect(() => {
    refreshProducts();
  }, []);

  useEffect(() => {
    handleProductSearch(productInput);
  }, [productInput]);

  return (
    <Layout className={styles.mainContainer}>
      <HeaderComponent
        refreshProducts={refreshProducts}
        productInput={productInput}
        setProductInput={setProductInput}
      />
      <Products
        products={products}
        loading={loading}
        refreshProducts={refreshProducts}
        productInput={productInput}
      />
    </Layout>
  );
};

export default Home;
