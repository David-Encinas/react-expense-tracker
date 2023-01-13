import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';

import './Expenses.scss';

const Expenses = (props) => {
  const [ filterYear, setFilteredYear ] = useState('2020');

  const filterChangeHandler = (data) => {
    setFilteredYear(data);
  }

  const filteredExpenses = props.item.filter(items => {
    return items.date.getFullYear().toString() === filterYear;
  } )



  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter 
          selected={filterYear} 
          onChangeFilter={filterChangeHandler}
        />             
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  )
}

export default Expenses;