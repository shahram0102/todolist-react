import React from "react";
import { useTodos, useTodosAction } from "./context/TodoListContext";
import { BiTrash } from "react-icons/bi";
import { GiPencil } from "react-icons/gi";

const TodoList = () => {
  const todos = useTodos();
  const setTodos = useTodosAction();
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };
  const completedHandler = (id) => {
    const updatedIndex = todos.findIndex((item) => item.id === id);
    const updatedItem = { ...todos[updatedIndex] };
    updatedItem.isCompleted = !updatedItem.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[updatedIndex] = updatedItem;
    setTodos(updatedTodos);
  };

  console.log(todos);
  if (todos.length === 0)
    return (
      <div className="flex flex-col justify-center">
        <div className="w-full h-1 bg-orange-500"></div>
        <h2 className="text-orange-500 m-auto p-2 text-2xl">
          list of Your Todos is Empty !
        </h2>
      </div>
    );
  return (
    <div className="flex flex-col gap-8 px-4  pb-8 border-t-4 py-6 border-orange-500">
      {todos.map((todo) => {
        return (
          <div
            key={todo.id}
            className="flex rounded-lg px-3 py-1 gap-2 justify-between border-b-4 pb-2 border-orange-500 shadow-xl shadow-black items-center"
          >
            <div className="flex flex-col  gap-1 flex-1 max-w-xs">
              <p
                onClick={() => completedHandler(todo.id)}
                className={`${!todo.isCompleted? "text-orange-500 cursor-pointer text-lg overflow-x-auto no-scrollbar":"text-orange-500 cursor-pointer line-through opacity-40 text-lg overflow-x-auto no-scrollbar"}`}
              >
                {todo.title}
              </p>
              <span className="text-orange-300 text-sm">
                {new Date(todo.time).toLocaleString()}
              </span>
            </div>
            <div className="flex text-2xl gap-1 ">
              <span
                onClick={() => deleteTodo(todo.id)}
                className="text-red-700 cursor-pointer"
              >
                <BiTrash />
              </span>
              <span className="text-yellow-300 cursor-pointer">
                <GiPencil />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
