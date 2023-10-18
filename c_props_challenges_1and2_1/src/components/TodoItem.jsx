/* eslint-disable react/prop-types */
import "./TodoItem.css";

// !Version With PROPS

// const TodoItem = (props) => {
//   return (
//     <>
//       <li className={props.todoObject.doit ? "green" : "red"}>
//         <h3>{props.todoObject.title}</h3>
//         <p>{props.todoObject.description}</p>
//       </li>
//     </>
//   );
// };

//!Version with destructuring
const TodoItem = ({ done, info, extension }) => {
  return (
    <>
      <li className={done ? "green" : "red"}>
        <h3>{info}</h3>
        <p>{extension}</p>
      </li>
    </>
  );
};

export default TodoItem;
