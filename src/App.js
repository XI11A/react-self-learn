import React from "react";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Mobile Recharge",
      amount: 94.12,
      date: new Date(2022, 5, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2022, 6, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 7, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2022, 8, 12),
    },
  ];

  return React.createElement(
    "div",
    {},
    React.createElement(
      "h2",
      { align: "center" },
      "Expenses Tracker React Application"
    ),
    React.createElement(
      Expenses,
      { items: expenses }
    )
  );
  // return (
  //   <div>
  //     <h2 align='center'>Expenses Tracker React Application</h2>
  //     <Expenses items={expenses} />
  //   </div>
  // );
}

export default App;
