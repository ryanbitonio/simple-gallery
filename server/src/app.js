import express from "express";
import productsRouter from "./routes/products.router.js";
import helmet from "helmet";

const app = express();

app.use(helmet());

app.use(express.json());

app.use("/products", productsRouter);

export default app;
