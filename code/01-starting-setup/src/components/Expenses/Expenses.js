import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import "./ExpensesFilter.css";

function Expenses(props) {
  const [year, setYear] = useState("2021");

  const newYear = (yearChoice) => {
    setYear(yearChoice);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter newYear={newYear} year={year} />
        {props.expenses.map((element) => 
          <ExpenseItem
            key={element.id}
            title={element.title}
            amount={element.amount}
            date={element.date}
          />
        )}
      </Card>
    </div>
  );
}
export default Expenses;
