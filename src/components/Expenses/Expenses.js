import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const handleFilteredYear = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = expenses.filter(
    (e) => e.date.getFullYear() === +filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        // 2 way data binding with the selected year
        selected={filteredYear}
        onPickedYear={handleFilteredYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
}
