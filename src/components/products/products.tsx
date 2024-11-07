import React from "react";
import styles from "./productsStyle.module.scss";
import Card from "../card/card";
import { Pagination } from "antd";

type ProductsProps = {
  selectedScreen: string;
};

const Products: React.FC<ProductsProps> = ({ selectedScreen }) => {
  return (
    <section className={styles.productsContainer}>
      <div className={styles.cardsContainer}>
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Products;
