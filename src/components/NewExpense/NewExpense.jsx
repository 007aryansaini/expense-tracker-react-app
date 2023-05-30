import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const newExpenseHandler = (enteredExpenseData) => {
    const newExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.addNewExpense(newExpenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onExpenseSave={newExpenseHandler} />
    </div>
  );
};

export default NewExpense;
