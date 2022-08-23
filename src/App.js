import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Mobile Recharge",
      amount: 239,
      date: new Date(2022, 5, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 14999.99,
      date: new Date(2022, 6, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 4597.42,
      date: new Date(2022, 7, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 4772,
      date: new Date(2022, 8, 12),
    },
  ];

  function addExpenseHandler (expense){
    console.log('In App.js');
    console.log(expense)
  }

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement(
  //     "h2",
  //     { align: "center" },
  //     "Expenses Tracker React Application"
  //   ),
  //   React.createElement(
  //     Expenses,
  //     { items: expenses }
  //   )
  // );
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
