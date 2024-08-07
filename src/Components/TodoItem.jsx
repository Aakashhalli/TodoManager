import React, { useState } from "react";
import { useTodo } from "../TodoContexts/TodoContext";

function TodoItem({ todo }) {
  const { toggleCompleted, deleteTodo, updateTodoText } = useTodo();

  const [isEditable, setIsEditable] = useState(false);
  const [todoText, setTodoText] = useState(todo.todo);
  const [todoDate, setTodoDate] = useState(todo.date);

  const handleToggle = () => {
    toggleCompleted(todo.id);
  };
  const handleDelete = () => {
    deleteTodo(todo.id);
  };
  const handleUpdateAndToggle = (e) => {
    setIsEditable((prev) => !prev);
    updateTodoText(todo.id, todoText, todoDate);
  };
  return (
    <div className="flex justify-center ">
      <div
        id="todosContainer"
        className={`flex bg-white sm:w-[640px] w-full p-2 rounded-md justify-between items-center ${
          todo.isCompleted ? "bg-green-300" : ""
        }`}
      >
        <div>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={handleToggle}
          />
        </div>
        <div>
          <input
            type="text"
            value={todoText}
            disabled={!isEditable}
            className={`sm:w-[370px] w-[120px] shrink-0 py-1 text-black font-semibold outline-none ml-2 ${
              todo.isCompleted ? "line-through bg-green-300" : ""
            }`}
            onChange={(e) => setTodoText(e.target.value)}
          />
        </div>
        <div>
          <input
            type="date"
            className="text-black w-[120px] outline-none"
            value={todoDate}
            disabled={!isEditable}
            onChange={(e) => setTodoDate(e.target.value)}
          />
        </div>
        <div className="flex sm:flex-row flex-col items-center gap-1 mx-1">
          <div>
            <button
              className={`bg-green-700 px-2 rounded-lg py-1 hover:bg-green-600 font-semibold ${
                todo.isCompleted ? "hidden" : ""
              }`}
              onClick={handleUpdateAndToggle}
              disabled={todo.isCompleted}
            >
              {!isEditable ? "Edit" : "Save"}
            </button>
          </div>
          <div>
            <button
              className="bg-red-700 px-2 rounded-lg py-1 hover:bg-red-600 font-semibold"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
