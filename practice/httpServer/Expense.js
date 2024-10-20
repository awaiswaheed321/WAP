import { ApiError } from "./ApiError.js";

const expenses = [
  { id: 1, name: "Groceries", amount: 150, date: new Date(2024, 9, 20) },
  { id: 2, name: "Rent", amount: 1200, date: new Date(2024, 9, 1) },
  { id: 3, name: "Utilities", amount: 200, date: new Date(2024, 9, 15) },
  { id: 4, name: "Internet", amount: 60, date: new Date(2024, 9, 10) },
  { id: 5, name: "Transport", amount: 75, date: new Date(2024, 9, 5) },
];

export default class Expense {
  constructor(i, n, a, d) {
    this.id = i;
    this.name = n;
    this.amount = a;
    this.date = d;
  }

  static createExpense(i, n, a, d) {
    const index = expenses.findIndex((x) => x.id === i);
    if (index !== -1) {
      throw new ApiError(400, `Expense exists already with ID: ${i}`);
    }
    const e = new Expense(i, n, a, d);
    expenses.push(e);
    return e;
  }

  static getExpenseById(id) {
    const expense = expenses.find((x) => x.id === id);
    if (expense) return expense;
    else throw new ApiError(400, `Expense not found with ID: ${id}`);
  }

  static getAllExpenses() {
    return expenses;
  }

  static deleteExpenseById(id) {
    const index = expenses.findIndex((x) => x.id === id);
    if (index === -1) {
      throw new ApiError(400, `Expense not found with ID: ${id}`);
    }
    const e = expenses[index];
    expenses.splice(index, 1);
    return e;
  }

  static updateExpense(i, n, a, d) {
    const index = expenses.findIndex((x) => x.id === i);
    if (index === -1) {
      throw new ApiError(400, `Expense not found with ID: ${i}`);
    }
    if (a && typeof a === "number") {
      expenses[index].amount = a;
    }

    if (n && typeof n === "string") {
      expenses[index].name = n;
    }

    if (d && d instanceof Date) {
      expenses[index].date = d;
    }
    return expenses[index];
  }
}
