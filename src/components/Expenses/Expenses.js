import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

export default function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      {expenses.map((e) => (
        <ExpenseItem key={e.id} expense={e} />
      ))}
    </Card>
  );
}
