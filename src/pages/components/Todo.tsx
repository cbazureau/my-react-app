export type TodoType = {
  id: number;
  text: string;
  isDone: boolean;
};

type TodoProps = {
  todo: TodoType;
  removeTodo: (todoId: number) => void;
  toggleTodo: (todoId: number) => void;
};

const Todo = ({ todo, removeTodo, toggleTodo }: TodoProps) => (
  <div>
    {todo.text} <button onClick={() => removeTodo(todo.id)}>Remove</button>{' '}
    <button onClick={() => toggleTodo(todo.id)}>{todo.isDone ? '✅' : '❌'}</button>
  </div>
);

export default Todo;
