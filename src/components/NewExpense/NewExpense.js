import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.scss';



const NewExpense = (props) => {

  const [ isEditing, setIsEditing ] = useState(false);
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
   <div className='new-expense'>
    {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
    {isEditing && <ExpenseForm isCancel={stopEditingHandler} onSaveExpenseData={onSaveExpenseDataHandler}/>}
   </div> 
  )
}

export default NewExpense;