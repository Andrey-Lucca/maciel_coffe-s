import React, { useState } from "react";
import { Layout } from "antd";
import styles from "./homeStyle.module.scss";
import HeaderComponent from "../../components/header/header";

const { Header } = Layout;

type typeProducts = {
  nome: string;
  idCategoria: Number;
  foto: String;
  preco: Number;
  descricao: String;
};

const Home: React.FC = () => {
  const [productInput, setProductInput] = useState<string>("");

  return (
    <Layout className={styles.mainContainer}>
      <HeaderComponent/>
    </Layout>
  );
};

export default Home;
