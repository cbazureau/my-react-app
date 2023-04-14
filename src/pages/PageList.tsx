import { Fragment, useContext } from 'react';
import TodoContext from '../context/TodoContext';
import Todo from './components/Todo';
import TodoBottomBar from './components/TodoBottomBar';

const PageList = () => {
  const { todos, removeTodo, toggleTodo } = useContext(TodoContext);

  return (
    <Fragment>
      <ul>
        {todos.map(todo => (
          <li>
            <Todo todo={todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
          </li>
        ))}
      </ul>
      <TodoBottomBar />
    </Fragment>
  );
};

export default PageList;
