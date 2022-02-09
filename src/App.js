import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Car insurance",
      amount: 294.67,
      date: new Date(2021, 1, 28),
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
  return (
    <div>
      <h2>Expense Tracker</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
