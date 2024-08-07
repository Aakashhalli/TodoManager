import React, { useState } from "react";
import { useTodo } from "../TodoContexts/TodoContext";

function TodoForm() {
  const [todoText, setTodo] = useState("");
  const [todoDate, setDate] = useState("");

  const { addTodo } = useTodo();

  const callAddTodo = (e) => {
    e.preventDefault();
    addTodo(todoText, todoDate);
    setTodo("");
    setDate("");
  };

  return (
    <form className="flex" onSubmit={callAddTodo}>
      <input
        type="text"
        required
        value={todoText}
        placeholder="Write Todo..."
        className="w-full border-none rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-2"
        onChange={(e) => setTodo(e.target.value)}
      />
      <input
        type="date"
        className="bg-white/20 outline-none"
        required
        value={todoDate}
        onChange={(e) => setDate(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
