import express from "express";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "./controllers/products.controller.js";

const app = express();

app.use(express.json());

app.get("/products", getAllProducts);

app.get("/products/:productId", getProduct);

app.post("/products", addProduct);

app.put("/products/:productId", updateProduct);

app.delete("/products/:productId", deleteProduct);

export default app;
