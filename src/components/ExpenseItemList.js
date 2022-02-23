import ExpenseItem from "./ExpenseItem";
import "./ExpenseItemList.css";

function ExpenseItemList(props) {
  return (
    <div className="expenses">
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
    </div>
  );
}

export default ExpenseItemList;
