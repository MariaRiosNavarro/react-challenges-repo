/* eslint-disable react/prop-types */
import "./TodoItem.css";

const TodoItem = (props) => {
  console.log(props);
  return (
    <>
      <li className={props.todoObject.doit ? "green" : "red"}>
        <h3>{props.todoObject.title}</h3>
        <p>{props.todoObject.description}</p>
      </li>
    </>
  );
};

export default TodoItem;
