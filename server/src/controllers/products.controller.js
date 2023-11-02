import products from "../models/products.model.js";

export const getAllProducts = (req, res) => {
  res.json(products);
};

export const getProduct = (req, res) => {
  const productId = parseInt(req.params.productId);
  const searchProduct = products.find(product => product.id === productId);
  res.json(searchProduct);
};

export const addProduct = (req, res) => {
  const newProduct = req.body;

  products.push(newProduct);
  res.json(newProduct);
};

export const updateProduct = (req, res) => {
  const updateProduct = req.body;
  const productId = parseInt(req.params.productId);

  const productIndex = products.findIndex(product => product.id === productId);

  products[productIndex] = {
    ...products[productIndex],
    ...updateProduct,
  };

  res.json(products);
};

export const deleteProduct = (req, res) => {
  const productId = parseInt(req.params.productId);
  const removeProduct = products.splice(productId - 1, 1);
  res.json(removeProduct);
};
