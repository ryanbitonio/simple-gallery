import express from "express";

const productsRouter = express.Router();

import {
  getAllProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

productsRouter.get("/", getAllProducts);

productsRouter.get("/:productId", getProduct);

productsRouter.post("/", addProduct);

productsRouter.put("/:productId", updateProduct);

productsRouter.delete("/:productId", deleteProduct);

export default productsRouter;
