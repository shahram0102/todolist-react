import React, { createContext, useContext, useEffect, useState } from "react";

const TodoListContest = createContext();
const TodoListContextDispatcher = createContext();

const TodoListContestProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  return (
    <TodoListContest.Provider value={{ todos, editItem }}>
      <TodoListContextDispatcher.Provider value={{ setTodos, setEditItem }}>
        {children}
      </TodoListContextDispatcher.Provider>
    </TodoListContest.Provider>
  );
};

export default TodoListContestProvider;

export const useTodos = () => useContext(TodoListContest);
export const useTodosAction = () => useContext(TodoListContextDispatcher);
