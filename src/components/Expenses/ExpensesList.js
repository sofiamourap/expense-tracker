import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList({ filteredExpenses }) {
  if (!filteredExpenses.length) {
    return <h2 className="expenses-list__fallback">Found no Expense.</h2>;
  }
  return (
    <ul className="expenses-list">
      {filteredExpenses.map((e) => (
        <ExpenseItem key={e.id} expense={e} />
      ))}
    </ul>
  );
}
