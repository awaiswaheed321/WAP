import express from "express";
import ExpenseRouter from "./ExpenseRouter.js";
import ErrorMiddleware from "./ErrorMiddleware.js";
import LoggingMiddleware from "./LoggingMiddleware.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();
app.set("port", 3000);
const port = app.get("port");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(LoggingMiddleware);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use("/api/v1/files", express.static(join(__dirname, "data")));
app.use("/api/v1/expense", ExpenseRouter);
app.use(ErrorMiddleware);
app.listen(port, () => {
  console.log("Server Started");
});
