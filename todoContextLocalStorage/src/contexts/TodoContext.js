import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
  todo: [
    {
      id: 1,
      title: "Learn Context API",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
