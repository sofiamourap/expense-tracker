import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense({ onAddExpense }) {
  const [hideForm, setHideForm] = useState(true);

  const saveExpense = (expense) => {
    const ExpenseData = {
      ...expense,
      id: Math.random().toString(),
    };
    onAddExpense(ExpenseData);
  };

  const handleHideForm = (value) => {
    setHideForm(value);
  };

  return (
    <div className="new-expense">
      {hideForm ? (
        <button onClick={() => handleHideForm(false)}>Add Expense</button>
      ) : (
        <ExpenseForm onSaveExpense={saveExpense} onCancel={handleHideForm} />
      )}
    </div>
  );
}
