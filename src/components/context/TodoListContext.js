import React, { createContext, useContext, useState } from "react";

const TodoListContest = createContext();
const TodoListContextDispatcher = createContext();

const TodoListContestProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  return (
    <TodoListContest.Provider value={todos}>
      <TodoListContextDispatcher.Provider value={setTodos}>
        {children}
      </TodoListContextDispatcher.Provider>
    </TodoListContest.Provider>
  );
};

export default TodoListContestProvider;

export const useTodos = () => useContext(TodoListContest);
export const useTodosAction = () => useContext(TodoListContextDispatcher);
