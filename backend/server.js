import express from "express";
import {transactionsRouter} from "./routes/transactions.js";
import { categoriesRouter } from "./routes/categories.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const PORT = 3000;

app.use("/api/transactions", transactionsRouter);
app.use("/api/categories", categoriesRouter);


app.listen(PORT);