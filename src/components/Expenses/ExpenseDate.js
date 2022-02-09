import "./ExpenseDate.css";

export default function ExpenseDate({ date }) {
  // const date = new Date(2021, 2, 28);
  const month = date.toLocaleString("en-UK", { month: "long" });
  const day = date.toLocaleString("en-UK", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}
