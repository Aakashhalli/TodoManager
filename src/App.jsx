import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import { TodoProvider } from "./TodoContexts/TodoContext";
import TodoItem from "./Components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText, todoDate) => {
    setTodos((prev) => [
      { id: Date.now(), todo: todoText, date: todoDate, isCompleted: false },
      ...prev,
    ]);
  };

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((eachTodo) =>
        eachTodo.id === id
          ? { ...eachTodo, isCompleted: !eachTodo.isCompleted }
          : eachTodo
      )
    );
  };

  const updateTodoText = (id, todoText) => {
    setTodos((prev) =>
      prev.map((eachTodo) =>
        eachTodo.id === id ? { ...eachTodo, todo: todoText } : eachTodo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((eachTodo) => !(eachTodo.id === id)));
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodoText, toggleCompleted, deleteTodo }}
    >
      <div className="bg-[#172842] h-[100vh] w-[100vw] py-8">
        <div className="w-full max-w-2xl mx-auto shadow-xl rounded-lg px-4 py-3 text-white">
          <h1 className="text-3xl font-bold text-center sm:mb-8 sm:mt-2 mb-14 mt-8">
            Todo Manager
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3 w-full justify-center">
            {todos.map((eachTodo) => (
              <div key={eachTodo.id}>
                <TodoItem todo={eachTodo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
