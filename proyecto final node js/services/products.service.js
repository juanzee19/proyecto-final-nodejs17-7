import {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
} from "../models/products.model.js";

export const fetchAllProducts = async () => {
  return await getProducts();
};

export const fetchProductById = async (id) => {
  return await getProduct(id);
};

export const addNewProduct = async (data) => {
  return await createProduct(data);
};

export const removeProduct = async (id) => {
  return await deleteProduct(id);
};
