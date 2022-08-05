import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";
import { useTodos, useTodosAction } from "./context/TodoListContext";

const AddTodos = () => {
  const { setTodos, setEditItem } = useTodosAction();
  const { todos, editItem } = useTodos();
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    if (editItem === null) {
      if (!inputValue) {
        alert("please add one character");
      } else if (!isError) {
        setIsError(false);
        setTodos((prevState) => [
          ...prevState,
          {
            title: inputValue,
            id: Date.now(),
            isCompleted: false,
            time: new Date().toISOString(),
          },
        ]);
        setInputValue("");
      }
    } else {
      if (!inputValue) {
        alert("please add one character");
      } else if (!isError) {
        setIsError(false);
        editTodo(inputValue, editItem.id, editItem.isCompleted, editItem.time);
        setEditItem(null);
      }
    }
  };

  const editTodo = (title, id, isCompleted, time) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { title, id, isCompleted, time } : todo
    );
    console.log(newTodos);
    setTodos(newTodos);
    setInputValue("");
  };

  const clearTodos = () => {
    setTodos([]);
  };

  useEffect(() => {
    if (editItem !== null) {
      setInputValue(editItem.title);
    } else {
      setInputValue("");
    }
  }, [editItem]);

  return (
    <form
      onSubmit={submitHandler}
      className="mt-4 flex-1 gap-2 flex flex-col bg-zinc-900 py-4 px-2 w-[340px] sm:w-[450px] lg:w-[600px] "
    >
      <label className=" flex-1 p-1 text-xl items-center flex gap-2">
        <BsSearch className="text-orange-500" />
        <input
          className="bg-transparent flex-1 outline-none focus:border-b-2 focus:border-orange-500 duration-500 text-orange-500 placeholder:text-orange-300 placeholder:text-base"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyUp={() =>
            inputValue.length < 4 ? setIsError(true) : setIsError(false)
          }
          type={"text"}
          placeholder="saved youe idea"
        />
      </label>
      {inputValue.length < 4 && isError && (
        <div className="flex px-2 gap-2 text-xl text-red-500 items-center">
          <BiErrorCircle className="text-sm sm:text-2xl" />
          <span className="text-sm sm:text-lg">
            your todo Length must more than 4 characters
          </span>
        </div>
      )}
      <div className="flex justify-center items-center gap-2">
        <button
          disabled={isError}
          className={`${
            isError
              ? "cursor-not-allowed bg-gray-400 font-bold rounded-3xl py-1 px-3"
              : "bg-orange-500 text-zinc-800 font-bold rounded-3xl py-1 px-3"
          } `}
        >
          {editItem ? "Edit Item" : "Add Todo"}
        </button>
        <button
          type="button"
          onClick={clearTodos}
          className="border border-orange-500 font-bold text-orange-500 rounded-3xl py-1 px-3"
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default AddTodos;
