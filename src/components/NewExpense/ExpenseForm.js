import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }
  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData); // Pass the value
    props.ontesting();
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    // The default behavior of a HTML form element is to submit the contents of that form to a server, process them there, and then load a new HTML page with the result.
    // Since you are instead processing the form in your client-side application code, you want to prevent this default behavior, and then show the result from your JavaScript code.
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label> Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label> Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          {/*Call the onCancel in newExpenses*/}
          Cancel
        </button>
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;

//This forms takes the users input, saves it in an object and passes it onto the new Expenses via props.onSaveDataExpense.
//Uses the onClick prop to return a value setEditing = False in NewExpenses.js
