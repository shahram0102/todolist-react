import React from "react";
import AddTodos from "./components/AddTodos";
import TodoListContestProvider from "./components/context/TodoListContext";
import NavBar from "./components/NavBar";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="bg-zinc-900 mt-6 rounded-lg flex flex-col">
      <TodoListContestProvider>
        <NavBar />
        <AddTodos />
        <TodoList />
      </TodoListContestProvider>
    </div>
  );
};

export default App;
