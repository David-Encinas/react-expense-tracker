import './Expenses.scss';
import ExpenseItem from "./ExpenseItem"
import Card from './Card';

function Expenses(props) {

  return (
    <Card className='expenses'>
      <ExpenseItem title={props.item.title} amount={props.item.amount} date={props.item.date}/>
    </Card>
  )
}

export default Expenses;