import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, SetEnteredTitle] = useState('')
  const [enteredAmount, SetEnteredAmount] = useState('')
  const [enteredDate, SetEnteredDate] = useState('')

//   const [userInput, setUserInput] = useState({
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });

  const titleChangeHandler = (event) => {
    SetEnteredTitle(event.target.value)
  };

  const amountChangeHandler = (event) => {
    SetEnteredAmount(event.target.value)
  };

  const dateChangeHandler = (event) => {
    SetEnteredDate(event.target.value)
  };

  const submitHandler = (e) =>{
    e.preventDefault();

    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            min="0.01"
            step="0.01"
            type="number"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            min="2019-01-01"
            max="2022-12-31"
            type="date"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
