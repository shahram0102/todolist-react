import React, { useEffect, useState } from "react";
import { useTodos } from "./context/TodoListContext";

const NavBar = ({ setFilterTodos }) => {
  const { todos } = useTodos();
  const [selectedOption, setSelectedOption] = useState("All");

  const changeHandler = (e) => {
    setSelectedOption(e.target.value);
    changedTodos(e.target.value);
  };

  const changedTodos = (value) => {
    switch (value) {
      case "Completed": {
        const filterTodos = todos.filter((todo) => todo.isCompleted);
        return setFilterTodos(filterTodos);
      }
      case "UnCompleted": {
        const filterTodos = todos.filter((todo) => !todo.isCompleted);
        return setFilterTodos(filterTodos);
      }

      default: {
        return setFilterTodos(todos);
      }
    }
  };

  useEffect(() => {
    changedTodos(selectedOption);

  }, [todos]);

  return (
    <header className="w-full py-2 px-4 flex gap-2 justify-between">
      <h2 className="relative pr-4 sm:text-2xl text-orange-500">
        You completed Todo
        <span className="w-6  h-6 absolute top-0 -right-3 bg-orange-500 text-zinc-800 rounded-full flex justify-center items-center">
          {todos.filter(todo=>todo.isCompleted).length}
        </span>
      </h2>
      <div>
        <select
          value={selectedOption}
          onChange={changeHandler}
          className="bg-inherit text-orange-500 border-2 border-orange-500 rounded-lg p-1 outline-none"
        >
          <option
            value={"All"}
            className="bg-zinc-800 checked:bg-orange-500 checked:text-zinc-800"
          >
            All
          </option>
          <option
            value={"Completed"}
            className="bg-zinc-800 checked:bg-orange-500 checked:text-zinc-800"
          >
            completed
          </option>
          <option
            value={"UnCompleted"}
            className="bg-zinc-800 checked:bg-orange-500 checked:text-zinc-800"
          >
            unCompleted
          </option>
        </select>
      </div>
    </header>
  );
};

export default NavBar;
