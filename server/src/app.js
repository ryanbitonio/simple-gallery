import express from "express";

const app = express();

app.use(express.json());

const products = [
  {
    id: 1,
    title: "Product 1",
    description: "Expensive",
  },
  {
    id: 2,
    title: "Product 2",
    description: "Old School",
  },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);
  const searchProduct = products.find(product => product.id === productId);
  res.json(searchProduct);
});

app.post("/products", (req, res) => {
  const newProduct = req.body;

  products.push(newProduct);
  res.json(newProduct);
});

app.put("/products/:productId", (req, res) => {
  const updateProduct = req.body;
  const productId = parseInt(req.params.productId);

  const productIndex = products.findIndex(product => product.id === productId);

  products[productIndex] = {
    ...products[productIndex],
    ...updateProduct,
  };

  res.json(products);
});

app.delete("/products/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);
  const removeProduct = products.splice(productId - 1, 1);
  res.json(removeProduct);
});

export default app;
