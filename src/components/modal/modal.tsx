import React, { useState } from "react";
import globalStyles from "../../global/styles/globalStyles.module.scss";
import { Input, Modal, Select, ConfigProvider, message } from "antd";
import { addProduct } from "../../global/requisitions";
type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
};

type Products = {
  nome: string;
  idCategoria: Number;
  foto: String;
  preco: Number;
  descricao: String;
};

const ModalProduct: React.FC<ModalProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const [nome, setNome] = useState<string>("");
  const [foto, setFoto] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [preco, setPreco] = useState<number>();
  const [idCategoria, setIdCategoria] = useState<number>();

  const handleCancel = (): void => {
    setIsModalOpen(false);
  };

  const setItemsEmpty = (): void => {
    setNome("");
    setFoto("");
    setDescricao("");
    setPreco(undefined);
    setIdCategoria(undefined);
  };

  const isFormValid =
    nome.trim() !== "" &&
    foto.trim() !== "" &&
    descricao.trim() !== "" &&
    preco !== undefined &&
    idCategoria !== undefined;

  const handleProduct = async (): Promise<void> => {
    const response = await addProduct(
      nome,
      foto,
      descricao,
      preco,
      idCategoria
    );
    if (response.status !== 201) {
      message.error("Algo deu errado ao adicionar seu produto");
      return;
    }
    message.success("Produto adicionado");
    setItemsEmpty();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsModalOpen(false);
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
        title="Adicionar Produto"
        open={isModalOpen}
        onCancel={handleCancel}
        className={globalStyles.modal}
        onOk={handleProduct}
        okButtonProps={{ disabled: !isFormValid }}
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
