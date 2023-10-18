import "./TodoList.css";
import TodoItem from "./TodoItem";
import { data } from "../db/data";

// !VERSION With PROPS

// const TodoList = () => {
//     return (
//       <>
//         <ul>
//           <h2>test</h2>
//           {data.map((todo, id) => (
//             <TodoItem todoObject={todo} key={id}></TodoItem>
//           ))}
//         </ul>
//       </>
//     );
//   };

//   export default TodoList;

//!Version with destructuring

const TodoList = () => {
  return (
    <>
      <ul>
        <h2>test</h2>
        {data.map((todo) => (
          <TodoItem
            key={todo.id}
            info={todo.title}
            extension={todo.description}
            done={todo.doit}
          ></TodoItem>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
