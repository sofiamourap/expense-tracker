import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpenses = [
  {
    id: 1,
    title: "Car insurance",
    amount: 294.67,
    date: new Date(2020, 1, 28),
  },
  {
    id: 2,
    title: "Groceries",
    amount: 54.19,
    date: new Date(2021, 3, 15),
  },
  {
    id: 3,
    title: "Travel",
    amount: 194.67,
    date: new Date(2021, 5, 7),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpense = (expense) => {
    setExpenses((state) => [...state, expense]);
  };
  return (
    <div>
      <h2>Expense Tracker</h2>
      <NewExpense onAddExpense={addExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
