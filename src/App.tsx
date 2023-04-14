import './App.css';
import PageList from './pages/PageList';
import PageEdit, { loader as editLoader } from './pages/PageEdit';
import TodoContext from './context/TodoContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { TodoType } from './pages/components/Todo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageList />,
  },
  {
    path: 'todo/create',
    element: <PageEdit />,
  },
  {
    path: 'todo/:todoId',
    element: <PageEdit />,
    loader: editLoader,
  },
]);

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const removeTodo = useCallback((todoId: number) => {
    setTodos(prev => prev.filter(t => t.id !== todoId));
  }, []);
  const addTodo = useCallback((todo: TodoType) => {
    setTodos(prev => [...prev, todo]);
  }, []);
  const toggleTodo = useCallback((todoId: number) => {
    setTodos(prev =>
      prev.map(t => {
        if (t.id === todoId) {
          return { ...t, isDone: !t.isDone };
        }
        return t;
      }),
    );
  }, []);
  return (
    <div className="App">
      <TodoContext.Provider value={{ todos, removeTodo, addTodo, toggleTodo }}>
        <RouterProvider router={router} />
      </TodoContext.Provider>
    </div>
  );
};

export default App;
