import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm({ onSaveExpense }) {
  const initialState = {
    title: "",
    amount: "",
    date: "",
  };
  const [expense, setExpense] = useState(initialState);

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    setExpense((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveExpense(expense);
    setExpense(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={handleChange}
            name="title"
            value={expense.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleChange}
            name="amount"
            value={expense.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={handleChange}
            name="date"
            value={expense.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
