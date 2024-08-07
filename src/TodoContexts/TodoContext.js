import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [],
  addTodo: (todoText, todoDate) => {},
  updateTodoText: (id, todoText, todoDate) => {},
  toggleCompleted: (id) => {},
  deleteTodo: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
