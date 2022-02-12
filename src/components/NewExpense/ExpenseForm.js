import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm({ onSaveExpense, onCancel }) {
  const initialState = {
    title: "",
    amount: "",
  };
  const [expense, setExpense] = useState(initialState);
  const [date, setDate] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    setExpense((state) => ({ ...state, [name]: value }));
  };

  //differnte handler for the date to create a new Date value
  const hadleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //add the date to the expense object
    const newDate = new Date(date);
    const fullExpense = { ...expense, date: newDate };
    onSaveExpense(fullExpense);
    setExpense(initialState);
    setDate("");
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
            min="2018-01-01"
            max="2022-12-31"
            onChange={hadleDateChange}
            name="date"
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={() => onCancel(true)}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
