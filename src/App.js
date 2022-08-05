import React from "react";
import AddTodos from "./components/AddTodos";
import TodoListContestProvider from "./components/context/TodoListContext";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <TodoListContestProvider>
      <AddTodos />
      <TodoList />
    </TodoListContestProvider>
  );
};

export default App;
