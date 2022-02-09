import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

export default function ExpenseItem({ expense }) {
  const [title, setTitle] = useState(expense.title);

  const handleClick = () => {
    setTitle("Updated");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{expense.amount}</div>
      </div>
      <button onClick={handleClick}>Change Title</button>
    </Card>
  );
}
