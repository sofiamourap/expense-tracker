import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

export default function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const handleFilteredYear = (year) => {
    setFilteredYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onPickedYear={handleFilteredYear}
      />
      {expenses.map((e) => (
        <ExpenseItem key={e.id} expense={e} />
      ))}
    </Card>
  );
}
