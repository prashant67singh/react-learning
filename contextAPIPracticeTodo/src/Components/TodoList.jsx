import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

const TodoList = ({ todo }) => {
  const [isTodoCompleted, setIsTodoCompleted] = useState(todo.completed);
  const [canEdit, setCanEdit] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const { updateTodo, deleteTodo, markTodoCompleted } = useTodo();
  const checkHandler = (e) => {
    setIsTodoCompleted(e.currentTarget.checked);
    markTodoCompleted(todo.id);
  };

  const updateHandler = () => {
    updateTodo(title);
    setCanEdit(false);
  };

  return (
    <li className="">
      <div className="p-1 w-full rounded-md flex justify-center items-center m-1">
        <input
          type="checkbox"
          className="mx-5 p-2 w-4 h-4"
          checked={todo.completed}
          onChange={(e) => {
            checkHandler(e);
          }}
        />
        <input
          type="text"
          placeholder="Todo Component"
          className={`ml-2 p-2 w-2/3 rounded-md h-[45px] ${
            canEdit ? "border-2 border-gray-400" : "outline-none"
          } ${isTodoCompleted && "line-through"}`}
          readOnly={!canEdit}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {!canEdit ? (
          <button
            type="button"
            className={`m-2 border-2 p-2 rounded-md ${isTodoCompleted && "disabled:opacity-50"}`}
            disabled={isTodoCompleted}
            onClick={() => setCanEdit(true)}
          >
            ✏️
          </button>
        ) : (
          <button
            type="button"
            disabled={isTodoCompleted}
            className={`m-2 border-2 p-2 rounded-md ${isTodoCompleted && "disabled:opacity-50"}`}
            onClick={() => updateHandler(todo.id)}
          >
            💾
          </button>
        )}

        <button
          type="button"
          disabled={isTodoCompleted}
          className={`m-2 border-2 p-2 rounded-md ${isTodoCompleted && "disabled:opacity-50"}`}
          onClick={() => deleteTodo(todo.id)}
        >
          ❌
        </button>
      </div>
    </li>
  );
};

export default TodoList;
