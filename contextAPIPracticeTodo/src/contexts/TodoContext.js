import React from "react";
import { useContext } from "react";

export const TodoContext = React.createContext({
  todos: [],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (id, title) => {},
  markTodoCompleted: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
