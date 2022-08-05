import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";
import { useTodosAction } from "./context/TodoListContext";

const AddTodos = () => {
  const setTodos = useTodosAction();
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    if (!inputValue) {
      alert("please add one character");
    } else if (!isError) {
      setIsError(false);
      setTodos((prevState) => [
        ...prevState,
        { ...inputValue, id: Date.now(), isCompleted: false },
      ]);
      setInputValue("");
    }
  };

  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="mt-4 flex-1 gap-2 rounded-lg flex flex-col bg-zinc-800 py-4 px-2 w-[340px] sm:w-[450px] lg:w-[600px] "
    >
      <label className=" flex-1 p-1 text-xl flex gap-2">
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
          <BiErrorCircle />{" "}
          <span>your todo Length must more than 4 characters</span>
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
          Add Todo
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