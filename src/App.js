import React, { useState } from "react";
import AddTodos from "./components/AddTodos";
import TodoListContestProvider, {
  useTodos,
} from "./components/context/TodoListContext";
import NavBar from "./components/NavBar";
import TodoList from "./components/TodoList";

const App = () => {
  const todos = useTodos();
  const [filterTodos, setFilterTodos] = useState(todos);
  return (
    <div className="bg-zinc-900 mt-6 rounded-lg flex flex-col">
      <TodoListContestProvider>
        <NavBar setFilterTodos={setFilterTodos} filterTodos={filterTodos} />
        <AddTodos />
        <TodoList filterTodos={filterTodos}  />
      </TodoListContestProvider>
    </div>
  );
};

export default App;
