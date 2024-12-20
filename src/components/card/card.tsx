import React, { useState } from "react";
import { Card, ConfigProvider, message, Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import styles from "./cardStyles.modules.scss";
import globalStyles from "../../global/styles/globalStyles.module.scss";
import noPhoto from "../../assets/images/no_photo.png";
import ModalProduct from "../modal/modal";
import { deleteProduct } from "../../global/utils";
import he from "he";
const { Meta } = Card;

type ProductsType = {
  descricao: string;
  foto: string;
  nome: string;
  preco: string;
  token: string;
  idProduto: string;
  idCategoria: string;
  refreshProducts: () => void;
};

type ProductEdit = {
  descricao: string;
  foto: string;
  nome: string;
  preco: string;
  token: string;
  idProduto: string;
  idCategoria: string;
};

const CardProduct: React.FC<ProductsType> = ({
  descricao,
  foto,
  nome,
  preco,
  token,
  idProduto,
  idCategoria,
  refreshProducts,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [productsInfo, setProductsInfo] = useState<ProductEdit | null>(null);
  const [modalConfirm, setModalConfirm] = useState<boolean>(false);

  const showModal = (): void => {
    setIsModalOpen(true);
  };

  const handleModalConfirmOpen = (): void => {
    setModalConfirm(true);
  };

  const handleModalConfirmCancel = (): void => {
    setModalConfirm(false);
  };

  const precoFormatado = parseFloat(preco).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const isValidPhoto = foto.includes("http");

  const handleEditProduct = (): void => {
    const objProduct: ProductEdit = {
      descricao,
      foto,
      nome,
      preco,
      token,
      idProduto,
      idCategoria,
    };
    setProductsInfo(objProduct);
    showModal();
  };

  const handleDelete = async () => {
    const response = await deleteProduct(idProduto);
    if (response.status !== 204) {
      message.error("Não foi possível deletar o produto");
      return;
    }
    handleModalConfirmCancel();
    message.success("Produto deletado");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    refreshProducts();
  };
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
          style={{
            width: "100%",
            maxWidth: 400,
            minWidth: 280,
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          cover={<img src={isValidPhoto ? foto : noPhoto} alt="imagem" />}
          actions={[
            <EditOutlined
              key="edit"
              id={styles.edit}
              style={{ color: "#556B2F", fontWeight: 600 }}
              onClick={() => handleEditProduct()}
            />,
            <DeleteOutlined
              key="delete"
              id={styles.delete}
              style={{ color: "#7B0000", fontWeight: 600 }}
              onClick={handleModalConfirmOpen}
            />,
          ]}
        >
          <Meta
            title={
              <div
                style={{
                  whiteSpace: "normal",
                  wordWrap: "break-word",
                  fontSize: "1.2rem",
                  lineHeight: 1.1,
                }}
              >
                <div>{he.decode(nome)}</div>
                <div>{precoFormatado}</div>
              </div>
            }
            description={
              <div
                style={{
                  maxHeight: 60,
                  minHeight: 40,
                  overflowY: "auto",
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(0, 0, 0, 0.1) transparent",
                  scrollBehavior: "smooth",
                  wordWrap: "break-word",
                  lineHeight: 1,
                }}
              >
                {he.decode(descricao)}
              </div>
            }
            style={{ height: 100 }}
          />
        </Card>
      </ConfigProvider>
      <ModalProduct
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        refreshProducts={refreshProducts}
        edit={true}
        productsInfo={productsInfo}
      />
      <Modal
        title="Deseja realmente excluir esse produto?"
        onOk={handleDelete}
        onCancel={handleModalConfirmCancel}
        open={modalConfirm}
        className={globalStyles.modal}
      />
    </>
  );
};

export default CardProduct;
