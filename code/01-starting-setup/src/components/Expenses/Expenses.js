import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import "./ExpensesFilter.css";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [year, setYear] = useState("2021");

  const newYear = (yearChoice) => {
    setYear(yearChoice);
  };

  const filtered = props.expenses.filter((element) => {
    return element.date.getFullYear().toString() === year;
  });



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter newYear={newYear} year={year} />
        <ExpensesList items = {filtered}/>
      </Card>
    </div>
  );
}
export default Expenses;
