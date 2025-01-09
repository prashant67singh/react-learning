import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editingTodo, updateTodo } from "../feature/todoSlice";
import { useEffect } from "react";

const AddTodo = () => {
  const editObjId = useSelector((state) => state.editTodo?.id || "");
  const editObjText = useSelector((state) => state.editTodo?.text || "");

  const [input, setInput] = useState(editObjText); // This will be set only once

  useEffect(() => {
    setInput(editObjText); // everytime the editTodoObj changes local state needs to be changed therefore use effect is used here.
  }, [editObjText]);

  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input)); // reducer needs to be called inside useDispatch
    setInput("");
  };

  const updateTodoHandler = (e) => {
    e.preventDefault();
    dispatch(updateTodo({id: editObjId, text: input}));
  };

  return  (
    <form onSubmit={ editObjId ? updateTodoHandler : addTodoHandler} className="space-x-3 mt-12 self-center">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {editObjId ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  )
};

export default AddTodo;
