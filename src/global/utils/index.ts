import axios from "axios";
const URL = `${process.env.REACT_APP_API_URL}`;
const KEY = `${process.env.REACT_APP_SECRET_KEY}`;

type ProductsType = {
  descricao: string;
  foto: string;
  nome: string;
  preco: string;
  token: string;
  idProduto: string;
  idCategoria: string;
};

export const addProduct = async (
  nome: string,
  foto: string,
  descricao: string,
  preco: number | undefined | string,
  idCategoria: number | undefined | string
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
      headers,
    });
    return response;
  } catch (error) {
    console.error("Erro ao adicionar o produto:", error);
  }
};

export const getProducts = async (): Promise<ProductsType[]> => {
  try {
    const response = await axios.get(`${URL}?token=${KEY}`);
    const sortedProducts = response.data.sort((a: any, b: any) =>
      a.nome.localeCompare(b.nome)
    );
    return sortedProducts;
  } catch (error) {
    console.error("Error", error);
    return [];
  }
};

export const editProduct = async (product: ProductsType): Promise<any> => {
  const produto = {
    nome: product.nome,
    idCategoria: product.idCategoria,
    foto: product.foto,
    preco: product.preco,
    descricao: product.descricao,
  };

  const idProduto = product.idProduto;

  const produtoJson = JSON.stringify(produto);

  const data = new URLSearchParams();
  data.append("idProduto", idProduto.toString());
  data.append("produto", produtoJson);

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  };

  try {
    const response = await axios.put(`${URL}?token=${KEY}`, data.toString(), {
      headers,
    });

    return response;
  } catch (error) {
    console.error("Error updating product:", error);
  }
};

export const deleteProduct = async (idProduto: string): Promise<any> => {
  const urlDelete = `${URL.trim()}?token=${KEY}&idProduto=${idProduto}`;
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  try {
    const response = await axios.delete(urlDelete, { headers });
    return response;
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};
