import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2019");

  function filterChangeHandler(getYear) {
    setFilterYear(getYear);
  }

  const filteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onGetYear={filterChangeHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;

//Get the year from ExpenseFilter.js and passes a default ("2019") value
// Gets the item values from app.js and filters it using the year from ExpensesFilter.js
