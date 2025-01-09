import React from "react";
import { useTodo } from "../contexts/TodoContext";
import { useState } from "react";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const addHandler = (e) => {
    e.preventDefault();

    if (!todo) return;
    const todoAdded = {
      title: todo,
      completed: false,
    };
    addTodo(todoAdded);
    setTodo("");
  };

  return (
    <div className="flex justify-center p-3">
      <input
        type="text"
        placeholder="Write Todo ..."
        className="w-2/3 h-12 outline-none bg-slate-300 rounded-md rounded-r-none p-4"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button
        type="button"
        className="h-12 bg-blue-500 shrink-0 p-3 rounded-md rounded-l-none"
        onClick={addHandler}
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;
