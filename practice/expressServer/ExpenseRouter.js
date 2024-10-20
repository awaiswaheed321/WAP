import ExpenseController from "./ExpenseController.js";
import express from "express";

const ExpenseRouter = express.Router();

ExpenseRouter.route("/")
  .post(ExpenseController.createExpense)
  .get(ExpenseController.getAllExpenses);

ExpenseRouter.route("/:id")
  .get(ExpenseController.getById)
  .put(ExpenseController.updateExpense)
  .delete(ExpenseController.deleteExpenseById);

export default ExpenseRouter;
