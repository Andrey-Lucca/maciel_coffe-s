import React from "react";
import { Card, ConfigProvider } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import styles from "./cardStyles.modules.scss";
import cappucino from "../../assets/images/cappucino_bg.jpeg";
const { Meta } = Card;

// type TypeProducts = {
//   nome: string;
//   foto: String;
//   preco: Number;
//   descricao: String;
//   idProduto: string;
//   idCategoria: string;
//   token: string;
// };

type TypeProducts = {
  descricao: String;
};

const CardProduct: React.FC<TypeProducts> = ({ descricao }) => {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Card: {
              colorPrimary: "#556B2F",
              colorBgContainer: "#A8B7A3",
            },
          },
          token: {
            colorText: "#FFF",
            colorTextDescription: "#FFF",
          },
        }}
      >
        <Card
          style={{ width: 300, maxWidth: 300 }}
          cover={<img src={cappucino} alt="imagem" />}
          actions={[
            <EditOutlined
              key="edit"
              id={styles.edit}
              style={{ color: "#556B2F", fontWeight: 600 }}
            />,
            <DeleteOutlined
              key="delete"
              id={styles.delete}
              style={{ color: "#7B0000", fontWeight: 600 }}
            />,
          ]}
        >
          <Meta
            title="Capuccino - R$ 15,00"
            description={
              <div
                style={{
                  maxHeight: 60,
                  overflowY: "auto",
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(0, 0, 0, 0.1) transparent",
                  scrollBehavior: "smooth",
                }}
              >
                {descricao}
              </div>
            }
            style={{ height: 100 }}
          />
        </Card>
      </ConfigProvider>
    </>
  );
};

export default CardProduct;
