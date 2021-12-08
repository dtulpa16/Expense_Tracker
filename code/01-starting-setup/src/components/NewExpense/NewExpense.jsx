import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react/cjs/react.development";

const NewExpense = (props) => {
  const [show , setShow] = useState(false)


  const saveExpenseDataHandler = (expenseData) => {
    const data = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.addExpense(data);
  };

  const showForm = () =>{
    setShow(true)
  }
  const hideForm = () =>{
    setShow(false)
  }

  return (
    <div className="new-expense">
      {!show && <button onClick={()=>showForm()}>Add New Expense</button>}
      {show && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} showForm={hideForm}/>}
    </div>
  );
};

export default NewExpense;
