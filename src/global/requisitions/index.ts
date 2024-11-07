import axios from "axios";
const URL = process.env.REACT_APP_API_URL;
const KEY = process.env.REACT_APP_SECRET_KEY;

export const addProduct = async (
  nome: string,
  foto: string,
  descricao: string,
  preco: number | undefined,
  idCategoria: number | undefined
): Promise<any> => {
  console.log({ nome, foto, descricao, preco, idCategoria });
  const bodyData = {
    nome,
    foto,
    descricao,
    preco,
    idCategoria,
    token: KEY,
  };

  try {
    const response = await axios.post(`${URL}`, bodyData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Produto adicionado com sucesso!", response.data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  } catch (error) {
    console.error("Erro ao adicionar o produto:", error);
  }
};
