import axios from "axios";

const backendUrl = "http://localhost:8000";

export const getProducts = async () => {
  try {
    const products = await axios
      .get(`${backendUrl}/getproducts`)
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });
    return products;
  } catch (error) {
    return error;
  }
};

export const getProductById = async (productId) => {
  try {
    const product = await axios
      .get(`${backendUrl}/getproduct/${productId}`)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        throw error;
      });
    return product;
  } catch (error) {
    return error;
  }
};
