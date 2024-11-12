import React, { useState, useEffect } from "react";
import styles from "./productsStyle.module.scss";
import CardProduct from "../card/card";
import { Flex, Spin, ConfigProvider } from "antd";
import { getProducts } from "../../global/utils";
import { LoadingOutlined } from "@ant-design/icons";

type ProductsType = {
  descricao: string;
  foto: string;
  nome: string;
  preco: string;
  token: string;
  idProduto: string;
  idCategoria: string;
};

type ProductsProps = {
  loading: boolean;
  products: ProductsType[];
  productInput: string;
  refreshProducts: () => void;
};

const Products: React.FC<ProductsProps> = ({
  loading,
  products,
  productInput,
  refreshProducts,
}) => {
  const handleProducts = async () => {
    return await getProducts();
  };

  return (
    <section className={styles.productsContainer}>
      {loading ? (
        <div className={styles.loading}>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#556B2F",
              },
            }}
          >
            <Flex align="center" gap="middle">
              <Spin size="large" indicator={<LoadingOutlined />} />
            </Flex>
          </ConfigProvider>
        </div>
      ) : (
        <>
          <div className={styles.cakeContainer}>
            <h1>BOLOS</h1>
            <div className={styles.cardsContainer}>
              {products
                .filter((product) => product.idCategoria === "1")
                .map((product) => (
                  <CardProduct
                    key={product.idProduto}
                    idProduto={product.idProduto}
                    nome={product.nome}
                    descricao={product.descricao}
                    preco={product.preco}
                    foto={product.foto}
                    token={product.token}
                    idCategoria={product.idCategoria}
                    refreshProducts={refreshProducts}
                  />
                ))}
            </div>
          </div>
          <div className={styles.drinksContainer}>
            <h1>BEBIDAS</h1>
            <div className={styles.cardsContainer}>
              {products
                .filter((product) => product.idCategoria === "2")
                .map((product) => (
                  <CardProduct
                    key={product.idProduto}
                    idProduto={product.idProduto}
                    nome={product.nome}
                    descricao={product.descricao}
                    preco={product.preco}
                    foto={product.foto}
                    token={product.token}
                    idCategoria={product.idCategoria}
                    refreshProducts={refreshProducts}
                  />
                ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Products;
