import { createContext } from "react";
import { TodoType } from "../pages/components/Todo";

type Context = {
  todos: TodoType[];
  addTodo: (todo: TodoType) => void;
  removeTodo: (todoId: number) => void;
  toggleTodo: (todoId: number) => void;
};

const TodoContext = createContext<Context>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  toggleTodo: () => {},
});

export default TodoContext;
