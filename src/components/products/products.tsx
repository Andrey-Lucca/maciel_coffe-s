import React from "react";
import styles from "./productsStyle.module.scss";
import CardOld from "../cardOld/card";
import CardProduct from "../card/card";
import { Pagination } from "antd";

type ProductsProps = {
  selectedScreen: string;
};

const Products: React.FC<ProductsProps> = ({ selectedScreen }) => {

  return (
    <section className={styles.productsContainer}>
      <div className={styles.cakeContainer}>
        <h1>Bolos</h1>
        <div className={styles.cardsContainer}>
          <CardProduct descricao="Cacete Grande PEQUENO rande PEQUENO rande PEQUENO acete Grande PEQUENO rande PEQUENO rande PEQUENO PEQUENO PEQUENO PEQUENO PEQUENO PEQUENOPEQUENO PEQUENOPEQUENO PEQUENOPEQUENO PEQUENO" />
          <CardProduct descricao="Cacete Grande PEQUENO rande PEQUENO rande PEQUENO acete Grande PEQUENO rande PEQUENO rande PEQUENO PEQUENO PEQUENO PEQUENO PEQUENO PEQUENOPEQUENO PEQUENOPEQUENO PEQUENOPEQUENO PEQUENO" />
          <CardProduct descricao="Cacete Grande PEQUENO rande PEQUENO rande PEQUENO acete Grande PEQUENO rande PEQUENO rande PEQUENO PEQUENO PEQUENO PEQUENO PEQUENO PEQUENOPEQUENO PEQUENOPEQUENO PEQUENOPEQUENO PEQUENO" />
          <CardProduct descricao="Cacete Grande PEQUENO rande PEQUENO rande PEQUENO acete Grande PEQUENO rande PEQUENO rande PEQUENO PEQUENO PEQUENO PEQUENO PEQUENO PEQUENOPEQUENO PEQUENOPEQUENO PEQUENOPEQUENO PEQUENO" />
          <CardProduct descricao="Cacete Grande PEQUENO rande PEQUENO rande PEQUENO acete Grande PEQUENO rande PEQUENO rande PEQUENO PEQUENO PEQUENO PEQUENO PEQUENO PEQUENOPEQUENO PEQUENOPEQUENO PEQUENOPEQUENO PEQUENO" />
          <CardProduct descricao="Cacete Grande PEQUENO rande PEQUENO rande PEQUENO acete Grande PEQUENO rande PEQUENO rande PEQUENO PEQUENO PEQUENO PEQUENO PEQUENO PEQUENOPEQUENO PEQUENOPEQUENO PEQUENOPEQUENO PEQUENO" />
          <CardProduct descricao="Cacete Grande PEQUENO rande PEQUENO rande PEQUENO acete Grande PEQUENO rande PEQUENO rande PEQUENO PEQUENO PEQUENO PEQUENO PEQUENO PEQUENOPEQUENO PEQUENOPEQUENO PEQUENOPEQUENO PEQUENO" />
          <CardProduct descricao="Cacete Grande PEQUENO rande PEQUENO rande PEQUENO acete Grande PEQUENO rande PEQUENO rande PEQUENO PEQUENO PEQUENO PEQUENO PEQUENO PEQUENOPEQUENO PEQUENOPEQUENO PEQUENOPEQUENO PEQUENO" />
          <CardProduct descricao="Cacete Grande PEQUENO rande PEQUENO rande PEQUENO acete Grande PEQUENO rande PEQUENO rande PEQUENO PEQUENO PEQUENO PEQUENO PEQUENO PEQUENOPEQUENO PEQUENOPEQUENO PEQUENOPEQUENO PEQUENO" />
        </div>
      </div>
      <div className={styles.drinksContainer}>
        <h1>Bebidas</h1>
        <div className={styles.cardsContainer}>
          <CardProduct descricao="Cacete Grande PEQUENO rande PEQUENO rande PEQUENO acete Grande PEQUENO rande PEQUENO rande PEQUENO PEQUENO PEQUENO PEQUENO PEQUENO PEQUENOPEQUENO PEQUENOPEQUENO PEQUENOPEQUENO PEQUENO" />
        </div>
      </div>
    </section>
  );
};

export default Products;
