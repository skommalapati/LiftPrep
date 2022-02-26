import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpenseItemList.css";

const ExpenseItemList = (props)  =>{
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.dataSet[0].title}
        date={props.dataSet[0].date}
        amount={props.dataSet[0].amount}
      ></ExpenseItem>

      <ExpenseItem
        title={props.dataSet[1].title}
        date={props.dataSet[1].date}
        amount={props.dataSet[1].amount}
      ></ExpenseItem>

      <ExpenseItem
        title={props.dataSet[2].title}
        date={props.dataSet[2].date}
        amount={props.dataSet[2].amount}
      ></ExpenseItem>

      <ExpenseItem
        title={props.dataSet[3].title}
        date={props.dataSet[3].date}
        amount={props.dataSet[3].amount}
      ></ExpenseItem>
    </Card>
  );
}

export default ExpenseItemList;
