import './Expenses.scss';

import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem"


const Expenses = (props) => {
  const [ filterYear, setFilteredYear ] = useState('2020');

  const filterChangeHandler = (data) => {
    setFilteredYear(data)
  }

  return (
    <div>
      <Card className='expenses'>
      <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
        <ExpenseItem title={props.item.title} amount={props.item.amount} date={props.item.date}/>
      </Card>
    </div>
  )
}

export default Expenses;