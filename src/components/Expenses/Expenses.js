import './Expenses.scss';
import ExpenseItem from "./ExpenseItem"
import Card from '../UI/Card';

const Expenses = (props) => {

  return (
    <Card className='expenses'>
      <ExpenseItem title={props.item.title} amount={props.item.amount} date={props.item.date}/>
    </Card>
  )
}

export default Expenses;