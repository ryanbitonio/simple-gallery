import express from "express";
import productsRouter from "./routes/products.router.js";

const app = express();

app.use(express.json());

app.use("/products", productsRouter);

export default app;
