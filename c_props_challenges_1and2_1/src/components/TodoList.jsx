import "./TodoList.css";
import TodoItem from "./TodoItem";
import { data } from "../db/data";

const TodoList = () => {
  return (
    <>
      <ul>
        <h2>test</h2>
        {data.map((todo, id) => (
          <TodoItem todoObject={todo} key={id}></TodoItem>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
