import { useState } from "react";
import ThemeBtn from "./Components/ThemeBtn";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import { TodoProvider } from "./contexts/TodoContext";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const updateTodo = (id, title) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, title } : todo))
    );
  };
  const markTodoCompleted = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) setTodos(todos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, markTodoCompleted }}
    >
      <div className="min-h-[50px] flex justify-end">
        <ThemeBtn />
      </div>

      <div className="flex flex-row justify-center items-cente mt-10">
        <div className="w-3/4 shadow-lg flex flex-col">
          <div>
            <TodoForm />
          </div>
          <div className="mt-5">
            <div className="flex justify-center">
              <ul className="list-none w-full flex flex-col">
                {todos.map((todo) => (
                  <TodoList key={todo.id} todo={todo} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
