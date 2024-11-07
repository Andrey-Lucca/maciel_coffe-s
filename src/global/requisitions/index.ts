import axios from "axios";
const URL = `${process.env.REACT_APP_API_URL}`;
const KEY = process.env.REACT_APP_SECRET_KEY;

export const addProduct = async (
  nome: string,
  foto: string,
  descricao: string,
  preco: number | undefined,
  idCategoria: number | undefined
): Promise<any> => {
  const bodyData = {
    nome,
    foto,
    descricao,
    preco,
    idCategoria,
    token: KEY,
  };

  const headers = {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  };

  try {
    const response = await axios.post(URL, bodyData, {
      headers
    });
    return response;
  } catch (error) {
    console.error("Erro ao adicionar o produto:", error);
  }
};
