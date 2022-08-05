import React from "react";
import { useTodos } from "./context/TodoListContext";

const TodoList = () => {
  const todos = useTodos();
  console.log(todos);
  return <div>TodoList</div>;
};

export default TodoList;
