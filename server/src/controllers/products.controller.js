import products from "../models/products.model.js";

export const getAllProducts = (req, res) => {
  if (products.length === 0) {
    res.status(400).json({ error: "No products found" });
  } else {
    res.status(200).json(products);
  }
};

export const getProduct = (req, res) => {
  const productId = parseInt(req.params.productId);

  const searchProduct = products.find(product => product.id === productId);

  if (products.length === 0) {
    res.status(400).json({ error: "No products found" });
  } else if (searchProduct) {
    res.status(200).json(searchProduct);
  } else {
    res.status(404).json({ error: "Enter a valid product id" });
  }
};

export const addProduct = (req, res) => {
  const newProduct = req.body;

  const searchProduct = products.find(product => product.id === req.body.id);

  if (!req.body.id) {
    res.status(400).json({ error: "Enter a product id" });
  } else if (searchProduct) {
    res.status(400).json({ error: "Product id already exists" });
  } else {
    products.push(newProduct);
    res.json(newProduct);
  }
};

export const updateProduct = (req, res) => {
  const updateProduct = req.body;
  const productId = parseInt(req.params.productId);

  const productIndex = products.findIndex(product => product.id === productId);

  if (products.length === 0) {
    res.status(400).json({ error: "No products found" });
  } else if (productIndex >= 0) {
    products[productIndex] = {
      ...products[productIndex],
      ...updateProduct,
    };

    res.json(products);
  } else {
    res.status(404).json({ error: "Enter a valid product id" });
  }
};

export const deleteProduct = (req, res) => {
  const productId = parseInt(req.params.productId);

  const productIndex = products.findIndex(product => product.id === productId);

  if (products.length === 0) {
    res.status(400).json({ error: "No products found" });
  } else if (productIndex >= 0) {
    const deleteProduct = products.splice(productIndex, 1);
    res.status(200).json(deleteProduct);
  } else {
    res.status(404).json({ error: "Enter a valid product id" });
  }
};
