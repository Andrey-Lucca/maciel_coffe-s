import React, { useState, useEffect } from "react";
import globalStyles from "../../global/styles/globalStyles.module.scss";
import { Input, Modal, Select, ConfigProvider, message, Button } from "antd";
import { addProduct, editProduct } from "../../global/utils";

type ProductEdit = {
  descricao: string;
  foto: string;
  nome: string;
  preco: string;
  token: string;
  idProduto: string;
  idCategoria: string;
};

type ModalProps = {
  isModalOpen: boolean;
  edit?: boolean;
  productsInfo?: ProductEdit | null;
  setIsModalOpen: (open: boolean) => void;
  refreshProducts: () => void;
};

const ModalProduct: React.FC<ModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  refreshProducts,
  edit,
  productsInfo,
}) => {
  const [nome, setNome] = useState<string>("");
  const [foto, setFoto] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [preco, setPreco] = useState<number | string>();
  const [idCategoria, setIdCategoria] = useState<number | string>();

  useEffect(() => {
    if (edit && isModalOpen && productsInfo) {
      setNome(productsInfo.nome || "");
      setFoto(productsInfo.foto || "");
      setDescricao(productsInfo.descricao || "");
      setPreco(productsInfo.preco ? parseFloat(productsInfo.preco) : undefined);
      setIdCategoria(
        productsInfo.idCategoria
          ? parseInt(productsInfo.idCategoria)
          : undefined
      );
    }
  }, [isModalOpen, edit, productsInfo]);

  const setItemsEmpty = (): void => {
    setNome("");
    setFoto("");
    setDescricao("");
    setPreco(undefined);
    setIdCategoria(undefined);
  };

  const handleCancel = (): void => {
    setItemsEmpty();
    setIsModalOpen(false);
  };

  const isFormValid =
    nome.trim() !== "" &&
    descricao.trim() !== "" &&
    preco !== undefined &&
    idCategoria !== undefined;

  const handleProduct = async (): Promise<void> => {
    if (edit && productsInfo) {
      const productObjectEdit = {
        nome,
        descricao,
        foto,
        preco: `${preco}`,
        idCategoria:`${idCategoria}`,
        token: productsInfo.token,
        idProduto: productsInfo.idProduto
      }
      editProduct(productObjectEdit);
    }
    // const response = await addProduct(
    //   nome,
    //   foto,
    //   descricao,
    //   preco,
    //   idCategoria
    // );
    // if (response.status !== 201) {
    //   message.error("Algo deu errado ao adicionar seu produto");
    //   return;
    // }
    // message.success("Produto adicionado");
    // setItemsEmpty();
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // setIsModalOpen(false);
    // refreshProducts();
  };

  const seeProducts = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsModalOpen(false);
    refreshProducts();
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            activeBorderColor: "#556B2F",
            hoverBorderColor: "#556B2F",
          },
        },
      }}
    >
      <Modal
        title={!edit ? "Adicionar Produto" : "Editar Produto"}
        open={isModalOpen}
        onCancel={handleCancel}
        className={globalStyles.modal}
        onOk={handleProduct}
        footer={[
          <>
            <Button
              title="Ver todos os Produtos"
              id={globalStyles.allProducts}
              onClick={seeProducts}
            >
              Ver todos os produtos
            </Button>
            <Button
              title="Cancelar"
              style={{ backgroundColor: "#7B0000", color: "#FFF" }}
              id={globalStyles.cancel}
              onClick={handleCancel}
            >
              Cancelar
            </Button>
            <Button
              title="Confirmar"
              style={{ color: "#FFF" }}
              onClick={handleProduct}
              disabled={!isFormValid}
            >
              Confirmar
            </Button>
          </>,
        ]}
      >
        <div className={globalStyles.inputs}>
          <Input
            placeholder="Digite o nome do produto"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Input
            placeholder="Digite o preço do produto"
            value={preco}
            type="number"
            onChange={(e) => setPreco(Number(e.target.value))}
          />
          <Input
            placeholder="Insira a URL da imagem do produto"
            value={foto}
            onChange={(e) => setFoto(e.target.value)}
          />
          <Select
            options={[
              {
                value: 1,
                label: "Bolo",
              },
              {
                value: 2,
                label: "Bebida",
              },
            ]}
            value={idCategoria}
            placeholder="Selecione a categoria do produto"
            onChange={(value) => setIdCategoria(value)}
          />
          <textarea
            name="description"
            id="description"
            maxLength={100}
            placeholder="Digite uma breve descrição do produto (Max = 50)"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></textarea>
        </div>
      </Modal>
    </ConfigProvider>
  );
};
export default ModalProduct;
