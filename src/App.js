import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Shirt',
    amount: 720,
    date: new Date(2022, 0, 14),
  },
  { id: 'e2', title: 'New TV', amount: 12000, date: new Date(2021, 10, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 1500,
    date: new Date(2022, 10, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 1000,
    date: new Date(2022, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

 

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
