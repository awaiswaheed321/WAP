import express from "express";
import ExpenseRouter from "./ExpenseRouter.js";
import ErrorMiddleware from "./ErrorMiddleware.js";
import LoggingMiddleware from "./LoggingMiddleware.js";

const app = express();
app.set("port", 3000);
const port = app.get("port");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(LoggingMiddleware);
app.use("/api/v1/expense", ExpenseRouter);
app.use(ErrorMiddleware);
app.listen(port, () => {
  console.log("Server Started");
});
