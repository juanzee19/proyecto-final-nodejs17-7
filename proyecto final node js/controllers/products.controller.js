import {
  fetchAllProducts,
  fetchProductById,
  addNewProduct,
  removeProduct,
} from "../services/products.service.js";

export const getProductsController = async (req, res) => {
  try {
    const products = await fetchAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos" });
  }
};

export const getProductController = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await fetchProductById(id);
    if (!product) return res.status(404).json({ error: "Producto no encontrado" });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener producto" });
  }
};

export const createProductController = async (req, res) => {
  try {
    const newProduct = await addNewProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteProductController = async (req, res) => {
  const { id } = req.params;
  try {
    await removeProduct(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar producto" });
  }
};
