import Expense from "./Expense.js";

const ExpenseController = {
  createExpense: (req, res, _) => {
    const id = req.body.id;
    const name = req.body.name;
    const amount = req.body.amount;
    const date = req.body.date;
    if (id && name && amount && date) {
      const e = Expense.createExpense(id * 1, name, amount, new Date(date));
      res.status(201).json(e);
    } else {
      res.status(400).json({ message: "Send all params" });
    }
  },

  getById: (req, res, _) => {
    const id = req.params.id;
    if (!id) {
      res.status(400).json({ message: "Send ID" });
      return;
    }
    const e = Expense.getExpenseById(id * 1);
    res.status(200).json(e);
  },

  getAllExpenses: (req, res, _) => {
    res.status(200).json(Expense.getAllExpenses());
  },

  deleteExpenseById: (req, res, _) => {
    const id = req.params.id;
    if (!id) {
      res.status(400).json({ message: "Send ID" });
      return;
    }
    const e = Expense.deleteExpenseById(id * 1);
    res.status(200).json(e);
  },

  updateExpense: (req, res, _) => {
    const id = req.params.id;
    const name = req.body.name;
    const amount = req.body.amount;
    const date = req.body.date;
    const e = Expense.updateExpense(id * 1, name, amount, new Date(date));
    res.status(200).json(e);
  },
};

export default ExpenseController;
