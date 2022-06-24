import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  function saveDataExpenseHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData, //get this value from the save data in Expense Form
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  function testtt() {
    console.log("test in new");
  }

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = (test) => {
    setIsEditing(false);
    const testing = {
      ...test,
    };
    console.log(testing);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}> Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveDataExpenseHandler} //Pass the value to the saveDataEx
          ontesting={testtt}
          onCancel={stopEditingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
}

export default NewExpense;
